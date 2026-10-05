import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../../components/ProductCard";
import { MapPin, Clock, Camera, MessageCircle, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Express Flower Delivery in Gulberg Lahore | MM Alam & Liberty",
  },
  description: "Rapid 30–60 minute flower delivery across Gulberg I, II & III, MM Alam Road, Liberty and Main Boulevard from our MM Alam workshop. Photo on WhatsApp first.",
  alternates: {
    canonical: "https://lahorebouquet.com/delivery-areas/gulberg",
  },
  openGraph: {
    title: "Express Flower Delivery in Gulberg Lahore | MM Alam & Liberty",
    description: "Rapid 30–60 minute flower delivery across Gulberg I, II & III, MM Alam Road, Liberty and Main Boulevard from our MM Alam workshop. Photo on WhatsApp first.",
    url: "https://lahorebouquet.com/delivery-areas/gulberg",
  }
};

export default async function GulbergDeliveryPage() {
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
        name: "Gulberg Lahore",
        item: "https://lahorebouquet.com/delivery-areas/gulberg",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How quickly can you deliver flowers to Gulberg Lahore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Because our florist workshop is located directly on MM Alam Road in Gulberg III, orders to Gulberg I, II, III, Liberty, and Main Boulevard can be delivered within 30 to 90 minutes.",
        },
      },
      {
        "@type": "Question",
        name: "Can you deliver flowers to restaurants on MM Alam Road?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We frequently deliver surprise birthday and anniversary bouquets directly to restaurant tables across MM Alam Road and Kasuri Road.",
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
        <span className="text-[#8B1E2D] font-semibold">Gulberg Lahore</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
          Home Base • MM Alam Road Express (30–90 Mins)
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Flower Delivery in Gulberg Lahore
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Gulberg is our home neighborhood. Our workshop is located on MM Alam Road, Gulberg III, meaning your bouquets are tied fresh and delivered within minutes. Whether you are sending roses to an office on Main Boulevard, surprising someone at an MM Alam café, or ordering midnight flowers to Gulberg II, our florists guarantee rapid dispatch and live WhatsApp photo proof.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#8B1E2D]" /> 30 to 90 mins express in Gulberg</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before dispatch</span>
          <a 
            href="https://wa.me/923094895080?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20to%20Gulberg%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#8B1E2D] font-semibold hover:text-[#C6A15B]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order to Gulberg on WhatsApp
          </a>
        </div>
      </section>

      {/* Neighborhood Coverage */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Sparkles className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Key Gulberg Delivery Zones</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>MM Alam Road & Kasuri Road:</strong> Rapid doorstep delivery to fine-dining spots, corporate suites, and residential apartments.</li>
          <li><strong>Liberty Market & Noor Jehan Road:</strong> Boutiques, bridal salons, and shopping centers.</li>
          <li><strong>Main Boulevard & Jail Road Corridor:</strong> Commercial headquarters, banking plazas, and hotels.</li>
          <li><strong>Gulberg II & Mini Market:</strong> Quiet residential blocks, schools, and family homes.</li>
        </ul>
      </section>

      {/* Popular Bouquets in Gulberg */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Popular bouquets ordered in Gulberg</span>
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
