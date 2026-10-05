const fs = require('fs');
const path = require('path');
const https = require('https');

const cakes = require('./competitor_cakes.json');

const targetDir = path.join(__dirname, '../public/images/cakes');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      } else if (response.statusCode === 301 || response.statusCode === 302) {
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
      } else {
        file.close();
        fs.unlink(dest, () => {});
        reject(new Error(`Server responded with ${response.statusCode}: ${url}`));
      }
    }).on('error', (err) => {
      file.close();
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

// Slug map for products
const slugMap = {
  8202721263747: 'layers-raffaello-cake-lahore',
  8507135852675: 'layers-lotus-three-milk-cake-lahore',
  8202720936099: 'layers-ferrero-classic-cake-lahore',
  8202722115747: 'layers-milky-malt-cake-lahore',
  8202721460387: 'layers-chocolate-heaven-cake-lahore',
  8202720510115: 'layers-lotus-biscoff-cake-lahore',
  8894218338467: 'ferrero-rocher-luxury-gift-box-lahore',
  8894214439075: 'nestle-kitkat-chocolate-gift-lahore',
  8894212571299: 'bounty-chocolate-gift-bar-lahore',
  8892497690787: 'snickers-chocolate-bar-lahore',
  8894200774819: 'mars-chocolate-bar-gift-lahore',
  8900407754915: 'twix-chocolate-caramel-bar-lahore',
  8892552642723: 'mars-miniatures-chocolate-gift-pack-lahore',
  8894204543139: 'snickers-miniatures-chocolate-gift-pack-lahore',
  8892543467683: 'snickers-minis-pouch-chocolate-gift-lahore',
  8894143234211: 'mrbeast-feastables-milk-crunch-chocolate-lahore',
  8202721853603: 'layers-dairy-milk-chocolate-cake-lahore',
  8202720444579: 'layers-pistachio-celebration-cake-lahore',
  8202720641187: 'layers-belgian-malt-cake-lahore',
  8202720772259: 'layers-ferrero-rocher-premium-cake-lahore',
  8202721001635: 'layers-nutella-cake-lahore',
  8202721067171: 'layers-red-velvet-anniversary-cake-lahore',
  8202721132707: 'layers-salted-caramel-cake-lahore',
  8202721525923: 'layers-german-fudge-cake-lahore',
  8202721755299: 'layers-chocolate-mousse-cake-lahore',
  8202721919139: 'layers-special-coffee-cake-lahore'
};

async function main() {
  console.log(`Starting download for ${cakes.length} cakes & chocolates...`);
  const results = [];
  for (let i = 0; i < cakes.length; i++) {
    const c = cakes[i];
    const slug = slugMap[c.id] || c.handle + '-lahore';
    if (!c.images || c.images.length === 0) {
      console.log(`Skipping ${c.title}, no images.`);
      continue;
    }
    const imgUrl = c.images[0].src;
    const ext = imgUrl.includes('.webp') ? '.webp' : (imgUrl.includes('.png') ? '.png' : '.jpg');
    const filename = `${slug}${ext}`;
    const dest = path.join(targetDir, filename);
    const localPath = `/images/cakes/${filename}`;
    
    try {
      await downloadFile(imgUrl, dest);
      const stat = fs.statSync(dest);
      console.log(`[${i+1}/${cakes.length}] Downloaded ${filename} (${stat.size} bytes)`);
      results.push({
        id: c.id,
        title: c.title,
        slug,
        price: parseFloat(c.variants[0]?.price || '2500'),
        originalHandle: c.handle,
        image: localPath,
        remoteImage: imgUrl,
        bodyHtml: c.body_html,
        tags: c.tags,
      });
    } catch (err) {
      console.error(`Failed to download ${imgUrl}:`, err.message);
    }
  }

  fs.writeFileSync(path.join(__dirname, 'downloaded_cakes_manifest.json'), JSON.stringify(results, null, 2));
  console.log(`Successfully downloaded ${results.length} images and wrote manifest!`);
}

main().catch(console.error);
