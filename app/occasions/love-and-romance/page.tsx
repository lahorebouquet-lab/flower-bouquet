import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ALL_PRODUCTS } from "../../data/products";
import ProductCard from "../../components/ProductCard";
import { Heart, Truck, Camera, MessageCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Romantic Flowers in Lahore | Love Bouquets & Proposals",
  },
  description: "Romantic bouquets in Lahore for proposals, dates and surprises. Red roses, single-rose bouquets and 50-rose designs. Same-day delivery.",
  openGraph: {
    title: "Romantic Flowers in Lahore | Love Bouquets & Proposals",
    description: "Romantic bouquets in Lahore for proposals, dates and surprises. Red roses, single-rose bouquets and 50-rose designs. Same-day delivery.",
  }
};

export default function LoveAndRomancePage() {
  const romanticProducts = ALL_PRODUCTS.filter(p => 
    p.occasion && (p.occasion.includes("Romance") || p.category === "Roses")
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can you deliver a proposal bouquet on time?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Tell us the exact time and place. For special timings, order the day before."
        }
      },
      {
        "@type": "Question",
        name: "Can the delivery be anonymous?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, tell us if you want the sender's name left off the card."
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
        <span className="text-[#E11D48] font-semibold">Love & Romance</span>
      </nav>

      {/* Hero Category Banner */}
      <section className="bg-gradient-to-r from-[#201014] via-[#2D0D18] to-[#201014] p-8 sm:p-12 rounded-2xl border border-[#E11D48]/30 shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E11D48]/20 text-[#F43F5E] border border-[#E11D48]/40 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-[#E11D48] text-[#E11D48]" />
            Proposals & Romance
          </span>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Romantic Flowers in Lahore
          </h1>

          <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-light">
            Whether it's a first "I like you" or a proposal, we help you get the tone right. A single rose is sweet and low pressure. A 50-rose bouquet is a bold move. We'll help you pick.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#E11D48]" /> Delivery in 2 to 5 hours</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#25D366]" /> Photo on WhatsApp before it leaves</span>
            <a 
              href="https://wa.me/923001234567?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20romantic%20flowers."
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
          <span>Showing {romanticProducts.length} romantic bouquets and single-stem roses</span>
          <span className="text-[#E11D48]">Same-day express delivery active in Lahore</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {romanticProducts.map((product) => (
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
            <h3 className="font-semibold text-white text-sm">Can you deliver a proposal bouquet on time?</h3>
            <p>Yes. Tell us the exact time and place. For special timings, order the day before.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#121217] border border-white/5">
            <h3 className="font-semibold text-white text-sm">Can the delivery be anonymous?</h3>
            <p>Yes, tell us if you want the sender's name left off the card.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
