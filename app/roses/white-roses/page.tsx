import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ALL_PRODUCTS } from "../../data/products";
import ProductCard from "../../components/ProductCard";
import { Sparkles, Truck, Camera, MessageCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "White Rose Bouquet in Lahore | Fresh White Roses",
  },
  description: "Fresh white rose bouquets in Lahore. Single stems, dozens and 50-rose bouquets for weddings, apologies and new beginnings. Same-day delivery.",
  openGraph: {
    title: "White Rose Bouquet in Lahore | Fresh White Roses",
    description: "Fresh white rose bouquets in Lahore. Single stems, dozens and 50-rose bouquets for weddings, apologies and new beginnings. Same-day delivery.",
  }
};

export default function WhiteRosesPage() {
  const whiteRoses = ALL_PRODUCTS.filter(p => 
    p.category === "Roses" && (
      p.title.toLowerCase().includes("white") || 
      p.title.toLowerCase().includes("pearl") || 
      p.title.toLowerCase().includes("ivory") ||
      p.title.toLowerCase().includes("blush") ||
      p.slug.includes("white") ||
      p.slug.includes("pearl") ||
      p.slug.includes("ivory") ||
      p.slug.includes("blush")
    )
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are white roses okay for a hospital visit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, they are a common choice. Check with the hospital first, since some wards do not allow flowers."
        }
      },
      {
        "@type": "Question",
        name: "Can I mix white and red roses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our Duo Royale bouquet combines both."
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
        <Link href="/roses" className="hover:text-white transition-colors">Roses</Link>
        <span>/</span>
        <span className="text-[#E11D48] font-semibold">White Roses</span>
      </nav>

      {/* Hero Category Banner */}
      <section className="bg-gradient-to-r from-[#17171E] via-[#1E1E28] to-[#17171E] p-8 sm:p-12 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-white/90 border border-white/20 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-white/90" />
            Pristine White & Ivory Stems
          </span>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            White Rose Bouquets in Lahore
          </h1>

          <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-light">
            White roses are calm. People send them when they want to say sorry, congratulate a new mother, welcome someone home, or decorate a wedding. Ours come with soft green fillers or baby's breath, wrapped in pink, cream or black paper.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#E11D48]" /> Delivery in 2 to 5 hours</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#25D366]" /> Photo on WhatsApp before it leaves</span>
            <a 
              href="https://wa.me/923001234567?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20white%20roses."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] font-semibold hover:underline"
            >
              <MessageCircle className="w-4 h-4" /> Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Good for section */}
      <section className="bg-[#17171E] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-3">
        <h2 className="font-playfair text-xl font-bold text-white">Good for</h2>
        <p className="text-xs text-white/70 leading-relaxed">
          Nikkah and walima gifts, hospital visits, apologies, graduations, and anyone who does not like loud colours.
        </p>
      </section>

      {/* Product Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>Showing {whiteRoses.length} white and ivory rose arrangements</span>
          <span className="text-[#E11D48]">Same-day express delivery active in Lahore</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whiteRoses.map((product) => (
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
            <h3 className="font-semibold text-white text-sm">Are white roses okay for a hospital visit?</h3>
            <p>Yes, they are a common choice. Check with the hospital first, since some wards do not allow flowers.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#121217] border border-white/5">
            <h3 className="font-semibold text-white text-sm">Can I mix white and red roses?</h3>
            <p>Yes. Our Duo Royale bouquet combines both.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
