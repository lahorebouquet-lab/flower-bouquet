const { createClient } = require('@sanity/client');
const client = createClient({
  projectId: 'hgqfqfmw',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false
});

async function test() {
  const products = await client.fetch('*[_type == "product"]{ _id, title, price, category }');
  console.log('Categories present across products:', [...new Set(products.map(p => p.category))]);
  const giftProducts = products.filter(p => p.category === 'Gifts & Cakes' || p.title.toLowerCase().includes('cake') || p.title.toLowerCase().includes('chocolate'));
  console.log('Gift/Cake products:', giftProducts);
}
test();
