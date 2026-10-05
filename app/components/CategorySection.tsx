"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Star, ChevronLeft, ChevronRight } from "lucide-react";

export interface DepartmentItem {
  id: string;
  name: string;
  type: "bouquets" | "occasions" | "gifts";
  tagline: string;
  href: string;
  image: string;
  badge?: string;
}

export const ALL_DEPARTMENTS: DepartmentItem[] = [
  // --- BOUQUETS & FLORALS (Aligned with Header Nav) ---
  {
    id: "all-bouquets",
    name: "Hand-Tied Bouquets",
    type: "bouquets",
    tagline: "Fresh seasonal florals tied daily",
    href: "/bouquets",
    image: "/images/categories/all_bouquets.webp",
    badge: "24+ Styles",
  },
  {
    id: "roses-collection",
    name: "Imported Dutch Roses",
    type: "bouquets",
    tagline: "Long-stem premium roses",
    href: "/roses",
    image: "/images/categories/roses_collection.webp",
    badge: "Hot",
  },
  {
    id: "velvet-red-roses",
    name: "Velvet Red Roses",
    type: "bouquets",
    tagline: "12, 24, or 50 stem arrangements",
    href: "/roses/red-roses",
    image: "/images/lahoreblooms/ruby_vale_rose.webp",
    badge: "Bestseller",
  },
  {
    id: "sunflowers",
    name: "Sunflowers & Mixed Blooms",
    type: "bouquets",
    tagline: "Vibrant golden sunflowers & lilies",
    href: "/sunflowers",
    image: "/images/categories/sunflowers.webp",
  },
  {
    id: "money-bouquets",
    name: "Custom Money Bouquets",
    type: "bouquets",
    tagline: "Banknotes carefully styled with roses",
    href: "/money-bouquets",
    badge: "Trending",
    image: "/images/categories/money_bouquets.webp",
  },
  {
    id: "crochet-bouquets",
    name: "Handmade Crochet Bouquets",
    type: "bouquets",
    tagline: "Keepsake eternal yarn flowers",
    href: "/crochet-bouquets",
    image: "/images/lahoreblooms/crochet_sub.webp",
  },
  {
    id: "dried-flowers",
    name: "Dried Everlasting Florals",
    type: "bouquets",
    tagline: "Natural preserved botanical stems",
    href: "/dried-flowers",
    image: "/images/product_4_bamboo_dried.jpg",
  },

  // --- SPECIAL OCCASIONS (Aligned with Header Nav) ---
  {
    id: "birthday",
    name: "Birthday Surprises",
    type: "occasions",
    tagline: "Bouquets, cakes & midnight delivery",
    href: "/occasions/birthday",
    badge: "Midnight",
    image: "/images/categories/birthday_surprises.webp",
  },
  {
    id: "anniversary",
    name: "Wedding Anniversaries",
    type: "occasions",
    tagline: "Romantic long-stem rose tributes",
    href: "/occasions/anniversary",
    badge: "Romantic",
    image: "/images/lahoreblooms/crimson_blush.webp",
  },
  {
    id: "love-romance",
    name: "Love & Romance",
    type: "occasions",
    tagline: "Red roses, chocolates & greeting cards",
    href: "/occasions/love-and-romance",
    image: "/images/lahoreblooms/scarlet_vow.webp",
  },
  {
    id: "barat-walima",
    name: "Barat & Walima Décor",
    type: "occasions",
    tagline: "Stage floral arches & car decor",
    href: "/occasions/barat-and-walima",
    image: "/images/categories/wedding_car.webp",
  },
  {
    id: "eid-gifts",
    name: "Eid Mubarak Gifts",
    type: "occasions",
    tagline: "Chaand Raat hampers & Eidi bouquets",
    href: "/occasions/eid-gifts",
    badge: "Special",
    image: "/images/lahoreblooms/duo_royale.webp",
  },
  {
    id: "congratulations",
    name: "Congratulations & Graduations",
    type: "occasions",
    tagline: "Festive congratulations bouquets",
    href: "/occasions/congratulations",
    image: "/images/lahoreblooms/golden_duo.webp",
  },
  {
    id: "get-well",
    name: "Get Well Soon & Apologies",
    type: "occasions",
    tagline: "Gentle hospital & apology flowers",
    href: "/occasions/get-well-and-sorry",
    image: "/images/lahoreblooms/pink_meadow.webp",
  },

  // --- CAKES, GIFTS & SERVICES (Aligned with Header Nav) ---
  {
    id: "cakes-gifts",
    name: "All Cakes & Gift Combos",
    type: "gifts",
    tagline: "Flowers paired with cakes & sweets",
    href: "/gifts-and-cakes",
    image: "/images/categories/gifts_cakes.webp",
  },
  {
    id: "scents-perfumes",
    name: "Royal Arabian Oud & Attar",
    type: "gifts",
    tagline: "Pure Rooh-e-Gulab & woody oud",
    href: "/collections/scents-and-perfumes",
    image: "/images/lahoreblooms/cat_jewellery.webp",
    badge: "New",
  },
  {
    id: "fresh-gajray",
    name: "Fresh Flower Gajray",
    type: "gifts",
    tagline: "Motia & rose handcrafted wrist cuffs",
    href: "/collections/fresh-flower-gajray",
    image: "/images/lahoreblooms/ivory_promise.webp",
    badge: "Handmade",
  },
  {
    id: "same-day-delivery",
    name: "Same-Day Express Delivery",
    type: "gifts",
    tagline: "2 to 5 hour delivery across all Lahore",
    href: "/delivery-areas",
    badge: "Express",
    image: "/images/bestseller_wrapped_1.jpg",
  },
];

export const FEATURED_BOUQUETS = [
  {
    id: "crimson-blush",
    name: "Crimson Blush Rose Bouquet",
    tagline: "Imported Dutch Red Roses & Baby's Breath",
    price: 1900,
    oldPrice: 2200,
    image: "/images/lahoreblooms/crimson_blush.webp",
    badge: "Bestseller",
    rating: 4.9,
    href: "/products/crimson-blush-fresh-red-rose-bouquet",
  },
  {
    id: "solara-sunflower",
    name: "Solara Sunflower Harmony",
    tagline: "Golden Sunflowers with Ruby Spray Roses",
    price: 2450,
    oldPrice: 2800,
    image: "/images/lahoreblooms/solara_sunflower.webp",
    badge: "Trending",
    rating: 5.0,
    href: "/products/solara-premium-sunflower-rose-bouquet",
  },
  {
    id: "ruby-vale",
    name: "Ruby Vale Grand 50 Roses",
    tagline: "50 Stem Dutch Velvet Long-Stem Roses",
    price: 5500,
    oldPrice: 6200,
    image: "/images/lahoreblooms/ruby_vale_rose.webp",
    badge: "Grand Luxury",
    rating: 5.0,
    href: "/products/ruby-vale-grand-50-rose-bouquet",
  },
  {
    id: "duo-royale",
    name: "Duo Royale Red & White Roses",
    tagline: "24 Two-Tone Crimson & Pure White Blooms",
    price: 2800,
    oldPrice: 3200,
    image: "/images/lahoreblooms/duo_royale.webp",
    badge: "Artisanal",
    rating: 4.9,
    href: "/products/duo-royale-two-tone-roses",
  },
  {
    id: "golden-duo",
    name: "Golden Duo Sunflowers & Roses",
    tagline: "Sunny Sunflowers Paired with Red Roses",
    price: 2250,
    oldPrice: 2500,
    image: "/images/lahoreblooms/golden_duo.webp",
    badge: "Popular",
    rating: 4.8,
    href: "/products/golden-duo-sunflower-roses",
  },
  {
    id: "scarlet-vow",
    name: "Scarlet Vow 24 Dutch Roses",
    tagline: "24 Premium Scarlet Roses in Luxury Wrap",
    price: 3200,
    oldPrice: 3600,
    image: "/images/lahoreblooms/scarlet_vow.webp",
    badge: "Romance",
    rating: 4.9,
    href: "/products/scarlet-vow-red-roses",
  },
  {
    id: "velvet-rouge",
    name: "Velvet Rouge Grand Bouquet",
    tagline: "Deep Crimson Velvet Roses & Foliage",
    price: 2600,
    oldPrice: 2900,
    image: "/images/lahoreblooms/velvet_rouge.webp",
    badge: "Signature",
    rating: 4.9,
    href: "/products/velvet-rouge-roses",
  },
  {
    id: "pink-meadow",
    name: "Pink Meadow Lisianthus & Roses",
    tagline: "Soft Pink Roses with Lilies & Eucalyptus",
    price: 2900,
    oldPrice: 3300,
    image: "/images/lahoreblooms/pink_meadow.webp",
    badge: "Elegant",
    rating: 4.8,
    href: "/products/pink-meadow-roses",
  },
];

import { SanityCategory } from "@/sanity/lib/fetch";

interface CategorySectionProps {
  categories?: SanityCategory[];
}

export default function CategorySection({ categories }: CategorySectionProps) {
  const depts: DepartmentItem[] = (categories && categories.length > 0)
    ? categories.map((c) => ({
        id: c.id || c._id,
        name: c.title || c.name,
        type: ((c.department || c.type || "bouquets") as any),
        tagline: c.tagline || "",
        href: c.href || `/bouquets`,
        image: c.image || "/images/categories/all_bouquets.webp",
        badge: c.badge || "",
      }))
    : ALL_DEPARTMENTS;

  const [activeDeptTab, setActiveDeptTab] = useState<
    "all" | "bouquets" | "occasions" | "gifts" | "scents" | "decor" | "delivery"
  >("all");
  const [showAllDepts, setShowAllDepts] = useState(false);

  // Bouquet slider state & refs
  const bouquetSliderRef = useRef<HTMLDivElement>(null);
  const [isBouquetPaused, setIsBouquetPaused] = useState(false);
  const [activeBouquetIndex, setActiveBouquetIndex] = useState(0);
  const [canBouquetScrollLeft, setCanBouquetScrollLeft] = useState(false);

  const isDraggingBouquet = useRef(false);
  const startXBouquet = useRef(0);
  const scrollLeftBouquet = useRef(0);

  // Auto-slide bouquets
  useEffect(() => {
    if (isBouquetPaused) return;
    const interval = setInterval(() => {
      if (bouquetSliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = bouquetSliderRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          bouquetSliderRef.current.scrollTo({ left: 0, behavior: "smooth" });
          setActiveBouquetIndex(0);
        } else {
          bouquetSliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
          setActiveBouquetIndex((prev) => (prev + 1) % FEATURED_BOUQUETS.length);
        }
      }
    }, 4500);

    return () => clearInterval(interval);
  }, [isBouquetPaused]);

  const handleBouquetScroll = () => {
    if (bouquetSliderRef.current) {
      const scrollLeft = bouquetSliderRef.current.scrollLeft;
      setCanBouquetScrollLeft(scrollLeft > 10);
      const cardWidth = 185;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveBouquetIndex(Math.min(Math.max(0, index), FEATURED_BOUQUETS.length - 1));
    }
  };

  const scrollBouquets = (direction: "left" | "right") => {
    if (bouquetSliderRef.current) {
      const scrollAmount = direction === "left" ? -240 : 240;
      bouquetSliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const onBouquetMouseDown = (e: React.MouseEvent) => {
    if (!bouquetSliderRef.current) return;
    isDraggingBouquet.current = true;
    startXBouquet.current = e.pageX - bouquetSliderRef.current.offsetLeft;
    scrollLeftBouquet.current = bouquetSliderRef.current.scrollLeft;
  };

  const onBouquetMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingBouquet.current || !bouquetSliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - bouquetSliderRef.current.offsetLeft;
    const walk = (x - startXBouquet.current) * 1.5;
    bouquetSliderRef.current.scrollLeft = scrollLeftBouquet.current - walk;
  };

  const onBouquetMouseUpOrLeave = () => {
    isDraggingBouquet.current = false;
  };

  // Filtered department cards
  const filteredDepts = depts.filter((item) => {
    if (activeDeptTab === "all") return true;
    return item.type === activeDeptTab;
  });

  const displayedDepts = activeDeptTab === "all" && !showAllDepts
    ? filteredDepts.slice(0, 8)
    : filteredDepts;

  return (
    <section className="relative w-full py-10 sm:py-14 border-b border-[#E5DED2] bg-[#F8F3EA] text-[#101012] overflow-hidden">
      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 sm:space-y-16">
        
        {/* ========================================================================= */}
        {/* 1. (UPER / TOP) OUR MOST ORDERED BOUQUETS (Compact auto-sliding showcase) */}
        {/* ========================================================================= */}
        <div 
          className="space-y-3.5"
          onMouseEnter={() => setIsBouquetPaused(true)}
          onMouseLeave={() => {
            setIsBouquetPaused(false);
            onBouquetMouseUpOrLeave();
          }}
          onTouchStart={() => setIsBouquetPaused(true)}
          onTouchEnd={() => setIsBouquetPaused(false)}
        >
          {/* Header Row: Title, Subtitle, Navigation Chevrons & View All Button */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#E5DED2] pb-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-[1.5px] bg-[#8B1E2D]" />
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-[#8B1E2D]">
                  MOST POPULAR IN LAHORE
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-white border border-[rgba(198,161,91,0.30)] text-[9px] sm:text-[10px] text-[#2A2A2A] font-medium shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8B1E2D] animate-pulse" />
                  Auto-Sliding
                </span>
              </div>
              <h2 className="font-playfair text-xl sm:text-2xl font-bold text-[#101012] mt-0.5 tracking-tight">
                Our Most Ordered Bouquets
              </h2>
              <p className="text-xs text-[#2A2A2A] mt-0.5">
                Every bouquet is hand-tied in our Gulberg atelier. WhatsApp photo proof sent before dispatch.
              </p>
            </div>

            {/* Slider Controls (Minimum 32x32px accessible touch target) */}
            <div className="flex items-center gap-2.5 self-start sm:self-end">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => scrollBouquets("left")}
                  disabled={!canBouquetScrollLeft}
                  aria-label="Slide bouquets left"
                  className={`w-8 h-8 flex items-center justify-center rounded-full border transition-all ${
                    !canBouquetScrollLeft
                      ? "opacity-35 cursor-not-allowed bg-white/70 text-gray-400 border-[#E5DED2]"
                      : "bg-white hover:bg-[#8B1E2D] text-[#101012] hover:text-white border-[#E5DED2] hover:border-[#8B1E2D] shadow-xs active:scale-95 cursor-pointer"
                  }`}
                  title="Previous Bouquet"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollBouquets("right")}
                  aria-label="Slide bouquets right"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white hover:bg-[#8B1E2D] text-[#101012] hover:text-white border border-[#E5DED2] hover:border-[#8B1E2D] transition-all shadow-xs active:scale-95 cursor-pointer"
                  title="Next Bouquet"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <Link
                href="/bouquets"
                className="group inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white hover:text-[#0B0B0B] px-3.5 py-1.5 rounded-full bg-[#8B1E2D] hover:bg-[#C6A15B] transition-all shadow-xs"
              >
                <span>View All</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Compact Bouquets Sliding Track: 2 cards visible on mobile */}
          <div className="relative group/track">
            <div
              ref={bouquetSliderRef}
              onScroll={handleBouquetScroll}
              onMouseDown={onBouquetMouseDown}
              onMouseMove={onBouquetMouseMove}
              onMouseUp={onBouquetMouseUpOrLeave}
              className="flex gap-2.5 sm:gap-3.5 overflow-x-auto scroll-smooth pb-2 pt-1 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing select-none"
            >
              {FEATURED_BOUQUETS.map((bouquet) => (
                <Link
                  key={bouquet.id}
                  href={bouquet.href}
                  className="w-[145px] sm:w-[165px] md:w-[180px] shrink-0 snap-start group/card relative rounded-xl overflow-hidden bg-white border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-all duration-300 hover:shadow-[0_8px_18px_rgba(198,161,91,0.18)] hover:-translate-y-1 flex flex-col"
                >
                  {/* Bouquet Compact Image Frame */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F8F3EA]">
                    <Image
                      src={bouquet.image}
                      alt={bouquet.name}
                      fill
                      sizes="(max-width: 640px) 145px, 180px"
                      className="object-cover transition-transform duration-500 group-hover/card:scale-106 pointer-events-none"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-1.5 left-1.5 right-1.5 flex items-center justify-between pointer-events-none">
                      <span className="px-1.5 py-0.5 rounded bg-[#8B1E2D] text-white text-[8px] font-bold uppercase tracking-wider shadow-xs">
                        {bouquet.badge}
                      </span>
                      <div className="flex items-center gap-0.5 px-1 py-0.5 rounded bg-white/90 backdrop-blur-sm border border-[rgba(198,161,91,0.30)] text-[8px] text-[#0B0B0B] font-bold shadow-xs">
                        <Star className="w-2 h-2 fill-[#C6A15B] text-[#C6A15B]" />
                        <span>{bouquet.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bouquet Compact Info */}
                  <div className="p-2 sm:p-2.5 flex flex-col justify-between flex-1 gap-1 bg-white">
                    <div>
                      <h3 className="font-playfair text-[11px] sm:text-xs font-semibold text-[#101012] group-hover/card:text-[#8B1E2D] transition-colors line-clamp-1 leading-tight">
                        {bouquet.name}
                      </h3>
                      <p className="text-[10px] sm:text-xs text-[#2A2A2A] line-clamp-1 mt-0.5">
                        {bouquet.tagline}
                      </p>
                    </div>

                    <div className="pt-1.5 flex items-center justify-between border-t border-[#E5DED2] mt-0.5">
                      <div>
                        <span className="text-[11px] sm:text-xs font-bold text-[#8B1E2D]">
                          Rs. {bouquet.price.toLocaleString()}
                        </span>
                        {bouquet.oldPrice && (
                          <span className="text-[10px] text-[#636363] line-through ml-1">
                            Rs. {bouquet.oldPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      <span className="inline-flex items-center gap-0.5 text-[10px] sm:text-xs font-semibold text-[#8B1E2D] group-hover/card:text-[#0B0B0B] transition-colors">
                        <span>Order</span>
                        <ArrowRight className="w-2.5 h-2.5 group-hover/card:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Slider Position Indicator Dots (Accessible 28x28px touch target with slim visual indicator) */}
            <div className="flex items-center justify-center gap-0.5 pt-1.5">
              {FEATURED_BOUQUETS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    if (bouquetSliderRef.current) {
                      bouquetSliderRef.current.scrollTo({ left: idx * 180, behavior: "smooth" });
                      setActiveBouquetIndex(idx);
                    }
                  }}
                  aria-label={`Go to bouquet slide ${idx + 1}`}
                  className="h-7 w-7 flex items-center justify-center rounded-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8B1E2D]"
                >
                  <span
                    className={`h-1.5 rounded-full transition-all duration-300 pointer-events-none ${
                      activeBouquetIndex === idx
                        ? "w-5 bg-[#8B1E2D]"
                        : "w-1.5 bg-[#B8ABA0] hover:bg-[#8B1E2D]"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. (NICHE / BOTTOM) SHOP BY CATEGORY & OCCASIONS (Refined Compact Size)   */}
        {/* ========================================================================= */}
        <div className="space-y-5 pt-2 border-t border-[#E5DED2]">
          {/* Header Row: Title, Subtitle, Filter Tabs & View All Link */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 pb-3 border-b border-[#E5DED2]">
            <div className="space-y-0.5">
              <div className="flex items-center gap-2">
                <span className="w-4 h-[1.5px] bg-[#8B1E2D]" />
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-[#8B1E2D]">
                  BROWSE BY OCCASION & STYLE
                </span>
              </div>
              <h2 className="font-playfair text-xl sm:text-2xl lg:text-3xl font-bold text-[#101012] tracking-tight">
                Shop by Category
              </h2>
              <p className="text-xs text-[#2A2A2A]">
                Find the perfect flowers and gifts for every occasion.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 self-start md:self-end">
              {/* Category / Occasion Filter Tabs */}
              <div 
                className="flex items-center gap-1 p-0.5 sm:p-1 rounded-full bg-white border border-[#E5DED2] shadow-2xs overflow-x-auto max-w-full"
                role="tablist"
                aria-label="Filter categories and occasions"
              >
                {[
                  { id: "all", label: "All" },
                  { id: "bouquets", label: "Bouquets" },
                  { id: "occasions", label: "Occasions" },
                  { id: "gifts", label: "Cakes & Gifts" },
                  { id: "scents", label: "Perfumes" },
                  { id: "decor", label: "Wedding Décor" },
                  { id: "delivery", label: "Delivery Areas" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={activeDeptTab === tab.id}
                    onClick={() => {
                      setActiveDeptTab(tab.id as any);
                      setShowAllDepts(false);
                    }}
                    className={`px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                      activeDeptTab === tab.id
                        ? "bg-[#8B1E2D] text-white shadow-xs"
                        : "text-[#2A2A2A] hover:text-[#101012] hover:bg-[#F8F3EA]"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* View All Link matching screenshot */}
              <Link
                href="/bouquets"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#8B1E2D] hover:text-[#101012] transition-colors"
              >
                <span>View All</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#8B1E2D]" />
              </Link>
            </div>
          </div>

          {/* Cards Grid: Compact sized for both mobile (2 per row) and laptop (4 per row) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5 sm:gap-3.5 lg:gap-4">
            {displayedDepts.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="bg-white rounded-xl sm:rounded-2xl p-2 sm:p-2.5 lg:p-3 border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-all duration-300 shadow-2xs hover:shadow-md group flex flex-col justify-between"
              >
                {/* Inner Image Container with Soft Rounded Corners and Compact Aspect */}
                <div className="relative aspect-[16/11] sm:aspect-[4/3] w-full rounded-lg sm:rounded-xl overflow-hidden bg-[#F8F3EA]">
                  <Image
                    src={item.image}
                    alt={`${item.name} in Lahore | Lahore Bouquet`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {item.badge && (
                    <div className="absolute top-1.5 left-1.5 z-10 pointer-events-none">
                      <span className="px-1.5 py-0.5 rounded-full bg-[#8B1E2D] text-white text-[8px] sm:text-[9px] font-bold uppercase tracking-wider shadow-xs">
                        {item.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Bottom Row: Name on Left, Arrow on Right */}
                <div className="mt-2 sm:mt-2.5 flex items-center justify-between px-0.5">
                  <span className="font-playfair text-[11px] sm:text-xs lg:text-sm font-semibold text-[#101012] group-hover:text-[#8B1E2D] transition-colors truncate">
                    {item.name}
                  </span>
                  <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#101012] group-hover:text-[#8B1E2D] group-hover:translate-x-0.5 transition-all shrink-0 ml-1" />
                </div>
              </Link>
            ))}
          </div>

          {/* Show More toggle when on 'all' tab with more items */}
          {activeDeptTab === "all" && !showAllDepts && filteredDepts.length > 8 && (
            <div className="text-center pt-2">
              <button
                onClick={() => setShowAllDepts(true)}
                className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white hover:bg-[#8B1E2D] text-[#101012] hover:text-white border border-[#E5DED2] hover:border-[#8B1E2D] text-xs font-semibold transition-all shadow-xs active:scale-95 cursor-pointer"
              >
                <span>Explore All {filteredDepts.length} Categories & Occasions</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>

        {/* Editorial Trust Footer Note */}
        <div className="pt-3 border-t border-[#E5DED2] flex flex-wrap items-center justify-between text-xs text-[#2A2A2A] gap-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#8B1E2D]" />
            <span className="font-medium text-[#101012]">Handcrafted fresh daily with 100% genuine imported Dutch blooms</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-[#555555]">
            <span>● 2–5h Express Delivery in Lahore</span>
            <span>● Real-Time WhatsApp Photo Proof</span>
            <span>● Midnight Surprise Slots</span>
          </div>
        </div>

      </div>
    </section>
  );
}
