import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ALL_PRODUCTS } from "../../data/products";
import ProductCard from "../../components/ProductCard";
import { MapPin, Clock, Truck, Camera, MessageCircle, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Delivery in Wapda Town & Township Lahore | Same-Day",
  },
  description: "Fresh flower bouquets, roses & birthday cakes delivered to Wapda Town, PIA Society, Valencia & Township Lahore in 2.5 to 3.5 hours. Photo on WhatsApp first.",
  alternates: {
    canonical: "https://lahorebouquet.com/delivery-areas/wapda-town",
  },
  openGraph: {
    title: "Flower Delivery in Wapda Town & Township Lahore | Same-Day",
    description: "Fresh flower bouquets, roses & birthday cakes delivered to Wapda Town, PIA Society, Valencia & Township Lahore in 2.5 to 3.5 hours. Photo on WhatsApp first.",
    url: "https://lahorebouquet.com/delivery-areas/wapda-town",
  }
};

export default function WapdaTownDeliveryPage() {
  const popularBouquets = ALL_PRODUCTS.slice(0, 4);

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
        name: "Delivery Areas",
        item: "https://lahorebouquet.com/delivery-areas",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Wapda Town Lahore",
        item: "https://lahorebouquet.com/delivery-areas/wapda-town",
      },
    ],
  };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-white/50 flex items-center gap-2">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <Link href="/delivery-areas" className="hover:text-white transition-colors">Delivery Areas</Link>
        <span>/</span>
        <span className="text-[#E11D48] font-semibold">Wapda Town Lahore</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E11D48]/20 text-[#F43F5E] border border-[#E11D48]/40 text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5" />
          Chaudhary Chowk • PIA Society • Valencia • Township
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Flower Delivery in Wapda Town & Township
        </h1>

        <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-3xl">
          We deliver fresh imported roses, money bouquets, and celebration hampers to Wapda Town, PIA Housing Society, Valencia Town, and Township Lahore. Every order is hydrated for transit and dispatched in air-conditioned courier vans with photo proof sent on WhatsApp before leaving our workshop.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#E11D48]" /> 2.5 to 3.5 hours delivery</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#25D366]" /> Photo on WhatsApp before dispatch</span>
          <a 
            href="https://wa.me/923001234567?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20to%20Wapda%20Town%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#25D366] font-semibold hover:underline"
          >
            <MessageCircle className="w-4 h-4" /> Order to Wapda Town on WhatsApp
          </a>
        </div>
      </section>

      {/* Popular Bouquets in Wapda Town */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>Popular bouquets ordered in Wapda Town</span>
          <Link href="/collections/bouquets" className="text-[#E11D48] hover:underline font-semibold">
            View All Bouquets →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularBouquets.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
