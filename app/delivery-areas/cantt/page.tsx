import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../../components/ProductCard";
import { MapPin, Clock, Camera, MessageCircle, ShieldCheck, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Delivery in Lahore Cantt & Cavalry Ground | Same-Day",
  },
  description: "Same-day fresh flowers delivered to Lahore Cantt, Saddar, Cavalry Ground, PAF Colony & CMH in 2 to 2.5 hours. Gate clearance protocol & photo on WhatsApp.",
  alternates: {
    canonical: "https://lahorebouquet.com/delivery-areas/cantt",
  },
  openGraph: {
    title: "Flower Delivery in Lahore Cantt & Cavalry Ground | Same-Day",
    description: "Same-day fresh flowers delivered to Lahore Cantt, Saddar, Cavalry Ground, PAF Colony & CMH in 2 to 2.5 hours. Gate clearance protocol & photo on WhatsApp.",
    url: "https://lahorebouquet.com/delivery-areas/cantt",
  }
};

export default async function CanttDeliveryPage() {
  const allProducts = await getSanityProducts();
  const popularBouquets = allProducts.slice(0, 4);

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
        name: "Cantt Lahore",
        item: "https://lahorebouquet.com/delivery-areas/cantt",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do you deliver flowers to gated military areas in Lahore Cantt?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our delivery drivers carry valid CNICs and follow official Cantt gate checkpoint clearance protocols. If you reside in a restricted officer colony or mess, please inform the entry guard or provide our driver's details upon dispatch.",
        },
      },
      {
        "@type": "Question",
        name: "Do you deliver to CMH Lahore hospital in Cantt?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we regularly deliver fresh get-well flowers and hampers to Combined Military Hospital (CMH) Lahore. Please provide the patient's ward number or doctor's department.",
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
        <span className="text-[#8B1E2D] font-semibold">Cantt Lahore</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
          Saddar • Cavalry Ground • PAF Colony • CMH Express
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Flower Delivery in Lahore Cantt & Cavalry
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Lahore Cantonment and Cavalry Ground require reliable couriers who understand gate security protocols and military checkpoint navigation. From our workshop on MM Alam Road, we cross into Cantt via Sherpao Bridge or Cavalry Underpass within 20 minutes, delivering handcrafted bouquets with live WhatsApp proof.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#8B1E2D]" /> 2 to 2.5 hours delivery</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#C6A15B]" /> Official gate checkpoint clearance</span>
          <a 
            href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20to%20Lahore%20Cantt."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#8B1E2D] font-semibold hover:text-[#C6A15B]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order to Cantt on WhatsApp
          </a>
        </div>
      </section>

      {/* Cantt Checkpoint Instructions */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <ShieldAlert className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Gate Clearance Protocol for Cantt Orders</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Cavalry Ground & Saddar:</strong> Full commercial and residential access without gate restrictions.</li>
          <li><strong>PAF Colony & Falcon Complex:</strong> Mention officer housing lane and advise the checkpoint sentry.</li>
          <li><strong>CMH Lahore:</strong> Deliveries accepted at main entrance security counter or private patient rooms.</li>
          <li><strong>Army Officers Housing Schemes:</strong> Provide resident authorization if late-night delivery is requested.</li>
        </ul>
      </section>

      {/* Popular Bouquets in Cantt */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Popular bouquets ordered in Lahore Cantt</span>
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
