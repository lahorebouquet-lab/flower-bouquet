const fs = require('fs');
const path = require('path');

const data = JSON.parse(fs.readFileSync(path.join(__dirname, 'discovered_sitemap_urls.json'), 'utf-8'));

console.log(`Total URLs: ${data.length}`);

// Categorize URLs
const collections = data.filter(d => d.url.includes('/collections/'));
const products = data.filter(d => d.url.includes('/products/'));
const blogs = data.filter(d => d.url.includes('/blogs/'));
const pages = data.filter(d => d.url.includes('/pages/'));
const others = data.filter(d => !d.url.includes('/collections/') && !d.url.includes('/products/') && !d.url.includes('/blogs/') && !d.url.includes('/pages/'));

console.log(`Collections: ${collections.length}`);
console.log(`Products: ${products.length}`);
console.log(`Blogs: ${blogs.length}`);
console.log(`Pages: ${pages.length}`);
console.log(`Others: ${others.length}`);

// Sample collections
console.log('\nSample 25 Collections:');
collections.slice(0, 25).forEach(c => console.log(' - ' + c.url));

// Sample pages
console.log('\nSample 25 Pages:');
pages.slice(0, 25).forEach(p => console.log(' - ' + p.url));

// Sample blogs
console.log('\nSample 15 Blogs:');
blogs.slice(0, 15).forEach(b => console.log(' - ' + b.url));

// Check page URL patterns
const cityKeywords = ['lahore', 'karachi', 'islamabad', 'rawalpindi', 'faisalabad', 'multan', 'peshawar', 'gujranwala', 'sialkot', 'dha', 'gulberg', 'bahria'];
const cityPages = pages.filter(p => cityKeywords.some(k => p.url.toLowerCase().includes(k)));
console.log(`\nPages containing city/locality keywords: ${cityPages.length} out of ${pages.length}`);

if (cityPages.length > 0) {
  console.log('Sample city pages:');
  cityPages.slice(0, 15).forEach(p => console.log(' - ' + p.url));
}

// Check other page patterns
const nonCityPages = pages.filter(p => !cityKeywords.some(k => p.url.toLowerCase().includes(k)));
console.log(`\nSample non-city pages (total ${nonCityPages.length}):`);
nonCityPages.slice(0, 20).forEach(p => console.log(' - ' + p.url));
