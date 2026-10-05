const fs = require('fs');

async function main() {
  const res = await fetch('https://flowerbouquet.pk/collections/cakes-chocolates-in-lahore/products.json?limit=250');
  const data = await res.json();
  console.log('Total products:', data.products.length);
  fs.writeFileSync('scratch/competitor_cakes.json', JSON.stringify(data.products, null, 2));
  data.products.forEach((p, i) => {
    console.log(`${i+1}. ${p.title} -> Rs. ${p.variants[0]?.price} (Images: ${p.images.length}) [Handle: ${p.handle}]`);
  });
}

main().catch(console.error);
