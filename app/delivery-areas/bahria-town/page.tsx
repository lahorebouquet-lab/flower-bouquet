import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../../components/ProductCard";
import { Clock, Truck, MessageCircle, AlertCircle, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Delivery in Bahria Town Lahore | Same-Day Bouquets",
  },
  description: "Fresh flower bouquets, cakes & gifts delivered to Bahria Town Lahore (Sectors A–F, Safari Villas) and Lake City in 2 to 4 hours. Photo on WhatsApp first.",
  alternates: {
    canonical: "https://lahorebouquet.com/delivery-areas/bahria-town",
  },
  openGraph: {
    title: "Flower Delivery in Bahria Town Lahore | Same-Day Bouquets",
    description: "Fresh flower bouquets, cakes & gifts delivered to Bahria Town Lahore (Sectors A–F, Safari Villas) and Lake City in 2 to 4 hours. Photo on WhatsApp first.",
    url: "https://lahorebouquet.com/delivery-areas/bahria-town",
  }
};

export default async function BahriaTownDeliveryPage() {
  const allProducts = await getSanityProducts();
  const popularBouquets = allProducts.slice(1, 5);

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
        name: "Bahria Town Lahore",
        item: "https://lahorebouquet.com/delivery-areas/bahria-town",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does flower delivery to Bahria Town Lahore take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Delivery to Bahria Town Lahore typically takes 2.5 to 4 hours. We transport all bouquets via the Lahore Ring Road in temperature-controlled vans to prevent petals from wilting.",
        },
      },
      {
        "@type": "Question",
        name: "Do you deliver to Safari Villas and Lake City as well?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our southern delivery route covers Bahria Town Sectors A through F, Safari Villas, Sector Jasmine, and Lake City with same-day and midnight slots.",
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
        <span className="text-[#8B1E2D] font-semibold">Bahria Town Lahore</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <Truck className="w-3.5 h-3.5 text-[#C6A15B]" />
          Sectors A to F & Safari Villas Express
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Flower Delivery in Bahria Town Lahore
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Sending flowers to Bahria Town requires careful temperature control during transit. From our workshop on Lahore, our climate-controlled courier vans navigate via Lahore Ring Road to reach Sectors A through F, Safari Villas, and Lake City within 2.5 to 4 hours. You receive a photo of your hand-tied bouquet on WhatsApp before our driver departs.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#8B1E2D]" /> 2.5 to 4 hours via Ring Road</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#C6A15B]" /> AC van hydration transit</span>
          <a 
            href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20to%20Bahria%20Town%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#8B1E2D] font-semibold hover:text-[#C6A15B]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order to Bahria Town on WhatsApp
          </a>
        </div>
      </section>

      {/* Bahria Town Tips */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <AlertCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Important Tips for Bahria Town Deliveries</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li>Specify the exact Sector (A, B, C, D, E, or F), street number, and house number clearly.</li>
          <li>For gated sub-communities like Safari Villas and Executive Lodges, let security guards know a flower courier is arriving.</li>
          <li>For midnight birthday deliveries, please book by 8:00 PM so our evening Ring Road dispatch can be scheduled smoothly.</li>
        </ul>
      </section>

      {/* Popular Bouquets in Bahria */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Popular bouquets ordered in Bahria Town</span>
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
