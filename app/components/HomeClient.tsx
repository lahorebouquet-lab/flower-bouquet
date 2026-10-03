"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ALL_PRODUCTS, 
  Product, 
  LAHORE_AREAS, 
  REVIEWS 
} from "../data/products";
import { HOMEPAGE_FAQS } from "../data/homepage";
import ProductCard from "./ProductCard";
import { 
  Sparkles, 
  Clock, 
  Truck, 
  ShieldCheck, 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  Heart, 
  Gift, 
  Leaf,
  Play,
  Pause,
  ChevronDown,
  HelpCircle,
  Banknote,
  Send
} from "lucide-react";
import CategorySection from "./CategorySection";

export default function HomeClient() {
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const desktopVideoRef = useRef<HTMLVideoElement | null>(null);
  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Auto-play videos reliably on mount
  useEffect(() => {
    if (desktopVideoRef.current) {
      desktopVideoRef.current.play().catch(() => {});
    }
    if (mobileVideoRef.current) {
      mobileVideoRef.current.play().catch(() => {});
    }
  }, []);

  const togglePlay = () => {
    const nextPlaying = !isPlaying;
    if (desktopVideoRef.current) {
      if (nextPlaying) desktopVideoRef.current.play().catch(() => {});
      else desktopVideoRef.current.pause();
    }
    if (mobileVideoRef.current) {
      if (nextPlaying) mobileVideoRef.current.play().catch(() => {});
      else mobileVideoRef.current.pause();
    }
    setIsPlaying(nextPlaying);
  };

  const filterOptions = ["All", "Roses", "Sunflowers", "Bouquets", "Wedding Décor", "Gifts & Cakes"];

  const displayedProducts = useMemo(() => {
    if (activeFilter === "All") return ALL_PRODUCTS;
    return ALL_PRODUCTS.filter(p => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      {/* 1. Flagship Hero Section with Responsive Mobile/Desktop Videos */}
      <section className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-end lg:items-center overflow-hidden border-b border-white/10 bg-[#0A0A0D] pb-10 pt-16 sm:pb-12 sm:pt-20 lg:py-24">
        {/* Background Video Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Desktop Cinematic Video: Man presenting roses to woman (Visible on lg and above) */}
          <video
            ref={desktopVideoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="hidden lg:block w-full h-full object-cover object-[65%_center] brightness-[1.05] contrast-[1.02]"
          >
            <source src="/videos/hero_roses.mp4" type="video/mp4" />
            <source src="/videos/Man_presenting_roses_to_woman_20260927073940.mp4" type="video/mp4" />
          </video>

          {/* Mobile Cinematic Video: Man presenting bouquet to woman (Active & visible on mobile/tablet) */}
          <video
            ref={mobileVideoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="block lg:hidden w-full h-full object-cover object-[center_25%] brightness-[1.06] contrast-[1.02]"
          >
            <source src="/videos/hero_mobile.mp4" type="video/mp4" />
            <source src="/videos/Man_presenting_bouquet_to_woman_20260928205113.mp4" type="video/mp4" />
          </video>

          {/* Desktop Left-to-Right Balanced Vignette */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#0A0A0D] via-[#0A0A0D]/75 sm:via-[#0A0A0D]/45 to-transparent w-full lg:w-3/5 pointer-events-none" />

          {/* Mobile Bottom-to-Top Vignette */}
          <div className="block lg:hidden absolute inset-0 bg-gradient-to-t from-[#0A0A0D] via-[#0A0A0D]/85 via-50% to-transparent pointer-events-none" />
          <div className="block lg:hidden absolute inset-0 bg-black/20 pointer-events-none" />

          {/* Bottom Edge Fade */}
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0A0A0D] to-transparent pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Content Column */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#E11D48]/20 backdrop-blur-md border border-[#E11D48]/40 text-[#F43F5E] text-[10px] sm:text-xs font-semibold uppercase tracking-wider shadow-lg">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                Hand-Tied in Lahore • Same-Day Express Delivery
              </div>

              {/* Exact H1 required by Part 2 */}
              <h1 className="font-playfair text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
                Fresh Bouquets Delivered Across Lahore in 2 to 5 Hours
              </h1>

              {/* Exact Hero Text required by Part 2 */}
              <p className="text-white/85 text-xs sm:text-sm lg:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed drop-shadow">
                Imported Dutch roses, sunflowers, custom money bouquets and full bridal room décor, made by hand in Gulberg and delivered to DHA, Bahria Town, Model Town and everywhere else in Lahore. Before your flowers leave, we send you a photo on WhatsApp. If something looks off, we fix it.
              </p>

              {/* Buttons: See All Bouquets / Order on WhatsApp */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 pt-1 sm:pt-2">
                <Link
                  href="/bouquets"
                  className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-gradient-to-r from-[#E11D48] to-[#BE123C] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-[#E11D48]/40 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>See All Bouquets</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>

                <a
                  href="https://wa.me/923001234567?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20in%20Lahore."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#25D366]/30 hover:scale-[1.02] transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>

            </div>

            {/* Right side is kept clear on desktop to display the video without obstruction */}
            <div className="hidden lg:block lg:col-span-5 pointer-events-none" />

          </div>
        </div>

        {/* Video Pause / Play Toggle */}
        <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 z-20 flex items-center gap-2">
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? "Pause video" : "Play video"}
            className="p-2 sm:p-2.5 rounded-full bg-black/50 hover:bg-black/80 backdrop-blur-md border border-white/20 text-white transition-all shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
            title={isPlaying ? "Pause Video" : "Play Video"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
          </button>
        </div>
      </section>

      {/* 2. Trust Bar (Under Hero) - Exact 4 points from Part 1 & Part 2 */}
      <section className="border-b border-white/10 bg-[#141419] py-6 px-4 sm:px-6 text-xs">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#E11D48]/15 flex items-center justify-center text-[#E11D48] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-xs">Delivery in 2 to 5 hours</h4>
              <p className="text-[11px] text-white/50">Across all areas of Lahore</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-[#25D366]/15 flex items-center justify-center text-[#25D366] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-xs">Photo on WhatsApp</h4>
              <p className="text-[11px] text-white/50">Sent before your bouquet leaves</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-xs">Late-night surprise slots</h4>
              <p className="text-[11px] text-white/50">11:30 PM to 12:15 AM delivery</p>
            </div>
          </div>

          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center text-amber-400 shrink-0">
              <Banknote className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-white text-xs">Flexible Payment Options</h4>
              <p className="text-[11px] text-white/50">COD, Bank transfer, JazzCash, EasyPaisa</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Bouquets Slider & Circular Category Slider */}
      <CategorySection />

      {/* 4. Full Bouquet Grid with Category Filter */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs uppercase font-bold tracking-widest text-[#E11D48]">The Full Collection</span>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white">Handcrafted Flowers in Lahore</h2>
            <p className="text-xs text-white/60">Choose from fresh Dutch roses, cheerful sunflowers, money bouquets, and celebration combos.</p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === filter
                    ? "bg-[#E11D48] text-white shadow-md shadow-[#E11D48]/30"
                    : "bg-[#1E1E26] text-white/70 hover:text-white border border-white/10"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayedProducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </section>

      {/* 5. How Ordering Works - Exact Section from Part 2 */}
      <section className="py-16 px-4 sm:px-6 border-t border-b border-white/10 bg-[#141419]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#E11D48]">Simple 3-Step Process</span>
            <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-white">How Ordering Works</h2>
            <p className="text-xs text-white/60">Everything is transparent from selection to doorstep arrival.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#1A1A22] border border-white/10 space-y-3.5 text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#E11D48]/15 border border-[#E11D48]/30 text-[#E11D48] font-bold text-lg flex items-center justify-center mx-auto">
                1
              </div>
              <h3 className="font-playfair text-lg font-bold text-white">Pick your flowers.</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Choose a bouquet or tell us your budget on WhatsApp. Add a handwritten card if you like.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#1A1A22] border border-[#25D366]/30 space-y-3.5 text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] font-bold text-lg flex items-center justify-center mx-auto">
                2
              </div>
              <h3 className="font-playfair text-lg font-bold text-white">We send a photo.</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Our florist makes the bouquet and shares a photo with you. You approve it, or ask for changes, before it goes out.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#1A1A22] border border-white/10 space-y-3.5 text-center">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/15 border border-purple-500/30 text-purple-400 font-bold text-lg flex items-center justify-center mx-auto">
                3
              </div>
              <h3 className="font-playfair text-lg font-bold text-white">We deliver.</h3>
              <p className="text-xs text-white/70 leading-relaxed">
                Bouquets travel in air-conditioned vans so the stems stay fresh in Lahore's heat. Most orders arrive within 2 to 5 hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Why People Order From Lahore Bouquet - Exact Section from Part 2 */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-[#E11D48]">The Lahore Bouquet Difference</span>
          <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-white">Why People Order From Lahore Bouquet</h2>
          <p className="text-xs text-white/60">Crafted with care, honesty, and attention to every stem.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-xs">
          <div className="p-6 rounded-2xl bg-[#17171E] border border-white/10 space-y-2.5">
            <div className="flex items-center gap-2 text-[#E11D48] font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Real stems, real photos.</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              What you approve on WhatsApp is what arrives. No surprises, no substitutions without consent.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#17171E] border border-white/10 space-y-2.5">
            <div className="flex items-center gap-2 text-[#E11D48] font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Imported Dutch roses.</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Longer stems and bigger heads than local roses. We tell you clearly when a bouquet uses local flowers.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#17171E] border border-white/10 space-y-2.5">
            <div className="flex items-center gap-2 text-[#E11D48] font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Late-night delivery.</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              Anniversary or birthday at midnight? Book the 11:30 PM to 12:15 AM surprise slot.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#17171E] border border-white/10 space-y-2.5">
            <div className="flex items-center gap-2 text-[#E11D48] font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Less plastic.</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              We wrap fresh bouquets in paper and fabric instead of plastic where we can.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#17171E] border border-white/10 space-y-2.5 md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 text-[#E11D48] font-bold text-sm">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Weddings and events.</span>
            </div>
            <p className="text-white/70 leading-relaxed">
              We do bridal rooms, car décor, and mehndi flower jewellery, so you can order everything from one trusted place.
            </p>
          </div>
        </div>
      </section>

      {/* 7. What Customers Say - Verified Real Reviews from Part 2 */}
      <section className="py-16 px-4 sm:px-6 border-t border-white/10 bg-[#121217]">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#E11D48]">Real Feedback</span>
              <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-white mt-1">What Customers Say</h2>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex text-[#E11D48]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#E11D48]" />
                ))}
              </div>
              <span className="text-xs font-bold text-white">4.9 / 5.0 Rating in Lahore</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.map((rev, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#1A1A22] border border-white/10 space-y-3 flex flex-col justify-between text-xs">
                <div className="space-y-3">
                  <div className="flex text-[#E11D48]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#E11D48]" />
                    ))}
                  </div>
                  <p className="text-white/80 italic leading-relaxed">
                    "{rev.quote}"
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10">
                  <div className="font-bold text-white">{rev.name}</div>
                  <div className="text-[11px] text-white/50">{rev.location}</div>
                  <div className="text-[10px] text-[#E11D48] mt-1 font-semibold">{rev.item}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. We Deliver Across Lahore - Exact Section from Part 2 */}
      <section className="py-14 px-4 sm:px-6 border-t border-white/10 bg-[#0E0E12]">
        <div className="max-w-5xl mx-auto space-y-6 text-center">
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold tracking-widest text-[#E11D48]">Coverage Areas</span>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white">We Deliver Across Lahore</h2>
            <p className="text-xs text-white/70 max-w-2xl mx-auto leading-relaxed">
              DHA Phases 1 to 9, Gulberg I to III, Bahria Town, Model Town, Johar Town, Cantt, Askari 1 to 11, Wapda Town, Township and Faisal Town. Outside these areas? Message us and we will tell you if we can reach you.
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
                className="px-3.5 py-1.5 rounded-full bg-[#181822] border border-white/10 text-white/80 text-xs font-medium"
              >
                {area}
              </span>
            ))}
          </div>

          <div className="pt-2">
            <a
              href="https://wa.me/923001234567?text=Hello%20Lahore%20Bouquet!%20Can%20you%20deliver%20to%20my%20area%20in%20Lahore?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#25D366] hover:underline"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Ask about delivery to your area on WhatsApp →</span>
            </a>
          </div>
        </div>
      </section>

      {/* 9. Common Questions (Homepage FAQ) - Exact 5 FAQs from Part 2 */}
      <section className="py-16 px-4 sm:px-6 max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-[#E11D48]">Got Questions?</span>
          <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-white">Common Questions</h2>
          <p className="text-xs text-white/60">Quick answers about delivery times, WhatsApp approvals, and orders.</p>
        </div>

        <div className="space-y-3">
          {HOMEPAGE_FAQS.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#17171E] border border-white/10 overflow-hidden transition-colors"
            >
              <button
                onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
              >
                <span className="text-sm font-semibold text-white">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-[#E11D48] shrink-0 transition-transform duration-200 ${
                    openFaqIndex === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openFaqIndex === idx && (
                <div className="px-5 pb-5 pt-1 text-xs text-white/70 leading-relaxed border-t border-white/5">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
