import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, BUSINESS, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Mother's Day Flowers in Lahore: Best Bouquets for Ami (2026)",
  },
  description: "Best Mother's Day flowers in Lahore — pink roses, lilies, carnations & pastel bouquets from Rs. 1,180 with handwritten card and same-day delivery.",
  alternates: {
    canonical: `${SITE_URL}/blog/mothers-day-flowers-lahore`,
  },
  openGraph: {
    title: "Mother's Day Flowers in Lahore — Best Bouquets for Ami",
    description: "Pink roses, lilies & pastel bouquets from Rs. 1,180, delivered same-day with a free handwritten card.",
    url: `${SITE_URL}/blog/mothers-day-flowers-lahore`,
    type: "article",
  }
};

const FAQS = [
  {
    q: "What are the best flowers for Mother's Day in Lahore?",
    a: "Pink roses, white & pink lilies, carnations and soft pastel mixed bouquets are the most loved Mother's Day flowers. They feel warm and gentle — avoid dark, dramatic colours for Ami and go for soft, cheerful tones."
  },
  {
    q: "How much does a Mother's Day bouquet cost in Lahore?",
    a: "Mother's Day bouquets start at Rs. 1,180 for a sweet hand-tied bunch. Pink rose bouquets are Rs. 1,800–3,500, lily bouquets Rs. 2,200–4,000, and premium pastel arrangements go up to Rs. 6,000."
  },
  {
    q: "Do you include a card with Mother's Day flowers?",
    a: "Yes — every Mother's Day bouquet comes with a free handwritten card. Just send us your message on WhatsApp and we'll write it in neat handwriting. Messages in Roman Urdu or English both work beautifully."
  },
  {
    q: "Can you deliver on Mother's Day itself?",
    a: "Yes, we deliver on Mother's Day with same-day 2–5 hour delivery across DHA, Gulberg, Model Town, Johar Town, Bahria Town, Cantt, Wapda Town and Askari. But Mother's Day morning slots fill fast — ordering the evening before is the safest."
  },
  {
    q: "I'm abroad — can I send Mother's Day flowers to my mother in Lahore?",
    a: "Of course — many of our Mother's Day orders come from children in the UK, USA and UAE. Pay by international card, share your card message, and we'll deliver with photo proof on WhatsApp before dispatch."
  }
];

export default function MothersDayFlowersPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Mother's Day Flowers in Lahore (2026)",
    description: "Best bouquets, prices and delivery tips for Mother's Day in Lahore — for Ami.",
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
        <span className="text-[#8B1E2D] font-semibold">Mother's Day Flowers</span>
      </nav>
      <header className="space-y-4">
        <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">Occasions Guide • October 2026</span>
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B0B0B] leading-tight">Mother's Day Flowers in Lahore: Best Bouquets for Ami (2026)</h1>
        <p className="text-sm text-[#777777]">By Lahore Bouquet Florist Team • Updated 6 October 2026 • 4 min read</p>
        <p className="text-sm sm:text-base leading-relaxed"><strong>Quick answer:</strong> Pink roses, lilies and pastel mixed bouquets (from <strong>Rs. 1,180</strong>) are perfect for Ami. Every bouquet includes a <strong>free handwritten card</strong>. Same-day delivery across <strong>Lahore</strong> — order on WhatsApp <strong>{BUSINESS.phone.intl}</strong>.</p>
      </header>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Best Flowers for Ami</h2>
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]"><div className="font-bold text-sm">Pink Rose Bouquet</div><p className="text-sm mt-1">Gentle, loving, timeless — the #1 Mother's Day pick. Rs. 1,800–3,500.</p><Link href="/bouquets" className="text-xs text-[#8B1E2D] underline">Shop bouquets →</Link></div>
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]"><div className="font-bold text-sm">Lily Bouquet</div><p className="text-sm mt-1">Elegant white & pink lilies, lightly fragrant. Rs. 2,200–4,000.</p><Link href="/lily-bouquet-lahore" className="text-xs text-[#8B1E2D] underline">Shop lilies →</Link></div>
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]"><div className="font-bold text-sm">Pastel Mixed Bouquet</div><p className="text-sm mt-1">Carnations, roses & seasonal pastels in a cheerful mix. Rs. 1,180–2,800.</p><Link href="/bouquets" className="text-xs text-[#8B1E2D] underline">Shop mixed bouquets →</Link></div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Ordering Tips for Mother's Day</h2>
        <ul className="space-y-2 text-sm list-disc list-inside leading-relaxed">
          <li><strong>Write a heartfelt card message</strong> — it's free and hand-written. "Ami, thank you for everything" beats any expensive gift.</li>
          <li><strong>Order the evening before</strong> — Mother's Day morning slots fill fast; early booking guarantees your preferred time window.</li>
          <li><strong>Choose soft colours</strong> — pinks, whites, creams and light pastels feel right for mothers.</li>
          <li><strong>Add chocolates or cake</strong> — a sweet add-on turns the bouquet into a complete Mother's Day surprise.</li>
        </ul>
        <a href={whatsappLink("Hello Lahore Bouquet! I want to order Mother's Day flowers for my Ami.")} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">Order Mother's Day Flowers</a>
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
