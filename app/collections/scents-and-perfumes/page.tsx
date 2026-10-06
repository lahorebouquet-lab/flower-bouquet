import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../../components/ProductCard";
import { Sparkles, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import { SITE_URL, itemListSchema } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Luxury Scents, Perfumes & Flower Gifts in Lahore",
  },
  description: "Pair fresh flower bouquets with imported perfumes, authentic Arabian oud, pure rose attar & scented candles in Lahore. Same-day & midnight gift delivery.",
  alternates: {
    canonical: `${SITE_URL}/collections/scents-and-perfumes`,
  },
  openGraph: {
    title: "Luxury Scents, Perfumes & Flower Gifts in Lahore",
    description: "Pair fresh flower bouquets with imported perfumes, authentic Arabian oud, pure rose attar & scented candles in Lahore. Same-day & midnight gift delivery.",
    url: `${SITE_URL}/collections/scents-and-perfumes`,
  }
};

export const FRAGRANCE_ITEMS = [
  {
    name: "Royal Arabian Oud & Velvet Red Roses Hamper",
    price: 6800,
    desc: "A luxury matte black gift box featuring 12 imported Dutch red roses paired with 50ml rich woody Arabian Oud perfume and handwritten wax-sealed greeting card.",
    tag: "Bestseller Luxury Combo"
  },
  {
    name: "Designer Floral Eau De Parfum & Pink Lily Bouquet",
    price: 7500,
    desc: "Delicate feminine eau de parfum with notes of jasmine, peony, and vanilla, presented alongside a hand-tied pastel bouquet of fresh oriental lilies and baby's breath.",
    tag: "Anniversary & Birthday Favorite"
  },
  {
    name: "French Vanilla & Rose Scented Botanical Candle Set",
    price: 3200,
    desc: "Hand-poured pure soy wax botanical candle infused with French vanilla and damask rose essential oils, packaged with a 6-rose mini bouquet.",
    tag: "Aromatherapy Keepsake"
  },
  {
    name: "Pure Gulab Attar (Rooh-e-Gulab) & Fresh Motia Gajray Hamper",
    price: 2400,
    desc: "Traditional non-alcoholic pure distilled rose attar crystal flacon accompanied by two handmade fresh motia gajray in a velvet presentation box.",
    tag: "Nikah & Eid Special"
  }
];

export default async function ScentsAndPerfumesPage() {
  const allProducts = await getSanityProducts();
  const giftProducts = allProducts.filter(p => p.category === "Gifts & Cakes" || p.category === "Roses").slice(0, 4);

  const itemListJsonLd = itemListSchema(giftProducts, `${SITE_URL}/collections/scents-and-perfumes`, "Scents & Perfumes in Lahore");

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
        name: "Collections",
        item: `${SITE_URL}/collections/bouquets`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Scents & Perfumes",
        item: `${SITE_URL}/collections/scents-and-perfumes`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I request a specific branded perfume to be delivered with flowers?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Our Lahore concierge team can source your requested designer perfume (such as J., Khaadi, Chanel, Dior, or Versace) from authorized retail counters and pair it with fresh flowers.",
        },
      },
      {
        "@type": "Question",
        name: "Do you deliver perfume and flower gift sets at midnight?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our midnight 12:00 AM delivery service operates across all Lahore areas for birthdays and anniversaries with photo proof sent on WhatsApp before dispatch.",
        },
      },
    ],
  };

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
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
        <Link href="/collections/gifts-cakes" className="hover:text-[#0B0B0B] transition-colors">Gifts & Cakes</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Scents & Perfumes</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
          Aromatic Gift Combos • Designer Perfumes & Pure Oud
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Luxury Scents, Perfumes & Flower Gift Sets in Lahore
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Create an unforgettable sensory experience by pairing the visual majesty of fresh imported flowers with luxurious fragrances. From pure distilled Rooh-e-Gulab attars and rich Arabian Oud to designer Eau De Parfums and hand-poured botanical scented candles, our florists in Gulberg hand-assemble bespoke gift hampers with same-day and midnight delivery across Lahore.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#8B1E2D]" /> Same-Day 2–5h & Midnight Delivery</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#C6A15B]" /> 100% Authentic Fragrance Guarantee</span>
          <a 
            href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20a%20perfume%20and%20flower%20gift%20combo%20in%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#8B1E2D] font-semibold hover:text-[#C6A15B]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Customize Perfume Combo on WhatsApp
          </a>
        </div>
      </section>

      {/* Perfume Hampers Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {FRAGRANCE_ITEMS.map((item, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] space-y-3 hover:border-[#C6A15B] transition-colors shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold text-[#8B1E2D] uppercase tracking-wider">{item.tag}</span>
                <h3 className="font-playfair text-xl font-bold text-[#0B0B0B] mt-1">{item.name}</h3>
              </div>
              <span className="text-base font-bold text-[#8B1E2D] whitespace-nowrap bg-[#8B1E2D]/10 px-3 py-1 rounded-xl border border-[#8B1E2D]/20">
                Rs. {item.price.toLocaleString()} PKR
              </span>
            </div>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">{item.desc}</p>
            <a 
              href={`https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20want%20to%20order:%20${encodeURIComponent(item.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#8B1E2D] hover:text-[#C6A15B] font-semibold pt-2 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order this gift set on WhatsApp →
            </a>
          </div>
        ))}
      </section>

      {/* Pairing Bouquets */}
      <section className="space-y-4 pt-6 border-t border-[#E5DED2]">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Popular bouquets to pair with perfumes</span>
          <Link href="/collections/bouquets" className="text-[#8B1E2D] hover:underline font-semibold">
            View All Bouquets →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {giftProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
