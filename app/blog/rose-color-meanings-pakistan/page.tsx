import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, BUSINESS, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Rose Color Meanings in Pakistan (2026) | What Each Rose Says",
  },
  description: "What do red, white, pink, yellow roses mean? Complete rose color meaning guide for gifting in Pakistan — birthdays, nikkah, apologies, get-well. Same-day",
  alternates: {
    canonical: `${SITE_URL}/blog/rose-color-meanings-pakistan`,
  },
  openGraph: {
    title: "Rose Color Meanings — What Each Rose Says",
    description: "Red for love, white for purity, yellow for friendship — the complete rose meaning guide for Pakistan.",
    url: `${SITE_URL}/blog/rose-color-meanings-pakistan`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Rose Color Meanings — What Each Rose Says",
      },
    ],
  }
};

const FAQS = [
  {
    q: "What do red roses mean?",
    a: "Deep love and romance. Red roses are the classic choice for anniversaries, proposals, Valentine's Day and expressing serious romantic feelings in Pakistan."
  },
  {
    q: "What do white roses mean?",
    a: "Purity, new beginnings and sympathy. White roses suit nikkahs, new baby congratulations — and are also the respectful choice for condolences and get-well wishes."
  },
  {
    q: "What do pink roses mean?",
    a: "Admiration, gratitude and gentle affection. Pink roses are perfect for Mother's Day, birthdays, thank-you gifts and early-stage romance."
  },
  {
    q: "What do yellow roses mean?",
    a: "Friendship and joy. Yellow roses celebrate friendships, graduations and cheerful congratulations — avoid them for romantic apologies, as some read yellow as jealousy."
  },
  {
    q: "How many roses should I gift?",
    a: "A dozen (12) is the classic romantic gesture. 24–50 makes a grand statement for proposals and milestones. Odd numbers like 15 or 21 are popular for birthdays in Pakistan. A single rose is intimate and meaningful."
  },
  {
    q: "Which rose color is best for saying sorry?",
    a: "White roses (sincerity) or pink roses (gentle affection) with a handwritten apology note. Add a midnight delivery and the gesture speaks louder than words."
  }
];

const MEANINGS = [
  { color: "Red Roses", meaning: "Deep love & romance", occasions: "Anniversary, proposal, Valentine's", price: "from Rs. 1,900" },
  { color: "White Roses", meaning: "Purity & new beginnings", occasions: "Nikkah, new baby, condolence", price: "from Rs. 2,200" },
  { color: "Pink Roses", meaning: "Admiration & gratitude", occasions: "Mother's Day, birthday, thank you", price: "from Rs. 2,200" },
  { color: "Yellow Roses", meaning: "Friendship & joy", occasions: "Graduation, congratulations", price: "from Rs. 1,900" },
  { color: "Peach Roses", meaning: "Sincerity & modesty", occasions: "Apology, get-well", price: "from Rs. 2,600" },
  { color: "Lavender Roses", meaning: "Enchantment & grace", occasions: "Unique romantic gesture", price: "from Rs. 3,200" },
];

export default function RoseMeaningsPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Rose Color Meanings in Pakistan (2026)",
    description: "What each rose color means and which to gift for every occasion in Pakistan.",
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
        <span className="text-[#8B1E2D] font-semibold">Rose Color Meanings</span>
      </nav>
      <header className="space-y-4">
        <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">Flower Meanings • October 2026</span>
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B0B0B] leading-tight">Rose Color Meanings: What Each Rose Says in Pakistan</h1>
        <p className="text-sm text-[#777777]">By Lahore Bouquet Florist Team • Updated 6 October 2026 • 5 min read</p>
        <p className="text-sm sm:text-base leading-relaxed"><strong>Quick answer:</strong> Red = love, white = purity, pink = admiration, yellow = friendship. Pick the color that matches your message, then order from <Link href="/roses" className="text-[#8B1E2D] underline">our rose collection</Link> — WhatsApp <strong>{BUSINESS.phone.intl}</strong> for same-day Lahore delivery.</p>
      </header>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Rose Colors & Their Meanings</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {MEANINGS.map((m, i) => (
            <div key={i} className="p-5 rounded-2xl bg-white border border-[#E5DED2] space-y-1">
              <div className="font-bold text-[#0B0B0B]">{m.color}</div>
              <p className="text-sm"><strong>Means:</strong> {m.meaning}</p>
              <p className="text-sm text-[#777]"><strong>Best for:</strong> {m.occasions}</p>
              <p className="text-xs font-semibold text-[#8B1E2D]">{m.price}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Roses by Occasion in Pakistan</h2>
        <ul className="space-y-2 text-sm list-disc list-inside leading-relaxed">
          <li><strong>Nikkah / Shaadi:</strong> white, blush pink or red — see our <Link href="/blog/nikkah-flowers-guide-lahore" className="text-[#8B1E2D] underline">nikkah flower guide</Link>.</li>
          <li><strong>Birthday:</strong> pink, mixed or the birthday person's favourite color.</li>
          <li><strong>Apology:</strong> white (sincerity) or peach (modesty) with a handwritten note.</li>
          <li><strong>Get-well:</strong> cheerful pink or yellow — never overwhelmingly fragrant for hospital rooms.</li>
          <li><strong>Mother's Day:</strong> pink roses, the universal gratitude flower.</li>
          <li><strong>Condolence:</strong> white roses only — respectful and traditional.</li>
        </ul>
        <p className="text-sm leading-relaxed">Ready to order? Explore our <Link href="/bouquets" className="text-[#8B1E2D] underline font-semibold">fresh rose bouquets in Lahore</Link> — red, pink, white and mixed, from Rs. 1,239 with same-day delivery.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Imported vs Local Roses</h2>
        <p className="text-sm leading-relaxed">Local desi roses are fragrant and budget-friendly (bouquets from Rs. 1,900). Imported Dutch roses are larger, longer-lasting and come in rare shades like peach and lavender (from Rs. 4,500). For proposals and milestones, imported roses photograph beautifully; for everyday gestures, fresh local roses are perfect. Compare live options in our <Link href="/roses" className="text-[#8B1E2D] underline">rose collection</Link>.</p>
        <a href={whatsappLink("Hello Lahore Bouquet! Help me choose the right roses for my occasion.")} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">Ask a Florist on WhatsApp</a>
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
