import fs from 'fs';
import path from 'path';

const appDir = path.resolve('app');
const results = [];

function scanDir(dir, route = '') {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    if (item.isDirectory()) {
      if (item.name === 'components' || item.name === 'context' || item.name === 'data') continue;
      const subRoute = item.name.startsWith('(') ? route : `${route}/${item.name}`;
      scanDir(path.join(dir, item.name), subRoute);
    } else if (item.name === 'page.tsx') {
      const fullPath = path.join(dir, item.name);
      const content = fs.readFileSync(fullPath, 'utf8');
      
      const currentRoute = route || '/';
      const titleMatch = content.match(/title:\s*\{[^}]*absolute:\s*["']([^"']+)["']/i) || content.match(/title:\s*["']([^"']+)["']/i);
      const descMatch = content.match(/description:\s*["']([^"']+)["']/i);
      const canonicalMatch = content.match(/canonical:\s*["']([^"']+)["']/i);
      const h1Match = content.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
      const hasSchema = content.includes('application/ld+json');
      const hasImages = content.includes('<Image') || content.includes('<img');

      results.push({
        route: currentRoute,
        file: path.relative(process.cwd(), fullPath),
        title: titleMatch ? titleMatch[1] : 'MISSING',
        hasDesc: !!descMatch,
        desc: descMatch ? descMatch[1] : 'MISSING',
        canonical: canonicalMatch ? canonicalMatch[1] : 'MISSING',
        hasH1: !!h1Match,
        h1Text: h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : 'MISSING',
        hasSchema,
        hasImages,
        contentLength: content.length,
      });
    }
  }
}

scanDir(appDir);
console.log(`Total scanned routes: ${results.length}`);
console.log(JSON.stringify(results, null, 2));
