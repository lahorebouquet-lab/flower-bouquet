import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Custom Cake Order Guide Lahore: Designs & Prices",
  },
  description: "How to order a customized cake in Lahore — photo cakes, themes, flavours, sizes & prices. Same-day delivery with fresh flowers.",
  alternates: {
    canonical: `${SITE_URL}/blog/custom-cake-order-guide-lahore`,
  },
  openGraph: {
    title: "Custom Cake Order Guide Lahore: Designs & Prices",
    description: "How to order a customized cake in Lahore — photo cakes, themes, flavours, sizes & prices.",
    url: `${SITE_URL}/blog/custom-cake-order-guide-lahore`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Custom Cake Order Guide Lahore: Designs & Prices",
      },
    ],
  }
};

const FAQS = [
  {
    q: "How much does a customized cake cost in Lahore?",
    a: "Custom cakes start around Rs. 2,500 for a 1 lb simple design. Photo cakes and themed designs range Rs. 3,500–6,000; multi-tier wedding cakes are quoted per design."
  },
  {
    q: "Can I get a photo cake delivered today?",
    a: "Yes — send a clear photo on WhatsApp before 2:00 PM and we'll bake, print and deliver your photo cake the same day across Lahore."
  },
  {
    q: "What cake flavours can I choose?",
    a: "Chocolate, vanilla, strawberry, pineapple, red velvet and more. Tell us the birthday person's favourite and we'll bake it fresh."
  },
];

export default function CustomCakeGuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Order a Customized Cake in Lahore: Designs, Flavours & Prices",
    description: "Complete guide to ordering custom cakes in Lahore — photo cakes, themed designs, flavours, sizes, pricing and same-day delivery.",
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
        <span className="text-[#0B0B0B]">Custom Cake Guide</span>
      </nav>

      <header className="space-y-3">
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B0B0B]">
          How to Order a Customized Cake in Lahore
        </h1>
        <p className="text-sm text-[#777777]">October 6, 2026 • 5 min read • Lahore Bouquet Florist Team</p>
      </header>

      <div className="space-y-6 text-[15px] leading-relaxed">
        <p>
          A birthday without a cake that <em>screams</em> the person&apos;s personality is a missed
          opportunity. Whether it&apos;s a photo cake, a cartoon theme for kids, or an elegant floral
          anniversary design — here&apos;s exactly how to order a <Link href="/custom-cakes-lahore" className="text-[#8B1E2D] font-semibold underline">customized cake in Lahore</Link> and
          get it delivered the same day with fresh flowers.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Step 1: Choose Your Design</h2>
        <p>
          <strong>Photo cakes</strong> (edible print of any picture), <strong>themed cakes</strong> (cartoons,
          superheroes, florals), and <strong>tiered celebration cakes</strong> are the most popular. Browse
          Pinterest or Instagram, screenshot what you love, and send it on{" "}
          <a href="https://wa.me/923104225974" target="_blank" rel="noopener noreferrer" className="text-[#8B1E2D] font-semibold underline">WhatsApp</a>.
          Our bakers confirm what's achievable before you pay a rupee.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Step 2: Pick Flavour & Size</h2>
        <p>
          Chocolate and vanilla are crowd-pleasers; red velvet feels premium. As a rule of thumb:
          <strong> 1 lb serves 6–8 people</strong>, 2 lb serves 12–15. Custom cakes start around{" "}
          <strong>Rs. 2,500</strong> — photo and themed designs run Rs. 3,500–6,000 depending on detail.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Step 3: Add Your Message</h2>
        <p>
          Names and wishes piped in elegant icing — plus, when you pair it with flowers, a complimentary
          handwritten greeting card. Midnight surprise? Order before 8:00 PM for our 11:30 PM–12:15 AM slot.
        </p>

        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Step 4: Approve & Receive Same-Day</h2>
        <p>
          We bake fresh, send you a <strong>photo for approval</strong>, then dispatch. Your cake arrives
          with fresh flowers in 2–5 hours anywhere in Lahore. Pair it with a{" "}
          <Link href="/custom-bouquets-lahore" className="text-[#8B1E2D] font-semibold underline">custom bouquet</Link>{" "}
          for the ultimate surprise package.
        </p>

        <div className="bg-white p-6 rounded-2xl border border-[#C6A15B]/40">
          <h3 className="font-bold text-[#0B0B0B] mb-2">Pro tip: order before 2:00 PM</h3>
          <p className="text-sm">
            Custom cakes need baking + decorating time. Order before 2:00 PM for guaranteed same-day
            delivery; elaborate tiered designs need a day&apos;s notice.
          </p>
        </div>
      </div>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Custom Cake FAQs</h2>
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
        <a href="https://wa.me/923104225974?text=Assalam-o-Alaikum! I want a CUSTOM cake. Design/flavour/size:" target="_blank" rel="noopener noreferrer"
          className="inline-block px-8 py-3.5 rounded-full bg-[#8B1E2D] text-white font-bold text-sm hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">
          Design My Cake on WhatsApp
        </a>
      </div>
    </article>
  );
}
