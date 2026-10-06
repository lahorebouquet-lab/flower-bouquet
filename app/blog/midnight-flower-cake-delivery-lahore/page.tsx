import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, BUSINESS, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Midnight Flower & Cake Delivery in Lahore (2026)",
  },
  description: "Surprise someone at exactly 12 AM. How Lahore Bouquet's midnight flower and cake delivery works: slots, cut-off times, charges and the areas we cover",
  alternates: {
    canonical: `${SITE_URL}/blog/midnight-flower-cake-delivery-lahore`,
  },
  openGraph: {
    title: "Midnight Flower & Cake Delivery in Lahore",
    description: "Flowers + cake at your door at 12 AM sharp. Slots, pricing and booking cut-offs explained.",
    url: `${SITE_URL}/blog/midnight-flower-cake-delivery-lahore`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Midnight Flower & Cake Delivery in Lahore",
      },
    ],
  }
};

const FAQS = [
  {
    q: "Do you deliver flowers at midnight in Lahore?",
    a: "Yes. Lahore Bouquet offers a midnight surprise slot from 11:30 PM to 12:15 AM for birthdays and anniversaries. Advance booking (at least a few hours ahead, ideally a day) is required."
  },
  {
    q: "Can I add a cake with midnight flower delivery?",
    a: "Yes — midnight combos pair a fresh bouquet with a chocolate fudge, red velvet or lotus three-milk cake from our gifts & cakes collection. Tell us the cake flavour when you book on WhatsApp."
  },
  {
    q: "Which areas in Lahore get midnight delivery?",
    a: "DHA, Gulberg, Model Town, Johar Town, Bahria Town, Cantt and central Lahore are covered every night. Outlying areas may need earlier booking — confirm on WhatsApp at +92 310 4225974."
  },
  {
    q: "Is there an extra charge for midnight delivery?",
    a: "A small night-slot surcharge applies depending on the area and distance. Your exact total is confirmed on WhatsApp before you pay — no hidden charges."
  }
];

export default function MidnightDeliveryBlogPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Midnight Flower & Cake Delivery in Lahore — How It Works",
    description: "Complete guide to midnight surprise flower and cake delivery in Lahore: slots, booking, charges and coverage.",
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
        <span className="text-[#8B1E2D] font-semibold">Midnight Delivery</span>
      </nav>

      <header className="space-y-4">
        <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">Delivery Guide • October 2026</span>
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B0B0B] leading-tight">
          Midnight Flower & Cake Delivery in Lahore — How It Works
        </h1>
        <p className="text-sm text-[#777777]">By Lahore Bouquet Florist Team • Updated 6 October 2026 • 4 min read</p>
        <p className="text-sm sm:text-base leading-relaxed">
          <strong>Quick answer:</strong> Yes — Lahore Bouquet delivers flowers and cakes at <strong>midnight (11:30 PM–12:15 AM)</strong> across DHA, Gulberg, Model Town, Johar Town and Bahria Town. Book a few hours ahead on WhatsApp at <strong>{BUSINESS.phone.intl}</strong>; a small night surcharge applies.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">How the Midnight Slot Works</h2>
        <ol className="space-y-3 text-sm leading-relaxed list-decimal pl-5">
          <li><strong>Book ahead:</strong> Message us on WhatsApp by evening (ideally a day before) with the bouquet, cake flavour and the exact address in Lahore.</li>
          <li><strong>We confirm:</strong> You get your total (bouquet + cake + night surcharge) and pay by bank transfer, JazzCash, EasyPaisa or COD.</li>
          <li><strong>We prepare fresh:</strong> The bouquet is hand-tied that evening; the cake is baked fresh by our bakery partner.</li>
          <li><strong>12 AM surprise:</strong> Our rider arrives between 11:30 PM and 12:15 AM. You get a delivery confirmation the moment it lands.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Popular Midnight Combos</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="/birthday-surprises" className="p-5 rounded-2xl bg-white border border-[#E5DED2] hover:border-[#C6A15B] transition-colors">
            <div className="font-bold text-[#0B0B0B]">Birthday Surprise Combos</div>
            <div className="text-xs text-[#777777]">Bouquet + cake + midnight delivery</div>
          </Link>
          <Link href="/gifts-and-cakes" className="p-5 rounded-2xl bg-white border border-[#E5DED2] hover:border-[#C6A15B] transition-colors">
            <div className="font-bold text-[#0B0B0B]">Cakes & Gift Combos</div>
            <div className="text-xs text-[#777777]">Chocolate fudge, red velvet, lotus milk cake</div>
          </Link>
        </div>
        <p className="text-sm leading-relaxed">Every midnight combo starts with a <Link href="/bouquets" className="text-[#8B1E2D] underline font-semibold">fresh midnight bouquet</Link> — pick your flowers, add cake and gifts, and we handle the 12 AM surprise.</p>
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

      <a href={whatsappLink("Hi Lahore Bouquet! I want to book a midnight flower & cake delivery in Lahore.")} target="_blank" rel="noopener noreferrer" className="inline-block px-7 py-3.5 rounded-full bg-[#0E7C5B] text-white font-bold text-sm shadow-md hover:bg-[#0B6E4F] transition-colors">
        Book Midnight Delivery — {BUSINESS.phone.intl}
      </a>
    </article>
  );
}
