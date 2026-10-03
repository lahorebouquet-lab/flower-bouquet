import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ALL_PRODUCTS } from "../../data/products";
import ProductCard from "../../components/ProductCard";
import { MapPin, Clock, Truck, Camera, MessageCircle, AlertCircle, Trees } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Delivery in Model Town Lahore | Blocks A to M",
  },
  description: "Fresh flower bouquets, roses & birthday cakes delivered to Model Town Blocks A to M, Model Town Link Road & Garden Town in 2 to 2.5 hours. Photo on WhatsApp first.",
  alternates: {
    canonical: "https://lahorebouquet.com/delivery-areas/model-town",
  },
  openGraph: {
    title: "Flower Delivery in Model Town Lahore | Blocks A to M",
    description: "Fresh flower bouquets, roses & birthday cakes delivered to Model Town Blocks A to M, Model Town Link Road & Garden Town in 2 to 2.5 hours. Photo on WhatsApp first.",
    url: "https://lahorebouquet.com/delivery-areas/model-town",
  }
};

export default function ModelTownDeliveryPage() {
  const popularBouquets = ALL_PRODUCTS.slice(3, 7);

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
        name: "Model Town Lahore",
        item: "https://lahorebouquet.com/delivery-areas/model-town",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How fast is flower delivery to Model Town Lahore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "From our MM Alam Road workshop, Model Town is a short 15-20 minute drive down Ferozepur Road or Kalma Chowk underpass. Most orders reach Blocks A to M in 1.5 to 2.5 hours.",
        },
      },
      {
        "@type": "Question",
        name: "Do you deliver to Model Town Link Road and Garden Town?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our daily couriers service Model Town Link Road commercial markets, Barkat Market, and all Garden Town residential sectors.",
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
        <span className="text-[#E11D48] font-semibold">Model Town Lahore</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E11D48]/20 text-[#F43F5E] border border-[#E11D48]/40 text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5" />
          Blocks A to M • Link Road • Garden Town Express
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Flower Delivery in Model Town Lahore
        </h1>

        <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-3xl">
          Located just minutes from our MM Alam Road workshop via Kalma Chowk, Model Town is one of our quickest delivery zones. We deliver fresh Dutch roses, sunflower arrangements, money bouquets, and celebration cakes across Blocks A through M, Circular Road, and Model Town Link Road within 2 hours.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#E11D48]" /> 1.5 to 2.5 hours express delivery</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#25D366]" /> Photo on WhatsApp before dispatch</span>
          <a 
            href="https://wa.me/923001234567?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20to%20Model%20Town%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#25D366] font-semibold hover:underline"
          >
            <MessageCircle className="w-4 h-4" /> Order to Model Town on WhatsApp
          </a>
        </div>
      </section>

      {/* Delivery Zone Details */}
      <section className="bg-[#17171E] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-3">
        <div className="flex items-center gap-2 text-white">
          <Trees className="w-5 h-5 text-[#E11D48]" />
          <h2 className="font-playfair text-xl font-bold">Key Model Town Coverage Zones</h2>
        </div>
        <ul className="space-y-2 text-xs text-white/70 list-disc list-inside leading-relaxed">
          <li><strong>Blocks A, B, C, D, E & F:</strong> Central circular blocks, Model Town Park area, and community clubs.</li>
          <li><strong>Blocks G, H, J, K, L & M:</strong> Outer residential streets and family estates.</li>
          <li><strong>Model Town Link Road:</strong> Commercial centers, shopping plazas, and office suites.</li>
          <li><strong>Garden Town & Barkat Market:</strong> Kalma Chowk underpass rapid express route.</li>
        </ul>
      </section>

      {/* Popular Bouquets in Model Town */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>Popular bouquets ordered in Model Town</span>
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
