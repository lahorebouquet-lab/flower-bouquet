const fs = require('fs');
const path = require('path');

const SEO_AUDIT_DIR = path.join(__dirname, '..', 'seo-audit');
const pages = JSON.parse(fs.readFileSync(path.join(SEO_AUDIT_DIR, 'competitor_pages.json'), 'utf-8'));
const allUrls = JSON.parse(fs.readFileSync(path.join(__dirname, 'discovered_sitemap_urls.json'), 'utf-8'));

function escapeCsv(val) {
  if (val === null || val === undefined) return '""';
  let str = String(val);
  if (Array.isArray(val)) str = val.join(' ; ');
  str = str.replace(/"/g, '""');
  return `"${str}"`;
}

// --------------------------------------------------------------------------
// 1. KEYWORD SIGNALS EXTRACTION (Phase 5)
// --------------------------------------------------------------------------
console.log('Extracting keyword signals from competitor pages...');
const stopwords = new Set([
  'the', 'and', 'a', 'an', 'in', 'on', 'at', 'for', 'to', 'of', 'with', 'by', 'is', 'are', 'was', 'were',
  'it', 'this', 'that', 'our', 'your', 'we', 'you', 'from', 'as', 'be', 'or', 'all', 'can', 'will', 'have',
  'has', 'pk', 'com', 'http', 'https', 'flowerbouquet', 'shop', 'online'
]);

const phraseRegistry = new Map();

function addPhrase(phrase, url, element, confidence) {
  const norm = phrase.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, ' ').trim();
  if (!norm || norm.length < 3) return;
  const words = norm.split(' ');
  if (words.length === 1 && stopwords.has(words[0])) return;
  if (words.every(w => stopwords.has(w))) return;

  const key = norm;
  if (!phraseRegistry.has(key)) {
    phraseRegistry.set(key, {
      phrase: norm,
      wordsCount: words.length,
      frequency: 0,
      sources: [],
      confidence: confidence,
      element: element,
      primaryUrl: url
    });
  }
  const entry = phraseRegistry.get(key);
  entry.frequency += 1;
  if (confidence === 'High' || entry.confidence !== 'High') {
    entry.confidence = confidence;
    entry.element = element;
    entry.primaryUrl = url;
  }
  if (!entry.sources.includes(url)) entry.sources.push(url);
}

for (const p of pages) {
  // Title (High confidence)
  if (p.title) {
    const titleClean = p.title.replace(/\|.*$/g, '').replace(/-.*$/g, '').trim();
    addPhrase(titleClean, p.url, 'Title', 'High');
    const parts = titleClean.split(/[,:;]/);
    parts.forEach(part => addPhrase(part, p.url, 'Title', 'High'));
  }

  // H1 (High confidence)
  if (p.h1) {
    p.h1.split('|').forEach(h => addPhrase(h.trim(), p.url, 'H1', 'High'));
  }

  // H2 (Medium confidence)
  if (Array.isArray(p.h2)) {
    p.h2.forEach(h => addPhrase(h, p.url, 'H2', 'Medium'));
  }

  // Meta Description (Medium confidence)
  if (p.metaDescription) {
    p.metaDescription.split(/[.,;]/).forEach(clause => {
      if (clause.trim().split(/\s+/).length <= 5) {
        addPhrase(clause.trim(), p.url, 'Meta Description', 'Medium');
      }
    });
  }

  // Image Alts (Medium/Low confidence)
  if (Array.isArray(p.imageAlts)) {
    p.imageAlts.forEach(alt => {
      if (alt.length > 3 && alt.length < 50) {
        addPhrase(alt, p.url, 'Image Alt', 'Medium');
      }
    });
  }

  // Product Name (High confidence)
  if (p.productName) {
    addPhrase(p.productName, p.url, 'Product Name', 'High');
  }
}

// Categorize intent & topic for phrases
function classifyIntent(phrase) {
  const p = phrase.toLowerCase();
  if (p.includes('price') || p.includes('buy') || p.includes('order') || p.includes('send') || p.includes('delivery')) {
    return 'Transactional';
  }
  if (p.includes('best') || p.includes('bouquet') || p.includes('decor') || p.includes('rose') || p.includes('sunflower') || p.includes('cake') || p.includes('gift')) {
    return 'Commercial';
  }
  if (p.includes('how') || p.includes('what') || p.includes('care') || p.includes('meaning') || p.includes('tips') || p.includes('guide')) {
    return 'Informational';
  }
  if (p.includes('flowerbouquet') || p.includes('lahore bouquet')) {
    return 'Navigational';
  }
  return 'Commercial';
}

function classifyTopic(phrase) {
  const p = phrase.toLowerCase();
  if (p.includes('lahore') || p.includes('dha') || p.includes('gulberg') || p.includes('bahria') || p.includes('johar') || p.includes('karachi') || p.includes('islamabad')) return 'Local';
  if (p.includes('birthday') || p.includes('anniversary') || p.includes('wedding') || p.includes('eid') || p.includes('valentine') || p.includes('mother') || p.includes('father')) return 'Occasion';
  if (p.includes('cake') || p.includes('chocolate') || p.includes('basket') || p.includes('money')) return 'Gift';
  if (p.includes('delivery') || p.includes('same day') || p.includes('midnight') || p.includes('express')) return 'Delivery';
  if (p.includes('rose') || p.includes('sunflower') || p.includes('crochet') || p.includes('dried') || p.includes('gajra') || p.includes('lily') || p.includes('chrysanthemum')) return 'Product';
  return 'Product';
}

const sortedPhrases = [...phraseRegistry.values()]
  .filter(item => item.phrase.split(' ').length <= 6 && item.phrase.length >= 4)
  .sort((a, b) => b.frequency - a.frequency || (b.confidence === 'High' ? 1 : -1));

const keywordSignalsHeader = ['Keyword/Phrase', 'Source URL', 'Source Element', 'Frequency', 'Intent', 'Topic', 'Confidence'];
const keywordSignalsRows = sortedPhrases.slice(0, 300).map(item => [
  escapeCsv(item.phrase),
  escapeCsv(item.primaryUrl),
  escapeCsv(item.element),
  escapeCsv(item.frequency),
  escapeCsv(classifyIntent(item.phrase)),
  escapeCsv(classifyTopic(item.phrase)),
  escapeCsv(item.confidence)
].join(','));

fs.writeFileSync(path.join(SEO_AUDIT_DIR, 'competitor_keyword_signals.csv'), [keywordSignalsHeader.join(','), ...keywordSignalsRows].join('\n'), 'utf-8');
console.log(`Saved competitor_keyword_signals.csv (${keywordSignalsRows.length} rows)`);

// --------------------------------------------------------------------------
// 2. COMPETITOR KEYWORD PAGE MAP (Phase 7)
// --------------------------------------------------------------------------
const pageMapHeader = [
  'URL', 'Page Type', 'Primary Topic', 'Keyword Theme', 'Secondary Themes',
  'Search Intent', 'Commercial Intent', 'Location', 'Occasion',
  'Recommended Equivalent Page For My Website', 'Recommendation'
];

const pageMapRows = pages.map(p => {
  const u = p.url;
  let pageType = 'Collection';
  let primaryTopic = 'Flowers';
  let keywordTheme = p.h1 || p.title;
  let secondaryThemes = (p.h2 || []).slice(0, 3).join(' ; ');
  let intent = 'Commercial';
  let commIntent = 'High';
  let location = 'Lahore';
  let occasion = 'General';
  let myPage = '/';
  let recommendation = 'IMPROVE';

  if (u.includes('/products/')) {
    pageType = 'Product';
    primaryTopic = 'Product SKU';
    intent = 'Transactional';
    myPage = `/products/${p.productName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
    recommendation = 'CREATE';
  } else if (u.includes('/blogs/')) {
    pageType = 'Article';
    primaryTopic = 'Flower Advice & Guides';
    intent = 'Informational';
    commIntent = 'Low/Medium';
    myPage = `/blog/${u.split('/').pop()}`;
    recommendation = 'CREATE';
  } else if (u.includes('/pages/')) {
    if (u.includes('dha') || u.includes('bahria') || u.includes('johar') || u.includes('gulberg') || u.includes('model-town') || u.includes('cantt') || u.includes('wapda')) {
      pageType = 'Location Page';
      primaryTopic = 'Local Delivery Area';
      location = u.split('delivery-')[1]?.replace('-lahore', '').replace(/-/g, ' ') || 'Lahore Area';
      myPage = `/delivery-areas/${location.replace(/\s+/g, '-').toLowerCase()}`;
      recommendation = 'CREATE';
    } else if (u.includes('decor') || u.includes('car-') || u.includes('gajra')) {
      pageType = 'Service Page';
      primaryTopic = 'Event Décor & Services';
      intent = 'Commercial Investigation';
      myPage = `/wedding-decor`;
      recommendation = 'IMPROVE';
    } else if (u.includes('faq')) {
      pageType = 'FAQ';
      primaryTopic = 'Customer Service FAQ';
      intent = 'Informational';
      myPage = `/policies#faqs`;
      recommendation = 'COMBINE';
    } else {
      pageType = 'Doorway / Landing Page';
      primaryTopic = 'Programmatic Variant';
      recommendation = 'IGNORE'; // Do not copy thin doorway pages!
      myPage = 'N/A';
    }
  } else if (u.includes('/collections/')) {
    pageType = 'Collection';
    if (u.includes('birthday')) {
      occasion = 'Birthday';
      myPage = '/occasions/birthday';
      recommendation = 'IMPROVE';
    } else if (u.includes('anniversary')) {
      occasion = 'Anniversary';
      myPage = '/occasions/anniversary';
      recommendation = 'IMPROVE';
    } else if (u.includes('cakes') || u.includes('chocolates') || u.includes('baskets')) {
      occasion = 'Gift';
      myPage = '/collections/gifts-cakes';
      recommendation = 'IMPROVE';
    } else if (u.includes('eid')) {
      occasion = 'Eid';
      myPage = '/occasions/eid-gifts';
      recommendation = 'CREATE';
    } else {
      myPage = `/collections/${u.split('/collections/')[1]}`;
      recommendation = 'IMPROVE';
    }
  }

  return [
    escapeCsv(u),
    escapeCsv(pageType),
    escapeCsv(primaryTopic),
    escapeCsv(keywordTheme),
    escapeCsv(secondaryThemes),
    escapeCsv(intent),
    escapeCsv(commIntent),
    escapeCsv(location),
    escapeCsv(occasion),
    escapeCsv(myPage),
    escapeCsv(recommendation)
  ].join(',');
});

fs.writeFileSync(path.join(SEO_AUDIT_DIR, 'competitor_keyword_page_map.csv'), [pageMapHeader.join(','), ...pageMapRows].join('\n'), 'utf-8');
console.log(`Saved competitor_keyword_page_map.csv (${pageMapRows.length} rows)`);

// --------------------------------------------------------------------------
// 3. KEYWORD MAP WITH SEARCH VOLUME / CPC METRICS (Phase 6)
// --------------------------------------------------------------------------
const keywordMapHeader = [
  'Keyword', 'Intent', 'Search Volume', 'CPC (PKR)', 'Competition', 'Keyword Difficulty', 'Data Type', 'Target URL (Lahore Bouquet)'
];

const targetKeywordsData = [
  { kw: 'flower delivery lahore', intent: 'Transactional', vol: 'Tool verification required (Est. 5,400/mo)', cpc: 'Rs. 45 - 85', comp: 'High', kd: '38', type: 'ESTIMATED/INFERRED', url: 'https://lahorebouquet.com/' },
  { kw: 'send flowers to lahore', intent: 'Transactional', vol: 'Tool verification required (Est. 3,600/mo)', cpc: 'Rs. 50 - 95', comp: 'High', kd: '35', type: 'ESTIMATED/INFERRED', url: 'https://lahorebouquet.com/' },
  { kw: 'flower bouquet price in lahore', intent: 'Commercial', vol: 'Tool verification required (Est. 2,900/mo)', cpc: 'Rs. 30 - 60', comp: 'Medium', kd: '26', type: 'ESTIMATED/INFERRED', url: 'https://lahorebouquet.com/prices' },
  { kw: 'red rose bouquet lahore', intent: 'Commercial/Transactional', vol: 'Tool verification required (Est. 2,400/mo)', cpc: 'Rs. 40 - 75', comp: 'Medium', kd: '29', type: 'ESTIMATED/INFERRED', url: 'https://lahorebouquet.com/roses/red-roses' },
  { kw: 'birthday flowers lahore', intent: 'Transactional', vol: 'Tool verification required (Est. 1,900/mo)', cpc: 'Rs. 35 - 70', comp: 'Medium', kd: '24', type: 'ESTIMATED/INFERRED', url: 'https://lahorebouquet.com/occasions/birthday' },
  { kw: 'money bouquet lahore', intent: 'Commercial/Transactional', vol: 'Tool verification required (Est. 1,800/mo)', cpc: 'Rs. 25 - 55', comp: 'Low', kd: '18', type: 'ESTIMATED/INFERRED', url: 'https://lahorebouquet.com/collections/money-bouquets' },
  { kw: 'wedding car decoration lahore', intent: 'Commercial/Service', vol: 'Tool verification required (Est. 1,600/mo)', cpc: 'Rs. 50 - 110', comp: 'Medium', kd: '22', type: 'ESTIMATED/INFERRED', url: 'https://lahorebouquet.com/wedding-decor' },
  { kw: 'bridal room decoration lahore', intent: 'Commercial/Service', vol: 'Tool verification required (Est. 1,400/mo)', cpc: 'Rs. 60 - 120', comp: 'Medium', kd: '20', type: 'ESTIMATED/INFERRED', url: 'https://lahorebouquet.com/wedding-decor' },
  { kw: 'flower delivery dha lahore', intent: 'Local/Transactional', vol: 'Tool verification required (Est. 1,300/mo)', cpc: 'Rs. 55 - 100', comp: 'Medium', kd: '21', type: 'ESTIMATED/INFERRED', url: 'https://lahorebouquet.com/delivery-areas/dha' },
  { kw: 'sunflower bouquet lahore', intent: 'Commercial', vol: 'Tool verification required (Est. 1,100/mo)', cpc: 'Rs. 30 - 65', comp: 'Low', kd: '16', type: 'ESTIMATED/INFERRED', url: 'https://lahorebouquet.com/collections/sunflowers' },
  { kw: 'midnight flower delivery lahore', intent: 'Transactional', vol: 'Tool verification required (Est. 950/mo)', cpc: 'Rs. 65 - 130', comp: 'Medium', kd: '25', type: 'ESTIMATED/INFERRED', url: 'https://lahorebouquet.com/delivery-areas' },
  { kw: 'fresh flower gajray lahore', intent: 'Commercial', vol: 'Tool verification required (Est. 880/mo)', cpc: 'Rs. 20 - 45', comp: 'Low', kd: '14', type: 'ESTIMATED/INFERRED', url: 'https://lahorebouquet.com/wedding-decor' },
  { kw: 'crochet flowers bouquet pakistan', intent: 'Commercial', vol: 'Tool verification required (Est. 800/mo)', cpc: 'Rs. 25 - 50', comp: 'Low', kd: '12', type: 'ESTIMATED/INFERRED', url: 'https://lahorebouquet.com/crochet-bouquets' },
  { kw: 'flower delivery gulberg lahore', intent: 'Local/Transactional', vol: 'Tool verification required (Est. 750/mo)', cpc: 'Rs. 45 - 80', comp: 'Medium', kd: '19', type: 'ESTIMATED/INFERRED', url: 'https://lahorebouquet.com/delivery-areas/gulberg' },
  { kw: 'flower delivery bahria town lahore', intent: 'Local/Transactional', vol: 'Tool verification required (Est. 700/mo)', cpc: 'Rs. 45 - 85', comp: 'Low', kd: '17', type: 'ESTIMATED/INFERRED', url: 'https://lahorebouquet.com/delivery-areas/bahria-town' },
  { kw: 'flowers for anniversary pakistan', intent: 'Occasion/Commercial', vol: 'Tool verification required (Est. 650/mo)', cpc: 'Rs. 40 - 75', comp: 'Low', kd: '15', type: 'ESTIMATED/INFERRED', url: 'https://lahorebouquet.com/occasions/anniversary' },
  { kw: 'how to keep fresh flowers alive longer', intent: 'Informational', vol: 'Tool verification required (Est. 1,200/mo)', cpc: 'Rs. 10 - 25', comp: 'Low', kd: '11', type: 'ESTIMATED/INFERRED', url: 'https://lahorebouquet.com/blog/flower-care-guide-pakistan' },
  { kw: 'best flowers for mothers day in pakistan', intent: 'Informational/Commercial', vol: 'Tool verification required (Est. 900/mo)', cpc: 'Rs. 30 - 60', comp: 'Low', kd: '14', type: 'ESTIMATED/INFERRED', url: 'https://lahorebouquet.com/blog/mothers-day-flower-guide' }
];

const keywordMapRows = targetKeywordsData.map(k => [
  escapeCsv(k.kw),
  escapeCsv(k.intent),
  escapeCsv(k.vol),
  escapeCsv(k.cpc),
  escapeCsv(k.comp),
  escapeCsv(k.kd),
  escapeCsv(k.type),
  escapeCsv(k.url)
].join(','));

fs.writeFileSync(path.join(SEO_AUDIT_DIR, 'keyword-map.csv'), [keywordMapHeader.join(','), ...keywordMapRows].join('\n'), 'utf-8');
console.log(`Saved keyword-map.csv (${keywordMapRows.length} rows)`);

// --------------------------------------------------------------------------
// 4. CONTENT GAP ANALYSIS (Phase 9)
// --------------------------------------------------------------------------
const contentGapHeader = [
  'Gap', 'Competitor Evidence', 'My Current Coverage', 'Opportunity', 'Search Intent', 'Recommended Page', 'Priority'
];

const contentGaps = [
  {
    gap: 'Informational Blog / Guides Content',
    evidence: 'Competitor has 430 blog posts (/blogs/flower-bouquets/...) covering gifting tips, care advice, seasonal flower guides',
    coverage: 'Zero articles, zero guides in current codebase',
    opportunity: 'Capture top-of-funnel informational queries and build domain authority / topical map',
    intent: 'Informational',
    page: '/blog & /blog/how-to-keep-flowers-fresh-in-lahore-heat',
    priority: 'P1'
  },
  {
    gap: 'Dedicated Suburb/Locality Delivery Pages',
    evidence: 'Competitor generated thousands of location landing pages (DHA phases, Bahria, Gulberg, Johar Town, Model Town)',
    coverage: 'Only 1 dedicated page (/delivery-areas/dha). Other areas only mentioned in text list',
    opportunity: 'Create high-quality, non-doorway local pages for Gulberg, Bahria Town, Johar Town, Model Town, Cantt',
    intent: 'Local / Transactional',
    page: '/delivery-areas/gulberg, /delivery-areas/bahria-town, /delivery-areas/johar-town',
    priority: 'P0'
  },
  {
    gap: 'Gajray, Mala & Floral Jewellery Dedicated Service',
    evidence: 'Competitor has dedicated ranking page: /pages/gajray-garlands-mala-haar-lahore',
    coverage: 'Bundled inside wedding-decor with minimal text',
    opportunity: 'Capture high-volume wedding season searches for fresh motia/rose gajray and mehndi jewellery in Lahore',
    intent: 'Commercial / Transactional',
    page: '/collections/fresh-flower-gajray-mehndi-jewellery',
    priority: 'P1'
  },
  {
    gap: 'Eid & Islamic Occasion Collections',
    evidence: 'Competitor has dedicated collections for Eid ul Fitr & Eid ul Adha (/collections/eid-gifts-flowers)',
    coverage: 'No dedicated Eid page currently active',
    opportunity: 'Seasonal surge in family gifting, fruit-and-flower baskets, and sweets delivery in Lahore',
    intent: 'Seasonal / Occasion',
    page: '/occasions/eid-gifts',
    priority: 'P2'
  },
  {
    gap: 'Corporate & Bulk Floral Gifting',
    evidence: 'Competitor ranks for corporate gifting, office flower subscription, and event floral setups',
    coverage: 'No corporate B2B page or inquiry form',
    opportunity: 'Capture high-ticket recurring orders from corporate offices in Gulberg, DHA, and MM Alam Road',
    intent: 'Commercial B2B',
    page: '/corporate-flower-delivery-lahore',
    priority: 'P2'
  },
  {
    gap: 'Flower Care & Longevity FAQs / AEO',
    evidence: 'Competitor blogs address flower food, water replacement, and stem trimming',
    coverage: 'Generic delivery FAQs only on homepage',
    opportunity: 'Win Google AI Overviews and Featured Snippets for "how long do imported roses last in Lahore"',
    intent: 'Informational / AEO',
    page: '/flower-care-guide',
    priority: 'P1'
  },
  {
    gap: 'Product Catalog Depth (830 SKUs vs 28 SKUs)',
    evidence: 'Competitor has 830 products spanning chocolates, custom hampers, plushies, single stems, mixed crates',
    coverage: '28 curated products',
    opportunity: 'Expand SKU variations systematically (12 stems, 24 stems, 50 stems, hamper bundles)',
    intent: 'Transactional',
    page: '/bouquets, /roses, /gifts-and-cakes',
    priority: 'P1'
  }
];

const contentGapRows = contentGaps.map(g => [
  escapeCsv(g.gap),
  escapeCsv(g.evidence),
  escapeCsv(g.coverage),
  escapeCsv(g.opportunity),
  escapeCsv(g.intent),
  escapeCsv(g.page),
  escapeCsv(g.priority)
].join(','));

fs.writeFileSync(path.join(SEO_AUDIT_DIR, 'content-gap.csv'), [contentGapHeader.join(','), ...contentGapRows].join('\n'), 'utf-8');
console.log(`Saved content-gap.csv (${contentGapRows.length} rows)`);

// --------------------------------------------------------------------------
// 5. TECHNICAL SEO ISSUES (Phase 16)
// --------------------------------------------------------------------------
const techIssuesHeader = [
  'Issue', 'URL', 'Severity', 'Evidence', 'Recommended Fix', 'Implementation Status'
];

const techIssues = [
  {
    issue: 'Competitor Domain in Root metadataBase',
    url: 'https://lahorebouquet.com/ (app/layout.tsx:50)',
    severity: 'P0 - Critical',
    evidence: 'metadataBase: new URL("https://flowerbouquet.pk")',
    fix: 'Change metadataBase to new URL("https://lahorebouquet.com")',
    status: 'Ready for Implementation'
  },
  {
    issue: 'Competitor Domain in XML Sitemap',
    url: 'https://lahorebouquet.com/sitemap.xml (app/sitemap.ts:5)',
    severity: 'P0 - Critical',
    evidence: 'const baseUrl = "https://flowerbouquet.pk";',
    fix: 'Change baseUrl to "https://lahorebouquet.com"',
    status: 'Ready for Implementation'
  },
  {
    issue: 'Competitor Domain in Product Schema & Image URLs',
    url: 'https://lahorebouquet.com/products/[id] (app/products/[id]/page.tsx:110, 115)',
    severity: 'P0 - Critical',
    evidence: '"image": "https://flowerbouquet.pk${product.image}" & "url": "https://flowerbouquet.pk/products/${product.slug}"',
    fix: 'Update to "https://lahorebouquet.com${product.image}" and "https://lahorebouquet.com/products/${product.slug}"',
    status: 'Ready for Implementation'
  },
  {
    issue: 'Third-Party Domain in Price Guide Canonical & Schema',
    url: 'https://lahorebouquet.com/prices (app/prices/page.tsx:24, 30, 62)',
    severity: 'P0 - Critical',
    evidence: 'canonical: "https://lahoreblooms.com/prices/"',
    fix: 'Update canonical and schema URLs to "https://lahorebouquet.com/prices"',
    status: 'Ready for Implementation'
  },
  {
    issue: 'Missing robots.txt Crawler Policy',
    url: 'https://lahorebouquet.com/robots.txt',
    severity: 'P0 - Critical',
    evidence: 'No public/robots.txt or app/robots.ts exists in codebase',
    fix: 'Create app/robots.ts allowing search engines and declaring sitemap at https://lahorebouquet.com/sitemap.xml',
    status: 'Ready for Implementation'
  },
  {
    issue: 'Dual Duplicate Category Taxonomies',
    url: '/bouquets vs /collections/bouquets, /roses vs /collections/roses, etc.',
    severity: 'P1 - High',
    evidence: 'Pages exist under both paths; Header links to /collections/... while Footer/sitemap links to root /...',
    fix: 'Consolidate routing: keep /collections/* as canonical or root routes as canonical and set self-referencing canonical tags',
    status: 'Ready for Implementation'
  },
  {
    issue: 'Missing BreadcrumbList Structured Data',
    url: 'Collection & Product Pages',
    severity: 'P1 - High',
    evidence: 'Only price page has breadcrumb schema; product and category pages lack BreadcrumbList',
    fix: 'Add Schema.org BreadcrumbList JSON-LD to product detail pages and collection hubs',
    status: 'Ready for Implementation'
  },
  {
    issue: 'Client Showcase /presentation Page Indexable',
    url: 'https://lahorebouquet.com/presentation',
    severity: 'P2 - Medium',
    evidence: 'app/presentation/page.tsx has no noindex meta or disallow rule',
    fix: 'Add robots: { index: false, follow: false } or disallow in robots.ts',
    status: 'Ready for Implementation'
  },
  {
    issue: 'Placeholder Phone Number in Business Schema',
    url: 'https://lahorebouquet.com/ (app/page.tsx & app/contact/page.tsx)',
    severity: 'P2 - Medium',
    evidence: 'telephone: "+92 300 1234567"',
    fix: 'Update to official business contact line (+92 300 0000000 or verified store line)',
    status: 'Flagged for User Confirmation'
  }
];

const techIssueRows = techIssues.map(t => [
  escapeCsv(t.issue),
  escapeCsv(t.url),
  escapeCsv(t.severity),
  escapeCsv(t.evidence),
  escapeCsv(t.fix),
  escapeCsv(t.status)
].join(','));

fs.writeFileSync(path.join(SEO_AUDIT_DIR, 'technical-seo-issues.csv'), [techIssuesHeader.join(','), ...techIssueRows].join('\n'), 'utf-8');
console.log(`Saved technical-seo-issues.csv (${techIssueRows.length} rows)`);

// --------------------------------------------------------------------------
// 6. INTERNAL LINK PLAN (Phase 13)
// --------------------------------------------------------------------------
const linkPlanHeader = ['Source', 'Target', 'Anchor', 'Reason', 'Priority'];
const linkPlan = [
  { source: 'Homepage (Hero / Feature Cards)', target: '/prices', anchor: 'Lahore Flower Price Guide', reason: 'Passes homepage authority to commercial high-intent pricing calculator', priority: 'P0' },
  { source: 'Homepage (Collections Grid)', target: '/collections/roses', anchor: 'Imported Roses Lahore', reason: 'Direct category crawl path for core product cluster', priority: 'P0' },
  { source: 'Homepage (Location Hub)', target: '/delivery-areas', anchor: 'Lahore Delivery Areas', reason: 'Contextual bridge to all suburb landing pages', priority: 'P0' },
  { source: '/delivery-areas', target: '/delivery-areas/dha', anchor: 'DHA Lahore Phases 1 to 9', reason: 'Direct crawl path from parent location hub to high-value DHA page', priority: 'P0' },
  { source: '/delivery-areas', target: '/delivery-areas/gulberg', anchor: 'Gulberg & MM Alam Delivery', reason: 'Proximity hub linking to store home territory', priority: 'P0' },
  { source: '/delivery-areas', target: '/delivery-areas/bahria-town', anchor: 'Bahria Town & Lake City', reason: 'Long-distance express delivery cluster', priority: 'P1' },
  { source: '/collections/roses', target: '/roses/red-roses', anchor: 'Fresh Red Roses', reason: 'Parent to subcategory semantic link', priority: 'P1' },
  { source: '/collections/roses', target: '/roses/white-roses', anchor: 'White Rose Arrangements', reason: 'Parent to subcategory semantic link', priority: 'P1' },
  { source: '/prices', target: '/collections/bouquets', anchor: 'Order Fresh Bouquets Online', reason: 'Commercial conversion bridge from price research to catalog', priority: 'P1' },
  { source: '/wedding-decor', target: '/wedding-decor#car-decoration', anchor: 'Wedding Car Décor Packages', reason: 'Deep page jump instead of redundant duplicate links', priority: 'P1' },
  { source: '/wedding-decor', target: '/wedding-decor#bridal-room', anchor: 'Bridal Room Canopy Designs', reason: 'Subservice navigation', priority: 'P1' },
  { source: 'All Product Pages (Breadcrumbs)', target: '/collections/bouquets', anchor: 'Bouquets Collection', reason: 'Hierarchical navigation & topical cluster signal', priority: 'P0' },
  { source: 'All Product Pages (Related)', target: '/products/[slug]', anchor: 'View Matching Bouquet', reason: 'Horizontal cross-linking between related products in same category', priority: 'P1' },
  { source: 'Footer Navigation', target: '/policies', anchor: 'Delivery & Refund Policies', reason: 'Trust signals for visitors & search crawlers', priority: 'P2' }
];

const linkPlanRows = linkPlan.map(l => [
  escapeCsv(l.source),
  escapeCsv(l.target),
  escapeCsv(l.anchor),
  escapeCsv(l.reason),
  escapeCsv(l.priority)
].join(','));

fs.writeFileSync(path.join(SEO_AUDIT_DIR, 'my-internal-link-plan.csv'), [linkPlanHeader.join(','), ...linkPlanRows].join('\n'), 'utf-8');
console.log(`Saved my-internal-link-plan.csv (${linkPlanRows.length} rows)`);

// --------------------------------------------------------------------------
// 7. 90-DAY CONTENT PLAN (Phase 17)
// --------------------------------------------------------------------------
const contentPlanHeader = [
  'Topic', 'Keyword Theme', 'Intent', 'Page Type', 'Suggested URL', 'Title', 'H1', 'Outline', 'CTA', 'Internal Links', 'Priority'
];

const contentPlan = [
  {
    topic: 'Gulberg Flower Delivery',
    kw: 'flower delivery gulberg lahore',
    intent: 'Local / Transactional',
    type: 'Location Page',
    url: '/delivery-areas/gulberg',
    title: 'Fast Flower Delivery in Gulberg Lahore | MM Alam & Liberty',
    h1: 'Fresh Flower Delivery Across Gulberg I, II & III Lahore',
    outline: 'MM Alam proximity advantage (30-60 min) ; Delivery zones (Liberty, Main Boulevard, Mini Market) ; Bestselling Gulberg arrangements ; Same-day & midnight ordering rules',
    cta: 'Order Gulberg Delivery on WhatsApp',
    links: '/delivery-areas, /collections/roses, /prices',
    priority: 'P0'
  },
  {
    topic: 'Bahria Town Lahore Delivery',
    kw: 'flower delivery bahria town lahore',
    intent: 'Local / Transactional',
    type: 'Location Page',
    url: '/delivery-areas/bahria-town',
    title: 'Flower & Gift Delivery in Bahria Town Lahore | Same-Day',
    h1: 'Flower Delivery to Bahria Town & Lake City Lahore',
    outline: 'Sectors A to F coverage ; Temperature controlled van transport via Ring Road ; Delivery schedule (2-4 hrs) ; Popular housewarming & birthday bouquets',
    cta: 'Book Bahria Town Delivery',
    links: '/delivery-areas, /collections/bouquets, /birthday-surprises',
    priority: 'P0'
  },
  {
    topic: 'Johar Town Flower Delivery',
    kw: 'flower delivery johar town lahore',
    intent: 'Local / Transactional',
    type: 'Location Page',
    url: '/delivery-areas/johar-town',
    title: 'Fresh Flowers Delivery Johar Town Lahore | Fast Delivery',
    h1: 'Bouquet & Flower Delivery in Johar Town Lahore',
    outline: 'Phases 1 & 2 coverage ; Shaukat Khanum & Emporium Mall area express routes ; Hospital flower delivery etiquette ; Top floral gifts',
    cta: 'Send Flowers to Johar Town',
    links: '/delivery-areas, /occasions/get-well-and-sorry, /prices',
    priority: 'P1'
  },
  {
    topic: 'Fresh Gajray & Floral Jewellery',
    kw: 'fresh flower gajray lahore',
    intent: 'Commercial / Occasion',
    type: 'Collection / Service',
    url: '/collections/fresh-flower-gajray',
    title: 'Fresh Flower Gajray & Mehndi Jewellery Lahore | Motia & Roses',
    h1: 'Handmade Fresh Flower Gajray & Bridal Floral Jewellery in Lahore',
    outline: 'Fresh jasmine/motia stem sourcing ; Red rose & baby breath wrist cuffs ; Mehndi matha patti and earrings ; Cold packaging for wedding freshness',
    cta: 'Book Wedding Gajray on WhatsApp',
    links: '/wedding-decor, /prices, /occasions/barat-and-walima',
    priority: 'P1'
  },
  {
    topic: 'How to Keep Cut Flowers Fresh in Lahore Climate',
    kw: 'how to keep fresh flowers alive longer',
    intent: 'Informational',
    type: 'Blog / Guide',
    url: '/blog/how-to-keep-flowers-fresh-in-lahore',
    title: 'How to Keep Flower Bouquets Fresh in Lahore Heat (Florist Tips)',
    h1: 'Complete Guide: Keeping Fresh Cut Flowers Alive Longer in Pakistan',
    outline: '45-degree angle stem cuts ; Water changing schedule ; Avoiding AC draft & direct sunlight ; Home flower food recipe (sugar & lemon) ; Revival tricks for drooping roses',
    cta: 'Explore Long-Lasting Hydrated Bouquets',
    links: '/roses/red-roses, /collections/bouquets, /flower-care-guide',
    priority: 'P1'
  },
  {
    topic: 'Anniversary Flowers Guide Pakistan',
    kw: 'best flowers for wedding anniversary pakistan',
    intent: 'Informational / Commercial',
    type: 'Blog / Guide',
    url: '/blog/anniversary-flower-guide-pakistan',
    title: 'Best Anniversary Flowers by Year: 1st, 5th, 10th & 25th Milestones',
    h1: 'The Definitive Anniversary Flower & Bouquet Guide in Pakistan',
    outline: 'Traditional flower meanings by year ; Red roses vs luxury lilies ; Pairing with gourmet cakes & custom greeting cards ; Midnight delivery surprises',
    cta: 'Choose an Anniversary Arrangement',
    links: '/occasions/anniversary, /collections/roses, /gifts-and-cakes',
    priority: 'P2'
  },
  {
    topic: 'Money Bouquet Custom Orders Lahore',
    kw: 'custom money bouquet lahore price',
    intent: 'Commercial / Transactional',
    type: 'Guide & Product Showcase',
    url: '/blog/money-bouquet-designs-and-pricing-lahore',
    title: 'Money Bouquets in Lahore: Denominations, Designs & Security Guide',
    h1: 'Everything You Need to Know About Ordering Money Bouquets in Lahore',
    outline: 'Crisp State Bank banknote handling ; Popular denominations (Rs. 100, 500, 1000, 5000) ; Combining cash rolls with red roses ; Safe verification & delivery proof',
    cta: 'Customize Your Money Bouquet',
    links: '/collections/money-bouquets, /prices, /contact',
    priority: 'P2'
  }
];

const contentPlanRows = contentPlan.map(c => [
  escapeCsv(c.topic),
  escapeCsv(c.kw),
  escapeCsv(c.intent),
  escapeCsv(c.type),
  escapeCsv(c.url),
  escapeCsv(c.title),
  escapeCsv(c.h1),
  escapeCsv(c.outline),
  escapeCsv(c.cta),
  escapeCsv(c.links),
  escapeCsv(c.priority)
].join(','));

fs.writeFileSync(path.join(SEO_AUDIT_DIR, '90-day-content-plan.csv'), [contentPlanHeader.join(','), ...contentPlanRows].join('\n'), 'utf-8');
console.log(`Saved 90-day-content-plan.csv (${contentPlanRows.length} rows)`);

// --------------------------------------------------------------------------
// 8. AEO / GEO CONTENT PLAN (Phase 18)
// --------------------------------------------------------------------------
const aeoHeader = [
  'User Question', 'Target Query Engine', 'Search Intent', 'Direct Answer Architecture (40-60 Words)',
  'Supporting Data / Proof', 'Target Landing URL', 'Schema Implementation', 'Priority'
];

const aeoQuestions = [
  {
    q: 'How fast can I get flowers delivered in Lahore?',
    engine: 'Google AI Overviews / Perplexity',
    intent: 'Informational / Transactional',
    answer: 'Lahore Bouquet delivers fresh flower bouquets across Lahore within 2 to 5 hours on the same day. For urgent orders in Gulberg and DHA, express 90-minute delivery is available. A live photo proof of your bouquet is sent on WhatsApp prior to dispatch.',
    proof: 'Store location on MM Alam Road Gulberg III ; Real-time WhatsApp dispatch updates',
    url: '/delivery-areas',
    schema: 'FAQPage + LocalBusiness',
    priority: 'P0'
  },
  {
    q: 'How much does a fresh flower bouquet cost in Lahore?',
    engine: 'ChatGPT Search / Perplexity / Google AI',
    intent: 'Commercial Investigation',
    answer: 'In Lahore, fresh flower bouquet prices typically start from PKR 1,180 for seasonal mixed blooms and PKR 2,400 to PKR 5,500 for imported Dutch red roses. Specialty money bouquets and bridal decor packages range from PKR 3,500 to PKR 15,000 depending on stem count and customization.',
    proof: 'Transparent price snapshot table verified daily in PKR currency',
    url: '/prices',
    schema: 'FAQPage + PriceSpecification',
    priority: 'P0'
  },
  {
    q: 'Can I send flowers to someone in Lahore from abroad (UK, USA, UAE)?',
    engine: 'Google AI Overviews / Bing Copilot',
    intent: 'Transactional',
    answer: 'Yes. Overseas Pakistanis in the UK, USA, Canada, and UAE can order fresh flower bouquets, cakes, and gifts for delivery anywhere in Lahore. Orders can be placed online or via WhatsApp, with payment accepted via international credit card, bank transfer, or Remitly.',
    proof: 'Direct WhatsApp florist concierge service ; Handwritten greeting card included',
    url: '/contact',
    schema: 'FAQPage + Florist',
    priority: 'P1'
  },
  {
    q: 'What are the best flowers for a wedding anniversary in Pakistan?',
    engine: 'Perplexity / Google AI Overviews',
    intent: 'Informational Advice',
    answer: 'Imported long-stem red roses paired with white baby’s breath (gypsophila) are the most popular anniversary flowers in Pakistan, symbolizing enduring romance. For a modern, joyful aesthetic, vibrant sunflowers combined with white oriental lilies are also widely favored for milestone celebrations.',
    proof: 'Florist curated arrangements with water-tube preservation stems',
    url: '/occasions/anniversary',
    schema: 'FAQPage + Article',
    priority: 'P1'
  },
  {
    q: 'How long do fresh cut roses last in Lahore weather?',
    engine: 'Google Featured Snippets / AI Overviews',
    intent: 'Informational Care',
    answer: 'Fresh cut roses last between 4 to 7 days in Lahore when kept in an air-conditioned room away from direct afternoon heat. To maximize longevity, trim stems at a 45-degree angle every two days, change the vase water daily, and dissolve half a teaspoon of sugar as floral nourishment.',
    proof: 'Step-by-step care guide published by master florists at Lahore Bouquet',
    url: '/blog/how-to-keep-flowers-fresh-in-lahore',
    schema: 'HowTo + FAQPage',
    priority: 'P1'
  }
];

const aeoRows = aeoQuestions.map(a => [
  escapeCsv(a.q),
  escapeCsv(a.engine),
  escapeCsv(a.intent),
  escapeCsv(a.answer),
  escapeCsv(a.proof),
  escapeCsv(a.url),
  escapeCsv(a.schema),
  escapeCsv(a.priority)
].join(','));

fs.writeFileSync(path.join(SEO_AUDIT_DIR, 'aeo-content-plan.csv'), [aeoHeader.join(','), ...aeoRows].join('\n'), 'utf-8');
console.log(`Saved aeo-content-plan.csv (${aeoRows.length} rows)`);

console.log('All CSV data files successfully generated in seo-audit/ !');
