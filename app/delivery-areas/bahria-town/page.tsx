import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ALL_PRODUCTS } from "../../data/products";
import ProductCard from "../../components/ProductCard";
import { MapPin, Clock, Truck, Camera, MessageCircle, AlertCircle, ShieldCheck } from "lucide-react";

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

export default function BahriaTownDeliveryPage() {
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
        <span className="text-[#E11D48] font-semibold">Bahria Town Lahore</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E11D48]/20 text-[#F43F5E] border border-[#E11D48]/40 text-xs font-bold uppercase tracking-wider">
          <Truck className="w-3.5 h-3.5" />
          Sectors A to F & Safari Villas Express
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Flower Delivery in Bahria Town Lahore
        </h1>

        <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-3xl">
          Sending flowers to Bahria Town requires careful temperature control during transit. From our workshop on MM Alam Road, our climate-controlled courier vans navigate via Lahore Ring Road to reach Sectors A through F, Safari Villas, and Lake City within 2.5 to 4 hours. You receive a photo of your hand-tied bouquet on WhatsApp before our driver departs.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#E11D48]" /> 2.5 to 4 hours via Ring Road</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#25D366]" /> AC van hydration transit</span>
          <a 
            href="https://wa.me/923001234567?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20to%20Bahria%20Town%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#25D366] font-semibold hover:underline"
          >
            <MessageCircle className="w-4 h-4" /> Order to Bahria Town on WhatsApp
          </a>
        </div>
      </section>

      {/* Bahria Town Tips */}
      <section className="bg-[#17171E] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-3">
        <div className="flex items-center gap-2 text-white">
          <AlertCircle className="w-5 h-5 text-[#E11D48]" />
          <h2 className="font-playfair text-xl font-bold">Important Tips for Bahria Town Deliveries</h2>
        </div>
        <ul className="space-y-2 text-xs text-white/70 list-disc list-inside leading-relaxed">
          <li>Specify the exact Sector (A, B, C, D, E, or F), street number, and house number clearly.</li>
          <li>For gated sub-communities like Safari Villas and Executive Lodges, let security guards know a flower courier is arriving.</li>
          <li>For midnight birthday deliveries, please book by 8:00 PM so our evening Ring Road dispatch can be scheduled smoothly.</li>
        </ul>
      </section>

      {/* Popular Bouquets in Bahria */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>Popular bouquets ordered in Bahria Town</span>
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
