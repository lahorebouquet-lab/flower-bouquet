import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../../app/components/ProductCard";
import { Briefcase, Building, Clock, ShieldCheck, MessageCircle, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Corporate Flower Delivery Lahore | Office Plants & Event Floral",
  },
  description: "Corporate flower delivery across Lahore. Weekly office reception florals, executive gifting, client appreciation hampers & conference stage décor. Official NTN invoicing.",
  alternates: {
    canonical: "https://lahorebouquet.com/corporate",
  },
  openGraph: {
    title: "Corporate Flower Delivery Lahore | Office Plants & Event Floral",
    description: "Corporate flower delivery across Lahore. Weekly office reception florals, executive gifting, client appreciation hampers & conference stage décor. Official NTN invoicing.",
    url: "https://lahorebouquet.com/corporate",
  }
};

export default async function CorporatePage() {
  const allProducts = await getSanityProducts();
  const corporateItems = allProducts.slice(0, 4);

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
        name: "Corporate Flowers",
        item: "https://lahorebouquet.com/corporate",
      },
    ],
  };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Corporate Floristry</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <Briefcase className="w-3.5 h-3.5 text-[#C6A15B]" />
          B2B Floral Solutions • Executive Gifting • NTN Invoicing
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Corporate Flower Delivery & Office Services in Lahore
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Elevate your corporate workspace and foster lasting business relationships. Lahore Bouquet manages corporate flower subscriptions, weekly reception desk arrangements, annual general meeting (AGM) stage backdrops, and bulk festive employee gifting for leading enterprises across Gulberg, DHA, and Lahore commercial districts.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><FileText className="w-4 h-4 text-[#8B1E2D]" /> Official corporate invoicing & NTN receipts</span>
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#C6A15B]" /> Scheduled weekly Monday morning replenishment</span>
          <a 
            href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20am%20inquiring%20about%20corporate%20flower%20subscriptions%20and%20executive%20gifting."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#8B1E2D] font-semibold hover:text-[#C6A15B]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Chat with Corporate Account Manager
          </a>
        </div>
      </section>

      {/* B2B Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-3">
          <Building className="w-8 h-8 text-[#8B1E2D]" />
          <h3 className="font-playfair text-lg font-bold text-[#0B0B0B]">Weekly Reception Florals</h3>
          <p className="text-xs text-[#2A2A2A] leading-relaxed">
            Fresh weekly vase rotations delivered every Monday morning to greet your clients and team with vibrant seasonal blooms.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-3">
          <Briefcase className="w-8 h-8 text-[#8B1E2D]" />
          <h3 className="font-playfair text-lg font-bold text-[#0B0B0B]">Executive & Client Gifting</h3>
          <p className="text-xs text-[#2A2A2A] leading-relaxed">
            Personalized congratulatory bouquets and gourmet chocolate hampers for partner milestones, promotions, and deal closings.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-3">
          <ShieldCheck className="w-8 h-8 text-[#C6A15B]" />
          <h3 className="font-playfair text-lg font-bold text-[#0B0B0B]">Corporate Event Stages</h3>
          <p className="text-xs text-[#2A2A2A] leading-relaxed">
            Floral podium decorations, VIP guest corsages, and stage floral arches for conferences, awards nights, and brand launches.
          </p>
        </div>
      </section>

      {/* Recommended Arrangements */}
      <section className="space-y-4 pt-6 border-t border-[#E5DED2]">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Popular Executive Arrangements</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {corporateItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
