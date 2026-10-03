import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ALL_PRODUCTS } from "../../data/products";
import ProductCard from "../../components/ProductCard";
import { MapPin, Clock, Truck, Camera, MessageCircle, AlertCircle, Sparkles } from "lucide-react";

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

export default function GulbergDeliveryPage() {
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
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-white/50 flex items-center gap-2">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <Link href="/delivery-areas" className="hover:text-white transition-colors">Delivery Areas</Link>
        <span>/</span>
        <span className="text-[#E11D48] font-semibold">Gulberg Lahore</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E11D48]/20 text-[#F43F5E] border border-[#E11D48]/40 text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5" />
          Home Base • MM Alam Road Express (30–90 Mins)
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Flower Delivery in Gulberg Lahore
        </h1>

        <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-3xl">
          Gulberg is our home neighborhood. Our workshop is located on MM Alam Road, Gulberg III, meaning your bouquets are tied fresh and delivered within minutes. Whether you are sending roses to an office on Main Boulevard, surprising someone at an MM Alam café, or ordering midnight flowers to Gulberg II, our florists guarantee rapid dispatch and live WhatsApp photo proof.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#E11D48]" /> 30 to 90 mins express in Gulberg</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#25D366]" /> Photo on WhatsApp before dispatch</span>
          <a 
            href="https://wa.me/923001234567?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20to%20Gulberg%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#25D366] font-semibold hover:underline"
          >
            <MessageCircle className="w-4 h-4" /> Order to Gulberg on WhatsApp
          </a>
        </div>
      </section>

      {/* Neighborhood Coverage */}
      <section className="bg-[#17171E] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-3">
        <div className="flex items-center gap-2 text-white">
          <Sparkles className="w-5 h-5 text-[#E11D48]" />
          <h2 className="font-playfair text-xl font-bold">Key Gulberg Delivery Zones</h2>
        </div>
        <ul className="space-y-2 text-xs text-white/70 list-disc list-inside leading-relaxed">
          <li><strong>MM Alam Road & Kasuri Road:</strong> Rapid doorstep delivery to fine-dining spots, corporate suites, and residential apartments.</li>
          <li><strong>Liberty Market & Noor Jehan Road:</strong> Boutiques, bridal salons, and shopping centers.</li>
          <li><strong>Main Boulevard & Jail Road Corridor:</strong> Commercial headquarters, banking plazas, and hotels.</li>
          <li><strong>Gulberg II & Mini Market:</strong> Quiet residential blocks, schools, and family homes.</li>
        </ul>
      </section>

      {/* Popular Bouquets in Gulberg */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>Popular bouquets ordered in Gulberg</span>
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
