import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, BUSINESS, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Rose Prices in Lahore (2026) | Per-Stem & Bouquet Rate Guide",
  },
  description: "Rose prices in Lahore 2026 — single stem Rs. 100–500, 12-rose bouquet from Rs. 1,800, imported roses 2–3x local. Real rate table for per-stem, dozen & bulk roses with same-day delivery.",
  alternates: {
    canonical: `${SITE_URL}/blog/rose-prices-lahore-2026`,
  },
  openGraph: {
    title: "Rose Prices in Lahore (2026) — Per-Stem & Bouquet Rates",
    description: "Single rose Rs. 100–500, 12 roses from Rs. 1,800, 100-rose grand bouquets — real 2026 Lahore rose price guide.",
    url: `${SITE_URL}/blog/rose-prices-lahore-2026`,
    type: "article",
  }
};

const FAQS = [
  {
    q: "What is the price of one rose in Lahore in 2026?",
    a: "A single local (desi) rose stem costs Rs. 100–150 in Lahore, while an imported rose stem (Kenyan, Ecuadorian) costs Rs. 350–500. Prices rise around Valentine's Day, Eid and wedding season — ordering 2–3 days ahead locks in the normal rate."
  },
  {
    q: "How much does a 12-rose bouquet cost in Lahore?",
    a: "A hand-tied 12 red rose bouquet costs Rs. 1,800–2,800 with local roses, and Rs. 4,500–7,000 with imported roses. Our rose bouquets start at Rs. 1,180 — message 0310-4225974 on WhatsApp for today's exact rate."
  },
  {
    q: "Are imported roses worth the extra cost?",
    a: "Imported roses have bigger heads, longer stems and last 5–7 days vs 3–4 for local roses. For proposals, nikkah and milestone anniversaries they're worth it; for casual birthdays, fresh local roses look just as beautiful at a third of the price."
  },
  {
    q: "Do rose prices go up on Valentine's Day in Pakistan?",
    a: "Yes — Valentine's week (10–14 Feb) typically doubles rose prices across Lahore, and slots sell out. Book by 10 February for normal rates; we publish our Valentine's rose menu in late January on WhatsApp."
  },
  {
    q: "Can I get 100 roses delivered in Lahore the same day?",
    a: "Yes — 50 and 100-rose grand bouquets (Rs. 7,500–25,000) are available with 2–5 hour same-day delivery across DHA, Gulberg, Bahria Town and all major areas. For 100 imported roses, order a day ahead so we reserve the stems."
  }
];

const PRICE_ROWS = [
  { item: "Single local rose stem", price: "Rs. 100–150", note: "Desi gulab, fresh daily" },
  { item: "Single imported rose stem", price: "Rs. 350–500", note: "Kenyan / Ecuadorian, bigger head" },
  { item: "6 roses (hand-tied)", price: "Rs. 900–1,500", note: "Local roses, gift wrap" },
  { item: "12 roses (one dozen)", price: "Rs. 1,800–2,800", note: "Local; imported Rs. 4,500–7,000" },
  { item: "24 roses (two dozen)", price: "Rs. 3,500–5,500", note: "Local; imported Rs. 9,000–14,000" },
  { item: "50 roses (grand bouquet)", price: "Rs. 7,500–12,000", note: "Local; imported Rs. 18,000–28,000" },
  { item: "100 roses (luxury box/bouquet)", price: "Rs. 15,000–25,000", note: "Local; imported on request" },
];

export default function RosePricesPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Rose Prices in Lahore (2026)",
    description: "Per-stem and bouquet rose rates in Lahore 2026 — local vs imported price table.",
    author: { "@type": "Organization", name: "Lahore Bouquet Florist Team", url: `${SITE_URL}` },
    publisher: { "@type": "Organization", name: "Lahore Bouquet", url: `${SITE_URL}` },
    datePublished: "2026-10-06",
    dateModified: "2026-10-06",
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-10 bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B]">Home</Link><span>/</span>
        <Link href="/blog" className="hover:text-[#0B0B0B]">Blog</Link><span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Rose Prices Lahore</span>
      </nav>
      <header className="space-y-4">
        <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">Price Guide • October 2026</span>
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B0B0B] leading-tight">Rose Prices in Lahore (2026): Per-Stem & Bouquet Rate Guide</h1>
        <p className="text-sm text-[#777777]">By Lahore Bouquet Florist Team • Updated 6 October 2026 • 5 min read</p>
        <p className="text-sm sm:text-base leading-relaxed"><strong>Quick answer:</strong> In Lahore, a local rose stem costs <strong>Rs. 100–150</strong> and an imported stem <strong>Rs. 350–500</strong>. A 12-rose bouquet starts around <strong>Rs. 1,800</strong>. Rates below are 2026 market ranges — confirm today's exact price on WhatsApp <strong>{BUSINESS.phone.intl}</strong> before ordering.</p>
      </header>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">2026 Rose Price Table — Lahore</h2>
        <p className="text-sm leading-relaxed">Indicative market rates our florists see daily. Final price depends on the day's fresh stock, rose grade and wrapping — we always confirm the exact amount on WhatsApp with a photo before you pay.</p>
        <div className="overflow-x-auto rounded-2xl border border-[#E5DED2] bg-white">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[#8B1E2D] text-white text-left">
                <th className="p-4 font-bold">Roses</th>
                <th className="p-4 font-bold">Price range</th>
                <th className="p-4 font-bold hidden sm:table-cell">Notes</th>
              </tr>
            </thead>
            <tbody>
              {PRICE_ROWS.map((r, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-[#F8F3EA]"}>
                  <td className="p-4 font-semibold text-[#0B0B0B]">{r.item}</td>
                  <td className="p-4 text-[#8B1E2D] font-bold whitespace-nowrap">{r.price}</td>
                  <td className="p-4 text-[#777777] hidden sm:table-cell">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-[#777777]">Prices rise 50–100% during Valentine's week, Eid and peak wedding season (Nov–Feb). Book early for event dates.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Local vs Imported Roses — Which to Buy?</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]">
            <div className="font-bold text-sm">Local (Desi) Roses</div>
            <ul className="text-sm mt-2 space-y-1 list-disc list-inside leading-relaxed">
              <li>Rs. 100–150 per stem — best value</li>
              <li>Strong natural fragrance</li>
              <li>Lasts 3–4 days with fresh water</li>
              <li>Perfect for birthdays, casual gifting, daily decor</li>
            </ul>
            <Link href="/bouquets" className="text-xs text-[#8B1E2D] underline">Shop rose bouquets →</Link>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]">
            <div className="font-bold text-sm">Imported Roses</div>
            <ul className="text-sm mt-2 space-y-1 list-disc list-inside leading-relaxed">
              <li>Rs. 350–500 per stem — premium grade</li>
              <li>Bigger heads, longer stems, more colours</li>
              <li>Lasts 5–7 days</li>
              <li>Worth it for proposals, nikkah & milestone anniversaries</li>
            </ul>
            <Link href="/bouquets" className="text-xs text-[#8B1E2D] underline">Shop premium bouquets →</Link>
          </div>
        </div>
        <a href={whatsappLink("Hello Lahore Bouquet! What are today's rose prices? I want to order a rose bouquet in Lahore.")} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">Ask Today's Rose Price on WhatsApp</a>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <details key={i} className="p-5 rounded-2xl bg-white border border-[#E5DED2] group">
              <summary className="font-bold text-sm text-[#0B0B0B] cursor-pointer list-none flex justify-between items-center">{f.q}<span className="text-[#8B1E2D] group-open:rotate-45 transition-transform text-lg leading-none">+</span></summary>
              <p className="text-sm mt-2 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </article>
  );
}
