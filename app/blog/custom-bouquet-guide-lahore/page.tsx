import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Custom Bouquet Guide Lahore: Design Your Own",
  },
  description: "How to design your own custom bouquet in Lahore — flower choices, colours, wrapping, pricing & ordering. Get a one-of-a-kind bouquet delivered same-day.",
  alternates: {
    canonical: `${SITE_URL}/blog/custom-bouquet-guide-lahore`,
  },
  openGraph: {
    title: "Custom Bouquet Guide Lahore: Design Your Own",
    description: "How to design your own custom bouquet in Lahore — flower choices, colours, wrapping, pricing & ordering.",
    url: `${SITE_URL}/blog/custom-bouquet-guide-lahore`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Custom Bouquet Guide Lahore: Design Your Own",
      },
    ],
  }
};

const FAQS = [
  {
    q: "What is the minimum budget for a custom bouquet in Lahore?",
    a: "Custom bouquets start from Rs. 1,900 for a small hand-tied bunch. Most personalized designs fall between Rs. 2,500 and Rs. 7,500 depending on flowers and size."
  },
  {
    q: "Can I send a Pinterest photo for my custom bouquet?",
    a: "Yes — send any reference photo on WhatsApp (0310-4225974) and our florist recreates it with fresh flowers, then shares a photo for your approval before dispatch."
  },
  {
    q: "Do custom bouquets take longer to deliver?",
    a: "No — most custom bouquets are ready in 2–5 hours for same-day delivery across Lahore. Only very elaborate wedding designs may need a day's notice."
  },
];

export default function CustomBouquetGuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Design Your Own Custom Bouquet in Lahore",
    description: "Step-by-step guide to ordering a customized flower bouquet in Lahore — flowers, colours, wrapping, pricing and same-day delivery.",
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
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-[#0B0B0B] transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-[#0B0B0B]">Custom Bouquet Guide</span>
      </nav>

      <header className="space-y-3">
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B0B0B]">
          How to Design Your Own Custom Bouquet in Lahore
        </h1>
        <p className="text-sm text-[#777777]">October 6, 2026 • 5 min read • Lahore Bouquet Florist Team</p>
      </header>

      <div className="space-y-6 text-[15px] leading-relaxed">
        <p>
          Ready-made bouquets are lovely — but nothing beats a bouquet designed <em>exactly</em> for
          your person. At <Link href="/custom-bouquets-lahore" className="text-[#8B1E2D] font-semibold underline">Lahore Bouquet</Link>,
          you choose the flowers, colours, wrapping and message, and our florist hand-ties it fresh
          the same day. Here&apos;s how to get it right.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Step 1: Pick Your Flowers</h2>
        <p>
          Start with the stars of the show. <strong>Red roses</strong> say romance; <strong>pink roses</strong> say
          admiration; <strong>white lilies</strong> suit weddings and sympathy; <strong>sunflowers</strong> bring
          cheer to birthdays. Mix in baby&apos;s breath or eucalyptus for texture. Not sure? Tell us the
          occasion on <a href="https://wa.me/923104225974" target="_blank" rel="noopener noreferrer" className="text-[#8B1E2D] font-semibold underline">WhatsApp</a> and
          we&apos;ll suggest combinations that work beautifully together.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Step 2: Choose Colours & Wrapping</h2>
        <p>
          Monochrome (all red, all white) looks elegant; mixed pastels feel joyful. For wrapping, kraft
          paper gives a rustic vibe, satin wrap feels premium, and a gift box makes it extra special.
          Add a ribbon in a contrasting colour and your bouquet looks straight out of a florist&apos;s portfolio.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Step 3: Set Your Budget</h2>
        <p>
          Custom bouquets start at <strong>Rs. 1,900</strong>. Local seasonal flowers keep costs down;
          imported Dutch roses cost more. Share your budget honestly — a good florist designs something
          stunning at any price point. See our <Link href="/prices" className="text-[#8B1E2D] font-semibold underline">price guide</Link> for
          per-stem rates.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Step 4: Approve the Photo, Get Same-Day Delivery</h2>
        <p>
          Once your bouquet is hand-tied, we send a <strong>live photo on WhatsApp</strong> for your
          approval — nothing dispatches until you love it. Delivery takes 2–5 hours across Lahore,
          with a free handwritten card carrying your message.
        </p>

        <div className="bg-white p-6 rounded-2xl border border-[#C6A15B]/40">
          <h3 className="font-bold text-[#0B0B0B] mb-2">Pro tip: reference photos work wonders</h3>
          <p className="text-sm">
            Found a bouquet you love on Instagram or Pinterest? Send the screenshot — we&apos;ll recreate
            it with fresh flowers as closely as availability allows.
          </p>
        </div>
      </div>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Custom Bouquet FAQs</h2>
        <div className="space-y-3">
          {FAQS.map((f) => (
            <div key={f.q} className="bg-white p-5 rounded-2xl border border-[#E5DED2]">
              <h3 className="font-bold text-sm text-[#0B0B0B]">{f.q}</h3>
              <p className="text-sm text-[#2A2A2A] mt-1.5 leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="text-center">
        <a href="https://wa.me/923104225974?text=Assalam-o-Alaikum! I want a CUSTOM bouquet. My idea:" target="_blank" rel="noopener noreferrer"
          className="inline-block px-8 py-3.5 rounded-full bg-[#8B1E2D] text-white font-bold text-sm hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">
          Design My Bouquet on WhatsApp
        </a>
      </div>
    </article>
  );
}
