"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Star, ChevronLeft, ChevronRight } from "lucide-react";

export interface CategoryItem {
  id: string;
  name: string;
  tagline: string;
  href: string;
  image: string;
  count: string;
}

export const CATEGORIES_DATA: CategoryItem[] = [
  {
    id: "all-bouquets",
    name: "All Bouquets",
    tagline: "Luxurious Mixed Bouquet",
    href: "/bouquets",
    image: "/images/categories/all_bouquets.webp",
    count: "24+ Stems",
  },
  {
    id: "roses-collection",
    name: "Roses Collection",
    tagline: "Premium Red & White Roses",
    href: "/roses",
    image: "/images/categories/roses_collection.webp",
    count: "Dutch Long-Stem",
  },
  {
    id: "sunflowers",
    name: "Sunflowers & Lilies",
    tagline: "Fresh Sunflowers & Blooms",
    href: "/sunflowers",
    image: "/images/categories/sunflowers.webp",
    count: "Golden Blooms",
  },
  {
    id: "money-bouquets",
    name: "Money Bouquets",
    tagline: "Currency & Fresh Flowers",
    href: "/money-bouquets",
    image: "/images/categories/money_bouquets.webp",
    count: "Custom Cash",
  },
  {
    id: "wedding-car",
    name: "Wedding & Car Décor",
    tagline: "Bridal Canopy & Car Styling",
    href: "/wedding-decor",
    image: "/images/categories/wedding_car.webp",
    count: "On-Site Styling",
  },
  {
    id: "gifts-cakes",
    name: "Gifts & Cakes",
    tagline: "Gourmet Cake & Flowers",
    href: "/gifts-and-cakes",
    image: "/images/categories/gifts_cakes.webp",
    count: "Fudge & Roses",
  },
  {
    id: "birthday-surprises",
    name: "Birthday Surprises",
    tagline: "Bouquet, Cake & Midnight Slots",
    href: "/birthday-surprises",
    image: "/images/categories/birthday_surprises.webp",
    count: "Midnight Slots",
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

export default function CategorySection() {
  const bouquetSliderRef = useRef<HTMLDivElement>(null);
  const categorySliderRef = useRef<HTMLDivElement>(null);

  const [isBouquetPaused, setIsBouquetPaused] = useState(false);
  const [activeBouquetIndex, setActiveBouquetIndex] = useState(0);

  // Drag-to-scroll state for bouquets
  const isDraggingBouquet = useRef(false);
  const startXBouquet = useRef(0);
  const scrollLeftBouquet = useRef(0);

  // Drag-to-scroll state for categories
  const isDraggingCategory = useRef(false);
  const startXCategory = useRef(0);
  const scrollLeftCategory = useRef(0);

  // Auto-slide bouquets every 3.2 seconds
  useEffect(() => {
    if (isBouquetPaused) return;

    const interval = setInterval(() => {
      if (bouquetSliderRef.current) {
        const container = bouquetSliderRef.current;
        const maxScroll = container.scrollWidth - container.clientWidth;
        const step = 195; // scroll by one compact card width + gap

        if (container.scrollLeft >= maxScroll - 15) {
          container.scrollTo({ left: 0, behavior: "smooth" });
          setActiveBouquetIndex(0);
        } else {
          container.scrollBy({ left: step, behavior: "smooth" });
          setActiveBouquetIndex((prev) => (prev + 1) % FEATURED_BOUQUETS.length);
        }
      }
    }, 3200);

    return () => clearInterval(interval);
  }, [isBouquetPaused]);

  // Track scroll position to update active index
  const handleBouquetScroll = () => {
    if (bouquetSliderRef.current) {
      const container = bouquetSliderRef.current;
      const index = Math.round(container.scrollLeft / 195);
      setActiveBouquetIndex(Math.min(Math.max(0, index), FEATURED_BOUQUETS.length - 1));
    }
  };

  const scrollBouquets = (direction: "left" | "right") => {
    if (bouquetSliderRef.current) {
      const scrollAmount = direction === "left" ? -210 : 210;
      bouquetSliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const scrollCategories = (direction: "left" | "right") => {
    if (categorySliderRef.current) {
      const scrollAmount = direction === "left" ? -220 : 220;
      categorySliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Mouse drag handlers for bouquets
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

  // Mouse drag handlers for categories
  const onCategoryMouseDown = (e: React.MouseEvent) => {
    if (!categorySliderRef.current) return;
    isDraggingCategory.current = true;
    startXCategory.current = e.pageX - categorySliderRef.current.offsetLeft;
    scrollLeftCategory.current = categorySliderRef.current.scrollLeft;
  };

  const onCategoryMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingCategory.current || !categorySliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - categorySliderRef.current.offsetLeft;
    const walk = (x - startXCategory.current) * 1.5;
    categorySliderRef.current.scrollLeft = scrollLeftCategory.current - walk;
  };

  const onCategoryMouseUpOrLeave = () => {
    isDraggingCategory.current = false;
  };

  return (
    <section className="relative py-12 sm:py-16 border-b border-white/[0.08] bg-[#0E0E12] overflow-hidden">
      {/* Background Soft Lighting Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-b from-[#E11D48]/10 via-[#D4AF37]/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(225,29,72,0.12),transparent)] pointer-events-none" />

      <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 1. FEATURED BOUQUETS SLIDER: Compact ("short") size + Auto-Slide change */}
        <div 
          className="mb-12 space-y-3"
          onMouseEnter={() => setIsBouquetPaused(true)}
          onMouseLeave={() => {
            setIsBouquetPaused(false);
            onBouquetMouseUpOrLeave();
          }}
          onTouchStart={() => setIsBouquetPaused(true)}
          onTouchEnd={() => setIsBouquetPaused(false)}
        >
          {/* Header with Title, Slider Navigation and "View All" Option */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-white/[0.08] pb-3.5">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-[1.5px] bg-[#E11D48]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#E11D48]">
                  HANDCRAFTED BOUQUETS
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#E11D48]/15 border border-[#E11D48]/30 text-[10px] text-[#F43F5E] font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] animate-pulse" />
                  Auto-Sliding
                </span>
              </div>
              <h2 className="font-playfair text-xl sm:text-2xl font-normal text-white mt-1 tracking-tight">
                Our Most Ordered Bouquets
              </h2>
              <p className="text-xs text-white/60 mt-0.5">
                These are the bouquets Lahore orders most. Every price you see is what you pay. Delivery charges depend on your area and we tell you before you confirm.
              </p>
            </div>

            {/* Slider Controls + Direct View All Link */}
            <div className="flex items-center gap-2.5 self-start sm:self-end">
              {/* Prev / Next Chevrons */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => scrollBouquets("left")}
                  aria-label="Slide bouquets left"
                  className="p-1.5 sm:p-2 rounded-full bg-[#1A1A22] hover:bg-[#E11D48] text-white/80 hover:text-white border border-white/10 transition-all shadow-md active:scale-95 cursor-pointer"
                  title="Previous Bouquet"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollBouquets("right")}
                  aria-label="Slide bouquets right"
                  className="p-1.5 sm:p-2 rounded-full bg-[#1A1A22] hover:bg-[#E11D48] text-white/80 hover:text-white border border-white/10 transition-all shadow-md active:scale-95 cursor-pointer"
                  title="Next Bouquet"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* View All Bouquets Button */}
              <Link
                href="/bouquets"
                className="group inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white/90 hover:text-white px-3.5 py-1.5 rounded-full bg-[#E11D48]/15 border border-[#E11D48]/40 hover:bg-[#E11D48] transition-all shadow-md"
              >
                <span>View All Bouquets</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#E11D48] group-hover:text-white group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Compact Bouquets Sliding Track: sleek "short" card dimensions */}
          <div className="relative group/track">
            <div
              ref={bouquetSliderRef}
              onScroll={handleBouquetScroll}
              onMouseDown={onBouquetMouseDown}
              onMouseMove={onBouquetMouseMove}
              onMouseUp={onBouquetMouseUpOrLeave}
              className="flex gap-3 sm:gap-3.5 overflow-x-auto scroll-smooth pb-2 pt-1 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing select-none"
            >
              {FEATURED_BOUQUETS.map((bouquet) => (
                <Link
                  key={bouquet.id}
                  href={bouquet.href}
                  className="w-[150px] sm:w-[170px] md:w-[185px] shrink-0 snap-start group/card relative rounded-xl overflow-hidden bg-[#16161D] border border-white/10 hover:border-[#E11D48]/60 transition-all duration-300 hover:shadow-[0_8px_20px_rgba(225,29,72,0.2)] hover:-translate-y-1 flex flex-col"
                >
                  {/* Bouquet Compact "Short" Image Frame */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/40">
                    <Image
                      src={bouquet.image}
                      alt={bouquet.name}
                      fill
                      sizes="(max-width: 640px) 150px, (max-width: 1024px) 170px, 185px"
                      className="object-cover transition-transform duration-500 group-hover/card:scale-106 pointer-events-none"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#16161D] via-transparent to-transparent opacity-85" />

                    {/* Top Badges */}
                    <div className="absolute top-1.5 left-1.5 right-1.5 flex items-center justify-between pointer-events-none">
                      <span className="px-1.5 py-0.5 rounded-md bg-[#E11D48] text-white text-[8px] font-bold uppercase tracking-wider shadow">
                        {bouquet.badge}
                      </span>
                      <div className="flex items-center gap-0.5 px-1 py-0.5 rounded-md bg-black/70 backdrop-blur-sm border border-white/15 text-[8px] text-amber-400 font-bold">
                        <Star className="w-2 h-2 fill-amber-400" />
                        <span>{bouquet.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bouquet Compact Info */}
                  <div className="p-2 sm:p-2.5 flex flex-col justify-between flex-1 gap-1">
                    <div>
                      <h3 className="font-playfair text-xs font-semibold text-white group-hover/card:text-[#F43F5E] transition-colors line-clamp-1 leading-tight">
                        {bouquet.name}
                      </h3>
                      <p className="text-[9px] text-white/50 line-clamp-1 mt-0.5 font-light">
                        {bouquet.tagline}
                      </p>
                    </div>

                    <div className="pt-1 flex items-center justify-between border-t border-white/5 mt-0.5">
                      <div>
                        <span className="text-xs font-bold text-[#E11D48]">
                          Rs. {bouquet.price.toLocaleString()}
                        </span>
                        {bouquet.oldPrice && (
                          <span className="text-[8px] text-white/40 line-through ml-1">
                            Rs. {bouquet.oldPrice.toLocaleString()}
                          </span>
                        )}
                      </div>

                      <span className="inline-flex items-center gap-0.5 text-[9px] font-semibold text-white/70 group-hover/card:text-[#E11D48] transition-colors">
                        <span>Order</span>
                        <ArrowRight className="w-2 h-2 group-hover/card:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Slider Position Indicator Dots */}
            <div className="flex items-center justify-center gap-1.5 pt-2">
              {FEATURED_BOUQUETS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (bouquetSliderRef.current) {
                      bouquetSliderRef.current.scrollTo({ left: idx * 185, behavior: "smooth" });
                      setActiveBouquetIndex(idx);
                    }
                  }}
                  aria-label={`Go to bouquet slide ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeBouquetIndex === idx
                      ? "w-6 bg-[#E11D48]"
                      : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Full-width View All Banner Link */}
          <Link
            href="/bouquets"
            className="w-full py-2 px-4 rounded-xl bg-gradient-to-r from-[#1E1E28] via-[#261A22] to-[#1E1E28] hover:border-[#E11D48]/80 border border-white/10 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm group"
          >
            <span>View All 24+ Handcrafted Bouquets Collection in Lahore</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E11D48] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 2. CIRCULAR CATEGORIES SLIDER: Slide-to-view navigation ("slide krke wo dekh sake") */}
        <div className="space-y-4 pt-1">
          {/* Header with Title and Slider Navigation */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-white/[0.08] pb-3.5">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-[1.5px] bg-[#E11D48]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#E11D48]">
                  EXPLORE BY CATEGORY
                </span>
                <span className="text-[10px] text-white/50 hidden sm:inline">
                  (Slide left / right to view all 7 departments)
                </span>
              </div>
              <h2 className="font-playfair text-xl sm:text-2xl font-normal text-white mt-1 tracking-tight">
                Shop Flowers by Type
              </h2>
              <p className="text-xs text-white/60 mt-0.5 max-w-xl">
                Not sure what to send? Start with roses for romance, sunflowers for cheerful birthdays, or a money bouquet for weddings and Eid. Not sure at all? Message us your budget and the occasion. We will suggest something.
              </p>
            </div>

            <div className="flex items-center gap-2.5 self-start sm:self-end">
              {/* Prev / Next Chevrons for Categories */}
              <div className="flex items-center gap-1.5 mr-1">
                <button
                  onClick={() => scrollCategories("left")}
                  aria-label="Slide categories left"
                  className="p-1.5 sm:p-2 rounded-full bg-[#1A1A22] hover:bg-[#E11D48] text-white/80 hover:text-white border border-white/10 transition-all shadow-md active:scale-95 cursor-pointer"
                  title="Previous Category"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollCategories("right")}
                  aria-label="Slide categories right"
                  className="p-1.5 sm:p-2 rounded-full bg-[#1A1A22] hover:bg-[#E11D48] text-white/80 hover:text-white border border-white/10 transition-all shadow-md active:scale-95 cursor-pointer"
                  title="Next Category"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <Link
                href="/collections/bouquets"
                className="group inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-white/70 hover:text-white transition-colors pb-0.5"
              >
                <span>Browse All</span>
                <span className="text-[#E11D48] text-sm group-hover:translate-x-1.5 transition-transform duration-300 font-bold">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* 7 Circular Categories Slider Track with floating side buttons + drag scrolling */}
          <div className="relative group/catTrack">
            {/* Floating Left Button on Track */}
            <button
              onClick={() => scrollCategories("left")}
              aria-label="Slide categories left"
              className="hidden sm:flex absolute -left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/80 hover:bg-[#E11D48] text-white border border-white/20 shadow-xl items-center justify-center transition-all opacity-80 hover:opacity-100 active:scale-95 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Floating Right Button on Track */}
            <button
              onClick={() => scrollCategories("right")}
              aria-label="Slide categories right"
              className="hidden sm:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/80 hover:bg-[#E11D48] text-white border border-white/20 shadow-xl items-center justify-center transition-all opacity-80 hover:opacity-100 active:scale-95 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Sliding Track for Circles */}
            <div
              ref={categorySliderRef}
              onMouseDown={onCategoryMouseDown}
              onMouseMove={onCategoryMouseMove}
              onMouseUp={onCategoryMouseUpOrLeave}
              onMouseLeave={onCategoryMouseUpOrLeave}
              className="flex gap-4 sm:gap-6 overflow-x-auto scroll-smooth pb-3 pt-1 px-1 snap-x snap-mandatory no-scrollbar cursor-grab active:cursor-grabbing select-none"
            >
              {CATEGORIES_DATA.map((cat) => (
                <Link
                  key={cat.id}
                  href={cat.href}
                  className="w-[115px] sm:w-[135px] md:w-[150px] shrink-0 snap-start group flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1.5 focus:outline-none"
                >
                  {/* Circular Card Outer with Thin Metallic-Gold/Red Border and Subtle Glow */}
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 p-[2px] rounded-full bg-gradient-to-tr from-[#D4AF37]/50 via-[#E11D48]/75 to-[#D4AF37]/45 group-hover:from-[#E11D48] group-hover:via-[#F43F5E] group-hover:to-[#D4AF37] shadow-[0_6px_20px_-4px_rgba(0,0,0,0.85),0_0_12px_rgba(225,29,72,0.15)] group-hover:shadow-[0_10px_30px_-4px_rgba(225,29,72,0.4),0_0_20px_rgba(212,175,55,0.3)] transition-all duration-500 ease-out">
                    {/* Inner Image Container */}
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-[#141419]">
                      <Image
                        src={cat.image}
                        alt={`${cat.name} - Lahore Bouquet`}
                        fill
                        sizes="(max-width: 640px) 100px, (max-width: 1024px) 120px, 140px"
                        className="object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-110 pointer-events-none"
                      />

                      {/* Dark Radial Vignette for Depth */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                      {/* Subtle Metallic Ring Highlight */}
                      <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none" />

                      {/* Subtle LB Brand Watermark in Bottom Area */}
                      <div className="absolute bottom-1.5 inset-x-0 flex justify-center pointer-events-none">
                        <div className="px-1.5 py-0.5 rounded-full bg-black/50 backdrop-blur-[2px] border border-white/15 flex items-center gap-1 shadow-md opacity-90 group-hover:opacity-100 transition-opacity">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] shadow-[0_0_6px_rgba(225,29,72,0.8)]" />
                          <span className="text-[7px] font-serif tracking-[0.16em] text-white/90 uppercase font-semibold">
                            LB LAHORE
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Category Typography */}
                  <div className="mt-2.5 space-y-0.5 w-full px-1">
                    <h3 className="font-playfair text-xs sm:text-sm font-semibold text-white group-hover:text-[#F43F5E] transition-colors duration-300 tracking-wide line-clamp-1">
                      {cat.name}
                    </h3>
                    <p className="text-[10px] text-white/50 group-hover:text-white/75 transition-colors font-light line-clamp-1">
                      {cat.tagline}
                    </p>
                    <div className="pt-0.5 flex items-center justify-center gap-1 text-[9px] text-[#E11D48] opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                      <span>Explore</span>
                      <ArrowRight className="w-2.5 h-2.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Mobile slide swipe helper hint */}
            <div className="flex sm:hidden items-center justify-center gap-1.5 text-[10px] text-white/40 pt-1">
              <span>← Swipe left & right to view all 7 categories →</span>
            </div>
          </div>
        </div>

        {/* Bottom Editorial Trust Footer Note */}
        <div className="mt-10 pt-5 border-t border-white/[0.06] flex flex-wrap items-center justify-between text-xs text-white/50 gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#E11D48]" />
            <span>Handcrafted fresh daily with 100% genuine imported Dutch blooms</span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-white/40">
            <span>● 2–5h Express Delivery in Lahore</span>
            <span>● Real-Time WhatsApp Photo Proof</span>
            <span>● Midnight Surprise Slots</span>
          </div>
        </div>

      </div>
    </section>
  );
}
