import { createClient } from '@sanity/client';
import { readFileSync, writeFileSync, createReadStream, existsSync } from 'fs';
import { resolve } from 'path';

const envContent = readFileSync(resolve(process.cwd(), '.env.local'), 'utf8');
const projectId = envContent.match(/NEXT_PUBLIC_SANITY_PROJECT_ID=(.*)/)?.[1]?.trim() || 'hgqfqfmw';
const dataset = envContent.match(/NEXT_PUBLIC_SANITY_DATASET=(.*)/)?.[1]?.trim() || 'production';
const token = envContent.match(/SANITY_API_WRITE_TOKEN=(.*)/)?.[1]?.trim();

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

const MITHAI_PRODUCTS = [
  {
    id: 227,
    badge: "Luxury Mithai",
    badgeType: "hot",
    title: "Royal Gourmet Mithai & Rose Luxury Gift Box",
    slug: "royal-mithai-box-lahore",
    price: 3800,
    oldPrice: 4500,
    image: "/images/cakes/royal-mithai-box-lahore.jpg",
    category: "Gifts & Cakes",
    rating: 5.0,
    reviewCount: 38,
    desc: "Handcrafted luxury walnut wooden gift box filled with authentic assorted Pakistani mithai (pure desi ghee golden gulab jamun, pistachio barfi, and saffron cham cham) elegantly decorated with fresh red rose petals, motia, and gold satin ribbon. Hand-delivered across Lahore in 2 to 4 hours with live WhatsApp photo proof.",
    stems: "1 Kg Gourmet Assorted Mithai in Wooden Keepsake Box with Rose Petals & Card",
    swatches: ["#8B1E2D", "#C6A15B", "#3D2314"],
    occasion: ["Eid Gifts", "Celebration", "Wedding", "Congratulations"]
  },
  {
    id: 228,
    badge: "Desi Ghee Mithai",
    badgeType: "bestseller",
    title: "Traditional Motichoor Ladoo & Desi Ghee Gulab Jamun Platter",
    slug: "traditional-ladoo-gulab-jamun-platter-lahore",
    price: 2900,
    oldPrice: 3400,
    image: "/images/cakes/ladoo-rose-platter-lahore.jpg",
    category: "Gifts & Cakes",
    rating: 4.9,
    reviewCount: 45,
    desc: "Pure desi ghee Motichoor Ladoos topped with slivered almonds and edible silver warq, paired with warm golden Gulab Jamun, surrounded by fresh fragrant red roses and jasmine motia buds. Ideal for festive family celebrations, Barat, and congratulations across Lahore.",
    stems: "1 Kg Pure Desi Ghee Ladoos & Gulab Jamun with Fresh Red Roses & Greeting Card",
    swatches: ["#E8A020", "#8B1E2D", "#C6A15B"],
    occasion: ["Eid Gifts", "Wedding", "Celebration", "Congratulations"]
  }
];

async function run() {
  console.log('Seeding 2 Luxury Mithai products into Sanity...');
  for (const p of MITHAI_PRODUCTS) {
    const fullPath = resolve(process.cwd(), 'public', p.image.slice(1));
    let imageRef = null;
    if (existsSync(fullPath)) {
      const stream = createReadStream(fullPath);
      const asset = await client.assets.upload('image', stream, {
        filename: fullPath.split(/[\/\\]/).pop(),
      });
      imageRef = {
        _type: 'image',
        asset: { _type: 'reference', _ref: asset._id },
      };
      console.log(`  ✓ Uploaded image for ${p.title}`);
    }

    const doc = {
      _id: `product-mithai-${p.id}`,
      _type: 'product',
      title: p.title,
      slug: { _type: 'slug', current: p.slug },
      price: p.price,
      oldPrice: p.oldPrice,
      badge: p.badge,
      badgeType: p.badgeType,
      category: p.category,
      desc: p.desc,
      stems: p.stems,
      rating: p.rating,
      reviewCount: p.reviewCount,
      inStock: true,
      occasion: p.occasion,
      ...(imageRef ? { image: imageRef } : {}),
    };

    await client.createOrReplace(doc);
    console.log(`  ✓ Synced ${p.title} to Sanity`);
  }

  // Update app/data/products.ts
  const productsFilePath = resolve(process.cwd(), 'app/data/products.ts');
  let productsContent = readFileSync(productsFilePath, 'utf8');
  if (!productsContent.includes('royal-mithai-box-lahore')) {
    const code = MITHAI_PRODUCTS.map(p => `  ${JSON.stringify(p, null, 2).replace(/\n/g, '\n  ')},`).join('\n\n');
    const marker = '  // --- 26 ORIGINAL CAKES & IMPORTED CHOCOLATES (LAHORE DELIVERY) ---';
    productsContent = productsContent.replace(
      marker,
      `  // --- GOURMET MITHAI & SWEETS CELEBRATION BOXES ---\n${code}\n\n${marker}`
    );
    writeFileSync(productsFilePath, productsContent, 'utf8');
    console.log('  ✓ app/data/products.ts updated with Mithai products!');
  } else {
    console.log('  Mithai already in products.ts');
  }

  console.log('Done!');
}

run().catch(console.error);
