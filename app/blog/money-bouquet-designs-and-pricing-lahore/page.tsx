import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Banknote, Calendar, Clock, ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Money Bouquets in Lahore: Denominations, Designs & Pricing",
  },
  description: "Complete guide to custom cash flower bouquets in Lahore. Learn about banknote denominations, safe floral pinning, pricing breakdowns, and security verification.",
  alternates: {
    canonical: "https://lahorebouquet.com/blog/money-bouquet-designs-and-pricing-lahore",
  },
  openGraph: {
    title: "Money Bouquets in Lahore: Denominations, Designs & Pricing",
    description: "Complete guide to custom cash flower bouquets in Lahore. Learn about banknote denominations, safe floral pinning, pricing breakdowns, and security verification.",
    url: "https://lahorebouquet.com/blog/money-bouquet-designs-and-pricing-lahore",
    type: "article",
  }
};

export default function MoneyBouquetGuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Money Bouquets in Lahore: Denominations, Designs & Pricing Guide",
    description: "Guide to ordering custom money bouquets in Lahore with cash safety protocols.",
    author: {
      "@type": "Organization",
      name: "Lahore Bouquet Florist Team",
      url: "https://lahorebouquet.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Lahore Bouquet",
      url: "https://lahorebouquet.com",
    },
    datePublished: "2026-10-02",
    dateModified: "2026-10-03",
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-white/50 flex items-center gap-2">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-[#E11D48] font-semibold">Money Bouquets Guide</span>
      </nav>

      {/* Header */}
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-xs text-white/60">
          <span className="px-3 py-1 rounded-full bg-[#E11D48]/20 text-[#F43F5E] font-bold uppercase tracking-wider text-[11px]">
            Gifting Trends & Cash Bouquets
          </span>
          <span>•</span>
          <span>October 2026</span>
          <span>•</span>
          <span>4 min read</span>
        </div>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Money Bouquets in Lahore: Denominations, Designs & Pricing Guide
        </h1>

        <p className="text-white/80 text-sm sm:text-base leading-relaxed">
          Money bouquets (cash flower arrangements) have exploded in popularity across Lahore for birthdays, Nikah ceremonies, graduations, and wedding shadi celebrations. Combining crisp State Bank currency with fresh red roses or gypsum, they offer both aesthetic beauty and undeniable practical value.
        </p>
      </header>

      {/* Content */}
      <div className="space-y-8 text-white/80 text-sm sm:text-base leading-relaxed border-t border-b border-white/10 py-8">
        <section className="space-y-3">
          <h2 className="font-playfair text-2xl font-bold text-white">How Banknotes Are Safely Handled (No Damage Guarantee)</h2>
          <p>
            A common customer concern is whether cash notes are punctured or torn during assembly. Professional florists at Lahore Bouquet fold each note into a protective clear cellophane sleeve before rolling it into a petal cone. <strong>Zero glue, staples, or tape touch the physical currency</strong>, ensuring every note can be removed and spent safely.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-playfair text-2xl font-bold text-white">Popular Currency Denominations & Layouts</h2>
          <ul className="list-disc list-inside space-y-2 pl-2 text-white/90">
            <li><strong>Rs. 100 Notes:</strong> Excellent for voluminous, dense arrangements (50 to 100 notes) creating an opulent circular rosette.</li>
            <li><strong>Rs. 500 Notes:</strong> The most popular wedding and birthday choice, striking a balance between note volume and financial generosity.</li>
            <li><strong>Rs. 1,000 & Rs. 5,000 Notes:</strong> Favored for high-profile Nikah salami, corporate executive retirement gifts, and milestone birthdays.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-playfair text-2xl font-bold text-white">Understanding the Cost Structure</h2>
          <p>
            When ordering a money bouquet in Lahore, the price comprises two transparent components:
          </p>
          <ol className="list-decimal list-inside space-y-2 pl-2 text-white/90">
            <li><strong>The Total Cash Value:</strong> The exact monetary sum of banknotes included in the arrangement.</li>
            <li><strong>The Florist Crafting & Materials Fee:</strong> Typically ranges from PKR 2,000 to PKR 4,500 depending on wrapping paper quality, stem count of accompanying imported roses, and delivery van security.</li>
          </ol>
        </section>

        <section className="space-y-3">
          <h2 className="font-playfair text-2xl font-bold text-white">Verification & Delivery Security Protocol</h2>
          <p>
            Because cash bouquets involve significant monetary value, we photograph the completed bouquet and count verification on WhatsApp before the order leaves our shop. For high-value orders above PKR 50,000, specialized couriers provide hand-to-hand delivery with recipient signature and optional photo confirmation.
          </p>
        </section>
      </div>

      {/* Bottom CTA */}
      <div className="p-6 rounded-2xl bg-[#17171E] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="font-playfair text-xl font-bold text-white">Want to Customize a Cash Bouquet?</h3>
          <p className="text-xs text-white/70">
            Speak directly with our MM Alam Road florists to choose your exact note denomination and floral styling.
          </p>
        </div>
        <Link 
          href="/collections/money-bouquets" 
          className="px-6 py-3 rounded-xl bg-[#E11D48] hover:bg-[#F43F5E] text-white text-xs font-bold whitespace-nowrap transition-all shadow-lg shadow-[#E11D48]/30"
        >
          View Money Bouquets →
        </Link>
      </div>
    </article>
  );
}
