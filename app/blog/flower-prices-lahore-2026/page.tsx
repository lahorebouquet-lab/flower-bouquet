import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Prices in Lahore 2026 | Rose, Sunflower & Money Bouquets",
  },
  description: "Complete 2026 flower price guide for Lahore. Rose bouquets from Rs. 1,180, sunflower bunches, lily prices, money bouquet costs and wedding décor packages — updated October 2026.",
  alternates: {
    canonical: `${SITE_URL}/blog/flower-prices-lahore-2026`,
  },
  openGraph: {
    title: "Flower Prices in Lahore 2026 | Rose, Sunflower & Money Bouquets",
    description: "Rose bouquets from Rs. 1,180, sunflowers, lilies, money bouquets and décor — Lahore's 2026 flower price table.",
    url: `${SITE_URL}/blog/flower-prices-lahore-2026`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Flower Prices in Lahore 2026: Complete Price Guide",
      },
    ],
  }
};

const FAQS = [
  {
    q: "How much does a rose bouquet cost in Lahore?",
    a: "A fresh rose bouquet in Lahore costs from Rs. 1,180 for a small hand-tied bunch. A dozen imported Dutch roses typically costs Rs. 2,500–Rs. 4,500, while premium 50-rose arrangements go up to Rs. 12,000+."
  },
  {
    q: "What is the price of a money bouquet in Lahore?",
    a: "Money bouquets in Lahore start from around Rs. 2,500 plus the cash value you choose to include. The final price depends on the number of banknotes, denominations and the fresh roses added around them."
  },
  {
    q: "Why do flower prices change in Lahore?",
    a: "Prices move with the season, wedding demand (October–February is peak), imported vs local stems, and special days like Valentine's Day and Eid when demand spikes across Lahore."
  }
];

export default function FlowerPricesBlogPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Flower Prices in Lahore 2026 | Rose, Sunflower & Money Bouquets",
    description: "Complete 2026 flower price guide for Lahore with real price tables for roses, sunflowers, lilies, money bouquets and wedding décor.",
    author: { "@type": "Organization", name: "Lahore Bouquet Florist Team", url: `${SITE_URL}` },
    publisher: { "@type": "Organization", name: "Lahore Bouquet", url: `${SITE_URL}` },
    datePublished: "2026-10-06",
    dateModified: "2026-10-06",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-10 bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B]">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-[#0B0B0B]">Blog</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Flower Prices Lahore 2026</span>
      </nav>

      <header className="space-y-4">
        <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">Price Guide • October 2026</span>
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B0B0B] leading-tight">
          Flower Prices in Lahore 2026: What Bouquets Really Cost
        </h1>
        <p className="text-sm text-[#777777]">By Lahore Bouquet Florist Team • Updated 6 October 2026 • 5 min read</p>
        <p className="text-sm sm:text-base leading-relaxed">
          <strong>Quick answer:</strong> In Lahore, a fresh flower bouquet costs from <strong>Rs. 1,180</strong>. Imported rose bouquets run Rs. 2,500–Rs. 12,000, sunflowers Rs. 1,500–Rs. 5,000, and money bouquets from Rs. 2,500 plus cash value. Prices below are what Lahore Bouquet actually charges in October 2026.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">2026 Price Table</h2>
        <div className="overflow-x-auto rounded-2xl border border-[#E5DED2]">
          <table className="w-full text-sm">
            <thead className="bg-[#0B0B0B] text-white">
              <tr>
                <th className="text-left px-4 py-3 font-semibold">Bouquet Type</th>
                <th className="text-left px-4 py-3 font-semibold">Price Range (PKR)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-[#E5DED2]">
              <tr><td className="px-4 py-3">Small mixed bouquet</td><td className="px-4 py-3 font-semibold">Rs. 1,180 – Rs. 2,000</td></tr>
              <tr><td className="px-4 py-3">Imported Dutch rose bouquet (12 roses)</td><td className="px-4 py-3 font-semibold">Rs. 2,500 – Rs. 4,500</td></tr>
              <tr><td className="px-4 py-3">Premium rose bouquet (24–50 roses)</td><td className="px-4 py-3 font-semibold">Rs. 5,000 – Rs. 12,000</td></tr>
              <tr><td className="px-4 py-3">Sunflower bouquet</td><td className="px-4 py-3 font-semibold">Rs. 1,500 – Rs. 5,000</td></tr>
              <tr><td className="px-4 py-3">Oriental lily bouquet</td><td className="px-4 py-3 font-semibold">Rs. 2,800 – Rs. 7,500</td></tr>
              <tr><td className="px-4 py-3">Tulip bouquet (seasonal)</td><td className="px-4 py-3 font-semibold">Rs. 3,500 – Rs. 9,000</td></tr>
              <tr><td className="px-4 py-3">Money bouquet (design fee, cash extra)</td><td className="px-4 py-3 font-semibold">Rs. 2,500 + cash value</td></tr>
              <tr><td className="px-4 py-3">Crochet / dried keepsake bouquet</td><td className="px-4 py-3 font-semibold">Rs. 1,800 – Rs. 4,500</td></tr>
              <tr><td className="px-4 py-3">Bridal car décor</td><td className="px-4 py-3 font-semibold">Rs. 8,000 – Rs. 25,000</td></tr>
              <tr><td className="px-4 py-3">Bridal room / masehri décor</td><td className="px-4 py-3 font-semibold">Rs. 15,000 – Rs. 35,000</td></tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#777777]">Prices include same-day delivery across Lahore. Valentine's Day and Eid weeks carry a 15–25% seasonal surcharge.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">What Affects the Price?</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
          <li><strong>Imported vs local stems:</strong> Dutch roses cost more than desi gulab, but the heads are bigger and they last 5–7 days.</li>
          <li><strong>Season:</strong> October–February (shaadi season) is peak demand in Lahore; tulips are only available in winter.</li>
          <li><strong>Size:</strong> A 50-rose "gulab ka guldasta" costs roughly 4x a 12-rose one — stems, wrapping and labour all scale.</li>
          <li><strong>Occasion days:</strong> Order 2–3 days before Valentine's Day or Mother's Day for normal prices.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Shop by Budget</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <Link href="/roses" className="p-5 rounded-2xl bg-white border border-[#E5DED2] hover:border-[#C6A15B] transition-colors">
            <div className="font-bold text-[#0B0B0B]">Rose Bouquets</div>
            <div className="text-xs text-[#777777]">from Rs. 1,180</div>
          </Link>
          <Link href="/money-bouquets" className="p-5 rounded-2xl bg-white border border-[#E5DED2] hover:border-[#C6A15B] transition-colors">
            <div className="font-bold text-[#0B0B0B]">Money Bouquets</div>
            <div className="text-xs text-[#777777]">from Rs. 2,500</div>
          </Link>
          <Link href="/wedding-decor" className="p-5 rounded-2xl bg-white border border-[#E5DED2] hover:border-[#C6A15B] transition-colors">
            <div className="font-bold text-[#0B0B0B]">Wedding Décor</div>
            <div className="text-xs text-[#777777]">packages from Rs. 8,000</div>
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Frequently Asked Questions</h2>
        {FAQS.map((f, i) => (
          <div key={i} className="p-5 rounded-2xl bg-white border border-[#E5DED2] space-y-2">
            <h3 className="font-bold text-[#0B0B0B] text-sm">{f.q}</h3>
            <p className="text-sm text-[#2A2A2A] leading-relaxed">{f.a}</p>
          </div>
        ))}
      </section>

      <p className="text-sm text-[#777777]">
        Questions about a specific bouquet? WhatsApp us at {BUSINESS.phone.intl} — we reply within minutes, 9 AM to 1 AM daily.
      </p>
    </article>
  );
}
