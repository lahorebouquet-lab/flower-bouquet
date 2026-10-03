import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ALL_PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Sparkles, Truck, Camera, MessageCircle, HelpCircle, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Dried Flower Bouquets in Lahore | Preserved Flowers",
  },
  description: "Dried and preserved flower bunches in Lahore. Bamboo wildflower bunch from Rs. 1,250. Long-lasting home décor and gifts.",
  openGraph: {
    title: "Dried Flower Bouquets in Lahore | Preserved Flowers",
    description: "Dried and preserved flower bunches in Lahore. Bamboo wildflower bunch from Rs. 1,250. Long-lasting home décor and gifts.",
  }
};

export default function DriedFlowersPage() {
  const driedProducts = ALL_PRODUCTS.filter(p => 
    p.category === "Bouquets" && (
      p.title.toLowerCase().includes("dried") || 
      p.title.toLowerCase().includes("wildflower") ||
      p.slug.includes("bamboo") ||
      p.slug.includes("dried")
    )
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long do dried flowers last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Several months to a year or longer with good care."
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
        <span className="text-[#E11D48] font-semibold">Dried Flowers</span>
      </nav>

      {/* Hero Category Banner */}
      <section className="bg-gradient-to-r from-[#1E1915] via-[#2A2018] to-[#1E1915] p-8 sm:p-12 rounded-2xl border border-amber-600/30 shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-600/20 text-amber-300 border border-amber-600/40 text-xs font-bold uppercase tracking-wider">
            <Leaf className="w-3.5 h-3.5" />
            Naturally Preserved Botanicals
          </span>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Dried Flower Bouquets in Lahore
          </h1>

          <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-light">
            Dried flowers suit people who want a gift that lasts months instead of days. They look good on a shelf, a dining table or a desk, and they need no water. Great for a housewarming or as a thank-you.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#E11D48]" /> Delivery in 2 to 5 hours</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#25D366]" /> Photo on WhatsApp before it leaves</span>
            <a 
              href="https://wa.me/923001234567?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20dried%20flowers."
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
          Keep away from direct sunlight and humidity. Do not put them in water.
        </p>
      </section>

      {/* Product Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>Showing preserved and dried flower bunches</span>
          <span className="text-[#E11D48]">Long-lasting home décor</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {driedProducts.map((product) => (
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
            <h3 className="font-semibold text-white text-sm">How long do dried flowers last?</h3>
            <p>Several months to a year or longer with good care.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
