import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Cake, Truck, Camera, MessageCircle, HelpCircle, Palette, Heart, Sparkles } from "lucide-react";
import { getSanityProducts } from "@/sanity/lib/fetch";
import { ALL_PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";
import { SITE_URL, itemListSchema } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Custom Cakes in Lahore | Design & Order",
  },
  description: "Order a customized cake in Lahore — your design, flavour & message. Photo approval before dispatch, same-day delivery with fresh flowers.",
  alternates: {
    canonical: `${SITE_URL}/custom-cakes-lahore`,
  },
  keywords: [
    "custom cake lahore",
    "customized cake",
    "birthday cake design lahore",
    "photo cake lahore",
    "custom cake order online",
    "designer cake pakistan",
  ],
  openGraph: {
    title: "Custom Cakes in Lahore | Design & Order",
    description: "Order a customized cake in Lahore — your design, flavour & message. Photo approval before dispatch, same-day delivery with fresh flowers.",
    url: `${SITE_URL}/custom-cakes-lahore`,
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Custom Cakes in Lahore | Design & Order",
      },
    ],
  },
};

const FAQS = [
  {
    q: "How do I order a customized cake in Lahore?",
    a: "WhatsApp us (0310-4225974) your design idea or reference photo, plus flavour, size and message. We confirm the design, bake it fresh, share a photo for approval, and deliver the same day."
  },
  {
    q: "Can you make a photo/picture cake?",
    a: "Yes. Send us the photo on WhatsApp and we'll print it on the cake with food-safe edible printing. Perfect for birthdays and anniversaries — share a clear, high-resolution image."
  },
  {
    q: "What flavours and sizes are available?",
    a: "Chocolate, vanilla, strawberry, pineapple, red velvet and more — from 1 lb to multi-tier celebration cakes. Tell us your servings count and we'll suggest the right size."
  },
  {
    q: "Can I combine a custom cake with flowers?",
    a: "Absolutely — that's our speciality. Pair your customized cake with a fresh bouquet, chocolate bouquet or teddy bear for a complete surprise package delivered together."
  },
  {
    q: "How much notice do you need for a custom cake?",
    a: "Simple custom designs: same-day if you order before 2:00 PM. Elaborate or tiered cakes: please order a day ahead so our bakers have full preparation time."
  },
  {
    q: "Do you write messages on the cake?",
    a: "Yes — any name, wish or message piped in elegant icing, plus a complimentary handwritten greeting card with your bouquet if you order flowers too."
  },
];

export default async function CustomCakesLahorePage() {
  const sanityProducts = await getSanityProducts();
  const allProducts = sanityProducts.length > 0 ? sanityProducts : ALL_PRODUCTS;
  const cakeProducts = allProducts.filter(p =>
    p.category === "Gifts & Cakes" ||
    p.title.toLowerCase().includes("cake")
  ).slice(0, 8);

  const itemListJsonLd = itemListSchema(cakeProducts, `${SITE_URL}/custom-cakes-lahore`, "Custom Cakes in Lahore");

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
      { "@type": "ListItem", position: 2, name: "Custom Cakes in Lahore", item: `${SITE_URL}/custom-cakes-lahore` },
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
    "@id": `${SITE_URL}/custom-cakes-lahore#service`,
    name: "Customized Cake Design in Lahore",
    url: `${SITE_URL}/custom-cakes-lahore`,
    provider: { "@id": `${SITE_URL}#florist` },
    areaServed: { "@type": "City", name: "Lahore, Pakistan" },
    description: "Order a customized cake in Lahore — your design, flavour, size and message. Photo approval before dispatch, same-day delivery with fresh flowers.",
  };

  const waLink = `https://wa.me/923104225974?text=${encodeURIComponent("Assalam-o-Alaikum! I want a CUSTOM cake. Design/flavour/size: [details]. Please confirm!")}`;

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
          <span className="text-[#0B0B0B] font-semibold">Custom Cakes</span>
        </nav>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8B1E2D] text-white text-[11px] font-bold tracking-widest uppercase">
          <Cake className="w-3.5 h-3.5 text-[#C6A15B]" /> Baked To Your Design
        </div>
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B0B0B]">
          Custom Cakes in Lahore — Your Design, Our Ovens
        </h1>
        <p className="text-sm max-w-2xl mx-auto leading-relaxed">
          Photo cakes, themed birthday cakes, anniversary designs — send us your idea or a reference
          photo on WhatsApp. We bake it fresh, share a photo for your approval, and deliver it with
          fresh flowers across Lahore the same day.
        </p>
        <a href={waLink} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#0E7C5B] text-white font-bold text-sm hover:opacity-90 transition-opacity">
          <MessageCircle className="w-4 h-4" /> Design My Cake on WhatsApp
        </a>
      </section>

      {/* How it works */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { icon: MessageCircle, t: "1. Send your design", d: "WhatsApp us a photo, theme, flavour, size and the message for the cake." },
          { icon: Camera, t: "2. Approve the photo", d: "We bake it fresh and send you a photo. It only dispatches when you approve." },
          { icon: Truck, t: "3. Delivered together", d: "Your cake arrives with fresh flowers in 2–5 hours, anywhere in Lahore." },
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
            { icon: Cake, t: "Design & Theme", d: "Photo cakes, cartoon themes, floral designs, wedding tiers" },
            { icon: Palette, t: "Flavours", d: "Chocolate, vanilla, strawberry, pineapple, red velvet & more" },
            { icon: Heart, t: "Message", d: "Names & wishes piped in icing + free handwritten greeting card" },
            { icon: Sparkles, t: "Combos", d: "Pair with bouquets, chocolate bouquets, teddies & fairy lights" },
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
      {cakeProducts.length > 0 && (
        <section className="space-y-6">
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B] text-center">
            Cakes & Gifts to Pair With Yours
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {cakeProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-white p-8 rounded-2xl border border-[#E5DED2] space-y-6">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold">Custom Cake FAQs</h2>
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
        <Link href="/custom-bouquets-lahore" className="text-[#8B1E2D] underline">Custom Bouquets</Link>
        <Link href="/gifts-and-cakes" className="text-[#8B1E2D] underline">Gifts & Cakes</Link>
        <Link href="/birthday-surprises" className="text-[#8B1E2D] underline">Birthday Surprises</Link>
      </section>
    </main>
  );
}
