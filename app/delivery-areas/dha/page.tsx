import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../../components/ProductCard";
import { MapPin, Clock, Camera, MessageCircle, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Delivery in DHA Lahore | Same-Day Bouquets",
  },
  description: "Fresh flowers delivered to DHA Lahore Phases 1 to 9 in about 2 to 3 hours. Roses, cakes, midnight surprises and bridal décor.",
  alternates: {
    canonical: "https://lahorebouquet.com/delivery-areas/dha",
  },
  openGraph: {
    title: "Flower Delivery in DHA Lahore | Same-Day Bouquets",
    description: "Fresh flowers delivered to DHA Lahore Phases 1 to 9 in about 2 to 3 hours. Roses, cakes, midnight surprises and bridal décor.",
    url: "https://lahorebouquet.com/delivery-areas/dha",
  }
};

const dhaBreadcrumbSchema = {
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
      name: "Delivery Areas",
      item: "https://lahorebouquet.com/delivery-areas",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "DHA Lahore",
      item: "https://lahorebouquet.com/delivery-areas/dha",
    },
  ],
};

export default async function DHADeliveryPage() {
  const allProducts = await getSanityProducts();
  const popularBouquets = allProducts.slice(0, 4);

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dhaBreadcrumbSchema) }}
      />
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/delivery-areas" className="hover:text-[#0B0B0B] transition-colors">Delivery Areas</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">DHA Lahore</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
          Phases 1 to 9 & Sector Y Express
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Flower Delivery in DHA Lahore
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          DHA is one of our busiest areas. Most orders reach Phases 1 to 5 within about 2 to 3 hours. For Phases 6 to 9 and Sector Y, add a little more time. Our florists send you a photo before your bouquet leaves the shop. We can deliver to homes, offices in DHA, and to Combined Military Hospital (CMH).
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#8B1E2D]" /> 2 to 3 hours delivery in DHA</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before it leaves</span>
          <a 
            href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20to%20DHA%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#8B1E2D] font-semibold hover:text-[#C6A15B]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order to DHA on WhatsApp
          </a>
        </div>
      </section>

      {/* Local Tips for DHA */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <AlertCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Local tips for DHA orders</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li>Tell us the phase and street number exactly. Many DHA blocks look alike.</li>
          <li>If it's a gated house, share a phone number for the guard so our van is cleared at the checkpoint without delay.</li>
          <li>For CMH hospital deliveries, provide the patient's ward and room number.</li>
        </ul>
      </section>

      {/* Popular Bouquets in DHA */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Most ordered bouquets in DHA Lahore</span>
          <Link href="/bouquets" className="text-[#8B1E2D] hover:underline font-semibold">
            View All Bouquets →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {popularBouquets.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
