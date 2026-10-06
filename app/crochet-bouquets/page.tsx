export const revalidate = 60;
import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../components/ProductCard";
import { Truck, Camera, MessageCircle, HelpCircle, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Handmade Crochet Flower Bouquets in Lahore",
  },
  description: "Crochet flower bouquets in Lahore that never wilt. Handmade sunflower and rose bouquets, a gift that lasts for years.",
  alternates: {
    canonical: "https://lahorebouquet.com/crochet-bouquets",
  },
  openGraph: {
    title: "Handmade Crochet Flower Bouquets in Lahore",
    description: "Crochet flower bouquets in Lahore that never wilt. Handmade sunflower and rose bouquets, a gift that lasts for years.",
    url: "https://lahorebouquet.com/crochet-bouquets",
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
  },
};

export default async function CrochetBouquetsPage() {
  const allProducts = await getSanityProducts();
  const crochetProducts = allProducts.filter(p => 
    (p.category === "Bouquets" || p.category === "Crochet") && (
      p.title.toLowerCase().includes("crochet") || 
      p.slug.includes("crochet")
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
        name: "Bouquets",
        item: "https://lahorebouquet.com/bouquets",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Crochet Bouquets",
        item: "https://lahorebouquet.com/crochet-bouquets",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does a crochet bouquet take to make?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Popular styles are in stock for same-day delivery, while custom colour requests take 24 to 48 hours."
        }
      },
      {
        "@type": "Question",
        name: "Can I choose the colours?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tell us your colours on WhatsApp and we will let you know what is possible."
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
        <Link href="/bouquets" className="hover:text-[#0B0B0B] transition-colors">Bouquets</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Crochet Bouquets</span>
      </nav>

      {/* Hero Category Banner (Section 5 Standard) */}
      <section className="bg-[#0B0B0B] p-8 sm:p-12 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-[#C6A15B] text-[#C6A15B]" />
            Handmade Everlasting Keepsake
          </span>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Crochet Flower Bouquets in Lahore
          </h1>

          <p className="text-[#F8F3EA]/85 text-xs sm:text-sm leading-relaxed font-light">
            Fresh flowers fade. Crochet flowers stay. Every bouquet is knitted by hand, so no two are exactly alike. They make lovely gifts for people who keep things: for an anniversary, a graduation, or a new home. No watering, no wilting.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#C6A15B]" /> Delivery in 2 to 5 hours</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before it leaves</span>
            <a 
              href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20a%20crochet%20bouquet."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#C6A15B] font-semibold hover:underline"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Care Instructions */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-3">
        <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">Care</h2>
        <p className="text-xs text-[#2A2A2A] leading-relaxed">
          Dust gently with a soft brush. Keep away from damp places. Never needs water and lasts for years.
        </p>
      </section>

      {/* Product Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Showing handmade crochet bouquets</span>
          <span className="text-[#8B1E2D] font-semibold">Same-day express delivery active in Lahore</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {crochetProducts.map((product) => (
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
            <h3 className="font-semibold text-[#0B0B0B] text-sm">How long does a crochet bouquet take to make?</h3>
            <p>Popular styles are in stock for same-day delivery, while custom colour requests take 24 to 48 hours.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Can I choose the colours?</h3>
            <p>Tell us your colours on WhatsApp and we will let you know what is possible.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
