export interface Product {
  id: number | string;
  _id?: string;
  _updatedAt?: string;
  badge?: string;
  badgeType?: "hot" | "bestseller" | "save" | "new" | "favorite" | "promotion" | string;
  title: string;
  slug: string;
  price: number;
  oldPrice?: number;
  image: string;
  gallery?: string[];
  images?: string[];
  category: "Bouquets" | "Roses" | "Sunflowers" | "Wedding Décor" | "Gifts & Cakes" | "Money Bouquets" | "Crochet" | "Dried" | "Fresh Flower Gajray" | string;
  rating?: number;
  reviewCount?: number;
  desc?: string;
  stems?: string;
  swatches?: string[];
  occasion?: string[];
  inStock?: boolean;
}

export const ALL_PRODUCTS: Product[] = [
  // 101. The Lahore Signature Royale: Imported Dutch Red Roses
  {
    id: 101,
    badge: "Signature",
    badgeType: "hot",
    title: "The Lahore Signature Royale: 36 Imported Dutch Red Roses",
    slug: "lahore-signature-royale-dutch-roses",
    price: 7499,
    oldPrice: 8500,
    image: "/images/hero-luxury-bouquet.jpg",
    category: "Roses",
    desc: "The pinnacle of Lahore luxury gifting. 36 premium imported Dutch velvet red roses nestled in fragrant baby's breath and silver dollar eucalyptus, wrapped in matte black and rich burgundy paper, tied with our signature champagne gold Lahore Bouquet satin ribbon. Hand-tied in Gulberg and delivered anywhere in Lahore in 2 to 4 hours with a live photo sent on WhatsApp before dispatch.",
    stems: "36 Imported Dutch Red Roses, Baby's Breath & Silver Dollar Eucalyptus",
    swatches: ["#8B1E2D", "#0B0B0B", "#C6A15B"],
    occasion: ["Anniversary", "Romance", "Birthday", "Congratulations", "Wedding"]
  },

  // 1. Eucalyptus and Rose Bouquet in Lahore
  {
    id: 1,
    badge: "Promotion",
    badgeType: "promotion",
    title: "Eucalyptus and Rose Bouquet in Lahore",
    slug: "eucalyptus-and-rose-bouquet-in-lahore",
    price: 1900,
    oldPrice: 2200,
    image: "/images/product_1_eucalyptus_rose.jpg",
    category: "Bouquets",
    desc: "A timeless bouquet of fresh blush roses paired with aromatic silver dollar eucalyptus and baby's breath. Delicately hand-tied in paper and fabric with same-day Lahore delivery.",
    stems: "12 Fresh Soft Blush Roses & Silver Eucalyptus",
    swatches: ["#E8B4B8", "#557153", "#FAF4EB"],
    occasion: ["Birthday", "Anniversary", "Romance"]
  },

  // 2. Autumn Mixed Flower Bouquet
  {
    id: 2,
    badge: "New",
    badgeType: "new",
    title: "Autumn Mixed Flower Bouquet",
    slug: "autumn-mixed-flower-bouquet",
    price: 2600,
    oldPrice: 2950,
    image: "/images/product_2_autumn_crimson.jpg",
    category: "Bouquets",
    desc: "Rich seasonal harvest bundle featuring fiery crimson garden spray roses, burnt orange blooms, and golden accents. Hand-tied in Lahore and delivered in 2 to 5 hours.",
    stems: "16 Mixed Seasonal Stems & Autumn Foliage",
    swatches: ["#A3281E", "#E26D3C", "#E8BE6B"],
    occasion: ["Congratulations", "Birthday", "Get Well Soon"]
  },

  // 3. Pastel & Wildflower Large Mix
  {
    id: 3,
    badge: "Customer favorite",
    badgeType: "favorite",
    title: "Pastel Wildflower Large Mix Bouquet",
    slug: "pastel-wildflower-large-mix-bouquet",
    price: 3800,
    oldPrice: 4200,
    image: "/images/product_3_pastel_wildflower.jpg",
    category: "Bouquets",
    desc: "Enchanting pastel garden bouquet with soft pink lisianthus, sweet lilac stems, daisies, and delicate gypsophila. Handcrafted daily with fresh water hydration.",
    stems: "24 Artisanal Seasonal Wildflower Stems",
    swatches: ["#C3B1E1", "#F8D7DA", "#FFF3CD"],
    occasion: ["Anniversary", "Birthday", "Wedding"]
  },

  // 4. Bamboo Dried Wildflower Bunch
  {
    id: 4,
    badge: "Keepsake",
    badgeType: "new",
    title: "Bamboo Dried Wildflower Bunch",
    slug: "bamboo-dried-wildflower-bunch",
    price: 1250,
    oldPrice: 1500,
    image: "/images/product_4_bamboo_dried.jpg",
    category: "Bouquets",
    desc: "A bunch of dried wildflowers, ready to place in any vase. Long-lasting natural botanical stems for modern home and office decor without watering.",
    stems: "Everlasting Preserved Botanical Bundle",
    swatches: ["#D2B48C", "#EEDC82", "#8A7968"],
    occasion: ["Just Because", "Congratulations"]
  },

  // 5. Crimson Blush: Fresh Red Rose Bouquet with Baby's Breath
  {
    id: 5,
    badge: "Bestseller",
    badgeType: "hot",
    title: "Crimson Blush: Fresh Red Rose Bouquet with Baby's Breath",
    slug: "crimson-blush-fresh-red-rose-bouquet",
    price: 1900,
    oldPrice: 2200,
    image: "/images/lahoreblooms/crimson_blush.webp",
    category: "Roses",
    desc: "A bouquet of 12 to 15 fresh red roses with white baby's breath, wrapped in black paper with a white ribbon. It is the classic anniversary and Valentine's bouquet. Add a handwritten card and choose your delivery time. Ready for same-day delivery in Lahore.",
    stems: "12-15 Fresh Red Roses & White Gypsophila",
    swatches: ["#8B1E2D", "#1C1C1C", "#FFFFFF"],
    occasion: ["Romance", "Anniversary", "Birthday"]
  },

  // 6. Blush Veil: White Rose Bouquet
  {
    id: 6,
    badge: "Gentle & Pure",
    badgeType: "hot",
    title: "Blush Veil: White Rose Bouquet",
    slug: "blush-veil-white-rose-bouquet",
    price: 2200,
    oldPrice: 2500,
    image: "/images/lahoreblooms/blush_veil.webp",
    category: "Roses",
    desc: "Twelve white roses with baby's breath in soft pink wrapping. A gentle bouquet for a new baby, a nikkah gift or a quiet apology.",
    stems: "12 Fresh White Roses & Baby's Breath",
    swatches: ["#FFFFFF", "#F9ECEF", "#8B1E2D"],
    occasion: ["Wedding", "Anniversary", "Apology"]
  },

  // 7. Golden Duo: Two Sunflowers with Baby's Breath
  {
    id: 7,
    badge: "Hot",
    badgeType: "hot",
    title: "Golden Duo: Two Sunflowers with Baby's Breath",
    slug: "golden-duo-2-sunflowers-bouquet",
    price: 1590,
    oldPrice: 1850,
    image: "/images/lahoreblooms/golden_duo.webp",
    category: "Sunflowers",
    desc: "Two sunflowers and baby's breath in black wrapping. Cheerful without being over the top. Perfect for birthdays, get-well wishes, and celebrations.",
    stems: "2 Fresh Sunflowers & Gypsophila",
    swatches: ["#F59E0B", "#1A3A2B", "#FAF4EB"],
    occasion: ["Birthday", "Get Well Soon", "Congratulations"]
  },

  // 8. Solara: Sunflower and Rose Harmony Bouquet
  {
    id: 8,
    badge: "Bestseller",
    badgeType: "bestseller",
    title: "Solara: Sunflower and Rose Harmony Bouquet",
    slug: "solara-premium-sunflower-rose-bouquet",
    price: 2650,
    oldPrice: 3000,
    image: "/images/lahoreblooms/solara_sunflower.webp",
    category: "Sunflowers",
    desc: "Three sunflowers with six white roses and fillers. Bright and soft at the same time. A safe choice for birthdays and celebrations.",
    stems: "3 Sunflowers, 6 White Roses & Fillers",
    swatches: ["#F59E0B", "#FFFFFF", "#8B5CF6"],
    occasion: ["Birthday", "Anniversary", "Congratulations"]
  },

  // 9. Red Letter: Single Red Rose Bouquet
  {
    id: 9,
    badge: "Classic",
    badgeType: "hot",
    title: "Red Letter: Single Red Rose Bouquet",
    slug: "red-letter-single-red-rose-bouquet",
    price: 1180,
    image: "/images/lahoreblooms/red_letter.webp",
    category: "Roses",
    desc: "One long-stem imported red rose, baby's breath and a red ribbon. Small, but it means something. Good for a surprise at the office or a first date.",
    stems: "1 Long-Stem Imported Dutch Rose",
    swatches: ["#8B1E2D", "#0F0F11"],
    occasion: ["Romance", "Just Because"]
  },

  // 10. Pearl Note: Single White Rose in Black Wrapping
  {
    id: 10,
    badge: "Popular",
    badgeType: "bestseller",
    title: "Pearl Note: Single White Rose in Black Wrapping",
    slug: "pearl-note-single-white-rose",
    price: 1180,
    image: "/images/lahoreblooms/pearl_note.webp",
    category: "Roses",
    desc: "One premium white rose in black paper with a white ribbon. Simple and elegant.",
    stems: "1 Premium Dutch White Rose",
    swatches: ["#FFFFFF", "#18181B"],
    occasion: ["Apology", "Congratulations"]
  },

  // 11. Money Bouquet: Cash Surprise with Roses
  {
    id: 11,
    badge: "Hot",
    badgeType: "hot",
    title: "Money Bouquet: Cash Surprise with Roses",
    slug: "money-bouquet-luxury-cash-surprise",
    price: 4500,
    image: "/images/lahoreblooms/money_sub.webp",
    category: "Money Bouquets",
    desc: "A hand-folded fan of PKR notes with 10 fresh roses. You choose the cash note budget and denominations (Rs. 100, 500, 1,000 or 5,000) and we craft the design with fresh blooms.",
    stems: "Custom Cash Fan Folding + 10 Fresh Roses",
    swatches: ["#8B1E2D", "#10B981", "#1C1C1C"],
    occasion: ["Wedding", "Birthday", "Congratulations"]
  },

  // 12. Ferrero Rocher and Velvet Rose Chocolate Bouquet
  {
    id: 12,
    badge: "Bestseller",
    badgeType: "bestseller",
    title: "Ferrero Rocher and Velvet Rose Chocolate Bouquet",
    slug: "ferrero-rocher-velvet-rose-chocolate-bouquet",
    price: 3900,
    image: "/images/lahoreblooms/chocolate_sub.webp",
    category: "Gifts & Cakes",
    desc: "Sixteen Ferrero Rocher chocolates with eight red roses in red and clear wrapping. For anyone who would choose chocolate over flowers, but likes both.",
    stems: "16 Ferrero Rocher Chocolates & 8 Red Roses",
    swatches: ["#8B1E2D", "#D97706", "#2A2A2E"],
    occasion: ["Birthday", "Anniversary", "Romance"]
  },

  // 13. Handmade Crochet Everlasting Sunflower Bouquet
  {
    id: 13,
    badge: "Everlasting",
    badgeType: "favorite",
    title: "Handmade Crochet Everlasting Sunflower Bouquet",
    slug: "handmade-crochet-everlasting-sunflower-bouquet",
    price: 2400,
    image: "/images/lahoreblooms/crochet_sub.webp",
    category: "Bouquets",
    desc: "Crochet sunflowers tied into a bouquet. Handmade, so small variations in the pattern are normal. An everlasting keepsake that never wilts.",
    stems: "Handmade Knitted Yarn Stems",
    swatches: ["#F59E0B", "#10B981"],
    occasion: ["Graduation", "Birthday", "Anniversary"]
  },

  // 14. Birthday Cake and Acrylic Flower Box with Fairy Lights
  {
    id: 14,
    badge: "Surprise Combo",
    badgeType: "save",
    title: "Birthday Cake and Acrylic Flower Box with Fairy Lights",
    slug: "birthday-cake-acrylic-flower-box-fairy-lights",
    price: 6800,
    oldPrice: 7500,
    image: "/images/lahoreblooms/birthday_cake_box.webp",
    category: "Gifts & Cakes",
    desc: "A fresh flower box with a 1.5 lb cake, a small bouquet, a handwritten card and warm fairy lights. Ready for same-day and midnight surprise delivery across Lahore.",
    stems: "1.5 lb Chocolate Fudge Cake, Roses & Fairy Lights",
    swatches: ["#8B1E2D", "#4A2810", "#F59E0B"],
    occasion: ["Birthday", "Midnight Surprise"]
  },

  // 15. Ivory Promise: 50 White Roses
  {
    id: 15,
    badge: "Grand Luxury",
    badgeType: "new",
    title: "Ivory Promise: 50 White Roses",
    slug: "ivory-promise-50-white-roses",
    price: 8900,
    oldPrice: 10500,
    image: "/images/lahoreblooms/ivory_promise.webp",
    category: "Roses",
    desc: "Fifty white roses tied with a red satin ribbon. It is a statement bouquet for a proposal, an anniversary, or a big apology. Please order at least a few hours ahead so our florist can source and arrange 50 stems.",
    stems: "50 White Roses & Red Satin Ribbon",
    swatches: ["#FFFFFF", "#8B1E2D", "#18181B"],
    occasion: ["Anniversary", "Wedding", "Romance"]
  },

  // 16. Romantic Rose Canopy Room Décor
  {
    id: 16,
    badge: "Signature Décor",
    badgeType: "hot",
    title: "Romantic Rose Canopy Room Décor",
    slug: "romantic-rose-canopy-room-decor",
    price: 14500,
    oldPrice: 17000,
    image: "/images/lahoreblooms/romantic_canopy.webp",
    category: "Wedding Décor",
    desc: "A complete bridal room setup with canopy drapes, fresh rose garlands and petals, done at your location. Includes on-site setup.",
    stems: "Full On-Site Bridal Canopy Setup",
    swatches: ["#8B1E2D", "#FFFFFF", "#F59E0B"],
    occasion: ["Wedding", "Anniversary"]
  },

  // 17. Fresh Flower Wedding Car Decoration
  {
    id: 17,
    badge: "Hot",
    badgeType: "hot",
    title: "Fresh Flower Wedding Car Decoration",
    slug: "fresh-flower-wedding-car-decoration",
    price: 8500,
    oldPrice: 10000,
    image: "/images/lahoreblooms/white_red_wedding.webp",
    category: "Wedding Décor",
    desc: "Fresh flower styling for the wedding car with ribbon detail. Please share the car make and model when you book.",
    stems: "Complete Car Flower Styling Service",
    swatches: ["#8B1E2D", "#FFFFFF"],
    occasion: ["Wedding"]
  },

  // 18. Mehndi Fresh Flower Jewellery Set
  {
    id: 18,
    badge: "Bestseller",
    badgeType: "bestseller",
    title: "Mehndi Fresh Flower Jewellery Set",
    slug: "mehndi-fresh-flower-jewellery-set",
    price: 4500,
    image: "/images/lahoreblooms/cat_jewellery.webp",
    category: "Wedding Décor",
    desc: "A set of fresh haath phool and matha patti made of motia and rosebuds. Made close to the event date so the flowers are fresh for the ceremony.",
    stems: "Complete Fresh Floral Bridal Set",
    swatches: ["#F59E0B", "#FFFFFF"],
    occasion: ["Wedding"]
  },

  // 19. Pink Rose Bouquet (12 & 24 stems)
  {
    id: 19,
    badge: "Trending",
    badgeType: "hot",
    title: "Pink Rose Bouquet in Lahore",
    slug: "pink-rose-bouquet-in-lahore",
    price: 2350,
    oldPrice: 2700,
    image: "/images/pink_rose_bouquet.jpg",
    category: "Roses",
    desc: "A bouquet of fresh Dutch pink and blush roses with delicate baby's breath in soft wrapping. Perfect for Mother's Day, birthdays, and heartfelt thank-yous.",
    stems: "12 to 24 Imported Pink Roses & Gypsophila",
    swatches: ["#F472B6", "#FCE7F3", "#FFFFFF"],
    occasion: ["Birthday", "Mother's Day", "Thank You"]
  },

  // 20. Mixed Roses Bouquet (Red, White and Pink)
  {
    id: 20,
    badge: "Popular Choice",
    badgeType: "bestseller",
    title: "Mixed Roses Bouquet in Lahore",
    slug: "mixed-roses-bouquet-in-lahore",
    price: 2450,
    oldPrice: 2800,
    image: "/images/lahoreblooms/duo_royale.webp",
    category: "Roses",
    desc: "A vibrant blend of fresh imported red, pure white, and soft pink roses with filler greens. The ideal 'I don't know what to pick' bouquet for any celebration.",
    stems: "18 Mixed Tri-Tone Dutch Roses",
    swatches: ["#8B1E2D", "#FFFFFF", "#F472B6"],
    occasion: ["Birthday", "Anniversary", "Celebration"]
  },

  // 21. Lily Bouquet (White & Pink Oriental Lilies)
  {
    id: 21,
    badge: "Fragrant",
    badgeType: "new",
    title: "Oriental Lily Bouquet in Lahore",
    slug: "oriental-lily-bouquet-in-lahore",
    price: 2850,
    oldPrice: 3200,
    image: "/images/lahoreblooms/pink_meadow.webp",
    category: "Sunflowers",
    desc: "A grand bouquet of fragrant white and pink oriental lilies with baby's breath and fresh foliage. Elegant, long-lasting, and perfect for dining tables and greetings.",
    stems: "6 Multi-Bloom Oriental Lily Stems & Greens",
    swatches: ["#FFFFFF", "#F472B6", "#10B981"],
    occasion: ["Get Well Soon", "Congratulations", "Hospital Visit"]
  },

  // 22. Spring Tulip Bouquet (Seasonal Imported)
  {
    id: 22,
    badge: "Seasonal",
    badgeType: "new",
    title: "Spring Tulip Bouquet (Seasonal Imported)",
    slug: "spring-tulip-bouquet-lahore",
    price: 3500,
    oldPrice: 3900,
    image: "/images/explore_autumntulip.jpg",
    category: "Bouquets",
    desc: "Imported Dutch tulips in vibrant spring hues, tied with clean minimalist paper wrap. Highly requested seasonal favorite available while stems last.",
    stems: "10-12 Fresh Imported Dutch Tulips",
    swatches: ["#EF4444", "#F59E0B", "#F472B6"],
    occasion: ["Birthday", "Spring Celebration", "Just Because"]
  },

  // 23. 100 Roses Bouquet (Proposals & Milestones)
  {
    id: 23,
    badge: "Grand Luxury",
    badgeType: "hot",
    title: "100 Roses Bouquet in Lahore",
    slug: "100-red-roses-bouquet-in-lahore",
    price: 11500,
    oldPrice: 13500,
    image: "/images/lahoreblooms/velvet_rouge.webp",
    category: "Roses",
    desc: "A monumental presentation of 100 long-stem imported red roses in luxury tiered arrangement. The definitive choice for marriage proposals and landmark anniversaries.",
    stems: "100 Premium Imported Velvet Red Roses",
    swatches: ["#8B1E2D", "#18181B"],
    occasion: ["Proposal", "Anniversary", "Romance"]
  },

  // 24. Get-Well-Soon Bouquet (Hospital Friendly)
  {
    id: 24,
    badge: "Gentle Care",
    badgeType: "favorite",
    title: "Get-Well-Soon Gentle Bouquet",
    slug: "get-well-soon-gentle-bouquet",
    price: 2150,
    image: "/images/lahoreblooms/mini_white_rose.webp",
    category: "Bouquets",
    desc: "A compact, hospital-friendly bouquet with soft white spray roses, yellow chamomile, and light gypsophila. Scent-sensitive and sized to fit patient bedside tables.",
    stems: "Light Pastel Stems & Chamomile",
    swatches: ["#FFFFFF", "#FEF08A", "#86EFAC"],
    occasion: ["Get Well Soon", "Hospital Visit"]
  },

  // 25. Flowers with Teddy Bear Combo
  {
    id: 25,
    badge: "Cute Combo",
    badgeType: "bestseller",
    title: "Flowers with Teddy Bear Gift Combo",
    slug: "flowers-with-teddy-bear-gift-combo",
    price: 3400,
    oldPrice: 3850,
    image: "/images/lahoreblooms/birthday_balloon_basket.webp",
    category: "Gifts & Cakes",
    desc: "A hand-tied fresh red rose bouquet bundled with a soft plush teddy bear and personalized card. One of Lahore's most requested combos for birthdays and surprises.",
    stems: "10 Red Roses, Baby's Breath & 10-inch Teddy Bear",
    swatches: ["#8B1E2D", "#D97706", "#FFFFFF"],
    occasion: ["Birthday", "Romance", "New Baby"]
  },

  // 26. Flowers with Cake & Balloons Hamper
  {
    id: 26,
    badge: "All-in-One",
    badgeType: "save",
    title: "Flowers with Cake and Balloons Hamper",
    slug: "flowers-with-cake-and-balloons-hamper",
    price: 7200,
    oldPrice: 8200,
    image: "/images/lahoreblooms/blue_balloon_surprise.webp",
    category: "Gifts & Cakes",
    desc: "A complete birthday and surprise package featuring a fresh flower bouquet, 1.5 lb fudge cake, helium celebration balloons, and midnight delivery slot.",
    stems: "Fresh Bouquet, 1.5 lb Cake, 3 Helium Balloons & Card",
    swatches: ["#3B82F6", "#8B1E2D", "#F59E0B"],
    occasion: ["Birthday", "Midnight Surprise", "Welcome Home"]
  },

  // 27. Luxury Round Velvet Rose Flower Box
  {
    id: 27,
    badge: "Editorial",
    badgeType: "hot",
    title: "Luxury Round Velvet Rose Flower Box",
    slug: "luxury-round-velvet-rose-flower-box",
    price: 4800,
    oldPrice: 5500,
    image: "/images/lahoreblooms/scarlet_vow.webp",
    category: "Roses",
    desc: "Fresh velvety red and ivory roses arranged inside a keepsake matte black hat box with gold foil branding. Photographs beautifully and needs no vase.",
    stems: "20-22 Velvet Roses in Hat Box Arrangement",
    swatches: ["#8B1E2D", "#111827", "#D4AF37"],
    occasion: ["Anniversary", "Birthday", "Corporate"]
  },

  // 28. Graduation Milestone Celebration Bouquet
  {
    id: 28,
    badge: "Milestone",
    badgeType: "new",
    title: "Graduation Celebration Bouquet",
    slug: "graduation-celebration-bouquet",
    price: 2600,
    oldPrice: 3000,
    image: "/images/lahoreblooms/sunlit_noir.webp",
    category: "Bouquets",
    desc: "A festive mixed sunflower and rose bouquet tied with university color ribbons and custom congratulations card. Handcrafted for convocations and degree celebrations.",
    stems: "Sunflowers, Bright Roses & Celebration Ribbons",
    swatches: ["#F59E0B", "#1E3A8A", "#10B981"],
    occasion: ["Graduation", "Congratulations"]
  }
,

  // --- GOURMET MITHAI & SWEETS CELEBRATION BOXES ---
  {
    "id": 227,
    "badge": "Luxury Mithai",
    "badgeType": "hot",
    "title": "Royal Gourmet Mithai & Rose Luxury Gift Box",
    "slug": "royal-mithai-box-lahore",
    "price": 3800,
    "oldPrice": 4500,
    "image": "/images/cakes/royal-mithai-box-lahore.jpg",
    "category": "Gifts & Cakes",
    "rating": 5,
    "reviewCount": 38,
    "desc": "Handcrafted luxury walnut wooden gift box filled with authentic assorted Pakistani mithai (pure desi ghee golden gulab jamun, pistachio barfi, and saffron cham cham) elegantly decorated with fresh red rose petals, motia, and gold satin ribbon. Hand-delivered across Lahore in 2 to 4 hours with live WhatsApp photo proof.",
    "stems": "1 Kg Gourmet Assorted Mithai in Wooden Keepsake Box with Rose Petals & Card",
    "swatches": [
      "#8B1E2D",
      "#C6A15B",
      "#3D2314"
    ],
    "occasion": [
      "Eid Gifts",
      "Celebration",
      "Wedding",
      "Congratulations"
    ]
  },

  {
    "id": 228,
    "badge": "Desi Ghee Mithai",
    "badgeType": "bestseller",
    "title": "Traditional Motichoor Ladoo & Desi Ghee Gulab Jamun Platter",
    "slug": "traditional-ladoo-gulab-jamun-platter-lahore",
    "price": 2900,
    "oldPrice": 3400,
    "image": "/images/cakes/ladoo-rose-platter-lahore.jpg",
    "category": "Gifts & Cakes",
    "rating": 4.9,
    "reviewCount": 45,
    "desc": "Pure desi ghee Motichoor Ladoos topped with slivered almonds and edible silver warq, paired with warm golden Gulab Jamun, surrounded by fresh fragrant red roses and jasmine motia buds. Ideal for festive family celebrations, Barat, and congratulations across Lahore.",
    "stems": "1 Kg Pure Desi Ghee Ladoos & Gulab Jamun with Fresh Red Roses & Greeting Card",
    "swatches": [
      "#E8A020",
      "#8B1E2D",
      "#C6A15B"
    ],
    "occasion": [
      "Eid Gifts",
      "Wedding",
      "Celebration",
      "Congratulations"
    ]
  },

  // --- 26 ORIGINAL CAKES & IMPORTED CHOCOLATES (LAHORE DELIVERY) ---
  {
    "id": 201,
    "badge": "Layers Bakeshop",
    "badgeType": "hot",
    "title": "Layers Raffaello White Chocolate Cake",
    "slug": "layers-raffaello-cake-lahore",
    "price": 3499,
    "oldPrice": 3900,
    "image": "/images/cakes/layers-raffaello-cake-lahore.jpg",
    "category": "Gifts & Cakes",
    "rating": 5,
    "reviewCount": 42,
    "desc": "Original Layers Bakeshop Raffaello Cake in Lahore. Super-moist delicate vanilla sponge layered with velvety white chocolate mousse, roasted almond crumbles, and topped with iconic Raffaello truffles. Freshly picked up from Layers kitchen on Lahore and delivered across Lahore in 2 to 4 hours with live WhatsApp photo proof before dispatch.",
    "stems": "Original 2.5 Lbs Layers Cake, Candle & Free Greeting Card",
    "swatches": [
      "#FAF7F2",
      "#C6A15B",
      "#8B1E2D"
    ],
    "occasion": [
      "Birthday",
      "Anniversary",
      "Celebration",
      "Congratulations"
    ]
  },

  {
    "id": 202,
    "badge": "Viral Bestseller",
    "badgeType": "bestseller",
    "title": "Layers Lotus Three Milk Tres Leches Cake",
    "slug": "layers-lotus-three-milk-cake-lahore",
    "price": 3799,
    "oldPrice": 4200,
    "image": "/images/cakes/layers-lotus-three-milk-cake-lahore.jpg",
    "category": "Gifts & Cakes",
    "rating": 5,
    "reviewCount": 94,
    "desc": "The city's most viral celebration dessert! Authentic Layers Lotus Three Milk Cake featuring airy sponge soaked in a rich trio of sweet milks, crowned with Belgian Lotus Biscoff spread and crushed caramelized biscuits. Delivered fresh in temperature-safe packaging across DHA, Gulberg, Bahria Town, and Johar Town.",
    "stems": "Original 2.5 Lbs Tres Leches Cake, Candle & Free Greeting Card",
    "swatches": [
      "#D89047",
      "#F8F3EA",
      "#3D2314"
    ],
    "occasion": [
      "Birthday",
      "Anniversary",
      "Eid Gifts",
      "Celebration"
    ]
  },

  {
    "id": 203,
    "badge": "Customer Favorite",
    "badgeType": "favorite",
    "title": "Layers Ferrero Classic Hazelnut Cake",
    "slug": "layers-ferrero-classic-cake-lahore",
    "price": 2999,
    "oldPrice": 3400,
    "image": "/images/cakes/layers-ferrero-classic-cake-lahore.jpg",
    "category": "Gifts & Cakes",
    "rating": 4.9,
    "reviewCount": 68,
    "desc": "Rich, nutty indulgence crafted with 100% Ferrero hazelnut chocolate, dark cocoa sponge, and roasted hazelnut praline. The ideal companion for red rose bouquets during midnight birthday and anniversary surprises in Lahore.",
    "stems": "Original 2.5 Lbs Layers Cake, Candle & Free Greeting Card",
    "swatches": [
      "#3D2314",
      "#C6A15B",
      "#8B1E2D"
    ],
    "occasion": [
      "Birthday",
      "Anniversary",
      "Romance",
      "Valentine"
    ]
  },

  {
    "id": 204,
    "badge": "Layers Classic",
    "badgeType": "save",
    "title": "Layers Milky Malt Fudge Cake",
    "slug": "layers-milky-malt-cake-lahore",
    "price": 2399,
    "oldPrice": 2800,
    "image": "/images/cakes/layers-milky-malt-cake-lahore.jpg",
    "category": "Gifts & Cakes",
    "rating": 4.8,
    "reviewCount": 51,
    "desc": "Wholesome imported malt blended with silky premium cocoa and fresh cream icing on tender chocolate sponge layers. One of the highest-rated everyday celebration cakes in Lahore, delivered same-day in 2 to 4 hours.",
    "stems": "Original 2 Lbs Layers Cake, Candle & Free Greeting Card",
    "swatches": [
      "#4A2E18",
      "#EAD5BE",
      "#8B1E2D"
    ],
    "occasion": [
      "Birthday",
      "Congratulations",
      "Celebration"
    ]
  },

  {
    "id": 205,
    "badge": "Bestseller",
    "badgeType": "bestseller",
    "title": "Layers Chocolate Heaven Cake",
    "slug": "layers-chocolate-heaven-cake-lahore",
    "price": 2699,
    "oldPrice": 3100,
    "image": "/images/cakes/layers-chocolate-heaven-cake-lahore.jpg",
    "category": "Gifts & Cakes",
    "rating": 4.9,
    "reviewCount": 56,
    "desc": "Double-layered fluffy chocolate sponge smothered in silky light chocolate frosting and dark chocolate curls. Pure melt-in-the-mouth cocoa perfection delivered with personalized message cards.",
    "stems": "Original 2.5 Lbs Layers Cake, Candle & Free Greeting Card",
    "swatches": [
      "#2B1B17",
      "#6F4E37",
      "#C6A15B"
    ],
    "occasion": [
      "Birthday",
      "Anniversary",
      "Romance"
    ]
  },

  {
    "id": 206,
    "badge": "Signature",
    "badgeType": "hot",
    "title": "Layers Lotus Biscoff Speculoos Cake",
    "slug": "layers-lotus-biscoff-cake-lahore",
    "price": 3499,
    "oldPrice": 3900,
    "image": "/images/cakes/layers-lotus-biscoff-cake-lahore.jpg",
    "category": "Gifts & Cakes",
    "rating": 5,
    "reviewCount": 75,
    "desc": "Rich Lotus Biscoff spread paired with velvety cream cheese frosting over golden vanilla sponge, generously sprinkled with crushed crunchy Belgian speculoos biscuits. Perfect for festive celebrations.",
    "stems": "Original 2.5 Lbs Layers Cake, Candle & Free Greeting Card",
    "swatches": [
      "#C97A3E",
      "#FAF3EA",
      "#0B0B0B"
    ],
    "occasion": [
      "Birthday",
      "Anniversary",
      "Congratulations"
    ]
  },

  {
    "id": 207,
    "badge": "Imported Chocolates",
    "badgeType": "hot",
    "title": "Ferrero Rocher Luxury 16-Piece Gift Box",
    "slug": "ferrero-rocher-luxury-gift-box-lahore",
    "price": 1499,
    "oldPrice": 1800,
    "image": "/images/cakes/ferrero-rocher-luxury-gift-box-lahore.png",
    "category": "Gifts & Cakes",
    "rating": 5,
    "reviewCount": 118,
    "desc": "Original imported Italian Ferrero Rocher 16-praline golden gift box. Whole crunchy hazelnut at the heart, wrapped in a creamy hazelnut filling, crisp wafer shell, and milk chocolate with roasted pieces. Tied with luxury satin ribbon.",
    "stems": "16 Imported Ferrero Rocher Pralines, Satin Ribbon & Greeting Card",
    "swatches": [
      "#C6A15B",
      "#0B0B0B",
      "#8B1E2D"
    ],
    "occasion": [
      "Anniversary",
      "Birthday",
      "Romance",
      "Valentine",
      "Eid Gifts"
    ]
  },

  {
    "id": 208,
    "badge": "Add-On Gift",
    "badgeType": "save",
    "title": "Nestle KitKat 4-Finger Chocolate Gift Pack",
    "slug": "nestle-kitkat-chocolate-gift-lahore",
    "price": 410,
    "oldPrice": 480,
    "image": "/images/cakes/nestle-kitkat-chocolate-gift-lahore.png",
    "category": "Gifts & Cakes",
    "rating": 4.8,
    "reviewCount": 34,
    "desc": "Crispy wafer fingers drenched in smooth milk chocolate. The classic break-time treat to bundle with fresh flower bouquets and teddy bears across Lahore.",
    "stems": "Original Nestle KitKat 4-Finger Bar",
    "swatches": [
      "#E52421",
      "#FFFFFF",
      "#3D2314"
    ],
    "occasion": [
      "Birthday",
      "Congratulations",
      "Get Well Soon"
    ]
  },

  {
    "id": 209,
    "badge": "Imported",
    "badgeType": "save",
    "title": "Bounty Coconut Chocolate Bar 57g Gift",
    "slug": "bounty-chocolate-gift-bar-lahore",
    "price": 590,
    "oldPrice": 650,
    "image": "/images/cakes/bounty-chocolate-gift-bar-lahore.png",
    "category": "Gifts & Cakes",
    "rating": 4.7,
    "reviewCount": 26,
    "desc": "Moist, tender coconut enveloped in thick, creamy milk chocolate. A delightful tropical sweetness addition to any floral surprise in Lahore.",
    "stems": "Original Bounty Double Chocolate Bar 57g",
    "swatches": [
      "#005CA9",
      "#FFFFFF",
      "#5A3825"
    ],
    "occasion": [
      "Birthday",
      "Congratulations",
      "Romance"
    ]
  },

  {
    "id": 210,
    "badge": "Add-On Gift",
    "badgeType": "save",
    "title": "Snickers Peanut Caramel Chocolate Bar 57g",
    "slug": "snickers-chocolate-bar-lahore",
    "price": 394,
    "oldPrice": 450,
    "image": "/images/cakes/snickers-chocolate-bar-lahore.webp",
    "category": "Gifts & Cakes",
    "rating": 4.9,
    "reviewCount": 31,
    "desc": "Loaded with roasted peanuts, rich nougat, and chewy caramel enrobed in milk chocolate. Fast same-day express delivery alongside fresh roses.",
    "stems": "Original Snickers Bar 57g",
    "swatches": [
      "#482914",
      "#FFFFFF",
      "#002B7F"
    ],
    "occasion": [
      "Birthday",
      "Congratulations",
      "Get Well Soon"
    ]
  },

  {
    "id": 211,
    "badge": "Add-On Gift",
    "badgeType": "save",
    "title": "Mars Chocolate Bar 51g Gift",
    "slug": "mars-chocolate-bar-lahore",
    "price": 378,
    "oldPrice": 430,
    "image": "/images/cakes/mars-chocolate-bar-lahore.png",
    "category": "Gifts & Cakes",
    "rating": 4.8,
    "reviewCount": 22,
    "desc": "Soft nougat and golden caramel wrapped in luxurious thick milk chocolate. Perfect sweet surprise for loved ones in Lahore.",
    "stems": "Original Mars Chocolate Bar 51g",
    "swatches": [
      "#000000",
      "#D32F2F",
      "#C6A15B"
    ],
    "occasion": [
      "Birthday",
      "Congratulations",
      "Get Well Soon"
    ]
  },

  {
    "id": 212,
    "badge": "Add-On Gift",
    "badgeType": "save",
    "title": "Twix Caramel Cookie Chocolate Bar 50g",
    "slug": "twix-caramel-chocolate-bar-lahore",
    "price": 399,
    "oldPrice": 450,
    "image": "/images/cakes/twix-caramel-chocolate-bar-lahore.png",
    "category": "Gifts & Cakes",
    "rating": 4.8,
    "reviewCount": 29,
    "desc": "Two crisp, crunchy biscuit fingers topped with rich caramel and bathed in smooth milk chocolate. A timeless celebration favourite.",
    "stems": "Original Twix Twin Bar 50g",
    "swatches": [
      "#C69214",
      "#D32F2F",
      "#3D2314"
    ],
    "occasion": [
      "Birthday",
      "Congratulations"
    ]
  },

  {
    "id": 213,
    "badge": "Gift Pouch",
    "badgeType": "bestseller",
    "title": "Mars Miniatures Chocolate Sharing Pouch 220g",
    "slug": "mars-miniatures-chocolate-gift-pack-lahore",
    "price": 2144,
    "oldPrice": 2450,
    "image": "/images/cakes/mars-miniatures-chocolate-gift-pack-lahore.webp",
    "category": "Gifts & Cakes",
    "rating": 4.9,
    "reviewCount": 46,
    "desc": "Generous 220g sharing pouch filled with individually wrapped miniature Mars bars. Ideal for family parties, Eid festivities, and corporate gifting in Lahore.",
    "stems": "220g Imported Mars Miniatures Sharing Bag",
    "swatches": [
      "#000000",
      "#C6A15B",
      "#D32F2F"
    ],
    "occasion": [
      "Birthday",
      "Anniversary",
      "Eid Gifts",
      "Celebration"
    ]
  },

  {
    "id": 214,
    "badge": "Gift Pouch",
    "badgeType": "bestseller",
    "title": "Snickers Miniatures Chocolate Sharing Pouch 220g",
    "slug": "snickers-miniatures-chocolate-gift-pack-lahore",
    "price": 2144,
    "oldPrice": 2450,
    "image": "/images/cakes/snickers-miniatures-chocolate-gift-pack-lahore.webp",
    "category": "Gifts & Cakes",
    "rating": 4.9,
    "reviewCount": 43,
    "desc": "Imported 220g pouch of bite-sized Snickers miniatures bursting with peanuts, caramel, and nougat. Hand-delivered in Lahore with customized gift card.",
    "stems": "220g Imported Snickers Miniatures Pouch",
    "swatches": [
      "#3D2314",
      "#002B7F",
      "#C6A15B"
    ],
    "occasion": [
      "Birthday",
      "Anniversary",
      "Celebration"
    ]
  },

  {
    "id": 215,
    "badge": "Luxury Pouch",
    "badgeType": "hot",
    "title": "Snickers Minis Chocolate 12-Pack Pouch 180g",
    "slug": "snickers-minis-pouch-chocolate-gift-lahore",
    "price": 2798,
    "oldPrice": 3100,
    "image": "/images/cakes/snickers-minis-pouch-chocolate-gift-lahore.webp",
    "category": "Gifts & Cakes",
    "rating": 5,
    "reviewCount": 39,
    "desc": "Imported premium 180g Snickers Minis pouch containing 12 individually wrapped chocolate bars. Makes an impressive party bundle paired with celebration bouquets.",
    "stems": "180g Imported Snickers Minis 12-Pack Bag",
    "swatches": [
      "#3D2314",
      "#C6A15B",
      "#8B1E2D"
    ],
    "occasion": [
      "Birthday",
      "Anniversary",
      "Celebration"
    ]
  },

  {
    "id": 216,
    "badge": "Trending Worldwide",
    "badgeType": "hot",
    "title": "MrBeast Feastables Milk Crunch Chocolate",
    "slug": "mrbeast-feastables-chocolate-lahore",
    "price": 2300,
    "oldPrice": 2600,
    "image": "/images/cakes/mrbeast-feastables-chocolate-lahore.png",
    "category": "Gifts & Cakes",
    "rating": 5,
    "reviewCount": 91,
    "desc": "Original imported MrBeast Feastables chocolate bar crafted with grass-fed milk, organic cocoa, and puffed rice crisps. The trendiest youth gift in Lahore, delivered same-day.",
    "stems": "Original MrBeast Feastables Milk Crunch Bar",
    "swatches": [
      "#00B4D8",
      "#F72585",
      "#3D2314"
    ],
    "occasion": [
      "Birthday",
      "Celebration",
      "Congratulations"
    ]
  },

  {
    "id": 217,
    "badge": "Layers Bakeshop",
    "badgeType": "hot",
    "title": "Layers Cadbury Dairy Milk Chocolate Cake",
    "slug": "layers-dairy-milk-chocolate-cake-lahore",
    "price": 2699,
    "oldPrice": 3100,
    "image": "/images/cakes/layers-dairy-milk-chocolate-cake-lahore.jpg",
    "category": "Gifts & Cakes",
    "rating": 4.9,
    "reviewCount": 63,
    "desc": "Signature Layers cake infused with original Cadbury Dairy Milk chocolate, creamy fudge frosting, and milk chocolate chunks on moist cocoa sponge. Delivered fresh anywhere in Lahore.",
    "stems": "Original 2.5 Lbs Layers Cake, Candle & Free Greeting Card",
    "swatches": [
      "#482D7F",
      "#C6A15B",
      "#FAF7F2"
    ],
    "occasion": [
      "Birthday",
      "Anniversary",
      "Romance"
    ]
  },

  {
    "id": 218,
    "badge": "Royal Collection",
    "badgeType": "hot",
    "title": "Layers Royal Pistachio Celebration Cake",
    "slug": "layers-pistachio-celebration-cake-lahore",
    "price": 3899,
    "oldPrice": 4400,
    "image": "/images/cakes/layers-pistachio-celebration-cake-lahore.jpg",
    "category": "Gifts & Cakes",
    "rating": 5,
    "reviewCount": 49,
    "desc": "Aristocratic pistachio paste layered through light sponge and pistachio cream, crowned with chopped roasted Persian pistachios. A regal centerpiece for high-end celebrations.",
    "stems": "Original 2.5 Lbs Royal Pistachio Cake, Candle & Free Greeting Card",
    "swatches": [
      "#87A96B",
      "#C6A15B",
      "#F8F3EA"
    ],
    "occasion": [
      "Anniversary",
      "Birthday",
      "Wedding",
      "Eid Gifts"
    ]
  },

  {
    "id": 219,
    "badge": "Premium Belgian",
    "badgeType": "bestseller",
    "title": "Layers Belgian Malt Dark Chocolate Cake",
    "slug": "layers-belgian-malt-cake-lahore",
    "price": 3099,
    "oldPrice": 3500,
    "image": "/images/cakes/layers-belgian-malt-cake-lahore.jpg",
    "category": "Gifts & Cakes",
    "rating": 5,
    "reviewCount": 72,
    "desc": "Crafted with imported 54% dark Belgian couverture chocolate and malted barley syrup, offering a sophisticated bittersweet contrast for cocoa lovers in Lahore.",
    "stems": "Original 2.5 Lbs Belgian Cake, Candle & Free Greeting Card",
    "swatches": [
      "#1F1610",
      "#5A3825",
      "#C6A15B"
    ],
    "occasion": [
      "Birthday",
      "Anniversary",
      "Romance",
      "Corporate"
    ]
  },

  {
    "id": 220,
    "badge": "Luxury Supreme",
    "badgeType": "hot",
    "title": "Layers Ferrero Rocher Square Supreme Cake",
    "slug": "layers-ferrero-rocher-premium-cake-lahore",
    "price": 3999,
    "oldPrice": 4500,
    "image": "/images/cakes/layers-ferrero-rocher-premium-cake-lahore.jpg",
    "category": "Gifts & Cakes",
    "rating": 5,
    "reviewCount": 122,
    "desc": "The undisputed emperor of celebration cakes in Lahore. Rich chocolate hazelnut sponge stacked with Nutella mousse, roasted hazelnut crunch, and crowned with whole Ferrero Rocher truffles.",
    "stems": "Original 3 Lbs Supreme Ferrero Cake, Candle & Free Greeting Card",
    "swatches": [
      "#3D2314",
      "#C6A15B",
      "#8B1E2D"
    ],
    "occasion": [
      "Birthday",
      "Anniversary",
      "Wedding",
      "Romance"
    ]
  },

  {
    "id": 221,
    "badge": "All-Time Favorite",
    "badgeType": "favorite",
    "title": "Layers Nutella Hazelnut Cream Cake",
    "slug": "layers-nutella-cake-lahore",
    "price": 2799,
    "oldPrice": 3200,
    "image": "/images/cakes/layers-nutella-cake-lahore.jpg",
    "category": "Gifts & Cakes",
    "rating": 4.9,
    "reviewCount": 84,
    "desc": "Generous coatings of authentic Italian Ferrero Nutella spread layered with soft cocoa sponge and whipped chocolate mousse. Guaranteed to delight hazelnut lovers in Lahore.",
    "stems": "Original 2.5 Lbs Nutella Cake, Candle & Free Greeting Card",
    "swatches": [
      "#4A2E18",
      "#EAD5BE",
      "#8B1E2D"
    ],
    "occasion": [
      "Birthday",
      "Anniversary",
      "Romance"
    ]
  },

  {
    "id": 222,
    "badge": "Romantic Pick",
    "badgeType": "hot",
    "title": "Layers Red Velvet Anniversary Cake",
    "slug": "layers-red-velvet-anniversary-cake-lahore",
    "price": 2799,
    "oldPrice": 3200,
    "image": "/images/cakes/layers-red-velvet-anniversary-cake-lahore.jpg",
    "category": "Gifts & Cakes",
    "rating": 4.9,
    "reviewCount": 89,
    "desc": "Vibrant crimson velvet cocoa sponge layered with silky tangy Philadelphia-style cream cheese frosting and fine red velvet crumbs. The #1 anniversary cake in Lahore.",
    "stems": "Original 2.5 Lbs Red Velvet Cake, Candle & Free Greeting Card",
    "swatches": [
      "#8B1E2D",
      "#FAF7F2",
      "#C6A15B"
    ],
    "occasion": [
      "Anniversary",
      "Romance",
      "Birthday",
      "Valentine"
    ]
  },

  {
    "id": 223,
    "badge": "Artisanal",
    "badgeType": "bestseller",
    "title": "Layers Salted Caramel Bliss Cake",
    "slug": "layers-salted-caramel-cake-lahore",
    "price": 2999,
    "oldPrice": 3400,
    "image": "/images/cakes/layers-salted-caramel-cake-lahore.jpg",
    "category": "Gifts & Cakes",
    "rating": 4.8,
    "reviewCount": 44,
    "desc": "Buttery slow-cooked salted caramel drizzles layered between fluffy golden sponge and whipped caramel buttercream, topped with sea salt flakes.",
    "stems": "Original 2.5 Lbs Salted Caramel Cake, Candle & Free Greeting Card",
    "swatches": [
      "#B87333",
      "#F5E8D8",
      "#3D2314"
    ],
    "occasion": [
      "Birthday",
      "Anniversary",
      "Celebration"
    ]
  },

  {
    "id": 224,
    "badge": "Deep Fudge",
    "badgeType": "save",
    "title": "Layers German Fudge Rich Chocolate Cake",
    "slug": "layers-german-fudge-cake-lahore",
    "price": 2599,
    "oldPrice": 2999,
    "image": "/images/cakes/layers-german-fudge-cake-lahore.jpg",
    "category": "Gifts & Cakes",
    "rating": 4.8,
    "reviewCount": 38,
    "desc": "Dense, intensely rich German chocolate fudge layers with roasted nuts and sweet coconut accents. A heavy cocoa dream delivered fresh across Lahore.",
    "stems": "Original 2.5 Lbs German Fudge Cake, Candle & Free Greeting Card",
    "swatches": [
      "#24150E",
      "#8B5A2B",
      "#C6A15B"
    ],
    "occasion": [
      "Birthday",
      "Celebration"
    ]
  },

  {
    "id": 225,
    "badge": "Ultra Light",
    "badgeType": "favorite",
    "title": "Layers Chocolate Silk Mousse Cake",
    "slug": "layers-chocolate-mousse-cake-lahore",
    "price": 2599,
    "oldPrice": 2999,
    "image": "/images/cakes/layers-chocolate-mousse-cake-lahore.jpg",
    "category": "Gifts & Cakes",
    "rating": 4.9,
    "reviewCount": 49,
    "desc": "Airy, cloud-soft Belgian chocolate mousse layered on a thin chocolate biscuit base with a dark mirror glaze top. Light yet deeply indulgent.",
    "stems": "Original 2.5 Lbs Chocolate Mousse Cake, Candle & Free Greeting Card",
    "swatches": [
      "#301E14",
      "#8B1E2D",
      "#FAF7F2"
    ],
    "occasion": [
      "Birthday",
      "Anniversary",
      "Romance"
    ]
  },

  {
    "id": 226,
    "badge": "Barista Special",
    "badgeType": "bestseller",
    "title": "Layers Classic Espresso Coffee Cake",
    "slug": "layers-special-coffee-cake-lahore",
    "price": 2699,
    "oldPrice": 3100,
    "image": "/images/cakes/layers-special-coffee-cake-lahore.jpg",
    "category": "Gifts & Cakes",
    "rating": 4.8,
    "reviewCount": 41,
    "desc": "Brewed Arabica espresso infused sponge layered with aromatic mocha cream and dusted with fine cocoa powder. The ultimate cake for coffee aficionados in Lahore.",
    "stems": "Original 2.5 Lbs Coffee Cake, Candle & Free Greeting Card",
    "swatches": [
      "#4B3621",
      "#C6A15B",
      "#F5E8D8"
    ],
    "occasion": [
      "Birthday",
      "Celebration",
      "Corporate"
    ]
  },

  // --- 33 FRESH FLOWER GAJRAY, MALAS, WEDDING DÉCOR & BOUQUETS ---
  {
    "id": 301,
    "title": "White Jasmine Motia Gajray Pair for Weddings",
    "slug": "white-jasmine-gajray-pair-lahore",
    "category": "Fresh Flower Gajray",
    "price": 5990,
    "oldPrice": 6500,
    "badge": "Bridal Signature",
    "badgeType": "hot",
    "image": "/images/gajray/white-jasmine-gajray-pair-lahore.png",
    "images": [
      "/images/gajray/white-jasmine-gajray-pair-lahore.png",
      "/images/gajray/white-jasmine-gajray-pair-lahore-2.png"
    ],
    "desc": "Handcrafted pair of pure fragrant white jasmine motia gajray for bridal mehndi, barat, and nikah ceremonies in Lahore. Made fresh on the morning of your event with delicate rose accents and gold string.",
    "stems": "Pair of 2 Handcrafted Fresh Jasmine Motia Wrist Cuffs",
    "occasion": [
      "Wedding",
      "Barat & Walima",
      "Eid Gifts",
      "Celebration"
    ],
    "inStock": true,
    "rating": 4.8,
    "reviewCount": 35,
    "swatches": [
      "#FAF7F2",
      "#8B1E2D",
      "#C6A15B"
    ]
  },

  {
    "id": 302,
    "title": "Red Rose & Baby's Breath Elegant Gajray Pair",
    "slug": "red-rose-gajray-pair-lahore",
    "category": "Fresh Flower Gajray",
    "price": 4999,
    "oldPrice": 5500,
    "badge": "Mehndi Favorite",
    "badgeType": "favorite",
    "image": "/images/gajray/red-rose-gajray-pair-lahore.png",
    "images": [
      "/images/gajray/red-rose-gajray-pair-lahore.png",
      "/images/gajray/red-rose-gajray-pair-lahore-2.png"
    ],
    "desc": "Traditional bridal red rose gajray woven with delicate white baby's breath. Intricately tied for mehndi nights, sangeet, and festive family celebrations in Lahore.",
    "stems": "Pair of 2 Fresh Red Rose & Baby's Breath Wrist Cuffs",
    "occasion": [
      "Wedding",
      "Barat & Walima",
      "Celebration"
    ],
    "inStock": true,
    "rating": 4.9,
    "reviewCount": 42,
    "swatches": [
      "#FAF7F2",
      "#8B1E2D",
      "#C6A15B"
    ]
  },

  {
    "id": 303,
    "title": "Pink Rose & Pearls Elegant Gajray Pair",
    "slug": "pink-rose-pearl-gajray-pair-lahore",
    "category": "Fresh Flower Gajray",
    "price": 7999,
    "oldPrice": 8800,
    "badge": "Luxury Bridal",
    "badgeType": "hot",
    "image": "/images/gajray/pink-rose-pearl-gajray-pair-lahore.png",
    "images": [
      "/images/gajray/pink-rose-pearl-gajray-pair-lahore.png",
      "/images/gajray/pink-rose-pearl-gajray-pair-lahore-2.png"
    ],
    "desc": "Luxury bridal gajray pair featuring blush pink roses, pearl strings, and starry baby's breath. Specially crafted for modern brides and bridesmaid favors in Lahore.",
    "stems": "Pair of 2 Blush Pink Rose & Pearl Bridal Cuffs",
    "occasion": [
      "Wedding",
      "Barat & Walima",
      "Anniversary"
    ],
    "inStock": true,
    "rating": 5,
    "reviewCount": 49,
    "swatches": [
      "#FAF7F2",
      "#8B1E2D",
      "#C6A15B"
    ]
  },

  {
    "id": 304,
    "title": "Pure White Rose Elegant Gajray Pair",
    "slug": "pure-white-rose-gajray-pair-lahore",
    "category": "Fresh Flower Gajray",
    "price": 6299,
    "oldPrice": 7000,
    "badge": "Nikah Special",
    "badgeType": "bestseller",
    "image": "/images/gajray/pure-white-rose-gajray-pair-lahore.png",
    "images": [
      "/images/gajray/pure-white-rose-gajray-pair-lahore.png"
    ],
    "desc": "Exquisite pure white rose gajray with gold wire thread for nikah and engagement ceremonies. Handcrafted with fresh Dutch white blooms for maximum fragrance and elegance.",
    "stems": "Pair of 2 Fresh White Rose Wrist Bands",
    "occasion": [
      "Wedding",
      "Barat & Walima",
      "Celebration"
    ],
    "inStock": true,
    "rating": 4.8,
    "reviewCount": 56,
    "swatches": [
      "#FAF7F2",
      "#8B1E2D",
      "#C6A15B"
    ]
  },

  {
    "id": 305,
    "title": "Peach & Ivory Blossom Floral Wrist Cuffs",
    "slug": "peach-ivory-blossom-wrist-cuffs-lahore",
    "category": "Fresh Flower Gajray",
    "price": 2499,
    "oldPrice": 2900,
    "badge": "Dholki Special",
    "badgeType": "save",
    "image": "/images/gajray/peach-ivory-blossom-wrist-cuffs-lahore.png",
    "images": [
      "/images/gajray/peach-ivory-blossom-wrist-cuffs-lahore.png"
    ],
    "desc": "Charming fresh floral wrist cuffs in pastel peach and cream tones. Lightweight, comfortable, and tied with silk ribbons for easy wear during long celebrations.",
    "stems": "Pair of 2 Handcrafted Peach Floral Wrist Corsages",
    "occasion": [
      "Wedding",
      "Celebration"
    ],
    "inStock": true,
    "rating": 4.9,
    "reviewCount": 63,
    "swatches": [
      "#FAF7F2",
      "#8B1E2D",
      "#C6A15B"
    ]
  },

  {
    "id": 306,
    "title": "Henna Ceremony Red Rose & Gypsophila Wrist Cuffs",
    "slug": "henna-red-rose-wrist-cuffs-lahore",
    "category": "Fresh Flower Gajray",
    "price": 2499,
    "oldPrice": 2800,
    "badge": "Mehndi Classic",
    "badgeType": "bestseller",
    "image": "/images/gajray/henna-red-rose-wrist-cuffs-lahore.png",
    "images": [
      "/images/gajray/henna-red-rose-wrist-cuffs-lahore.png"
    ],
    "desc": "Classic red rose buttonhole cuffs with fresh white gypsophila baby's breath. The quintessential mehndi accessory for sisters and friends of the bride.",
    "stems": "Pair of 2 Red Rose Mehndi Wrist Cuffs",
    "occasion": [
      "Wedding",
      "Barat & Walima"
    ],
    "inStock": true,
    "rating": 5,
    "reviewCount": 70,
    "swatches": [
      "#FAF7F2",
      "#8B1E2D",
      "#C6A15B"
    ]
  },

  {
    "id": 307,
    "title": "White Jasmine Floral Hand Corsage with Ring",
    "slug": "white-jasmine-hand-corsage-ring-lahore",
    "category": "Fresh Flower Gajray",
    "price": 2999,
    "oldPrice": 3500,
    "badge": "Haath Phool",
    "badgeType": "hot",
    "image": "/images/gajray/white-jasmine-hand-corsage-ring-lahore.png",
    "images": [
      "/images/gajray/white-jasmine-hand-corsage-ring-lahore.png"
    ],
    "desc": "Traditional Haath Phool hand corsage made with pure white jasmine buds and attached floral ring. Beautifully drapes across the hand for mehndi ceremonies.",
    "stems": "1 Handcrafted Jasmine Floral Haath Phool Corsage",
    "occasion": [
      "Wedding",
      "Barat & Walima"
    ],
    "inStock": true,
    "rating": 4.8,
    "reviewCount": 77,
    "swatches": [
      "#FAF7F2",
      "#8B1E2D",
      "#C6A15B"
    ]
  },

  {
    "id": 308,
    "title": "Bridal Floral Choker Necklace with Roses & Baby's Breath",
    "slug": "bridal-floral-choker-necklace-lahore",
    "category": "Fresh Flower Gajray",
    "price": 4499,
    "oldPrice": 5200,
    "badge": "Floral Jewellery",
    "badgeType": "hot",
    "image": "/images/gajray/bridal-floral-choker-necklace-lahore.png",
    "images": [
      "/images/gajray/bridal-floral-choker-necklace-lahore.png"
    ],
    "desc": "Fresh floral choker necklace meticulously woven with delicate red rosebuds and misty baby's breath. Fits comfortably with soft ribbon tie for bridal mehndi looks.",
    "stems": "1 Fresh Floral Choker Necklace & Matching Earrings",
    "occasion": [
      "Wedding",
      "Barat & Walima"
    ],
    "inStock": true,
    "rating": 4.9,
    "reviewCount": 84,
    "swatches": [
      "#FAF7F2",
      "#8B1E2D",
      "#C6A15B"
    ]
  },

  {
    "id": 309,
    "title": "Royal Pink & White Rose Bridal Floral Necklace Set",
    "slug": "royal-bridal-floral-necklace-set-lahore",
    "category": "Fresh Flower Gajray",
    "price": 11499,
    "oldPrice": 13000,
    "badge": "Full Bridal Set",
    "badgeType": "hot",
    "image": "/images/gajray/royal-bridal-floral-necklace-set-lahore.png",
    "images": [
      "/images/gajray/royal-bridal-floral-necklace-set-lahore.png"
    ],
    "desc": "Complete luxury fresh floral jewellery set including bridal necklace, matching jhumkas, and maang tikka made with real pink and white roses.",
    "stems": "Complete Fresh Floral Jewellery Set: Necklace, Earrings & Tikka",
    "occasion": [
      "Wedding",
      "Barat & Walima"
    ],
    "inStock": true,
    "rating": 5,
    "reviewCount": 91,
    "swatches": [
      "#FAF7F2",
      "#8B1E2D",
      "#C6A15B"
    ]
  },

  {
    "id": 310,
    "title": "Complete Fresh Flower Mehndi Gajra Gift Set",
    "slug": "complete-fresh-flower-gajra-set-lahore",
    "category": "Fresh Flower Gajray",
    "price": 5999,
    "oldPrice": 6999,
    "badge": "Gift Box",
    "badgeType": "bestseller",
    "image": "/images/gajray/complete-fresh-flower-gajra-set-lahore.png",
    "images": [
      "/images/gajray/complete-fresh-flower-gajra-set-lahore.png",
      "/images/gajray/complete-fresh-flower-gajra-set-lahore-2.png",
      "/images/gajray/complete-fresh-flower-gajra-set-lahore-3.png"
    ],
    "desc": "Complete celebration set of 4 fresh rose and motia gajray presented in an elegant gift box. Perfect for sending to brides, family, or wedding guests across Lahore.",
    "stems": "Set of 4 Handcrafted Floral Gajray in Luxury Presentation Box",
    "occasion": [
      "Wedding",
      "Barat & Walima",
      "Eid Gifts"
    ],
    "inStock": true,
    "rating": 4.8,
    "reviewCount": 98,
    "swatches": [
      "#FAF7F2",
      "#8B1E2D",
      "#C6A15B"
    ]
  },

  {
    "id": 311,
    "title": "Traditional Red & White Rose Wedding Garland Mala",
    "slug": "traditional-red-white-wedding-garland-mala-lahore",
    "category": "Fresh Flower Gajray",
    "price": 3499,
    "oldPrice": 4000,
    "badge": "Barat Mala",
    "badgeType": "bestseller",
    "image": "/images/gajray/traditional-red-white-wedding-garland-mala-lahore.png",
    "images": [
      "/images/gajray/traditional-red-white-wedding-garland-mala-lahore.png",
      "/images/gajray/traditional-red-white-wedding-garland-mala-lahore-2.png"
    ],
    "desc": "Traditional fresh flower wedding garland (Mala / Haar) for groom and bride, crafted with alternating crimson red roses, white carnations, and gold tinsel.",
    "stems": "1 Full Length Hand-Strung Wedding Garland Mala",
    "occasion": [
      "Wedding",
      "Barat & Walima"
    ],
    "inStock": true,
    "rating": 4.9,
    "reviewCount": 105,
    "swatches": [
      "#FAF7F2",
      "#8B1E2D",
      "#C6A15B"
    ]
  },

  {
    "id": 312,
    "title": "Mixed Rose & Baby's Breath Wedding Garlands Pair",
    "slug": "mixed-rose-babys-breath-wedding-garlands-lahore",
    "category": "Fresh Flower Gajray",
    "price": 5499,
    "oldPrice": 6200,
    "badge": "Groom & Bride Pair",
    "badgeType": "hot",
    "image": "/images/gajray/mixed-rose-babys-breath-wedding-garlands-lahore.png",
    "images": [
      "/images/gajray/mixed-rose-babys-breath-wedding-garlands-lahore.png",
      "/images/gajray/mixed-rose-babys-breath-wedding-garlands-lahore-2.png"
    ],
    "desc": "Matching pair of dense wedding garlands for the couple, woven with fragrant red roses and cloudy baby's breath. Delivered fresh 2 hours before the event.",
    "stems": "Pair of 2 Matching Couple Wedding Garlands",
    "occasion": [
      "Wedding",
      "Barat & Walima"
    ],
    "inStock": true,
    "rating": 5,
    "reviewCount": 112,
    "swatches": [
      "#FAF7F2",
      "#8B1E2D",
      "#C6A15B"
    ]
  },

  {
    "id": 313,
    "title": "Luxurious Imperial Rose Wedding Garlands Pair",
    "slug": "imperial-rose-wedding-garlands-pair-lahore",
    "category": "Fresh Flower Gajray",
    "price": 7999,
    "oldPrice": 9000,
    "badge": "Imperial Luxury",
    "badgeType": "hot",
    "image": "/images/gajray/imperial-rose-wedding-garlands-pair-lahore.png",
    "images": [
      "/images/gajray/imperial-rose-wedding-garlands-pair-lahore.png"
    ],
    "desc": "Heavy, regal wedding garlands crafted with dense layers of premium velvet roses and gold-accented cords. Designed for high-profile weddings in Lahore.",
    "stems": "Pair of 2 Heavy Imperial Wedding Malas",
    "occasion": [
      "Wedding",
      "Barat & Walima"
    ],
    "inStock": true,
    "rating": 4.8,
    "reviewCount": 39,
    "swatches": [
      "#FAF7F2",
      "#8B1E2D",
      "#C6A15B"
    ]
  },

  {
    "id": 314,
    "title": "Traditional Tuberose Motia & Rose Garland",
    "slug": "tuberose-motia-rose-garland-lahore",
    "category": "Fresh Flower Gajray",
    "price": 6999,
    "oldPrice": 8000,
    "badge": "Fragrant Motia",
    "badgeType": "bestseller",
    "image": "/images/gajray/tuberose-motia-rose-garland-lahore.png",
    "images": [
      "/images/gajray/tuberose-motia-rose-garland-lahore.png",
      "/images/gajray/tuberose-motia-rose-garland-lahore-2.png"
    ],
    "desc": "Intensely fragrant wedding mala strung with pure tuberose (Gul-e-Shabboo), jasmine motia, and deep red roses. A timeless Pakistani wedding tradition.",
    "stems": "1 Pure Tuberose & Motia Hand-Strung Garland",
    "occasion": [
      "Wedding",
      "Barat & Walima"
    ],
    "inStock": true,
    "rating": 4.9,
    "reviewCount": 46,
    "swatches": [
      "#FAF7F2",
      "#8B1E2D",
      "#C6A15B"
    ]
  },

  {
    "id": 315,
    "title": "Royal Red & White Rose Bridal Garland Mala",
    "slug": "royal-red-white-rose-bridal-garland-lahore",
    "category": "Fresh Flower Gajray",
    "price": 19999,
    "oldPrice": 22000,
    "badge": "Royal Couture",
    "badgeType": "hot",
    "image": "/images/gajray/royal-red-white-rose-bridal-garland-lahore.png",
    "images": [
      "/images/gajray/royal-red-white-rose-bridal-garland-lahore.png",
      "/images/gajray/royal-red-white-rose-bridal-garland-lahore-2.png"
    ],
    "desc": "The pinnacle of Pakistani wedding luxury. Heavy ceremonial garland hand-strung with hundreds of imported Dutch roses and delicate pearls for royal weddings.",
    "stems": "Pair of 2 Grand Ceremonial Royal Rose Malas",
    "occasion": [
      "Wedding",
      "Barat & Walima"
    ],
    "inStock": true,
    "rating": 5,
    "reviewCount": 53,
    "swatches": [
      "#FAF7F2",
      "#8B1E2D",
      "#C6A15B"
    ]
  },

  {
    "id": 316,
    "title": "Fresh White Rose Wedding Garland Mala",
    "slug": "fresh-white-rose-wedding-garland-lahore",
    "category": "Fresh Flower Gajray",
    "price": 9999,
    "oldPrice": 11500,
    "badge": "Pure Ivory",
    "badgeType": "hot",
    "image": "/images/gajray/fresh-white-rose-wedding-garland-lahore.png",
    "images": [
      "/images/gajray/fresh-white-rose-wedding-garland-lahore.png"
    ],
    "desc": "Ethereal pure white rose garland crafted with fresh imported avalanche roses and delicate gypsophila. Perfect for nikah and contemporary celebrations.",
    "stems": "1 Handcrafted Pure White Rose Ceremonial Mala",
    "occasion": [
      "Wedding",
      "Barat & Walima"
    ],
    "inStock": true,
    "rating": 4.8,
    "reviewCount": 60,
    "swatches": [
      "#FAF7F2",
      "#8B1E2D",
      "#C6A15B"
    ]
  },

  {
    "id": 317,
    "title": "White & Pink Rose Mala Haar for Weddings",
    "slug": "white-pink-rose-mala-haar-lahore",
    "category": "Fresh Flower Gajray",
    "price": 3500,
    "oldPrice": 4200,
    "badge": "Festive Haar",
    "badgeType": "save",
    "image": "/images/gajray/white-pink-rose-mala-haar-lahore.jpg",
    "images": [
      "/images/gajray/white-pink-rose-mala-haar-lahore.jpg"
    ],
    "desc": "Vibrant festive garland strung with dual-tone pink and white roses, suitable for welcoming guests, convocation, weddings, and milestone receptions.",
    "stems": "1 Hand-Strung Dual-Tone Rose Garland",
    "occasion": [
      "Wedding",
      "Congratulations",
      "Celebration"
    ],
    "inStock": true,
    "rating": 4.9,
    "reviewCount": 67,
    "swatches": [
      "#FAF7F2",
      "#8B1E2D",
      "#C6A15B"
    ]
  },

  {
    "id": 318,
    "title": "Customized Wedding Stage Fresh Floral Décor",
    "slug": "customized-wedding-stage-floral-decor-lahore",
    "category": "Wedding Décor",
    "price": 35000,
    "oldPrice": 42000,
    "badge": "Bespoke Stage",
    "badgeType": "hot",
    "image": "/images/wedding/customized-wedding-stage-floral-decor-lahore.jpg",
    "images": [
      "/images/wedding/customized-wedding-stage-floral-decor-lahore.jpg"
    ],
    "desc": "Complete floral stage backdrop with cascading white lilies, crimson roses, eucalyptus foliage, and custom ambient lighting designed by our master floral architects.",
    "stems": "Full Venue Stage Installation with Fresh Flowers & Foliage",
    "occasion": [
      "Wedding",
      "Barat & Walima"
    ],
    "inStock": true,
    "rating": 5,
    "reviewCount": 74,
    "swatches": [
      "#8B1E2D",
      "#C6A15B",
      "#FFFFFF"
    ]
  },

  {
    "id": 319,
    "title": "Red & White Wedding Car Floral Decoration",
    "slug": "red-white-wedding-car-flower-decoration-lahore",
    "category": "Wedding Décor",
    "price": 8500,
    "oldPrice": 10000,
    "badge": "Bridal Car",
    "badgeType": "bestseller",
    "image": "/images/wedding/red-white-wedding-car-flower-decoration-lahore.jpg",
    "images": [
      "/images/wedding/red-white-wedding-car-flower-decoration-lahore.jpg"
    ],
    "desc": "Professional fresh flower bridal car decoration with bonnet heart arrangement, side door floral corsages, and rear ribbon bows using car-safe non-scratch suction mounts.",
    "stems": "Complete Car Floral Décor: Bonnet, Doors, Mirrors & Handles",
    "occasion": [
      "Wedding",
      "Barat & Walima"
    ],
    "inStock": true,
    "rating": 4.8,
    "reviewCount": 81,
    "swatches": [
      "#8B1E2D",
      "#C6A15B",
      "#FFFFFF"
    ]
  },

  {
    "id": 320,
    "title": "Enchanting Wedding Staircase Floral Décor",
    "slug": "enchanting-wedding-staircase-decor-lahore",
    "category": "Wedding Décor",
    "price": 18500,
    "oldPrice": 22000,
    "badge": "Grand Entrance",
    "badgeType": "hot",
    "image": "/images/wedding/enchanting-wedding-staircase-decor-lahore.jpg",
    "images": [
      "/images/wedding/enchanting-wedding-staircase-decor-lahore.jpg"
    ],
    "desc": "Breathtaking spiral staircase floral banister styling with cascading white roses, baby's breath, and fairy lights for homes and banquet halls in Lahore.",
    "stems": "Full Banister Floral Installation with Warm Ambient Lights",
    "occasion": [
      "Wedding",
      "Celebration"
    ],
    "inStock": true,
    "rating": 4.9,
    "reviewCount": 88,
    "swatches": [
      "#8B1E2D",
      "#C6A15B",
      "#FFFFFF"
    ]
  },

  {
    "id": 321,
    "title": "Festive Wedding House Fairy Lighting Décor",
    "slug": "festive-wedding-house-lighting-decor-lahore",
    "category": "Wedding Décor",
    "price": 12000,
    "oldPrice": 14500,
    "badge": "House Lighting",
    "badgeType": "save",
    "image": "/images/wedding/festive-wedding-house-lighting-decor-lahore.jpg",
    "images": [
      "/images/wedding/festive-wedding-house-lighting-decor-lahore.jpg"
    ],
    "desc": "Warm ambient fairy and micro-bulb roof curtain lighting for wedding houses across Lahore. Installed by certified technicians with safe weather-proof cabling.",
    "stems": "Complete Exterior House Facade & Roof Lighting Setup",
    "occasion": [
      "Wedding",
      "Celebration"
    ],
    "inStock": true,
    "rating": 5,
    "reviewCount": 95,
    "swatches": [
      "#8B1E2D",
      "#C6A15B",
      "#FFFFFF"
    ]
  },

  {
    "id": 322,
    "title": "Queen's Aura Luxury Rose & Lily Bouquet",
    "slug": "queens-aura-rose-lily-bouquet-lahore",
    "category": "Bouquets",
    "price": 4500,
    "oldPrice": 5200,
    "badge": "Signature Mix",
    "badgeType": "hot",
    "image": "/images/bouquets/queens-aura-rose-lily-bouquet-lahore.jpg",
    "images": [
      "/images/bouquets/queens-aura-rose-lily-bouquet-lahore.jpg"
    ],
    "desc": "Regal floral bouquet combining imported red roses with fragrant Oriental lilies, eucalyptus, and frosted white blooms in luxury European dual-tone paper.",
    "stems": "18 Mixed Stems: Dutch Roses, Casablanca Lilies & Eucalyptus",
    "occasion": [
      "Anniversary",
      "Birthday",
      "Romance",
      "Congratulations"
    ],
    "inStock": true,
    "rating": 4.8,
    "reviewCount": 102,
    "swatches": [
      "#E8B4B8",
      "#557153",
      "#FAF4EB"
    ]
  },

  {
    "id": 323,
    "title": "Ivory Elegance White Rose Bouquet",
    "slug": "ivory-elegance-white-rose-bouquet-lahore",
    "category": "Roses",
    "price": 3200,
    "oldPrice": 3800,
    "badge": "Pure Elegance",
    "badgeType": "bestseller",
    "image": "/images/roses/ivory-elegance-white-rose-bouquet-lahore.png",
    "images": [
      "/images/roses/ivory-elegance-white-rose-bouquet-lahore.png"
    ],
    "desc": "Hand-tied bouquet of 16 fresh imported Dutch white roses with delicate baby's breath in warm cream wrapping. Perfect for apologies, congratulations, and weddings.",
    "stems": "16 Imported White Roses & Baby's Breath",
    "occasion": [
      "Anniversary",
      "Get Well Soon",
      "Congratulations"
    ],
    "inStock": true,
    "rating": 4.9,
    "reviewCount": 109,
    "swatches": [
      "#8B1E2D",
      "#0B0B0B",
      "#C6A15B"
    ]
  },

  {
    "id": 324,
    "title": "Purple Lavender Dream Rose Bouquet",
    "slug": "purple-lavender-dream-rose-bouquet-lahore",
    "category": "Roses",
    "price": 3500,
    "oldPrice": 4000,
    "badge": "Rare Blooms",
    "badgeType": "favorite",
    "image": "/images/roses/purple-lavender-dream-rose-bouquet-lahore.png",
    "images": [
      "/images/roses/purple-lavender-dream-rose-bouquet-lahore.png"
    ],
    "desc": "Enchanting bouquet of lavender and lilac roses nestled in soft purple paper and organza ribbon. A rare, dreamy floral gift for special moments in Lahore.",
    "stems": "16 Lavender Stems & Silver Dust Foliage",
    "occasion": [
      "Birthday",
      "Anniversary",
      "Romance"
    ],
    "inStock": true,
    "rating": 5,
    "reviewCount": 36,
    "swatches": [
      "#8B1E2D",
      "#0B0B0B",
      "#C6A15B"
    ]
  },

  {
    "id": 325,
    "title": "Crimson Enchantment Red Rose Bouquet",
    "slug": "crimson-enchantment-red-rose-bouquet-lahore",
    "category": "Roses",
    "price": 3800,
    "oldPrice": 4400,
    "badge": "Romantic Pick",
    "badgeType": "hot",
    "image": "/images/roses/crimson-enchantment-red-rose-bouquet-lahore.png",
    "images": [
      "/images/roses/crimson-enchantment-red-rose-bouquet-lahore.png"
    ],
    "desc": "Deep crimson imported roses wrapped in signature burgundy and gold embossed paper. Delivers the classic expression of love and romance anywhere in Lahore.",
    "stems": "18 Velvet Crimson Red Roses & Baby's Breath",
    "occasion": [
      "Anniversary",
      "Romance",
      "Valentine",
      "Birthday"
    ],
    "inStock": true,
    "rating": 4.8,
    "reviewCount": 43,
    "swatches": [
      "#8B1E2D",
      "#0B0B0B",
      "#C6A15B"
    ]
  },

  {
    "id": 326,
    "title": "Golden Glow Yellow Rose & Sunflower Bouquet",
    "slug": "golden-glow-yellow-rose-sunflower-bouquet-lahore",
    "category": "Sunflowers",
    "price": 2900,
    "oldPrice": 3400,
    "badge": "Sunlit Cheer",
    "badgeType": "bestseller",
    "image": "/images/bouquets/golden-glow-yellow-rose-sunflower-bouquet-lahore.png",
    "images": [
      "/images/bouquets/golden-glow-yellow-rose-sunflower-bouquet-lahore.png"
    ],
    "desc": "Radiant golden arrangement combining bright sunflowers, sunny yellow roses, and fresh green foliage. Guaranteed to bring joy and positivity to anyone in Lahore.",
    "stems": "14 Sunny Stems: Sunflowers, Yellow Roses & Foliage",
    "occasion": [
      "Birthday",
      "Get Well Soon",
      "Congratulations"
    ],
    "inStock": true,
    "rating": 4.9,
    "reviewCount": 50,
    "swatches": [
      "#F4B41A",
      "#8B1E2D",
      "#2A2A2A"
    ]
  },

  {
    "id": 327,
    "title": "Nature's Bounty Wildflower Garden Bouquet",
    "slug": "natures-bounty-wildflower-bouquet-lahore",
    "category": "Bouquets",
    "price": 3400,
    "oldPrice": 3900,
    "badge": "Botanical Mix",
    "badgeType": "save",
    "image": "/images/bouquets/natures-bounty-wildflower-bouquet-lahore.png",
    "images": [
      "/images/bouquets/natures-bounty-wildflower-bouquet-lahore.png"
    ],
    "desc": "Artisanal wildflower bouquet featuring garden spray roses, daisies, lisianthus, and aromatic eucalyptus hand-tied in natural brown craft paper.",
    "stems": "18 Mixed Garden Stems & Fresh Foliage",
    "occasion": [
      "Birthday",
      "Congratulations",
      "Get Well Soon"
    ],
    "inStock": true,
    "rating": 5,
    "reviewCount": 57,
    "swatches": [
      "#E8B4B8",
      "#557153",
      "#FAF4EB"
    ]
  },

  {
    "id": 328,
    "title": "Velvet Noir Black Wrapped Red Rose Bouquet",
    "slug": "velvet-noir-black-wrapped-red-roses-lahore",
    "category": "Roses",
    "price": 3600,
    "oldPrice": 4200,
    "badge": "Modern Luxury",
    "badgeType": "hot",
    "image": "/images/roses/velvet-noir-black-wrapped-red-roses-lahore.png",
    "images": [
      "/images/roses/velvet-noir-black-wrapped-red-roses-lahore.png"
    ],
    "desc": "High-contrast luxury presentation featuring deep red Dutch roses wrapped in matte jet-black paper and tied with gold ribbon. Ultra-modern and stylish.",
    "stems": "16 Imported Red Roses in Matte Black Wrap",
    "occasion": [
      "Anniversary",
      "Romance",
      "Birthday"
    ],
    "inStock": true,
    "rating": 4.8,
    "reviewCount": 64,
    "swatches": [
      "#8B1E2D",
      "#0B0B0B",
      "#C6A15B"
    ]
  },

  {
    "id": 329,
    "title": "Classic Red & White Duet Bouquet",
    "slug": "classic-red-white-duet-bouquet-lahore",
    "category": "Bouquets",
    "price": 2800,
    "oldPrice": 3200,
    "badge": "Classic Duet",
    "badgeType": "bestseller",
    "image": "/images/bouquets/classic-red-white-duet-bouquet-lahore.png",
    "images": [
      "/images/bouquets/classic-red-white-duet-bouquet-lahore.png"
    ],
    "desc": "Harmonious pairing of fiery crimson roses and peaceful ivory blooms, accented with gypsophila. An all-time favorite for birthdays and anniversaries in Lahore.",
    "stems": "14 Red & White Stems with Baby's Breath",
    "occasion": [
      "Anniversary",
      "Birthday",
      "Congratulations"
    ],
    "inStock": true,
    "rating": 4.9,
    "reviewCount": 71,
    "swatches": [
      "#E8B4B8",
      "#557153",
      "#FAF4EB"
    ]
  },

  {
    "id": 330,
    "title": "The Solo Romance Black Wrapped Red Rose",
    "slug": "solo-romance-black-wrap-rose-lahore",
    "category": "Roses",
    "price": 1290,
    "oldPrice": 1500,
    "badge": "Sweet Gesture",
    "badgeType": "save",
    "image": "/images/roses/solo-romance-black-wrap-rose-lahore.png",
    "images": [
      "/images/roses/solo-romance-black-wrap-rose-lahore.png"
    ],
    "desc": "A single long-stem imported Dutch red rose nestled in baby's breath and wrapped in sleek black paper with satin ribbon. A delicate yet impactful romantic gesture.",
    "stems": "1 Premium Long-Stem Dutch Rose in Black Wrap",
    "occasion": [
      "Romance",
      "Valentine",
      "Birthday"
    ],
    "inStock": true,
    "rating": 5,
    "reviewCount": 78,
    "swatches": [
      "#8B1E2D",
      "#0B0B0B",
      "#C6A15B"
    ]
  },

  {
    "id": 331,
    "title": "Heartfelt Apology Red Rose Bouquet",
    "slug": "heartfelt-apology-red-rose-bouquet-lahore",
    "category": "Bouquets",
    "price": 3200,
    "oldPrice": 3700,
    "badge": "I'm Sorry",
    "badgeType": "favorite",
    "image": "/images/bouquets/heartfelt-apology-red-rose-bouquet-lahore.png",
    "images": [
      "/images/bouquets/heartfelt-apology-red-rose-bouquet-lahore.png"
    ],
    "desc": "Say 'I am sorry' from the bottom of your heart with this elegant red rose bouquet in sophisticated black wrap, accompanied by a custom handwritten apology card.",
    "stems": "14 Red Roses in Black Wrap with Handwritten Apology Card",
    "occasion": [
      "Get Well Soon",
      "Romance",
      "Anniversary"
    ],
    "inStock": true,
    "rating": 4.8,
    "reviewCount": 85,
    "swatches": [
      "#E8B4B8",
      "#557153",
      "#FAF4EB"
    ]
  },

  {
    "id": 332,
    "title": "The Square Royale Fresh Rose Gift Box",
    "slug": "square-royale-fresh-rose-gift-box-lahore",
    "category": "Bouquets",
    "price": 4800,
    "oldPrice": 5500,
    "badge": "Flower Box",
    "badgeType": "hot",
    "image": "/images/bouquets/square-royale-fresh-rose-gift-box-lahore.png",
    "images": [
      "/images/bouquets/square-royale-fresh-rose-gift-box-lahore.png"
    ],
    "desc": "Geometric square luxury black gift box densely packed with fresh red and blush roses, preserved in floral foam for long-lasting hydration and tabletop display.",
    "stems": "18 Fresh Roses in Luxury Keepsake Box",
    "occasion": [
      "Birthday",
      "Anniversary",
      "Romance"
    ],
    "inStock": true,
    "rating": 4.9,
    "reviewCount": 92,
    "swatches": [
      "#E8B4B8",
      "#557153",
      "#FAF4EB"
    ]
  },

  {
    "id": 333,
    "title": "Elegant Handheld Floral Fan with Pink Roses",
    "slug": "elegant-handheld-floral-fan-pink-roses-lahore",
    "category": "Fresh Flower Gajray",
    "price": 6999,
    "oldPrice": 7999,
    "badge": "Bridal Fan",
    "badgeType": "hot",
    "image": "/images/gajray/elegant-handheld-floral-fan-pink-roses-lahore.png",
    "images": [
      "/images/gajray/elegant-handheld-floral-fan-pink-roses-lahore.png"
    ],
    "desc": "Traditional Pakistani bridal floral fan (Handheld Pankha) decorated with fresh baby pink roses, pearls, and jasmine buds. A regal bridal prop for nikah and barat photo sessions.",
    "stems": "1 Handcrafted Fresh Floral Bridal Prop Fan",
    "occasion": [
      "Wedding",
      "Barat & Walima"
    ],
    "inStock": true,
    "rating": 5,
    "reviewCount": 99,
    "swatches": [
      "#FAF7F2",
      "#8B1E2D",
      "#C6A15B"
    ]
  },
];

import { DELIVERY_AREA_FEES, DELIVERY_SLOTS } from "@/lib/delivery";

/** Lahore delivery areas — sourced from lib/delivery.ts (single source of truth). */
export const LAHORE_AREAS = DELIVERY_AREA_FEES.map((a) => a.area);

/** Delivery time slots — sourced from lib/delivery.ts (includes cutoff info). */
export const TIME_SLOTS = DELIVERY_SLOTS;

export const CARD_OCCASIONS = [
  "Happy Birthday 🎂",
  "Happy Anniversary 💍",
  "I Love You ❤️",
  "Congratulations 🌟",
  "Get Well Soon 🌸",
  "I'm Sorry 🤍",
  "Just Because 🌿"
];

export const REVIEWS = [
  {
    quote: "What you approve on WhatsApp is what actually arrives. The Crimson Blush roses were fresh, long-stemmed, and arrived in DHA Phase 5 within 2.5 hours. Excellent service.",
    name: "Ayesha",
    location: "DHA Phase 5, Lahore",
    item: "Crimson Blush Rose Bouquet"
  },
  {
    quote: "Booked the 11:30 PM midnight surprise slot for our anniversary in Gulberg. The bouquet arrived right on time with warm fairy lights and a neat handwritten card. My wife was thrilled.",
    name: "Hamza",
    location: "Gulberg III, Lahore",
    item: "Birthday Cake & Acrylic Flower Box"
  },
  {
    quote: "Ordered the Mehndi flower jewellery set (haath phool and matha patti) for my sister's event in Bahria Town. The motia and rosebuds were fragrant and completely fresh.",
    name: "Fatima",
    location: "Bahria Town, Lahore",
    item: "Mehndi Fresh Flower Jewellery Set"
  },
  {
    quote: "Ordered from the UK for my mother in Model Town. Effortless payment, WhatsApp photo before dispatch, and delivered in air-conditioned vans. The sunflowers were radiant.",
    name: "Bilal",
    location: "Model Town, Lahore",
    item: "Golden Duo Sunflowers"
  },
  {
    quote: "The single rose in black wrapping is so elegant and affordable at Rs. 1,180. Ordered three times already for friends and office colleagues in Johar Town.",
    name: "Zainab",
    location: "Johar Town, Lahore",
    item: "Pearl Note Single White Rose"
  },
  {
    quote: "Their wedding car decoration service was seamless. The florists came directly to our house in Cantt and styled the car with fresh imported roses and ribbons in under 45 minutes.",
    name: "Usman",
    location: "Cantt, Lahore",
    item: "Fresh Flower Wedding Car Decoration"
  }
];
