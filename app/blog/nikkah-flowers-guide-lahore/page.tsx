import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, BUSINESS, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Nikkah Flowers in Lahore (2026 Guide) | Bridal Bouquet, Gajray & Stage Decor",
  },
  description: "Planning a nikkah in Lahore? Bridal bouquet ideas, fresh gajray prices, stage flower decoration costs and same-day delivery. Complete 2026 nikkah flower guide.",
  alternates: {
    canonical: `${SITE_URL}/blog/nikkah-flowers-guide-lahore`,
  },
  openGraph: {
    title: "Nikkah Flowers in Lahore — Bridal Bouquet, Gajray & Decor Guide",
    description: "Bridal bouquets, gajray, stage decor prices and ordering timeline for nikkah ceremonies in Lahore.",
    url: `${SITE_URL}/blog/nikkah-flowers-guide-lahore`,
    type: "article",
  }
};

const FAQS = [
  {
    q: "How much do nikkah flowers cost in Lahore?",
    a: "A bridal bouquet starts at Rs. 3,500, fresh gajray (pair) from Rs. 1,200, and a nikkah stage flower backdrop from Rs. 24,999. A complete nikkah flower package (bouquet + gajray + stage) typically ranges Rs. 35,000–60,000 depending on flowers and venue size."
  },
  {
    q: "How far in advance should I book nikkah flowers?",
    a: "Book 7–10 days ahead for stage decoration and 2–3 days ahead for bridal bouquets and gajray. During wedding season (November–February), book stage decor 3–4 weeks early as dates fill fast."
  },
  {
    q: "Which flowers are best for a nikkah bridal bouquet?",
    a: "White and blush roses, oriental lilies, carnations and baby's breath are the most chosen for nikkahs in Lahore — elegant, photogenic and available fresh. Red roses suit barat/walima; pastels suit daytime nikkahs."
  },
  {
    q: "Do you deliver nikkah flowers to venues and marquees?",
    a: "Yes. We deliver bridal bouquets and gajray to homes, and handle full stage decoration at marquees, farmhouses and halls across Lahore — DHA, Bahria Town, Cantt and beyond — with setup completed before guests arrive."
  },
  {
    q: "Can I get fresh gajray on the nikkah morning?",
    a: "Yes. Gajray are made fresh on the event morning from that day's jasmine and roses, and delivered within 2–5 hours anywhere in Lahore. For large family orders (10+ pairs), order the evening before."
  }
];

export default function NikkahFlowersGuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Nikkah Flowers in Lahore (2026 Guide)",
    description: "Bridal bouquets, gajray, stage decoration prices and timelines for nikkah ceremonies in Lahore.",
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
        <span className="text-[#8B1E2D] font-semibold">Nikkah Flowers Guide</span>
      </nav>
      <header className="space-y-4">
        <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">Wedding Guide • October 2026</span>
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B0B0B] leading-tight">Nikkah Flowers in Lahore: Bouquets, Gajray & Stage Decor (2026)</h1>
        <p className="text-sm text-[#777777]">By Lahore Bouquet Florist Team • Updated 6 October 2026 • 6 min read</p>
        <p className="text-sm sm:text-base leading-relaxed"><strong>Quick answer:</strong> For a Lahore nikkah you need three things — a bridal bouquet (from Rs. 3,500), fresh gajray (from Rs. 1,200/pair) and optionally stage flowers (from Rs. 24,999). Book decor 7–10 days ahead, and call/WhatsApp <strong>{BUSINESS.phone.intl}</strong> for a free quote.</p>
      </header>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">1. The Bridal Bouquet</h2>
        <p className="text-sm leading-relaxed">The nikkah bouquet is photographed more than anything else you wear. In Lahore, the most loved styles are:</p>
        <ul className="space-y-2 text-sm list-disc list-inside leading-relaxed">
          <li><strong>Blush & white rose dome</strong> — timeless, matches any outfit, from Rs. 4,500.</li>
          <li><strong>Oriental lily bouquet</strong> — fragrant statement piece, from Rs. 5,500.</li>
          <li><strong>Pastel mixed bouquet</strong> — roses, carnations and baby's breath for daytime nikkahs, from Rs. 3,500.</li>
          <li><strong>All-red rose bouquet</strong> — bold and traditional, from Rs. 3,800.</li>
        </ul>
        <p className="text-sm leading-relaxed">Browse <Link href="/roses" className="text-[#8B1E2D] underline">rose bouquets</Link> or <Link href="/bouquets" className="text-[#8B1E2D] underline">all bouquets</Link> — every bridal bouquet is hand-tied fresh on the event morning.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">2. Fresh Gajray (Flower Jewellery)</h2>
        <p className="text-sm leading-relaxed">No nikkah is complete without gajray. Our fresh jasmine-and-rose gajray start at <strong>Rs. 1,200 per pair</strong>, with bridal sets (gajray + tikka strands + hathphool) from Rs. 2,500. See our <Link href="/collections/fresh-flower-gajray" className="text-[#8B1E2D] underline">fresh gajray collection</Link>. For mehndi nights, ask about <strong>floral jewellery sets</strong> — maang tikka, earrings and bracelets in fresh flowers (from Rs. 3,500).</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">3. Nikkah Stage Decoration</h2>
        <p className="text-sm leading-relaxed">A flower backdrop transforms the nikkah stage. Packages:</p>
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]"><div className="font-bold text-sm">Elegant — Rs. 24,999</div><p className="text-sm mt-1">Floral stage frame, sofa florals, entrance petals.</p></div>
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]"><div className="font-bold text-sm">Royal — Rs. 44,999</div><p className="text-sm mt-1">Full floral wall, hanging installations, aisle styling.</p></div>
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]"><div className="font-bold text-sm">Luxury — Rs. 79,999+</div><p className="text-sm mt-1">Imported flowers, chandeliers florals, full venue styling.</p></div>
        </div>
        <p className="text-sm leading-relaxed">See <Link href="/wedding-decor" className="text-[#8B1E2D] underline">wedding decor services</Link> for the full portfolio.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Ordering Timeline</h2>
        <ol className="space-y-2 text-sm list-decimal list-inside leading-relaxed">
          <li><strong>3–4 weeks before</strong> (wedding season): book stage decoration.</li>
          <li><strong>7–10 days before:</strong> confirm decor design and venue visit.</li>
          <li><strong>2–3 days before:</strong> order bridal bouquet and gajray.</li>
          <li><strong>Event morning:</strong> fresh flowers prepared and delivered; stage setup completed before guests arrive.</li>
        </ol>
        <a href={whatsappLink("Hello Lahore Bouquet! I need flowers for a nikkah in Lahore. Please share a quote.")} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">Get a Free Nikkah Quote on WhatsApp</a>
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
