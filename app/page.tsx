import React from "react";
import type { Metadata } from "next";
import HomeClient from "./components/HomeClient";
import { HOMEPAGE_FAQS } from "./data/homepage";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Shop in Lahore | Fresh Bouquets & Same-Day Delivery | Lahore Bouquet",
  },
  description: "Looking for a flower shop near you in Lahore? Lahore Bouquet makes fresh bouquets to order and delivers across the city. Order online or call 0309-4895080.",
  alternates: {
    canonical: "https://lahorebouquet.com",
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
    description: "Looking for a flower shop near you in Lahore? Lahore Bouquet makes fresh bouquets to order and delivers across the city. Order online or call 0309-4895080.",
    url: "https://lahorebouquet.com",
    type: "website",
    locale: "en_PK",
  }
};

import { getSanityProducts, getSanityReviews, getSanityCategories } from "@/sanity/lib/fetch";

export default async function HomePage() {
  const [products, reviews, categories] = await Promise.all([
    getSanityProducts(),
    getSanityReviews(),
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

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Florist",
    name: "Lahore Bouquet",
    image: "https://lahorebouquet.com/icon.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "MM Alam Road, Gulberg III",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      postalCode: "54000",
      addressCountry: "PK",
    },
    telephone: "+923094895080",
    priceRange: "Rs. 1,180 - Rs. 14,500",
    openingHours: "Mo-Su 09:00-01:00",
    url: "https://lahorebouquet.com",
  };

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

      <HomeClient
        initialProducts={products}
        initialReviews={reviews}
        initialCategories={categories}
      />
    </main>
  );
}
