import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { SITE_URL } from "@/lib/business";
import LandingPage from "./LandingPage";

export const viewport: Viewport = {
  // Theme color from the owner-supplied page (client/index.html, SEO/AEO/GEO
  // update); overrides the site-wide #8B1E2D on this route only.
  themeColor: "#8E2438",
};

const PAGE_TITLE = "Flower Delivery in Lahore | Lahore Bouquet";
const PAGE_DESCRIPTION =
  "Order flower bouquets in Lahore from Lahore Bouquet. Shop roses, birthday and anniversary flowers with same-day delivery in listed Lahore areas.";
const PAGE_URL = `${SITE_URL}/order-flowers-lahore`;
const HERO_IMAGE_URL =
  "https://cdn.sanity.io/images/hgqfqfmw/production/3adcea6f2309a235f104143cd6f5b5eafbc17658-4030x4076.webp?w=1200&q=80&auto=format";

export const metadata: Metadata = {
  title: {
    absolute: PAGE_TITLE,
  },
  description: PAGE_DESCRIPTION,
  // SEO/AEO/GEO update (owner-approved 2026-11-10): the Ads landing page is
  // now indexable. It was noindex until this change.
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  other: {
    "geo.region": "PK-PB",
    "geo.placename": "Lahore, Punjab, Pakistan",
  },
  alternates: {
    canonical: PAGE_URL,
  },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    url: PAGE_URL,
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: HERO_IMAGE_URL,
        alt: "Real Lahore Bouquet rose bouquet photograph",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description:
      "Order flower bouquets in Lahore for birthdays, anniversaries and romantic surprises. Same-day delivery in listed Lahore areas.",
    images: [HERO_IMAGE_URL],
  },
};

/* Structured data from the owner-supplied SEO/AEO/GEO update. Uses the real
 * business details and the actual FAQs shown on this page. No street
 * address or coordinates were invented. */
const JSON_LD = `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Florist",
      "@id": "https://lahorebouquet.com/#florist",
      "name": "Lahore Bouquet",
      "url": "https://lahorebouquet.com/",
      "image": "https://cdn.sanity.io/images/hgqfqfmw/production/3adcea6f2309a235f104143cd6f5b5eafbc17658-4030x4076.webp",
      "telephone": "+923104225974",
      "email": "lahorebouquet@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lahore",
        "addressRegion": "Punjab",
        "addressCountry": "PK"
      },
      "areaServed": [
        { "@type": "City", "name": "Lahore" },
        { "@type": "Place", "name": "DHA Phases 1–9, Lahore" },
        { "@type": "Place", "name": "Gulberg I–III, Lahore" },
        { "@type": "Place", "name": "Bahria Town, Lahore" },
        { "@type": "Place", "name": "Model Town, Lahore" },
        { "@type": "Place", "name": "Johar Town, Lahore" },
        { "@type": "Place", "name": "Lahore Cantt" },
        { "@type": "Place", "name": "Askari, Lahore" },
        { "@type": "Place", "name": "Wapda Town, Lahore" },
        { "@type": "Place", "name": "Township, Lahore" },
        { "@type": "Place", "name": "Faisal Town, Lahore" }
      ],
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "00:00",
          "closes": "01:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "09:00",
          "closes": "23:59"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://lahorebouquet.com/#website",
      "url": "https://lahorebouquet.com/",
      "name": "Lahore Bouquet",
      "publisher": { "@id": "https://lahorebouquet.com/#florist" },
      "inLanguage": "en-PK"
    },
    {
      "@type": "WebPage",
      "@id": "https://lahorebouquet.com/order-flowers-lahore#webpage",
      "url": "https://lahorebouquet.com/order-flowers-lahore",
      "name": "Flower Delivery in Lahore | Lahore Bouquet",
      "description": "Order flower bouquets in Lahore from Lahore Bouquet. Shop roses, birthday and anniversary flowers with same-day delivery in listed Lahore areas.",
      "isPartOf": { "@id": "https://lahorebouquet.com/#website" },
      "about": { "@id": "https://lahorebouquet.com/#florist" },
      "inLanguage": "en-PK"
    },
    {
      "@type": "FAQPage",
      "@id": "https://lahorebouquet.com/order-flowers-lahore#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How quickly can you deliver flowers in Lahore?",
          "acceptedAnswer": { "@type": "Answer", "text": "Same-day delivery is available, usually within 2–5 hours, depending on the area and order time." }
        },
        {
          "@type": "Question",
          "name": "Do you offer free delivery?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Free delivery is available across the listed Lahore delivery areas. If you are outside them, message Lahore Bouquet on WhatsApp and the team will confirm availability." }
        },
        {
          "@type": "Question",
          "name": "Can I see the bouquet before delivery?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Lahore Bouquet shares a photo of your finished bouquet on WhatsApp before dispatch so you can approve it." }
        },
        {
          "@type": "Question",
          "name": "Do you deliver at midnight?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. The midnight surprise slot runs from 11:30 PM to 12:15 AM. Advance booking is recommended." }
        },
        {
          "@type": "Question",
          "name": "How can I pay?",
          "acceptedAnswer": { "@type": "Answer", "text": "Payment options include bank transfer, JazzCash, EasyPaisa and international debit or credit cards. Payment is confirmed on WhatsApp before dispatch." }
        },
        {
          "@type": "Question",
          "name": "What is the starting price?",
          "acceptedAnswer": { "@type": "Answer", "text": "Hand-tied bouquets start from Rs. 1,239. The final price depends on the flowers, size and extras you choose." }
        },
        {
          "@type": "Question",
          "name": "Can customers from overseas order flowers?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. Customers in the UK, USA, UAE and elsewhere can order flowers for delivery to someone in Lahore and pay by card." }
        }
      ]
    }
  ]
}`;

export default function OrderFlowersLahorePage() {
  return (
    <>
      {/* REPLACE AW-XXXXXXXXX WITH YOUR GOOGLE ADS TAG ID */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"
      />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          if (typeof gtag === 'function') {
            gtag('config', 'AW-XXXXXXXXX');
          }
        `}
      </Script>
      {/* Plain <script> tag, not next/script: this site's established
          JSON-LD pattern (see app/page.tsx, blog pages). next/script drops
          inline JSON-LD from the SSR HTML. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON_LD }}
      />
      <LandingPage />
    </>
  );
}
