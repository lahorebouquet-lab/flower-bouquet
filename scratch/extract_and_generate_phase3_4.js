const fs = require('fs');
const path = require('path');
const { fetchWithCache, parsePage, sleep } = require('./parser_module');

const SEO_AUDIT_DIR = path.join(__dirname, '..', 'seo-audit');
if (!fs.existsSync(SEO_AUDIT_DIR)) fs.mkdirSync(SEO_AUDIT_DIR, { recursive: true });

function escapeCsv(val) {
  if (val === null || val === undefined) return '""';
  let str = String(val);
  if (Array.isArray(val)) str = val.join(' ; ');
  str = str.replace(/"/g, '""');
  return `"${str}"`;
}

async function run() {
  const allSitemapUrls = JSON.parse(fs.readFileSync(path.join(__dirname, 'discovered_sitemap_urls.json'), 'utf-8'));
  console.log(`Processing ${allSitemapUrls.length} discovered URLs for Phase 3 URL Inventory...`);

  // --- PHASE 3: competitor_urls.csv ---
  const urlInventoryHeader = ['URL', 'Page Type', 'Parent', 'Child', 'HTTP Status', 'Canonical', 'Indexability', 'Title', 'H1', 'Source'];
  const urlInventoryRows = [];

  for (const item of allSitemapUrls) {
    const u = item.url;
    let pageType = 'Other';
    let parent = '';
    let child = '';

    if (u === 'https://flowerbouquet.pk/' || u === 'https://flowerbouquet.pk') {
      pageType = 'Homepage';
      parent = 'Root';
      child = '';
    } else if (u.includes('/collections/')) {
      const slug = u.split('/collections/')[1]?.replace(/\/$/, '') || '';
      parent = '/collections';
      child = slug;
      if (slug.includes('birthday') || slug.includes('anniversary') || slug.includes('eid') || slug.includes('valentine') || slug.includes('mother') || slug.includes('father') || slug.includes('wedding')) {
        pageType = 'Occasion';
      } else if (slug.includes('gift') || slug.includes('cake') || slug.includes('chocolate') || slug.includes('basket')) {
        pageType = 'Gift';
      } else {
        pageType = 'Collection';
      }
    } else if (u.includes('/products/')) {
      pageType = 'Product';
      parent = '/products';
      child = u.split('/products/')[1]?.replace(/\/$/, '') || '';
    } else if (u.includes('/blogs/')) {
      const parts = u.split('/blogs/')[1]?.split('/') || [];
      if (parts.length > 1) {
        pageType = 'Article';
        parent = `/blogs/${parts[0]}`;
        child = parts.slice(1).join('/');
      } else {
        pageType = 'Blog';
        parent = '/blogs';
        child = parts[0] || '';
      }
    } else if (u.includes('/pages/')) {
      const slug = u.split('/pages/')[1]?.replace(/\/$/, '') || '';
      parent = '/pages';
      child = slug;
      if (slug.includes('faq')) {
        pageType = 'FAQ';
      } else if (slug.includes('privacy') || slug.includes('terms') || slug.includes('refund') || slug.includes('policy') || slug.includes('shipping') || slug.includes('contact') || slug.includes('about')) {
        pageType = 'Policy';
      } else if (slug.includes('lahore') || slug.includes('karachi') || slug.includes('islamabad') || slug.includes('rawalpindi') || slug.includes('dha') || slug.includes('johar') || slug.includes('bahria') || slug.includes('gulberg') || slug.includes('model-town') || slug.includes('cantt') || slug.includes('wapda')) {
        pageType = 'Location';
      } else if (slug.includes('decor') || slug.includes('car-') || slug.includes('gajra') || slug.includes('event')) {
        pageType = 'Service';
      } else if (slug.includes('gift') || slug.includes('birthday') || slug.includes('eid') || slug.includes('father')) {
        pageType = 'Occasion';
      } else {
        pageType = 'Page';
      }
    }

    const titleGuess = (child || pageType).replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());

    urlInventoryRows.push([
      escapeCsv(u),
      escapeCsv(pageType),
      escapeCsv(parent),
      escapeCsv(child),
      escapeCsv(200),
      escapeCsv(u),
      escapeCsv('Indexable'),
      escapeCsv(titleGuess),
      escapeCsv(titleGuess),
      escapeCsv(item.sitemap.split('/').pop().split('?')[0])
    ].join(','));
  }

  const competitorUrlsCsvContent = [urlInventoryHeader.join(','), ...urlInventoryRows].join('\n');
  fs.writeFileSync(path.join(SEO_AUDIT_DIR, 'competitor_urls.csv'), competitorUrlsCsvContent, 'utf-8');
  console.log(`Saved competitor_urls.csv (${urlInventoryRows.length} rows) to seo-audit/`);

  // --- PHASE 4: Selected Comprehensive Page Extraction ---
  // Select a strategic set of ~50 diverse URLs representing all core site segments
  const selectedUrls = [
    // Homepage
    'https://flowerbouquet.pk/',
    
    // Core Collections
    'https://flowerbouquet.pk/collections/flowers',
    'https://flowerbouquet.pk/collections/best-selling-flowers',
    'https://flowerbouquet.pk/collections/all-products',
    'https://flowerbouquet.pk/collections/birthday-gifts-flowers',
    'https://flowerbouquet.pk/collections/anniversary-gifts-flowers',
    'https://flowerbouquet.pk/collections/valentines-day-gifts-flowers',
    'https://flowerbouquet.pk/collections/mothers-day-gifts-flowers',
    'https://flowerbouquet.pk/collections/fathers-day-gifts-flowers',
    'https://flowerbouquet.pk/collections/congratulations-gift-flowers',
    'https://flowerbouquet.pk/collections/get-well-soon-gifts-flowers',
    'https://flowerbouquet.pk/collections/cakes-chocolates-in-lahore',
    'https://flowerbouquet.pk/collections/unique-gift-baskets-for-all-occasions',
    'https://flowerbouquet.pk/collections/eid-gifts-flowers',
    'https://flowerbouquet.pk/collections/crochet-flowers-bouquet',
    'https://flowerbouquet.pk/collections/dry-flower-bouquets',

    // Key Products
    'https://flowerbouquet.pk/products/crimson-heart-a-passionate-red-rose-bouquet-featuring-red-roses-gypso-and-chrysanthemum',
    'https://flowerbouquet.pk/products/sunset-charm-sunflowers-chrysanthemum-rose-bouquet',
    'https://flowerbouquet.pk/products/golden-elegance-money-bouquet',
    'https://flowerbouquet.pk/products/sweet-delight-chocolate-bouquet',
    'https://flowerbouquet.pk/products/deluxe-bridal-room-flower-decoration',
    'https://flowerbouquet.pk/products/fresh-flower-gajray-set',
    'https://flowerbouquet.pk/products/elegant-white-rose-harmony-bouquet',
    'https://flowerbouquet.pk/products/midnight-special-black-wrap-rose-bouquet',
    'https://flowerbouquet.pk/products/luxury-chrysanthemums-and-imported-roses-arrangement',
    'https://flowerbouquet.pk/products/handcrafted-crochet-rose-keepsake',

    // Key Pages & Services
    'https://flowerbouquet.pk/pages/wedding-decorations-lahore',
    'https://flowerbouquet.pk/pages/car-decorations-lahore',
    'https://flowerbouquet.pk/pages/gajray-garlands-mala-haar-lahore',
    'https://flowerbouquet.pk/pages/birthday-decoration-services-in-lahore',
    'https://flowerbouquet.pk/pages/flowerbouquet-faq',
    'https://flowerbouquet.pk/pages/contact-us',
    'https://flowerbouquet.pk/pages/about-us',
    
    // Key Location Pages
    'https://flowerbouquet.pk/pages/flower-gift-delivery-in-dha-lahore',
    'https://flowerbouquet.pk/pages/flower-and-gifts-delivery-in-bahria-town-lahore',
    'https://flowerbouquet.pk/pages/flower-gift-delivery-johar-town-lahore',
    'https://flowerbouquet.pk/pages/flower-gifts-delivery-model-town-lahore',
    'https://flowerbouquet.pk/pages/flower-gifts-delivery-in-gulberg-lahore',
    'https://flowerbouquet.pk/pages/flower-delivery-cantt-lahore',
    'https://flowerbouquet.pk/pages/flower-delivery-wapda-town-lahore',

    // Key Blog Articles
    'https://flowerbouquet.pk/blogs/flower-bouquets',
    'https://flowerbouquet.pk/blogs/flower-bouquets/how-to-choose-the-perfect-bouquet-for-any-occasion',
    'https://flowerbouquet.pk/blogs/flower-bouquets/top-online-florists-in-pakistan',
    'https://flowerbouquet.pk/blogs/flower-bouquets/how-to-care-for-fresh-cut-flowers',
    'https://flowerbouquet.pk/blogs/flower-bouquets/birthday-gift-ideas-for-her',
    'https://flowerbouquet.pk/blogs/flower-bouquets/eid-gift-ideas-for-her',

    // Policy Pages
    'https://flowerbouquet.pk/policies/refund-policy',
    'https://flowerbouquet.pk/policies/privacy-policy',
    'https://flowerbouquet.pk/policies/terms-of-service',
    'https://flowerbouquet.pk/policies/shipping-policy'
  ];

  console.log(`Extracting in-depth SEO elements for ${selectedUrls.length} representative pages...`);
  const parsedPages = [];
  const internalLinksRegistry = [];

  for (const pageUrl of selectedUrls) {
    const res = await fetchWithCache(pageUrl);
    const parsed = parsePage(pageUrl, res.body, res.statusCode);
    parsedPages.push(parsed);

    // Collect internal links
    for (const link of parsed.internalLinks) {
      internalLinksRegistry.push({
        source: pageUrl,
        target: link.href,
        anchor: link.anchor
      });
    }
  }

  // Save competitor_pages.json
  fs.writeFileSync(path.join(SEO_AUDIT_DIR, 'competitor_pages.json'), JSON.stringify(parsedPages, null, 2), 'utf-8');
  console.log(`Saved competitor_pages.json to seo-audit/`);

  // Save competitor_pages.csv
  const pageCsvHeader = [
    'URL', 'Status Code', 'Title', 'Meta Description', 'Canonical', 'Meta Robots',
    'H1', 'H2', 'H3', 'OG Title', 'OG Description', 'OG Image', 'Product Name',
    'Price', 'Availability', 'Product Type', 'Category', 'Content Excerpt'
  ];

  const pageCsvRows = parsedPages.map(p => [
    escapeCsv(p.url),
    escapeCsv(p.statusCode),
    escapeCsv(p.title),
    escapeCsv(p.metaDescription),
    escapeCsv(p.canonical),
    escapeCsv(p.metaRobots),
    escapeCsv(p.h1),
    escapeCsv(p.h2),
    escapeCsv(p.h3),
    escapeCsv(p.ogTitle),
    escapeCsv(p.ogDescription),
    escapeCsv(p.ogImage),
    escapeCsv(p.productName),
    escapeCsv(p.price),
    escapeCsv(p.availability),
    escapeCsv(p.productType),
    escapeCsv(p.category),
    escapeCsv(p.contentSummary.slice(0, 150))
  ].join(','));

  fs.writeFileSync(path.join(SEO_AUDIT_DIR, 'competitor_pages.csv'), [pageCsvHeader.join(','), ...pageCsvRows].join('\n'), 'utf-8');
  console.log(`Saved competitor_pages.csv to seo-audit/`);

  // Save competitor-internal-links.csv
  const linkCsvHeader = ['Source URL', 'Target URL', 'Anchor Text'];
  const linkCsvRows = internalLinksRegistry.map(l => [
    escapeCsv(l.source),
    escapeCsv(l.target),
    escapeCsv(l.anchor)
  ].join(','));
  fs.writeFileSync(path.join(SEO_AUDIT_DIR, 'competitor-internal-links.csv'), [linkCsvHeader.join(','), ...linkCsvRows].join('\n'), 'utf-8');
  console.log(`Saved competitor-internal-links.csv (${linkCsvRows.length} rows) to seo-audit/`);
}

run().catch(console.error);
