import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ALL_PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Heart, Truck, Camera, MessageCircle, HelpCircle, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Rose Bouquets in Lahore | Red & White Roses Delivery",
  },
  description: "Fresh imported Dutch roses in Lahore. Single stems from Rs. 1,180, dozens, 24 and 50-rose bouquets. Photo on WhatsApp before delivery.",
  openGraph: {
    title: "Rose Bouquets in Lahore | Red & White Roses Delivery",
    description: "Fresh imported Dutch roses in Lahore. Single stems from Rs. 1,180, dozens, 24 and 50-rose bouquets. Photo on WhatsApp before delivery.",
  }
};

export default function RosesPage() {
  const roses = ALL_PRODUCTS.filter(p => p.category === "Roses");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long do roses last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With fresh water and trimmed stems, most last around 5 to 7 days in Lahore's weather."
        }
      },
      {
        "@type": "Question",
        name: "Are these roses imported?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our premium bouquets use imported Dutch roses. The product page says clearly which flowers are in each bouquet."
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
        <span className="text-[#E11D48] font-semibold">Roses</span>
      </nav>

      {/* Hero Category Banner */}
      <section className="bg-gradient-to-r from-[#1E1215] via-[#2A1017] to-[#1E1215] p-8 sm:p-12 rounded-2xl border border-[#E11D48]/30 shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E11D48]/20 text-[#F43F5E] border border-[#E11D48]/40 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-[#E11D48] text-[#E11D48]" />
            Imported Dutch Roses
          </span>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Rose Bouquets in Lahore
          </h1>

          <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-light">
            Roses say what you cannot say out loud. We use imported Dutch roses for our main bouquets because the heads are bigger, the stems are longer, and they last longer in a vase once you trim them. A single rose in black wrapping is enough for some people. Others want 50.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#E11D48]" /> Delivery in 2 to 5 hours</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#25D366]" /> Photo on WhatsApp before it leaves</span>
            <a 
              href="https://wa.me/923001234567?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20rose%20bouquets."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] font-semibold hover:underline"
            >
              <MessageCircle className="w-4 h-4" /> Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Which roses to pick & Care Tips */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#17171E] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-3">
          <h2 className="font-playfair text-xl font-bold text-white">Which roses to pick</h2>
          <ul className="space-y-2 text-xs text-white/70">
            <li><strong className="text-white">Red:</strong> love, anniversaries, proposals.</li>
            <li><strong className="text-white">White:</strong> apologies, new beginnings, quiet respect, weddings.</li>
            <li><strong className="text-white">Pink and blush:</strong> thank-yous, birthdays, Mother's Day.</li>
          </ul>
        </div>

        <div className="bg-[#17171E] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-3">
          <h2 className="font-playfair text-xl font-bold text-white">Care tip</h2>
          <p className="text-xs text-white/70 leading-relaxed">
            Cut about 2 cm off the stems at an angle, use clean water, and change it every two days. Keep the vase away from direct sun and the AC vent.
          </p>
          <div className="pt-2 flex gap-3 text-xs">
            <Link href="/roses/red-roses" className="text-[#E11D48] hover:underline font-semibold">
              Browse Red Roses →
            </Link>
            <Link href="/roses/white-roses" className="text-white/80 hover:underline font-semibold">
              Browse White Roses →
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Category Switcher Tabs */}
      <section className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
        <Link href="/bouquets" className="px-4 py-2 rounded-full bg-[#1E1E26] text-white/70 hover:text-white hover:bg-[#282834] whitespace-nowrap border border-white/5">
          All Bouquets
        </Link>
        <Link href="/roses" className="px-4 py-2 rounded-full bg-[#E11D48] text-white font-bold whitespace-nowrap shadow-md shadow-[#E11D48]/30">
          Roses Collection ({roses.length})
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
      </section>

      {/* Product Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>Showing {roses.length} premium rose bouquets in Lahore</span>
          <span className="text-[#E11D48]">Same-day express delivery active</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {roses.map((product) => (
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
            <h3 className="font-semibold text-white text-sm">How long do roses last?</h3>
            <p>With fresh water and trimmed stems, most last around 5 to 7 days in Lahore's weather.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#121217] border border-white/5">
            <h3 className="font-semibold text-white text-sm">Are these roses imported?</h3>
            <p>Our premium bouquets use imported Dutch roses. The product page says clearly which flowers are in each bouquet.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
