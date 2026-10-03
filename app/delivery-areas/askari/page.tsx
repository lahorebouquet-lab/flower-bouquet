import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ALL_PRODUCTS } from "../../data/products";
import ProductCard from "../../components/ProductCard";
import { MapPin, Clock, Truck, Camera, MessageCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Delivery in Askari Lahore | Askari 1 to 11",
  },
  description: "Express same-day flower delivery across Askari 1, Askari 5, Askari 9, Askari 10 & Askari 11 (Bedian Road) in 2 to 3 hours. Photo on WhatsApp first.",
  alternates: {
    canonical: "https://lahorebouquet.com/delivery-areas/askari",
  },
  openGraph: {
    title: "Flower Delivery in Askari Lahore | Askari 1 to 11",
    description: "Express same-day flower delivery across Askari 1, Askari 5, Askari 9, Askari 10 & Askari 11 (Bedian Road) in 2 to 3 hours. Photo on WhatsApp first.",
    url: "https://lahorebouquet.com/delivery-areas/askari",
  }
};

export default function AskariDeliveryPage() {
  const popularBouquets = ALL_PRODUCTS.slice(1, 5);

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
        name: "Askari Housing Lahore",
        item: "https://lahorebouquet.com/delivery-areas/askari",
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
        <span className="text-[#E11D48] font-semibold">Askari Housing Lahore</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E11D48]/20 text-[#F43F5E] border border-[#E11D48]/40 text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5" />
          Askari 1 to 11 • Bedian Road • Ring Road Corridor
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Flower Delivery in Askari Housing Lahore
        </h1>

        <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-3xl">
          We service all Askari communities across Lahore, including Askari 1 (Sarwar Road), Askari 5, Askari 9, Askari 10 (Airport Road), and Askari 11 (Bedian Road). Our couriers maintain valid identification for gated security clearance and deliver hand-tied bouquets with WhatsApp photo confirmation.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#E11D48]" /> 2 to 3 hours delivery</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#25D366]" /> Photo on WhatsApp before dispatch</span>
          <a 
            href="https://wa.me/923001234567?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20to%20Askari%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#25D366] font-semibold hover:underline"
          >
            <MessageCircle className="w-4 h-4" /> Order to Askari on WhatsApp
          </a>
        </div>
      </section>

      {/* Askari Sectors */}
      <section className="bg-[#17171E] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-3">
        <div className="flex items-center gap-2 text-white">
          <ShieldCheck className="w-5 h-5 text-[#25D366]" />
          <h2 className="font-playfair text-xl font-bold">Askari Housing Coverage Across Lahore</h2>
        </div>
        <ul className="space-y-2 text-xs text-white/70 list-disc list-inside leading-relaxed">
          <li><strong>Askari 1 & Askari 2:</strong> Cantt central sectors and Sarwar Road.</li>
          <li><strong>Askari 5 & Askari 6:</strong> Gulberg & Cantonment perimeter corridor.</li>
          <li><strong>Askari 9 & Askari 10:</strong> Zarrar Shaheed Road and Allama Iqbal Airport bypass.</li>
          <li><strong>Askari 11 (Bedian Road):</strong> High-rise towers and villas via Ring Road Bedian Interchange.</li>
        </ul>
      </section>

      {/* Popular Bouquets in Askari */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>Popular bouquets ordered in Askari Lahore</span>
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
