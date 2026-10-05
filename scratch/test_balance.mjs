import { ALL_PRODUCTS } from '../app/data/products.js';

export function getBalancedProductCatalog(products) {
  const roses = products.filter(p => p.category === 'Roses' || p.category === 'Velvet Red Roses' || p.category === 'Pure White Roses');
  const bouquets = products.filter(p => p.category === 'Bouquets');
  const sunflowers = products.filter(p => p.category === 'Sunflowers');
  const cakesAndGifts = products.filter(p => p.category === 'Gifts & Cakes' || p.category === 'Chocolate Bouquets');
  const specialty = products.filter(p => p.category === 'Money Bouquets' || p.category === 'Crochet' || p.category === 'Dried' || p.category === 'Wedding Décor');

  const result = [];
  const addedIds = new Set();
  const maxLen = Math.max(roses.length, bouquets.length, sunflowers.length, cakesAndGifts.length, specialty.length);
  
  for (let i = 0; i < maxLen; i++) {
    // 1. Premium Rose Bouquet
    if (roses[i] && !addedIds.has(roses[i].id)) {
      result.push(roses[i]);
      addedIds.add(roses[i].id);
    }
    // 2. Fresh Hand-Tied Bouquet
    if (bouquets[i] && !addedIds.has(bouquets[i].id)) {
      result.push(bouquets[i]);
      addedIds.add(bouquets[i].id);
    }
    // 3. Sunflower or Specialty Bouquet
    const spec = sunflowers[i] || specialty[i];
    if (spec && !addedIds.has(spec.id)) {
      result.push(spec);
      addedIds.add(spec.id);
    }
    // 4. Cake or Sweet Gift Combo
    if (cakesAndGifts[i] && !addedIds.has(cakesAndGifts[i].id)) {
      result.push(cakesAndGifts[i]);
      addedIds.add(cakesAndGifts[i].id);
    }
    // Secondary additions
    if (sunflowers[i] && !addedIds.has(sunflowers[i].id)) {
      result.push(sunflowers[i]);
      addedIds.add(sunflowers[i].id);
    }
    if (specialty[i] && !addedIds.has(specialty[i].id)) {
      result.push(specialty[i]);
      addedIds.add(specialty[i].id);
    }
  }

  for (const p of products) {
    if (!addedIds.has(p.id)) {
      result.push(p);
      addedIds.add(p.id);
    }
  }

  return result;
}

const balanced = getBalancedProductCatalog(ALL_PRODUCTS);
console.log('Total products:', balanced.length);
console.log('\n--- FIRST 8 ITEMS ON PAGE 1 OF ALL ---');
balanced.slice(0, 8).forEach((p, idx) => {
  console.log((idx + 1) + '. [' + p.category + '] ' + p.title + ' -> Rs. ' + p.price);
});

console.log('\n--- NEXT 8 ITEMS (9 to 16) ---');
balanced.slice(8, 16).forEach((p, idx) => {
  console.log((idx + 9) + '. [' + p.category + '] ' + p.title + ' -> Rs. ' + p.price);
});
