import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../components/ProductCard";
import { Sparkles, Truck, Camera, MessageCircle, HelpCircle, Heart, Droplets, CheckCircle2 } from "lucide-react";
import { ALL_PRODUCTS } from "../data/products";
import { SITE_URL, itemListSchema } from "@/lib/business";

export const BASE_METADATA: Metadata = {
  title: {
    absolute: "Flower Bouquets in Lahore | Fresh, Hand-Tied, Delivered",
  },
  description: "Browse fresh flower bouquets in Lahore: roses, sunflowers, tulips, lilies and mixed bouquets. Small to large sizes, with delivery across the city.",
  alternates: {
    canonical: `${SITE_URL}/bouquets`,
  },
  keywords: [
    "flower bouquet",
    "bouquet",
    "bouquet of flowers",
    "birthday bouquet",
    "small flower bouquet",
    "gift bouquet",
    "huge bouquet of flowers",
    "flower bouquet lahore",
    "flower bookey",
    "flower bokay"
  ],
  openGraph: {
    title: "Flower Bouquets in Lahore | Fresh, Hand-Tied, Delivered",
    description: "Browse fresh flower bouquets in Lahore: roses, sunflowers, tulips, lilies and mixed bouquets. Small to large sizes, with delivery across the city.",
    url: `${SITE_URL}/bouquets`,
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Flower Bouquets in Lahore | Fresh, Hand-Tied, Delivered",
      },
    ],
  },
};

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}): Promise<Metadata> {
  const params = await searchParams;
  const query = (params.q || "").trim();
  // Search result pages should not be indexed — canonical page is /bouquets
  if (query) {
    return {
      ...BASE_METADATA,
      robots: { index: false, follow: true },
      alternates: { canonical: `${SITE_URL}/bouquets` },
    };
  }
  return BASE_METADATA;
}

export default async function BouquetsPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const sanityProducts = await getSanityProducts();
  const allProducts = sanityProducts.length > 0 ? sanityProducts : ALL_PRODUCTS;
  const params = await searchParams;
  const query = (params.q || "").trim().toLowerCase();

  let bouquets = allProducts.filter(p =>
    p.category === "Bouquets" ||
    p.category === "Roses" ||
    p.category === "Sunflowers" ||
    p.category === "Crochet" ||
    p.category === "Dried"
  );

  // Server-side search (matches the WebSite SearchAction schema target)
  if (query) {
    bouquets = bouquets.filter(p =>
      p.title.toLowerCase().includes(query) ||
      p.category?.toLowerCase().includes(query) ||
      p.desc?.toLowerCase().includes(query)
    );
  }

  const itemListJsonLd = itemListSchema(bouquets, `${SITE_URL}/bouquets`, "Flower Bouquets in Lahore");

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
        name: "Flower Bouquets",
        item: `${SITE_URL}/bouquets`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is the difference between a bouquet and a flower box?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A bouquet is a hand-tied bunch wrapped in artisanal paper, kraft, or satin ribbons. A flower box arranges the stems in a structured container with wet floral foam, which makes it self-standing and effortless to display without needing a vase."
        }
      },
      {
        "@type": "Question",
        name: "Can I customise a bouquet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Tell us your preferred colours, flower types (roses, sunflowers, lilies), and target budget. Our florist will build a custom bouquet tailored to you. Message us on WhatsApp at 0310-4225974."
        }
      },
      {
        "@type": "Question",
        name: "Which flowers are best for a birthday?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sunflowers, gerberas, and bright seasonal mixed flowers work best for cheerful celebrations. For someone extra special, red or pink Dutch roses are always a classic pick."
        }
      },
      {
        "@type": "Question",
        name: "Do you sell flower bookey or bokay?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Many customers search for bookey, bukey, or bokay. Whatever spelling you use, we understand and craft fresh hand-tied flower bouquets delivered across Lahore."
        }
      }
    ]
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-14 text-[#2A2A2A] bg-[#F8F3EA]">
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
        <span className="text-[#8B1E2D] font-semibold">Flower Bouquets</span>
      </nav>

      {/* Hero Category Banner */}
      <section className="bg-[#0B0B0B] p-8 sm:p-14 rounded-3xl border border-[#C6A15B]/30 shadow-2xl relative overflow-hidden text-white">
        <div className="max-w-3xl relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#C6A15B] border border-[#C6A15B]/40 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Hand-Tied to Order in Lahore
          </div>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Flower Bouquets in Lahore
          </h1>

          {/* AEO / GEO Direct Answer */}
          <p className="text-[#F8F3EA]/90 text-sm sm:text-base leading-relaxed font-light">
            A flower bouquet is the easiest way to say congratulations, sorry, I love you, or get well soon without needing the right words. Here you will find fresh bouquets made by hand in Lahore, in sizes from a small gift bunch to a big statement arrangement that fills a room. Every stem is inspected daily and delivered in <strong>2 to 5 hours</strong> with a photo and video on WhatsApp before dispatch.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#BDBDBD]">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#C6A15B]" /> Delivery in 2 to 5 hours</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#25D366]" /> Photo on WhatsApp before dispatch</span>
            <a 
              href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20a%20bouquet%20in%20Lahore."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#C6A15B] hover:text-white font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order on WhatsApp (0310-4225974)
            </a>
          </div>
        </div>
      </section>

      {/* Quick Category Switcher Tabs */}
      <section className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
        <Link href="/bouquets" className="px-4.5 py-2 rounded-full bg-[#8B1E2D] text-white font-bold whitespace-nowrap shadow-xs">
          All Bouquets ({bouquets.length})
        </Link>
        <Link href="/roses" className="px-4.5 py-2 rounded-full bg-white text-[#2A2A2A] hover:text-[#0B0B0B] border border-[#E5DED2] hover:border-[#C6A15B] whitespace-nowrap transition-colors">
          Roses
        </Link>
        <Link href="/roses/red-roses" className="px-4.5 py-2 rounded-full bg-white text-[#2A2A2A] hover:text-[#0B0B0B] border border-[#E5DED2] hover:border-[#C6A15B] whitespace-nowrap transition-colors">
          Red Roses
        </Link>
        <Link href="/roses/white-roses" className="px-4.5 py-2 rounded-full bg-white text-[#2A2A2A] hover:text-[#0B0B0B] border border-[#E5DED2] hover:border-[#C6A15B] whitespace-nowrap transition-colors">
          White Roses
        </Link>
        <Link href="/sunflowers" className="px-4.5 py-2 rounded-full bg-white text-[#2A2A2A] hover:text-[#0B0B0B] border border-[#E5DED2] hover:border-[#C6A15B] whitespace-nowrap transition-colors">
          Sunflowers
        </Link>
        <Link href="/chocolate-bouquets-lahore" className="px-4.5 py-2 rounded-full bg-white text-[#2A2A2A] hover:text-[#0B0B0B] border border-[#E5DED2] hover:border-[#C6A15B] whitespace-nowrap transition-colors">
          Chocolates
        </Link>
        <Link href="/money-bouquets" className="px-4.5 py-2 rounded-full bg-white text-[#2A2A2A] hover:text-[#0B0B0B] border border-[#E5DED2] hover:border-[#C6A15B] whitespace-nowrap transition-colors">
          Money Bouquets
        </Link>
        <Link href="/crochet-bouquets" className="px-4.5 py-2 rounded-full bg-white text-[#2A2A2A] hover:text-[#0B0B0B] border border-[#E5DED2] hover:border-[#C6A15B] whitespace-nowrap transition-colors">
          Crochet
        </Link>
        <Link href="/dried-flowers" className="px-4.5 py-2 rounded-full bg-white text-[#2A2A2A] hover:text-[#0B0B0B] border border-[#E5DED2] hover:border-[#C6A15B] whitespace-nowrap transition-colors">
          Dried Flora
        </Link>
      </section>

      {/* Product Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#555555]">
          <span>
            {query ? (
              <>Search results for <strong className="text-[#0B0B0B]">“{(await searchParams).q?.trim()}”</strong> — {bouquets.length} found</>
            ) : (
              <>Showing {bouquets.length} hand-tied bouquets in Lahore</>
            )}
          </span>
          <span className="text-[#8B1E2D] font-semibold">Same-day express delivery active</span>
        </div>

        {query && bouquets.length === 0 && (
          <div className="bg-white p-10 rounded-2xl border border-[#E5DED2] text-center">
            <p className="text-sm font-semibold text-[#0B0B0B]">No bouquets match your search.</p>
            <p className="text-xs text-[#636363] mt-1">Try “rose”, “sunflower”, or “chocolate”.</p>
          </div>
        )}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {bouquets.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* How to Choose a Bouquet Guide */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0B0B0B]">
            How to Choose the Perfect Flower Bouquet
          </h2>
          <p className="text-xs sm:text-sm text-[#555555]">
            Match the floral arrangement to your occasion, recipient, and message:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-xs text-[#2A2A2A]">
          <div className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B1E2D]">Birthdays</span>
            <h3 className="font-semibold text-sm text-[#0B0B0B]">Bright Mixed & Sunflowers</h3>
            <p className="text-[#666666] leading-relaxed">Vivid colours matter more than the flower type. Sunflowers and seasonal mixes bring instant energy.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B1E2D]">Anniversary & Romance</span>
            <h3 className="font-semibold text-sm text-[#0B0B0B]">Red & Pink Dutch Roses</h3>
            <p className="text-[#666666] leading-relaxed">A dozen roses is a classic romantic gesture. A 36 or 50-rose bunch makes an unforgettable bold statement.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B1E2D]">Hospital Visits</span>
            <h3 className="font-semibold text-sm text-[#0B0B0B]">Pastel & Scentless Blooms</h3>
            <p className="text-[#666666] leading-relaxed">Choose soft pastel petals with light or no fragrance, compact enough for a bedside recovery table.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B1E2D]">Thank You & Apology</span>
            <h3 className="font-semibold text-sm text-[#0B0B0B]">Small Hand-Tied Bunch</h3>
            <p className="text-[#666666] leading-relaxed">A refined small bouquet with eucalyptus or baby&apos;s breath is plenty to make someone feel truly appreciated.</p>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#8B1E2D]">Milestone Events</span>
            <h3 className="font-semibold text-sm text-[#0B0B0B]">Large Bouquet or Box</h3>
            <p className="text-[#666666] leading-relaxed">Go for a large statement arrangement, acrylic flower box, or a combined cake and fairy-lights hamper.</p>
          </div>
        </div>
      </section>

      {/* Bouquet Sizes Table */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0B0B0B]">
            Bouquet Sizes at Lahore Bouquet
          </h2>
          <p className="text-xs sm:text-sm text-[#555555]">
            Understanding stem counts and dimensions helps you pick the right fit for the moment:
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[rgba(198,161,91,0.25)] bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm text-[#2A2A2A]">
            <thead className="bg-[#0B0B0B] text-white uppercase text-[11px] tracking-wider font-semibold">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Bouquet Size</th>
                <th className="py-3.5 px-4 sm:px-6">Rough Stem Count</th>
                <th className="py-3.5 px-4 sm:px-6">Starting Price</th>
                <th className="py-3.5 px-4 sm:px-6">Recommended For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5DED2]">
              <tr className="hover:bg-[#F8F3EA]/60 transition-colors">
                <td className="py-4 px-4 sm:px-6 font-semibold text-[#0B0B0B]">Small Bouquet</td>
                <td className="py-4 px-4 sm:px-6 text-[#666666]">6 to 10 stems</td>
                <td className="py-4 px-4 sm:px-6 text-[#8B1E2D] font-bold">Rs. 1,180 – 1,900</td>
                <td className="py-4 px-4 sm:px-6 text-[#666666]">Thank-you, office desk, quick surprise gift</td>
              </tr>
              <tr className="hover:bg-[#F8F3EA]/60 transition-colors">
                <td className="py-4 px-4 sm:px-6 font-semibold text-[#0B0B0B]">Medium Bouquet</td>
                <td className="py-4 px-4 sm:px-6 text-[#666666]">12 to 20 stems</td>
                <td className="py-4 px-4 sm:px-6 text-[#8B1E2D] font-bold">Rs. 2,600 – 3,800</td>
                <td className="py-4 px-4 sm:px-6 text-[#666666]">Birthdays, anniversaries, graduations</td>
              </tr>
              <tr className="hover:bg-[#F8F3EA]/60 transition-colors">
                <td className="py-4 px-4 sm:px-6 font-semibold text-[#0B0B0B]">Large Bouquet</td>
                <td className="py-4 px-4 sm:px-6 text-[#666666]">25 to 50+ stems</td>
                <td className="py-4 px-4 sm:px-6 text-[#8B1E2D] font-bold">Rs. 5,500 – 7,499+</td>
                <td className="py-4 px-4 sm:px-6 text-[#666666]">Proposals, grand anniversaries, weddings</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Fresh Flowers & Care Instructions */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] space-y-3">
          <div className="flex items-center gap-2 text-[#8B1E2D]">
            <Sparkles className="w-5 h-5" />
            <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">Fresh Flowers, Always</h2>
          </div>
          <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
            We don&apos;t pre-make bouquets and let them sit in refrigerated coolers. Your order is arranged on the day it goes out, wrapped in breathable paper or fabric ribbons, and dispatched with hydration care so stems arrive as vibrant as you saw online.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] space-y-3">
          <div className="flex items-center gap-2 text-[#8B1E2D]">
            <Droplets className="w-5 h-5" />
            <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">How to Keep Your Bouquet Fresh</h2>
          </div>
          <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
            Trim stems at a 45-degree angle, place them in clean cold water, and keep the vase away from direct sunlight and air-conditioner drafts. Change the water every 1 to 2 days. Fresh roses typically last 4 to 6 days with this simple routine.
          </p>
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
            <h3 className="font-semibold text-[#0B0B0B] text-sm">What is the difference between a bouquet and a flower box?</h3>
            <p>A bouquet is a hand-tied bunch wrapped in paper or fabric. A flower box arranges stems in an acrylic or velvet box with floral foam, making it self-supporting without a vase.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Can I customise a bouquet?</h3>
            <p>Yes. Share your colour preferences, flower types, and budget on WhatsApp (0310-4225974) and our florists will create a bespoke arrangement.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Which flowers are best for a birthday?</h3>
            <p>Sunflowers, gerberas, and mixed seasonal blooms are cheerful and energetic. For romantic birthdays, Dutch red roses are always recommended.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Do you sell flower bookey or bokay?</h3>
            <p>Yes! Customers frequently spell it bookey, bukey, or bokay. We know exactly what you mean, and we make the freshest hand-tied bouquets in Lahore.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
