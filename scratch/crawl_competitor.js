const fs = require('fs');
const path = require('path');
const https = require('https');

const CACHE_DIR = path.join(__dirname, 'cache');
if (!fs.existsSync(CACHE_DIR)) {
  fs.mkdirSync(CACHE_DIR, { recursive: true });
}

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
  return new Promise(async (resolve, reject) => {
    const filename = path.join(CACHE_DIR, getUrlHash(url) + '.txt');
    if (fs.existsSync(filename)) {
      try {
        const cached = JSON.parse(fs.readFileSync(filename, 'utf-8'));
        return resolve(cached);
      } catch (e) {
        // re-fetch if corrupted
      }
    }

    console.log(`[FETCH] ${url}`);
    await sleep(1100); // 1.1s polite delay

    const options = {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 (SEO-Research-Auditor/1.0)',
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
      console.error(`[ERROR] ${url}:`, err.message);
      resolve({ url, statusCode: 0, error: err.message, body: '' });
    });
  });
}

async function discoverSitemaps() {
  const indexRes = await fetchWithCache('https://flowerbouquet.pk/sitemap.xml');
  const body = indexRes.body;
  const locMatches = [...body.matchAll(/<loc>(https:\/\/[^<]+)<\/loc>/g)].map(m => m[1]);
  console.log(`Discovered ${locMatches.length} child sitemaps in index:`, locMatches);

  const allUrls = [];

  for (const sitemapUrl of locMatches) {
    const smRes = await fetchWithCache(sitemapUrl);
    const smBody = smRes.body;
    
    // Extract url entries
    const urlBlocks = smBody.split('<url>').slice(1);
    console.log(`Sitemap ${sitemapUrl} has ${urlBlocks.length} items`);

    for (const block of urlBlocks) {
      const locMatch = block.match(/<loc>(https:\/\/[^<]+)<\/loc>/);
      const lastmodMatch = block.match(/<lastmod>([^<]+)<\/lastmod>/);
      const imageMatches = [...block.matchAll(/<image:loc>([^<]+)<\/image:loc>/g)].map(m => m[1]);
      const titleMatches = [...block.matchAll(/<image:title>([^<]+)<\/image:title>/g)].map(m => m[1]);

      if (locMatch) {
        allUrls.push({
          url: locMatch[1].trim(),
          sitemap: sitemapUrl,
          lastmod: lastmodMatch ? lastmodMatch[1] : '',
          images: imageMatches,
          imageTitles: titleMatches
        });
      }
    }
  }

  const outSummary = path.join(__dirname, 'discovered_sitemap_urls.json');
  fs.writeFileSync(outSummary, JSON.stringify(allUrls, null, 2), 'utf-8');
  console.log(`Total discovered URLs from all sitemaps: ${allUrls.length}. Saved to ${outSummary}`);
  return allUrls;
}

discoverSitemaps().catch(console.error);
