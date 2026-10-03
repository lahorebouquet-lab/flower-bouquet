const fs = require('fs');
const path = require('path');
const https = require('https');

const CACHE_DIR = path.join(__dirname, 'cache');
if (!fs.existsSync(CACHE_DIR)) fs.mkdirSync(CACHE_DIR, { recursive: true });

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getUrlHash(url) {
  let hash = 0;
  for (let i = 0; i < url.length; i++) {
    hash = ((hash << 5) - hash) + url.charCodeAt(i);
    hash |= 0;
  }
  return Buffer.from(url.replace(/[^a-zA-Z0-9]/g, '_')).slice(-100).toString() + '_' + Math.abs(hash);
}

function fetchWithCache(url) {
  return new Promise(async (resolve) => {
    const filename = path.join(CACHE_DIR, getUrlHash(url) + '.txt');
    if (fs.existsSync(filename)) {
      try {
        const cached = JSON.parse(fs.readFileSync(filename, 'utf-8'));
        return resolve(cached);
      } catch (e) {}
    }

    console.log(`[FETCH] ${url}`);
    await sleep(1000); // 1.0s polite crawl delay

    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 (LahoreBouquet-Auditor/1.0)',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9'
      }
    };

    https.get(url, options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const result = {
          url,
          statusCode: res.statusCode,
          headers: res.headers,
          body: data
        };
        fs.writeFileSync(filename, JSON.stringify(result), 'utf-8');
        resolve(result);
      });
    }).on('error', (err) => {
      resolve({ url, statusCode: 0, error: err.message, body: '' });
    });
  });
}

function cleanText(str) {
  if (!str) return '';
  return str.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

function parsePage(url, html, statusCode) {
  if (!html) {
    return {
      url,
      statusCode,
      title: '',
      metaDescription: '',
      canonical: '',
      metaRobots: '',
      h1: '',
      h2: [],
      h3: [],
      ogTitle: '',
      ogDescription: '',
      ogImage: '',
      twitterMetadata: {},
      jsonLd: [],
      breadcrumbs: [],
      internalLinks: [],
      externalLinks: [],
      imageUrls: [],
      imageAlts: [],
      productName: '',
      price: '',
      availability: '',
      productType: '',
      productTags: [],
      category: '',
      contentSummary: ''
    };
  }

  // Title
  const titleMatch = html.match(/<title[^>]*>([^<]*)<\/title>/i);
  const title = titleMatch ? cleanText(titleMatch[1]) : '';

  // Meta description
  const metaDescMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i) ||
                        html.match(/<meta[^>]*content=["']([^"']*)["'][^>]*name=["']description["']/i);
  const metaDescription = metaDescMatch ? cleanText(metaDescMatch[1]) : '';

  // Canonical
  const canMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
  const canonical = canMatch ? canMatch[1] : '';

  // Meta robots
  const robotsMatch = html.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']*)["']/i);
  const metaRobots = robotsMatch ? cleanText(robotsMatch[1]) : 'index, follow';

  // H1, H2, H3
  const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => cleanText(m[1])).filter(Boolean);
  const h2Matches = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => cleanText(m[1])).filter(Boolean);
  const h3Matches = [...html.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>/gi)].map(m => cleanText(m[1])).filter(Boolean);

  // Open Graph
  const ogTitleMatch = html.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']*)["']/i);
  const ogDescMatch = html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']*)["']/i);
  const ogImgMatch = html.match(/<meta[^>]*property=["']og:image["'][^>]*content=["']([^"']*)["']/i);
  const ogTitle = ogTitleMatch ? cleanText(ogTitleMatch[1]) : '';
  const ogDescription = ogDescMatch ? cleanText(ogDescMatch[1]) : '';
  const ogImage = ogImgMatch ? ogImgMatch[1] : '';

  // Twitter
  const twCardMatch = html.match(/<meta[^>]*name=["']twitter:card["'][^>]*content=["']([^"']*)["']/i);
  const twTitleMatch = html.match(/<meta[^>]*name=["']twitter:title["'][^>]*content=["']([^"']*)["']/i);
  const twitterMetadata = {
    card: twCardMatch ? twCardMatch[1] : '',
    title: twTitleMatch ? cleanText(twTitleMatch[1]) : ''
  };

  // JSON-LD
  const jsonLdScripts = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  const jsonLd = [];
  for (const s of jsonLdScripts) {
    try {
      jsonLd.push(JSON.parse(s[1].trim()));
    } catch (e) {
      // malformed JSON-LD
    }
  }

  // Internal & External Links
  const linkMatches = [...html.matchAll(/<a[^>]*href=["']([^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi)];
  const internalLinks = [];
  const externalLinks = [];
  for (const lm of linkMatches) {
    const rawHref = lm[1].trim();
    const anchorText = cleanText(lm[2]);
    if (!rawHref || rawHref.startsWith('#') || rawHref.startsWith('javascript:')) continue;

    if (rawHref.startsWith('/') || rawHref.startsWith('https://flowerbouquet.pk')) {
      internalLinks.push({ href: rawHref, anchor: anchorText });
    } else if (rawHref.startsWith('http')) {
      externalLinks.push({ href: rawHref, anchor: anchorText });
    }
  }

  // Images & Alt texts
  const imgMatches = [...html.matchAll(/<img[^>]*src=["']([^"']*)["'][^>]*alt=["']([^"']*)["']/gi)];
  const imgMatches2 = [...html.matchAll(/<img[^>]*alt=["']([^"']*)["'][^>]*src=["']([^"']*)["']/gi)];
  const imageUrls = [];
  const imageAlts = [];
  for (const im of imgMatches) {
    imageUrls.push(im[1]);
    imageAlts.push(cleanText(im[2]));
  }
  for (const im of imgMatches2) {
    if (!imageUrls.includes(im[2])) {
      imageUrls.push(im[2]);
      imageAlts.push(cleanText(im[1]));
    }
  }

  // E-commerce metadata (from JSON-LD or microdata or page)
  let productName = h1Matches[0] || '';
  let price = '';
  let availability = '';
  let productType = '';
  let category = '';

  for (const ld of jsonLd) {
    if (ld['@type'] === 'Product' || (Array.isArray(ld['@graph']) && ld['@graph'].some(g => g['@type'] === 'Product'))) {
      const prod = ld['@type'] === 'Product' ? ld : ld['@graph'].find(g => g['@type'] === 'Product');
      if (prod) {
        productName = prod.name || productName;
        category = prod.category || category;
        if (prod.offers) {
          const offer = Array.isArray(prod.offers) ? prod.offers[0] : prod.offers;
          price = offer.price ? `${offer.priceCurrency || 'PKR'} ${offer.price}` : price;
          availability = offer.availability || availability;
        }
      }
    }
  }

  // Fallback price match if not found in JSON-LD
  if (!price) {
    const priceMatch = html.match(/Rs\.?\s*([0-9,]+)/i);
    if (priceMatch) price = `PKR ${priceMatch[1]}`;
  }

  // Visible content summary (clean text excerpt)
  const bodyMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i) || html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  const cleanBody = bodyMatch ? cleanText(bodyMatch[1]).slice(0, 500) : '';

  return {
    url,
    statusCode,
    title,
    metaDescription,
    canonical: canonical || url,
    metaRobots,
    h1: h1Matches.join(' | '),
    h2: h2Matches.slice(0, 10),
    h3: h3Matches.slice(0, 10),
    ogTitle,
    ogDescription,
    ogImage,
    twitterMetadata,
    jsonLd,
    breadcrumbs: [],
    internalLinks: internalLinks.slice(0, 50),
    externalLinks: externalLinks.slice(0, 20),
    imageUrls: imageUrls.slice(0, 15),
    imageAlts: imageAlts.slice(0, 15),
    productName,
    price,
    availability,
    productType,
    productTags: [],
    category,
    contentSummary: cleanBody
  };
}

module.exports = { fetchWithCache, parsePage, sleep };
