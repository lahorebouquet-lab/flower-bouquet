import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import StoreLayoutWrapper from "./components/StoreLayoutWrapper";
import { SITE_URL } from "@/lib/business";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const IS_PROD_HOST =
  process.env.VERCEL_ENV === "production" ||
  (!process.env.VERCEL && !SITE_URL.includes("vercel.app"));

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      template: "%s | Lahore Bouquet - Fresh Flowers Lahore",
      default: "Lahore Bouquet - Fresh Handcrafted Bouquets & Flower Delivery in Lahore",
    },
    description: "Send fresh handcrafted flower bouquets, imported roses, sunflowers, money bouquets, wedding decor & gift combos across Lahore. Express 2–5 hours and midnight delivery across all Lahore areas.",
    keywords: [
      "lahore bouquet",
      "flower bouquet lahore",
      "flower delivery lahore",
      "send flowers to lahore",
      "rose bouquet lahore",
      "sunflower bouquet lahore",
      "money bouquet lahore",
      "wedding room decor lahore",
      "bridal canopy decor lahore",
      "midnight flower delivery lahore",
      "fresh flowers shop lahore"
    ],
    metadataBase: new URL(SITE_URL),
    ...(IS_PROD_HOST ? {} : { robots: { index: false, follow: false } }),
    alternates: {
      canonical: SITE_URL,
      languages: { "en-PK": SITE_URL },
    },
    openGraph: {
      title: "Lahore Bouquet - Fresh Floristry & Handcrafted Bouquets in Lahore",
      description: "Same-Day 2–5h Express Flower Delivery across Lahore. Fresh imported roses, sunflowers, money bouquets & wedding decor.",
      url: SITE_URL,
      siteName: "Lahore Bouquet",
      locale: "en_PK",
      type: "website",
      images: [
        {
          url: `${SITE_URL}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: "Lahore Bouquet — Fresh Handcrafted Bouquets & Flower Delivery in Lahore",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Lahore Bouquet - Fresh Handcrafted Bouquets in Lahore",
      description: "Same-day 2–5h express flower delivery across Lahore. Fresh imported roses, sunflowers & money bouquets.",
      images: [`${SITE_URL}/og-image.jpg`],
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/favicon.png", type: "image/png" },
      ],
      shortcut: "/favicon.png",
      apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      ],
    },
  };
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#8B1E2D",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    url: SITE_URL,
    name: "Lahore Bouquet",
    inLanguage: "en-PK",
    publisher: {
      "@id": `${SITE_URL}#florist`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/bouquets?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html
      lang="en-PK"
      suppressHydrationWarning
      className={`${playfair.variable} ${cormorant.variable} ${jakarta.variable} antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (typeof document !== 'undefined') {
                  const clean = () => {
                    document.querySelectorAll('[bis_skin_checked]').forEach(function(el) {
                      el.removeAttribute('bis_skin_checked');
                    });
                  };
                  document.addEventListener('DOMContentLoaded', clean);
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#F8F3EA] text-[#2A2A2A] selection:bg-[#8B1E2D] selection:text-white flex flex-col justify-between"
      >
        <CartProvider>
          <StoreLayoutWrapper>
            {children}
          </StoreLayoutWrapper>
        </CartProvider>
      </body>
    </html>
  );
}
