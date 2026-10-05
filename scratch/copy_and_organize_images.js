const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Mr Nadeem\\Downloads\\Gajray & Garlands Mala for Weddings & Events - 4 Hours Delivery Lahore – Flower -images';
const manifestPath = 'scratch/curated_downloads_manifest.json';
const outputPath = 'scratch/final_products_manifest.json';

const items = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

// Ensure destination directories exist
const dirs = [
  'public/images/gajray',
  'public/images/wedding',
  'public/images/roses',
  'public/images/bouquets'
];

dirs.forEach(d => {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
    console.log(`Created directory: ${d}`);
  }
});

function getSubdir(category) {
  switch (category) {
    case 'Fresh Flower Gajray':
      return 'gajray';
    case 'Wedding Décor':
      return 'wedding';
    case 'Roses':
      return 'roses';
    case 'Bouquets':
    case 'Sunflowers':
      return 'bouquets';
    default:
      return 'gajray';
  }
}

let startId = 301;
const enrichedItems = [];

for (const item of items) {
  const subdir = getSubdir(item.category);
  const destDir = path.join('public', 'images', subdir);

  const copiedPaths = [];
  const localWebPaths = [];

  for (let idx = 0; idx < item.files.length; idx++) {
    const rawFilename = item.files[idx];
    const srcFile = path.join(srcDir, rawFilename);

    if (!fs.existsSync(srcFile)) {
      console.warn(`WARNING: File not found: ${srcFile}`);
      continue;
    }

    const ext = path.extname(rawFilename).toLowerCase() || '.png';
    const cleanName = idx === 0 ? `${item.slug}${ext}` : `${item.slug}-${idx + 1}${ext}`;
    const destFile = path.join(destDir, cleanName);

    fs.copyFileSync(srcFile, destFile);
    copiedPaths.push(destFile);
    localWebPaths.push(`/images/${subdir}/${cleanName}`);
  }

  const primaryWebPath = localWebPaths[0] || `/images/${subdir}/${item.slug}.png`;

  enrichedItems.push({
    id: startId++,
    title: item.title,
    slug: item.slug,
    category: item.category,
    price: item.price,
    oldPrice: item.oldPrice,
    badge: item.badge,
    badgeType: item.badgeType,
    image: primaryWebPath,
    images: localWebPaths,
    desc: item.desc,
    stems: item.stems,
    occasion: item.occasion,
    inStock: true
  });
}

fs.writeFileSync(outputPath, JSON.stringify(enrichedItems, null, 2), 'utf8');
console.log(`Successfully processed and copied ${enrichedItems.length} products to public/images!`);
