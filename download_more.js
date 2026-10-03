const https = require('https');
const fs = require('fs');
const path = require('path');

const images = {
  'hero_sunflower.webp': 'https://lahoreblooms.com/wp-content/uploads/2026/06/white-purple-chrys-sunflower-bouquet.webp',
  'mini_white_rose.webp': 'https://lahoreblooms.com/wp-content/uploads/2026/06/mini-white-imported-rose-bouquet.webp',
  'cat_bouquets.webp': 'https://lahoreblooms.com/wp-content/uploads/2026/03/Untitled-design-5.webp',
  'cat_wedding.webp': 'https://lahoreblooms.com/wp-content/uploads/2026/03/Untitled-design-2.webp',
  'cat_jewellery.webp': 'https://lahoreblooms.com/wp-content/uploads/2026/03/Untitled-design-3.webp',
  'cat_gifts.webp': 'https://lahoreblooms.com/wp-content/uploads/2026/03/Untitled-design-4.webp',
  'money_sub.webp': 'https://lahoreblooms.com/wp-content/uploads/2026/03/money.webp',
  'rose_sub.webp': 'https://lahoreblooms.com/wp-content/uploads/2025/11/Mini-Classic-White-Roses-Bouquet.webp',
  'sunflower_sub.webp': 'https://lahoreblooms.com/wp-content/uploads/2025/11/Golden-Sunshine-Sunflower-Bouquet.webp',
  'chocolate_sub.webp': 'https://lahoreblooms.com/wp-content/uploads/2026/03/chocoloate.webp',
  'crochet_sub.webp': 'https://lahoreblooms.com/wp-content/uploads/2026/03/crochet-1.webp',
  'artificial_sub.webp': 'https://lahoreblooms.com/wp-content/uploads/2026/03/artificial.webp',
  'birthday_balloon_basket.webp': 'https://lahoreblooms.com/wp-content/uploads/2026/08/Black-and-Silver-Birthday-Balloon-Basket-with-Cake-and-Red-Roses-Lahore-430x537.webp',
  'birthday_cake_box.webp': 'https://lahoreblooms.com/wp-content/uploads/2026/08/Birthday-Cake-and-Flower-Acrylic-Gift-Box-with-Fairy-Lights-Lahore-430x537.webp',
  'blue_balloon_surprise.webp': 'https://lahoreblooms.com/wp-content/uploads/2026/08/Blue-Birthday-Balloon-Surprise-with-Cake-Flower-Bouquet-and-Light-Up-Letter-430x537.webp',
  'chrysanthemum_bouquet.png': 'https://lahoreblooms.com/wp-content/uploads/2026/06/Berry-Blush-Flower-Cake-Combo-in-Lahore.png',
  'ruby_vale_rose.webp': 'https://lahoreblooms.com/wp-content/uploads/2026/06/elegant-red-rose-bouquet-1.webp',
  'romantic_canopy.webp': 'https://lahoreblooms.com/wp-content/uploads/2025/12/op.webp',
  'white_red_wedding.webp': 'https://lahoreblooms.com/wp-content/uploads/2025/11/20251125_1850_Floral-Canopy-Enhancement_remix_01kaxmaygffqc9r135gdg7pgwq.webp',
  'luxury_pink_canopy.webp': 'https://lahoreblooms.com/wp-content/uploads/2025/11/20251124_0624_Floral-Canopy-Bed_remix_01kasqa1bjfzqbhf3m992nh7vq.webp'
};

const targetDir = path.join(__dirname, 'public', 'images', 'lahoreblooms');

function download(name, url) {
  return new Promise((resolve) => {
    const dest = path.join(targetDir, name);
    const file = fs.createWriteStream(dest);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        https.get(res.headers.location, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (r) => {
          r.pipe(file);
          file.on('finish', () => { file.close(); resolve(`OK: ${name}`); });
        }).on('error', () => resolve(`ERR: ${name}`));
        return;
      }
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(`OK: ${name}`);
      });
    }).on('error', (err) => {
      resolve(`ERR: ${name} ${err.message}`);
    });
  });
}

async function run() {
  for (const [name, url] of Object.entries(images)) {
    const res = await download(name, url);
    console.log(res);
  }
}
run();
