import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, BUSINESS } from "@/lib/business";
import { withSeo } from "@/lib/seo";
import ExploreLinks from "../../components/ExploreLinks";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

export const metadata: Metadata = withSeo("/blog/wedding-decoration-cost-lahore-2026", {
  title: {
    absolute: "Wedding Decoration Cost in Lahore 2026 | Price Guide",
  },
  description: "How much does wedding decoration cost in Lahore? Real 2026 prices for stage decor, floral arrangements, room decoration and full packages.",
  alternates: {
    canonical: `${SITE_URL}/blog/wedding-decoration-cost-lahore-2026`,
  },
  openGraph: {
    title: "Wedding Decoration Cost in Lahore 2026 | Price Guide",
    description: "Real wedding decoration prices in Lahore 2026 — stage, floral, room decor and package rates.",
    url: `${SITE_URL}/blog/wedding-decoration-cost-lahore-2026`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Wedding decoration cost in Lahore 2026 guide",
      },
    ],
  }
});

const FAQS = [
  {
    q: "How much does wedding stage decoration cost in Lahore?",
    a: "A fresh-flower wedding stage in Lahore typically costs Rs. 25,000–80,000 depending on size, flower selection and venue. Simple backdrop setups start lower; grand multi-panel stages with imported flowers cost more. Message us on WhatsApp (0310-4225974) for a free quote."
  },
  {
    q: "What is the cost of bridal room decoration in Lahore?",
    a: "Bridal room decoration with fresh flowers in Lahore ranges from Rs. 8,000 for a simple romantic setup to Rs. 25,000+ for luxury themes with rose petals, candles and drapes."
  },
  {
    q: "How much does wedding car decoration cost?",
    a: "Fresh-flower wedding car decoration in Lahore costs Rs. 3,000–8,000 depending on the design — from elegant bonnet arrangements to full-car floral styling."
  },
  {
    q: "When should I book wedding decoration in Lahore?",
    a: "Book 4–8 weeks ahead during wedding season (October–February) when decorators are busiest. Off-season (June–August) often has better availability and flexible pricing."
  },
  {
    q: "Do you use fresh or artificial flowers for wedding decor?",
    a: "We use 100% fresh flowers for all wedding decoration — roses, lilies, carnations and seasonal blooms arranged on the day of your event. Fresh flowers photograph beautifully and fill the venue with fragrance."
  }
];

export default function WeddingDecorationCostBlogPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Wedding Decoration Cost in Lahore 2026 | Price Guide",
    description: "Real 2026 wedding decoration prices in Lahore — stage, floral, room decor and package rates.",
    author: { "@type": "Organization", name: "Lahore Bouquet Florist Team", url: `${SITE_URL}` },
    publisher: { "@type": "Organization", name: "Lahore Bouquet", url: `${SITE_URL}` },
    datePublished: "2026-10-12",
    dateModified: "2026-10-12",
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
      <BreadcrumbSchema path="/blog/wedding-decoration-cost-lahore-2026" name="Wedding Decoration Cost in Lahore 2026: Complete Price Guide" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2 mb-6">
        <Link href="/" className="hover:text-[#0B0B0B]">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-[#0B0B0B]">Blog</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Wedding Decoration Cost in Lahore 2026</span>
      </nav>

      <article className="space-y-6">
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B0B0B] leading-tight">
          Wedding Decoration Cost in Lahore 2026: Complete Price Guide
        </h1>

        <p className="text-sm text-[#777]">By Lahore Bouquet Florist Team • Updated October 2026</p>

        <p className="text-sm sm:text-base leading-relaxed">
          Planning a wedding in Lahore? One of the first questions is <strong>how much wedding decoration costs</strong>. Prices range from Rs. 3,000 for simple car florals to Rs. 80,000+ for grand fresh-flower stages. This 2026 guide gives you real price ranges so you can budget with confidence.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B] pt-4">Wedding Decoration Price Table 2026</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[#0B0B0B] text-white">
                <th className="p-3 text-left">Decoration Type</th>
                <th className="p-3 text-left">Price Range</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#E5DED2]">
                <td className="p-3">Wedding car decoration (fresh flowers)</td>
                <td className="p-3 font-bold text-[#8B1E2D]">Rs. 3,000–8,000</td>
              </tr>
              <tr className="border-b border-[#E5DED2] bg-white">
                <td className="p-3">Bridal room decoration</td>
                <td className="p-3 font-bold text-[#8B1E2D]">Rs. 8,000–25,000</td>
              </tr>
              <tr className="border-b border-[#E5DED2]">
                <td className="p-3">Nikkah stage (simple)</td>
                <td className="p-3 font-bold text-[#8B1E2D]">Rs. 15,000–30,000</td>
              </tr>
              <tr className="border-b border-[#E5DED2] bg-white">
                <td className="p-3">Wedding stage (fresh flowers)</td>
                <td className="p-3 font-bold text-[#8B1E2D]">Rs. 25,000–80,000</td>
              </tr>
              <tr className="bg-white">
                <td className="p-3">Full venue floral package</td>
                <td className="p-3 font-bold text-[#8B1E2D]">Custom quote</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs text-[#777] italic">
          Prices are indicative for Lahore 2026 and depend on venue size, flower selection and season. Contact us on WhatsApp (0310-4225974) for a free detailed quote.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B] pt-4">What Affects Wedding Decoration Prices?</h2>

        <ul className="space-y-2 text-sm sm:text-base list-disc list-inside leading-relaxed">
          <li><strong>Fresh vs artificial:</strong> Fresh flowers cost more but look and photograph dramatically better. We use 100% fresh flowers.</li>
          <li><strong>Flower type:</strong> Local roses and carnations are affordable; imported lilies, orchids and Dutch roses raise the budget.</li>
          <li><strong>Season:</strong> October–February is peak wedding season in Lahore — book early for the best rates.</li>
          <li><strong>Venue size:</strong> A home nikkah needs far less decor than a 500-guest marquee.</li>
          <li><strong>Design complexity:</strong> Floral walls, hanging installations and multi-level stages cost more than simple backdrops.</li>
        </ul>

        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B] pt-4">Money-Saving Tips</h2>

        <ul className="space-y-2 text-sm sm:text-base list-disc list-inside leading-relaxed">
          <li><strong>Book off-season</strong> (June–August) for flexible pricing and better availability.</li>
          <li><strong>Reuse ceremony flowers</strong> at the reception — ask your decorator to plan dual-use arrangements.</li>
          <li><strong>Choose seasonal blooms</strong> — they're fresher, cheaper and more fragrant.</li>
          <li><strong>Focus budget on the stage</strong> — it's where 90% of photos happen.</li>
          <li><strong>Get 2–3 quotes</strong> and compare what's actually included (setup, teardown, fresh vs artificial).</li>
        </ul>

        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B] pt-4">Our Wedding Decoration Services</h2>

        <p className="text-sm sm:text-base leading-relaxed">
          Lahore Bouquet offers complete wedding decoration across Lahore — <Link href="/wedding-room-decoration-lahore" className="text-[#8B1E2D] underline">wedding room decoration</Link>, <Link href="/wedding-car-decoration-lahore" className="text-[#8B1E2D] underline">wedding car decoration</Link>, <Link href="/bridal-room-decoration-lahore" className="text-[#8B1E2D] underline">bridal room setups</Link>, plus <Link href="/gajray-lahore" className="text-[#8B1E2D] underline">fresh gajray</Link> and <Link href="/flower-jewellery-lahore" className="text-[#8B1E2D] underline">flower jewellery</Link> for the bridal party. Every setup uses fresh flowers arranged on your event day.
        </p>

        <div className="p-6 rounded-2xl bg-[#0B0B0B] text-white space-y-3 mt-8">
          <h3 className="font-playfair text-xl font-bold">Get a Free Wedding Decor Quote</h3>
          <p className="text-sm text-[#E5DED2]">Share your event date and venue on WhatsApp — free detailed quote within hours</p>
          <Link href="/wedding-decor" className="inline-block px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">
            Explore Wedding Decor →
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
          <p>Related: <Link href="/blog/flower-prices-lahore-2026" className="text-[#8B1E2D] underline">flower prices Lahore 2026</Link> • <Link href="/wedding-decor" className="text-[#8B1E2D] underline">wedding decor</Link> • <Link href="/wedding-decoration-dha-lahore" className="text-[#8B1E2D] underline">wedding decoration DHA</Link></p>
        </section>
      </article>
      <ExploreLinks groups={["guides","occasions"]} exclude="/blog/wedding-decoration-cost-lahore-2026" />
    </main>
  );
}
