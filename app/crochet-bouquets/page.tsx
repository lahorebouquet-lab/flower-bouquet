export const revalidate = 86400;
import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../components/ProductCard";
import { Truck, Camera, MessageCircle, HelpCircle, Heart } from "lucide-react";
import { SITE_URL, itemListSchema } from "@/lib/business";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo("/crochet-bouquets", {
  title: {
    absolute: "Crochet Bouquets in Lahore | Handmade, Never Wilts — from Rs. 999",
  },
  description: "Handmade crochet bouquets in Lahore from Rs. 999 — roses, sunflowers, lavender & peonies that never wilt. A keepsake gift, delivered same-day. Order on WhatsApp.",
  alternates: {
    canonical: `${SITE_URL}/crochet-bouquets`,
  },
  openGraph: {
    title: "Crochet Bouquets in Lahore | Handmade, Never Wilts — from Rs. 999",
    description: "Handmade crochet bouquets in Lahore from Rs. 999 — roses, sunflowers, lavender & peonies that never wilt. A keepsake gift, delivered same-day. Order on WhatsApp.",
    url: `${SITE_URL}/crochet-bouquets`,
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Crochet Bouquets in Lahore | Handmade, Never Wilts — from Rs. 999",
      },
    ],
  },
});

export default async function CrochetBouquetsPage() {
  const allProducts = await getSanityProducts();
  const crochetProducts = allProducts.filter(p => 
    (p.category === "Bouquets" || p.category === "Crochet") && (
      p.title.toLowerCase().includes("crochet") || 
      p.slug.includes("crochet")
    )
  );

  const itemListJsonLd = itemListSchema(crochetProducts, `${SITE_URL}/crochet-bouquets`, "Crochet Bouquets in Lahore");

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
        name: "Crochet Bouquets",
        item: `${SITE_URL}/crochet-bouquets`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does a crochet bouquet cost in Lahore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our handmade crochet bouquets start at Rs. 999 (Crochet Lavender) and go up to Rs. 3,200 for the Crochet Sunflower, with most designs between Rs. 999 and Rs. 2,299."
        }
      },
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
      },
      {
        "@type": "Question",
        name: "How long do crochet flowers last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Years. Crochet flowers never wilt — just dust them gently with a soft brush and keep them away from damp places, and they will look the same years from now."
        }
      },
      {
        "@type": "Question",
        name: "Are crochet bouquets good for weddings?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. They are popular for bridal bouquets, nikkah gifts and anniversaries because the couple can keep them as a keepsake long after the event."
        }
      },
      {
        "@type": "Question",
        name: "Do you deliver crochet bouquets across Lahore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Popular in-stock styles are delivered same-day within 2 to 5 hours across Lahore with free delivery. Custom colour requests take 24 to 48 hours to handmake."
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
            Crochet Flower Bouquets in Lahore — Handmade &amp; Everlasting
          </h1>

          <p className="text-[#F8F3EA]/85 text-xs sm:text-sm leading-relaxed font-light">
            A crochet bouquet is the flower gift that never wilts. Every design at Lahore Bouquet is handmade stitch by stitch — crochet roses, sunflowers, lavender and peonies in soft yarn that keeps its colour and shape for years. Prices start at just Rs. 999, making crochet bouquets a thoughtful, lasting gift for birthdays, anniversaries, graduations and farewell presents. Choose from ready designs below, or ask on WhatsApp for custom colours — delivery is same-day across Lahore, with a photo of your bouquet before dispatch.
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

      {/* About Crochet Bouquets */}
      <section className="bg-white p-6 sm:p-10 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Flowers That Never Fade</h2>
        <div className="text-sm text-[#2A2A2A] leading-relaxed space-y-3">
          <p>
            Every crochet bouquet is knitted entirely by hand, petal by petal — which means no two bouquets are exactly alike. Where fresh flowers fade within days, crochet sunflowers, roses and mixed posies stay perfect for years, making them a keepsake rather than just a gift.
          </p>
          <p>
            In Lahore, crochet bouquets have become a favourite for anniversaries, graduations and new homes — occasions where people want the gift to be remembered. They are also popular as bridal bouquets for nikkah ceremonies, since the bride can keep hers forever. Custom colours are possible: tell us your palette on WhatsApp and we will confirm what can be handmade, usually within 24 to 48 hours.
          </p>
          <p>
            Popular ready-made styles are in stock for same-day delivery across Lahore, usually within 2 to 5 hours, with free delivery and a WhatsApp photo approval before dispatch. They need no water and no sunlight — just an occasional gentle dusting.
          </p>
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
            <h3 className="font-semibold text-[#0B0B0B] text-sm">How much does a crochet bouquet cost in Lahore?</h3>
            <p>Our handmade crochet bouquets start at Rs. 999 (Crochet Lavender) and go up to Rs. 3,200 for the Crochet Sunflower, with most designs between Rs. 999 and Rs. 2,299.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">How long does a crochet bouquet take to make?</h3>
            <p>Popular styles are in stock for same-day delivery, while custom colour requests take 24 to 48 hours.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Can I choose the colours?</h3>
            <p>Tell us your colours on WhatsApp and we will let you know what is possible.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">How long do crochet flowers last?</h3>
            <p>Years. Crochet flowers never wilt — just dust them gently with a soft brush and keep them away from damp places, and they will look the same years from now.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Are crochet bouquets good for weddings?</h3>
            <p>Yes. They are popular for bridal bouquets, nikkah gifts and anniversaries because the couple can keep them as a keepsake long after the event.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Do you deliver crochet bouquets across Lahore?</h3>
            <p>Yes. Popular in-stock styles are delivered same-day within 2 to 5 hours across Lahore with free delivery. Custom colour requests take 24 to 48 hours to handmake.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
