import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../../components/ProductCard";
import { Truck, Camera, MessageCircle, HeartHandshake, AlertCircle } from "lucide-react";
import { SITE_URL } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Get Well Soon & Sorry Flowers in Lahore",
  },
  description: "Get well soon and apology bouquets in Lahore. Soft white roses, sunflowers and gentle mixes delivered to homes and hospitals.",
  alternates: {
    canonical: `${SITE_URL}/occasions/get-well-and-sorry`,
  },
  openGraph: {
    title: "Get Well Soon & Sorry Flowers in Lahore",
    description: "Get well soon and apology bouquets in Lahore. Soft white roses, sunflowers and gentle mixes delivered to homes and hospitals.",
    url: `${SITE_URL}/occasions/get-well-and-sorry`,
  }
};

export default async function GetWellAndSorryPage() {
  const allProducts = await getSanityProducts();
  const gentleProducts = allProducts.filter(p => 
    p.occasion && (
      p.occasion.includes("Get Well Soon") || 
      p.occasion.includes("Apology") || 
      p.occasion.includes("Hospital Visit")
    )
  );

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
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
                name: "Get Well Soon & Sorry",
                item: `${SITE_URL}/occasions/get-well-and-sorry`,
              },
            ],
          }),
        }}
      />
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#777777]">Occasions</span>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Get Well Soon & Sorry</span>
      </nav>

      {/* Hero Category Banner (Section 5 Standard) */}
      <section className="bg-[#0B0B0B] p-8 sm:p-12 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5 text-[#C6A15B]" />
            Comfort, Healing & Sincere Apologies
          </span>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Get Well Soon and Sorry Flowers in Lahore
          </h1>

          <p className="text-[#F8F3EA]/85 text-xs sm:text-sm leading-relaxed font-light">
            Some messages are hard to say out loud. Flowers help. For a hospital visit, we suggest a small, light-scented bouquet in white or yellow. For an apology, white roses with a handwritten note usually say it best.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#C6A15B]" /> Delivery to homes & hospitals in 2 to 5 hours</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before it leaves</span>
            <a 
              href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20send%20get-well/apology%20flowers."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#C6A15B] font-semibold hover:underline"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Hospital Guideline Alert */}
      <section className="p-5 rounded-2xl bg-white border border-[#E5DED2] flex items-start gap-3.5 text-xs text-[#2A2A2A] shadow-sm">
        <AlertCircle className="w-5 h-5 text-[#8B1E2D] shrink-0 mt-0.5" />
        <div>
          <strong className="text-[#0B0B0B] block text-sm mb-1 font-semibold">Before you send to a hospital in Lahore:</strong>
          Check if the ward allows flowers and give us the hospital name (e.g. Doctors Hospital, Shaukat Khanum, Hameed Latif, CMH), room number, and the patient's name.
        </div>
      </section>

      {/* Product Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Showing gentle get well soon and apology bouquets</span>
          <span className="text-[#8B1E2D] font-semibold">Same-day hospital delivery active</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {gentleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
