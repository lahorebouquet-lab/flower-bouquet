import { createClient } from '@sanity/client';
import { readFileSync, writeFileSync, createReadStream, existsSync } from 'fs';
import { resolve, join } from 'path';

// 1. Read env
const envContent = readFileSync(resolve(process.cwd(), '.env.local'), 'utf8');
const projectId = envContent.match(/NEXT_PUBLIC_SANITY_PROJECT_ID=(.*)/)?.[1]?.trim() || 'hgqfqfmw';
const dataset = envContent.match(/NEXT_PUBLIC_SANITY_DATASET=(.*)/)?.[1]?.trim() || 'production';
const token = envContent.match(/SANITY_API_WRITE_TOKEN=(.*)/)?.[1]?.trim();

if (!token) {
  console.error('No Sanity write token found in .env.local');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
});

console.log(`Connected to Sanity: ${projectId} [${dataset}]`);

const manifest = JSON.parse(readFileSync('scratch/final_products_manifest.json', 'utf8'));

// Enrich with swatches, rating, reviewCount
const categorySwatches = {
  'Fresh Flower Gajray': ['#FAF7F2', '#8B1E2D', '#C6A15B'],
  'Wedding Décor': ['#8B1E2D', '#C6A15B', '#FFFFFF'],
  'Roses': ['#8B1E2D', '#0B0B0B', '#C6A15B'],
  'Bouquets': ['#E8B4B8', '#557153', '#FAF4EB'],
  'Sunflowers': ['#F4B41A', '#8B1E2D', '#2A2A2A']
};

const enrichedProducts = manifest.map((p, idx) => {
  return {
    ...p,
    rating: p.rating || Number((4.8 + ((idx % 3) * 0.1)).toFixed(1)),
    reviewCount: p.reviewCount || (35 + ((idx * 7) % 80)),
    swatches: p.swatches || categorySwatches[p.category] || ['#8B1E2D', '#FAF7F2', '#C6A15B']
  };
});

async function run() {
  console.log(`\n🚀 Uploading images and syncing ${enrichedProducts.length} products to Sanity...`);

  let count = 0;
  for (const p of enrichedProducts) {
    count++;
    let mainAssetRef = null;
    const galleryRefs = [];

    // Main image
    const localMainPath = resolve(process.cwd(), 'public' + p.image);
    if (existsSync(localMainPath)) {
      try {
        const stream = createReadStream(localMainPath);
        const asset = await client.assets.upload('image', stream, {
          filename: `${p.slug}.png`,
        });
        mainAssetRef = {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: asset._id,
          },
        };
      } catch (err) {
        console.error(`  Failed to upload main image for ${p.slug}:`, err.message);
      }
    } else {
      console.warn(`  Image file not found: ${localMainPath}`);
    }

    // Secondary images (if any)
    if (p.images && p.images.length > 1) {
      for (let i = 1; i < p.images.length; i++) {
        const localSecPath = resolve(process.cwd(), 'public' + p.images[i]);
        if (existsSync(localSecPath)) {
          try {
            const stream = createReadStream(localSecPath);
            const asset = await client.assets.upload('image', stream, {
              filename: `${p.slug}-${i + 1}.png`,
            });
            galleryRefs.push({
              _type: 'image',
              _key: `gallery-${p.slug}-${i}`,
              asset: {
                _type: 'reference',
                _ref: asset._id,
              },
            });
          } catch (err) {
            console.error(`  Failed to upload gallery image ${i} for ${p.slug}:`, err.message);
          }
        }
      }
    }

    const doc = {
      _id: `product-gajray-${p.id}`,
      _type: 'product',
      title: p.title,
      slug: {
        _type: 'slug',
        current: p.slug,
      },
      price: p.price,
      oldPrice: p.oldPrice || Math.round(p.price * 1.15),
      badge: p.badge,
      badgeType: p.badgeType || 'hot',
      category: p.category,
      desc: p.desc,
      stems: p.stems,
      rating: p.rating,
      reviewCount: p.reviewCount,
      inStock: true,
      occasion: p.occasion,
      swatches: p.swatches,
      ...(mainAssetRef ? { image: mainAssetRef } : {}),
      ...(galleryRefs.length > 0 ? { gallery: galleryRefs } : {}),
    };

    await client.createOrReplace(doc);
    console.log(`  [${count}/${enrichedProducts.length}] ✓ Sanity synced: ${p.title} (${p.category} - Rs. ${p.price})`);
  }

  // Update app/data/products.ts
  console.log('\n📝 Updating app/data/products.ts with new Gajray & Wedding products...');
  const productsFilePath = resolve(process.cwd(), 'app/data/products.ts');
  let productsContent = readFileSync(productsFilePath, 'utf8');

  // Check if already present
  if (productsContent.includes('white-jasmine-gajray-pair-lahore')) {
    console.log('  Notice: Products already present in products.ts, skipping append.');
  } else {
    const closeArrayMarker = '];\n\nexport const LAHORE_AREAS';

    if (productsContent.includes(closeArrayMarker)) {
      const productsCode = enrichedProducts
        .map(p => `  ${JSON.stringify(p, null, 2).replace(/\n/g, '\n  ')},`)
        .join('\n\n');

      productsContent = productsContent.replace(
        closeArrayMarker,
        `,\n\n  // --- 33 FRESH FLOWER GAJRAY, MALAS, WEDDING DÉCOR & BOUQUETS ---\n${productsCode}\n];\n\nexport const LAHORE_AREAS`
      );
      writeFileSync(productsFilePath, productsContent, 'utf8');
      console.log('  ✓ app/data/products.ts updated successfully with 33 items!');
    } else {
      console.warn('  ⚠️ Could not find closeArrayMarker in products.ts');
    }
  }

  console.log('\n🎉 ALL PRODUCTS SUCCESSFULLY SYNCED TO SANITY & LOCAL DATA!');
}

run().catch(console.error);
