import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, BUSINESS, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Valentine's Day Flowers in Lahore: Roses, Prices & Midnight Delivery (2026)",
  },
  description: "Valentine's Day flowers in Lahore — red rose bouquets from Rs. 1,180, midnight delivery 11:30 PM–12:15 AM, teddy & chocolate combos. Book 3–5 days early for 14 Feb.",
  alternates: {
    canonical: `${SITE_URL}/blog/valentines-day-flowers-lahore`,
  },
  openGraph: {
    title: "Valentine's Day Flowers in Lahore — Roses, Prices & Midnight Delivery",
    description: "Red rose bouquets from Rs. 1,180 with midnight surprise delivery across Lahore. Book before 14 Feb slots fill.",
    url: `${SITE_URL}/blog/valentines-day-flowers-lahore`,
    type: "article",
  }
};

const FAQS = [
  {
    q: "How much do Valentine's Day roses cost in Lahore?",
    a: "Valentine's rose bouquets start at Rs. 1,180 for a simple hand-tied bunch. A dozen red roses is Rs. 2,500–4,500, 24 roses Rs. 4,800–7,500, and grand 50–100 rose arrangements go up to Rs. 12,000–25,000. Prices rise in the final 2–3 days before 14 February, so booking early saves money."
  },
  {
    q: "How early should I order flowers for 14 February in Lahore?",
    a: "Book 3–5 days before Valentine's Day. Same-day slots on 13–14 February fill up fast and evening delivery windows close first. Midnight delivery slots (11:30 PM–12:15 AM) for the night of 13–14 Feb are the first to sell out — reserve yours early."
  },
  {
    q: "Do you offer midnight flower delivery on Valentine's Day?",
    a: "Yes — our midnight surprise service runs 11:30 PM to 12:15 AM. The rider arrives with your roses, teddy bear and a handwritten card right at midnight. Book the midnight slot before 8:00 PM on 13 February; a Rs. 500 midnight surcharge applies."
  },
  {
    q: "What goes best with red roses for Valentine's Day?",
    a: "The most-loved combos are: red roses + teddy bear, red roses + imported chocolates, and roses + birthday-style cake for couples celebrating both occasions. Balloon bunches add a festive touch for surprise setups at home."
  },
  {
    q: "Can I order Valentine's flowers from abroad for someone in Lahore?",
    a: "Absolutely — a large share of our Valentine's orders come from the UK, USA and UAE. Pay by international card, and we deliver with photo approval on WhatsApp before dispatch, so you see exactly what your loved one receives."
  }
];

export default function ValentinesDayFlowersPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Valentine's Day Flowers in Lahore (2026)",
    description: "Red rose prices, booking timelines, midnight delivery and romantic combos for 14 February in Lahore.",
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
        <span className="text-[#8B1E2D] font-semibold">Valentine's Day Flowers</span>
      </nav>
      <header className="space-y-4">
        <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">Occasions Guide • October 2026</span>
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B0B0B] leading-tight">Valentine's Day Flowers in Lahore: Roses, Prices & Midnight Delivery (2026)</h1>
        <p className="text-sm text-[#777777]">By Lahore Bouquet Florist Team • Updated 6 October 2026 • 5 min read</p>
        <p className="text-sm sm:text-base leading-relaxed"><strong>Quick answer:</strong> Red roses rule Valentine's Day — bouquets start at <strong>Rs. 1,180</strong>. Book <strong>3–5 days before 14 February</strong> because evening and midnight slots sell out. We deliver across <strong>DHA, Gulberg, Model Town, Johar Town, Bahria Town, Cantt, Wapda Town & Askari</strong> — order on WhatsApp <strong>{BUSINESS.phone.intl}</strong>.</p>
      </header>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Valentine's Rose Bouquets & Prices</h2>
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]"><div className="font-bold text-sm">Classic Red Rose Bouquet</div><p className="text-sm mt-1">Hand-tied red roses with baby's breath. From Rs. 1,180.</p><Link href="/bouquets" className="text-xs text-[#8B1E2D] underline">Shop bouquets →</Link></div>
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]"><div className="font-bold text-sm">Dozen & 24-Rose Bunches</div><p className="text-sm mt-1">The Valentine's standard. Dozen Rs. 2,500–4,500; 24 roses Rs. 4,800–7,500.</p><Link href="/bouquets" className="text-xs text-[#8B1E2D] underline">Shop rose bouquets →</Link></div>
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]"><div className="font-bold text-sm">Grand 50–100 Roses</div><p className="text-sm mt-1">The statement gesture. Rs. 12,000–25,000 with premium wrapping.</p><Link href="/bouquets" className="text-xs text-[#8B1E2D] underline">Shop grand bouquets →</Link></div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Make It a Midnight Surprise</h2>
        <ul className="space-y-2 text-sm list-disc list-inside leading-relaxed">
          <li><strong>Midnight delivery 11:30 PM–12:15 AM</strong> — our rider arrives at the stroke of midnight with your roses and a handwritten card.</li>
          <li><strong>Add a teddy bear</strong> — small from Rs. 1,499, or a 6-feet giant for the ultimate surprise. <Link href="/teddy-bears-lahore" className="text-[#8B1E2D] underline">See teddy bears →</Link></li>
          <li><strong>Add helium balloons</strong> — a festive bunch floating over the roses makes the midnight moment unforgettable. <Link href="/helium-balloons-lahore" className="text-[#8B1E2D] underline">See balloons →</Link></li>
          <li><strong>Photo approval first</strong> — we send you a real photo of your bouquet on WhatsApp before the rider leaves.</li>
        </ul>
        <a href={whatsappLink("Hello Lahore Bouquet! I want to book Valentine's Day flowers for 14 February.")} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">Book Valentine's Flowers</a>
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
