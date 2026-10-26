export const revalidate = 86400;
import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../components/ProductCard";
import { Truck, Camera, MessageCircle, HelpCircle, Leaf } from "lucide-react";
import { SITE_URL, itemListSchema } from "@/lib/business";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo("/dried-flowers", {
  title: {
    absolute: "Dried Flower Bouquets in Lahore | Preserved Flowers",
  },
  description: "Dried and preserved flower bunches in Lahore. Bamboo wildflower bunch from Rs. 1,250. Long-lasting home décor and gifts.",
  alternates: {
    canonical: `${SITE_URL}/dried-flowers`,
  },
  openGraph: {
    title: "Dried Flower Bouquets in Lahore | Preserved Flowers",
    description: "Dried and preserved flower bunches in Lahore. Bamboo wildflower bunch from Rs. 1,250. Long-lasting home décor and gifts.",
    url: `${SITE_URL}/dried-flowers`,
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Dried Flower Bouquets in Lahore | Preserved Flowers",
      },
    ],
  },
});

export default async function DriedFlowersPage() {
  const allProducts = await getSanityProducts();
  const driedProducts = allProducts.filter(p => 
    (p.category === "Bouquets" || p.category === "Dried") && (
      p.title.toLowerCase().includes("dried") || 
      p.title.toLowerCase().includes("wildflower") ||
      p.slug.includes("bamboo") ||
      p.slug.includes("dried")
    )
  );

  const itemListJsonLd = itemListSchema(driedProducts, `${SITE_URL}/dried-flowers`, "Dried Flowers in Lahore");

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
        name: "Dried Flowers",
        item: `${SITE_URL}/dried-flowers`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long do dried flowers last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Several months to a year or longer with good care. Keep them away from direct sunlight and humidity and they will hold their colour and shape far longer than fresh flowers."
        }
      },
      {
        "@type": "Question",
        name: "Do dried flowers need water?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Never put dried flowers in water — moisture damages them. They are fully preserved and need no water at all, which makes them ideal for offices and shelves."
        }
      },
      {
        "@type": "Question",
        name: "Are dried flowers good for weddings in Lahore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Dried and preserved arrangements are popular for nikkah stages, home décor and as keepsake gifts because they last for months and photograph beautifully."
        }
      },
      {
        "@type": "Question",
        name: "How much do dried flower bouquets cost in Lahore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our dried flower bunches start from Rs. 1,250. Final price depends on the size of the bunch and the mix of preserved botanicals."
        }
      },
      {
        "@type": "Question",
        name: "Do you deliver dried flowers across Lahore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We deliver dried flower bouquets across Lahore the same day, usually within 2 to 5 hours, with free delivery."
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
        <span className="text-[#8B1E2D] font-semibold">Dried Flowers</span>
      </nav>

      {/* Hero Category Banner (Section 5 Standard) */}
      <section className="bg-[#0B0B0B] p-8 sm:p-12 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
            <Leaf className="w-3.5 h-3.5 text-[#C6A15B]" />
            Naturally Preserved Botanicals
          </span>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Dried Flower Bouquets in Lahore
          </h1>

          <p className="text-[#F8F3EA]/85 text-xs sm:text-sm leading-relaxed font-light">
            Dried flowers suit people who want a gift that lasts months instead of days. They look good on a shelf, a dining table or a desk, and they need no water. Great for a housewarming or as a thank-you.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#C6A15B]" /> Delivery in 2 to 5 hours</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before it leaves</span>
            <a 
              href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20dried%20flowers."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#C6A15B] font-semibold hover:underline"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* About Dried Flowers */}
      <section className="bg-white p-6 sm:p-10 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Why Choose Dried Flowers?</h2>
        <div className="text-sm text-[#2A2A2A] leading-relaxed space-y-3">
          <p>
            Dried flowers are real flowers that have been naturally preserved, so they keep their shape and colour for months instead of days. Unlike fresh bouquets that fade within a week, a dried arrangement stays beautiful on your shelf, dining table or office desk with almost no maintenance — no water, no trimming, no wilting petals to clean up.
          </p>
          <p>
            In Lahore, dried flower bunches are a thoughtful choice for housewarmings, thank-you gifts and home décor, and they are increasingly popular for nikkah and wedding décor because they photograph beautifully and last well beyond the event. Our bamboo wildflower bunches and preserved mixes work in both modern apartments and traditional homes, pairing easily with ceramic vases, woven baskets or simple glass jars.
          </p>
          <p>
            Every order is delivered across Lahore the same day — usually within 2 to 5 hours — with free delivery and a WhatsApp photo for your approval before the bouquet leaves our studio. Dried bunches start from Rs. 1,250, making them one of the most affordable long-lasting gifts we offer.
          </p>
        </div>
      </section>

      {/* Care Instructions */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-3">
        <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">Care</h2>
        <p className="text-xs text-[#2A2A2A] leading-relaxed">
          Keep away from direct sunlight and humidity. Do not put them in water.
        </p>
      </section>

      {/* Product Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Showing preserved and dried flower bunches</span>
          <span className="text-[#8B1E2D] font-semibold">Long-lasting home décor</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {driedProducts.map((product) => (
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
            <h3 className="font-semibold text-[#0B0B0B] text-sm">How long do dried flowers last?</h3>
            <p>Several months to a year or longer with good care. Keep them away from direct sunlight and humidity and they will hold their colour and shape far longer than fresh flowers.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Do dried flowers need water?</h3>
            <p>No. Never put dried flowers in water — moisture damages them. They are fully preserved and need no water at all, which makes them ideal for offices and shelves.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Are dried flowers good for weddings in Lahore?</h3>
            <p>Yes. Dried and preserved arrangements are popular for nikkah stages, home décor and as keepsake gifts because they last for months and photograph beautifully.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">How much do dried flower bouquets cost in Lahore?</h3>
            <p>Our dried flower bunches start from Rs. 1,250. Final price depends on the size of the bunch and the mix of preserved botanicals.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Do you deliver dried flowers across Lahore?</h3>
            <p>Yes. We deliver dried flower bouquets across Lahore the same day, usually within 2 to 5 hours, with free delivery.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
