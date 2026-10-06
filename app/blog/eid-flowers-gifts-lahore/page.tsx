import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, BUSINESS, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Eid Flowers & Gifts in Lahore: Eid-ul-Fitr & Eid-ul-Adha Guide (2026)",
  },
  description: "Eid flowers & gifts in Lahore — bouquets, sweet boxes & money bouquets from Rs. 1,180. Order before the chand raat rush for Eid-ul-Fitr & Eid-ul-Adha delivery.",
  alternates: {
    canonical: `${SITE_URL}/blog/eid-flowers-gifts-lahore`,
  },
  openGraph: {
    title: "Eid Flowers & Gifts in Lahore — Eid-ul-Fitr & Eid-ul-Adha Guide",
    description: "Bouquets, sweet boxes & money bouquets from Rs. 1,180. Beat the chand raat rush — order Eid gifts early.",
    url: `${SITE_URL}/blog/eid-flowers-gifts-lahore`,
    type: "article",
  }
};

const FAQS = [
  {
    q: "Is it common to send flowers on Eid in Pakistan?",
    a: "Yes, and it's growing every year. Fresh bouquets are sent to parents, in-laws, hosts and loved ones on both Eids — often paired with mithai or sweet boxes. Flowers on the Eid table have become a lovely modern tradition in Lahore homes."
  },
  {
    q: "What is a money bouquet, and is it good for Eid?",
    a: "A money bouquet (Eidi bouquet) arranges cash notes beautifully among fresh flowers — it's the most requested Eid gift for youngsters. Share the notes with us or the amount, and we'll craft it fresh. Order 1–2 days before Eid as they take preparation time."
  },
  {
    q: "When should I order Eid flowers to beat the rush?",
    a: "Order before chand raat. The last two days before Eid are our busiest of the year and delivery slots fill completely. Ordering 3–4 days before Eid guarantees your preferred day and time window."
  },
  {
    q: "Do you deliver on Eid day itself?",
    a: "Yes, we deliver on all three days of Eid across DHA, Gulberg, Model Town, Johar Town, Bahria Town, Cantt, Wapda Town and Askari — but Eid-day slots are limited and priced at peak. Booking before chand raat is strongly recommended."
  },
  {
    q: "Can I send Eid gifts to Lahore from abroad?",
    a: "Absolutely — Eid is one of our biggest occasions for overseas orders from the UK, USA and UAE. Pay by international card, and we'll deliver your Eid bouquet or money bouquet with photo proof on WhatsApp."
  }
];

export default function EidFlowersGiftsPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Eid Flowers & Gifts in Lahore (2026)",
    description: "Eid-ul-Fitr and Eid-ul-Adha flower gifting guide — bouquets, money bouquets, delivery timing and chand raat rush tips.",
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
        <span className="text-[#8B1E2D] font-semibold">Eid Flowers & Gifts</span>
      </nav>
      <header className="space-y-4">
        <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">Occasions Guide • October 2026</span>
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B0B0B] leading-tight">Eid Flowers & Gifts in Lahore: Eid-ul-Fitr & Eid-ul-Adha Guide (2026)</h1>
        <p className="text-sm text-[#777777]">By Lahore Bouquet Florist Team • Updated 6 October 2026 • 5 min read</p>
        <p className="text-sm sm:text-base leading-relaxed"><strong>Quick answer:</strong> Eid bouquets start at <strong>Rs. 1,180</strong> — fresh flowers, money bouquets and sweet combos for both Eids. <strong>Order before chand raat</strong> to beat the year's biggest rush. WhatsApp <strong>{BUSINESS.phone.intl}</strong> to book.</p>
      </header>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Popular Eid Gift Ideas</h2>
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]"><div className="font-bold text-sm">Fresh Eid Bouquet</div><p className="text-sm mt-1">Bright festive bouquets for parents, in-laws & hosts. From Rs. 1,180.</p><Link href="/bouquets" className="text-xs text-[#8B1E2D] underline">Shop bouquets →</Link></div>
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]"><div className="font-bold text-sm">Money (Eidi) Bouquet</div><p className="text-sm mt-1">Cash notes arranged with fresh flowers — the most requested Eid gift. Order 1–2 days early.</p><Link href="/money-bouquets" className="text-xs text-[#8B1E2D] underline">Shop money bouquets →</Link></div>
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]"><div className="font-bold text-sm">Eid Home Garlands</div><p className="text-sm mt-1">Marigold & rose garlands to welcome guests on Eid morning. From Rs. 999.</p><Link href="/garlands-lahore" className="text-xs text-[#8B1E2D] underline">Shop garlands →</Link></div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Eid Delivery Timing Tips</h2>
        <ul className="space-y-2 text-sm list-disc list-inside leading-relaxed">
          <li><strong>Order 3–4 days before Eid</strong> — chand raat and the day before are fully booked every year.</li>
          <li><strong>Morning delivery on Eid day</strong> — flowers arrive fresh before guests come; limited Eid-day slots available.</li>
          <li><strong>Pair with mithai</strong> — bouquet + sweet box is the classic Lahore Eid gift combo.</li>
          <li><strong>Money bouquets need prep time</strong> — confirm your Eidi bouquet at least a day before delivery.</li>
        </ul>
        <a href={whatsappLink("Hello Lahore Bouquet! I want to order Eid flowers and gifts for delivery in Lahore.")} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">Order Eid Flowers & Gifts</a>
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
