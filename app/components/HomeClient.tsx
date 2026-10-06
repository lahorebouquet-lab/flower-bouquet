"use client";

import React, { useState, useMemo } from "react";
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

export default function HomeClient({
  initialProducts,
  initialCategories,
}: {
  initialProducts?: Product[];
  initialCategories?: SanityCategory[];
}) {
  const products = (initialProducts && initialProducts.length > 0) ? initialProducts : ALL_PRODUCTS;

  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [visibleCount, setVisibleCount] = useState<number>(8);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const filterOptions = ["All", "Roses", "Sunflowers", "Bouquets", "Wedding Décor", "Gifts & Cakes"];

  const bestsellers = useMemo(() => {
    // 4 representative pinnacle products: Rose bouquet, Hand-tied bouquet, Sunflower bouquet, and Bestseller Cake
    const topRose = products.find(p => (p.category === "Roses" || p.category === "Velvet Red Roses") && (p.badgeType === "hot" || p.badge?.includes("Signature")));
    const topBouquet = products.find(p => p.category === "Bouquets" && (p.badgeType === "hot" || p.badgeType === "promotion" || p.badgeType === "favorite"));
    const topSunflower = products.find(p => p.category === "Sunflowers");
    const topCake = products.find(p => (p.category === "Gifts & Cakes" || p.category === "Chocolate Bouquets") && (p.badgeType === "bestseller" || p.badgeType === "hot"));

    const curated = [topRose, topBouquet, topSunflower, topCake].filter(Boolean) as Product[];
    if (curated.length === 4) return curated;

    // Fallback to top rated items
    return products.filter(p => p.badgeType === "hot" || p.badge === "Bestseller" || p.badge === "Signature").slice(0, 4);
  }, [products]);

  const displayedProducts = useMemo(() => {
    // Exclude bestseller-section products so the two grids never repeat the same items
    const bestsellerIds = new Set((bestsellers || []).map(p => p.id));
    const pool = products.filter(p => !bestsellerIds.has(p.id));
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
    return products.filter(p => p.category === activeFilter);
  }, [activeFilter, products, bestsellers]);

  return (
    <>
      {/* 1. HERO SECTION (Preserving 100% Real Size & Natural Uncropped Proportions) */}
      <section className="relative min-h-[480px] sm:min-h-[520px] lg:min-h-[580px] xl:min-h-[640px] flex items-center overflow-hidden border-b border-[#C6A15B]/30 bg-[#F6F1E7] py-10 sm:py-14 lg:py-16">
        {/* Full-Width Background Image Layer - Responsive & LCP Optimized */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/hero-blush-elegance-banner.webp"
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
              Fresh Flower Bouquets in Lahore, <span className="text-[#8B1E2D]">Delivered to Your Door</span>
            </h1>

            {/* Quick answer (AEO) */}
            <p className="text-[#2A2A2A] text-xs sm:text-sm lg:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed">
              <strong>Same-day flower delivery in Lahore costs from Rs. 1,180 and arrives in 2–5 hours.</strong> Lahore Bouquet hand-ties fresh roses, sunflowers, lilies and money bouquets to order, sends you a photo and video on WhatsApp before dispatch, and delivers across DHA, Gulberg, Model Town, Bahria Town and Johar Town — with a midnight surprise slot for birthdays.
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
              <span className="hidden sm:inline text-white/40">•</span>
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
              <p className="text-xs text-[#2A2A2A]">Across all areas of Lahore</p>
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

      {/* 3. CATEGORY & FEATURED BOUQUETS SLIDER (Section 6: Warm Ivory #F8F3EA) */}
      <CategorySection categories={initialCategories} products={products} />

      {/* 4. FEATURED / BESTSELLER SECTION (Harmonized with Warm Ivory card palette) */}
      <section className="w-full py-16 px-4 sm:px-6 bg-[#F8F3EA] border-b border-[#E5DED2] text-[#101012]">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">
                Curated Lahore Favorites
              </span>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0B0B0B] mt-1">
                Bestsellers & Signature Arrangements
              </h2>
              <p className="text-xs sm:text-sm text-[#2A2A2A] mt-1 max-w-xl">
                Our most celebrated floral creations — handpicked Dutch roses, sunlit floral pairings, and regal celebration arrangements.
              </p>
            </div>

            <Link
              href="/bestsellers"
              className="group inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-[#0B0B0B] hover:text-[#8B1E2D] transition-colors"
            >
              <span>Explore All Bestsellers</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#8B1E2D] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Bestseller White Cards Grid (2 cards per row on mobile, 4 on desktop) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {bestsellers.map((prod) => (
              <ProductCard key={`bestseller-${prod.id}`} product={prod} />
            ))}
          </div>
        </div>
      </section>

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
              Transparent, professional, and personal from selection to your recipient's hands.
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
                Bouquets travel in temperature-controlled vans so stems remain crisp in Lahore's weather. Arrives in 2 to 5 hours.
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
              Dedicated artisanal floristry, honest stems, and genuine customer care.
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

      {/* 8. BRAND STORY / ABOUT TEASER (#F8F3EA background, #101012 heading, #2A2A2A body, #C6A15B line, #8B1E2D words) */}
      <section className="w-full py-16 px-4 sm:px-6 bg-[#F8F3EA] border-b border-[#E5DED2] text-[#101012]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-4">
            <div className="w-10 h-[2px] bg-[#C6A15B]" />
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012]">
              Handcrafted with Heart in Gulberg, Delivered across Lahore
            </h2>
            <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
              Lahore Bouquet was founded with a singular conviction: <span className="text-[#8B1E2D] font-semibold">gifting flowers should be deeply personal and dependable</span>. Unlike automated aggregators, every arrangement is tied by our master florists in Lahore.
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

          <div className="pt-2">
            <a
              href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20Can%20you%20deliver%20to%20my%20area%20in%20Lahore?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#8B1E2D] hover:text-[#101012] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Ask about delivery to your area on WhatsApp →</span>
            </a>
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
              <div
                key={idx}
                className="rounded-2xl bg-white border border-[#E5DED2] hover:border-[rgba(198,161,91,0.40)] overflow-hidden transition-all shadow-xs"
              >
                <button
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                  aria-expanded={openFaqIndex === idx}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm font-semibold text-[#101012]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#8B1E2D] shrink-0 transition-transform duration-200 ${
                      openFaqIndex === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {openFaqIndex === idx && (
                  <div className="px-5 pb-5 pt-1 text-xs text-[#2A2A2A] leading-relaxed border-t border-[#E5DED2]">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
