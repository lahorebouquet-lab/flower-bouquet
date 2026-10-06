import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../components/ProductCard";
import { Sun, Truck, Camera, MessageCircle, HelpCircle } from "lucide-react";
import { SITE_URL, itemListSchema } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Sunflower Bouquets in Lahore | Shop Fresh Sunflowers",
  },
  description: "Shop fresh sunflower bouquets in Lahore. Bright cheerful blooms, hand-tied daily. Prices from Rs. 1,590 with same-day delivery across the city.",
  alternates: {
    canonical: `${SITE_URL}/sunflowers`,
  },
  keywords: [
    "sunflower bouquet",
    "sunflower price in pakistan",
    "sunflower bouquet lahore",
    "buy sunflowers lahore",
    "fresh sunflower delivery lahore"
  ],
  openGraph: {
    title: "Sunflower Bouquets in Lahore | Shop Fresh Sunflowers",
    description: "Shop fresh sunflower bouquets in Lahore. Bright cheerful blooms, hand-tied daily. Prices from Rs. 1,590 with same-day delivery across the city.",
    url: `${SITE_URL}/sunflowers`,
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Sunflower Bouquets in Lahore | Shop Fresh Sunflowers",
      },
    ],
  },
};

export default async function SunflowersPage() {
  const allProducts = await getSanityProducts();
  const sunflowers = allProducts.filter(p => p.category === "Sunflowers");

  const itemListJsonLd = itemListSchema(sunflowers, `${SITE_URL}/sunflowers`, "Sunflower Bouquets in Lahore");

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Bouquets",
        item: `${SITE_URL}/bouquets`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Sunflowers",
        item: `${SITE_URL}/sunflowers`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a sunflower bouquet cost in Pakistan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sunflower bouquets in Pakistan start from Rs. 1,590 for a two-stem bunch and range up to Rs. 2,600 to Rs. 3,800 for sunflower and rose mixed bouquets."
        }
      },
      {
        "@type": "Question",
        name: "How long do fresh sunflowers last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With fresh clean water and stems trimmed every two days, fresh sunflowers typically last between 5 to 7 days in indoor conditions."
        }
      },
      {
        "@type": "Question",
        name: "Do sunflowers symbolize anything special?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sunflowers commonly symbolize loyalty, optimism, warmth, and adoration, making them the perfect thoughtful gift for friends and family."
        }
      }
    ]
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/bouquets" className="hover:text-[#0B0B0B] transition-colors">Bouquets</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Sunflowers</span>
      </nav>

      {/* Hero Category Banner (Section 5 Standard) */}
      <section className="bg-[#0B0B0B] p-8 sm:p-12 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
            <Sun className="w-3.5 h-3.5 fill-[#C6A15B] text-[#C6A15B]" />
            Golden Radiant Stems
          </span>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Sunflower Bouquet in Lahore
          </h1>

          <p className="text-[#F8F3EA]/90 text-xs sm:text-sm leading-relaxed font-light">
            A sunflower bouquet is the happiest gift you can send. Big, yellow, and impossible to ignore, it works for birthdays, graduations, thank-yous, and cheering someone up. Our fresh sunflower bouquets start at <strong>Rs. 1,590</strong> and are delivered fresh across Lahore in 2 to 5 hours with a photo on WhatsApp before dispatch.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#C6A15B]" /> Delivery in 2 to 5 hours</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before it leaves</span>
            <a 
              href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20sunflowers."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#C6A15B] font-semibold hover:underline"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Showing {sunflowers.length} cheerful sunflower bouquets</span>
          <span className="text-[#8B1E2D] font-semibold">Same-day express delivery active in Lahore</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {sunflowers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Category FAQ */}
      <section className="bg-white p-8 sm:p-10 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#2A2A2A] leading-relaxed">
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Are sunflowers available all year?</h3>
            <p>Availability changes with the season. If we cannot get fresh stems, we will tell you before you pay.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">How long do sunflowers last?</h3>
            <p>Usually about a week with fresh water.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
