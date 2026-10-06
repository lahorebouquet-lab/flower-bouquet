import { Metadata } from "next";
import PricesClient from "./PricesClient";
import { FAQ_DATA, SNAPSHOT_PRICES } from "./data";
import { SITE_URL } from "@/lib/business";

export const metadata: Metadata = {
  title: "Flower Bouquet Price in Lahore & Pakistan | Updated October 2026",
  description:
    "See current flower bouquet prices in Lahore, from small bunches to large arrangements. Prices for roses, sunflowers, tulips and chocolate bouquets.",
  keywords: [
    "flower bouquet price in pakistan",
    "flower bouquet price in lahore",
    "bouquet price",
    "flower bucket",
    "large bouquet of flowers",
    "rose bouquet price in lahore",
    "sunflower price in pakistan",
    "tulip flower price in pakistan",
    "chocolate bouquet price in pakistan",
    "lahore flower delivery prices",
  ],
  alternates: {
    canonical: `${SITE_URL}/prices`,
  },
  openGraph: {
    title: "Flower Bouquet Price in Lahore | Free Delivery",
    description: "Bouquet prices in Lahore from PKR 1,180, gajray from PKR 450. Compare real starting prices for chocolate bouquets, wedding décor, car decoration & gifts.",
    url: `${SITE_URL}/prices`,
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: "/images/product_1_eucalyptus_rose.jpg",
        width: 1200,
        height: 630,
        alt: "Flower Bouquet Price in Lahore - Lahore Bouquet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flower Bouquet Price in Lahore | Free Delivery",
    description:
      "Bouquet prices in Lahore from PKR 1,180, gajray from PKR 450. Compare real starting prices for chocolate bouquets, wedding décor, car decoration & gifts.",
    images: ["/images/product_1_eucalyptus_rose.jpg"],
  },
};

export default function PricesPage() {
  // 1. JSON-LD BreadcrumbList Schema
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
        name: "Prices",
        item: `${SITE_URL}/prices`,
      },
    ],
  };

  // 2. JSON-LD FAQPage Schema for Google Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_DATA.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  // 3. JSON-LD WebPage & Product Catalog Schema
  const catalogSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Lahore Bouquet Flower & Décor Price Catalog",
    itemListElement: SNAPSHOT_PRICES.map((item, index) => ({
      "@type": "Offer",
      position: index + 1,
      name: item.name,
      description: item.description,
      priceCurrency: "PKR",
      price: typeof item.startingPrice === "number" ? item.startingPrice : 1000,
      availability: "https://schema.org/InStock",
      url: `https://lahorebouquet.com${item.href}`,
    })),
  };

  return (
    <>
      {/* Structured Data Script Tag */}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(catalogSchema) }}
      />

      {/* Main Interactive Client Page */}
      <PricesClient />
    </>
  );
}
