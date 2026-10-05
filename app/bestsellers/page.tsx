"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const EXPLORE_CARDS = [
  { id: 1, title: "Explore Rosecraft", image: "/images/explore_rosecraft.jpg", tag: "Signature" },
  { id: 2, title: "Explore Lili Bloom", image: "/images/explore_lilibloom.jpg", tag: "Seasonal" },
  { id: 3, title: "Explore Autumn Tulip", image: "/images/explore_autumntulip.jpg", tag: "Limited" },
  { id: 4, title: "Explore Floral", image: "/images/explore_floral.jpg", tag: "Curated" },
];

const REVIEWS = [
  {
    id: 1,
    quote: "Fresh flowers delivered with zero plastic. The whole room smelled of eucalyptus for days.",
    author: "Jane Cooper",
    verified: "Verified Buyer",
  },
  {
    id: 2,
    quote: "The artisanal wrapping and handwritten botanical card made this the best gift ever.",
    author: "Darlene Robertson",
    verified: "Verified Buyer",
  },
  {
    id: 3,
    quote: "Sustainable floristry at its peak. The vase life was easily two full weeks.",
    author: "Louis Jones",
    verified: "Verified Buyer",
  },
  {
    id: 4,
    quote: "Stunning colors, ethical sourcing, and prompt delivery. Couldn't ask for more.",
    author: "Robert Fox",
    verified: "Verified Buyer",
  },
];

export default function BestsellersPage() {
  const [cartCount, setCartCount] = useState<number>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  return (
    <div className="min-h-screen bg-[#F4F1EC] p-3 sm:p-6 lg:p-8">
      {/* Toast Notice */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#1A3A2B] text-white px-5 py-3.5 rounded-xl shadow-2xl border-l-4 border-[#F4A261] animate-bounce">
          <span className="text-xl">🌿</span>
          <div className="text-sm font-medium">{toastMessage}</div>
        </div>
      )}

      {/* Main Single Page Container */}
      <div className="max-w-[1240px] mx-auto flex flex-col gap-6 sm:gap-8">
        


        {/* =========================================================================
            2. TOP EXPLORATION ROW (4 portrait cards side-by-side)
            ========================================================================= */}
        <section aria-label="Explore Floral Categories">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {EXPLORE_CARDS.map((item) => (
              <div
                key={item.id}
                onClick={() => triggerToast(`Browsing ${item.title} collection...`)}
                className="group relative aspect-[3/4.2] rounded-2xl overflow-hidden bg-[#1A3A2B] cursor-pointer shadow-md hover:shadow-xl transition-all"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover brightness-75 group-hover:scale-106 transition-transform duration-600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                
                <div className="absolute inset-x-0 bottom-4 px-3 flex flex-col items-center text-center">
                  <span className="font-serif-vintage text-base sm:text-lg font-semibold text-white leading-tight mb-2">
                    {item.title}
                  </span>
                  <span className="bg-white/20 hover:bg-[#F4A261] hover:text-[#1A3A2B] text-white text-xs px-3 py-1 rounded-full border border-white/25 backdrop-blur-xs transition-all">
                    Explore →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            3. BEST SELLERS PROMOTIONAL BLOCK
            ========================================================================= */}
        <section id="bestsellers" className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 border border-[#E5E0D8] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Left Text */}
          <div className="flex-1 max-w-[480px]">
            <span className="text-xs uppercase tracking-wider text-[#4D6A53] font-semibold block mb-1">
              Hand-Tied Arrangements
            </span>
            <h2 className="font-serif-vintage text-3xl sm:text-4xl font-semibold text-[#1A3A2B] mb-2.5">
              Best <span className="serif-italic">sellers</span>
            </h2>
            <p className="text-sm text-[#5E6963] leading-relaxed mb-6">
              Freshly wrapped flower arrangements with natural ribbons compliments diverse tastes. Sustainably packaged and delivered fresh from regenerative local farms.
            </p>
            <button
              onClick={() => {
                setCartCount((c) => c + 1);
                triggerToast("Order placed for Bestseller Wrapped Bouquet! 🌿");
              }}
              className="bg-[#1A3A2B] hover:bg-[#254F3B] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full transition-colors shadow-xs"
            >
              Order now →
            </button>
          </div>

          {/* Right Images (3 wrapped bouquet shots) */}
          <div className="w-full md:w-[380px] grid grid-cols-2 gap-3">
            <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-200 shadow-xs">
              <Image
                src="/images/bestseller_wrapped_1.jpg"
                alt="Wrapped bouquet 1"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="relative aspect-square rounded-xl overflow-hidden bg-gray-200 shadow-xs">
              <Image
                src="/images/bestseller_wrapped_2.jpg"
                alt="Wrapped bouquet 2"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
            <div className="col-span-2 relative aspect-[2.4/1] rounded-xl overflow-hidden bg-gray-200 shadow-xs">
              <Image
                src="/images/bestseller_wrapped_3.jpg"
                alt="Wrapped bouquet 3"
                fill
                className="object-cover hover:scale-105 transition-transform"
              />
            </div>
          </div>

        </section>

        {/* =========================================================================
            4. NEW ARRIVAL BLOCK (Vase on Ochre Table)
            ========================================================================= */}
        <section className="bg-[#F5E8D8] rounded-2xl p-6 sm:p-8 border border-[#EAD5BE] shadow-sm flex flex-col md:flex-row items-center gap-8">
          
          {/* Left Photo of Vase */}
          <div className="w-full md:w-[340px] aspect-square relative rounded-2xl overflow-hidden shadow-md shrink-0">
            <Image
              src="/images/new_arrival_vase.jpg"
              alt="Colorful floral vase arrangement on ochre surface"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Info */}
          <div className="flex-1">
            <span className="text-xs uppercase tracking-wider text-[#9E632A] font-semibold block mb-1">
              Seasonal Bloom Drop
            </span>
            <h2 className="font-serif-vintage text-3xl sm:text-4xl font-semibold text-[#1A3A2B] mb-3">
              New <span className="serif-italic">Arrival</span>
            </h2>
            <p className="text-sm sm:text-base text-[#5A4E40] leading-relaxed mb-6 max-w-[540px]">
              A fresh cycle of seasonal floristry at best combinations, a diverse collection allows you to pursue home interior stories. Specially conditioned for enduring 12+ day vase life.
            </p>
            <button
              onClick={() => {
                setCartCount((c) => c + 1);
                triggerToast("New Arrival Vase Arrangement added to bag! 🏵️");
              }}
              className="bg-[#1A3A2B] hover:bg-[#254F3B] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full transition-colors shadow-xs"
            >
              Shop now →
            </button>
          </div>

        </section>

        {/* =========================================================================
            5. INSPIRATION & GALLERY SECTION
            ========================================================================= */}
        <section id="gallery" className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 border border-[#E5E0D8] shadow-sm flex flex-col gap-5">
          
          <div className="flex items-center justify-between">
            <h2 className="text-sm sm:text-base font-semibold text-[#1A3A2B] flex items-center gap-2">
              Thoughtful, Planet-Prioritizing Ideas and Inspiration <span className="text-[#F4A261]">✦</span> <span className="serif-italic font-serif-vintage text-xl sm:text-2xl">Gallery</span>
            </h2>
            <div className="flex items-center gap-1.5 text-[#1A3A2B]">
              <button 
                onClick={() => triggerToast("Gallery scrolling left...")}
                aria-label="Previous gallery"
                className="w-8 h-8 rounded-full bg-white border border-[#E5E0D8] flex items-center justify-center hover:bg-gray-100 shadow-xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={() => triggerToast("Gallery scrolling right...")}
                aria-label="Next gallery"
                className="w-8 h-8 rounded-full bg-white border border-[#E5E0D8] flex items-center justify-center hover:bg-gray-100 shadow-xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* 5 Small Square Thumbnails */}
          <div className="grid grid-cols-5 gap-2.5 sm:gap-3">
            {[
              { id: 1, src: "/images/gallery_thumb_1.jpg", alt: "Rose bloom" },
              { id: 2, src: "/images/gallery_thumb_2.jpg", alt: "Hands arranging" },
              { id: 3, src: "/images/gallery_thumb_3.jpg", alt: "Green bottle and foliage" },
              { id: 4, src: "/images/gallery_thumb_4.jpg", alt: "Holding bouquet in field" },
              { id: 5, src: "/images/gallery_thumb_5.jpg", alt: "Florist workshop jars" },
            ].map((thumb) => (
              <div key={thumb.id} className="aspect-square relative rounded-xl overflow-hidden bg-gray-200 shadow-xs group cursor-pointer">
                <Image src={thumb.src} alt={thumb.alt} fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
            ))}
          </div>

          {/* 2 Larger Lifestyle Photos Below */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 shadow-xs">
              <Image
                src="/images/lifestyle_hands_twine.jpg"
                alt="Florist hands cutting twine wrapping flowers"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-[#1A3A2B]">
                Hand-Tied with Love
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-200 shadow-xs">
              <Image
                src="/images/lifestyle_workshop_chair.jpg"
                alt="Florist workshop with wooden chair and potted blooms"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs px-3 py-1 rounded-full text-xs font-semibold text-[#1A3A2B]">
                Our Sunlit Studio
              </div>
            </div>
          </div>

        </section>

        {/* =========================================================================
            6. SOCIAL PROOF / CUSTOMER REVIEWS
            ========================================================================= */}
        <section className="bg-[#FAF7F2] rounded-2xl p-6 sm:p-8 border border-[#E5E0D8] shadow-sm flex flex-col gap-5">
          
          {/* Header: 4.9 Stars & More than 25,000 */}
          <div className="flex items-center justify-between pb-4 border-b border-[#E5E0D8]">
            <div className="flex items-baseline gap-2">
              <span className="font-serif-vintage text-3xl sm:text-4xl font-bold text-[#1A3A2B]">4.9</span>
              <span className="text-sm text-[#5E6963]">/ 5</span>
              <div className="flex text-[#F5A623] text-sm ml-2">
                {"★★★★★"}
              </div>
            </div>
            <div className="text-right">
              <span className="text-sm font-bold text-[#1A3A2B] block">More than 25,000</span>
              <span className="text-xs text-[#5E6963]">Happy homes enriched</span>
            </div>
          </div>

          {/* 4 Review Cards in 2x2 or 4-col Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {REVIEWS.map((rev) => (
              <div
                key={rev.id}
                className="bg-white rounded-xl p-4 border border-[#E8E3D9] shadow-xs flex flex-col justify-between"
              >
                <p className="font-serif-vintage italic text-sm text-[#1C2320] leading-relaxed mb-3">
                  &ldquo;{rev.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between text-xs pt-2 border-t border-[#F0ECE4]">
                  <span className="font-bold text-[#1A3A2B]">{rev.author}</span>
                  <span className="text-[#4D6A53] font-medium text-[11px]">✓ Verified</span>
                </div>
              </div>
            ))}
          </div>

        </section>



      </div>
    </div>
  );
}
