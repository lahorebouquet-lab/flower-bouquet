import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, BUSINESS, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Graduation Flowers in Lahore 2026 | Convocation Bouquets",
  },
  description: "Best graduation bouquets in Lahore — sunflower, rose & mixed bouquets from Rs. 1,900 with same-day delivery to LUMS, Punjab University, FAST & all campuses. 2026 guide.",
  alternates: {
    canonical: `${SITE_URL}/blog/graduation-flowers-lahore`,
  },
  openGraph: {
    title: "Graduation Flowers in Lahore 2026 | Convocation Bouquets",
    description: "Sunflower & rose bouquets from Rs. 1,900, delivered to every Lahore campus on convocation day.",
    url: `${SITE_URL}/blog/graduation-flowers-lahore`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Graduation Flowers in Lahore — Convocation Bouquet Guide",
      },
    ],
  }
};

const FAQS = [
  {
    q: "What flowers are best for graduation in Lahore?",
    a: "Sunflowers (success & happiness), yellow/pink roses, and mixed bright bouquets are the top graduation picks. Avoid all-white (funeral association) and overly fragrant lilies for crowded convocation halls."
  },
  {
    q: "How much does a graduation bouquet cost in Lahore?",
    a: "Graduation bouquets start at Rs. 1,900 for a cheerful hand-tied bunch. Sunflower graduation bouquets are Rs. 2,400–3,800, and grand mixed bouquets with a teddy bear are Rs. 4,500–7,500."
  },
  {
    q: "Can you deliver to LUMS / Punjab University on convocation day?",
    a: "Yes. We deliver to LUMS, Punjab University, FAST-NUCES, UET, Kinnaird, LCWU, Beaconhouse National and all Lahore campuses. On convocation days, order the evening before — campus gates get crowded and early delivery is safest."
  },
  {
    q: "Should I add a teddy bear or chocolate with graduation flowers?",
    a: "It's the most popular combo. A medium teddy bear (Rs. 2,499) or chocolate box with a sunflower bouquet makes the classic convocation-day gift — order both together for one delivery."
  },
  {
    q: "Can parents order from abroad for a Lahore graduation?",
    a: "Absolutely — many of our graduation orders come from parents in the UK, USA and UAE. Pay by international card, and we deliver to the campus or home with photo proof on WhatsApp."
  }
];

export default function GraduationFlowersPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Graduation Flowers in Lahore (2026)",
    description: "Best bouquets, prices and campus delivery tips for convocation day in Lahore.",
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
        <span className="text-[#8B1E2D] font-semibold">Graduation Flowers</span>
      </nav>
      <header className="space-y-4">
        <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">Occasions Guide • October 2026</span>
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B0B0B] leading-tight">Graduation Flowers in Lahore: Convocation Bouquet Guide (2026)</h1>
        <p className="text-sm text-[#777777]">By Lahore Bouquet Florist Team • Updated 6 October 2026 • 4 min read</p>
        <p className="text-sm sm:text-base leading-relaxed"><strong>Quick answer:</strong> Sunflower and bright mixed bouquets (Rs. 1,900–3,800) are the classic convocation gift. We deliver to <strong>every Lahore campus</strong> — order the evening before convocation day on WhatsApp <strong>{BUSINESS.phone.intl}</strong>.</p>
      </header>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Best Graduation Bouquets</h2>
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]"><div className="font-bold text-sm">Sunflower Bouquet</div><p className="text-sm mt-1">The #1 graduation flower — success & happiness. Rs. 2,400–3,800.</p><Link href="/sunflower-bouquet-lahore" className="text-xs text-[#8B1E2D] underline">Shop sunflowers →</Link></div>
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]"><div className="font-bold text-sm">Bright Mixed Bouquet</div><p className="text-sm mt-1">Roses, carnations & seasonal blooms. Rs. 1,900–3,200.</p><Link href="/bouquets" className="text-xs text-[#8B1E2D] underline">Shop bouquets →</Link></div>
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]"><div className="font-bold text-sm">Bouquet + Teddy Combo</div><p className="text-sm mt-1">The classic convocation gift set. Rs. 4,500–7,500.</p><Link href="/teddy-bears-lahore" className="text-xs text-[#8B1E2D] underline">Shop teddy bears →</Link></div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Campus Delivery Tips</h2>
        <ul className="space-y-2 text-sm list-disc list-inside leading-relaxed">
          <li><strong>Order the evening before</strong> — convocation mornings have traffic and gate queues; early delivery beats the rush.</li>
          <li><strong>Share the graduate's phone number</strong> — our rider coordinates directly at campus gates.</li>
          <li><strong>Choose low-fragrance flowers</strong> for indoor ceremonies — sunflowers and roses over lilies.</li>
          <li><strong>Add a card message</strong> — every bouquet includes a free handwritten card; degree-day messages mean a lot.</li>
        </ul>
        <a href={whatsappLink("Hello Lahore Bouquet! I need a graduation bouquet delivered to a Lahore campus.")} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">Order a Graduation Bouquet</a>
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
