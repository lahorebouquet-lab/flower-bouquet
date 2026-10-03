import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ALL_PRODUCTS } from "../../data/products";
import ProductCard from "../../components/ProductCard";
import { Heart, Truck, Camera, MessageCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Anniversary Flowers in Lahore | Roses & Surprise Setups",
  },
  description: "Anniversary flower delivery in Lahore. Red roses, 50-rose bouquets, cake combos and midnight surprises. Photo on WhatsApp before delivery.",
  openGraph: {
    title: "Anniversary Flowers in Lahore | Roses & Surprise Setups",
    description: "Anniversary flower delivery in Lahore. Red roses, 50-rose bouquets, cake combos and midnight surprises. Photo on WhatsApp before delivery.",
  }
};

export default function AnniversaryOccasionPage() {
  const anniversaryProducts = ALL_PRODUCTS.filter(p => 
    p.occasion && (p.occasion.includes("Anniversary") || p.occasion.includes("Romance"))
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many roses for an anniversary?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "There is no rule. Many people send the number of years, 12 for love, or 50 for a big milestone."
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
        <span className="text-white/40">Occasions</span>
        <span>/</span>
        <span className="text-[#E11D48] font-semibold">Anniversary</span>
      </nav>

      {/* Hero Category Banner */}
      <section className="bg-gradient-to-r from-[#220F16] via-[#2F101E] to-[#220F16] p-8 sm:p-12 rounded-2xl border border-[#E11D48]/30 shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E11D48]/20 text-[#F43F5E] border border-[#E11D48]/40 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-[#E11D48] text-[#E11D48]" />
            Wedding & Milestone Anniversaries
          </span>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Anniversary Flowers in Lahore
          </h1>

          <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-light">
            Remembering the date is half of it. The other half is making it feel like a moment. Send red roses to the office at lunch, arrange a midnight delivery when the date changes, or surprise your spouse with rose petals and a cake at home.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#E11D48]" /> Delivery in 2 to 5 hours</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#25D366]" /> Photo on WhatsApp before it leaves</span>
            <a 
              href="https://wa.me/923001234567?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20anniversary%20flowers."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] font-semibold hover:underline"
            >
              <MessageCircle className="w-4 h-4" /> Book Midnight Slot on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Ideas by budget */}
      <section className="bg-[#17171E] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
        <h2 className="font-playfair text-xl font-bold text-white">Ideas by budget</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-white/70">
          <div className="p-4 rounded-xl bg-[#121217] border border-white/5 space-y-1">
            <h3 className="font-bold text-white text-sm text-[#E11D48]">Under Rs. 2,000</h3>
            <p>A dozen red roses with a handwritten card.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#121217] border border-white/5 space-y-1">
            <h3 className="font-bold text-white text-sm text-[#E11D48]">Around Rs. 3,000 to Rs. 4,000</h3>
            <p>24 roses, or a Ferrero Rocher bouquet.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#121217] border border-white/5 space-y-1">
            <h3 className="font-bold text-white text-sm text-[#E11D48]">Above Rs. 6,000</h3>
            <p>50 roses, or a cake and flower box with fairy lights.</p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>Showing {anniversaryProducts.length} romantic anniversary bouquets & setups</span>
          <span className="text-[#E11D48]">11:30 PM midnight surprise delivery available</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {anniversaryProducts.map((product) => (
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
            <h3 className="font-semibold text-white text-sm">How many roses for an anniversary?</h3>
            <p>There is no rule. Many people send the number of years, 12 for love, or 50 for a big milestone.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
