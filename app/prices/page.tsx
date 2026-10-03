import { Metadata } from "next";
import PricesClient from "./PricesClient";
import { FAQ_DATA, SNAPSHOT_PRICES } from "./data";

export const metadata: Metadata = {
  title: "Flower Bouquet Price in Lahore | Free Delivery | Lahore Bouquet",
  description:
    "Bouquet prices in Lahore from PKR 1,180, gajray from PKR 450. Compare real starting prices for chocolate bouquets, wedding décor, car decoration & gifts. WhatsApp for exact quote.",
  keywords: [
    "flower bouquet price in lahore",
    "bouquet price in lahore",
    "cheap bouquet price lahore",
    "rose bouquet price in lahore",
    "sunflower bouquet price in lahore",
    "chocolate bouquet price lahore",
    "wedding room decoration price in lahore",
    "wedding car decoration price lahore",
    "gajray price in lahore",
    "flower jewellery price lahore",
    "mehndi jewellery price in lahore",
    "lahore flower delivery prices",
  ],
  alternates: {
    canonical: "https://lahoreblooms.com/prices/",
  },
  openGraph: {
    title: "Flower Bouquet Price in Lahore | Free Delivery | Lahore Bouquet",
    description:
      "Bouquet prices in Lahore from PKR 1,180, gajray from PKR 450. Compare real starting prices for chocolate bouquets, wedding décor, car decoration & gifts. WhatsApp for exact quote.",
    url: "https://lahoreblooms.com/prices/",
    siteName: "Lahore Bouquet",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/lahoreblooms/crimson_blush.webp",
        width: 1200,
        height: 630,
        alt: "Flower Bouquet Price in Lahore - Lahore Bouquet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flower Bouquet Price in Lahore | Free Delivery | Lahore Bouquet",
    description:
      "Bouquet prices in Lahore from PKR 1,180, gajray from PKR 450. Compare real starting prices for chocolate bouquets, wedding décor, car decoration & gifts.",
    images: ["/images/lahoreblooms/crimson_blush.webp"],
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
        item: "https://lahoreblooms.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Prices",
        item: "https://lahoreblooms.com/prices/",
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
      url: `https://lahoreblooms.com${item.href}`,
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
