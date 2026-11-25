import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../../components/ProductCard";
import { Truck, Camera, MessageCircle, Award } from "lucide-react";
import { SITE_URL } from "@/lib/business";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo("/occasions/congratulations", {
  title: {
    absolute: "Congratulations & Graduation Flowers in Lahore",
  },
  description: "Congratulation and graduation bouquets in Lahore. Sunflowers, mixed roses and money bouquets for new jobs, results and milestones.",
  alternates: {
    canonical: `${SITE_URL}/occasions/congratulations`,
  },
  openGraph: {
    title: "Congratulations & Graduation Flowers in Lahore",
    description: "Congratulation and graduation bouquets in Lahore. Sunflowers, mixed roses and money bouquets for new jobs, results and milestones.",
    url: `${SITE_URL}/occasions/congratulations`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Congratulations & Graduation Flowers in Lahore",
      },
    ],
  }
});

const GUIDE_TITLE = "Sending Congratulations Flowers in Lahore";
const GUIDE: [string, string][] = [
  ["Bright flowers for good news", "Sunflowers, mixed bouquets and cheerful colours suit a new job, a graduation, a promotion or a business opening. Hand-tied bouquets start from Rs. 1,239, and larger arrangements are available when the occasion is bigger."],
  ["Sending to an office", "We deliver to offices as well as homes. Add the recipient's name, the company, the floor or reception details and a phone number so the rider can reach the right person. Orders placed before 4 PM Pakistan time are delivered the same day, usually in 2 to 5 hours."],
  ["Make it personal", "Send a short message with your order and we include it on a card. A photo of the bouquet is shared on WhatsApp before dispatch, and you can add a cake or chocolates from our gifts range."],
  ["Payment", "We accept bank transfer, JazzCash, EasyPaisa and international cards. Cash on Delivery is not available."],
];

export default async function CongratulationsPage() {
  const allProducts = await getSanityProducts();
  const congratsProducts = allProducts.filter(p => 
    p.occasion && (p.occasion.includes("Congratulations") || p.occasion.includes("Graduation"))
  );

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Congratulations & Graduations",
        item: `${SITE_URL}/occasions/congratulations`,
      },
    ],
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#777777]">Occasions</span>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Congratulations & Graduations</span>
      </nav>

      {/* Hero Category Banner (Section 5 Standard) */}
      <section className="bg-[#0B0B0B] p-8 sm:p-12 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-[#C6A15B]" />
            Milestones & Success
          </span>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Congratulations and Graduation Flowers in Lahore
          </h1>

          <p className="text-[#F8F3EA]/85 text-xs sm:text-sm leading-relaxed font-light">
            New job? Exam results? First salary? Say well done with flowers. Sunflowers are the happy choice, mixed roses look festive, and a money bouquet is a favourite for graduates.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#C6A15B]" /> Delivery in 2 to 5 hours</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before it leaves</span>
            <a 
              href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20congratulations%20flowers."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#C6A15B] font-semibold hover:underline"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Showing {congratsProducts.length} congratulations and graduation bouquets</span>
          <span className="text-[#8B1E2D] font-semibold">Same-day express delivery active in Lahore</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {congratsProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">{GUIDE_TITLE}</h2>
        <div className="space-y-4 text-sm text-[#2A2A2A] leading-relaxed">
          {GUIDE.map(([heading, body], i) => (
            <div key={i} className="space-y-1">
              <h3 className="font-semibold text-[#0B0B0B]">{heading}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
