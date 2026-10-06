import type { Metadata } from "next";
import { SITE_URL } from "@/lib/business";

export const metadata: Metadata = {
  title: "Bestselling Bouquets in Lahore | Top-Rated Fresh Flowers",
  description: "Explore Lahore's favorite floral arrangements. Most-loved fresh Dutch roses, sunflower mixes, and luxury gift combos with same-day express delivery.",
  alternates: {
    canonical: `${SITE_URL}/bestsellers`,
  },
  openGraph: {
    title: "Bestselling Bouquets in Lahore | Top-Rated Fresh Flowers",
    description: "Explore Lahore's favorite floral arrangements. Most-loved fresh Dutch roses, sunflower mixes, and luxury gift combos with same-day express delivery.",
    url: `${SITE_URL}/bestsellers`,
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
  },
};

export default function BestsellersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        name: "Bestsellers",
        item: `${SITE_URL}/bestsellers`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
