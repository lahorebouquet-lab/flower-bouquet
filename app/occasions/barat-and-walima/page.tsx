import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ALL_PRODUCTS } from "../../data/products";
import ProductCard from "../../components/ProductCard";
import { Sparkles, Truck, Camera, MessageCircle, HelpCircle, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Barat & Walima Flowers in Lahore | Bouquets & Décor",
  },
  description: "Bridal bouquets, stage flowers, car décor and mehndi jewellery for barat and walima in Lahore. Book early. Fresh flowers made to your theme.",
  openGraph: {
    title: "Barat & Walima Flowers in Lahore | Bouquets & Décor",
    description: "Bridal bouquets, stage flowers, car décor and mehndi jewellery for barat and walima in Lahore. Book early. Fresh flowers made to your theme.",
  }
};

export default function BaratAndWalimaPage() {
  const weddingProducts = ALL_PRODUCTS.filter(p => 
    p.category === "Wedding Décor" || 
    (p.occasion && p.occasion.includes("Wedding"))
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How early should I book?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In wedding season, as early as you can to guarantee availability and specific floral themes."
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
        <span className="text-[#E11D48] font-semibold">Barat & Walima</span>
      </nav>

      {/* Hero Category Banner */}
      <section className="bg-gradient-to-r from-[#201018] via-[#2D1224] to-[#201018] p-8 sm:p-12 rounded-2xl border border-[#E11D48]/30 shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E11D48]/20 text-[#F43F5E] border border-[#E11D48]/40 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Wedding Floral Services
          </span>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Flowers for Barat and Walima in Lahore
          </h1>

          <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-light">
            From the bride's bouquet to the car that takes her home, we make the flowers for each function. Tell us your colours, the day and the venue, and we'll quote you.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#E11D48]" /> Setup at your home or venue</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#25D366]" /> Photo on WhatsApp before it leaves</span>
            <a 
              href="https://wa.me/923001234567?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20quote%20for%20Barat/Walima%20flowers."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] font-semibold hover:underline"
            >
              <MessageCircle className="w-4 h-4" /> Get Wedding Quote on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* We can do */}
      <section className="bg-[#17171E] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
        <h2 className="font-playfair text-xl font-bold text-white">We can do</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 text-xs text-white/70 text-center">
          <div className="p-3.5 rounded-xl bg-[#121217] border border-white/5 font-semibold text-white">
            Bridal & Bridesmaids' Bouquets
          </div>
          <div className="p-3.5 rounded-xl bg-[#121217] border border-white/5 font-semibold text-white">
            Wedding Car Flowers
          </div>
          <div className="p-3.5 rounded-xl bg-[#121217] border border-white/5 font-semibold text-white">
            Bridal Room Décor
          </div>
          <div className="p-3.5 rounded-xl bg-[#121217] border border-white/5 font-semibold text-white">
            Mehndi Flower Jewellery
          </div>
          <div className="p-3.5 rounded-xl bg-[#121217] border border-white/5 font-semibold text-white">
            Guest Gift Bouquets
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>Showing Barat, Walima and Bridal arrangements</span>
          <span className="text-[#E11D48]">Fresh floral styling across Lahore</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {weddingProducts.map((product) => (
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
            <h3 className="font-semibold text-white text-sm">How early should I book?</h3>
            <p>In wedding season, as early as you can to guarantee availability and specific floral themes.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
