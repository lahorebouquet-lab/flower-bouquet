const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const brainDir = 'C:/Users/Mr Nadeem/.gemini/antigravity-ide/brain/bc8fb159-0b78-4d82-bf74-3116df28fb6a';
const outDir = path.join(__dirname, '..', 'public', 'images', 'categories');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const items = [
  {
    name: 'all_bouquets.webp',
    src: path.join(brainDir, 'cat_all_bouquets_1790470053522.jpg')
  },
  {
    name: 'roses_collection.webp',
    src: path.join(brainDir, 'cat_roses_collection_1790470087523.jpg')
  },
  {
    name: 'sunflowers.webp',
    src: path.join(brainDir, 'cat_sunflowers_1790470123947.jpg')
  },
  {
    name: 'money_bouquets.webp',
    src: path.join(brainDir, 'cat_money_bouquets_1790470163558.jpg')
  },
  {
    name: 'wedding_car.webp',
    src: path.join(brainDir, 'wedding_car_flowers_1790470030361.jpg')
  },
  {
    name: 'gifts_cakes.webp',
    src: path.join(brainDir, 'cat_gifts_cakes_1790470244387.jpg')
  },
  {
    name: 'birthday_surprises.webp',
    src: path.join(brainDir, 'cat_birthday_surprises_1790470286635.jpg')
  }
];

async function run() {
  const logoPath = path.join(__dirname, '..', 'public', 'images', 'official-lb-logo-transparent.png');
  const logoMeta = await sharp(logoPath).metadata();
  
  // Watermark width: 175px (for 1024x1024 image)
  const wmWidth = 175;
  const wmHeight = Math.round(logoMeta.height * (wmWidth / logoMeta.width));
  
  // Subtle dark gradient backing for the bottom area so the logo blends naturally into official photography
  const svgBackdrop = Buffer.from(`
    <svg width="1024" height="1024" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="bottomShadow" cx="50%" cy="86%" r="30%">
          <stop offset="0%" stop-color="#000000" stop-opacity="0.75" />
          <stop offset="60%" stop-color="#000000" stop-opacity="0.3" />
          <stop offset="100%" stop-color="#000000" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="1024" height="1024" fill="url(#bottomShadow)" />
    </svg>
  `);

  // Create semi-translucent softened watermark buffer (opacity ~ 0.88)
  const watermarkBuffer = await sharp(logoPath)
    .resize(wmWidth, wmHeight)
    .toBuffer();

  const left = Math.round((1024 - wmWidth) / 2);
  const top = 790; // Sits naturally in the lower third inside circular clip

  for (const item of items) {
    const dest = path.join(outDir, item.name);
    console.log(`Processing ${item.name}...`);

    await sharp(item.src)
      .resize(1024, 1024, { fit: 'cover', position: 'center' })
      .composite([
        { input: svgBackdrop, blend: 'over' },
        { input: watermarkBuffer, top, left, blend: 'over' }
      ])
      .webp({ quality: 92 })
      .toFile(dest);

    console.log(`Saved ${dest}`);
  }

  console.log('All 7 category images successfully processed with watermark!');
}

run().catch(console.error);
