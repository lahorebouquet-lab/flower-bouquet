import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "./context/CartContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import QuickViewModal from "./components/QuickViewModal";
import { Toast, StickyMobileBar } from "./components/Toast";

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

export const metadata: Metadata = {
  title: {
    template: "%s | Lahore Bouquet - Fresh Flowers Lahore",
    default: "Lahore Bouquet ✦ Fresh Handcrafted Bouquets & Flower Delivery in Lahore",
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
  metadataBase: new URL("https://lahorebouquet.com"),
  openGraph: {
    title: "Lahore Bouquet ✦ Fresh Floristry & Handcrafted Bouquets in Lahore",
    description: "Same-Day 2–5h Express Flower Delivery across Lahore. Fresh imported roses, sunflowers, money bouquets & wedding decor.",
    url: "https://lahorebouquet.com",
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lahore Bouquet ✦ Fresh Handcrafted Bouquets in Lahore",
    description: "Same-day 2–5h express flower delivery across Lahore. Fresh imported roses, sunflowers & money bouquets.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${cormorant.variable} ${jakarta.variable} antialiased scroll-smooth`}>
      <body className="min-h-screen bg-[#101012] text-[#F4F4F6] selection:bg-[#E11D48] selection:text-white flex flex-col justify-between">
        <CartProvider>
          <Header />
          <div className="flex-1">
            {children}
          </div>
          <Footer />
          <CartDrawer />
          <QuickViewModal />
          <Toast />
          <StickyMobileBar />
        </CartProvider>
      </body>
    </html>
  );
}
