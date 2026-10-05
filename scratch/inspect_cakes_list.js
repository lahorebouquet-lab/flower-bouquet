const cakes = require('./competitor_cakes.json');
console.log('Total competitor cakes:', cakes.length);
cakes.forEach((c, i) => {
  console.log((i+1) + '. ' + c.title + ' | price: ' + (c.variants[0] ? c.variants[0].price : 'N/A') + ' | images: ' + c.images.length + ' | handle: ' + c.handle);
  if (c.images[0]) console.log('   img: ' + c.images[0].src);
});
