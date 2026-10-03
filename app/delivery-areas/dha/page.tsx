import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ALL_PRODUCTS } from "../../data/products";
import ProductCard from "../../components/ProductCard";
import { MapPin, Clock, Truck, Camera, MessageCircle, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Delivery in DHA Lahore | Same-Day Bouquets",
  },
  description: "Fresh flowers delivered to DHA Lahore Phases 1 to 9 in about 2 to 3 hours. Roses, cakes, midnight surprises and bridal décor.",
  openGraph: {
    title: "Flower Delivery in DHA Lahore | Same-Day Bouquets",
    description: "Fresh flowers delivered to DHA Lahore Phases 1 to 9 in about 2 to 3 hours. Roses, cakes, midnight surprises and bridal décor.",
  }
};

export default function DHADeliveryPage() {
  const popularBouquets = ALL_PRODUCTS.slice(0, 4);

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-white/50 flex items-center gap-2">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <Link href="/delivery-areas" className="hover:text-white transition-colors">Delivery Areas</Link>
        <span>/</span>
        <span className="text-[#E11D48] font-semibold">DHA Lahore</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E11D48]/20 text-[#F43F5E] border border-[#E11D48]/40 text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5" />
          Phases 1 to 9 & Sector Y Express
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Flower Delivery in DHA Lahore
        </h1>

        <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-3xl">
          DHA is one of our busiest areas. Most orders reach Phases 1 to 5 within about 2 to 3 hours. For Phases 6 to 9 and Sector Y, add a little more time. Our florists send you a photo before your bouquet leaves the shop. We can deliver to homes, offices in DHA, and to Combined Military Hospital (CMH).
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#E11D48]" /> 2 to 3 hours delivery in DHA</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#25D366]" /> Photo on WhatsApp before it leaves</span>
          <a 
            href="https://wa.me/923001234567?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20to%20DHA%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#25D366] font-semibold hover:underline"
          >
            <MessageCircle className="w-4 h-4" /> Order to DHA on WhatsApp
          </a>
        </div>
      </section>

      {/* Local Tips for DHA */}
      <section className="bg-[#17171E] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-3">
        <div className="flex items-center gap-2 text-white">
          <AlertCircle className="w-5 h-5 text-[#E11D48]" />
          <h2 className="font-playfair text-xl font-bold">Local tips for DHA orders</h2>
        </div>
        <ul className="space-y-2 text-xs text-white/70 list-disc list-inside leading-relaxed">
          <li>Tell us the phase and street number exactly. Many DHA blocks look alike.</li>
          <li>If it's a gated house, share a phone number for the guard so our van is cleared at the checkpoint without delay.</li>
          <li>For CMH hospital deliveries, provide the patient's ward and room number.</li>
        </ul>
      </section>

      {/* Popular Bouquets in DHA */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>Most ordered bouquets in DHA Lahore</span>
          <Link href="/bouquets" className="text-[#E11D48] hover:underline font-semibold">
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
