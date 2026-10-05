import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../components/ProductCard";
import { Banknote, Truck, Camera, MessageCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Money Bouquet in Lahore | Custom Cash Gift Bouquets",
  },
  description: "Custom money bouquets in Lahore made with real PKR notes and fresh roses. Perfect for weddings, Eid and birthdays. Set your own budget.",
  alternates: {
    canonical: "https://lahorebouquet.com/money-bouquets",
  },
  openGraph: {
    title: "Money Bouquet in Lahore | Custom Cash Gift Bouquets",
    description: "Custom money bouquets in Lahore made with real PKR notes and fresh roses. Perfect for weddings, Eid and birthdays. Set your own budget.",
    url: "https://lahorebouquet.com/money-bouquets",
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
  },
};

export default async function MoneyBouquetsPage() {
  const allProducts = await getSanityProducts();
  const moneyProducts = allProducts.filter(p => p.category === "Money Bouquets");

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://lahorebouquet.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Bouquets",
        item: "https://lahorebouquet.com/bouquets",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Money Bouquets",
        item: "https://lahorebouquet.com/money-bouquets",
      },
    ],
  };

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
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/bouquets" className="hover:text-[#0B0B0B] transition-colors">Bouquets</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Money Bouquets</span>
      </nav>

      {/* Hero Category Banner (Section 5 Standard) */}
      <section className="bg-[#0B0B0B] p-8 sm:p-12 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
            <Banknote className="w-3.5 h-3.5 text-[#C6A15B]" />
            Custom Currency Artistry
          </span>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Money Bouquets in Lahore
          </h1>

          <p className="text-[#F8F3EA]/85 text-xs sm:text-sm leading-relaxed font-light">
            A money bouquet lets you give cash without handing over an envelope. We fold real notes by hand into a fan or flower shape and add fresh red roses. You choose the amount and the note denominations, whether Rs. 100, 500, 1,000 or 5,000.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#C6A15B]" /> Delivery in 2 to 5 hours</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before it leaves</span>
            <a 
              href="https://wa.me/923094895080?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20customize%20a%20money%20bouquet."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#C6A15B] font-semibold hover:underline"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" /> Customize on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Popular For & How It Works */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-3">
          <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">Popular for</h2>
          <p className="text-xs text-[#2A2A2A] leading-relaxed">
            Weddings and salami, Eid, birthdays, graduations, a first salary, and new-baby visits.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-3">
          <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">How it works</h2>
          <ol className="space-y-1.5 text-xs text-[#2A2A2A] list-decimal list-inside">
            <li>Tell us your budget for the notes.</li>
            <li>We add the design and roses. The bouquet starts at Rs. 4,500 for the design, roses and wrap.</li>
            <li>You approve a photo on WhatsApp.</li>
            <li>We deliver across Lahore.</li>
          </ol>
        </div>
      </section>

      {/* Product Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Showing custom money bouquet arrangements</span>
          <span className="text-[#8B1E2D] font-semibold">Real PKR notes with fresh roses</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {moneyProducts.map((product) => (
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
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Do you supply the cash or do I?</h3>
            <p>You pay for the notes as part of the order, and we buy fresh crisp notes for you. Or you can transfer the cash amount directly.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Can I ask for new notes only?</h3>
            <p>Yes, we use fresh, uncreased notes for our money bouquets.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
