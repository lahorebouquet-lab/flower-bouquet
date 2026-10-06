import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, Calendar, ArrowRight, Clock } from "lucide-react";
import { getSanityBlogPosts } from "@/sanity/lib/fetch";
import { SITE_URL } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Care & Gifting Guides Lahore | Florist Blog",
  },
  description: "Expert floral care tips, occasion gifting guides, and Lahore floristry news by master florists at Lahore Bouquet.",
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: "Flower Care & Gifting Guides Lahore | Florist Blog",
    description: "Expert floral care tips, occasion gifting guides, and Lahore floristry news by master florists at Lahore Bouquet.",
    url: `${SITE_URL}/blog`,
  }
};

export const BLOG_POSTS = [
  {
    slug: "how-to-keep-flowers-fresh-in-lahore",
    title: "How to Keep Flower Bouquets Fresh in Lahore Heat (Florist Care Guide)",
    excerpt: "Learn how to protect cut roses, lilies, and sunflowers from wilting in Lahore's extreme climate. Professional water changing, stem trimming, and floral food techniques.",
    date: "October 2026",
    readTime: "4 min read",
    tag: "Flower Care",
    image: "/images/hero-luxury-bouquet.jpg",
  },
  {
    slug: "anniversary-flower-guide-pakistan",
    title: "Best Anniversary Flowers by Year: 1st, 5th, 10th & 25th Milestones in Pakistan",
    excerpt: "Discover the symbolic meaning of anniversary blooms. How to choose between imported velvet roses, oriental lilies, and mixed pastels with midnight surprise delivery.",
    date: "October 2026",
    readTime: "5 min read",
    tag: "Occasions Guide",
    image: "/images/lahoreblooms/crimson_blush.webp",
  },
  {
    slug: "money-bouquet-designs-and-pricing-lahore",
    title: "Money Bouquets in Lahore: Denominations, Designs & Security Guide",
    excerpt: "Everything you need to know about ordering custom cash bouquets in Lahore. How banknotes are safely preserved, design trends, and pricing breakdowns.",
    date: "October 2026",
    readTime: "4 min read",
    tag: "Gifting Trends",
    image: "/images/categories/money_bouquets.webp",
  },
  {
    slug: "flower-prices-lahore-2026",
    title: "Flower Prices in Lahore 2026: Rose, Sunflower & Money Bouquet Price Guide",
    excerpt: "What bouquets really cost in Lahore right now. Real 2026 price table: roses from Rs. 1,180, sunflowers, lilies, money bouquets and wedding décor packages.",
    date: "October 2026",
    readTime: "5 min read",
    tag: "Price Guide",
    image: "/images/hero-luxury-bouquet.jpg",
  },
  {
    slug: "send-flowers-to-lahore-from-abroad",
    title: "How to Send Flowers to Lahore from UK, USA & UAE (2026 Guide)",
    excerpt: "Overseas Pakistani? Order on WhatsApp, pay by bank transfer, and get same-day 2–5 hour delivery across Lahore with photo confirmation.",
    date: "October 2026",
    readTime: "4 min read",
    tag: "Overseas Guide",
    image: "/images/hero-luxury-bouquet.jpg",
  },
  {
    slug: "midnight-flower-cake-delivery-lahore",
    title: "Midnight Flower & Cake Delivery in Lahore — How It Works",
    excerpt: "Surprise them at exactly 12 AM. Midnight slots, cake combos, booking cut-offs and the Lahore areas we cover every night.",
    date: "October 2026",
    readTime: "4 min read",
    tag: "Delivery Guide",
    image: "/images/categories/money_bouquets.webp",
  },
  {
    slug: "best-flowers-birthday-anniversary-get-well-pakistan",
    title: "Best Flowers for Birthday, Anniversary & Get-Well in Pakistan",
    excerpt: "Which blooms for which occasion? Florist guide with meanings, prices and same-day Lahore delivery for birthdays, anniversaries and get-well wishes.",
    date: "October 2026",
    readTime: "5 min read",
    tag: "Occasions Guide",
    image: "/images/lahoreblooms/crimson_blush.webp",
  },
  {
    slug: "send-flowers-to-lahore-from-uk",
    title: "How to Send Flowers to Lahore from the UK (2026 Guide)",
    excerpt: "UK Pakistani? Order by 12 noon UK time for same-day Lahore delivery. Pay by UK card, approve the bouquet photo on WhatsApp.",
    date: "October 2026",
    readTime: "5 min read",
    tag: "Overseas Guide",
    image: "/images/hero-luxury-bouquet.jpg",
  },
  {
    slug: "send-flowers-to-lahore-from-usa",
    title: "How to Send Flowers to Lahore from the USA (2026 Guide)",
    excerpt: "US evening is Lahore morning — order at night in New York or California for next-morning Lahore delivery. Pay by US card.",
    date: "October 2026",
    readTime: "5 min read",
    tag: "Overseas Guide",
    image: "/images/hero-luxury-bouquet.jpg",
  },
  {
    slug: "send-flowers-to-lahore-from-uae",
    title: "How to Send Flowers to Lahore from the UAE (2026 Guide)",
    excerpt: "Only 1 hour behind Pakistan — order by 3 PM UAE time from Dubai, Sharjah or Abu Dhabi for same-day Lahore delivery.",
    date: "October 2026",
    readTime: "5 min read",
    tag: "Overseas Guide",
    image: "/images/hero-luxury-bouquet.jpg",
  },
  {
    slug: "nikkah-flowers-guide-lahore",
    title: "Nikkah Flowers in Lahore: Bridal Bouquet, Gajray & Stage Decor (2026)",
    excerpt: "Bridal bouquets from Rs. 3,500, gajray from Rs. 1,200, stage decor packages — complete nikkah flower planning guide.",
    date: "October 2026",
    readTime: "6 min read",
    tag: "Wedding Guide",
    image: "/images/hero-luxury-bouquet.jpg",
  },
  {
    slug: "rose-color-meanings-pakistan",
    title: "Rose Color Meanings: What Each Rose Says in Pakistan",
    excerpt: "Red for love, white for purity, pink for admiration — which rose color for which occasion, with prices.",
    date: "October 2026",
    readTime: "5 min read",
    tag: "Flower Meanings",
    image: "/images/hero-luxury-bouquet.jpg",
  },
  {
    slug: "gajra-prices-lahore-2026",
    title: "Gajra Prices in Lahore (2026): Fresh Gajray & Floral Jewellery Rates",
    excerpt: "Gajra pairs Rs. 1,200–1,800, bridal sets from Rs. 2,500 — real 2026 rates and ordering tips.",
    date: "October 2026",
    readTime: "4 min read",
    tag: "Price Guide",
    image: "/images/hero-luxury-bouquet.jpg",
  },
  {
    slug: "graduation-flowers-lahore",
    title: "Graduation Flowers in Lahore: Convocation Bouquet Guide (2026)",
    excerpt: "Sunflower bouquets Rs. 2,400–3,800, delivered to LUMS, Punjab University & every Lahore campus.",
    date: "October 2026",
    readTime: "4 min read",
    tag: "Occasions Guide",
    image: "/images/hero-luxury-bouquet.jpg",
  },
  {
    slug: "valentines-day-flowers-lahore",
    title: "Valentine's Day Flowers in Lahore: Roses, Prices & Midnight Delivery (2026)",
    excerpt: "Red roses from Rs. 1,180 — 14 Feb slots book out days early. Same-day & midnight Valentine's delivery across Lahore.",
    date: "October 2026",
    readTime: "5 min read",
    tag: "Occasions Guide",
    image: "/images/hero-luxury-bouquet.jpg",
  },
  {
    slug: "mothers-day-flowers-lahore",
    title: "Mother's Day Flowers in Lahore: Best Bouquets for Ami (2026)",
    excerpt: "Pink roses, lilies & mixed pastels for Mother's Day — same-day Lahore delivery with a handwritten card.",
    date: "October 2026",
    readTime: "4 min read",
    tag: "Occasions Guide",
    image: "/images/hero-luxury-bouquet.jpg",
  },
  {
    slug: "eid-flowers-gifts-lahore",
    title: "Eid Flowers & Gifts in Lahore: Eid-ul-Fitr & Eid-ul-Adha Guide (2026)",
    excerpt: "Bouquets, sweet boxes & money bouquets for Eid — order before the chand raat rush, delivered across Lahore.",
    date: "October 2026",
    readTime: "5 min read",
    tag: "Occasions Guide",
    image: "/images/hero-luxury-bouquet.jpg",
  },
  {
    slug: "sympathy-flowers-lahore",
    title: "Sympathy & Condolence Flowers in Lahore: A Respectful Guide",
    excerpt: "White lilies, roses & condolence arrangements — tasteful same-day delivery across Lahore, handled with care.",
    date: "October 2026",
    readTime: "4 min read",
    tag: "Occasions Guide",
    image: "/images/hero-luxury-bouquet.jpg",
  },
  {
    slug: "birthday-flower-delivery-lahore",
    title: "Birthday Flower Delivery in Lahore: Surprise Ideas (2026)",
    excerpt: "Birthday bouquets from Rs. 1,180 with midnight surprise delivery, cakes & teddy combos across Lahore.",
    date: "October 2026",
    readTime: "5 min read",
    tag: "Occasions Guide",
    image: "/images/hero-luxury-bouquet.jpg",
  },
  {
    slug: "proposal-engagement-flowers-lahore",
    title: "Proposal & Engagement Flowers in Lahore: Make Them Say Yes (2026)",
    excerpt: "100-red-rose proposals, ring-box bouquets & romantic setups — proposal flower planning guide for Lahore.",
    date: "October 2026",
    readTime: "5 min read",
    tag: "Occasions Guide",
    image: "/images/hero-luxury-bouquet.jpg",
  },
  {
    slug: "rose-prices-lahore-2026",
    title: "Rose Prices in Lahore (2026): Per-Stem & Bouquet Rate Guide",
    excerpt: "Single rose Rs. 100–500, 12-rose bouquet from Rs. 1,800 — real 2026 Lahore rose price table, local vs imported.",
    date: "October 2026",
    readTime: "5 min read",
    tag: "Price Guide",
    image: "/images/hero-luxury-bouquet.jpg",
  },
  {
    slug: "wedding-car-decoration-price-lahore",
    title: "Wedding Car Decoration Prices in Lahore (2026)",
    excerpt: "Fresh flower car decor Rs. 8,000–25,000, artificial from Rs. 3,500 — 2026 rates, booking tips & theme matching.",
    date: "October 2026",
    readTime: "5 min read",
    tag: "Price Guide",
    image: "/images/hero-luxury-bouquet.jpg",
  },
];

export default async function BlogIndexPage() {
  const sanityPosts = await getSanityBlogPosts();
  // Merge: show Sanity CMS posts first, then static guides (dedupe by slug)
  const sanitySlugs = new Set((sanityPosts || []).map((p: { slug: string }) => p.slug));
  const posts = [...(sanityPosts || []), ...BLOG_POSTS.filter((p) => !sanitySlugs.has(p.slug))];

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
        name: "Blog & Floral Guides",
        item: `${SITE_URL}/blog`,
      },
    ],
  };

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Blog & Guides</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <BookOpen className="w-3.5 h-3.5 text-[#C6A15B]" />
          Master Florist Advice & Local Insights
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Lahore Floral Care & Gifting Guides
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Written by professional florists in Lahore. Discover practical advice on preserving cut flower freshness in Pakistan, etiquette for wedding and anniversary bouquets, and insider guides to Lahore's floristry culture.
        </p>
      </section>

      {/* Blog Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {posts.map((post, idx) => (
          <article 
            key={post.slug || idx} 
            className="group rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] flex flex-col justify-between overflow-hidden hover:border-[#C6A15B] transition-all shadow-sm hover:shadow-md"
          >
            {post.image && (
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#F8F3EA]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider">
                  {post.tag}
                </div>
              </div>
            )}

            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
              <div className="space-y-2.5">
                <h2 className="font-playfair text-lg font-bold text-[#0B0B0B] leading-snug group-hover:text-[#8B1E2D] transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-xs text-[#2A2A2A] leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E5DED2] flex items-center justify-between text-[11px] text-[#777777]">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {post.date || "Recent"}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.readTime || "4 min"}
                </span>
                <Link 
                  href={`/blog/${post.slug}`} 
                  className="text-[#8B1E2D] hover:text-[#C6A15B] font-semibold flex items-center gap-1 transition-colors"
                >
                  Read <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
