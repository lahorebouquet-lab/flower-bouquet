export const revalidate = 86400;
import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Truck, Camera, MessageCircle, HelpCircle, Droplets, Snowflake } from "lucide-react";
import { getSanityProducts } from "@/sanity/lib/fetch";
import { ALL_PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";
import { SITE_URL, itemListSchema } from "@/lib/business";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo("/tulip-bouquet-lahore", {
  title: {
    absolute: "Tulip Bouquet in Lahore | Seasonal Tulips, Made to Order",
  },
  description: "Tulip bouquets in Lahore — a seasonal favourite in pink, red, white and yellow. Availability is limited, so confirm on WhatsApp and we hand-tie yours fresh.",
  alternates: {
    canonical: `${SITE_URL}/tulip-bouquet-lahore`,
  },
  openGraph: {
    title: "Tulip Bouquet in Lahore | Seasonal Tulips, Made to Order",
    description: "Tulip bouquets in Lahore — a seasonal favourite in pink, red, white and yellow. Availability is limited, so confirm on WhatsApp and we hand-tie yours fresh.",
    url: `${SITE_URL}/tulip-bouquet-lahore`,
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Tulip Bouquet in Lahore | Seasonal Tulips, Made to Order",
      },
    ],
  },
});

export default async function TulipBouquetLahorePage() {
  const sanityProducts = await getSanityProducts();
  const allProducts = sanityProducts.length > 0 ? sanityProducts : ALL_PRODUCTS;

  // Filter tulip bouquets only (lilies have their own page)
  const tulipProducts = allProducts.filter(p =>
    p.title.toLowerCase().includes("tulip")
  );

  const itemListJsonLd = itemListSchema(tulipProducts, `${SITE_URL}/tulip-bouquet-lahore`, "Tulip Bouquets in Lahore");

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
        name: "Bouquets",
        item: `${SITE_URL}/bouquets`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Tulip Bouquet Lahore",
        item: `${SITE_URL}/tulip-bouquet-lahore`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "When are tulips available in Lahore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tulips are seasonal and arrive in limited quantities in the cool months. Message us on WhatsApp (0310-4225974) to check this week's availability."
        }
      },
      {
        "@type": "Question",
        name: "What is the tulip bouquet price in Lahore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the week's stem prices, so we confirm the exact price on WhatsApp before you order — honestly, rather than quoting a fixed rate that may not hold."
        }
      },
      {
        "@type": "Question",
        name: "Can I get a tulip bouquet delivered today?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "If tulips are in stock that day, yes — same-day delivery across Lahore with a photo on WhatsApp before dispatch."
        }
      },
      {
        "@type": "Question",
        name: "Can I mix tulips with roses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — when tulips are in stock, we can create bespoke mixed arrangements pairing tulips with roses or baby's breath."
        }
      },
      {
        "@type": "Question",
        name: "Do you send a picture before dispatch?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You will receive a WhatsApp photo of your actual bouquet before dispatch — our standard practice for every order."
        }
      }
    ]
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-14 bg-[#F8F3EA] text-[#2A2A2A]">
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
        <Link href="/bouquets" className="hover:text-[#0B0B0B] transition-colors">Bouquets</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Tulip Bouquet Lahore</span>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B0B0B] p-8 sm:p-14 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
            <Snowflake className="w-3.5 h-3.5" />
            Seasonal &amp; Made to Order
          </div>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Tulip Bouquet in Lahore — Seasonal &amp; Made to Order
          </h1>

          {/* AEO / GEO Direct Answer Paragraph */}
          <p className="text-[#F8F3EA]/90 text-sm sm:text-base leading-relaxed font-light">
            Tulips are Lahore&apos;s most asked-for seasonal flower — soft, modern and loved in pink, red, white and yellow. Tulips only reach Lahore in limited quantities during the cool season, so we prepare tulip bouquets to order: message us on WhatsApp at <a href="tel:+923104225974" className="text-[#C6A15B] font-semibold hover:underline">0310-4225974</a>, we confirm what colours and stems are available that week, and hand-tie your bouquet fresh with a photo on WhatsApp before dispatch. Outside tulip season, our rose and sunflower bouquets deliver the same bright, cheerful look — available every day.
          </p>

          <div className="flex flex-wrap gap-4 pt-3 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#C6A15B]" /> Delivery in 2 to 5 hours</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo sent on WhatsApp first</span>
            <span className="flex items-center gap-1.5"><Droplets className="w-4 h-4 text-[#C6A15B]" /> Seasonal — confirm stock on WhatsApp</span>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <a 
              href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20Are%20fresh%20tulips%20available%20today?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-semibold transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              Check Tulip Stock on WhatsApp (0310-4225974)
            </a>
          </div>
        </div>
      </section>

      {/* Product Display */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0B0B0B]">
              Seasonal Tulips & Exotic Blooms
            </h2>
            <p className="text-xs text-[#555555] mt-1">Limited seasonal availability — confirm this week&apos;s stock on WhatsApp</p>
          </div>
          <span className="text-xs text-[#8B1E2D] font-bold">Limited Seasonal Availability</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {tulipProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Colors & Pricing Guide */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] space-y-4">
          <h3 className="font-playfair text-xl font-bold text-[#0B0B0B]">Tulip Colours &amp; What They Mean</h3>
          <ul className="space-y-3 text-xs text-[#555555]">
            <li className="flex items-start gap-2">
              <span className="w-3 h-3 rounded-full bg-[#F4A7B9] mt-0.5 shrink-0 border border-[#D88A9C]" />
              <span><strong>Blush Pink Tulips:</strong> The most gifted choice for birthdays, anniversaries, and gentle congratulations.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-3 h-3 rounded-full bg-white mt-0.5 shrink-0 border border-[#CCCCCC]" />
              <span><strong>Pure White Tulips:</strong> Elegant and serene, ideal for bridal ceremonies, formal tributes, and apologies.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-3 h-3 rounded-full bg-[#B22222] mt-0.5 shrink-0 border border-[#8B0000]" />
              <span><strong>Velvet Red Tulips:</strong> A modern, chic alternative to red roses for romance and anniversaries.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FFD700] mt-0.5 shrink-0 border border-[#E6C200]" />
              <span><strong>Sunny Yellow Tulips:</strong> Radiant spring cheer for celebrations, new jobs, and graduations.</span>
            </li>
          </ul>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] space-y-4">
          <h3 className="font-playfair text-xl font-bold text-[#0B0B0B]">Caring for Fresh Tulips</h3>
          <ul className="space-y-2.5 text-xs text-[#555555]">
            <li className="flex items-start gap-2">
              <span className="text-[#8B1E2D] font-bold">1.</span>
              <span><strong>Cold Ice Water:</strong> Tulips thrive in chilly water. Add a couple of ice cubes to the vase each morning.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8B1E2D] font-bold">2.</span>
              <span><strong>Tall Support Vase:</strong> Stems continue to lengthen after cutting. A tall vase supports their upright growth.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8B1E2D] font-bold">3.</span>
              <span><strong>Rotate Daily:</strong> Tulips naturally reach toward ambient light. Turn the vase 180 degrees every day.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8B1E2D] font-bold">4.</span>
              <span><strong>Keep Away from Fruit:</strong> Ripening apples and bananas release ethylene gas that causes petals to drop quickly.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white p-8 sm:p-10 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#2A2A2A] leading-relaxed">
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">When are tulips available in Lahore?</h3>
            <p>Tulips are seasonal and arrive in limited quantities in the cool months. Message us on WhatsApp (0310-4225974) to check this week&apos;s availability.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">What is the tulip bouquet price in Lahore?</h3>
            <p>It depends on the week&apos;s stem prices, so we confirm the exact price on WhatsApp before you order — honestly, rather than quoting a fixed rate that may not hold.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Can I get a tulip bouquet delivered today?</h3>
            <p>If tulips are in stock that day, yes — same-day delivery across Lahore with a photo on WhatsApp before dispatch.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Can I mix tulips with roses?</h3>
            <p>Yes — when tulips are in stock, we can create bespoke mixed arrangements pairing tulips with roses or baby&apos;s breath.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Do you send a picture before dispatch?</h3>
            <p>Yes. You will receive a WhatsApp photo of your actual bouquet before dispatch — our standard practice for every order.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
