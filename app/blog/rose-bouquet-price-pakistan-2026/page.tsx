import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Rose Bouquet Price in Pakistan 2026 | Complete Guide",
  },
  description: "How much does a rose bouquet cost in Pakistan? Real 2026 prices — from Rs. 1,239 for local roses to imported Dutch rose rates, with buying tips.",
  alternates: {
    canonical: `${SITE_URL}/blog/rose-bouquet-price-pakistan-2026`,
  },
  openGraph: {
    title: "Rose Bouquet Price in Pakistan 2026 | Complete Guide",
    description: "Real rose bouquet prices in Pakistan 2026 — local vs imported, size guide, and where to buy fresh.",
    url: `${SITE_URL}/blog/rose-bouquet-price-pakistan-2026`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Rose bouquet price in Pakistan 2026 guide",
      },
    ],
  }
};

const FAQS = [
  {
    q: "How much does a rose bouquet cost in Pakistan?",
    a: "A fresh rose bouquet in Pakistan costs from Rs. 1,239 for a small local-rose bunch. Standard dozen-rose bouquets range Rs. 2,500–4,500, while premium imported Dutch rose arrangements of 50 stems go up to Rs. 12,000 or more."
  },
  {
    q: "What is the difference between local and imported rose prices?",
    a: "Local desi roses are fragrant and affordable — bouquets start around Rs. 1,239. Imported Dutch roses are larger, longer-lasting and come in more colours, but cost 2–3x more. For daily gifting, local roses offer the best value."
  },
  {
    q: "How many roses should I buy for a bouquet?",
    a: "A dozen (12) roses is the classic romantic gift. For birthdays, 15–25 mixed roses look generous. For proposals and anniversaries, 50–100 roses make a grand statement. More roses = higher price, so match the count to the occasion."
  },
  {
    q: "Do rose prices change on Valentine's Day in Pakistan?",
    a: "Yes — red rose prices typically rise 30–50% in the week before February 14 due to demand. Ordering early (by February 10) locks in normal rates and guarantees availability."
  },
  {
    q: "Where can I buy fresh rose bouquets online in Lahore?",
    a: "Lahore Bouquet delivers fresh rose bouquets across Lahore with same-day delivery in 2–5 hours. Every bouquet is photographed for your WhatsApp approval before dispatch. Order on WhatsApp at 0310-4225974."
  }
];

export default function RoseBouquetPriceBlogPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Rose Bouquet Price in Pakistan 2026 | Complete Guide",
    description: "Real 2026 rose bouquet prices in Pakistan — local vs imported rates, size guide and buying tips.",
    author: { "@type": "Organization", name: "Lahore Bouquet Florist Team", url: `${SITE_URL}` },
    publisher: { "@type": "Organization", name: "Lahore Bouquet", url: `${SITE_URL}` },
    datePublished: "2026-10-12",
    dateModified: "2026-10-12",
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
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2 mb-6">
        <Link href="/" className="hover:text-[#0B0B0B]">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-[#0B0B0B]">Blog</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Rose Bouquet Price in Pakistan 2026</span>
      </nav>

      <article className="space-y-6">
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B0B0B] leading-tight">
          Rose Bouquet Price in Pakistan 2026: Complete Guide
        </h1>

        <p className="text-sm text-[#777]">By Lahore Bouquet Florist Team • Updated October 2026</p>

        <p className="text-sm sm:text-base leading-relaxed">
          Wondering <strong>how much a rose bouquet costs in Pakistan</strong>? Prices vary widely — from a simple Rs. 1,239 hand-tied bunch of local desi roses to Rs. 12,000+ for grand imported Dutch rose arrangements. This guide breaks down real 2026 prices so you know exactly what to expect before you order.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B] pt-4">Rose Bouquet Price Table 2026</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#0B0B0B] text-white">
                <th className="p-3 text-left">Bouquet Type</th>
                <th className="p-3 text-left">Rose Count</th>
                <th className="p-3 text-left">Price Range</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E5DED2]">
                <td className="p-3">Small local rose bunch</td>
                <td className="p-3">6–10 stems</td>
                <td className="p-3 font-bold text-[#8B1E2D]">Rs. 1,239+</td>
              </tr>
              <tr className="border-b border-[#E5DED2] bg-white">
                <td className="p-3">Classic dozen roses</td>
                <td className="p-3">12 stems</td>
                <td className="p-3 font-bold text-[#8B1E2D]">Rs. 2,500–4,500</td>
              </tr>
              <tr className="border-b border-[#E5DED2]">
                <td className="p-3">Imported Dutch roses</td>
                <td className="p-3">12 stems</td>
                <td className="p-3 font-bold text-[#8B1E2D]">Rs. 5,000–7,000</td>
              </tr>
              <tr className="border-b border-[#E5DED2] bg-white">
                <td className="p-3">Premium 25-rose bouquet</td>
                <td className="p-3">25 stems</td>
                <td className="p-3 font-bold text-[#8B1E2D]">Rs. 6,000–9,000</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3">Grand 50–100 roses</td>
                <td className="p-3">50–100 stems</td>
                <td className="p-3 font-bold text-[#8B1E2D]">Rs. 12,000+</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs text-[#777] italic">
          Prices are indicative for Lahore 2026 and vary by season, rose variety and arrangement style. Contact us on WhatsApp (0310-4225974) for today's exact quote.
        </p>

        <p className="text-sm sm:text-base leading-relaxed">
          Shopping for more than roses? Compare the complete <Link href="/prices" className="text-[#8B1E2D] underline">flower bouquet price in Lahore</Link> — every bouquet type, décor package and gift combo in one list.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B] pt-4">Local vs Imported Roses: Which to Choose?</h2>

        <p className="text-sm sm:text-base leading-relaxed">
          <strong>Local desi roses</strong> are Pakistan's everyday favourite — intensely fragrant, vibrant red, and budget-friendly. A fresh local rose bouquet starts at just Rs. 1,239, making it perfect for birthdays, get-well wishes and casual gifting.
        </p>

        <p className="text-sm sm:text-base leading-relaxed">
          <strong>Imported Dutch roses</strong> are bred for size, stem length and vase life. They come in stunning colours — peach, white, pink, yellow and bi-colours — that local varieties can't match. Expect to pay 2–3x more, but the visual impact is unmatched for weddings, proposals and anniversaries.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B] pt-4">What Affects Rose Prices?</h2>

        <ul className="space-y-2 text-sm sm:text-base list-disc list-inside leading-relaxed">
          <li><strong>Season:</strong> Wedding season (October–February) pushes prices up 20–30%.</li>
          <li><strong>Valentine's Day:</strong> Red rose prices spike 30–50% in early February — order by Feb 10 to save.</li>
          <li><strong>Stem count:</strong> More roses = higher price, but per-stem cost drops in larger bouquets.</li>
          <li><strong>Add-ons:</strong> Wrapping, ribbons, cards and boxes add Rs. 200–1,000 to the base price.</li>
          <li><strong>Delivery:</strong> At Lahore Bouquet, delivery is free across Lahore — many competitors charge Rs. 300–500 extra.</li>
        </ul>

        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B] pt-4">Tips for Buying Roses Online</h2>

        <ul className="space-y-2 text-sm sm:text-base list-disc list-inside leading-relaxed">
          <li>Always ask for a <strong>real photo</strong> before dispatch — we send one on WhatsApp for every order.</li>
          <li>Check that roses are <strong>fresh-cut the same day</strong>, not cold-stored for days.</li>
          <li>For events, order <strong>1–2 days ahead</strong> to guarantee the colour and quantity you want.</li>
          <li>Compare <strong>total cost including delivery</strong> — free delivery saves Rs. 300–500 per order.</li>
        </ul>

        <div className="p-6 rounded-2xl bg-[#0B0B0B] text-white space-y-3 mt-8">
          <h3 className="font-playfair text-xl font-bold">Order Fresh Rose Bouquets in Lahore</h3>
          <p className="text-sm text-[#E5DED2]">Same-day delivery in 2–5 hours • Free delivery • Photo approval on WhatsApp</p>
          <Link href="/roses" className="inline-block px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">
            Browse Rose Bouquets →
          </Link>
        </div>

        <section className="space-y-4 pt-6">
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <details key={i} className="p-5 rounded-2xl bg-white border border-[#E5DED2] group">
                <summary className="font-bold text-sm text-[#0B0B0B] cursor-pointer list-none flex justify-between items-center gap-2">
                  {f.q}
                  <span className="text-[#8B1E2D] group-open:rotate-45 transition-transform text-lg leading-none shrink-0">+</span>
                </summary>
                <p className="text-sm mt-2 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="text-xs text-[#777777] pt-4">
          <p>Related: <Link href="/blog/flower-prices-lahore-2026" className="text-[#8B1E2D] underline">flower prices Lahore 2026</Link> • <Link href="/roses" className="text-[#8B1E2D] underline">rose bouquets</Link> • <Link href="/valentine-day-flowers-lahore" className="text-[#8B1E2D] underline">Valentine's flowers</Link></p>
        </section>
      </article>
    </main>
  );
}
