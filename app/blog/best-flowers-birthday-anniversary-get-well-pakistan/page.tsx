import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Best Flowers for Birthday, Anniversary & Get-Well in Pakistan (2026)",
  },
  description: "Which flowers to send for birthdays, anniversaries and get-well wishes in Pakistan? Florist guide to roses, lilies, sunflowers and mixed bouquets with meaning and prices.",
  alternates: {
    canonical: `${SITE_URL}/blog/best-flowers-birthday-anniversary-get-well-pakistan`,
  },
  openGraph: {
    title: "Best Flowers for Birthday, Anniversary & Get-Well in Pakistan",
    description: "Florist guide: which blooms suit birthdays, anniversaries and get-well wishes — with meanings and Lahore prices.",
    url: `${SITE_URL}/blog/best-flowers-birthday-anniversary-get-well-pakistan`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Best Flowers for Birthday, Anniversary & Get-Well in Pakistan",
      },
    ],
  }
};

const FAQS = [
  {
    q: "What are the best birthday flowers in Pakistan?",
    a: "Mixed bright bouquets — sunflowers, pink roses and lilies — are the safest birthday pick in Pakistan. They photograph well, suit any age, and cost Rs. 1,500–Rs. 5,000 in Lahore. Add a cake for the full surprise."
  },
  {
    q: "Which flowers are best for anniversaries?",
    a: "Red roses remain the classic anniversary flower in Pakistan — a dozen imported Dutch roses (Rs. 2,500–Rs. 4,500) for early years, 24–50 roses for milestones. White roses + lilies suit elegant, understated couples."
  },
  {
    q: "What flowers do you send for get-well wishes?",
    a: "Cheerful, low-fragrance flowers: sunflowers, white lilies or pastel mixed bouquets. Avoid strongly scented oriental lilies for hospital rooms. A small Rs. 1,180–Rs. 2,500 bouquet is perfect."
  }
];

export default function OccasionFlowersBlogPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Flowers for Birthday, Anniversary & Get-Well in Pakistan",
    description: "Florist guide to choosing the right flowers for birthdays, anniversaries and get-well wishes in Pakistan.",
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
        <span className="text-[#8B1E2D] font-semibold">Occasion Flower Guide</span>
      </nav>

      <header className="space-y-4">
        <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">Occasions Guide • October 2026</span>
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B0B0B] leading-tight">
          Best Flowers for Birthday, Anniversary and Get-Well in Pakistan
        </h1>
        <p className="text-sm text-[#777777]">By Lahore Bouquet Florist Team • Updated 6 October 2026 • 5 min read</p>
        <p className="text-sm sm:text-base leading-relaxed">
          <strong>Quick answer:</strong> Birthdays → bright mixed bouquets or sunflowers (Rs. 1,500–5,000). Anniversaries → red roses, 12 for early years, 24–50 for milestones (Rs. 2,500–12,000). Get-well → cheerful low-fragrance lilies or pastels (Rs. 1,180–2,500). Same-day delivery across Lahore in 2–5 hours.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Birthdays: Go Bright</h2>
        <p className="text-sm leading-relaxed">
          Birthdays are about joy — sunflowers, pink roses and colourful mixed bunches. In Roman Urdu searches, people look for "birthday ke liye phool" — a <Link href="/birthday-surprises" className="text-[#8B1E2D] underline">birthday surprise combo</Link> with cake and midnight delivery is the most-ordered choice in Lahore.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Anniversaries: Go Romantic</h2>
        <p className="text-sm leading-relaxed">
          Red roses say it best — "gulab ka guldasta" is still the most gifted anniversary flower in Pakistan. For the 1st–5th year, a dozen imported Dutch roses. For the 10th, 25th and beyond, go grand with 50 roses or add a <Link href="/money-bouquets" className="text-[#8B1E2D] underline">money bouquet</Link>. See our <Link href="/occasions/anniversary" className="text-[#8B1E2D] underline">anniversary collection</Link>.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Get-Well: Go Gentle</h2>
        <p className="text-sm leading-relaxed">
          For someone recovering, choose cheerful but gentle: white lilies, pastel roses or sunflowers. Keep fragrance light for hospital rooms. A hand-written card is free with every <Link href="/occasions/get-well-and-sorry" className="text-[#8B1E2D] underline">get-well bouquet</Link> — tell us your message on WhatsApp at {BUSINESS.phone.intl}.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Quick Meaning Chart</h2>
        <div className="overflow-x-auto rounded-2xl border border-[#E5DED2]">
          <table className="w-full text-sm">
            <thead className="bg-[#0B0B0B] text-white">
              <tr><th className="text-left px-4 py-3">Flower</th><th className="text-left px-4 py-3">Meaning</th><th className="text-left px-4 py-3">Best For</th></tr>
            </thead>
            <tbody className="bg-white divide-y divide-[#E5DED2]">
              <tr><td className="px-4 py-3 font-semibold">Red roses</td><td className="px-4 py-3">Love & passion</td><td className="px-4 py-3">Anniversary, romance</td></tr>
              <tr><td className="px-4 py-3 font-semibold">Pink roses</td><td className="px-4 py-3">Admiration & sweetness</td><td className="px-4 py-3">Birthday, congratulations</td></tr>
              <tr><td className="px-4 py-3 font-semibold">White lilies</td><td className="px-4 py-3">Purity & sympathy</td><td className="px-4 py-3">Get-well, condolence</td></tr>
              <tr><td className="px-4 py-3 font-semibold">Sunflowers</td><td className="px-4 py-3">Joy & energy</td><td className="px-4 py-3">Birthday, get-well</td></tr>
              <tr><td className="px-4 py-3 font-semibold">White roses</td><td className="px-4 py-3">Respect & new beginnings</td><td className="px-4 py-3">Wedding, nikkah</td></tr>
            </tbody>
          </table>
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
    </article>
  );
}
