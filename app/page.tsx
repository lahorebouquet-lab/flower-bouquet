import React from "react";
import type { Metadata } from "next";
import HomeClient from "./components/HomeClient";
import { HOMEPAGE_FAQS } from "./data/homepage";

export const metadata: Metadata = {
  title: {
    absolute: "Fresh Flowers & Bouquets Delivery in Lahore | Lahore Bouquet",
  },
  description: "Order fresh rose, sunflower and money bouquets in Lahore. Bridal room and car décor too. Delivery in 2 to 5 hours with a photo on WhatsApp first.",
  keywords: [
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
    title: "Fresh Flowers & Bouquets Delivery in Lahore | Lahore Bouquet",
    description: "Order fresh rose, sunflower and money bouquets in Lahore. Bridal room and car décor too. Delivery in 2 to 5 hours with a photo on WhatsApp first.",
    type: "website",
    locale: "en_PK",
  }
};

export default function HomePage() {
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
    image: "https://flowerbouquet.pk/icon.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "MM Alam Road, Gulberg III",
      addressLocality: "Lahore",
      addressRegion: "Punjab",
      postalCode: "54000",
      addressCountry: "PK",
    },
    telephone: "+92 300 1234567",
    priceRange: "Rs. 1,180 - Rs. 14,500",
    openingHours: "Mo-Su 09:00-01:00",
    url: "https://flowerbouquet.pk",
  };

  return (
    <main className="min-h-screen bg-[#101012] text-white">
      {/* Schema.org Microdata */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />

      <HomeClient />
    </main>
  );
}
