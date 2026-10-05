import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../../components/ProductCard";
import { MapPin, Clock, Camera, MessageCircle, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Delivery in Johar Town Lahore | Same-Day Bouquets",
  },
  description: "Express flower delivery across Johar Town Phases 1 & 2, Emporium Mall, Faisal Town & Shaukat Khanum Hospital in 2 to 3 hours. Photo on WhatsApp first.",
  alternates: {
    canonical: "https://lahorebouquet.com/delivery-areas/johar-town",
  },
  openGraph: {
    title: "Flower Delivery in Johar Town Lahore | Same-Day Bouquets",
    description: "Express flower delivery across Johar Town Phases 1 & 2, Emporium Mall, Faisal Town & Shaukat Khanum Hospital in 2 to 3 hours. Photo on WhatsApp first.",
    url: "https://lahorebouquet.com/delivery-areas/johar-town",
  }
};

export default async function JoharTownDeliveryPage() {
  const allProducts = await getSanityProducts();
  const popularBouquets = allProducts.slice(2, 6);

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
        name: "Johar Town Lahore",
        item: "https://lahorebouquet.com/delivery-areas/johar-town",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can you deliver get-well-soon flowers to Shaukat Khanum Hospital in Johar Town?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our drivers deliver directly to Shaukat Khanum Memorial Hospital reception and inpatient visitor desks. Please provide the patient's full name and room/ward details.",
        },
      },
      {
        "@type": "Question",
        name: "How fast is delivery to Johar Town Phase 1 and Emporium Mall area?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard delivery takes between 2 to 3 hours via Canal Road and Khayaban-e-Firdousi. Urgent express delivery can be arranged on WhatsApp.",
        },
      },
    ],
  };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/delivery-areas" className="hover:text-[#0B0B0B] transition-colors">Delivery Areas</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Johar Town Lahore</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
          Phases 1 & 2 • G1 Market • Emporium Corridor
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Flower Delivery in Johar Town Lahore
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          We provide fresh flower bouquet delivery across Johar Town Phases 1 and 2, Faisal Town, and adjacent commercial hubs. Whether you need a celebration bouquet delivered near Emporium Mall, an anniversary surprise in Block J/R, or get-well flowers delivered to Shaukat Khanum Hospital or Doctors Hospital, our florists guarantee rapid dispatch and live WhatsApp photo proof.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#8B1E2D]" /> 2 to 3 hours express delivery</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before dispatch</span>
          <a 
            href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20to%20Johar%20Town%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#8B1E2D] font-semibold hover:text-[#C6A15B]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order to Johar Town on WhatsApp
          </a>
        </div>
      </section>

      {/* Neighborhood Coverage */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Building2 className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Key Johar Town Delivery Zones</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Phase 1 (Blocks A to G):</strong> Near G1 Market, UMT campus, and Khayaban-e-Firdousi.</li>
          <li><strong>Phase 2 (Blocks H to R):</strong> Emporium Mall vicinity, Expo Centre, and residential avenues.</li>
          <li><strong>Hospital Deliveries:</strong> Shaukat Khanum Memorial Hospital and Doctors Hospital express delivery protocol.</li>
          <li><strong>Faisal Town & Township Link:</strong> Fast routing via Maulana Shaukat Ali Road.</li>
        </ul>
      </section>

      {/* Popular Bouquets in Johar Town */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Popular bouquets ordered in Johar Town</span>
          <Link href="/collections/bouquets" className="text-[#8B1E2D] hover:underline font-semibold">
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
