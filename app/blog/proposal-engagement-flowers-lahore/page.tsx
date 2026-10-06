import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, BUSINESS, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Proposal & Engagement Flowers in Lahore: Make Them Say Yes (2026)",
  },
  description: "Proposal & engagement flowers in Lahore — 100 red roses, ring-box bouquets & proposal setups from Rs. 1,180. Book ahead for the perfect moment.",
  alternates: {
    canonical: `${SITE_URL}/blog/proposal-engagement-flowers-lahore`,
  },
  openGraph: {
    title: "Proposal & Engagement Flowers in Lahore — Make Them Say Yes",
    description: "100 red roses, ring-box bouquets & romantic proposal setups with delivery across Lahore.",
    url: `${SITE_URL}/blog/proposal-engagement-flowers-lahore`,
    type: "article",
  }
};

const FAQS = [
  {
    q: "How many roses should I get for a proposal in Lahore?",
    a: "24–50 red roses is the classic proposal bouquet. For a grand gesture, 100 red roses (Rs. 12,000–25,000) is unforgettable. Even a beautiful dozen roses works when the moment and words are right."
  },
  {
    q: "What is a ring-box bouquet?",
    a: "A bouquet designed with a special compartment or presentation for the engagement ring — so you can present the flowers and the ring in one perfect moment. Tell us on WhatsApp and we'll prepare it discreetly."
  },
  {
    q: "Can you help set up a proposal at home or a hotel?",
    a: "Yes — we create proposal setups with rose petals, candles, fairy lights and balloon styling at homes, farmhouses and hotel suites across Lahore. Book 2–3 days ahead so we can plan and prepare everything."
  },
  {
    q: "What should I write on the proposal card?",
    a: "Keep it personal and simple — something only the two of you would understand, ending with the question. We're happy to handwrite your exact words; many people send us the message in Roman Urdu or English."
  },
  {
    q: "How far ahead should I book proposal flowers?",
    a: "For the bouquet alone, same-day is fine. For proposal setups with room decoration, book 2–3 days ahead. For grand 100-rose arrangements, a day's notice helps us source the freshest roses."
  }
];

export default function ProposalEngagementFlowersPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Proposal & Engagement Flowers in Lahore (2026)",
    description: "Proposal bouquet ideas, ring-box bouquets, romantic setups and booking tips for engagements in Lahore.",
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
        <span className="text-[#8B1E2D] font-semibold">Proposal & Engagement</span>
      </nav>
      <header className="space-y-4">
        <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">Occasions Guide • October 2026</span>
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B0B0B] leading-tight">Proposal & Engagement Flowers in Lahore: Make Them Say Yes (2026)</h1>
        <p className="text-sm text-[#777777]">By Lahore Bouquet Florist Team • Updated 6 October 2026 • 5 min read</p>
        <p className="text-sm sm:text-base leading-relaxed"><strong>Quick answer:</strong> 24–100 red roses (from <strong>Rs. 1,180</strong>), ring-box bouquets and full romantic setups. We deliver across <strong>Lahore</strong> and can decorate the moment too — plan on WhatsApp <strong>{BUSINESS.phone.intl}</strong>.</p>
      </header>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Proposal Flower Ideas</h2>
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]"><div className="font-bold text-sm">Classic Red Rose Bouquet</div><p className="text-sm mt-1">24–50 red roses — the timeless proposal. Rs. 4,800–12,000.</p><Link href="/bouquets" className="text-xs text-[#8B1E2D] underline">Shop rose bouquets →</Link></div>
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]"><div className="font-bold text-sm">100 Red Roses — Grand Gesture</div><p className="text-sm mt-1">The unforgettable statement. Rs. 12,000–25,000 with premium wrapping.</p><Link href="/bouquets" className="text-xs text-[#8B1E2D] underline">Order grand roses →</Link></div>
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]"><div className="font-bold text-sm">Ring-Box Bouquet</div><p className="text-sm mt-1">Flowers + ring presented in one perfect moment. Custom-made on request.</p><Link href="/bouquets" className="text-xs text-[#8B1E2D] underline">Request custom bouquet →</Link></div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Set the Scene</h2>
        <ul className="space-y-2 text-sm list-disc list-inside leading-relaxed">
          <li><strong>Romantic room setup</strong> — rose petals, candles and fairy lights while you pop the question. <Link href="/wedding-room-decoration-lahore" className="text-[#8B1E2D] underline">See room decoration →</Link></li>
          <li><strong>Fresh garlands</strong> — marigold and rose garlands for traditional engagement (mangni) décor. <Link href="/garlands-lahore" className="text-[#8B1E2D] underline">See garlands →</Link></li>
          <li><strong>Book 2–3 days ahead</strong> — setups need planning; the bouquet alone can be same-day.</li>
          <li><strong>Keep it secret</strong> — share the plan on WhatsApp and we'll coordinate discreetly, with photo approval before anything is dispatched.</li>
        </ul>
        <a href={whatsappLink("Hello Lahore Bouquet! I'm planning a proposal in Lahore and need flowers and setup help.")} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">Plan My Proposal</a>
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
