import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "How to Keep Flower Bouquets Fresh in Lahore Heat (Florist Tips)",
  },
  description: "Learn how to keep cut roses and flower bouquets alive for up to 7 days in Lahore's warm climate. Practical florist tips on water changing, stem trimming, and vase placement.",
  alternates: {
    canonical: `${SITE_URL}/blog/how-to-keep-flowers-fresh-in-lahore`,
  },
  openGraph: {
    title: "How to Keep Flower Bouquets Fresh in Lahore Heat (Florist Tips)",
    description: "Learn how to keep cut roses and flower bouquets alive for up to 7 days in Lahore's warm climate. Practical florist tips on water changing, stem trimming, and vase placement.",
    url: `${SITE_URL}/blog/how-to-keep-flowers-fresh-in-lahore`,
    type: "article",
  }
};

export default function FlowerCareBlogPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to Keep Flower Bouquets Fresh in Lahore Heat (Florist Care Guide)",
    description: "Florist guide on keeping fresh cut flowers and roses alive longer in Pakistan.",
    author: {
      "@type": "Organization",
      name: "Lahore Bouquet Florist Team",
      url: `${SITE_URL}`,
    },
    publisher: {
      "@type": "Organization",
      name: "Lahore Bouquet",
      url: `${SITE_URL}`,
    },
    datePublished: "2026-10-01",
    dateModified: "2026-10-03",
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-10 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-[#0B0B0B] transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Flower Care in Lahore Heat</span>
      </nav>

      {/* Header */}
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-xs text-[#777777]">
          <span className="px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] font-bold uppercase tracking-wider text-[11px]">
            Florist Care Guide
          </span>
          <span>•</span>
          <span>October 2026</span>
          <span>•</span>
          <span>4 min read</span>
        </div>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          How to Keep Flower Bouquets Fresh in Lahore's Heat
        </h1>

        <p className="text-[#2A2A2A] text-sm sm:text-base leading-relaxed">
          Lahore's dry summer warmth and high humidity can cause fresh cut blooms to wilt in just 24 to 48 hours if left uncared for. However, with simple daily techniques practiced by professional florists, your imported Dutch roses, sunflowers, and lisianthus can easily stay vibrant for 5 to 8 days.
        </p>
      </header>

      {/* Article Content */}
      <div className="space-y-8 text-[#2A2A2A] text-sm sm:text-base leading-relaxed border-t border-b border-[#E5DED2] py-8">
        <section className="space-y-3">
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">1. Cut Stems at a 45-Degree Angle Underwater</h2>
          <p>
            When flowers arrive wrapped in paper, the stem ends have often formed a microscopic air pocket (embolism) that blocks water intake. Before placing them in your vase, use sharp pruning shears or a clean kitchen knife to trim 1 to 2 inches off each stem at a 45-degree slant. Doing this submerged in a small bowl of water prevents air from entering the stem capillaries.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">2. Change the Vase Water Every 24 Hours</h2>
          <p>
            Warm room temperatures in Lahore encourage rapid bacterial growth in still water, creating a cloudy film that clogs stems and causes foul odors. Always use cold, clean tap or filtered water. Rinse the vase thoroughly with mild dish soap each day before refilling.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">3. DIY Floral Food Recipe for Lahore Tap Water</h2>
          <p>
            If your bouquet did not include a flower nutrient sachet, you can prepare an effective floral preservative with common kitchen ingredients:
          </p>
          <ul className="list-disc list-inside space-y-2 pl-2 text-[#2A2A2A]">
            <li><strong>Sugar (1 teaspoon):</strong> Provides essential carbohydrates to nourish blooming petals.</li>
            <li><strong>Lemon juice or white vinegar (3-4 drops):</strong> Acidifies the water, enhancing capillary uptake.</li>
            <li><strong>Bleach (1 drop):</strong> Inhibits harmful bacteria without damaging delicate stems.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">4. Keep Away from AC Drafts and Direct Sunlight</h2>
          <p>
            While keeping flowers in an air-conditioned room helps maintain petal firmness, placing your vase directly under the cold blast of a split AC unit dehydrates petals quickly. Similarly, avoid sunlit window sills and proximity to ripening fruit (like bananas or apples), which emit ethylene gas that accelerates wilting.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">5. Emergency Revival for Drooping Roses</h2>
          <p>
            If your roses have started nodding or drooping their heads, give them an ice water shock therapy: trim 1 inch off the bottom at a sharp angle and place the stems in 2 to 3 inches of chilled ice water for 30 minutes. The rapid temperature drop constricts capillaries and forces water upward to re-inflate the rose head.
          </p>
        </section>
      </div>

      {/* Florist Callout (Section 10 Promo / Luxury Black Banner) */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#0B0B0B] border border-[rgba(198,161,91,0.30)] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="font-playfair text-xl font-bold text-white">Need Fresh Hydrated Flowers Delivered Today?</h3>
          <p className="text-xs text-[#F8F3EA]/75">
            All Lahore Bouquet arrangements are prepared in water tubes and delivered in temperature-controlled courier vans across Lahore.
          </p>
        </div>
        <Link 
          href="/collections/bouquets" 
          className="px-6 py-3 rounded-xl bg-[#8B1E2D] hover:bg-[#C6A15B] text-white hover:text-[#0B0B0B] text-xs font-bold whitespace-nowrap transition-all shadow-lg"
        >
          Explore Fresh Bouquets →
        </Link>
      </div>
    </article>
  );
}
