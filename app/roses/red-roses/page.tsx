import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../../components/ProductCard";
import { Heart, Truck, Camera, MessageCircle, HelpCircle } from "lucide-react";
import { SITE_URL, itemListSchema } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Red Rose Bouquet Lahore | Imported Dutch Red Roses",
  },
  description: "Send imported red roses in Lahore. 1, 12, 24 or 50 stems in black or cream wrap, with a handwritten card. Delivered in 2 to 5 hours.",
  alternates: {
    canonical: `${SITE_URL}/roses/red-roses`,
  },
  openGraph: {
    title: "Red Rose Bouquet Lahore | Imported Dutch Red Roses",
    description: "Send imported red roses in Lahore. 1, 12, 24 or 50 stems in black or cream wrap, with a handwritten card. Delivered in 2 to 5 hours.",
    url: `${SITE_URL}/roses/red-roses`,
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Red Rose Bouquet Lahore | Imported Dutch Red Roses",
      },
    ],
  },
};

export default async function RedRosesPage() {
  const allProducts = await getSanityProducts();
  const redRoses = allProducts.filter(p => 
    p.category === "Roses" && (
      p.title.toLowerCase().includes("red") || 
      p.title.toLowerCase().includes("crimson") || 
      p.title.toLowerCase().includes("velvet") ||
      p.slug.includes("crimson") ||
      p.slug.includes("red")
    )
  );

  const itemListJsonLd = itemListSchema(redRoses, `${SITE_URL}/roses/red-roses`, "Red Rose Bouquets in Lahore");

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
        name: "Roses",
        item: `${SITE_URL}/roses`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Red Roses",
        item: `${SITE_URL}/roses/red-roses`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What does a dozen red roses mean?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Traditionally, love and commitment. Many people send 12 for anniversaries and a single rose for a first 'I am thinking of you'."
        }
      },
      {
        "@type": "Question",
        name: "Can you deliver red roses at midnight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, book a late-night slot (11:30 PM to 12:15 AM) in advance."
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/roses" className="hover:text-[#0B0B0B] transition-colors">Roses</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Red Roses</span>
      </nav>

      {/* Hero Category Banner (Section 5 Standard) */}
      <section className="bg-[#0B0B0B] p-8 sm:p-12 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-[#C6A15B] text-[#C6A15B]" />
            Imported Dutch Stems
          </span>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Red Rose Bouquets in Lahore
          </h1>

          <p className="text-[#F8F3EA]/85 text-xs sm:text-sm leading-relaxed font-light">
            A red rose bouquet is still the most requested gift we make, and there is a reason. It works for an anniversary, a first date, an apology and a "just because". Our red roses are imported Dutch stems, packed in matte black or cream paper, with baby's breath or eucalyptus if you want it.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#C6A15B]" /> Delivery in 2 to 5 hours</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before it leaves</span>
            <a 
              href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20red%20roses."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#C6A15B] font-semibold hover:underline"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Popular Sizes Price Guide */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">Popular sizes</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-[#2A2A2A]">
          <div className="p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2] space-y-1">
            <div className="font-bold text-[#0B0B0B] text-sm">1 long-stem rose</div>
            <div className="text-[#8B1E2D] font-bold">Rs. 1,239</div>
            <div className="text-[11px] text-[#777777]">Single stem with baby's breath</div>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2] space-y-1">
            <div className="font-bold text-[#0B0B0B] text-sm">12 to 15 roses</div>
            <div className="text-[#8B1E2D] font-bold">About Rs. 1,900</div>
            <div className="text-[11px] text-[#777777]">With white baby's breath</div>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2] space-y-1">
            <div className="font-bold text-[#0B0B0B] text-sm">24 roses</div>
            <div className="text-[#8B1E2D] font-bold">About Rs. 3,200</div>
            <div className="text-[11px] text-[#777777]">Two dozen classic arrangement</div>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2] space-y-1">
            <div className="font-bold text-[#0B0B0B] text-sm">50 roses</div>
            <div className="text-[#8B1E2D] font-bold">From Rs. 5,500</div>
            <div className="text-[11px] text-[#777777]">Grand celebration statement</div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Showing {redRoses.length} red rose arrangements</span>
          <span className="text-[#8B1E2D] font-semibold">Same-day express delivery active in Lahore</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {redRoses.map((product) => (
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
            <h3 className="font-semibold text-[#0B0B0B] text-sm">What does a dozen red roses mean?</h3>
            <p>Traditionally, love and commitment. Many people send 12 for anniversaries and a single rose for a first "I am thinking of you".</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Can you deliver red roses at midnight?</h3>
            <p>Yes, book a late-night slot in advance (11:30 PM to 12:15 AM).</p>
          </div>
        </div>
      </section>
    </main>
  );
}
