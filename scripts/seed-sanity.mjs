/**
 * Seed script to import all products, categories, and reviews into Sanity
 * Usage:
 *   Windows PowerShell:
 *     $env:SANITY_AUTH_TOKEN="your_token_here"; node scripts/seed-sanity.mjs
 *   Bash:
 *     SANITY_AUTH_TOKEN="your_token_here" node scripts/seed-sanity.mjs
 */

import { createClient } from '@sanity/client'
import { readFileSync, createReadStream, existsSync } from 'fs'
import { resolve, join } from 'path'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'hgqfqfmw'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_AUTH_TOKEN || process.env.SANITY_API_WRITE_TOKEN

if (!token) {
  console.log(`
======================================================================
🌸 FLORABELLE / LAHORE BOUQUET - SANITY DATA SEEDER
======================================================================
Your Sanity Project ID: ${projectId}
Your Dataset: ${dataset}

To automatically import all 29+ products, categories, and reviews into Sanity:

1. Open Sanity Management in your browser:
   👉 https://www.sanity.io/manage/project/${projectId}/api#tokens

2. Click "+ Add API token"
   - Name: Seeder
   - Permissions: Editor (or Write)
   - Click "Save" and copy the token.

3. Run in PowerShell:
   $env:SANITY_AUTH_TOKEN="your_copied_token"; node scripts/seed-sanity.mjs

4. Then open http://localhost:3000/studio to see all live products!
======================================================================
`)
  process.exit(0)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

console.log(`\n🚀 Connected to Sanity Project: ${projectId} [${dataset}]`)

// Read products data
const productsFilePath = resolve(process.cwd(), 'app/data/products.ts')
const productsFileContent = readFileSync(productsFilePath, 'utf8')

// Parse ALL_PRODUCTS
const productMatch = productsFileContent.match(/export const ALL_PRODUCTS: Product\[\] = (\[[\s\S]*?\]);\s*export const/)
if (!productMatch) {
  console.error('❌ Could not parse ALL_PRODUCTS from app/data/products.ts')
  process.exit(1)
}
const products = new Function('return ' + productMatch[1])()

// Parse REVIEWS
const reviewMatch = productsFileContent.match(/export const REVIEWS = (\[[\s\S]*?\]);\s*$/)
const reviews = reviewMatch ? new Function('return ' + reviewMatch[1])() : []

// Uploaded asset cache to avoid duplicate image uploads
const assetCache = new Map()

async function getOrUploadImageAsset(imagePath) {
  if (!imagePath) return null
  
  // Clean path
  let relativePath = imagePath
  if (relativePath.startsWith('/')) {
    relativePath = relativePath.slice(1)
  }
  const fullPath = resolve(process.cwd(), 'public', relativePath)

  if (!existsSync(fullPath)) {
    return null
  }

  if (assetCache.has(fullPath)) {
    return assetCache.get(fullPath)
  }

  try {
    const stream = createReadStream(fullPath)
    const asset = await client.assets.upload('image', stream, {
      filename: relativePath.split('/').pop() || 'image.jpg',
    })
    const ref = {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    }
    assetCache.set(fullPath, ref)
    return ref
  } catch (err) {
    console.warn(`  ⚠️ Failed to upload image ${relativePath}:`, err.message)
    return null
  }
}

async function seedCategories() {
  console.log('\n📂 Seeding All Website Categories & Departments...')
  const categories = [
    // --- BOUQUETS & FLORALS ---
    { 
      id: 'all-bouquets', 
      title: 'Hand-Tied Bouquets', 
      slug: 'bouquets', 
      department: 'bouquets',
      tagline: 'Fresh seasonal florals tied daily', 
      itemCount: '24+ Styles', 
      badge: '24+ Styles', 
      href: '/bouquets', 
      image: '/images/categories/all_bouquets.webp', 
      order: 1 
    },
    { 
      id: 'roses-collection', 
      title: 'Imported Dutch Roses', 
      slug: 'roses', 
      department: 'bouquets',
      tagline: 'Long-stem premium roses', 
      itemCount: '15+ Varieties', 
      badge: 'Hot', 
      href: '/roses', 
      image: '/images/categories/roses_collection.webp', 
      order: 2 
    },
    { 
      id: 'velvet-red-roses', 
      title: 'Velvet Red Roses', 
      slug: 'red-roses', 
      department: 'bouquets',
      tagline: '12, 24, or 50 stem arrangements', 
      itemCount: '12-50 Stems', 
      badge: 'Bestseller', 
      href: '/roses/red-roses', 
      image: '/images/lahoreblooms/ruby_vale_rose.webp', 
      order: 3 
    },
    { 
      id: 'pure-white-roses', 
      title: 'Pure White Roses', 
      slug: 'white-roses', 
      department: 'bouquets',
      tagline: 'Peaceful ivory & blush white stems', 
      itemCount: 'Single & Dozens', 
      badge: 'Elegant', 
      href: '/roses/white-roses', 
      image: '/images/lahoreblooms/blush_veil.webp', 
      order: 4 
    },
    { 
      id: 'sunflowers', 
      title: 'Sunflowers & Mixed Blooms', 
      slug: 'sunflowers', 
      department: 'bouquets',
      tagline: 'Vibrant golden sunflowers & lilies', 
      itemCount: '8+ Designs', 
      badge: 'Radiant', 
      href: '/sunflowers', 
      image: '/images/categories/sunflowers.webp', 
      order: 5 
    },
    { 
      id: 'money-bouquets', 
      title: 'Custom Money Bouquets', 
      slug: 'money-bouquets', 
      department: 'bouquets',
      tagline: 'Banknotes carefully styled with roses', 
      itemCount: '10+ Styles', 
      badge: 'Trending', 
      href: '/money-bouquets', 
      image: '/images/categories/money_bouquets.webp', 
      order: 6 
    },
    { 
      id: 'crochet-bouquets', 
      title: 'Handmade Crochet Bouquets', 
      slug: 'crochet-bouquets', 
      department: 'bouquets',
      tagline: 'Keepsake eternal yarn flowers', 
      itemCount: '6+ Keepsakes', 
      badge: 'Handmade', 
      href: '/crochet-bouquets', 
      image: '/images/categories/crochet.webp', 
      order: 7 
    },
    { 
      id: 'dried-flowers', 
      title: 'Dried Everlasting Florals', 
      slug: 'dried-flowers', 
      department: 'bouquets',
      tagline: 'Natural preserved botanical stems', 
      itemCount: '5+ Keepsakes', 
      badge: 'Keepsake', 
      href: '/dried-flowers', 
      image: '/images/product_4_bamboo_dried.jpg', 
      order: 8 
    },
    { 
      id: 'wedding-decor', 
      title: 'Wedding Décor & Bridal Canopies', 
      slug: 'wedding-decor', 
      department: 'bouquets',
      tagline: 'Stage floral arches & car decor', 
      itemCount: '12+ Packages', 
      badge: 'Luxury', 
      href: '/wedding-decor', 
      image: '/images/categories/wedding_car.webp', 
      order: 9 
    },

    // --- SPECIAL OCCASIONS ---
    { 
      id: 'birthday', 
      title: 'Birthday Surprises', 
      slug: 'birthday-surprises', 
      department: 'occasions',
      tagline: 'Bouquets, cakes & midnight delivery', 
      itemCount: '15+ Combos', 
      badge: 'Midnight', 
      href: '/birthday-surprises', 
      image: '/images/categories/birthday_surprises.webp', 
      order: 10 
    },
    { 
      id: 'anniversary', 
      title: 'Wedding Anniversaries', 
      slug: 'anniversary', 
      department: 'occasions',
      tagline: 'Romantic long-stem rose tributes', 
      itemCount: '12+ Styles', 
      badge: 'Romantic', 
      href: '/occasions/anniversary', 
      image: '/images/lahoreblooms/crimson_blush.webp', 
      order: 11 
    },
    { 
      id: 'love-romance', 
      title: 'Love & Romance', 
      slug: 'love-and-romance', 
      department: 'occasions',
      tagline: 'Red roses, chocolates & greeting cards', 
      itemCount: '20+ Styles', 
      badge: 'Valentine', 
      href: '/occasions/love-and-romance', 
      image: '/images/lahoreblooms/scarlet_vow.webp', 
      order: 12 
    },
    { 
      id: 'barat-walima', 
      title: 'Barat & Walima Décor', 
      slug: 'barat-and-walima', 
      department: 'occasions',
      tagline: 'Stage floral arches & car decor', 
      itemCount: '8+ Packages', 
      badge: 'Grand', 
      href: '/occasions/barat-and-walima', 
      image: '/images/categories/wedding_car.webp', 
      order: 13 
    },
    { 
      id: 'eid-gifts', 
      title: 'Eid Mubarak Gifts', 
      slug: 'eid-gifts', 
      department: 'occasions',
      tagline: 'Chaand Raat hampers & Eidi bouquets', 
      itemCount: '10+ Combos', 
      badge: 'Special', 
      href: '/occasions/eid-gifts', 
      image: '/images/lahoreblooms/duo_royale.webp', 
      order: 14 
    },
    { 
      id: 'congratulations', 
      title: 'Congratulations & Graduations', 
      slug: 'congratulations', 
      department: 'occasions',
      tagline: 'Festive congratulations bouquets', 
      itemCount: '10+ Designs', 
      badge: 'Celebrate', 
      href: '/occasions/congratulations', 
      image: '/images/lahoreblooms/golden_duo.webp', 
      order: 15 
    },
    { 
      id: 'get-well', 
      title: 'Get Well Soon & Apologies', 
      slug: 'get-well-and-sorry', 
      department: 'occasions',
      tagline: 'Gentle hospital & apology flowers', 
      itemCount: '8+ Stems', 
      badge: 'Gentle', 
      href: '/occasions/get-well-and-sorry', 
      image: '/images/lahoreblooms/pink_meadow.webp', 
      order: 16 
    },

    // --- CAKES, GIFTS & PERFUMES ---
    { 
      id: 'cakes-gifts', 
      title: 'All Cakes & Gift Combos', 
      slug: 'gifts-and-cakes', 
      department: 'gifts',
      tagline: 'Flowers paired with cakes & sweets', 
      itemCount: '20+ Combos', 
      badge: 'Popular', 
      href: '/gifts-and-cakes', 
      image: '/images/categories/gifts_cakes.webp', 
      order: 17 
    },
    { 
      id: 'fresh-gajray', 
      title: 'Fresh Flower Gajray & Jewellery', 
      slug: 'fresh-flower-gajray', 
      department: 'gifts',
      tagline: 'Motia & rose handcrafted wrist cuffs', 
      itemCount: 'Handmade Daily', 
      badge: 'Handmade', 
      href: '/collections/fresh-flower-gajray', 
      image: '/images/lahoreblooms/ivory_promise.webp', 
      order: 18 
    },
    { 
      id: 'scents-perfumes', 
      title: 'Royal Arabian Oud & Attar', 
      slug: 'scents-and-perfumes', 
      department: 'scents',
      tagline: 'Pure Rooh-e-Gulab & woody oud', 
      itemCount: 'Luxury Crystal', 
      badge: 'New', 
      href: '/collections/scents-and-perfumes', 
      image: '/images/lahoreblooms/cat_jewellery.webp', 
      order: 19 
    },
    { 
      id: 'corporate-gifts', 
      title: 'Corporate Office & Executive Florals', 
      slug: 'corporate', 
      department: 'gifts',
      tagline: 'Weekly desk arrangements & client hampers', 
      itemCount: 'B2B Packages', 
      badge: 'Executive', 
      href: '/corporate', 
      image: '/images/bestseller_wrapped_1.jpg', 
      order: 20 
    },
  ]

  for (const cat of categories) {
    const imageRef = await getOrUploadImageAsset(cat.image)
    const doc = {
      _id: `category-${cat.id}`,
      _type: 'category',
      title: cat.title,
      slug: { _type: 'slug', current: cat.slug },
      department: cat.department,
      tagline: cat.tagline,
      itemCount: cat.itemCount,
      badge: cat.badge,
      href: cat.href,
      order: cat.order,
      ...(imageRef ? { image: imageRef } : {}),
    }
    await client.createOrReplace(doc)
    console.log(`  ✓ Category [${cat.department}]: ${cat.title}`)
  }
}

async function seedProducts() {
  console.log(`\n💐 Seeding ${products.length} Products...`)
  let count = 0
  for (const p of products) {
    count++
    const imageRef = await getOrUploadImageAsset(p.image)
    const doc = {
      _id: `product-${p.id}`,
      _type: 'product',
      title: p.title,
      slug: { _type: 'slug', current: p.slug },
      price: p.price,
      ...(p.oldPrice ? { oldPrice: p.oldPrice } : {}),
      ...(p.badge ? { badge: p.badge } : {}),
      badgeType: p.badgeType || 'hot',
      category: p.category,
      desc: p.desc,
      ...(p.stems ? { stems: p.stems } : {}),
      rating: p.rating || 5.0,
      reviewCount: p.reviewCount || 10,
      inStock: true,
      occasion: p.occasion || [],
      ...(imageRef ? { image: imageRef } : {}),
    }

    await client.createOrReplace(doc)
    console.log(`  [${count}/${products.length}] ✓ ${p.title} (Rs. ${p.price.toLocaleString()})`)
  }
}

async function seedReviews() {
  console.log(`\n⭐ Seeding ${reviews.length} Customer Reviews...`)
  let count = 0
  for (const r of reviews) {
    count++
    const doc = {
      _id: `review-${count}`,
      _type: 'review',
      name: r.name,
      location: r.location,
      rating: r.rating || 5,
      comment: r.quote,
      bouquet: r.item,
      verified: true,
    }
    await client.createOrReplace(doc)
    console.log(`  [${count}/${reviews.length}] ✓ Review from ${r.name} (${r.location})`)
  }
}

async function run() {
  try {
    await seedCategories()
    await seedProducts()
    await seedReviews()
    console.log('\n🎉 ALL DONE! All products, categories, and reviews successfully seeded into Sanity!')
    console.log('👉 Visit http://localhost:3000/studio to manage your store catalog.')
  } catch (err) {
    console.error('\n❌ Error during seeding:', err)
  }
}

run()
