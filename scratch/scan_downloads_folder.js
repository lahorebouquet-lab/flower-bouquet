const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\Mr Nadeem\\Downloads\\Gajray & Garlands Mala for Weddings & Events - 4 Hours Delivery Lahore – Flower -images';

if (!fs.existsSync(srcDir)) {
  console.log('Dir does not exist:', srcDir);
  process.exit(1);
}

const files = fs.readdirSync(srcDir);
console.log('Total files found in Downloads folder:', files.length);
files.forEach((f, i) => {
  const stat = fs.statSync(path.join(srcDir, f));
  console.log(`${i+1}. ${f} (${(stat.size / 1024).toFixed(1)} KB)`);
});
