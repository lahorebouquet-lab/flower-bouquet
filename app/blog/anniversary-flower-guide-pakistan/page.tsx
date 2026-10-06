import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Best Anniversary Flowers by Year in Pakistan | Florist Guide",
  },
  description: "Discover the best flowers for wedding anniversaries in Pakistan. Traditional and modern floral choices for 1st, 5th, 10th, and 25th milestones with midnight delivery.",
  alternates: {
    canonical: `${SITE_URL}/blog/anniversary-flower-guide-pakistan`,
  },
  openGraph: {
    title: "Best Anniversary Flowers by Year in Pakistan | Florist Guide",
    description: "Discover the best flowers for wedding anniversaries in Pakistan. Traditional and modern floral choices for 1st, 5th, 10th, and 25th milestones with midnight delivery.",
    url: `${SITE_URL}/blog/anniversary-flower-guide-pakistan`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Best Anniversary Flowers by Year in Pakistan | Florist Guide",
      },
    ],
  }
};

export default function AnniversaryGuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Best Anniversary Flowers by Year: Milestones Guide in Pakistan",
    description: "Guide to anniversary flowers, rose counts, and romantic surprises in Pakistan.",
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
    datePublished: "2026-10-02",
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
        <span className="text-[#8B1E2D] font-semibold">Anniversary Flowers Guide</span>
      </nav>

      {/* Header */}
      <header className="space-y-4">
        <div className="flex items-center gap-3 text-xs text-[#777777]">
          <span className="px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] font-bold uppercase tracking-wider text-[11px]">
            Romance & Anniversaries
          </span>
          <span>•</span>
          <span>October 2026</span>
          <span>•</span>
          <span>5 min read</span>
        </div>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Best Anniversary Flowers by Milestone Year in Pakistan
        </h1>

        <p className="text-[#2A2A2A] text-sm sm:text-base leading-relaxed">
          Celebrating a marriage milestone with fresh flowers is an enduring romantic tradition. Whether it is your 1st "Paper" anniversary or your 25th Silver Jubilee, choosing the right floral palette elevates your heartfelt gesture into an unforgettable memory.
        </p>
      </header>

      {/* Content */}
      <div className="space-y-8 text-[#2A2A2A] text-sm sm:text-base leading-relaxed border-t border-b border-[#E5DED2] py-8">
        <section className="space-y-3">
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">1st Anniversary: Carnations & Spray Roses</h2>
          <p>
            The first year of marriage represents youthful joy, passion, and the promise of a lifetime together. Fresh blush spray roses paired with fragrant pastel carnations symbolize fresh beginnings and passionate commitment.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">5th Anniversary: Sunflowers & Wild Daisies</h2>
          <p>
            Five years together signifies deep stability and rooted growth. Bright golden sunflowers, representing loyalty and longevity, are the traditional favorite. Combine with yellow garden roses for a cheerful celebration.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">10th Anniversary: Imperial Velvet Red Roses (50 Stems)</h2>
          <p>
            A full decade together calls for supreme romantic grandeur. 50 imported Dutch red roses hand-tied in sleek matte black paper with a silk ribbon showcase enduring devotion that has stood the test of time.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">The Midnight 12:00 AM Surprise Trick</h2>
          <p>
            In cities like Lahore, ordering a midnight flower delivery is one of the most effective ways to show genuine thoughtfulness. Booking early ensures a courier is stationed outside your residence at 11:55 PM, ringing the bell precisely at the stroke of midnight. Pair it with one of our <Link href="/bouquets" className="text-[#8B1E2D] underline">anniversary bouquets</Link> for the full surprise.
          </p>
        </section>
      </div>

      {/* Bottom CTA (Section 10 Promo / Luxury Black Banner) */}
      <div className="p-6 sm:p-8 rounded-2xl bg-[#0B0B0B] border border-[rgba(198,161,91,0.30)] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="font-playfair text-xl font-bold text-white">Planning an Anniversary Surprise?</h3>
          <p className="text-xs text-[#F8F3EA]/75">
            Browse our curated anniversary collection with custom greeting cards and midnight delivery.
          </p>
        </div>
        <Link 
          href="/occasions/anniversary" 
          className="px-6 py-3 rounded-xl bg-[#8B1E2D] hover:bg-[#C6A15B] text-white hover:text-[#0B0B0B] text-xs font-bold whitespace-nowrap transition-all shadow-lg"
        >
          View Anniversary Bouquets →
        </Link>
      </div>
    </article>
  );
}
