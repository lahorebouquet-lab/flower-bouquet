import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ALL_PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Sparkles, Truck, Camera, MessageCircle, HelpCircle, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Handmade Crochet Flower Bouquets in Lahore",
  },
  description: "Crochet flower bouquets in Lahore that never wilt. Handmade sunflower and rose bouquets, a gift that lasts for years.",
  openGraph: {
    title: "Handmade Crochet Flower Bouquets in Lahore",
    description: "Crochet flower bouquets in Lahore that never wilt. Handmade sunflower and rose bouquets, a gift that lasts for years.",
  }
};

export default function CrochetBouquetsPage() {
  const crochetProducts = ALL_PRODUCTS.filter(p => 
    p.category === "Bouquets" && (
      p.title.toLowerCase().includes("crochet") || 
      p.slug.includes("crochet")
    )
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does a crochet bouquet take to make?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Popular styles are in stock for same-day delivery, while custom colour requests take 24 to 48 hours."
        }
      },
      {
        "@type": "Question",
        name: "Can I choose the colours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tell us your colours on WhatsApp and we will let you know what is possible."
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
        <span className="text-[#E11D48] font-semibold">Crochet Bouquets</span>
      </nav>

      {/* Hero Category Banner */}
      <section className="bg-gradient-to-r from-[#1E171E] via-[#2A1828] to-[#1E171E] p-8 sm:p-12 rounded-2xl border border-pink-500/30 shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/40 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-pink-400 text-pink-400" />
            Handmade Everlasting Keepsake
          </span>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Crochet Flower Bouquets in Lahore
          </h1>

          <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-light">
            Fresh flowers fade. Crochet flowers stay. Every bouquet is knitted by hand, so no two are exactly alike. They make lovely gifts for people who keep things: for an anniversary, a graduation, or a new home. No watering, no wilting.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#E11D48]" /> Delivery in 2 to 5 hours</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#25D366]" /> Photo on WhatsApp before it leaves</span>
            <a 
              href="https://wa.me/923001234567?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20a%20crochet%20bouquet."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] font-semibold hover:underline"
            >
              <MessageCircle className="w-4 h-4" /> Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Care Instructions */}
      <section className="bg-[#17171E] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-3">
        <h2 className="font-playfair text-xl font-bold text-white">Care</h2>
        <p className="text-xs text-white/70 leading-relaxed">
          Dust gently with a soft brush. Keep away from damp places. Never needs water and lasts for years.
        </p>
      </section>

      {/* Product Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>Showing handmade crochet bouquets</span>
          <span className="text-[#E11D48]">Same-day express delivery active in Lahore</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {crochetProducts.map((product) => (
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
            <h3 className="font-semibold text-white text-sm">How long does a crochet bouquet take to make?</h3>
            <p>Popular styles are in stock for same-day delivery, while custom colour requests take 24 to 48 hours.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#121217] border border-white/5">
            <h3 className="font-semibold text-white text-sm">Can I choose the colours?</h3>
            <p>Tell us your colours on WhatsApp and we will let you know what is possible.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
