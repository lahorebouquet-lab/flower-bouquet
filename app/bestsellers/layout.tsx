import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bestselling Bouquets in Lahore | Top-Rated Fresh Flowers",
  description: "Explore Lahore's favorite floral arrangements. Most-loved fresh Dutch roses, sunflower mixes, and luxury gift combos with same-day express delivery.",
  alternates: {
    canonical: "https://lahorebouquet.com/bestsellers",
  },
  openGraph: {
    title: "Bestselling Bouquets in Lahore | Top-Rated Fresh Flowers",
    description: "Explore Lahore's favorite floral arrangements. Most-loved fresh Dutch roses, sunflower mixes, and luxury gift combos with same-day express delivery.",
    url: "https://lahorebouquet.com/bestsellers",
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
        item: "https://lahorebouquet.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Bestsellers",
        item: "https://lahorebouquet.com/bestsellers",
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
