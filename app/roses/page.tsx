import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../components/ProductCard";
import { Heart, Truck, Camera, MessageCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Rose Bouquets in Lahore | Red & White Roses Delivery",
  },
  description: "Fresh imported Dutch roses in Lahore. Single stems from Rs. 1,180, dozens, 24 and 50-rose bouquets. Photo on WhatsApp before delivery.",
  alternates: {
    canonical: "https://lahorebouquet.com/roses",
  },
  openGraph: {
    title: "Rose Bouquets in Lahore | Red & White Roses Delivery",
    description: "Fresh imported Dutch roses in Lahore. Single stems from Rs. 1,180, dozens, 24 and 50-rose bouquets. Photo on WhatsApp before delivery.",
    url: "https://lahorebouquet.com/roses",
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
  },
};

export default async function RosesPage() {
  const allProducts = await getSanityProducts();
  const roses = allProducts.filter(p => p.category === "Roses");

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
        name: "Bouquets",
        item: "https://lahorebouquet.com/bouquets",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Roses",
        item: "https://lahorebouquet.com/roses",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long do roses last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With fresh water and trimmed stems, most last around 5 to 7 days in Lahore's weather."
        }
      },
      {
        "@type": "Question",
        name: "Are these roses imported?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our premium bouquets use imported Dutch roses. The product page says clearly which flowers are in each bouquet."
        }
      },
      {
        "@type": "Question",
        name: "What do different rose colours mean?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Red means love and romance, pink means admiration and sweetness, white means purity and sympathy, yellow means friendship, and peach or orange means desire and enthusiasm."
        }
      },
      {
        "@type": "Question",
        name: "Which rose colour is best for my wife or girlfriend?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Red roses are the most romantic choice for a wife or girlfriend, symbolising deep love. Pink roses are a softer alternative for admiration and affection."
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

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/bouquets" className="hover:text-[#0B0B0B] transition-colors">Bouquets</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Roses</span>
      </nav>

      {/* Hero Category Banner (Section 5 Standard: Black bg, Gold accent, Burgundy CTA) */}
      <section className="bg-[#0B0B0B] p-8 sm:p-12 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-[#C6A15B] text-[#C6A15B]" />
            Imported Dutch Roses
          </span>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Rose Bouquets in Lahore
          </h1>

          <p className="text-[#F8F3EA]/85 text-xs sm:text-sm leading-relaxed font-light">
            Roses say what you cannot say out loud. We use imported Dutch roses for our main bouquets because the heads are bigger, the stems are longer, and they last longer in a vase once you trim them. A single rose in black wrapping is enough for some people. Others want 50.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#C6A15B]" /> Delivery in 2 to 5 hours</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before it leaves</span>
            <a 
              href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20rose%20bouquets."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#C6A15B] font-semibold hover:underline"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Which roses to pick & Care Tips */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-3">
          <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">Which roses to pick</h2>
          <ul className="space-y-2 text-xs text-[#2A2A2A]">
            <li><strong className="text-[#0B0B0B]">Red:</strong> love, anniversaries, proposals.</li>
            <li><strong className="text-[#0B0B0B]">White:</strong> apologies, new beginnings, quiet respect, weddings.</li>
            <li><strong className="text-[#0B0B0B]">Pink and blush:</strong> thank-yous, birthdays, Mother's Day.</li>
          </ul>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-3">
          <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">Care tip</h2>
          <p className="text-xs text-[#2A2A2A] leading-relaxed">
            Cut about 2 cm off the stems at an angle, use clean water, and change it every two days. Keep the vase away from direct sun and the AC vent.
          </p>
          <div className="pt-2 flex gap-3 text-xs">
            <Link href="/roses/red-roses" className="text-[#8B1E2D] hover:text-[#C6A15B] hover:underline font-semibold">
              Browse Red Roses →
            </Link>
            <Link href="/roses/white-roses" className="text-[#0B0B0B] hover:text-[#8B1E2D] hover:underline font-semibold">
              Browse White Roses →
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Category Switcher Tabs */}
      <section className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs">
        <Link href="/bouquets" className="px-4 py-2 rounded-full bg-white text-[#2A2A2A] hover:bg-[#F8F3EA] whitespace-nowrap border border-[#E5DED2]">
          All Bouquets
        </Link>
        <Link href="/roses" className="px-4 py-2 rounded-full bg-[#8B1E2D] text-white font-bold whitespace-nowrap shadow-md">
          Roses Collection ({roses.length})
        </Link>
        <Link href="/roses/red-roses" className="px-4 py-2 rounded-full bg-white text-[#2A2A2A] hover:bg-[#F8F3EA] whitespace-nowrap border border-[#E5DED2]">
          Red Roses
        </Link>
        <Link href="/roses/white-roses" className="px-4 py-2 rounded-full bg-white text-[#2A2A2A] hover:bg-[#F8F3EA] whitespace-nowrap border border-[#E5DED2]">
          White Roses
        </Link>
        <Link href="/sunflowers" className="px-4 py-2 rounded-full bg-white text-[#2A2A2A] hover:bg-[#F8F3EA] whitespace-nowrap border border-[#E5DED2]">
          Sunflowers
        </Link>
        <Link href="/money-bouquets" className="px-4 py-2 rounded-full bg-white text-[#2A2A2A] hover:bg-[#F8F3EA] whitespace-nowrap border border-[#E5DED2]">
          Money Bouquets
        </Link>
      </section>

      {/* Product Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Showing {roses.length} premium rose bouquets in Lahore</span>
          <span className="text-[#8B1E2D] font-semibold">Same-day express delivery active</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {roses.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Rose Colour Meanings Guide */}
      <section className="bg-white p-8 sm:p-10 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-6">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">What Do Rose Colours Mean?</h2>
        <p className="text-xs text-[#2A2A2A] leading-relaxed">
          Choosing the right colour says as much as the flowers themselves. Here is the classic
          florist's guide our Lahore customers follow:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-xs leading-relaxed">
          <div className="p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2] space-y-1">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Red Roses</h3>
            <p>Love, romance and deep passion — the classic choice for a wife, girlfriend or Valentine's Day.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2] space-y-1">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Pink Roses</h3>
            <p>Admiration, sweetness and gratitude — perfect for mothers, friends and new relationships.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2] space-y-1">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">White Roses</h3>
            <p>Purity, sympathy and remembrance — suited for weddings, condolences and get-well wishes.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2] space-y-1">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Yellow Roses</h3>
            <p>Friendship and joy — a cheerful gift for friends, colleagues and celebrations.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2] space-y-1">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Peach & Orange Roses</h3>
            <p>Desire, enthusiasm and fascination — a bold, modern romantic gesture.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2] space-y-1">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Imported vs Local</h3>
            <p>Imported Dutch roses are larger, longer-lasting and cost PKR 450–650 per stem; fresh local roses cost PKR 40–70 per stem.</p>
          </div>
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
            <h3 className="font-semibold text-[#0B0B0B] text-sm">How long do roses last?</h3>
            <p>With fresh water and trimmed stems, most last around 5 to 7 days in Lahore's weather.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Are these roses imported?</h3>
            <p>Our premium bouquets use imported Dutch roses. The product page says clearly which flowers are in each bouquet.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">What do different rose colours mean?</h3>
            <p>Red means love and romance, pink means admiration and sweetness, white means purity and sympathy, yellow means friendship, and peach or orange means desire and enthusiasm.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Which rose colour is best for my wife or girlfriend?</h3>
            <p>Red roses are the most romantic choice for a wife or girlfriend, symbolising deep love. Pink roses are a softer alternative for admiration and affection.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
