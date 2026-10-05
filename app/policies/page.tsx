import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Truck, RefreshCw, AlertCircle, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Customer Policies | Lahore Bouquet",
  },
  description: "Read Lahore Bouquet's clear policies for delivery, flower substitution, damage replacement, and booking cancellations across Lahore.",
  alternates: {
    canonical: "https://lahorebouquet.com/policies",
  },
  openGraph: {
    title: "Customer Policies | Lahore Bouquet",
    description: "Read Lahore Bouquet's clear policies for delivery, flower substitution, damage replacement, and booking cancellations across Lahore.",
  }
};

export default function PoliciesPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://lahorebouquet.com/policies#webpage",
            url: "https://lahorebouquet.com/policies",
            name: "Customer Policies | Lahore Bouquet",
            isPartOf: { "@id": "https://lahorebouquet.com#website" },
            about: { "@id": "https://lahorebouquet.com#florist" },
          }),
        }}
      />
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Policies</span>
      </nav>

      {/* Header */}
      <section className="space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C6A15B]" />
          Clear & Plain Terms
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Store Policies
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-2xl">
          We believe in honest, straightforward terms. Here is exactly how we handle deliveries, substitutions, refunds, and cancellations at Lahore Bouquet.
        </p>
      </section>

      {/* Policies Grid */}
      <section className="space-y-6">
        {/* 1. Delivery Policy */}
        <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
          <div className="flex items-center gap-2 text-[#0B0B0B]">
            <Truck className="w-5 h-5 text-[#8B1E2D]" />
            <h2 className="font-playfair text-xl font-bold">Delivery Policy</h2>
          </div>
          <p className="text-xs text-[#2A2A2A] leading-relaxed">
            We deliver in Lahore between 9:00 AM and 1:00 AM daily. Most orders arrive within 2 to 5 hours. Delivery time depends on your area, the traffic, and how quickly you place the order. For a set time, order early. If nobody is available to receive the flowers, we'll call you before returning or leaving them.
          </p>
        </div>

        {/* 2. Substitution Policy */}
        <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
          <div className="flex items-center gap-2 text-[#0B0B0B]">
            <RefreshCw className="w-5 h-5 text-[#8B1E2D]" />
            <h2 className="font-playfair text-xl font-bold">Substitution Policy</h2>
          </div>
          <p className="text-xs text-[#2A2A2A] leading-relaxed">
            Flowers are natural and can vary with the season and market arrivals. If a specific flower or colour is not available, we will offer you a similar one or a different colour of the same or higher value, and we will always ask and confirm with you on WhatsApp before we change anything.
          </p>
        </div>

        {/* 3. Refund Policy */}
        <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
          <div className="flex items-center gap-2 text-[#0B0B0B]">
            <ShieldCheck className="w-5 h-5 text-[#C6A15B]" />
            <h2 className="font-playfair text-xl font-bold">Refund Policy</h2>
          </div>
          <p className="text-xs text-[#2A2A2A] leading-relaxed">
            If your order arrives damaged or wrong, message us on WhatsApp within 12 hours of delivery with a clear photo, and we will replace it or refund you promptly.
          </p>
        </div>

        {/* 4. Cancellation Policy */}
        <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
          <div className="flex items-center gap-2 text-[#0B0B0B]">
            <AlertCircle className="w-5 h-5 text-[#8B1E2D]" />
            <h2 className="font-playfair text-xl font-bold">Cancellation Policy</h2>
          </div>
          <p className="text-xs text-[#2A2A2A] leading-relaxed">
            Fresh flower bouquets and event décor bookings cannot be cancelled after the florist has started trimming the stems, folding money notes, or arranging drapes. For wedding room or car bookings, please give at least 24 hours advance notice for cancellations or date changes.
          </p>
        </div>
      </section>

      {/* WhatsApp Help Strip (Section 10 Promo / Luxury Black Banner) */}
      <section className="p-6 rounded-2xl bg-[#0B0B0B] border border-[rgba(198,161,91,0.30)] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="font-playfair text-lg font-bold text-white">Have a specific question about an order?</h3>
          <p className="text-xs text-[#F8F3EA]/75">Our florists are available on WhatsApp from 9:00 AM to 1:00 AM daily.</p>
        </div>

        <a
          href="https://wa.me/923094895080"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 rounded-xl bg-[#8B1E2D] hover:bg-[#C6A15B] text-white hover:text-[#0B0B0B] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all whitespace-nowrap"
        >
          <MessageCircle className="w-4 h-4 text-white" />
          <span>Ask on WhatsApp</span>
        </a>
      </section>
    </main>
  );
}
