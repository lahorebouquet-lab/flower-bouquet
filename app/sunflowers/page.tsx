import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ALL_PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Sun, Truck, Camera, MessageCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Sunflower Bouquets in Lahore | Fresh Sunflowers Delivery",
  },
  description: "Cheerful sunflower bouquets in Lahore from Rs. 1,590. Two-stem, three-stem and rose-and-sunflower mixes, delivered fresh the same day.",
  openGraph: {
    title: "Sunflower Bouquets in Lahore | Fresh Sunflowers Delivery",
    description: "Cheerful sunflower bouquets in Lahore from Rs. 1,590. Two-stem, three-stem and rose-and-sunflower mixes, delivered fresh the same day.",
  }
};

export default function SunflowersPage() {
  const sunflowers = ALL_PRODUCTS.filter(p => p.category === "Sunflowers");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are sunflowers available all year?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Availability changes with the season. If we cannot get fresh stems, we will tell you before you pay."
        }
      },
      {
        "@type": "Question",
        name: "How long do sunflowers last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Usually about a week with fresh water."
        }
      }
    ]
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-white/50 flex items-center gap-2">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <Link href="/bouquets" className="hover:text-white transition-colors">Bouquets</Link>
        <span>/</span>
        <span className="text-[#E11D48] font-semibold">Sunflowers</span>
      </nav>

      {/* Hero Category Banner */}
      <section className="bg-gradient-to-r from-[#201A10] via-[#2A1F10] to-[#201A10] p-8 sm:p-12 rounded-2xl border border-amber-500/30 shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold uppercase tracking-wider">
            <Sun className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            Golden Radiant Stems
          </span>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Sunflower Bouquets in Lahore
          </h1>

          <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-light">
            Sunflowers make people smile the second they see them. They are our go-to for birthdays, get-well wishes, graduation days and anyone who says they "don't really like flowers". We pair them with baby's breath, greenery or a few white roses.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#E11D48]" /> Delivery in 2 to 5 hours</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#25D366]" /> Photo on WhatsApp before it leaves</span>
            <a 
              href="https://wa.me/923001234567?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20sunflowers."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] font-semibold hover:underline"
            >
              <MessageCircle className="w-4 h-4" /> Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>Showing {sunflowers.length} cheerful sunflower bouquets</span>
          <span className="text-[#E11D48]">Same-day express delivery active in Lahore</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sunflowers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Category FAQ */}
      <section className="bg-[#17171C] p-8 sm:p-10 rounded-2xl border border-white/10 space-y-6">
        <div className="flex items-center gap-2 text-white">
          <HelpCircle className="w-5 h-5 text-[#E11D48]" />
          <h2 className="font-playfair text-2xl font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-white/70 leading-relaxed">
          <div className="space-y-1.5 p-4 rounded-xl bg-[#121217] border border-white/5">
            <h3 className="font-semibold text-white text-sm">Are sunflowers available all year?</h3>
            <p>Availability changes with the season. If we cannot get fresh stems, we will tell you before you pay.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#121217] border border-white/5">
            <h3 className="font-semibold text-white text-sm">How long do sunflowers last?</h3>
            <p>Usually about a week with fresh water.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
