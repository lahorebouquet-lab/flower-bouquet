import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Care & Gifting Guides Lahore | Florist Blog",
  },
  description: "Expert floral care tips, occasion gifting guides, and Lahore floristry news by master florists at Lahore Bouquet.",
  alternates: {
    canonical: "https://lahorebouquet.com/blog",
  },
  openGraph: {
    title: "Flower Care & Gifting Guides Lahore | Florist Blog",
    description: "Expert floral care tips, occasion gifting guides, and Lahore floristry news by master florists at Lahore Bouquet.",
    url: "https://lahorebouquet.com/blog",
  }
};

export const BLOG_POSTS = [
  {
    slug: "how-to-keep-flowers-fresh-in-lahore",
    title: "How to Keep Flower Bouquets Fresh in Lahore Heat (Florist Care Guide)",
    excerpt: "Learn how to protect cut roses, lilies, and sunflowers from wilting in Lahore's extreme climate. Professional water changing, stem trimming, and floral food techniques.",
    date: "October 2026",
    readTime: "4 min read",
    tag: "Flower Care"
  },
  {
    slug: "anniversary-flower-guide-pakistan",
    title: "Best Anniversary Flowers by Year: 1st, 5th, 10th & 25th Milestones in Pakistan",
    excerpt: "Discover the symbolic meaning of anniversary blooms. How to choose between imported velvet roses, oriental lilies, and mixed pastels with midnight surprise delivery.",
    date: "October 2026",
    readTime: "5 min read",
    tag: "Occasions Guide"
  },
  {
    slug: "money-bouquet-designs-and-pricing-lahore",
    title: "Money Bouquets in Lahore: Denominations, Designs & Security Guide",
    excerpt: "Everything you need to know about ordering custom cash bouquets in Lahore. How banknotes are safely preserved, design trends, and pricing breakdowns.",
    date: "October 2026",
    readTime: "4 min read",
    tag: "Gifting Trends"
  }
];

export default function BlogIndexPage() {
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
        name: "Blog & Floral Guides",
        item: "https://lahorebouquet.com/blog",
      },
    ],
  };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-white/50 flex items-center gap-2">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#E11D48] font-semibold">Blog & Guides</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E11D48]/20 text-[#F43F5E] border border-[#E11D48]/40 text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5" />
          Master Florist Advice & Local Insights
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Lahore Floral Care & Gifting Guides
        </h1>

        <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-3xl">
          Written by professional florists at our MM Alam Road workshop. Discover practical advice on preserving cut flower freshness in Pakistan, etiquette for wedding and anniversary bouquets, and insider guides to Lahore's floristry culture.
        </p>
      </section>

      {/* Blog Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BLOG_POSTS.map((post, idx) => (
          <article key={idx} className="p-6 rounded-2xl bg-[#17171E] border border-white/10 flex flex-col justify-between space-y-4 hover:border-[#E11D48]/40 transition-colors">
            <div className="space-y-3">
              <span className="text-[11px] font-bold text-[#F43F5E] uppercase tracking-wider">{post.tag}</span>
              <h2 className="font-playfair text-lg font-bold text-white leading-snug">
                <Link href={`/blog/${post.slug}`} className="hover:text-[#E11D48] transition-colors">
                  {post.title}
                </Link>
              </h2>
              <p className="text-xs text-white/70 leading-relaxed">{post.excerpt}</p>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-white/50">
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
              <Link href={`/blog/${post.slug}`} className="text-[#E11D48] font-semibold flex items-center gap-1 hover:underline">
                Read Article <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
