import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../../components/ProductCard";
import { Sparkles, Truck, Camera, MessageCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "White Rose Bouquet in Lahore | Fresh White Roses",
  },
  description: "Fresh white rose bouquets in Lahore. Single stems, dozens and 50-rose bouquets for weddings, apologies and new beginnings. Same-day delivery.",
  alternates: {
    canonical: "https://lahorebouquet.com/roses/white-roses",
  },
  openGraph: {
    title: "White Rose Bouquet in Lahore | Fresh White Roses",
    description: "Fresh white rose bouquets in Lahore. Single stems, dozens and 50-rose bouquets for weddings, apologies and new beginnings. Same-day delivery.",
    url: "https://lahorebouquet.com/roses/white-roses",
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
  },
};

export default async function WhiteRosesPage() {
  const allProducts = await getSanityProducts();
  const whiteRoses = allProducts.filter(p => 
    p.category === "Roses" && (
      p.title.toLowerCase().includes("white") || 
      p.title.toLowerCase().includes("pearl") || 
      p.title.toLowerCase().includes("ivory") || 
      p.title.toLowerCase().includes("blush") ||
      p.slug.includes("white") ||
      p.slug.includes("pearl") ||
      p.slug.includes("ivory") ||
      p.slug.includes("blush")
    )
  );

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
        name: "Roses",
        item: "https://lahorebouquet.com/roses",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "White Roses",
        item: "https://lahorebouquet.com/roses/white-roses",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are white roses okay for a hospital visit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, they are a common choice. Check with the hospital first, since some wards do not allow flowers."
        }
      },
      {
        "@type": "Question",
        name: "Can I mix white and red roses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our Duo Royale bouquet combines both."
        }
      }
    ]
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
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
        <Link href="/roses" className="hover:text-[#0B0B0B] transition-colors">Roses</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">White Roses</span>
      </nav>

      {/* Hero Category Banner (Section 5 Standard) */}
      <section className="bg-[#0B0B0B] p-8 sm:p-12 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            Pristine White & Ivory Stems
          </span>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            White Rose Bouquets in Lahore
          </h1>

          <p className="text-[#F8F3EA]/85 text-xs sm:text-sm leading-relaxed font-light">
            White roses are calm. People send them when they want to say sorry, congratulate a new mother, welcome someone home, or decorate a wedding. Ours come with soft green fillers or baby's breath, wrapped in pink, cream or black paper.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#C6A15B]" /> Delivery in 2 to 5 hours</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before it leaves</span>
            <a 
              href="https://wa.me/923094895080?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20white%20roses."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#C6A15B] font-semibold hover:underline"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Good for section */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-3">
        <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">Good for</h2>
        <p className="text-xs text-[#2A2A2A] leading-relaxed">
          Nikkah and walima gifts, hospital visits, apologies, graduations, and anyone who does not like loud colours.
        </p>
      </section>

      {/* Product Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Showing {whiteRoses.length} white and ivory rose arrangements</span>
          <span className="text-[#8B1E2D] font-semibold">Same-day express delivery active in Lahore</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {whiteRoses.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Category FAQ */}
      <section className="bg-white p-8 sm:p-10 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#2A2A2A] leading-relaxed">
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Are white roses okay for a hospital visit?</h3>
            <p>Yes, they are a common choice. Check with the hospital first, since some wards do not allow flowers.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Can I mix white and red roses?</h3>
            <p>Yes. Our Duo Royale bouquet combines both.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
