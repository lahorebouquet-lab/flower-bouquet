import type { Metadata } from "next";
import Script from "next/script";
import { SITE_URL } from "@/lib/business";
import LandingPage from "./LandingPage";

export const metadata: Metadata = {
  title: {
    absolute: "Same-Day Flower Delivery in Lahore | Lahore Bouquet",
  },
  description:
    "Fresh bouquets, cakes and gifts delivered across Lahore in 2–5 hours. Order on WhatsApp today.",
  robots: { index: false, follow: false },
  themeColor: "#741f3b",
  alternates: {
    canonical: `${SITE_URL}/order-flowers-lahore`,
  },
  openGraph: {
    title: "Same-Day Flower Delivery in Lahore | Lahore Bouquet",
    description:
      "Fresh hand-tied bouquets, cakes and gifts delivered across Lahore. Order on WhatsApp.",
    url: `${SITE_URL}/order-flowers-lahore`,
    siteName: "Lahore Bouquet",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Same-Day Flower Delivery in Lahore | Lahore Bouquet",
    description:
      "Fresh hand-tied bouquets, cakes and gifts delivered across Lahore. Order on WhatsApp.",
  },
};

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
      <LandingPage />
    </>
  );
}
