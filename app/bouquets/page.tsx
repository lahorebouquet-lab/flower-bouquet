import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ALL_PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Sparkles, Truck, Camera, MessageCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Buy Bouquets Online in Lahore | Rose & Mixed Flowers",
  },
  description: "Browse fresh hand-tied bouquets in Lahore from Rs. 1,180. Roses, sunflowers, chocolate and money bouquets with same-day delivery.",
  openGraph: {
    title: "Buy Bouquets Online in Lahore | Rose & Mixed Flowers",
    description: "Browse fresh hand-tied bouquets in Lahore from Rs. 1,180. Roses, sunflowers, chocolate and money bouquets with same-day delivery.",
  }
};

export default function BouquetsPage() {
  const bouquets = ALL_PRODUCTS.filter(p => 
    p.category === "Bouquets" || 
    p.category === "Roses" || 
    p.category === "Sunflowers" ||
    p.category === "Crochet" ||
    p.category === "Dried"
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you offer same-day bouquet delivery in Lahore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, usually within 2 to 5 hours across Lahore."
        }
      },
      {
        "@type": "Question",
        name: "Can I ask for a different colour wrap?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Tell us on WhatsApp and we will confirm before we make it."
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
        <span className="text-[#E11D48] font-semibold">Bouquets</span>
      </nav>

      {/* Hero Category Banner */}
      <section className="bg-gradient-to-r from-[#17171E] via-[#1E1418] to-[#17171E] p-8 sm:p-12 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E11D48]/15 text-[#F43F5E] border border-[#E11D48]/40 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#E11D48]" />
            Hand-Tied Fresh Flowers
          </span>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Bouquets in Lahore
          </h1>

          <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-light">
            Every bouquet here is tied by hand the day it is ordered. We buy flowers fresh, trim the stems, and wrap them in paper or fabric, not a plastic sleeve. Prices start at Rs. 1,180 for a single long-stem rose and go up to grand 50-rose arrangements.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#E11D48]" /> Delivery in 2 to 5 hours</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#25D366]" /> Photo on WhatsApp before it leaves</span>
            <a 
              href="https://wa.me/923001234567?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20a%20bouquet%20in%20Lahore."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] font-semibold hover:underline"
            >
              <MessageCircle className="w-4 h-4" /> Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* How to choose price guide */}
      <section className="bg-[#17171E] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
        <h2 className="font-playfair text-xl font-bold text-white">How to choose</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-white/70">
          <div className="p-4 rounded-xl bg-[#121217] border border-white/5 space-y-1.5">
            <h3 className="font-bold text-white text-sm text-[#E11D48]">Under Rs. 2,000</h3>
            <p>Single roses, a dozen red roses with baby's breath, two sunflowers.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#121217] border border-white/5 space-y-1.5">
            <h3 className="font-bold text-white text-sm text-[#E11D48]">Rs. 2,000 to Rs. 4,000</h3>
            <p>24-rose bouquets, sunflower and rose mixes, chocolate bouquets.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#121217] border border-white/5 space-y-1.5">
            <h3 className="font-bold text-white text-sm text-[#E11D48]">Above Rs. 5,000</h3>
            <p>50-rose bouquets, luxury wraps, cake and flower gift boxes.</p>
          </div>
        </div>
      </section>

      {/* Quick Category Switcher Tabs */}
      <section className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
        <Link href="/bouquets" className="px-4 py-2 rounded-full bg-[#E11D48] text-white font-bold whitespace-nowrap shadow-md shadow-[#E11D48]/30">
          All Bouquets ({bouquets.length})
        </Link>
        <Link href="/roses" className="px-4 py-2 rounded-full bg-[#1E1E26] text-white/70 hover:text-white hover:bg-[#282834] whitespace-nowrap border border-white/5">
          Roses
        </Link>
        <Link href="/roses/red-roses" className="px-4 py-2 rounded-full bg-[#1E1E26] text-white/70 hover:text-white hover:bg-[#282834] whitespace-nowrap border border-white/5">
          Red Roses
        </Link>
        <Link href="/roses/white-roses" className="px-4 py-2 rounded-full bg-[#1E1E26] text-white/70 hover:text-white hover:bg-[#282834] whitespace-nowrap border border-white/5">
          White Roses
        </Link>
        <Link href="/sunflowers" className="px-4 py-2 rounded-full bg-[#1E1E26] text-white/70 hover:text-white hover:bg-[#282834] whitespace-nowrap border border-white/5">
          Sunflowers
        </Link>
        <Link href="/money-bouquets" className="px-4 py-2 rounded-full bg-[#1E1E26] text-white/70 hover:text-white hover:bg-[#282834] whitespace-nowrap border border-white/5">
          Money Bouquets
        </Link>
        <Link href="/crochet-bouquets" className="px-4 py-2 rounded-full bg-[#1E1E26] text-white/70 hover:text-white hover:bg-[#282834] whitespace-nowrap border border-white/5">
          Crochet
        </Link>
        <Link href="/dried-flowers" className="px-4 py-2 rounded-full bg-[#1E1E26] text-white/70 hover:text-white hover:bg-[#282834] whitespace-nowrap border border-white/5">
          Dried Flora
        </Link>
      </section>

      {/* Product Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>Showing {bouquets.length} hand-tied bouquets in Lahore</span>
          <span className="text-[#E11D48]">Same-day express delivery active</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bouquets.map((product) => (
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
            <h3 className="font-semibold text-white text-sm">Do you offer same-day bouquet delivery in Lahore?</h3>
            <p>Yes, usually within 2 to 5 hours across all major areas in Lahore.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#121217] border border-white/5">
            <h3 className="font-semibold text-white text-sm">Can I ask for a different colour wrap?</h3>
            <p>Yes. Tell us on WhatsApp and we will confirm before we make it.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
