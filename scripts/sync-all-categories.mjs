import { createClient } from '@sanity/client'
import { createReadStream, existsSync } from 'fs'
import { resolve } from 'path'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'hgqfqfmw'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_AUTH_TOKEN || process.env.SANITY_API_WRITE_TOKEN

if (!token) {
  console.error('❌ SANITY_AUTH_TOKEN or SANITY_API_WRITE_TOKEN is required.')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

console.log(`\n🚀 Connected to Sanity Project: ${projectId} [${dataset}]`)

// Asset cache
const assetCache = new Map()

async function getOrUploadImageAsset(imagePath) {
  if (!imagePath) return null
  let relativePath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath
  const fullPath = resolve(process.cwd(), 'public', relativePath)

  if (!existsSync(fullPath)) {
    console.warn(`  ⚠️ Image not found: ${fullPath}`)
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

// 1. Clean up old null/broken categories
async function cleanupOldCategories() {
  console.log('\n🧹 Cleaning up obsolete / unassigned categories...')
  const oldIds = [
    'category-bouquets',
    'category-crochet',
    'category-dried',
    'category-gifts-cakes',
    'category-roses',
  ]
  for (const id of oldIds) {
    try {
      await client.delete(id)
      console.log(`  ✓ Removed old document: ${id}`)
    } catch {
      // document might not exist, ignore
    }
  }
}

// 2. Full categories list matching the entire website
const ALL_CATEGORIES = [
  // ==========================================
  // 1. BOUQUETS & FLORALS (bouquets)
  // ==========================================
  {
    id: 'category-all-bouquets',
    title: 'Hand-Tied Bouquets',
    slug: 'bouquets',
    department: 'bouquets',
    tagline: 'Fresh seasonal florals tied daily',
    itemCount: '24+ Styles',
    badge: '24+ Styles',
    href: '/bouquets',
    image: '/images/categories/all_bouquets.webp',
    order: 1,
  },
  {
    id: 'category-roses-collection',
    title: 'Imported Dutch Roses',
    slug: 'roses',
    department: 'bouquets',
    tagline: 'Long-stem premium roses',
    itemCount: '15+ Varieties',
    badge: 'Hot',
    href: '/roses',
    image: '/images/categories/roses_collection.webp',
    order: 2,
  },
  {
    id: 'category-velvet-red-roses',
    title: 'Velvet Red Roses',
    slug: 'red-roses',
    department: 'bouquets',
    tagline: '12, 24, or 50 stem arrangements',
    itemCount: '12-50 Stems',
    badge: 'Bestseller',
    href: '/roses/red-roses',
    image: '/images/lahoreblooms/ruby_vale_rose.webp',
    order: 3,
  },
  {
    id: 'category-pure-white-roses',
    title: 'Pure White Roses',
    slug: 'white-roses',
    department: 'bouquets',
    tagline: 'Peaceful ivory & blush white stems',
    itemCount: 'Single & Dozens',
    badge: 'Elegant',
    href: '/roses/white-roses',
    image: '/images/lahoreblooms/blush_veil.webp',
    order: 4,
  },
  {
    id: 'category-sunflowers',
    title: 'Sunflowers & Mixed Blooms',
    slug: 'sunflowers',
    department: 'bouquets',
    tagline: 'Vibrant golden sunflowers & lilies',
    itemCount: '8+ Designs',
    badge: 'Radiant',
    href: '/sunflowers',
    image: '/images/categories/sunflowers.webp',
    order: 5,
  },
  {
    id: 'category-money-bouquets',
    title: 'Custom Money Bouquets',
    slug: 'money-bouquets',
    department: 'bouquets',
    tagline: 'Banknotes carefully styled with roses',
    itemCount: '10+ Styles',
    badge: 'Trending',
    href: '/money-bouquets',
    image: '/images/categories/money_bouquets.webp',
    order: 6,
  },
  {
    id: 'category-crochet-bouquets',
    title: 'Handmade Crochet Bouquets',
    slug: 'crochet-bouquets',
    department: 'bouquets',
    tagline: 'Keepsake eternal yarn flowers',
    itemCount: '6+ Keepsakes',
    badge: 'Handmade',
    href: '/crochet-bouquets',
    image: '/images/lahoreblooms/crochet_sub.webp',
    order: 7,
  },
  {
    id: 'category-dried-flowers',
    title: 'Dried Everlasting Florals',
    slug: 'dried-flowers',
    department: 'bouquets',
    tagline: 'Natural preserved botanical stems',
    itemCount: '5+ Keepsakes',
    badge: 'Keepsake',
    href: '/dried-flowers',
    image: '/images/product_4_bamboo_dried.jpg',
    order: 8,
  },
  {
    id: 'category-flower-boxes',
    title: 'Flower Boxes & Velvet Hatboxes',
    slug: 'flower-boxes',
    department: 'bouquets',
    tagline: 'Luxury round and square floral gift boxes',
    itemCount: '8+ Arrangements',
    badge: 'Luxury',
    href: '/collections/flower-boxes',
    image: '/images/lahoreblooms/birthday_cake_box.webp',
    order: 9,
  },
  {
    id: 'category-chocolate-bouquets',
    title: 'Chocolate & Sweet Bouquets',
    slug: 'chocolate-bouquets',
    department: 'bouquets',
    tagline: 'Ferrero Rocher & Dairy Milk paired with roses',
    itemCount: '6+ Styles',
    badge: 'Sweet',
    href: '/gifts-and-cakes',
    image: '/images/lahoreblooms/chocolate_sub.webp',
    order: 10,
  },
  {
    id: 'category-budget-flowers',
    title: 'Budget-Friendly Flowers',
    slug: 'low-budget-flowers',
    department: 'bouquets',
    tagline: 'Affordable fresh blooms under Rs. 1,500',
    itemCount: 'Single & Mini',
    badge: 'Value',
    href: '/bouquets',
    image: '/images/lahoreblooms/pearl_note.webp',
    order: 11,
  },

  // ==========================================
  // 2. SPECIAL OCCASIONS (occasions)
  // ==========================================
  {
    id: 'category-birthday',
    title: 'Birthday Surprises',
    slug: 'birthday-surprises',
    department: 'occasions',
    tagline: 'Bouquets, cakes & midnight delivery',
    itemCount: '15+ Combos',
    badge: 'Midnight',
    href: '/birthday-surprises',
    image: '/images/categories/birthday_surprises.webp',
    order: 12,
  },
  {
    id: 'category-anniversary',
    title: 'Wedding Anniversaries',
    slug: 'anniversary',
    department: 'occasions',
    tagline: 'Romantic long-stem rose tributes',
    itemCount: '12+ Styles',
    badge: 'Romantic',
    href: '/occasions/anniversary',
    image: '/images/lahoreblooms/crimson_blush.webp',
    order: 13,
  },
  {
    id: 'category-love-romance',
    title: 'Love & Romance (Valentine’s)',
    slug: 'love-and-romance',
    department: 'occasions',
    tagline: 'Red roses, chocolates & greeting cards',
    itemCount: '20+ Styles',
    badge: 'Valentine',
    href: '/occasions/love-and-romance',
    image: '/images/lahoreblooms/scarlet_vow.webp',
    order: 14,
  },
  {
    id: 'category-barat-walima',
    title: 'Barat & Walima Décor',
    slug: 'barat-and-walima',
    department: 'occasions',
    tagline: 'Stage floral arches & car decor',
    itemCount: '8+ Packages',
    badge: 'Grand',
    href: '/occasions/barat-and-walima',
    image: '/images/categories/wedding_car.webp',
    order: 15,
  },
  {
    id: 'category-eid-gifts',
    title: 'Eid Mubarak Gifts',
    slug: 'eid-gifts',
    department: 'occasions',
    tagline: 'Chaand Raat hampers & Eidi bouquets',
    itemCount: '10+ Combos',
    badge: 'Special',
    href: '/occasions/eid-gifts',
    image: '/images/lahoreblooms/duo_royale.webp',
    order: 16,
  },
  {
    id: 'category-congratulations',
    title: 'Congratulations & Graduations',
    slug: 'congratulations',
    department: 'occasions',
    tagline: 'Festive congratulations bouquets',
    itemCount: '10+ Designs',
    badge: 'Celebrate',
    href: '/occasions/congratulations',
    image: '/images/lahoreblooms/golden_duo.webp',
    order: 17,
  },
  {
    id: 'category-get-well',
    title: 'Get Well Soon & Apologies',
    slug: 'get-well-and-sorry',
    department: 'occasions',
    tagline: 'Gentle hospital & apology flowers',
    itemCount: '8+ Stems',
    badge: 'Gentle',
    href: '/occasions/get-well-and-sorry',
    image: '/images/lahoreblooms/pink_meadow.webp',
    order: 18,
  },
  {
    id: 'category-mothers-fathers-day',
    title: 'Mother’s & Father’s Day',
    slug: 'mothers-fathers-day',
    department: 'occasions',
    tagline: 'Heartfelt rose & lily bouquets for parents',
    itemCount: 'Curated Sets',
    badge: 'Beloved',
    href: '/occasions/anniversary',
    image: '/images/lahoreblooms/sunlit_noir.webp',
    order: 19,
  },
  {
    id: 'category-newborn-baby',
    title: 'Newborn Baby Celebrations',
    slug: 'newborn-baby',
    department: 'occasions',
    tagline: 'Pink & blue pastel floral hampers',
    itemCount: 'Arrival Combos',
    badge: 'Newborn',
    href: '/occasions/congratulations',
    image: '/images/lahoreblooms/blue_balloon_surprise.webp',
    order: 20,
  },

  // ==========================================
  // 3. CAKES & GIFTS (gifts)
  // ==========================================
  {
    id: 'category-cakes-gifts',
    title: 'All Cakes & Gift Combos',
    slug: 'gifts-and-cakes',
    department: 'gifts',
    tagline: 'Flowers paired with cakes & sweets',
    itemCount: '20+ Combos',
    badge: 'Popular',
    href: '/gifts-and-cakes',
    image: '/images/categories/gifts_cakes.webp',
    order: 21,
  },
  {
    id: 'category-fresh-bakery-cakes',
    title: 'Fresh Bakery Birthday Cakes',
    slug: 'bakery-cakes',
    department: 'gifts',
    tagline: 'Fudge, red velvet & three-milk cakes',
    itemCount: 'Layers & Artisan',
    badge: 'Fresh Daily',
    href: '/gifts-and-cakes',
    image: '/images/lahoreblooms/birthday_cake_box.webp',
    order: 22,
  },
  {
    id: 'category-bento-cakes',
    title: 'Bento & Petite Mini Cakes',
    slug: 'bento-cakes',
    department: 'gifts',
    tagline: 'Single-serve custom message mini cakes',
    itemCount: 'Cute Boxed',
    badge: 'Trending',
    href: '/gifts-and-cakes',
    image: '/images/lahoreblooms/cat_gifts.webp',
    order: 23,
  },
  {
    id: 'category-sweetheart-cakes',
    title: 'Sweetheart Heart-Shaped Cakes',
    slug: 'sweetheart-cakes',
    department: 'gifts',
    tagline: 'Romantic red velvet & chocolate heart cakes',
    itemCount: 'Romance Special',
    badge: 'Romantic',
    href: '/gifts-and-cakes',
    image: '/images/lahoreblooms/velvet_rouge.webp',
    order: 24,
  },
  {
    id: 'category-fresh-gajray',
    title: 'Fresh Flower Gajray & Jewellery',
    slug: 'fresh-flower-gajray',
    department: 'gifts',
    tagline: 'Motia & rose handcrafted wrist cuffs',
    itemCount: 'Handmade Daily',
    badge: 'Handmade',
    href: '/collections/fresh-flower-gajray',
    image: '/images/lahoreblooms/ivory_promise.webp',
    order: 25,
  },
  {
    id: 'category-teddy-bears',
    title: 'Teddy Bear Hugs & Stuffed Plush',
    slug: 'teddy-bears',
    department: 'gifts',
    tagline: 'Cute cuddly teddy bears with bouquet combos',
    itemCount: '1 to 3 Feet',
    badge: 'Cuddly',
    href: '/gifts-and-cakes',
    image: '/images/lahoreblooms/cat_gifts.webp',
    order: 26,
  },
  {
    id: 'category-balloon-gifts',
    title: 'Balloon Gift Boxes & Helium Sets',
    slug: 'balloon-gifts',
    department: 'gifts',
    tagline: 'Clear crystal balloons with rose surprises',
    itemCount: 'Celebration Sets',
    badge: 'Festive',
    href: '/gifts-and-cakes',
    image: '/images/lahoreblooms/birthday_balloon_basket.webp',
    order: 27,
  },
  {
    id: 'category-custom-mugs',
    title: 'Customized Mugs & Cushions',
    slug: 'custom-mugs',
    department: 'gifts',
    tagline: 'Photo-printed ceramic mugs & keepsake cushions',
    itemCount: 'Personalized',
    badge: 'Keepsake',
    href: '/gifts-and-cakes',
    image: '/images/lahoreblooms/cat_gifts.webp',
    order: 28,
  },
  {
    id: 'category-islamic-gifts',
    title: 'Premium Islamic Gifts & Tasbeeh',
    slug: 'islamic-gifts',
    department: 'gifts',
    tagline: 'Quran gift boxes, amber prayer beads & Rooh attar',
    itemCount: 'Spiritual Gifts',
    badge: 'Blessings',
    href: '/gifts-and-cakes',
    image: '/images/lahoreblooms/cat_jewellery.webp',
    order: 29,
  },

  // ==========================================
  // 4. SCENTS & PERFUMES (scents)
  // ==========================================
  {
    id: 'category-scents-perfumes',
    title: 'Royal Arabian Oud & Attar',
    slug: 'scents-and-perfumes',
    department: 'scents',
    tagline: 'Pure Rooh-e-Gulab & woody oud',
    itemCount: 'Luxury Crystal',
    badge: 'New',
    href: '/collections/scents-and-perfumes',
    image: '/images/lahoreblooms/cat_jewellery.webp',
    order: 30,
  },
  {
    id: 'category-designer-perfumes',
    title: 'Designer Perfume Combos for Him & Her',
    slug: 'designer-perfumes',
    department: 'scents',
    tagline: 'Authentic branded fragrances paired with fresh roses',
    itemCount: 'Gift Sets',
    badge: 'Luxury',
    href: '/collections/scents-and-perfumes',
    image: '/images/lahoreblooms/cat_jewellery.webp',
    order: 31,
  },
  {
    id: 'category-scented-candles',
    title: 'Scented Botanical Soy Candles',
    slug: 'scented-candles',
    department: 'scents',
    tagline: 'Hand-poured lavender, rose & vanilla aromatherapy',
    itemCount: 'Soy Wax',
    badge: 'Aroma',
    href: '/collections/scents-and-perfumes',
    image: '/images/lahoreblooms/cat_jewellery.webp',
    order: 32,
  },

  // ==========================================
  // 5. WEDDING & EVENT DÉCOR (decor)
  // ==========================================
  {
    id: 'category-wedding-decor',
    title: 'Wedding Décor & Bridal Canopies',
    slug: 'wedding-decor',
    department: 'decor',
    tagline: 'Stage floral arches, entryways & floral gazebos',
    itemCount: '12+ Packages',
    badge: 'Luxury',
    href: '/wedding-decor',
    image: '/images/lahoreblooms/white_red_wedding.webp',
    order: 33,
  },
  {
    id: 'category-car-decor',
    title: 'Fresh Flower Wedding Car Decoration',
    slug: 'wedding-car-decor',
    department: 'decor',
    tagline: 'Orchid, red rose & lily bridal car decorations',
    itemCount: 'On-Site Setup',
    badge: 'Bridal',
    href: '/wedding-decor',
    image: '/images/categories/wedding_car.webp',
    order: 34,
  },
  {
    id: 'category-bridal-room',
    title: 'Bridal Room & Masehri Decoration',
    slug: 'bridal-room-decor',
    department: 'decor',
    tagline: 'Rose canopies, fairy lights & fragrant petals',
    itemCount: 'Room Packages',
    badge: 'Romantic',
    href: '/wedding-decor',
    image: '/images/lahoreblooms/romantic_canopy.webp',
    order: 35,
  },
  {
    id: 'category-corporate-gifts',
    title: 'Corporate Office & Executive Florals',
    slug: 'corporate',
    department: 'decor',
    tagline: 'Weekly desk arrangements & VIP client hampers',
    itemCount: 'B2B Packages',
    badge: 'Executive',
    href: '/corporate',
    image: '/images/bestseller_wrapped_1.jpg',
    order: 36,
  },

  // ==========================================
  // 6. LAHORE DELIVERY AREAS (delivery)
  // ==========================================
  {
    id: 'category-delivery-gulberg',
    title: 'Gulberg MM Alam Express',
    slug: 'gulberg',
    department: 'delivery',
    tagline: 'Our home workshop • 30–90 mins express dispatch',
    itemCount: 'Express Zone',
    badge: 'Express',
    href: '/delivery-areas/gulberg',
    image: '/images/categories/all_bouquets.webp',
    order: 37,
  },
  {
    id: 'category-delivery-dha',
    title: 'DHA Lahore (Phases 1–9)',
    slug: 'dha',
    department: 'delivery',
    tagline: 'Phases 1-9, Raya Club & Sector Y delivery in 2-3h',
    itemCount: 'Top Area',
    badge: '2-3h',
    href: '/delivery-areas/dha',
    image: '/images/categories/roses_collection.webp',
    order: 38,
  },
  {
    id: 'category-delivery-bahria',
    title: 'Bahria Town & Lake City',
    slug: 'bahria-town',
    department: 'delivery',
    tagline: 'Sectors A-F via Ring Road with temperature control',
    itemCount: 'Ring Road',
    badge: 'Daily',
    href: '/delivery-areas/bahria-town',
    image: '/images/categories/sunflowers.webp',
    order: 39,
  },
  {
    id: 'category-delivery-model-town',
    title: 'Model Town & Garden Town',
    slug: 'model-town',
    department: 'delivery',
    tagline: 'Blocks A-M & Link Road delivery within 2 hours',
    itemCount: 'Direct Route',
    badge: 'Fast',
    href: '/delivery-areas/model-town',
    image: '/images/lahoreblooms/crimson_blush.webp',
    order: 40,
  },
  {
    id: 'category-delivery-johar-town',
    title: 'Johar Town & Faisal Town',
    slug: 'johar-town',
    department: 'delivery',
    tagline: 'Emporium, Doctors Society & Shaukat Khanum zone',
    itemCount: 'Daily Runs',
    badge: 'Same-Day',
    href: '/delivery-areas/johar-town',
    image: '/images/lahoreblooms/ruby_vale_rose.webp',
    order: 41,
  },
  {
    id: 'category-delivery-cantt',
    title: 'Cantt & Cavalry Ground',
    slug: 'cantt',
    department: 'delivery',
    tagline: 'Saddar, PAF Colony, Askari & CMH Lahore',
    itemCount: 'Gate Pass Enabled',
    badge: 'Verified',
    href: '/delivery-areas/cantt',
    image: '/images/lahoreblooms/scarlet_vow.webp',
    order: 42,
  },
]

async function seedAllCategories() {
  await cleanupOldCategories()

  console.log(`\n📂 Upserting all ${ALL_CATEGORIES.length} website categories into Sanity...`)
  let count = 0

  for (const cat of ALL_CATEGORIES) {
    try {
      const imageAsset = await getOrUploadImageAsset(cat.image)
      
      const doc = {
        _id: cat.id,
        _type: 'category',
        title: cat.title,
        slug: {
          _type: 'slug',
          current: cat.slug,
        },
        department: cat.department,
        tagline: cat.tagline,
        itemCount: cat.itemCount,
        badge: cat.badge,
        href: cat.href,
        order: cat.order,
      }

      if (imageAsset) {
        doc.image = imageAsset
      }

      await client.createOrReplace(doc)
      count++
      console.log(`  [${count}/${ALL_CATEGORIES.length}] ✓ [${cat.department}] ${cat.title}`)
    } catch (err) {
      console.error(`  ❌ Failed to seed category "${cat.title}":`, err.message)
    }
  }

  console.log(`\n🎉 Successfully synced all ${count} website categories to Sanity!`)
}

seedAllCategories().catch(console.error)
