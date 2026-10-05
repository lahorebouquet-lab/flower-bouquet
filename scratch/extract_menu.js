import fs from 'fs';

const raw = fs.readFileSync('scratch/cache/https___flowerbouquet_pk__1961014121.txt', 'utf8');
const data = JSON.parse(raw);
const html = data.body || '';

const matches = [];
const regex = /<a[^>]+href="([^"]*collections\/[^"]+)"[^>]*>([\s\S]*?)<\/a>/gi;
let m;
while ((m = regex.exec(html)) !== null) {
  const href = m[1];
  const text = m[2].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  if (text && !matches.some(x => x.href === href && x.text === text)) {
    matches.push({ href, text });
  }
}

console.log('Found collection links:', matches.length);
matches.forEach(item => console.log(`${item.text} -> ${item.href}`));
