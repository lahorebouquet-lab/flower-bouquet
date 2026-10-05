import { createClient } from '@sanity/client'
import { readFileSync, writeFileSync, createReadStream, existsSync } from 'fs'
import { resolve, join } from 'path'

// 1. Read env
const envContent = readFileSync(resolve(process.cwd(), '.env.local'), 'utf8')
const projectId = envContent.match(/NEXT_PUBLIC_SANITY_PROJECT_ID=(.*)/)?.[1]?.trim() || 'hgqfqfmw'
const dataset = envContent.match(/NEXT_PUBLIC_SANITY_DATASET=(.*)/)?.[1]?.trim() || 'production'
const token = envContent.match(/SANITY_API_WRITE_TOKEN=(.*)/)?.[1]?.trim()

if (!token) {
  console.error('No Sanity write token found in .env.local')
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

console.log(`Connected to Sanity: ${projectId} [${dataset}]`)

export const CAKE_PRODUCTS = [
  {
    id: 201,
    badge: "Layers Bakeshop",
    badgeType: "hot",
    title: "Layers Raffaello White Chocolate Cake",
    slug: "layers-raffaello-cake-lahore",
    price: 3499,
    oldPrice: 3900,
    image: "/images/cakes/layers-raffaello-cake-lahore.jpg",
    category: "Gifts & Cakes",
    rating: 5.0,
    reviewCount: 42,
    desc: "Original Layers Bakeshop Raffaello Cake in Lahore. Super-moist delicate vanilla sponge layered with velvety white chocolate mousse, roasted almond crumbles, and topped with iconic Raffaello truffles. Freshly picked up from Layers kitchen on MM Alam Road and delivered across Lahore in 2 to 4 hours with live WhatsApp photo proof before dispatch.",
    stems: "Original 2.5 Lbs Layers Cake, Candle & Free Greeting Card",
    swatches: ["#FAF7F2", "#C6A15B", "#8B1E2D"],
    occasion: ["Birthday", "Anniversary", "Celebration", "Congratulations"]
  },
  {
    id: 202,
    badge: "Viral Bestseller",
    badgeType: "bestseller",
    title: "Layers Lotus Three Milk Tres Leches Cake",
    slug: "layers-lotus-three-milk-cake-lahore",
    price: 3799,
    oldPrice: 4200,
    image: "/images/cakes/layers-lotus-three-milk-cake-lahore.jpg",
    category: "Gifts & Cakes",
    rating: 5.0,
    reviewCount: 94,
    desc: "The city's most viral celebration dessert! Authentic Layers Lotus Three Milk Cake featuring airy sponge soaked in a rich trio of sweet milks, crowned with Belgian Lotus Biscoff spread and crushed caramelized biscuits. Delivered fresh in temperature-safe packaging across DHA, Gulberg, Bahria Town, and Johar Town.",
    stems: "Original 2.5 Lbs Tres Leches Cake, Candle & Free Greeting Card",
    swatches: ["#D89047", "#F8F3EA", "#3D2314"],
    occasion: ["Birthday", "Anniversary", "Eid Gifts", "Celebration"]
  },
  {
    id: 203,
    badge: "Customer Favorite",
    badgeType: "favorite",
    title: "Layers Ferrero Classic Hazelnut Cake",
    slug: "layers-ferrero-classic-cake-lahore",
    price: 2999,
    oldPrice: 3400,
    image: "/images/cakes/layers-ferrero-classic-cake-lahore.jpg",
    category: "Gifts & Cakes",
    rating: 4.9,
    reviewCount: 68,
    desc: "Rich, nutty indulgence crafted with 100% Ferrero hazelnut chocolate, dark cocoa sponge, and roasted hazelnut praline. The ideal companion for red rose bouquets during midnight birthday and anniversary surprises in Lahore.",
    stems: "Original 2.5 Lbs Layers Cake, Candle & Free Greeting Card",
    swatches: ["#3D2314", "#C6A15B", "#8B1E2D"],
    occasion: ["Birthday", "Anniversary", "Romance", "Valentine"]
  },
  {
    id: 204,
    badge: "Layers Classic",
    badgeType: "save",
    title: "Layers Milky Malt Fudge Cake",
    slug: "layers-milky-malt-cake-lahore",
    price: 2399,
    oldPrice: 2800,
    image: "/images/cakes/layers-milky-malt-cake-lahore.jpg",
    category: "Gifts & Cakes",
    rating: 4.8,
    reviewCount: 51,
    desc: "Wholesome imported malt blended with silky premium cocoa and fresh cream icing on tender chocolate sponge layers. One of the highest-rated everyday celebration cakes in Lahore, delivered same-day in 2 to 4 hours.",
    stems: "Original 2 Lbs Layers Cake, Candle & Free Greeting Card",
    swatches: ["#4A2E18", "#EAD5BE", "#8B1E2D"],
    occasion: ["Birthday", "Congratulations", "Celebration"]
  },
  {
    id: 205,
    badge: "Bestseller",
    badgeType: "bestseller",
    title: "Layers Chocolate Heaven Cake",
    slug: "layers-chocolate-heaven-cake-lahore",
    price: 2699,
    oldPrice: 3100,
    image: "/images/cakes/layers-chocolate-heaven-cake-lahore.jpg",
    category: "Gifts & Cakes",
    rating: 4.9,
    reviewCount: 56,
    desc: "Double-layered fluffy chocolate sponge smothered in silky light chocolate frosting and dark chocolate curls. Pure melt-in-the-mouth cocoa perfection delivered with personalized message cards.",
    stems: "Original 2.5 Lbs Layers Cake, Candle & Free Greeting Card",
    swatches: ["#2B1B17", "#6F4E37", "#C6A15B"],
    occasion: ["Birthday", "Anniversary", "Romance"]
  },
  {
    id: 206,
    badge: "Signature",
    badgeType: "hot",
    title: "Layers Lotus Biscoff Speculoos Cake",
    slug: "layers-lotus-biscoff-cake-lahore",
    price: 3499,
    oldPrice: 3900,
    image: "/images/cakes/layers-lotus-biscoff-cake-lahore.jpg",
    category: "Gifts & Cakes",
    rating: 5.0,
    reviewCount: 75,
    desc: "Rich Lotus Biscoff spread paired with velvety cream cheese frosting over golden vanilla sponge, generously sprinkled with crushed crunchy Belgian speculoos biscuits. Perfect for festive celebrations.",
    stems: "Original 2.5 Lbs Layers Cake, Candle & Free Greeting Card",
    swatches: ["#C97A3E", "#FAF3EA", "#0B0B0B"],
    occasion: ["Birthday", "Anniversary", "Congratulations"]
  },
  {
    id: 207,
    badge: "Imported Chocolates",
    badgeType: "hot",
    title: "Ferrero Rocher Luxury 16-Piece Gift Box",
    slug: "ferrero-rocher-luxury-gift-box-lahore",
    price: 1499,
    oldPrice: 1800,
    image: "/images/cakes/ferrero-rocher-luxury-gift-box-lahore.png",
    category: "Gifts & Cakes",
    rating: 5.0,
    reviewCount: 118,
    desc: "Original imported Italian Ferrero Rocher 16-praline golden gift box. Whole crunchy hazelnut at the heart, wrapped in a creamy hazelnut filling, crisp wafer shell, and milk chocolate with roasted pieces. Tied with luxury satin ribbon.",
    stems: "16 Imported Ferrero Rocher Pralines, Satin Ribbon & Greeting Card",
    swatches: ["#C6A15B", "#0B0B0B", "#8B1E2D"],
    occasion: ["Anniversary", "Birthday", "Romance", "Valentine", "Eid Gifts"]
  },
  {
    id: 208,
    badge: "Add-On Gift",
    badgeType: "save",
    title: "Nestle KitKat 4-Finger Chocolate Gift Pack",
    slug: "nestle-kitkat-chocolate-gift-lahore",
    price: 410,
    oldPrice: 480,
    image: "/images/cakes/nestle-kitkat-chocolate-gift-lahore.png",
    category: "Gifts & Cakes",
    rating: 4.8,
    reviewCount: 34,
    desc: "Crispy wafer fingers drenched in smooth milk chocolate. The classic break-time treat to bundle with fresh flower bouquets and teddy bears across Lahore.",
    stems: "Original Nestle KitKat 4-Finger Bar",
    swatches: ["#E52421", "#FFFFFF", "#3D2314"],
    occasion: ["Birthday", "Congratulations", "Get Well Soon"]
  },
  {
    id: 209,
    badge: "Imported",
    badgeType: "save",
    title: "Bounty Coconut Chocolate Bar 57g Gift",
    slug: "bounty-chocolate-gift-bar-lahore",
    price: 590,
    oldPrice: 650,
    image: "/images/cakes/bounty-chocolate-gift-bar-lahore.png",
    category: "Gifts & Cakes",
    rating: 4.7,
    reviewCount: 26,
    desc: "Moist, tender coconut enveloped in thick, creamy milk chocolate. A delightful tropical sweetness addition to any floral surprise in Lahore.",
    stems: "Original Bounty Double Chocolate Bar 57g",
    swatches: ["#005CA9", "#FFFFFF", "#5A3825"],
    occasion: ["Birthday", "Congratulations", "Romance"]
  },
  {
    id: 210,
    badge: "Add-On Gift",
    badgeType: "save",
    title: "Snickers Peanut Caramel Chocolate Bar 57g",
    slug: "snickers-chocolate-bar-lahore",
    price: 394,
    oldPrice: 450,
    image: "/images/cakes/snickers-chocolate-bar-lahore.webp",
    category: "Gifts & Cakes",
    rating: 4.9,
    reviewCount: 31,
    desc: "Loaded with roasted peanuts, rich nougat, and chewy caramel enrobed in milk chocolate. Fast same-day express delivery alongside fresh roses.",
    stems: "Original Snickers Bar 57g",
    swatches: ["#482914", "#FFFFFF", "#002B7F"],
    occasion: ["Birthday", "Congratulations", "Get Well Soon"]
  },
  {
    id: 211,
    badge: "Add-On Gift",
    badgeType: "save",
    title: "Mars Chocolate Bar 51g Gift",
    slug: "mars-chocolate-bar-lahore",
    price: 378,
    oldPrice: 430,
    image: "/images/cakes/mars-chocolate-bar-lahore.png",
    category: "Gifts & Cakes",
    rating: 4.8,
    reviewCount: 22,
    desc: "Soft nougat and golden caramel wrapped in luxurious thick milk chocolate. Perfect sweet surprise for loved ones in Lahore.",
    stems: "Original Mars Chocolate Bar 51g",
    swatches: ["#000000", "#D32F2F", "#C6A15B"],
    occasion: ["Birthday", "Congratulations", "Get Well Soon"]
  },
  {
    id: 212,
    badge: "Add-On Gift",
    badgeType: "save",
    title: "Twix Caramel Cookie Chocolate Bar 50g",
    slug: "twix-caramel-chocolate-bar-lahore",
    price: 399,
    oldPrice: 450,
    image: "/images/cakes/twix-caramel-chocolate-bar-lahore.png",
    category: "Gifts & Cakes",
    rating: 4.8,
    reviewCount: 29,
    desc: "Two crisp, crunchy biscuit fingers topped with rich caramel and bathed in smooth milk chocolate. A timeless celebration favourite.",
    stems: "Original Twix Twin Bar 50g",
    swatches: ["#C69214", "#D32F2F", "#3D2314"],
    occasion: ["Birthday", "Congratulations"]
  },
  {
    id: 213,
    badge: "Gift Pouch",
    badgeType: "bestseller",
    title: "Mars Miniatures Chocolate Sharing Pouch 220g",
    slug: "mars-miniatures-chocolate-gift-pack-lahore",
    price: 2144,
    oldPrice: 2450,
    image: "/images/cakes/mars-miniatures-chocolate-gift-pack-lahore.webp",
    category: "Gifts & Cakes",
    rating: 4.9,
    reviewCount: 46,
    desc: "Generous 220g sharing pouch filled with individually wrapped miniature Mars bars. Ideal for family parties, Eid festivities, and corporate gifting in Lahore.",
    stems: "220g Imported Mars Miniatures Sharing Bag",
    swatches: ["#000000", "#C6A15B", "#D32F2F"],
    occasion: ["Birthday", "Anniversary", "Eid Gifts", "Celebration"]
  },
  {
    id: 214,
    badge: "Gift Pouch",
    badgeType: "bestseller",
    title: "Snickers Miniatures Chocolate Sharing Pouch 220g",
    slug: "snickers-miniatures-chocolate-gift-pack-lahore",
    price: 2144,
    oldPrice: 2450,
    image: "/images/cakes/snickers-miniatures-chocolate-gift-pack-lahore.webp",
    category: "Gifts & Cakes",
    rating: 4.9,
    reviewCount: 43,
    desc: "Imported 220g pouch of bite-sized Snickers miniatures bursting with peanuts, caramel, and nougat. Hand-delivered in Lahore with customized gift card.",
    stems: "220g Imported Snickers Miniatures Pouch",
    swatches: ["#3D2314", "#002B7F", "#C6A15B"],
    occasion: ["Birthday", "Anniversary", "Celebration"]
  },
  {
    id: 215,
    badge: "Luxury Pouch",
    badgeType: "hot",
    title: "Snickers Minis Chocolate 12-Pack Pouch 180g",
    slug: "snickers-minis-pouch-chocolate-gift-lahore",
    price: 2798,
    oldPrice: 3100,
    image: "/images/cakes/snickers-minis-pouch-chocolate-gift-lahore.webp",
    category: "Gifts & Cakes",
    rating: 5.0,
    reviewCount: 39,
    desc: "Imported premium 180g Snickers Minis pouch containing 12 individually wrapped chocolate bars. Makes an impressive party bundle paired with celebration bouquets.",
    stems: "180g Imported Snickers Minis 12-Pack Bag",
    swatches: ["#3D2314", "#C6A15B", "#8B1E2D"],
    occasion: ["Birthday", "Anniversary", "Celebration"]
  },
  {
    id: 216,
    badge: "Trending Worldwide",
    badgeType: "hot",
    title: "MrBeast Feastables Milk Crunch Chocolate",
    slug: "mrbeast-feastables-chocolate-lahore",
    price: 2300,
    oldPrice: 2600,
    image: "/images/cakes/mrbeast-feastables-chocolate-lahore.png",
    category: "Gifts & Cakes",
    rating: 5.0,
    reviewCount: 91,
    desc: "Original imported MrBeast Feastables chocolate bar crafted with grass-fed milk, organic cocoa, and puffed rice crisps. The trendiest youth gift in Lahore, delivered same-day.",
    stems: "Original MrBeast Feastables Milk Crunch Bar",
    swatches: ["#00B4D8", "#F72585", "#3D2314"],
    occasion: ["Birthday", "Celebration", "Congratulations"]
  },
  {
    id: 217,
    badge: "Layers Bakeshop",
    badgeType: "hot",
    title: "Layers Cadbury Dairy Milk Chocolate Cake",
    slug: "layers-dairy-milk-chocolate-cake-lahore",
    price: 2699,
    oldPrice: 3100,
    image: "/images/cakes/layers-dairy-milk-chocolate-cake-lahore.jpg",
    category: "Gifts & Cakes",
    rating: 4.9,
    reviewCount: 63,
    desc: "Signature Layers cake infused with original Cadbury Dairy Milk chocolate, creamy fudge frosting, and milk chocolate chunks on moist cocoa sponge. Delivered fresh anywhere in Lahore.",
    stems: "Original 2.5 Lbs Layers Cake, Candle & Free Greeting Card",
    swatches: ["#482D7F", "#C6A15B", "#FAF7F2"],
    occasion: ["Birthday", "Anniversary", "Romance"]
  },
  {
    id: 218,
    badge: "Royal Collection",
    badgeType: "hot",
    title: "Layers Royal Pistachio Celebration Cake",
    slug: "layers-pistachio-celebration-cake-lahore",
    price: 3899,
    oldPrice: 4400,
    image: "/images/cakes/layers-pistachio-celebration-cake-lahore.jpg",
    category: "Gifts & Cakes",
    rating: 5.0,
    reviewCount: 49,
    desc: "Aristocratic pistachio paste layered through light sponge and pistachio cream, crowned with chopped roasted Persian pistachios. A regal centerpiece for high-end celebrations.",
    stems: "Original 2.5 Lbs Royal Pistachio Cake, Candle & Free Greeting Card",
    swatches: ["#87A96B", "#C6A15B", "#F8F3EA"],
    occasion: ["Anniversary", "Birthday", "Wedding", "Eid Gifts"]
  },
  {
    id: 219,
    badge: "Premium Belgian",
    badgeType: "bestseller",
    title: "Layers Belgian Malt Dark Chocolate Cake",
    slug: "layers-belgian-malt-cake-lahore",
    price: 3099,
    oldPrice: 3500,
    image: "/images/cakes/layers-belgian-malt-cake-lahore.jpg",
    category: "Gifts & Cakes",
    rating: 5.0,
    reviewCount: 72,
    desc: "Crafted with imported 54% dark Belgian couverture chocolate and malted barley syrup, offering a sophisticated bittersweet contrast for cocoa lovers in Lahore.",
    stems: "Original 2.5 Lbs Belgian Cake, Candle & Free Greeting Card",
    swatches: ["#1F1610", "#5A3825", "#C6A15B"],
    occasion: ["Birthday", "Anniversary", "Romance", "Corporate"]
  },
  {
    id: 220,
    badge: "Luxury Supreme",
    badgeType: "hot",
    title: "Layers Ferrero Rocher Square Supreme Cake",
    slug: "layers-ferrero-rocher-premium-cake-lahore",
    price: 3999,
    oldPrice: 4500,
    image: "/images/cakes/layers-ferrero-rocher-premium-cake-lahore.jpg",
    category: "Gifts & Cakes",
    rating: 5.0,
    reviewCount: 122,
    desc: "The undisputed emperor of celebration cakes in Lahore. Rich chocolate hazelnut sponge stacked with Nutella mousse, roasted hazelnut crunch, and crowned with whole Ferrero Rocher truffles.",
    stems: "Original 3 Lbs Supreme Ferrero Cake, Candle & Free Greeting Card",
    swatches: ["#3D2314", "#C6A15B", "#8B1E2D"],
    occasion: ["Birthday", "Anniversary", "Wedding", "Romance"]
  },
  {
    id: 221,
    badge: "All-Time Favorite",
    badgeType: "favorite",
    title: "Layers Nutella Hazelnut Cream Cake",
    slug: "layers-nutella-cake-lahore",
    price: 2799,
    oldPrice: 3200,
    image: "/images/cakes/layers-nutella-cake-lahore.jpg",
    category: "Gifts & Cakes",
    rating: 4.9,
    reviewCount: 84,
    desc: "Generous coatings of authentic Italian Ferrero Nutella spread layered with soft cocoa sponge and whipped chocolate mousse. Guaranteed to delight hazelnut lovers in Lahore.",
    stems: "Original 2.5 Lbs Nutella Cake, Candle & Free Greeting Card",
    swatches: ["#4A2E18", "#EAD5BE", "#8B1E2D"],
    occasion: ["Birthday", "Anniversary", "Romance"]
  },
  {
    id: 222,
    badge: "Romantic Pick",
    badgeType: "hot",
    title: "Layers Red Velvet Anniversary Cake",
    slug: "layers-red-velvet-anniversary-cake-lahore",
    price: 2799,
    oldPrice: 3200,
    image: "/images/cakes/layers-red-velvet-anniversary-cake-lahore.jpg",
    category: "Gifts & Cakes",
    rating: 4.9,
    reviewCount: 89,
    desc: "Vibrant crimson velvet cocoa sponge layered with silky tangy Philadelphia-style cream cheese frosting and fine red velvet crumbs. The #1 anniversary cake in Lahore.",
    stems: "Original 2.5 Lbs Red Velvet Cake, Candle & Free Greeting Card",
    swatches: ["#8B1E2D", "#FAF7F2", "#C6A15B"],
    occasion: ["Anniversary", "Romance", "Birthday", "Valentine"]
  },
  {
    id: 223,
    badge: "Artisanal",
    badgeType: "bestseller",
    title: "Layers Salted Caramel Bliss Cake",
    slug: "layers-salted-caramel-cake-lahore",
    price: 2999,
    oldPrice: 3400,
    image: "/images/cakes/layers-salted-caramel-cake-lahore.jpg",
    category: "Gifts & Cakes",
    rating: 4.8,
    reviewCount: 44,
    desc: "Buttery slow-cooked salted caramel drizzles layered between fluffy golden sponge and whipped caramel buttercream, topped with sea salt flakes.",
    stems: "Original 2.5 Lbs Salted Caramel Cake, Candle & Free Greeting Card",
    swatches: ["#B87333", "#F5E8D8", "#3D2314"],
    occasion: ["Birthday", "Anniversary", "Celebration"]
  },
  {
    id: 224,
    badge: "Deep Fudge",
    badgeType: "save",
    title: "Layers German Fudge Rich Chocolate Cake",
    slug: "layers-german-fudge-cake-lahore",
    price: 2599,
    oldPrice: 2999,
    image: "/images/cakes/layers-german-fudge-cake-lahore.jpg",
    category: "Gifts & Cakes",
    rating: 4.8,
    reviewCount: 38,
    desc: "Dense, intensely rich German chocolate fudge layers with roasted nuts and sweet coconut accents. A heavy cocoa dream delivered fresh across Lahore.",
    stems: "Original 2.5 Lbs German Fudge Cake, Candle & Free Greeting Card",
    swatches: ["#24150E", "#8B5A2B", "#C6A15B"],
    occasion: ["Birthday", "Celebration"]
  },
  {
    id: 225,
    badge: "Ultra Light",
    badgeType: "favorite",
    title: "Layers Chocolate Silk Mousse Cake",
    slug: "layers-chocolate-mousse-cake-lahore",
    price: 2599,
    oldPrice: 2999,
    image: "/images/cakes/layers-chocolate-mousse-cake-lahore.jpg",
    category: "Gifts & Cakes",
    rating: 4.9,
    reviewCount: 49,
    desc: "Airy, cloud-soft Belgian chocolate mousse layered on a thin chocolate biscuit base with a dark mirror glaze top. Light yet deeply indulgent.",
    stems: "Original 2.5 Lbs Chocolate Mousse Cake, Candle & Free Greeting Card",
    swatches: ["#301E14", "#8B1E2D", "#FAF7F2"],
    occasion: ["Birthday", "Anniversary", "Romance"]
  },
  {
    id: 226,
    badge: "Barista Special",
    badgeType: "bestseller",
    title: "Layers Classic Espresso Coffee Cake",
    slug: "layers-special-coffee-cake-lahore",
    price: 2699,
    oldPrice: 3100,
    image: "/images/cakes/layers-special-coffee-cake-lahore.jpg",
    category: "Gifts & Cakes",
    rating: 4.8,
    reviewCount: 41,
    desc: "Brewed Arabica espresso infused sponge layered with aromatic mocha cream and dusted with fine cocoa powder. The ultimate cake for coffee aficionados in Lahore.",
    stems: "Original 2.5 Lbs Coffee Cake, Candle & Free Greeting Card",
    swatches: ["#4B3621", "#C6A15B", "#F5E8D8"],
    occasion: ["Birthday", "Celebration", "Corporate"]
  }
];

// Helper: upload asset to sanity
const assetCache = new Map();
async function getOrUploadImageAsset(imagePath) {
  if (!imagePath) return null;
  let relativePath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  const fullPath = resolve(process.cwd(), 'public', relativePath);

  if (!existsSync(fullPath)) {
    console.warn(`File does not exist: ${fullPath}`);
    return null;
  }
  if (assetCache.has(fullPath)) {
    return assetCache.get(fullPath);
  }

  try {
    const stream = createReadStream(fullPath);
    const asset = await client.assets.upload('image', stream, {
      filename: relativePath.split('/').pop() || 'image.jpg',
    });
    const ref = {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    };
    assetCache.set(fullPath, ref);
    return ref;
  } catch (err) {
    console.warn(`⚠️ Failed to upload image ${relativePath}:`, err.message);
    return null;
  }
}

async function run() {
  console.log(`\n🍰 Seeding ${CAKE_PRODUCTS.length} Cakes & Chocolates into Sanity...`);
  let count = 0;
  for (const p of CAKE_PRODUCTS) {
    count++;
    const imageRef = await getOrUploadImageAsset(p.image);
    const doc = {
      _id: `product-cake-${p.id}`,
      _type: 'product',
      title: p.title,
      slug: { _type: 'slug', current: p.slug },
      price: p.price,
      ...(p.oldPrice ? { oldPrice: p.oldPrice } : {}),
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
    console.log(`  [${count}/${CAKE_PRODUCTS.length}] ✓ Sanity synced: ${p.title} (Rs. ${p.price})`);
  }

  // Update app/data/products.ts
  console.log('\n📝 Updating app/data/products.ts with new cake products...');
  const productsFilePath = resolve(process.cwd(), 'app/data/products.ts');
  let productsContent = readFileSync(productsFilePath, 'utf8');

  // Check if already present
  if (productsContent.includes('layers-raffaello-cake-lahore')) {
    console.log('  Notice: Cakes already present in products.ts, skipping append.');
  } else {
    // Find the end of ALL_PRODUCTS array
    const lastProductMarker = 'export const ALL_PRODUCTS: Product[] = [';
    const closeArrayMarker = '];\n\nexport const LAHORE_AREAS';
    
    if (productsContent.includes(closeArrayMarker)) {
      const cakeCode = CAKE_PRODUCTS.map(p => `  ${JSON.stringify(p, null, 2).replace(/\n/g, '\n  ')},`).join('\n\n');
      productsContent = productsContent.replace(
        closeArrayMarker,
        `,\n\n  // --- 26 ORIGINAL CAKES & IMPORTED CHOCOLATES (LAHORE DELIVERY) ---\n${cakeCode}\n];\n\nexport const LAHORE_AREAS`
      );
      writeFileSync(productsFilePath, productsContent, 'utf8');
      console.log('  ✓ app/data/products.ts updated successfully with 26 cakes & chocolates!');
    } else {
      console.warn('  ⚠️ Could not find closeArrayMarker in products.ts');
    }
  }

  console.log('\n🎉 ALL CAKES & CHOCOLATES SUCCESSFULLY SYNCED TO SANITY & LOCAL DATA!');
}

run().catch(console.error);
