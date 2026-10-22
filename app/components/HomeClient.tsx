"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ALL_PRODUCTS 
} from "../data/products";
import { HOMEPAGE_FAQS } from "../data/homepage";
import ProductCard from "./ProductCard";
import { 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  MessageCircle, 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  ChevronDown,
  Banknote,
  Truck
} from "lucide-react";
import dynamic from "next/dynamic";

const CategorySection = dynamic(() => import("./CategorySection"), {
  loading: () => (
    <div className="w-full py-20 flex items-center justify-center bg-[#F8F3EA]">
      <div className="w-8 h-8 rounded-full border-2 border-[#8B1E2D] border-t-transparent animate-spin" />
    </div>
  ),
  ssr: true,
});

import { SanityCategory } from "@/sanity/lib/fetch";
import { Product } from "../data/products";
import ReviewsSection from "./ReviewsSection";
import type { SanityReview } from "@/sanity/lib/fetch";

export default function HomeClient({
  initialProducts,
  initialCategories,
  initialReviews,
}: {
  initialProducts?: Product[];
  initialCategories?: SanityCategory[];
  initialReviews?: SanityReview[];
}) {
  const products = (initialProducts && initialProducts.length > 0) ? initialProducts : ALL_PRODUCTS;

  // Background full-catalog load: server only sends the first 16 products to keep
  // initial HTML small; the rest loads silently from /api/products after mount.
  const [allProducts, setAllProducts] = useState<Product[]>(products);
  useEffect(() => {
    if (products.length > 16) return; // already full
    let cancelled = false;
    fetch("/api/products", { credentials: "same-origin" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (!cancelled && Array.isArray(data) && data.length > allProducts.length) {
          setAllProducts(data);
        }
      })
      .catch(() => {});
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const activeProducts = allProducts.length > products.length ? allProducts : products;

  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState<number>(8);

  const filterOptions = ["All", "Roses", "Sunflowers", "Bouquets", "Wedding Décor", "Gifts & Cakes"];

  // Showcase slugs (must match CategorySection SHOWCASE_SLUGS) — excluded from Complete Collection
  const SHOWCASE_SLUGS = [
    "scarlet-romance-12-red-roses-lahore",
    "pink-charm-18-roses-lahore",
    "layers-lotus-biscoff-cake-lahore",
    "layers-lotus-three-milk-cake-lahore",
    "layers-chocolate-heaven-cake-lahore",
    "white-jasmine-gajray-pair-lahore",
    "velvet-heart-100-red-roses-lahore",
    "golden-sunshine-25-yellow-roses-lahore",
  ];

  const displayedProducts = useMemo(() => {
    // Exclude showcase products so the carousel and grid never repeat the same items
    const showcaseSlugs = new Set(SHOWCASE_SLUGS);
    const pool = activeProducts.filter(p => !showcaseSlugs.has(p.slug || String(p.id)));
    if (activeFilter === "All") {
      // Balanced curation across all florist & gift departments
      const roses = pool.filter(p => p.category === "Roses" || p.category === "Velvet Red Roses" || p.category === "Pure White Roses");
      const bouquets = pool.filter(p => p.category === "Bouquets");
      const sunflowers = pool.filter(p => p.category === "Sunflowers");
      const cakesAndGifts = pool.filter(p => p.category === "Gifts & Cakes" || p.category === "Chocolate Bouquets");
      const specialty = pool.filter(p => p.category === "Money Bouquets" || p.category === "Crochet" || p.category === "Dried" || p.category === "Wedding Décor");

      const result: Product[] = [];
      const addedIds = new Set<string | number>();
      const maxLen = Math.max(roses.length, bouquets.length, sunflowers.length, cakesAndGifts.length, specialty.length);

      for (let i = 0; i < maxLen; i++) {
        // 1. Signature or Classic Rose Bouquet
        if (roses[i] && !addedIds.has(roses[i].id)) {
          result.push(roses[i]);
          addedIds.add(roses[i].id);
        }
        // 2. Fresh Hand-Tied Seasonal Bouquet
        if (bouquets[i] && !addedIds.has(bouquets[i].id)) {
          result.push(bouquets[i]);
          addedIds.add(bouquets[i].id);
        }
        // 3. Cheerful Sunflower or Specialty Keepsake Bouquet
        const spec = sunflowers[i] || specialty[i];
        if (spec && !addedIds.has(spec.id)) {
          result.push(spec);
          addedIds.add(spec.id);
        }
        // 4. Trending Bakery Cake or Chocolate Gift Combo
        if (cakesAndGifts[i] && !addedIds.has(cakesAndGifts[i].id)) {
          result.push(cakesAndGifts[i]);
          addedIds.add(cakesAndGifts[i].id);
        }
        // Additional secondary varieties to maintain dense diversity
        if (sunflowers[i] && !addedIds.has(sunflowers[i].id)) {
          result.push(sunflowers[i]);
          addedIds.add(sunflowers[i].id);
        }
        if (specialty[i] && !addedIds.has(specialty[i].id)) {
          result.push(specialty[i]);
          addedIds.add(specialty[i].id);
        }
      }

      for (const p of products) {
        if (!addedIds.has(p.id)) {
          result.push(p);
          addedIds.add(p.id);
        }
      }
      return result;
    }
    return activeProducts.filter(p => p.category === activeFilter);
  }, [activeFilter, activeProducts]);

  return (
    <>
      {/* 1. HERO SECTION (Preserving 100% Real Size & Natural Uncropped Proportions) */}
      <section className="relative min-h-[480px] sm:min-h-[520px] lg:min-h-[580px] xl:min-h-[640px] flex items-center overflow-hidden border-b border-[#C6A15B]/30 bg-[#F6F1E7] py-10 sm:py-14 lg:py-16">
        {/* Full-Width Background Image Layer - Responsive & LCP Optimized */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/hero-blush-elegance-banner.webp"
            srcSet="/images/hero-blush-elegance-banner-mobile.webp 800w, /images/hero-blush-elegance-banner.webp 1600w"
            sizes="100vw"
            alt="Elegant blush pink rose and lily bouquet in a gold vase for flower delivery in Lahore | Lahore Bouquet"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover object-[70%_center] sm:object-center"
          />

          {/* Soft cream left fade to ensure pristine text readability */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-2/5 bg-gradient-to-r from-[#F6F1E7] via-[#F6F1E7]/70 to-transparent pointer-events-none" />
          <div className="block lg:hidden absolute inset-0 bg-gradient-to-t from-[#F6F1E7] via-[#F6F1E7]/80 to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
          {/* Natural clean text layout without any card or box border */}
          <div className="max-w-xl lg:max-w-2xl space-y-4 sm:space-y-6 text-center lg:text-left">
            {/* Eyebrow: burgundy on cream */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/70 backdrop-blur-xs border border-[#C6A15B]/60 text-[#8B1E2D] text-[10px] sm:text-xs font-semibold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C6A15B]" />
              Hand-Tied in Lahore • Same-Day Express Delivery
            </div>

            {/* Main Heading: dark with burgundy accent */}
            <h1 className="font-playfair text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-[#0B0B0B] leading-tight">
              Lahore Bouquet — Fresh Flowers Delivered in Lahore, <span className="text-[#8B1E2D]">Same Day &amp; Free</span>
            </h1>

            {/* Tagline / hero supporting line */}
            <p className="hero-answer text-[#2A2A2A] text-xs sm:text-sm lg:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Fresh, hand-tied bouquets delivered FREE across Lahore in 2–5 hours — with a photo on WhatsApp before dispatch.
            </p>

            {/* Button System (Section 18):
                Primary CTA: bg #8B1E2D, text #FFFFFF, hover bg #C6A15B, text #0B0B0B
                Secondary CTA: transparent, border #C6A15B, text #FFFFFF, hover bg #C6A15B, text #0B0B0B */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 pt-1 sm:pt-2">
              <Link
                href="/bouquets"
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#8B1E2D] hover:bg-[#C6A15B] text-white hover:text-[#0B0B0B] font-semibold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl transition-all duration-200 active:scale-95"
              >
                <span>See All Bouquets</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20in%20Lahore."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-[#0E7C5B] hover:bg-[#0B6E4F] text-white border border-[#0E7C5B] font-semibold text-xs uppercase tracking-wider flex items-center gap-2 transition-all duration-200 active:scale-95 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Trust Micro-Badges (Accessible 12px text) */}
            <div className="pt-1 sm:pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-4 text-xs text-[#2A2A2A]">
              <span className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#8B1E2D]" />
                <span>Same-Day Delivery in Lahore</span>
              </span>
              <span className="hidden sm:inline text-[#0B0B0B]/30">•</span>
              <span>100% Fresh Stems Guarantee</span>
              <span className="hidden sm:inline text-[#0B0B0B]/30">•</span>
              <span>Midnight Surprise Slot</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BAR (Harmonized Warm Ivory #F8F3EA background with pure White #FFFFFF cards) */}
      <section className="w-full border-b border-[#E5DED2] bg-[#F8F3EA] py-6 px-4 sm:px-6 text-xs text-[#101012]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-all shadow-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#F8F3EA] border border-[rgba(198,161,91,0.25)] flex items-center justify-center text-[#8B1E2D] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-[#101012] text-xs sm:text-sm">Delivery in 2 to 5 hours</p>
              <p className="text-xs text-[#2A2A2A]">Free delivery across Lahore</p>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-all shadow-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#F8F3EA] border border-[rgba(198,161,91,0.25)] flex items-center justify-center text-[#8B1E2D] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-[#101012] text-xs sm:text-sm">Photo on WhatsApp</p>
              <p className="text-xs text-[#2A2A2A]">Sent before your bouquet leaves</p>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-all shadow-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#F8F3EA] border border-[rgba(198,161,91,0.25)] flex items-center justify-center text-[#8B1E2D] shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-[#101012] text-xs sm:text-sm">Late-night surprise slots</p>
              <p className="text-xs text-[#2A2A2A]">11:30 PM to 12:15 AM delivery</p>
            </div>
          </div>

          <div className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-all shadow-xs flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#F8F3EA] border border-[rgba(198,161,91,0.25)] flex items-center justify-center text-[#8B1E2D] shrink-0">
              <Banknote className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-[#101012] text-xs sm:text-sm">Flexible Payment Options</p>
              <p className="text-xs text-[#2A2A2A]">COD, Bank transfer, JazzCash, EasyPaisa</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2B. SHOP BY PRICE (Price shortcuts) */}
      <section className="w-full border-b border-[#E5DED2] bg-white py-10 px-4 sm:px-6 text-[#101012]">
        <div className="max-w-7xl mx-auto space-y-5">
          <div className="text-center space-y-1">
            <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">
              Shop by Price
            </span>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012]">
              Bouquets for Every Budget
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
            <Link
              href="/bouquets?max=2000"
              className="p-5 rounded-2xl bg-[#F8F3EA] border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-all shadow-xs flex items-center gap-4 group"
            >
              <div className="w-11 h-11 rounded-xl bg-white border border-[rgba(198,161,91,0.25)] flex items-center justify-center text-[#8B1E2D] shrink-0">
                <Banknote className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm sm:text-base text-[#101012]">Under Rs. 2,000</p>
                <p className="text-xs text-[#2A2A2A]">Hand-tied bouquets from Rs. 1,239</p>
              </div>
              <ArrowRight className="w-4 h-4 text-[#8B1E2D] group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/bouquets?max=3500"
              className="p-5 rounded-2xl bg-[#F8F3EA] border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-all shadow-xs flex items-center gap-4 group"
            >
              <div className="w-11 h-11 rounded-xl bg-white border border-[rgba(198,161,91,0.25)] flex items-center justify-center text-[#8B1E2D] shrink-0">
                <Banknote className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm sm:text-base text-[#101012]">Under Rs. 3,500</p>
                <p className="text-xs text-[#2A2A2A]">Rose &amp; mixed bouquets for every occasion</p>
              </div>
              <ArrowRight className="w-4 h-4 text-[#8B1E2D] group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/bouquets?min=5000"
              className="p-5 rounded-2xl bg-[#F8F3EA] border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-all shadow-xs flex items-center gap-4 group"
            >
              <div className="w-11 h-11 rounded-xl bg-white border border-[rgba(198,161,91,0.25)] flex items-center justify-center text-[#8B1E2D] shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <p className="font-bold text-sm sm:text-base text-[#101012]">Premium</p>
                <p className="text-xs text-[#2A2A2A]">Signature roses &amp; grand designs, Rs. 5,000+</p>
              </div>
              <ArrowRight className="w-4 h-4 text-[#8B1E2D] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. CATEGORY & FEATURED BOUQUETS SLIDER (Section 6: Warm Ivory #F8F3EA) */}
      <CategorySection categories={initialCategories} products={products} />

      {/* 5. FULL BOUQUET CATALOG (Background #F8F3EA, Heading #101012, #FFFFFF cards) */}
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2] bg-[#F8F3EA] text-[#101012]">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col gap-4">
            <div className="space-y-1">
              <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">
                The Complete Collection
              </span>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012]">
                Handcrafted Flowers in Lahore
              </h2>
              <p className="text-xs sm:text-sm text-[#2A2A2A]">
                Choose from fresh Dutch roses, cheerful sunflowers, money bouquets, and celebration combos.
              </p>
            </div>

            {/* Connected Filter Pills with Enhanced Touch Target (Issue 30) */}
            <div className="flex items-center gap-2 flex-wrap pt-1" role="tablist" aria-label="Filter flowers by category">
              {filterOptions.map((filter) => (
                <button
                  key={filter}
                  role="tab"
                  aria-selected={activeFilter === filter}
                  onClick={() => {
                    setActiveFilter(filter);
                    setVisibleCount(8);
                  }}
                  className={`px-4.5 py-2.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    activeFilter === filter
                      ? "bg-[#8B1E2D] text-white shadow-xs"
                      : "bg-white text-[#2A2A2A] hover:text-[#101012] border border-[#E5DED2] hover:border-[#C6A15B]"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Product Cards Grid: Paginated to 8 initial items to prevent cognitive fatigue (Issue 14) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {displayedProducts.slice(0, visibleCount).map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>

          {/* Load More Button for Large Product Grid */}
          {visibleCount < displayedProducts.length && (
            <div className="text-center pt-4">
              <button
                onClick={() => setVisibleCount((prev) => prev + 8)}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white hover:bg-[#8B1E2D] text-[#101012] hover:text-white border border-[#E5DED2] hover:border-[#8B1E2D] font-semibold text-xs tracking-wide transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                <span>Explore More Bouquets ({displayedProducts.length - visibleCount} remaining)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 5B. SHOP BY OCCASION (Warm Ivory #F8F3EA background, White #FFFFFF cards) */}
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2] bg-[#F8F3EA] text-[#101012]">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">
              Every Occasion Covered
            </span>
            <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-[#101012]">
              Flowers for Every Moment
            </h2>
            <p className="text-xs text-[#2A2A2A]">
              Birthdays, anniversaries, weddings, or just because — pick the occasion and we&apos;ll handle the rest.{" "}
              <Link href="/best-bouquet-in-lahore" className="text-[#8B1E2D] font-semibold underline hover:no-underline">
                See our guide to the best bouquet in Lahore
              </Link>
              .
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 text-xs">
            <a href="/bouquets" className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-all space-y-2 shadow-xs group">
              <div className="text-[#8B1E2D] font-bold text-sm group-hover:text-[#C6A15B] transition-colors">Birthday Flowers</div>
              <p className="text-[#2A2A2A] leading-relaxed">Bright, cheerful bouquets that make birthdays unforgettable.</p>
            </a>
            <a href="/roses" className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-all space-y-2 shadow-xs group">
              <div className="text-[#8B1E2D] font-bold text-sm group-hover:text-[#C6A15B] transition-colors">Anniversary Roses</div>
              <p className="text-[#2A2A2A] leading-relaxed">Classic red roses and elegant arrangements for your special day.</p>
            </a>
            <a href="/wedding-car-decoration-lahore" className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-all space-y-2 shadow-xs group">
              <div className="text-[#8B1E2D] font-bold text-sm group-hover:text-[#C6A15B] transition-colors">Wedding &amp; Nikkah</div>
              <p className="text-[#2A2A2A] leading-relaxed">Bridal bouquets, car decor, and full wedding flower styling.</p>
            </a>
            <a href="/bouquets" className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-all space-y-2 shadow-xs group">
              <div className="text-[#8B1E2D] font-bold text-sm group-hover:text-[#C6A15B] transition-colors">Get Well Soon</div>
              <p className="text-[#2A2A2A] leading-relaxed">Cheerful blooms to brighten someone&apos;s recovery.</p>
            </a>
            <a href="/midnight-flower-delivery-lahore" className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-all space-y-2 shadow-xs group">
              <div className="text-[#8B1E2D] font-bold text-sm group-hover:text-[#C6A15B] transition-colors">Midnight Surprise</div>
              <p className="text-[#2A2A2A] leading-relaxed">11:30 PM to 12:15 AM delivery slot for unforgettable surprises.</p>
            </a>
            <a href="/send-flowers-to-lahore-from-abroad" className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-all space-y-2 shadow-xs group">
              <div className="text-[#8B1E2D] font-bold text-sm group-hover:text-[#C6A15B] transition-colors">Send from Abroad</div>
              <p className="text-[#2A2A2A] leading-relaxed">Ordering from the UK, USA, or Dubai? We deliver to your loved ones in Lahore.</p>
            </a>
          </div>
        </div>
      </section>

      {/* 6. HOW ORDERING WORKS (Clean Warm Ivory #F8F3EA background with pure White #FFFFFF cards) */}
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2] bg-[#F8F3EA] text-[#101012]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">
              Simple 3-Step Process
            </span>
            <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-[#0B0B0B]">
              How Ordering Works
            </h2>
            <p className="text-xs text-[#2A2A2A]">
              Transparent, professional, and personal from selection to your recipient&apos;s hands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-all space-y-3.5 text-center shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#8B1E2D] text-white font-bold text-lg flex items-center justify-center mx-auto shadow-sm">
                1
              </div>
              <h3 className="font-playfair text-lg font-bold text-[#0B0B0B]">Pick your flowers.</h3>
              <p className="text-xs text-[#2A2A2A] leading-relaxed">
                Choose a bouquet or tell us your budget on WhatsApp. Add a complimentary handwritten wax-sealed card.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-all space-y-3.5 text-center shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#8B1E2D] text-white font-bold text-lg flex items-center justify-center mx-auto shadow-sm">
                2
              </div>
              <h3 className="font-playfair text-lg font-bold text-[#0B0B0B]">We send a photo & video.</h3>
              <p className="text-xs text-[#2A2A2A] leading-relaxed">
                Our florist makes the bouquet and shares a live photo and video with you on WhatsApp. You approve it before the rider leaves — nothing is dispatched until you say it looks perfect.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-all space-y-3.5 text-center shadow-xs">
              <div className="w-12 h-12 rounded-2xl bg-[#8B1E2D] text-white font-bold text-lg flex items-center justify-center mx-auto shadow-sm">
                3
              </div>
              <h3 className="font-playfair text-lg font-bold text-[#0B0B0B]">We deliver.</h3>
              <p className="text-xs text-[#2A2A2A] leading-relaxed">
                Bouquets travel in careful, climate-protected delivery so stems remain crisp in Lahore&apos;s weather. Arrives in 2 to 5 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. WHY CHOOSE US (#F8F3EA background with pure White #FFFFFF cards) */}
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2] bg-[#F8F3EA] text-[#101012]">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">
              The Lahore Bouquet Standard
            </span>
            <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-[#101012]">
              Why People Order From Lahore Bouquet
            </h2>
            <p className="text-xs text-[#2A2A2A]">
              Fresh flowers, honest prices, and real customer care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
            <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-all space-y-2.5 shadow-xs">
              <div className="flex items-center gap-2 text-[#8B1E2D] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-[#C6A15B]" />
                <span>Real stems, real photos.</span>
              </div>
              <p className="text-[#2A2A2A] leading-relaxed">
                What you approve on WhatsApp is what arrives. No surprises, no substitutions without your consent.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-all space-y-2.5 shadow-xs">
              <div className="flex items-center gap-2 text-[#8B1E2D] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-[#C6A15B]" />
                <span>Imported Dutch roses.</span>
              </div>
              <p className="text-[#2A2A2A] leading-relaxed">
                Longer stems and bigger heads than local roses. We tell you clearly when a bouquet uses local flowers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-all space-y-2.5 shadow-xs">
              <div className="flex items-center gap-2 text-[#8B1E2D] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-[#C6A15B]" />
                <span>Late-night delivery.</span>
              </div>
              <p className="text-[#2A2A2A] leading-relaxed">
                Anniversary or birthday at midnight? Book our dedicated 11:30 PM to 12:15 AM surprise slot.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-all space-y-2.5 shadow-xs">
              <div className="flex items-center gap-2 text-[#8B1E2D] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-[#C6A15B]" />
                <span>Eco-friendly wrap.</span>
              </div>
              <p className="text-[#2A2A2A] leading-relaxed">
                We wrap fresh bouquets in premium paper and fabric instead of single-use plastic wherever possible.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-all space-y-2.5 md:col-span-2 lg:col-span-2 shadow-xs">
              <div className="flex items-center gap-2 text-[#8B1E2D] font-bold text-sm">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-[#C6A15B]" />
                <span>Weddings and event styling.</span>
              </div>
              <p className="text-[#2A2A2A] leading-relaxed">
                We style bridal rooms, bridal car décor, and handcrafted fresh motia gajray so you can organize everything from one trusted florist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CUSTOMER REVIEWS (only renders when Sanity reviews exist) */}
      <ReviewsSection reviews={initialReviews ?? []} />

      {/* 9. BRAND STORY / ABOUT TEASER (#F8F3EA background, #101012 heading, #2A2A2A body, #C6A15B line, #8B1E2D words) */}
      <section className="w-full py-16 px-4 sm:px-6 bg-[#F8F3EA] border-b border-[#E5DED2] text-[#101012]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <div className="w-10 h-[2px] bg-[#C6A15B]" />
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012]">
              Handcrafted with Heart in Lahore, Delivered across the City
            </h2>
            <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
              We started Lahore Bouquet with one simple goal: <span className="text-[#8B1E2D] font-semibold">sending flowers should be easy and reliable</span>. Every bouquet is hand-tied by our team in Lahore.
            </p>
            <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
              Whether you are sending <span className="text-[#8B1E2D] font-semibold">50 imported red roses to DHA</span>, arranging fresh motia gajray for a wedding in Model Town, or preparing a midnight birthday surprise in Johar Town, our florists personally craft and photograph your order before dispatch.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#8B1E2D] hover:text-[#101012] transition-colors"
              >
                <span>Read our full brand story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 relative aspect-square rounded-2xl overflow-hidden border border-[rgba(198,161,91,0.30)] shadow-md">
            <Image
              src="/images/categories/all_bouquets.webp"
              alt="Florist crafting bouquet in Lahore Bouquet studio"
              fill
              loading="lazy"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* 10. DELIVERY COVERAGE AREAS (Harmonized Warm Ivory #F8F3EA background, pure White #FFFFFF pills) */}
      <section className="w-full py-14 px-4 sm:px-6 border-b border-[#E5DED2] bg-[#F8F3EA] text-[#101012]">
        <div className="max-w-5xl mx-auto space-y-6 text-center">
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">
              Coverage Areas
            </span>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012]">
              We Deliver Across Lahore
            </h2>
            <p className="text-xs text-[#2A2A2A] max-w-2xl mx-auto leading-relaxed">
              DHA Phases 1 to 9, Gulberg I to III, Bahria Town, Model Town, Johar Town, Cantt, Askari 1 to 11, Wapda Town, Township and Faisal Town. Outside these areas? Message us on WhatsApp and we will confirm express dispatch immediately.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {[
              "DHA Phases 1 to 9",
              "Gulberg I to III",
              "Bahria Town",
              "Model Town",
              "Johar Town",
              "Cantt",
              "Askari 1 to 11",
              "Wapda Town",
              "Township",
              "Faisal Town"
            ].map((area) => (
              <span
                key={area}
                className="px-3.5 py-1.5 rounded-full bg-white border border-[rgba(198,161,91,0.25)] text-[#101012] text-xs font-medium hover:border-[#C6A15B] transition-colors shadow-2xs"
              >
                {area}
              </span>
            ))}
          </div>

          <div className="pt-2 space-y-2">
            <a
              href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20Can%20you%20deliver%20to%20my%20area%20in%20Lahore?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#8B1E2D] hover:text-[#101012] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Ask about delivery to your area on WhatsApp →</span>
            </a>
            <div>
              <a
                href="/flower-delivery-islamabad"
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#8B1E2D] hover:text-[#101012] transition-colors underline"
              >
                <span>Now delivering in Islamabad →</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 11. COMMON QUESTIONS (FAQ: #F8F3EA background, #FFFFFF accordion cards) */}
      <section className="w-full py-16 px-4 sm:px-6 bg-[#F8F3EA] text-[#101012]">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">
              Got Questions?
            </span>
            <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-[#101012]">
              Common Questions
            </h2>
            <p className="text-xs text-[#2A2A2A]">
              Quick answers about delivery times, WhatsApp approvals, and orders in Lahore.
            </p>
          </div>

          <div className="space-y-3">
            {HOMEPAGE_FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="rounded-2xl bg-white border border-[#E5DED2] hover:border-[rgba(198,161,91,0.40)] overflow-hidden transition-all shadow-xs group"
              >
                <summary
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer list-none [&::-webkit-details-marker]:hidden"
                >
                  <span className="text-sm font-semibold text-[#101012]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className="w-4 h-4 text-[#8B1E2D] shrink-0 transition-transform duration-200 group-open:rotate-180"
                  />
                </summary>

                <div className="px-5 pb-5 pt-1 text-xs text-[#2A2A2A] leading-relaxed border-t border-[#E5DED2]">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>

          {/* Author byline (E-E-A-T / GEO) */}
          <p className="text-center text-[11px] text-[#2A2A2A] pt-2">
            Written by the <span className="font-semibold text-[#8B1E2D]">Lahore Bouquet floral team</span> — Lahore-based florists hand-tying fresh bouquets daily.
          </p>
        </div>
      </section>

      {/* About Lahore Bouquet */}
      <section className="w-full py-16 px-4 sm:px-6 bg-[#F8F3EA] border-t border-[#E5DED2] text-[#101012]">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            Fresh Flowers, Delivered Across Lahore
          </h2>
          <div className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed space-y-4">
            <p>
              Lahore Bouquet hand-ties every bouquet fresh on the day of delivery. We never sell pre-made or day-old arrangements — our florists start work only after you place your order, using fresh roses, sunflowers, lilies and seasonal blooms.
            </p>
            <p>
              Three things set us apart. First, honest pricing with no hidden charges — hand-tied bouquets start at Rs. 1,239, and our full catalog starts at Rs. 349. Second, same-day delivery across every corner of the city, from DHA and Gulberg to Bahria Town and Model Town, arriving in 2 to 5 hours. Third, we send you a photo on WhatsApp before dispatch, so you always know exactly what your loved one will receive.
            </p>
            <p>
              Whether you need a romantic rose bouquet, cheerful sunflowers, an elegant lily arrangement, or a fun chocolate bouquet, we have something for every occasion and every budget. Birthdays, anniversaries, weddings, get-well-soon wishes, or just because — Lahore Bouquet delivers happiness daily.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
