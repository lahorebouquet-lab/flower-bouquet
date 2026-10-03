import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ALL_PRODUCTS } from "../../data/products";
import ProductCard from "../../components/ProductCard";
import { Heart, Truck, Camera, MessageCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Red Rose Bouquet Lahore | Imported Dutch Red Roses",
  },
  description: "Send imported red roses in Lahore. 1, 12, 24 or 50 stems in black or cream wrap, with a handwritten card. Delivered in 2 to 5 hours.",
  openGraph: {
    title: "Red Rose Bouquet Lahore | Imported Dutch Red Roses",
    description: "Send imported red roses in Lahore. 1, 12, 24 or 50 stems in black or cream wrap, with a handwritten card. Delivered in 2 to 5 hours.",
  }
};

export default function RedRosesPage() {
  const redRoses = ALL_PRODUCTS.filter(p => 
    p.category === "Roses" && (
      p.title.toLowerCase().includes("red") || 
      p.title.toLowerCase().includes("crimson") || 
      p.title.toLowerCase().includes("velvet") ||
      p.slug.includes("crimson") ||
      p.slug.includes("red")
    )
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does a dozen red roses mean?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Traditionally, love and commitment. Many people send 12 for anniversaries and a single rose for a first 'I am thinking of you'."
        }
      },
      {
        "@type": "Question",
        name: "Can you deliver red roses at midnight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, book a late-night slot (11:30 PM to 12:15 AM) in advance."
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
        <span className="text-[#E11D48] font-semibold">Red Roses</span>
      </nav>

      {/* Hero Category Banner */}
      <section className="bg-gradient-to-r from-[#201013] via-[#2D0D15] to-[#201013] p-8 sm:p-12 rounded-2xl border border-[#E11D48]/30 shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E11D48]/20 text-[#F43F5E] border border-[#E11D48]/40 text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-[#E11D48] text-[#E11D48]" />
            Imported Dutch Stems
          </span>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Red Rose Bouquets in Lahore
          </h1>

          <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-light">
            A red rose bouquet is still the most requested gift we make, and there is a reason. It works for an anniversary, a first date, an apology and a "just because". Our red roses are imported Dutch stems, packed in matte black or cream paper, with baby's breath or eucalyptus if you want it.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#E11D48]" /> Delivery in 2 to 5 hours</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#25D366]" /> Photo on WhatsApp before it leaves</span>
            <a 
              href="https://wa.me/923001234567?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20red%20roses."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] font-semibold hover:underline"
            >
              <MessageCircle className="w-4 h-4" /> Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Popular Sizes Price Guide */}
      <section className="bg-[#17171E] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
        <h2 className="font-playfair text-xl font-bold text-white">Popular sizes</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-white/70">
          <div className="p-4 rounded-xl bg-[#121217] border border-white/5 space-y-1">
            <div className="font-bold text-white text-sm">1 long-stem rose</div>
            <div className="text-[#E11D48] font-bold">Rs. 1,180</div>
            <div className="text-[11px] text-white/50">Single stem with baby's breath</div>
          </div>
          <div className="p-4 rounded-xl bg-[#121217] border border-white/5 space-y-1">
            <div className="font-bold text-white text-sm">12 to 15 roses</div>
            <div className="text-[#E11D48] font-bold">About Rs. 1,900</div>
            <div className="text-[11px] text-white/50">With white baby's breath</div>
          </div>
          <div className="p-4 rounded-xl bg-[#121217] border border-white/5 space-y-1">
            <div className="font-bold text-white text-sm">24 roses</div>
            <div className="text-[#E11D48] font-bold">About Rs. 3,200</div>
            <div className="text-[11px] text-white/50">Two dozen classic arrangement</div>
          </div>
          <div className="p-4 rounded-xl bg-[#121217] border border-white/5 space-y-1">
            <div className="font-bold text-white text-sm">50 roses</div>
            <div className="text-[#E11D48] font-bold">From Rs. 5,500</div>
            <div className="text-[11px] text-white/50">Grand celebration statement</div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>Showing {redRoses.length} red rose arrangements</span>
          <span className="text-[#E11D48]">Same-day express delivery active in Lahore</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {redRoses.map((product) => (
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
            <h3 className="font-semibold text-white text-sm">What does a dozen red roses mean?</h3>
            <p>Traditionally, love and commitment. Many people send 12 for anniversaries and a single rose for a first "I am thinking of you".</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#121217] border border-white/5">
            <h3 className="font-semibold text-white text-sm">Can you deliver red roses at midnight?</h3>
            <p>Yes, book a late-night slot in advance (11:30 PM to 12:15 AM).</p>
          </div>
        </div>
      </section>
    </main>
  );
}
