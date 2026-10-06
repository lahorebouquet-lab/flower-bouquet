import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../../components/ProductCard";
import { Moon, Truck, Camera, MessageCircle } from "lucide-react";
import { SITE_URL } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Eid Gifts & Flower Delivery in Lahore | Eid ul Fitr & Adha",
  },
  description: "Send Eid bouquets, imported roses, gourmet mithai boxes, chocolate hampers & gift baskets across Lahore. Same-day & Chaand Raat express delivery.",
  alternates: {
    canonical: `${SITE_URL}/occasions/eid-gifts`,
  },
  openGraph: {
    title: "Eid Gifts & Flower Delivery in Lahore | Eid ul Fitr & Adha",
    description: "Send Eid bouquets, imported roses, gourmet mithai boxes, chocolate hampers & gift baskets across Lahore. Same-day & Chaand Raat express delivery.",
    url: `${SITE_URL}/occasions/eid-gifts`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Eid Gifts & Flower Delivery in Lahore | Eid ul Fitr & Adha",
      },
    ],
  }
};

export default async function EidGiftsPage() {
  const allProducts = await getSanityProducts();
  const eidProducts = allProducts.filter(p => p.category === "Gifts & Cakes" || p.category === "Bouquets" || p.category === "Money Bouquets").slice(0, 8);

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
        name: "Occasions",
        item: `${SITE_URL}/occasions/birthday`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Eid Gifts & Flowers",
        item: `${SITE_URL}/occasions/eid-gifts`,
      },
    ],
  };

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#777777]">Occasions</span>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Eid Gifts & Flowers</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <Moon className="w-3.5 h-3.5 text-[#C6A15B]" />
          Chaand Raat & Eid Mubarak Express Gifting
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Eid Flower & Gift Delivery in Lahore
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Celebrate Eid ul Fitr and Eid ul Adha with loved ones across Lahore, even if you are ordering from the UK, USA, Canada, or UAE. We deliver fresh premium rose bouquets, festive money bouquets with crisp Eidi banknotes, premium mithai, and luxury chocolates across all Lahore areas on Chaand Raat and Eid morning.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#8B1E2D]" /> Chaand Raat midnight delivery slots</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before dispatch</span>
          <a 
            href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20an%20Eid%20gift%20combo%20in%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#8B1E2D] font-semibold hover:text-[#C6A15B]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Book Eid Gifts on WhatsApp
          </a>
        </div>
      </section>

      {/* Products Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Curated Eid floral bouquets & gift combos</span>
          <Link href="/bouquets" className="text-[#8B1E2D] hover:underline font-semibold">
            View All Bouquets →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {eidProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
