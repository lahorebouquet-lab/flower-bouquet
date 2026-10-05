import { createClient } from '@sanity/client'
import { createReadStream, existsSync } from 'fs'
import { resolve } from 'path'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'hgqfqfmw'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = process.env.SANITY_AUTH_TOKEN || process.env.SANITY_API_WRITE_TOKEN

if (!token) {
  console.error('❌ SANITY_AUTH_TOKEN is required.')
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

// Image cache
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
      filename: relativePath.split('/').pop() || 'blog.jpg',
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

// Helper to make simple block content
function createBlock(text, style = 'normal') {
  return {
    _type: 'block',
    _key: Math.random().toString(36).substring(2, 9),
    style,
    markDefs: [],
    children: [
      {
        _type: 'span',
        _key: Math.random().toString(36).substring(2, 9),
        text,
        marks: [],
      },
    ],
  }
}

const BLOGS = [
  {
    id: 'blog-how-to-keep-flowers-fresh-in-lahore',
    title: 'How to Keep Flower Bouquets Fresh in Lahore Heat (Florist Care Guide)',
    slug: 'how-to-keep-flowers-fresh-in-lahore',
    tag: 'Flower Care',
    readTime: '4 min read',
    publishedAt: '2026-10-01',
    author: 'Lahore Bouquet Florist Team',
    excerpt: "Learn how to protect cut roses, lilies, and sunflowers from wilting in Lahore's extreme climate. Professional water changing, stem trimming, and floral food techniques.",
    image: '/images/hero-luxury-bouquet.jpg',
    isFeatured: true,
    body: [
      createBlock('Keeping cut flowers fresh in Lahore requires special attention due to high ambient temperatures and dry indoor air conditioning.', 'normal'),
      createBlock('1. Trim Stems at a 45-Degree Angle', 'h2'),
      createBlock('Always recut the flower stems at a 45-degree angle under lukewarm running water before placing them in a vase. This prevents air bubbles from blocking water uptake and increases surface area for hydration.', 'normal'),
      createBlock('2. Change Water Every 24 to 48 Hours', 'h2'),
      createBlock('In Lahore heat, bacteria multiply rapidly in stagnant vase water. Discard old water daily, rinse the vase thoroughly, and refill with cool, clean drinking water.', 'normal'),
      createBlock('3. Keep Away from Direct Sunlight & AC Drafts', 'h2'),
      createBlock('Never place your bouquet on sunny windowsills or directly beneath an air conditioner vent. The cold dry air dehydrates delicate petals just as rapidly as direct sunlight.', 'normal'),
      createBlock('4. Remove Submerged Foliage', 'h2'),
      createBlock('Ensure no leaves or greenery touch the water level inside the vase. Submerged leaves rot within hours, creating murky water and shortening rose lifespan.', 'normal'),
    ],
  },
  {
    id: 'blog-anniversary-flower-guide-pakistan',
    title: 'Best Anniversary Flowers by Year: 1st, 5th, 10th & 25th Milestones in Pakistan',
    slug: 'anniversary-flower-guide-pakistan',
    tag: 'Occasions Guide',
    readTime: '5 min read',
    publishedAt: '2026-09-28',
    author: 'Lahore Bouquet Master Florist',
    excerpt: 'Discover the symbolic meaning of anniversary blooms. How to choose between imported velvet roses, oriental lilies, and mixed pastels with midnight surprise delivery.',
    image: '/images/lahoreblooms/crimson_blush.webp',
    isFeatured: true,
    body: [
      createBlock('Anniversaries are an opportunity to commemorate shared memories, devotion, and partnership. Each milestone year carries traditional floral symbolism.', 'normal'),
      createBlock('1st Anniversary: Carnations & Radiant Red Roses', 'h2'),
      createBlock('The first year represents young, passionate love. A bouquet of 24 long-stem imported Dutch red roses paired with delicate white baby breath is the quintessential Pakistani choice.', 'normal'),
      createBlock('5th Anniversary: Daisies & Sunflowers', 'h2'),
      createBlock('Five years signifies strength and resilience. Bright golden sunflowers combined with oriental lilies bring sunshine and joyful warmth to your celebration.', 'normal'),
      createBlock('10th Anniversary: Fragrant Oriental Lilies', 'h2'),
      createBlock('A decade together deserves majestic grandeur. Grand Casablanca lilies and velvet roses arranged in a crystal vase represent deep honor, prosperity, and enduring elegance.', 'normal'),
      createBlock('25th Silver Jubilee: 50 Imported White & Sterling Roses', 'h2'),
      createBlock('A quarter-century of companionship is celebrated with regal white roses, eucalyptus leaves, and silver ribbon accents.', 'normal'),
    ],
  },
  {
    id: 'blog-money-bouquet-designs-and-pricing-lahore',
    title: 'Money Bouquets in Lahore: Denominations, Designs & Security Guide',
    slug: 'money-bouquet-designs-and-pricing-lahore',
    tag: 'Gifting Trends',
    readTime: '4 min read',
    publishedAt: '2026-09-20',
    author: 'Creative Director Hamza',
    excerpt: 'Everything you need to know about ordering custom cash bouquets in Lahore. How banknotes are safely preserved, design trends, and pricing breakdowns.',
    image: '/images/categories/money_bouquets.webp',
    isFeatured: false,
    body: [
      createBlock('Cash money bouquets have surged in popularity across Lahore for weddings, birthdays, and graduation milestones.', 'normal'),
      createBlock('How Banknotes Are Safely Handled Without Damage', 'h2'),
      createBlock('Our master florists never puncture or staple currency notes. Each note is inserted into food-grade transparent polymer sleeves before being artistically pleated around fresh Dutch roses.', 'normal'),
      createBlock('Popular Denomination Combos', 'h2'),
      createBlock('• Rs. 500 & Rs. 1,000 note swirls with 12 crimson red roses\n• Rs. 5,000 banknote fan arrangements for weddings and groom Eidi\n• Crisp uncirculated State Bank currency paired with Ferrero Rocher chocolates', 'normal'),
      createBlock('Security & Photo Verification Before Dispatch', 'h2'),
      createBlock('Given the value of cash bouquets, every order is counted on high-definition video in our Gulberg atelier, sealed with a security tag, and sent to you on WhatsApp before dispatch.', 'normal'),
    ],
  },
  {
    id: 'blog-birthday-gift-ideas-for-her-lahore',
    title: 'Top Birthday Gift & Flower Ideas for Her in Lahore (2026 Edition)',
    slug: 'birthday-gift-ideas-for-her-lahore',
    tag: 'Occasions Guide',
    readTime: '5 min read',
    publishedAt: '2026-09-15',
    author: 'Floral Stylist Ayesha',
    excerpt: 'Looking for the perfect birthday surprise for your wife, sister, or best friend in Lahore? Explore top trending combinations of imported red roses, custom chocolate boxes, and midnight cake deliveries.',
    image: '/images/categories/birthday_surprises.webp',
    isFeatured: false,
    body: [
      createBlock('Finding the perfect birthday gift requires a thoughtful balance of beauty, sentimentality, and surprise.', 'normal'),
      createBlock('1. The Midnight Cake & Floral Delivery', 'h2'),
      createBlock('Nothing beats the thrill of having fresh flowers and a freshly baked fudge or red velvet cake arrive right at 12:00 midnight at her doorstep in DHA or Gulberg.', 'normal'),
      createBlock('2. Velvet Acrylic Flower Boxes with Fairy Lights', 'h2'),
      createBlock('Clear acrylic jewelry boxes filled with preserved or fresh roses and soft fairy lights offer an enchanting Instagrammable unboxing experience.', 'normal'),
      createBlock('3. Personalized Message Greeting Card', 'h2'),
      createBlock('Every Lahore Bouquet arrangement includes a complimentary thick gold-embossed greeting card handwritten with your bespoke heartfelt message.', 'normal'),
    ],
  },
  {
    id: 'blog-imported-dutch-roses-vs-local-roses-lahore',
    title: 'Why Imported Dutch Roses Last Longer Than Local Farm Roses in Lahore',
    slug: 'imported-dutch-roses-vs-local-roses-lahore',
    tag: 'Flower Meaning',
    readTime: '4 min read',
    publishedAt: '2026-09-10',
    author: 'Senior Floral Designer Tariq',
    excerpt: 'An insider comparison between Dutch cold-chain roses and local desi roses. Discover head size differences, petal count, vase lifespan, and why Dutch roses make celebrations memorable.',
    image: '/images/lahoreblooms/ruby_vale_rose.webp',
    isFeatured: false,
    body: [
      createBlock('When ordering roses in Lahore, customers frequently ask why imported Dutch roses command a premium over local Pattoki farm roses.', 'normal'),
      createBlock('Stem Thickness and Water Vascularity', 'h2'),
      createBlock('Imported Dutch roses feature thick, robust woody stems capable of pumping water directly into the blossom even in 35°C temperatures. Local varieties have thinner stems prone to bent-neck within 24 hours.', 'normal'),
      createBlock('Petal Density & Head Size', 'h2'),
      createBlock('A single Dutch Grand Prix or Red Naomi rose boasts up to 45 to 55 velvet petals, opening up to three times the diameter of standard local roses.', 'normal'),
      createBlock('Vase Lifespan: 7 to 10 Days vs 2 Days', 'h2'),
      createBlock('With proper water changes and cold storage, Dutch roses routinely last 7 to 10 days in air-conditioned Lahore homes, whereas untreated local roses fade in 48 hours.', 'normal'),
    ],
  },
]

async function seedAllBlogs() {
  console.log(`\n📚 Upserting ${BLOGS.length} blog articles into Sanity...`)
  let count = 0

  for (const blog of BLOGS) {
    try {
      const imageAsset = await getOrUploadImageAsset(blog.image)

      const doc = {
        _id: blog.id,
        _type: 'blog',
        title: blog.title,
        slug: {
          _type: 'slug',
          current: blog.slug,
        },
        tag: blog.tag,
        readTime: blog.readTime,
        publishedAt: blog.publishedAt,
        author: blog.author,
        excerpt: blog.excerpt,
        body: blog.body,
        isFeatured: blog.isFeatured,
      }

      if (imageAsset) {
        doc.mainImage = imageAsset
      }

      await client.createOrReplace(doc)
      count++
      console.log(`  [${count}/${BLOGS.length}] ✓ [${blog.tag}] ${blog.title}`)
    } catch (err) {
      console.error(`  ❌ Failed to seed blog "${blog.title}":`, err.message)
    }
  }

  console.log(`\n🎉 Successfully synced all ${count} blog articles to Sanity!`)
}

seedAllBlogs().catch(console.error)
