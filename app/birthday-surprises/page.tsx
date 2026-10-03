import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ALL_PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Sparkles, Truck, Camera, MessageCircle, HelpCircle, Gift } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Birthday Flowers & Surprises in Lahore | Same-Day",
  },
  description: "Birthday bouquets, cakes and midnight surprises in Lahore. Send flowers to your loved ones with a card. Same-day and 12 AM delivery.",
  openGraph: {
    title: "Birthday Flowers & Surprises in Lahore | Same-Day",
    description: "Birthday bouquets, cakes and midnight surprises in Lahore. Send flowers to your loved ones with a card. Same-day and 12 AM delivery.",
  }
};

export default function BirthdaySurprisesPage() {
  const birthdayProducts = ALL_PRODUCTS.filter(p => 
    p.category === "Gifts & Cakes" || 
    p.category === "Sunflowers" || 
    p.category === "Roses"
  );

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can you deliver at 12 AM on a birthday?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our late-night slot runs 11:30 PM to 12:15 AM. Book by early evening."
        }
      },
      {
        "@type": "Question",
        name: "Can I send a surprise to someone's workplace?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, give us the office name, the person's name and a phone number for the guard or reception."
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
        <span className="text-[#E11D48] font-semibold">Birthday Surprises</span>
      </nav>

      {/* Hero Category Banner */}
      <section className="bg-gradient-to-r from-[#201018] via-[#2D1224] to-[#201018] p-8 sm:p-12 rounded-2xl border border-[#E11D48]/30 shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E11D48]/20 text-[#F43F5E] border border-[#E11D48]/40 text-xs font-bold uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5" />
            Midnight & Same-Day Surprises
          </span>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Birthday Flowers and Surprises in Lahore
          </h1>

          <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-light">
            Birthdays are about the moment the door opens. We can time delivery for the morning, for lunch at the office, or for midnight when the date changes. Pick a bouquet, add a cake or balloons, write your message, and we handle the rest.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#E11D48]" /> Same-day & 12 AM slots</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#25D366]" /> Photo on WhatsApp before it leaves</span>
            <a 
              href="https://wa.me/923001234567?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20plan%20a%20birthday%20surprise."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] font-semibold hover:underline"
            >
              <MessageCircle className="w-4 h-4" /> Book Midnight Slot on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Easy ideas */}
      <section className="bg-[#17171E] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
        <h2 className="font-playfair text-xl font-bold text-white">Easy ideas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-white/70">
          <div className="p-4 rounded-xl bg-[#121217] border border-white/5 space-y-1">
            <h3 className="font-bold text-white text-sm text-[#E11D48]">Sweet and simple</h3>
            <p>Two sunflowers with baby's breath.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#121217] border border-white/5 space-y-1">
            <h3 className="font-bold text-white text-sm text-[#E11D48]">Romantic</h3>
            <p>24 red roses and a handwritten card.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#121217] border border-white/5 space-y-1">
            <h3 className="font-bold text-white text-sm text-[#E11D48]">Big surprise</h3>
            <p>Cake, flower box, fairy lights and a midnight slot.</p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>Showing birthday bouquets and surprise packages</span>
          <span className="text-[#E11D48]">12 AM midnight delivery available</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {birthdayProducts.map((product) => (
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
            <h3 className="font-semibold text-white text-sm">Can you deliver at 12 AM on a birthday?</h3>
            <p>Yes. Our late-night slot runs 11:30 PM to 12:15 AM. Book by early evening.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#121217] border border-white/5">
            <h3 className="font-semibold text-white text-sm">Can I send a surprise to someone's workplace?</h3>
            <p>Yes, give us the office name, the person's name and a phone number for the guard or reception.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
