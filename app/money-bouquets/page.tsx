import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ALL_PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Banknote, Truck, Camera, MessageCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Money Bouquet in Lahore | Custom Cash Gift Bouquets",
  },
  description: "Custom money bouquets in Lahore made with real PKR notes and fresh roses. Perfect for weddings, Eid and birthdays. Set your own budget.",
  openGraph: {
    title: "Money Bouquet in Lahore | Custom Cash Gift Bouquets",
    description: "Custom money bouquets in Lahore made with real PKR notes and fresh roses. Perfect for weddings, Eid and birthdays. Set your own budget.",
  }
};

export default function MoneyBouquetsPage() {
  const moneyProducts = ALL_PRODUCTS.filter(p => p.category === "Money Bouquets");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you supply the cash or do I?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You pay for the notes as part of the order, and we buy fresh crisp notes for you. Or you can transfer the cash amount directly."
        }
      },
      {
        "@type": "Question",
        name: "Can I ask for new notes only?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we use fresh, uncreased notes for our money bouquets."
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
        <span className="text-[#25D366] font-semibold">Money Bouquets</span>
      </nav>

      {/* Hero Category Banner */}
      <section className="bg-gradient-to-r from-[#121B14] via-[#1A261E] to-[#121B14] p-8 sm:p-12 rounded-2xl border border-[#25D366]/30 shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40 text-xs font-bold uppercase tracking-wider">
            <Banknote className="w-3.5 h-3.5" />
            Custom Currency Artistry
          </span>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Money Bouquets in Lahore
          </h1>

          <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-light">
            A money bouquet lets you give cash without handing over an envelope. We fold real notes by hand into a fan or flower shape and add fresh red roses. You choose the amount and the note denominations, whether Rs. 100, 500, 1,000 or 5,000.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#E11D48]" /> Delivery in 2 to 5 hours</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#25D366]" /> Photo on WhatsApp before it leaves</span>
            <a 
              href="https://wa.me/923001234567?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20customize%20a%20money%20bouquet."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] font-semibold hover:underline"
            >
              <MessageCircle className="w-4 h-4" /> Customize on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Popular For & How It Works */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#17171E] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-3">
          <h2 className="font-playfair text-xl font-bold text-white">Popular for</h2>
          <p className="text-xs text-white/70 leading-relaxed">
            Weddings and salami, Eid, birthdays, graduations, a first salary, and new-baby visits.
          </p>
        </div>

        <div className="bg-[#17171E] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-3">
          <h2 className="font-playfair text-xl font-bold text-white">How it works</h2>
          <ol className="space-y-1.5 text-xs text-white/70 list-decimal list-inside">
            <li>Tell us your budget for the notes.</li>
            <li>We add the design and roses. The bouquet starts at Rs. 4,500 for the design, roses and wrap.</li>
            <li>You approve a photo on WhatsApp.</li>
            <li>We deliver across Lahore.</li>
          </ol>
        </div>
      </section>

      {/* Product Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>Showing custom money bouquet arrangements</span>
          <span className="text-[#25D366]">Real PKR notes with fresh roses</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {moneyProducts.map((product) => (
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
            <h3 className="font-semibold text-white text-sm">Do you supply the cash or do I?</h3>
            <p>You pay for the notes as part of the order, and we buy fresh crisp notes for you. Or you can transfer the cash amount directly.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#121217] border border-white/5">
            <h3 className="font-semibold text-white text-sm">Can I ask for new notes only?</h3>
            <p>Yes, we use fresh, uncreased notes for our money bouquets.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
