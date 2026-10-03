export interface Product {
  id: number;
  badge: string;
  badgeType: "hot" | "bestseller" | "save" | "new" | "favorite" | "promotion";
  title: string;
  slug: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: "Bouquets" | "Roses" | "Sunflowers" | "Wedding Décor" | "Gifts & Cakes" | "Money Bouquets";
  rating: number;
  reviewCount: number;
  desc: string;
  stems?: string;
  swatches?: string[];
  occasion?: string[];
}

export const ALL_PRODUCTS: Product[] = [
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
    rating: 4.9,
    reviewCount: 92,
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
    rating: 4.8,
    reviewCount: 54,
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
    rating: 5.0,
    reviewCount: 128,
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
    rating: 4.8,
    reviewCount: 37,
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
    rating: 4.9,
    reviewCount: 142,
    desc: "A bouquet of 12 to 15 fresh red roses with white baby's breath, wrapped in black paper with a white ribbon. It is the classic anniversary and Valentine's bouquet. Add a handwritten card and choose your delivery time. Ready for same-day delivery in Lahore.",
    stems: "12-15 Fresh Red Roses & White Gypsophila",
    swatches: ["#E11D48", "#1C1C1C", "#FFFFFF"],
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
    rating: 4.9,
    reviewCount: 62,
    desc: "Twelve white roses with baby's breath in soft pink wrapping. A gentle bouquet for a new baby, a nikkah gift or a quiet apology.",
    stems: "12 Fresh White Roses & Baby's Breath",
    swatches: ["#FFFFFF", "#F9ECEF", "#E11D48"],
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
    rating: 5.0,
    reviewCount: 78,
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
    rating: 4.9,
    reviewCount: 51,
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
    rating: 4.8,
    reviewCount: 45,
    desc: "One long-stem imported red rose, baby's breath and a red ribbon. Small, but it means something. Good for a surprise at the office or a first date.",
    stems: "1 Long-Stem Imported Dutch Rose",
    swatches: ["#E11D48", "#0F0F11"],
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
    rating: 4.9,
    reviewCount: 39,
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
    rating: 5.0,
    reviewCount: 96,
    desc: "A hand-folded fan of PKR notes with 10 fresh roses. You choose the cash note budget and denominations (Rs. 100, 500, 1,000 or 5,000) and we craft the design with fresh blooms.",
    stems: "Custom Cash Fan Folding + 10 Fresh Roses",
    swatches: ["#E11D48", "#10B981", "#1C1C1C"],
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
    rating: 4.9,
    reviewCount: 73,
    desc: "Sixteen Ferrero Rocher chocolates with eight red roses in red and clear wrapping. For anyone who would choose chocolate over flowers, but likes both.",
    stems: "16 Ferrero Rocher Chocolates & 8 Red Roses",
    swatches: ["#E11D48", "#D97706", "#2A2A2E"],
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
    rating: 4.9,
    reviewCount: 34,
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
    rating: 5.0,
    reviewCount: 88,
    desc: "A fresh flower box with a 1.5 lb cake, a small bouquet, a handwritten card and warm fairy lights. Ready for same-day and midnight surprise delivery across Lahore.",
    stems: "1.5 lb Chocolate Fudge Cake, Roses & Fairy Lights",
    swatches: ["#E11D48", "#4A2810", "#F59E0B"],
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
    rating: 5.0,
    reviewCount: 41,
    desc: "Fifty white roses tied with a red satin ribbon. It is a statement bouquet for a proposal, an anniversary, or a big apology. Please order at least a few hours ahead so our florist can source and arrange 50 stems.",
    stems: "50 White Roses & Red Satin Ribbon",
    swatches: ["#FFFFFF", "#E11D48", "#18181B"],
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
    rating: 5.0,
    reviewCount: 65,
    desc: "A complete bridal room setup with canopy drapes, fresh rose garlands and petals, done at your location. Includes on-site setup.",
    stems: "Full On-Site Bridal Canopy Setup",
    swatches: ["#E11D48", "#FFFFFF", "#F59E0B"],
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
    rating: 5.0,
    reviewCount: 22,
    desc: "Fresh flower styling for the wedding car with ribbon detail. Please share the car make and model when you book.",
    stems: "Complete Car Flower Styling Service",
    swatches: ["#E11D48", "#FFFFFF"],
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
    rating: 4.9,
    reviewCount: 48,
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
    rating: 5.0,
    reviewCount: 64,
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
    rating: 4.9,
    reviewCount: 52,
    desc: "A vibrant blend of fresh imported red, pure white, and soft pink roses with filler greens. The ideal 'I don't know what to pick' bouquet for any celebration.",
    stems: "18 Mixed Tri-Tone Dutch Roses",
    swatches: ["#E11D48", "#FFFFFF", "#F472B6"],
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
    rating: 4.9,
    reviewCount: 38,
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
    rating: 4.8,
    reviewCount: 29,
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
    rating: 5.0,
    reviewCount: 31,
    desc: "A monumental presentation of 100 long-stem imported red roses in luxury tiered arrangement. The definitive choice for marriage proposals and landmark anniversaries.",
    stems: "100 Premium Imported Velvet Red Roses",
    swatches: ["#E11D48", "#18181B"],
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
    rating: 4.9,
    reviewCount: 43,
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
    rating: 4.9,
    reviewCount: 67,
    desc: "A hand-tied fresh red rose bouquet bundled with a soft plush teddy bear and personalized card. One of Lahore's most requested combos for birthdays and surprises.",
    stems: "10 Red Roses, Baby's Breath & 10-inch Teddy Bear",
    swatches: ["#E11D48", "#D97706", "#FFFFFF"],
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
    rating: 5.0,
    reviewCount: 46,
    desc: "A complete birthday and surprise package featuring a fresh flower bouquet, 1.5 lb fudge cake, helium celebration balloons, and midnight delivery slot.",
    stems: "Fresh Bouquet, 1.5 lb Cake, 3 Helium Balloons & Card",
    swatches: ["#3B82F6", "#E11D48", "#F59E0B"],
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
    rating: 4.9,
    reviewCount: 58,
    desc: "Fresh velvety red and ivory roses arranged inside a keepsake matte black hat box with gold foil branding. Photographs beautifully and needs no vase.",
    stems: "20-22 Velvet Roses in Hat Box Arrangement",
    swatches: ["#E11D48", "#111827", "#D4AF37"],
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
    rating: 5.0,
    reviewCount: 39,
    desc: "A festive mixed sunflower and rose bouquet tied with university color ribbons and custom congratulations card. Handcrafted for convocations and degree celebrations.",
    stems: "Sunflowers, Bright Roses & Celebration Ribbons",
    swatches: ["#F59E0B", "#1E3A8A", "#10B981"],
    occasion: ["Graduation", "Congratulations"]
  }
];

export const LAHORE_AREAS = [
  "DHA Phase 1-4, Lahore",
  "DHA Phase 5-6, Lahore",
  "DHA Phase 7-9, Lahore",
  "Gulberg (I, II, III), Lahore",
  "Bahria Town, Lahore",
  "Model Town, Lahore",
  "Johar Town, Lahore",
  "Cantt & Cavalry Ground, Lahore",
  "Askari (1-11), Lahore",
  "Wapda Town, Lahore",
  "Township, Lahore",
  "Faisal Town, Lahore",
  "Garden Town, Lahore",
  "Valencia Town, Lahore",
  "Allama Iqbal Town, Lahore",
  "Shadman, Lahore",
  "Lake City, Lahore",
  "Other Lahore Area"
];

export const TIME_SLOTS = [
  { id: "morning", label: "Morning Delivery", time: "10:00 AM – 1:00 PM", icon: "🌅" },
  { id: "afternoon", label: "Afternoon Delivery", time: "1:00 PM – 5:00 PM", icon: "☀️" },
  { id: "evening", label: "Evening Delivery", time: "5:00 PM – 9:00 PM", icon: "🌆" },
  { id: "midnight", label: "Midnight Surprise Slot", time: "11:30 PM – 12:15 AM", icon: "🌙" },
];

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
    rating: 5,
    item: "Crimson Blush Rose Bouquet"
  },
  {
    quote: "Booked the 11:30 PM midnight surprise slot for our anniversary in Gulberg. The bouquet arrived right on time with warm fairy lights and a neat handwritten card. My wife was thrilled.",
    name: "Hamza",
    location: "Gulberg III, Lahore",
    rating: 5,
    item: "Birthday Cake & Acrylic Flower Box"
  },
  {
    quote: "Ordered the Mehndi flower jewellery set (haath phool and matha patti) for my sister's event in Bahria Town. The motia and rosebuds were fragrant and completely fresh.",
    name: "Fatima",
    location: "Bahria Town, Lahore",
    rating: 5,
    item: "Mehndi Fresh Flower Jewellery Set"
  },
  {
    quote: "Ordered from the UK for my mother in Model Town. Effortless payment, WhatsApp photo before dispatch, and delivered in air-conditioned vans. The sunflowers were radiant.",
    name: "Bilal",
    location: "Model Town, Lahore",
    rating: 5,
    item: "Golden Duo Sunflowers"
  },
  {
    quote: "The single rose in black wrapping is so elegant and affordable at Rs. 1,180. Ordered three times already for friends and office colleagues in Johar Town.",
    name: "Zainab",
    location: "Johar Town, Lahore",
    rating: 5,
    item: "Pearl Note Single White Rose"
  },
  {
    quote: "Their wedding car decoration service was seamless. The florists came directly to our house in Cantt and styled the car with fresh imported roses and ribbons in under 45 minutes.",
    name: "Usman",
    location: "Cantt, Lahore",
    rating: 5,
    item: "Fresh Flower Wedding Car Decoration"
  }
];
