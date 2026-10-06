import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, BUSINESS, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Gajra Prices in Lahore (2026) | Fresh Jasmine Gajray & Floral Jewellery Rates",
  },
  description: "How much do gajray cost in Lahore? Fresh jasmine gajra pairs from Rs. 1,200, bridal sets from Rs. 2,500, floral jewellery from Rs. 3,500. 2026 price guide with ordering tips.",
  alternates: {
    canonical: `${SITE_URL}/blog/gajra-prices-lahore-2026`,
  },
  openGraph: {
    title: "Gajra Prices in Lahore — Fresh Gajray & Floral Jewellery Rates",
    description: "Gajra pairs from Rs. 1,200, bridal sets from Rs. 2,500. Real 2026 prices and ordering guide.",
    url: `${SITE_URL}/blog/gajra-prices-lahore-2026`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Gajra Prices in Lahore — Fresh Gajray & Floral Jewellery Rates",
      },
    ],
  }
};

const FAQS = [
  {
    q: "How much does a gajra cost in Lahore?",
    a: "A fresh jasmine gajra pair costs Rs. 1,200–1,800. Rose-and-jasmine mixed gajray are Rs. 1,500–2,200. Prices rise slightly in peak wedding season (November–February) when jasmine demand is highest."
  },
  {
    q: "How long do fresh gajray last?",
    a: "Fresh jasmine gajray stay fragrant for 12–24 hours. Keep them in a cool place or lightly refrigerated until wearing. We make gajray fresh on the event morning so they arrive at peak freshness."
  },
  {
    q: "What is included in a bridal gajra set?",
    a: "A bridal set typically includes 2 gajra pairs, a maang-tikka strand and hathphool (hand chains) — from Rs. 2,500. Full floral jewellery sets with earrings add Rs. 1,000–2,000."
  },
  {
    q: "Can I order gajray for the same day in Lahore?",
    a: "Yes. Order before 4 PM for same-day delivery within 2–5 hours. For 10+ pairs (family functions), order the evening before so we reserve enough fresh jasmine."
  },
  {
    q: "Do you make floral jewellery for mehndi?",
    a: "Yes — maang tikka, jhumka earrings, bracelets and hathphool in fresh jasmine, roses and baby's breath, from Rs. 3,500 per set. Share your outfit colors on WhatsApp and we match the flowers."
  }
];

const PRICES = [
  { item: "Jasmine gajra pair (classic)", price: "Rs. 1,200 – 1,800" },
  { item: "Rose + jasmine mixed gajra pair", price: "Rs. 1,500 – 2,200" },
  { item: "Bridal gajra set (2 pairs + tikka strand + hathphool)", price: "Rs. 2,500 – 4,000" },
  { item: "Floral jewellery set (tikka + earrings + bracelets)", price: "Rs. 3,500 – 6,000" },
  { item: "Single gajra (wrist)", price: "Rs. 700 – 1,000" },
  { item: "Bulk gajray (10+ pairs, mehndi/daawat)", price: "Rs. 1,000/pair onwards" },
];

export default function GajraPricesPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Gajra Prices in Lahore (2026)",
    description: "Real 2026 prices for fresh gajray and floral jewellery in Lahore, with ordering tips.",
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
        <span className="text-[#8B1E2D] font-semibold">Gajra Prices 2026</span>
      </nav>
      <header className="space-y-4">
        <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">Price Guide • October 2026</span>
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B0B0B] leading-tight">Gajra Prices in Lahore (2026): Fresh Gajray & Floral Jewellery Rates</h1>
        <p className="text-sm text-[#777777]">By Lahore Bouquet Florist Team • Updated 6 October 2026 • 4 min read</p>
        <p className="text-sm sm:text-base leading-relaxed"><strong>Quick answer:</strong> Fresh jasmine gajra pairs cost <strong>Rs. 1,200–1,800</strong> in Lahore, bridal sets from <strong>Rs. 2,500</strong>, floral jewellery from <strong>Rs. 3,500</strong>. Order on WhatsApp <strong>{BUSINESS.phone.intl}</strong> — made fresh on your event morning, delivered in 2–5 hours.</p>
      </header>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">2026 Gajra Price List</h2>
        <div className="rounded-2xl overflow-hidden border border-[#E5DED2]">
          {PRICES.map((p, i) => (
            <div key={i} className={`flex justify-between items-center px-5 py-3.5 text-sm ${i % 2 === 0 ? "bg-white" : "bg-[#F8F3EA]"}`}>
              <span className="text-[#2A2A2A]">{p.item}</span>
              <span className="font-bold text-[#8B1E2D] whitespace-nowrap ml-4">{p.price}</span>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#777]">Prices are for fresh, same-day-made gajray delivered across Lahore. Wedding-season (Nov–Feb) rates may be 10–15% higher.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">What Affects Gajra Prices?</h2>
        <ul className="space-y-2 text-sm list-disc list-inside leading-relaxed">
          <li><strong>Jasmine season:</strong> summer jasmine is abundant and cheaper; winter jasmine costs more.</li>
          <li><strong>Rose additions:</strong> mixed rose-jasmine gajray cost more than pure jasmine.</li>
          <li><strong>Bridal extras:</strong> tikka strands, hathphool and matching earrings add Rs. 1,000–2,000.</li>
          <li><strong>Bulk orders:</strong> 10+ pairs for mehendis get per-pair discounts — ask on WhatsApp.</li>
        </ul>
        <p className="text-sm leading-relaxed">Browse the <Link href="/collections/fresh-flower-gajray" className="text-[#8B1E2D] underline">fresh gajray collection</Link>, pair them with a <Link href="/bouquets" className="text-[#8B1E2D] underline">fresh flower bouquet</Link> for the complete mehndi look, or read our <Link href="/blog/nikkah-flowers-guide-lahore" className="text-[#8B1E2D] underline">nikkah flower guide</Link> for full wedding flower planning.</p>
        <a href={whatsappLink("Hello Lahore Bouquet! I want to order fresh gajray. Please share today's rates.")} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">Order Fresh Gajray on WhatsApp</a>
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
