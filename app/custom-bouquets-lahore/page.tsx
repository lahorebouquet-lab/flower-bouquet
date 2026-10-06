import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Palette, Truck, Camera, MessageCircle, HelpCircle, Flower2, Heart, Sparkles } from "lucide-react";
import { getSanityProducts } from "@/sanity/lib/fetch";
import { ALL_PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";
import { SITE_URL, itemListSchema } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Custom Bouquets in Lahore | Design Your Own",
  },
  description: "Design your own custom bouquet in Lahore — pick flowers, colours & wrapping. WhatsApp us your idea, approve the photo, get same-day delivery.",
  alternates: {
    canonical: `${SITE_URL}/custom-bouquets-lahore`,
  },
  keywords: [
    "custom bouquet lahore",
    "customized bouquet",
    "design your own bouquet",
    "personalized flower bouquet",
    "custom flower arrangement lahore",
    "bespoke bouquet pakistan",
  ],
  openGraph: {
    title: "Custom Bouquets in Lahore | Design Your Own",
    description: "Design your own custom bouquet in Lahore — pick flowers, colours & wrapping. WhatsApp us your idea, approve the photo, get same-day delivery.",
    url: `${SITE_URL}/custom-bouquets-lahore`,
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Custom Bouquets in Lahore | Design Your Own",
      },
    ],
  },
};

const FAQS = [
  {
    q: "How do I order a custom bouquet in Lahore?",
    a: "Message us on WhatsApp (0310-4225974) with your idea — flower types, colours, budget and occasion. Our florist suggests a design, you approve the photo, and we deliver the same day across Lahore."
  },
  {
    q: "Can I choose specific flowers and colours?",
    a: "Yes. Pick from roses (red, pink, white, yellow), lilies, sunflowers, carnations, baby's breath and seasonal blooms. Choose your wrapping — kraft paper, satin, premium box — and ribbon colour."
  },
  {
    q: "How much does a customized bouquet cost?",
    a: "Custom bouquets start from Rs. 1,900 for a small hand-tied bunch. Price depends on flower types and size — imported Dutch roses cost more than local seasonal flowers. Share your budget and we'll design within it."
  },
  {
    q: "Can you copy a bouquet design from a photo?",
    a: "Yes — send us any reference photo (Instagram, Pinterest) on WhatsApp and we'll recreate it as closely as fresh-flower availability allows, then share our version for your approval before dispatch."
  },
  {
    q: "How long does a custom bouquet take?",
    a: "Most custom bouquets are ready in 2–5 hours for same-day delivery. Very elaborate designs may need a day's notice — message us early for weddings and events."
  },
  {
    q: "Can I add a personal message card?",
    a: "Yes — every custom bouquet includes a complimentary handwritten card with your message. Just send us the text on WhatsApp when you order."
  },
];

export default async function CustomBouquetsLahorePage() {
  const sanityProducts = await getSanityProducts();
  const allProducts = sanityProducts.length > 0 ? sanityProducts : ALL_PRODUCTS;
  const bouquetProducts = allProducts.filter(p =>
    p.category === "Bouquets" ||
    p.title.toLowerCase().includes("bouquet") ||
    p.title.toLowerCase().includes("rose")
  ).slice(0, 8);

  const itemListJsonLd = itemListSchema(bouquetProducts, `${SITE_URL}/custom-bouquets-lahore`, "Custom Bouquets in Lahore");

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
      { "@type": "ListItem", position: 2, name: "Custom Bouquets in Lahore", item: `${SITE_URL}/custom-bouquets-lahore` },
    ],
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/custom-bouquets-lahore#service`,
    name: "Custom Bouquet Design in Lahore",
    url: `${SITE_URL}/custom-bouquets-lahore`,
    provider: { "@id": `${SITE_URL}#florist` },
    areaServed: { "@type": "City", name: "Lahore, Pakistan" },
    description: "Design your own flower bouquet in Lahore — choose flowers, colours, wrapping and card message. Same-day delivery with WhatsApp photo approval.",
  };

  const waLink = `https://wa.me/923104225974?text=${encodeURIComponent("Assalam-o-Alaikum! I want a CUSTOM bouquet. My idea: [flowers/colours/budget]. Please suggest a design!")}`;

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />

      {/* Hero */}
      <section className="text-center space-y-4">
        <nav aria-label="Breadcrumb" className="text-xs text-[#636363]">
          <Link href="/" className="hover:text-[#8B1E2D]">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-[#0B0B0B] font-semibold">Custom Bouquets</span>
        </nav>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8B1E2D] text-white text-[11px] font-bold tracking-widest uppercase">
          <Palette className="w-3.5 h-3.5 text-[#C6A15B]" /> Made Just For You
        </div>
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B0B0B]">
          Custom Bouquets in Lahore — Designed Your Way
        </h1>
        <p className="text-sm max-w-2xl mx-auto leading-relaxed">
          Don&apos;t settle for ready-made. Tell us your flowers, colours, wrapping and budget —
          our florist hand-ties a one-of-a-kind bouquet, shares a live photo for your approval,
          and delivers it across Lahore the same day.
        </p>
        <a href={waLink} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0E7C5B] text-white font-bold text-sm hover:opacity-90 transition-opacity">
          <MessageCircle className="w-4 h-4" /> Start My Custom Bouquet on WhatsApp
        </a>
      </section>

      {/* How it works */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { icon: MessageCircle, t: "1. Share your idea", d: "WhatsApp us flower types, colours, budget & occasion — or a reference photo." },
          { icon: Camera, t: "2. Approve the photo", d: "We hand-tie your bouquet fresh and send a live photo. Nothing dispatches until you love it." },
          { icon: Truck, t: "3. Same-day delivery", d: "Delivered across Lahore in 2–5 hours with your handwritten card message." },
        ].map((s) => (
          <div key={s.t} className="bg-white p-6 rounded-2xl border border-[#E5DED2] text-center space-y-2">
            <s.icon className="w-8 h-8 text-[#8B1E2D] mx-auto" />
            <h2 className="font-bold text-[#0B0B0B]">{s.t}</h2>
            <p className="text-xs text-[#636363] leading-relaxed">{s.d}</p>
          </div>
        ))}
      </section>

      {/* Customization options */}
      <section className="bg-white p-8 rounded-2xl border border-[#E5DED2] space-y-6">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B] text-center">What You Can Customize</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {[
            { icon: Flower2, t: "Flower Types", d: "Roses, lilies, sunflowers, carnations, baby's breath & seasonal blooms" },
            { icon: Palette, t: "Colours", d: "Red, pink, white, yellow, pastel mixes — or your own colour theme" },
            { icon: Sparkles, t: "Wrapping", d: "Kraft paper, satin wrap, premium gift box, ribbon & bow styles" },
            { icon: Heart, t: "Extras", d: "Chocolates, teddy bear, greeting card, fairy lights, photo prints" },
          ].map((c) => (
            <div key={c.t} className="p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2] space-y-1.5">
              <c.icon className="w-5 h-5 text-[#8B1E2D]" />
              <h3 className="font-bold text-[#0B0B0B] text-sm">{c.t}</h3>
              <p className="text-[#636363] leading-relaxed">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Products */}
      {bouquetProducts.length > 0 && (
        <section className="space-y-6">
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B] text-center">
            Popular Bouquets to Customize From
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {bouquetProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          <p className="text-center text-xs text-[#636363]">
            Like one of these? Ask us to customize its colours, size or wrapping on{" "}
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="text-[#8B1E2D] font-bold underline">WhatsApp</a>.
          </p>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-white p-8 rounded-2xl border border-[#E5DED2] space-y-6">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold">Custom Bouquet FAQs</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FAQS.map((f) => (
            <div key={f.q} className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
              <h3 className="font-semibold text-[#0B0B0B] text-sm">{f.q}</h3>
              <p className="text-xs text-[#2A2A2A] leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related */}
      <section className="text-center text-xs text-[#636363] space-x-4">
        <span className="font-bold text-[#0B0B0B]">Related:</span>
        <Link href="/custom-cakes-lahore" className="text-[#8B1E2D] underline">Custom Cakes</Link>
        <Link href="/bouquets" className="text-[#8B1E2D] underline">All Bouquets</Link>
        <Link href="/gifts-and-cakes" className="text-[#8B1E2D] underline">Gifts & Cakes</Link>
      </section>
    </main>
  );
}
