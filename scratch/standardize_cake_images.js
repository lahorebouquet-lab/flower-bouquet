const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../public/images/cakes');

const renameMap = {
  'buy-nestle-kitkat-4-finger-bar-online-lahore.png': 'nestle-kitkat-chocolate-gift-lahore.png',
  'ferrero-rocher-16-pack-perfect-gift-for-birthdays-anniversaries-imported-luxury-chocolates-lahore.png': 'ferrero-rocher-luxury-gift-box-lahore.png',
  'order-bounty-chocolate-bar-57g-online-for-fast-delivery-in-lahore-lahore.png': 'bounty-chocolate-gift-bar-lahore.png',
  'twix-chocolate-50gm-lahore.png': 'twix-caramel-chocolate-bar-lahore.png',
  'mars-miniatures-chocolate-pack-lahore.webp': 'mars-miniatures-chocolate-gift-pack-lahore.webp',
  'snickers-miniatures-chocolate-lahore.webp': 'snickers-miniatures-chocolate-gift-pack-lahore.webp',
  'snickers-minis-12-pack-lahore.webp': 'snickers-minis-pouch-chocolate-gift-lahore.webp',
  'mrbeast-feastables-milk-chocolate-lahore.png': 'mrbeast-feastables-chocolate-lahore.png',
  'belgian-malt-cake-lahore.jpg': 'layers-belgian-malt-cake-lahore.jpg',
  'chocolate-heaven-cake-lahore.jpg': 'layers-chocolate-heaven-cake-lahore.jpg',
  'chocolate-mousse-cake-lahore.jpg': 'layers-chocolate-mousse-cake-lahore.jpg',
  'coffee-cake-lahore.jpg': 'layers-special-coffee-cake-lahore.jpg',
  'dairy-milk-cake-lahore.jpg': 'layers-dairy-milk-chocolate-cake-lahore.jpg',
  'ferrero-classic-cake-lahore.jpg': 'layers-ferrero-classic-cake-lahore.jpg',
  'ferrero-rocher-cake-lahore.jpg': 'layers-ferrero-rocher-premium-cake-lahore.jpg',
  'german-fudge-cake-lahore.jpg': 'layers-german-fudge-cake-lahore.jpg',
  'lotus-cake-lahore.jpg': 'layers-lotus-biscoff-cake-lahore.jpg',
  'milky-malt-cake-lahore.jpg': 'layers-milky-malt-cake-lahore.jpg',
  'nutella-cake-lahore.jpg': 'layers-nutella-cake-lahore.jpg',
  'pistachio-cake-lahore.jpg': 'layers-pistachio-celebration-cake-lahore.jpg',
  'red-velvet-cake-lahore.jpg': 'layers-red-velvet-anniversary-cake-lahore.jpg',
  'salted-caramel-cake-lahore.jpg': 'layers-salted-caramel-cake-lahore.jpg',
};

for (const [oldName, newName] of Object.entries(renameMap)) {
  const oldPath = path.join(dir, oldName);
  const newPath = path.join(dir, newName);
  if (fs.existsSync(oldPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed ${oldName} -> ${newName}`);
  }
}

console.log('Image normalization complete!');
