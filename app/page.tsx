import React from "react";
import type { Metadata } from "next";
import HomeClient from "./components/HomeClient";
import { HOMEPAGE_FAQS } from "./data/homepage";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Shop in Lahore | Same-Day Delivery | Lahore Bouquet",
  },
  description: "Looking for a flower shop near you in Lahore? Lahore Bouquet makes fresh bouquets to order and delivers across the city. Order online or call 0310-4225974.",
  alternates: {
    canonical: `${SITE_URL}`,
  },
  openGraph: {
    title: "Flower Shop in Lahore | Same-Day Delivery | Lahore Bouquet",
    description: "Looking for a flower shop near you in Lahore? Lahore Bouquet makes fresh bouquets to order and delivers across the city. Order online or call 0310-4225974.",
    url: `${SITE_URL}`,
      type: "website",
      locale: "en_PK",
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Flower Shop in Lahore | Fresh Bouquets & Same-Day Delivery | Lahore Bouquet",
        },
    ],
  }
};

import { getSanityProducts, getSanityCategories, getSanityReviews } from "@/sanity/lib/fetch";
import { floristSchema, organizationSchema, SITE_URL } from "@/lib/business";

export default async function HomePage() {
  const [products, categories, reviews] = await Promise.all([
    getSanityProducts(16),
    getSanityCategories(),
    getSanityReviews(),
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

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Order Flowers Online in Lahore",
    description: "Order fresh flower bouquets online from Lahore Bouquet with same-day delivery across Lahore in 3 simple steps.",
    totalTime: "PT5M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "PKR",
      value: "349",
    },
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Pick your flowers",
        text: "Choose a bouquet from our catalog starting at Rs. 349, or tell us your budget on WhatsApp at 0310-4225974. Add a complimentary handwritten wax-sealed card with your message.",
        url: `${SITE_URL}/bouquets`,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Approve photo and video on WhatsApp",
        text: "Our florist hand-ties your bouquet fresh and shares a live photo and video with you on WhatsApp for approval. Nothing is dispatched until you confirm it looks perfect.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "We deliver in 2 to 5 hours",
        text: "Bouquets travel in careful, climate-protected delivery so stems remain crisp in Lahore's weather. Free same-day delivery across DHA, Gulberg, Model Town, Bahria Town, Johar Town and all major Lahore areas.",
      },
    ],
  };

  return (
    <>
      {/* Homepage-only LCP preload: hero image discovered before client hydration */}
      <link
        rel="preload"
        as="image"
        href="/images/hero-blush-elegance-banner.webp"
        imageSrcSet="/images/hero-blush-elegance-banner-mobile.webp 800w, /images/hero-blush-elegance-banner.webp 1600w"
        imageSizes="100vw"
        type="image/webp"
        fetchPriority="high"
      />
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <HomeClient
        initialProducts={products}
        initialCategories={categories}
        initialReviews={reviews}
      />
    </main>
    </>
  );
}
