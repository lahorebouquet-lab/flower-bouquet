import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, BUSINESS } from "@/lib/business";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo("/blog/birthday-flower-delivery-lahore-2026", {
  title: {
    absolute: "Birthday Flower Delivery in Lahore 2026 | Prices & Same-Day Service",
  },
  description: "Send birthday flowers in Lahore with same-day delivery. Real 2026 prices for birthday bouquets, cakes, balloons and midnight surprises.",
  alternates: {
    canonical: `${SITE_URL}/blog/birthday-flower-delivery-lahore-2026`,
  },
  openGraph: {
    title: "Birthday Flower Delivery in Lahore 2026 | Prices & Same-Day Service",
    description: "Birthday bouquets, cakes and surprises delivered same-day across Lahore. Real 2026 prices and ordering guide.",
    url: `${SITE_URL}/blog/birthday-flower-delivery-lahore-2026`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Birthday flower delivery in Lahore 2026",
      },
    ],
  }
});

const FAQS = [
  {
    q: "How much does birthday flower delivery cost in Lahore?",
    a: "Birthday bouquets in Lahore start at Rs. 1,699 for a cheerful hand-tied bunch. Premium rose bouquets run Rs. 2,999 and up. Add a cake (from Rs. 1,499), helium balloons (from Rs. 199 each) or a teddy bear for the complete surprise. Delivery is free across Lahore."
  },
  {
    q: "Can I get same-day birthday flower delivery in Lahore?",
    a: "Yes! Order before 4:00 PM and your birthday flowers arrive the same day within 2–5 hours across DHA, Gulberg, Model Town, Johar Town, Bahria Town and Cantt. Every bouquet is photographed on WhatsApp before dispatch."
  },
  {
    q: "Do you offer midnight birthday flower delivery?",
    a: "Yes — our midnight slot (11:30 PM to 12:15 AM) delivers your birthday surprise as the clock strikes twelve. Book at least a few hours ahead; this slot is very popular and fills up fast."
  },
  {
    q: "What flowers are best for birthdays?",
    a: "Mixed seasonal bouquets are the most popular birthday choice — bright, cheerful and suitable for anyone. Red roses for romantic partners, sunflowers for friends, pastel lilies for mothers, and fun balloon-and-teddy combos for kids."
  },
  {
    q: "Can I order birthday flowers from abroad for delivery in Lahore?",
    a: "Absolutely. If you live in the UK, USA, Dubai or anywhere outside Pakistan, message us on WhatsApp (0310-4225974), pay by international card, approve the design by photo, and we deliver fresh to any Lahore address on the birthday."
  }
];

export default function BirthdayFlowerDeliveryBlogPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Birthday Flower Delivery in Lahore 2026 | Prices & Same-Day Service",
    description: "Birthday bouquets, cakes and surprises delivered same-day across Lahore. Real 2026 prices and ordering guide.",
    author: { "@type": "Organization", name: "Lahore Bouquet Florist Team", url: `${SITE_URL}` },
    publisher: { "@type": "Organization", name: "Lahore Bouquet", url: `${SITE_URL}` },
    datePublished: "2026-10-18",
    dateModified: "2026-10-18",
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
    <main className="max-w-3xl mx-auto px-4 sm:px-6 py-10 bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2 mb-6">
        <Link href="/" className="hover:text-[#0B0B0B]">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-[#0B0B0B]">Blog</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Birthday Flower Delivery in Lahore 2026</span>
      </nav>

      <article className="space-y-6">
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B0B0B] leading-tight">
          Birthday Flower Delivery in Lahore 2026: Prices, Ideas & Same-Day Service
        </h1>

        <p className="text-sm text-[#777]">By Lahore Bouquet Florist Team • Updated October 2026</p>

        <p className="text-sm sm:text-base leading-relaxed">
          A birthday deserves more than a text message. Whether it is your mother, your best friend, or that special someone, <strong>birthday flowers delivered in Lahore</strong> turn an ordinary day into a memory. This 2026 guide covers real prices, the best birthday flower ideas, and how to get everything delivered the same day — even at midnight.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B] pt-4">Birthday Flower Prices in Lahore 2026</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#0B0B0B] text-white">
                <th className="p-3 text-left">Birthday Gift</th>
                <th className="p-3 text-left">Price Range</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E5DED2]">
                <td className="p-3">Cheerful mixed bouquet</td>
                <td className="p-3 font-bold text-[#8B1E2D]">Rs. 1,699+</td>
              </tr>
              <tr className="border-b border-[#E5DED2] bg-white">
                <td className="p-3">Premium rose bouquet (24 roses)</td>
                <td className="p-3 font-bold text-[#8B1E2D]">Rs. 2,999+</td>
              </tr>
              <tr className="border-b border-[#E5DED2]">
                <td className="p-3">Sunflower birthday bunch</td>
                <td className="p-3 font-bold text-[#8B1E2D]">Rs. 1,699+</td>
              </tr>
              <tr className="border-b border-[#E5DED2] bg-white">
                <td className="p-3">Helium balloon bunch (10 pcs)</td>
                <td className="p-3 font-bold text-[#8B1E2D]">Rs. 1,799</td>
              </tr>
              <tr className="border-b border-[#E5DED2]">
                <td className="p-3">Birthday cake (2 lb)</td>
                <td className="p-3 font-bold text-[#8B1E2D]">Rs. 2,499+</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3">Complete surprise (bouquet + cake + balloons)</td>
                <td className="p-3 font-bold text-[#8B1E2D]">Rs. 5,999+</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs text-[#777] italic">
          Prices are indicative for Lahore 2026. Message us on WhatsApp (0310-4225974) for exact pricing on your chosen design.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B] pt-4">Best Birthday Flower Ideas</h2>

        <ul className="space-y-2 text-sm sm:text-base list-disc list-inside leading-relaxed">
          <li><strong>For her:</strong> blush pink roses with baby&apos;s breath in elegant wrapping, paired with a handwritten card.</li>
          <li><strong>For him:</strong> bold mixed bouquets — sunflowers, orange roses and greenery in kraft paper.</li>
          <li><strong>For mother:</strong> pastel lilies and white roses — graceful, fragrant and timeless.</li>
          <li><strong>For kids:</strong> a bright balloon bunch tied to a teddy bear — always a hit.</li>
          <li><strong>For milestones (18th, 21st, 30th, 50th):</strong> giant number foil balloons with a premium rose bouquet.</li>
        </ul>

        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B] pt-4">The Midnight Birthday Surprise</h2>

        <p className="text-sm sm:text-base leading-relaxed">
          Want to be the first to wish them? Our <Link href="/midnight-flower-delivery-lahore" className="text-[#8B1E2D] underline">midnight flower delivery</Link> slot (11:30 PM to 12:15 AM) brings flowers, cake and balloons to their door as the birthday begins. It is our most requested birthday service — book a few hours ahead because the slot fills up quickly.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B] pt-4">How Birthday Delivery Works</h2>

        <ul className="space-y-2 text-sm sm:text-base list-disc list-inside leading-relaxed">
          <li><strong>Order before 4:00 PM</strong> for same-day delivery (2–5 hours) across DHA, Gulberg, Model Town, Johar Town, Bahria Town and Cantt.</li>
          <li><strong>WhatsApp photo approval</strong> — we send a photo of your bouquet before the rider leaves.</li>
          <li><strong>Free delivery</strong> across all Lahore areas.</li>
          <li><strong>From abroad?</strong> Pay by international card, approve by photo, and we deliver to any Lahore address.</li>
        </ul>

        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B] pt-4">Our Birthday Collection</h2>

        <p className="text-sm sm:text-base leading-relaxed">
          Browse our <Link href="/bouquets" className="text-[#8B1E2D] underline">birthday bouquets</Link>, <Link href="/helium-balloons-lahore" className="text-[#8B1E2D] underline">helium balloons</Link> and <Link href="/roses" className="text-[#8B1E2D] underline">rose collections</Link> — or message us on WhatsApp and we will put together the perfect birthday surprise for your budget.
        </p>

        <div className="p-6 rounded-2xl bg-[#0B0B0B] text-white space-y-3 mt-8">
          <h3 className="font-playfair text-xl font-bold">Order Birthday Flowers Today</h3>
          <p className="text-sm text-[#E5DED2]">Same-day delivery across Lahore • WhatsApp photo before dispatch</p>
          <Link href="/bouquets" className="inline-block px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">
            Shop Birthday Bouquets →
          </Link>
        </div>

        <section className="space-y-4 pt-6">
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <details key={i} className="p-5 rounded-2xl bg-white border border-[#E5DED2] group">
                <summary className="font-bold text-sm text-[#0B0B0B] cursor-pointer list-none flex justify-between items-center gap-2">
                  {f.q}
                  <span className="text-[#8B1E2D] group-open:rotate-45 transition-transform text-lg leading-none shrink-0">+</span>
                </summary>
                <p className="text-sm mt-2 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="text-xs text-[#777777] pt-4">
          <p>Related: <Link href="/blog/flower-prices-lahore-2026" className="text-[#8B1E2D] underline">flower prices Lahore 2026</Link> • <Link href="/midnight-flower-delivery-lahore" className="text-[#8B1E2D] underline">midnight delivery</Link> • <Link href="/helium-balloons-lahore" className="text-[#8B1E2D] underline">helium balloons</Link></p>
        </section>
      </article>
    </main>
  );
}
