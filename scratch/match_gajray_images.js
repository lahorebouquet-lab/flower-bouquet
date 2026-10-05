const fs = require('fs');
const path = require('path');

const gajrayProducts = JSON.parse(fs.readFileSync('scratch/competitor_gajray.json', 'utf8'));
const sitemapUrls = JSON.parse(fs.readFileSync('scratch/discovered_sitemap_urls.json', 'utf8'));
const srcDir = 'C:\\Users\\Mr Nadeem\\Downloads\\Gajray & Garlands Mala for Weddings & Events - 4 Hours Delivery Lahore – Flower -images';
const files = fs.readdirSync(srcDir);

console.log(`Checking ${files.length} downloaded files against competitor products & sitemap...`);

const matches = [];
const unmatched = [];

for (const file of files) {
  const baseName = file.replace(/ \(\d+\)/, ''); // Remove (2), (3)
  const prefix = baseName.split('.')[0].split('_')[0]; // e.g. 491, 500, Fresh, etc.

  // 1. Check in gajrayProducts by image URL
  let found = gajrayProducts.find(p => p.images.some(img => img.src.includes(baseName) || img.src.includes(prefix)));
  
  // 2. If not found in gajrayProducts, check sitemap for products having this image
  if (!found) {
    const sm = sitemapUrls.find(u => u.images && u.images.some(img => img.includes(baseName) || (prefix.length > 2 && img.includes(prefix))));
    if (sm) {
      found = {
        title: sm.title || sm.url.split('/').pop().replace(/-/g, ' '),
        handle: sm.url.split('/').pop(),
        price: '3500.00',
        url: sm.url,
      };
    }
  }

  if (found) {
    matches.push({
      file,
      title: found.title,
      handle: found.handle,
      price: found.variants ? found.variants[0]?.price : found.price,
    });
  } else {
    unmatched.push(file);
  }
}

console.log(`\nMatched: ${matches.length} / ${files.length}`);
matches.forEach((m, i) => console.log(`${i+1}. [${m.file}] -> ${m.title} (Rs. ${m.price}) [${m.handle}]`));

console.log(`\nUnmatched files (${unmatched.length}):`);
unmatched.forEach((u, i) => console.log(`${i+1}. ${u}`));
