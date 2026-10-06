import React from "react";
import type { Metadata } from "next";
import HomeClient from "./components/HomeClient";
import { HOMEPAGE_FAQS } from "./data/homepage";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Shop in Lahore | Fresh Bouquets & Same-Day Delivery | Lahore Bouquet",
  },
  description: "Looking for a flower shop near you in Lahore? Lahore Bouquet makes fresh bouquets to order and delivers across the city. Order online or call 0310-4225974.",
  alternates: {
    canonical: `${SITE_URL}`,
  },
  keywords: [
    "flower shop near me",
    "flower shop",
    "flowers near me",
    "florist",
    "bouquet shop near me",
    "fresh flowers",
    "florist near me",
    "flower wala",
    "flower delivery lahore",
    "fresh bouquets lahore",
    "red rose bouquet lahore",
    "sunflower bouquet lahore",
    "money bouquet lahore",
    "bridal room decor lahore",
    "wedding car decoration lahore",
    "lahore bouquet"
  ],
  openGraph: {
    title: "Flower Shop in Lahore | Fresh Bouquets & Same-Day Delivery | Lahore Bouquet",
    description: "Looking for a flower shop near you in Lahore? Lahore Bouquet makes fresh bouquets to order and delivers across the city. Order online or call 0310-4225974.",
    url: `${SITE_URL}`,
    type: "website",
    locale: "en_PK",
    images: [
      {
        url: `${SITE_URL}/images/hero-luxury-banner.webp`,
        width: 1024,
        height: 443,
        alt: "Flower Shop in Lahore | Fresh Bouquets & Same-Day Delivery | Lahore Bouquet",
      },
    ],
  }
};

import { getSanityProducts, getSanityCategories } from "@/sanity/lib/fetch";
import { floristSchema, organizationSchema, SITE_URL } from "@/lib/business";

export default async function HomePage() {
  const [products, categories] = await Promise.all([
    getSanityProducts(),
    getSanityCategories(),
  ]);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOMEPAGE_FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  const businessSchema = floristSchema();
  const orgSchema = organizationSchema();

  return (
    <main className="min-h-screen bg-[#F8F3EA] text-[#101012]">
      {/* Schema.org Microdata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      <HomeClient
        initialProducts={products}
        initialCategories={categories}
      />
    </main>
  );
}
