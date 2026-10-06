import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../components/ProductCard";
import { Truck, Camera, MessageCircle, HelpCircle, Gift } from "lucide-react";
import { SITE_URL } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Birthday Flowers & Surprises in Lahore | Same-Day",
  },
  description: "Birthday bouquets, cakes and midnight surprises in Lahore. Send flowers to your loved ones with a card. Same-day and 12 AM delivery.",
  alternates: {
    canonical: `${SITE_URL}/birthday-surprises`,
  },
  openGraph: {
    title: "Birthday Flowers & Surprises in Lahore | Same-Day",
    description: "Birthday bouquets, cakes and midnight surprises in Lahore. Send flowers to your loved ones with a card. Same-day and 12 AM delivery.",
    url: `${SITE_URL}/birthday-surprises`,
  }
};

export default async function BirthdaySurprisesPage() {
  const allProducts = await getSanityProducts();
  const birthdayProducts = allProducts.filter(p => 
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
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Birthday Surprises</span>
      </nav>

      {/* Hero Category Banner (Section 5 Standard) */}
      <section className="bg-[#0B0B0B] p-8 sm:p-12 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5 text-[#C6A15B]" />
            Midnight & Same-Day Surprises
          </span>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Birthday Flowers and Surprises in Lahore
          </h1>

          <p className="text-[#F8F3EA]/85 text-xs sm:text-sm leading-relaxed font-light">
            Birthdays are about the moment the door opens. We can time delivery for the morning, for lunch at the office, or for midnight when the date changes. Pick a bouquet, add a cake or balloons, write your message, and we handle the rest.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#C6A15B]" /> Same-day & 12 AM slots</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before it leaves</span>
            <a 
              href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20plan%20a%20birthday%20surprise."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#C6A15B] font-semibold hover:underline"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" /> Book Midnight Slot on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Easy ideas */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">Easy ideas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-[#2A2A2A]">
          <div className="p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2] space-y-1">
            <h3 className="font-bold text-[#0B0B0B] text-sm text-[#8B1E2D]">Sweet and simple</h3>
            <p>Two sunflowers with baby's breath.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2] space-y-1">
            <h3 className="font-bold text-[#0B0B0B] text-sm text-[#8B1E2D]">Romantic</h3>
            <p>24 red roses and a handwritten card.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2] space-y-1">
            <h3 className="font-bold text-[#0B0B0B] text-sm text-[#8B1E2D]">Big surprise</h3>
            <p>Cake, flower box, fairy lights and a midnight slot.</p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Showing birthday bouquets and surprise packages</span>
          <span className="text-[#8B1E2D] font-semibold">12 AM midnight delivery available</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {birthdayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Category FAQ */}
      <section className="bg-white p-8 sm:p-10 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#2A2A2A] leading-relaxed">
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Can you deliver at 12 AM on a birthday?</h3>
            <p>Yes. Our late-night slot runs 11:30 PM to 12:15 AM. Book by early evening.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Can I send a surprise to someone's workplace?</h3>
            <p>Yes, give us the office name, the person's name and a phone number for the guard or reception.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
