"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ShoppingBag, User, ChevronLeft, ChevronRight } from "lucide-react";

export default function PresentationPage() {
  const [cartCount, setCartCount] = useState<number>(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  return (
    <div className="min-h-screen bg-[#DCD8CF] p-4 md:p-8">
      {/* Toast Notice */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#1A3A2B] text-white px-5 py-3.5 rounded-xl shadow-2xl border-l-4 border-[#F4A261]">
          <span className="text-xl">🌿</span>
          <div className="text-sm font-medium">{toastMessage}</div>
        </div>
      )}

      {/* Top Banner Navigation */}
      <div className="max-w-[1780px] mx-auto mb-6 flex items-center justify-between bg-white px-6 py-3 rounded-2xl shadow-sm border border-[#D5D0C5]">
        <div className="flex items-center gap-3">
          <span className="font-serif-vintage text-xl font-bold text-[#1A3A2B]">Lahore Bouquet</span>
          <span className="text-xs text-[#5E6963]">| Dual 2D Mockup Presentation (100% 1:1 to image_2.png)</span>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xs font-semibold px-4 py-1.5 rounded-full bg-[#1A3A2B] text-white hover:bg-[#254F3B]">
            View Page 1 (Home)
          </Link>
          <Link href="/bestsellers" className="text-xs font-semibold px-4 py-1.5 rounded-full bg-[#1A3A2B] text-white hover:bg-[#254F3B]">
            View Page 2 (Bestsellers & Gallery)
          </Link>
        </div>
      </div>

      {/* Side-by-Side Presentation Layout (Exact image_2.png Composition) */}
      <div className="max-w-[1780px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* =========================================================================
            SCREEN 1: LEFT PAGE (HOME)
            ========================================================================= */}
        <div className="lg:col-span-7 bg-[#F4F1EC] p-4 sm:p-6 rounded-3xl shadow-2xl border border-[#D5D0C5] flex flex-col gap-6">
          
          {/* Header & Hero */}
          <div className="bg-[#1A3A2B] text-white rounded-2xl overflow-hidden shadow-md border border-[#254F3B]">
            <header className="px-5 py-3.5 border-b border-white/10 flex items-center justify-between">
              <nav className="flex items-center gap-4 text-xs font-medium text-white/90">
                <Link href="/" className="hover:text-[#F4A261]">Shop</Link>
                <Link href="/bestsellers" className="hover:text-[#F4A261]">Bestsellers</Link>
                <Link href="/bestsellers#gallery" className="hover:text-[#F4A261]">Gallery</Link>
                <Link href="/#about" className="hover:text-[#F4A261]">About</Link>
              </nav>

              <div className="font-serif-vintage text-2xl font-semibold tracking-tight text-white">
                Lahore Bouquet
              </div>

              <div className="flex items-center gap-2">
                <div className="relative flex items-center">
                  <Search className="w-3 h-3 absolute left-2.5 text-white/60 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="Search bouquet..."
                    className="bg-white/10 border border-white/20 text-[11px] text-white placeholder-white/50 pl-7 pr-3 py-1 rounded-full w-32 focus:outline-none"
                  />
                </div>
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                  <User className="w-3.5 h-3.5 text-white" />
                </div>
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                  <ShoppingBag className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-7 sm:p-9 flex flex-col justify-center bg-[#1A3A2B]">
                <h2 className="font-serif-vintage text-3xl sm:text-4xl leading-[1.12] font-normal tracking-tight text-white mb-3">
                  Handcrafted <br />
                  <span className="serif-italic text-[#F8E5D5]">Bouquets</span> for a <br />
                  brighter home
                </h2>
                <p className="text-white/80 text-xs font-normal leading-relaxed mb-6 max-w-[280px]">
                  Eco-conscious floristry with a touch of natural beauty
                </p>
                <div>
                  <Link href="/bestsellers" className="inline-flex items-center gap-1.5 bg-[#F4EFEB] text-[#1A3A2B] text-xs font-semibold px-5 py-2 rounded-full shadow-xs">
                    Shop now →
                  </Link>
                </div>
              </div>

              <div className="relative min-h-[260px] md:min-h-[320px] overflow-hidden">
                <Image src="/images/hero_workshop.jpg" alt="Florist workshop" fill className="object-cover" />
                <div className="absolute bottom-4 right-4 glass-card text-white p-3 rounded-xl shadow-lg max-w-[130px]">
                  <div className="text-[10px] leading-tight text-white/90 font-medium mb-1.5">
                    <div>Natural.</div>
                    <div>Sustainable.</div>
                    <div>Eco-conscious.</div>
                  </div>
                  <div className="font-serif-vintage text-2xl font-bold text-white">96%</div>
                </div>
              </div>
            </div>
          </div>

          {/* Eco Essentials Bestselling Bouquets */}
          <div>
            <div className="flex items-end justify-between mb-3">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#4D6A53] font-semibold">Eco Essentials Planet-Friendly</span>
                <h3 className="font-serif-vintage text-xl font-medium text-[#1A3A2B] flex items-center gap-1.5">
                  Bestselling <span className="text-xs text-[#F4A261]">✦</span> <span className="serif-italic">Bouquets</span>
                </h3>
              </div>
              <Link href="/bestsellers" className="text-[11px] font-semibold text-[#1A3A2B]">More products →</Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5">
              {[
                { badge: "Promotion", title: "Natural scent eucalyptus & rose bouquet.", price: "$43.85", img: "/images/product_1_eucalyptus_rose.jpg" },
                { badge: "New", title: "Autumn vibes crimson and orange blooms.", price: "$78.35", img: "/images/product_2_autumn_crimson.jpg" },
                { badge: "Customer favorite", title: "Pastel/wildflower large mix & vintage style.", price: "$143.65", img: "/images/product_3_pastel_wildflower.jpg" },
                { badge: "New", title: "Bamboo Dried wildflower bunch", price: "$26.27", img: "/images/product_4_bamboo_dried.jpg" },
              ].map((p, idx) => (
                <div key={idx} className="bg-[#EFECE6] rounded-xl p-2.5 flex flex-col justify-between border border-[#E4DFD5]">
                  <div className="relative aspect-square w-full rounded-lg overflow-hidden bg-[#E7E2DA] mb-2">
                    <span className="absolute top-1.5 left-1.5 z-10 text-[9px] font-medium px-2 py-0.5 rounded-full bg-white/85 text-[#1A3A2B]">
                      {p.badge}
                    </span>
                    <Image src={p.img} alt={p.title} fill className="object-cover" />
                  </div>
                  <h4 className="text-[11px] font-medium text-[#1A3A2B] leading-tight line-clamp-2 min-h-[28px] mb-2">
                    {p.title}
                  </h4>
                  <div className="flex items-center justify-between pt-1.5 border-t border-[#E0D9CE]">
                    <span className="font-serif-vintage text-xs font-bold text-[#1A3A2B]">{p.price}</span>
                    <button onClick={() => triggerToast(`Added ${p.title} to cart!`)} className="bg-[#1A3A2B] text-white text-[10px] px-2 py-0.5 rounded-full">
                      + Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Commitment Banner */}
          <div className="bg-[#FAF7F2] rounded-xl overflow-hidden border border-[#E5E0D8] grid grid-cols-1 md:grid-cols-12 shadow-xs">
            <div className="md:col-span-5 relative min-h-[160px]">
              <Image src="/images/lifestyle_dining_table.jpg" alt="Dining table" fill className="object-cover" />
            </div>
            <div className="md:col-span-7 p-5 flex flex-col justify-center">
              <p className="font-serif-vintage text-base leading-snug text-[#1A3A2B] font-medium">
                Discover our commitment to <span className="serif-italic underline decoration-[#F4A261]">sustainable</span> sourcing, zero-plastic packaging, and <span className="serif-italic underline decoration-[#F4A261]">ethical farming</span> partnerships — all crafted to support a healthier planet and a <span className="serif-italic text-[#4D6A53]">brighter home</span>. 🌿🏵️🌿
              </p>
            </div>
          </div>

        </div>

        {/* =========================================================================
            SCREEN 2: RIGHT PAGE (BESTSELLERS & INSPIRATION GALLERY)
            ========================================================================= */}
        <div className="lg:col-span-5 bg-[#F4F1EC] p-4 sm:p-6 rounded-3xl shadow-2xl border border-[#D5D0C5] flex flex-col gap-5">
          
          {/* 4 Portrait Cards */}
          <div className="grid grid-cols-4 gap-2">
            {[
              { title: "Explore Rosecraft", img: "/images/explore_rosecraft.jpg" },
              { title: "Explore Lili Bloom", img: "/images/explore_lilibloom.jpg" },
              { title: "Explore Autumn Tulip", img: "/images/explore_autumntulip.jpg" },
              { title: "Explore Floral", img: "/images/explore_floral.jpg" },
            ].map((c, i) => (
              <div key={i} className="relative aspect-[3/4.2] rounded-xl overflow-hidden bg-[#1A3A2B]">
                <Image src={c.img} alt={c.title} fill className="object-cover brightness-75" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-1.5 px-1 text-center">
                  <span className="font-serif-vintage text-[10px] font-semibold text-white block mb-1">{c.title}</span>
                  <span className="bg-white/20 text-white text-[8px] px-1.5 py-0.5 rounded-full border border-white/20">Explore</span>
                </div>
              </div>
            ))}
          </div>

          {/* Best Sellers Block */}
          <div className="bg-[#FAF7F2] rounded-xl p-4 border border-[#E5E0D8] flex items-center justify-between gap-3">
            <div className="flex-1">
              <h3 className="font-serif-vintage text-lg font-semibold text-[#1A3A2B] mb-1">
                Best <span className="serif-italic">sellers</span>
              </h3>
              <p className="text-[10px] text-[#5E6963] leading-relaxed mb-2.5">
                Freshly wrapped flower arrangements with natural ribbons compliments diverse tastes.
              </p>
              <button onClick={() => triggerToast("Exploring Bestsellers...")} className="bg-[#1A3A2B] text-white text-[10px] px-3 py-1 rounded-full">
                Order now →
              </button>
            </div>
            <div className="w-[140px] grid grid-cols-2 gap-1.5">
              <div className="relative aspect-square rounded-md overflow-hidden bg-gray-200">
                <Image src="/images/bestseller_wrapped_1.jpg" alt="Bouquet" fill className="object-cover" />
              </div>
              <div className="relative aspect-square rounded-md overflow-hidden bg-gray-200">
                <Image src="/images/bestseller_wrapped_2.jpg" alt="Bouquet" fill className="object-cover" />
              </div>
              <div className="col-span-2 relative aspect-[2.4/1] rounded-md overflow-hidden bg-gray-200">
                <Image src="/images/bestseller_wrapped_3.jpg" alt="Bouquet" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* New Arrival Block */}
          <div className="bg-[#F5E8D8] rounded-xl p-4 border border-[#EAD5BE] flex items-center gap-3">
            <div className="w-28 aspect-square relative rounded-lg overflow-hidden shrink-0">
              <Image src="/images/new_arrival_vase.jpg" alt="Vase arrangement" fill className="object-cover" />
            </div>
            <div className="flex-1">
              <h3 className="font-serif-vintage text-lg font-semibold text-[#1A3A2B] mb-1">
                New <span className="serif-italic">Arrival</span>
              </h3>
              <p className="text-[10px] text-[#5A4E40] leading-relaxed mb-2.5">
                A fresh cycle of seasonal floristry at best combinations, a diverse collection allows you to pursue home interior stories.
              </p>
              <button onClick={() => triggerToast("Exploring New Arrivals...")} className="bg-[#1A3A2B] text-white text-[10px] px-3 py-1 rounded-full">
                Shop now →
              </button>
            </div>
          </div>

          {/* Gallery Block */}
          <div className="bg-[#FAF7F2] rounded-xl p-4 border border-[#E5E0D8] flex flex-col gap-2.5">
            <h4 className="text-[10px] font-semibold text-[#1A3A2B]">
              Thoughtful, Planet-Prioritizing Ideas and Inspiration <span className="text-[#F4A261]">✦</span> <span className="serif-italic font-serif-vintage text-xs">Gallery</span>
            </h4>
            <div className="grid grid-cols-5 gap-1.5">
              {["1", "2", "3", "4", "5"].map((n) => (
                <div key={n} className="aspect-square relative rounded-md overflow-hidden bg-gray-200">
                  <Image src={`/images/gallery_thumb_${n}.jpg`} alt="Thumb" fill className="object-cover" />
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-1.5 mt-1">
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
                <Image src="/images/lifestyle_hands_twine.jpg" alt="Hands wrapping" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
                <Image src="/images/lifestyle_workshop_chair.jpg" alt="Workshop chair" fill className="object-cover" />
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="bg-[#FAF7F2] rounded-xl p-4 border border-[#E5E0D8]">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#E5E0D8]">
              <div className="flex items-baseline gap-1">
                <span className="font-serif-vintage text-xl font-bold text-[#1A3A2B]">4.9</span>
                <span className="text-[10px] text-[#5E6963]">/ 5</span>
                <span className="text-[#F5A623] text-[10px] ml-1">★★★★★</span>
              </div>
              <div className="text-right">
                <span className="text-[11px] font-bold text-[#1A3A2B]">More than 25,000</span>
                <span className="text-[9px] text-[#5E6963] block">Happy homes enriched</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              {[
                { q: "Fresh flowers delivered with zero plastic. Smelled of eucalyptus for days.", a: "Jane Cooper" },
                { q: "Artisanal wrapping made this the best gift ever.", a: "Darlene Robertson" },
                { q: "Sustainable floristry at its peak. Vase life was two full weeks.", a: "Louis Jones" },
                { q: "Stunning colors and ethical sourcing.", a: "Robert Fox" },
              ].map((r, i) => (
                <div key={i} className="bg-white rounded-lg p-2 border border-[#E8E3D9]">
                  <p className="font-serif-vintage italic text-[10px] leading-snug text-[#1C2320] mb-1.5">“{r.q}”</p>
                  <span className="font-bold text-[#1A3A2B] text-[9px] block">{r.a}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
