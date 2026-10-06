import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, BUSINESS, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "How to Send Flowers to Lahore from UK, USA & UAE (2026 Guide)",
  },
  description: "Living abroad? Send fresh flowers to Lahore from the UK, USA, UAE or anywhere. WhatsApp ordering, bank transfer payments, photo confirmation and same-day 2–5 hour delivery across Lahore.",
  alternates: {
    canonical: `${SITE_URL}/blog/send-flowers-to-lahore-from-abroad`,
  },
  openGraph: {
    title: "Send Flowers to Lahore from UK, USA & UAE",
    description: "Order on WhatsApp, pay by bank transfer, get a photo before delivery — same-day flower delivery across Lahore for overseas Pakistanis.",
    url: `${SITE_URL}/blog/send-flowers-to-lahore-from-abroad`,
    type: "article",
  }
};

const FAQS = [
  {
    q: "Can I send flowers to Lahore from the UK?",
    a: "Yes. Message Lahore Bouquet on WhatsApp at +92 310 4225974, choose a bouquet, pay by international bank transfer, and we deliver the same day across Lahore — DHA, Gulberg, Model Town, Bahria Town and beyond — with a photo sent to you before dispatch."
  },
  {
    q: "How do I pay from the USA or UAE?",
    a: "International bank transfer (IBFT/SWIFT) works from the USA, UK, UAE and Gulf countries. Share the transfer receipt on WhatsApp and your order is confirmed within minutes."
  },
  {
    q: "How long does delivery take in Lahore?",
    a: "Same-day delivery in 2–5 hours for orders placed before 4 PM Pakistan time. A midnight surprise slot (11:30 PM–12:15 AM) is available with advance booking — perfect for birthdays when you're in a different timezone."
  },
  {
    q: "How do I know the flowers were actually delivered?",
    a: "You receive two proofs: a photo of the finished bouquet on WhatsApp before the rider leaves, and a delivery confirmation once it reaches your recipient in Lahore."
  }
];

export default function SendFlowersAbroadBlogPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Send Flowers to Lahore from UK, USA & UAE (2026 Guide)",
    description: "Step-by-step guide for overseas Pakistanis to send fresh flowers to Lahore with same-day delivery.",
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
        <span className="text-[#8B1E2D] font-semibold">Send Flowers from Abroad</span>
      </nav>

      <header className="space-y-4">
        <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">Overseas Guide • October 2026</span>
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B0B0B] leading-tight">
          How to Send Flowers to Lahore from the UK, USA & UAE
        </h1>
        <p className="text-sm text-[#777777]">By Lahore Bouquet Florist Team • Updated 6 October 2026 • 4 min read</p>
        <p className="text-sm sm:text-base leading-relaxed">
          <strong>Quick answer:</strong> WhatsApp us at <strong>{BUSINESS.phone.intl}</strong>, pick a bouquet from Rs. 1,180, pay by international bank transfer, and we deliver the same day in Lahore within 2–5 hours — with a photo sent to you before dispatch and delivery confirmation after.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">3 Steps — It Takes 10 Minutes</h2>
        <ol className="space-y-4">
          <li className="p-5 rounded-2xl bg-white border border-[#E5DED2]">
            <div className="font-bold text-[#0B0B0B]">1. Choose on WhatsApp</div>
            <p className="text-sm mt-1">Browse <Link href="/bouquets" className="text-[#8B1E2D] underline">bouquets</Link>, <Link href="/roses" className="text-[#8B1E2D] underline">roses</Link> or <Link href="/money-bouquets" className="text-[#8B1E2D] underline">money bouquets</Link> and send us the link — or just describe what you want ("red roses for my mother's birthday in DHA Phase 5").</p>
          </li>
          <li className="p-5 rounded-2xl bg-white border border-[#E5DED2]">
            <div className="font-bold text-[#0B0B0B]">2. Pay by bank transfer</div>
            <p className="text-sm mt-1">International transfer from the UK, USA, UAE or Gulf. Share the receipt screenshot on WhatsApp — your order is confirmed in minutes, any time 9 AM–1 AM Pakistan time.</p>
          </li>
          <li className="p-5 rounded-2xl bg-white border border-[#E5DED2]">
            <div className="font-bold text-[#0B0B0B]">3. We deliver & confirm</div>
            <p className="text-sm mt-1">Same-day delivery in 2–5 hours across all Lahore areas. You get a photo of the bouquet before it leaves and a confirmation when it arrives.</p>
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Timezone Tip</h2>
        <p className="text-sm leading-relaxed">
          Ordering from London or New York for a birthday in Lahore? Our <Link href="/birthday-surprises" className="text-[#8B1E2D] underline">midnight surprise slot (11:30 PM–12:15 AM)</Link> means the flowers arrive at exactly 12 — book a day ahead and wake up to their reaction on video call.
        </p>
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

      <a href={whatsappLink("Hi Lahore Bouquet! I'm ordering from abroad and want to send flowers to Lahore.")} target="_blank" rel="noopener noreferrer" className="inline-block px-7 py-3.5 rounded-full bg-[#25D366] text-white font-bold text-sm shadow-md hover:bg-[#128C7E] transition-colors">
        Order on WhatsApp — {BUSINESS.phone.intl}
      </a>
    </article>
  );
}
