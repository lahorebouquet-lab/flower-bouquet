import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../../components/ProductCard";
import { Sparkles, Truck, Camera, MessageCircle, HelpCircle } from "lucide-react";
import { SITE_URL, itemListSchema } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "White Rose Bouquet in Lahore | Fresh White Roses",
  },
  description: "Fresh white rose bouquets in Lahore. Single stems, dozens and 50-rose bouquets for weddings, apologies and new beginnings. Same-day delivery.",
  alternates: {
    canonical: `${SITE_URL}/roses/white-roses`,
  },
  openGraph: {
    title: "White Rose Bouquet in Lahore | Fresh White Roses",
    description: "Fresh white rose bouquets in Lahore. Single stems, dozens and 50-rose bouquets for weddings, apologies and new beginnings. Same-day delivery.",
    url: `${SITE_URL}/roses/white-roses`,
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "White Rose Bouquet in Lahore | Fresh White Roses",
      },
    ],
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

  const itemListJsonLd = itemListSchema(whiteRoses, `${SITE_URL}/roses/white-roses`, "White Rose Bouquets in Lahore");

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
        name: "White Roses",
        item: `${SITE_URL}/roses/white-roses`,
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
      },
      {
        "@type": "Question",
        name: "What do white roses symbolize?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "White roses symbolize purity, innocence, new beginnings and remembrance. They are the traditional choice for weddings, apologies and sympathy gestures."
        }
      },
      {
        "@type": "Question",
        name: "How long do white roses last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With fresh water and a cool spot away from direct sunlight, white roses typically stay fresh for 5 to 7 days. We deliver them farm-fresh so you get the maximum vase life."
        }
      },
      {
        "@type": "Question",
        name: "Do you deliver white rose bouquets across Lahore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We deliver fresh white rose bouquets across Lahore the same day, usually within 2 to 5 hours, with free delivery and a WhatsApp photo before dispatch."
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
              href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20white%20roses."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#C6A15B] font-semibold hover:underline"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* About White Roses */}
      <section className="bg-white p-6 sm:p-10 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">The Meaning Behind White Roses</h2>
        <div className="text-sm text-[#2A2A2A] leading-relaxed space-y-3">
          <p>
            White roses have carried the same meaning for centuries: purity, innocence, new beginnings and sincere remembrance. That is why they appear at such different moments — a nikkah ceremony, an apology, a hospital visit, a graduation. The message is always calm and respectful, never loud.
          </p>
          <p>
            Our white rose bouquets in Lahore come in single stems, classic dozens and grand 50-rose arrangements, styled with soft green fillers or baby&apos;s breath and wrapped in pink, cream or black paper to match the mood. For a striking contrast, the Duo Royale pairs white and red roses in a single bouquet — a popular pick for engagements.
          </p>
          <p>
            Every bouquet is cut fresh and delivered across Lahore the same day, usually within 2 to 5 hours, with free delivery. You approve a photo on WhatsApp before it leaves our studio, so the roses that arrive are exactly the ones you chose. With fresh water and a cool spot, white roses stay beautiful for 5 to 7 days.
          </p>
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
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">What do white roses symbolize?</h3>
            <p>White roses symbolize purity, innocence, new beginnings and remembrance. They are the traditional choice for weddings, apologies and sympathy gestures.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">How long do white roses last?</h3>
            <p>With fresh water and a cool spot away from direct sunlight, white roses typically stay fresh for 5 to 7 days. We deliver them farm-fresh so you get the maximum vase life.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Do you deliver white rose bouquets across Lahore?</h3>
            <p>Yes. We deliver fresh white rose bouquets across Lahore the same day, usually within 2 to 5 hours, with free delivery and a WhatsApp photo before dispatch.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
