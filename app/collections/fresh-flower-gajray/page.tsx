import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ALL_PRODUCTS } from "../../data/products";
import ProductCard from "../../components/ProductCard";
import { Sparkles, Truck, Camera, MessageCircle, Heart, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Fresh Flower Gajray & Mehndi Jewellery in Lahore | Handcrafted",
  },
  description: "Order fresh motia & red rose gajray, floral garlands (mala/haar), and handmade bridal mehndi jewellery in Lahore. Handcrafted daily with same-day delivery.",
  alternates: {
    canonical: "https://lahorebouquet.com/collections/fresh-flower-gajray",
  },
  openGraph: {
    title: "Fresh Flower Gajray & Mehndi Jewellery in Lahore | Handcrafted",
    description: "Order fresh motia & red rose gajray, floral garlands (mala/haar), and handmade bridal mehndi jewellery in Lahore. Handcrafted daily with same-day delivery.",
    url: "https://lahorebouquet.com/collections/fresh-flower-gajray",
  }
};

export const GAJRAY_ITEMS = [
  {
    name: "Classic Fresh Motia Gajray (Pair of 2)",
    price: 650,
    desc: "Fragrant night-blooming Arabian jasmine (motia) hand-strung on soft cotton thread with golden gota border.",
    tags: "Bestseller • Mehndi Must-Have"
  },
  {
    name: "Red Rose & Baby's Breath Wrist Cuffs",
    price: 1200,
    desc: "Petite crimson spray rosebuds woven with delicate gypsophila for brides, bridesmaids, and sisters.",
    tags: "Bridal Special"
  },
  {
    name: "Full Mehndi Floral Jewellery Set",
    price: 3500,
    desc: "Includes fresh flower matha patti, earrings (jhumkay), finger ring attached gajray, and neckline garland.",
    tags: "Complete Bridal Set"
  },
  {
    name: "Royal Nikah & Barat Rose Haar (Pair)",
    price: 2800,
    desc: "Traditional ceremonial red rose garlands paired with pearl bead accents for bride and groom.",
    tags: "Nikah & Barat"
  }
];

export default function FreshFlowerGajrayPage() {
  const weddingProducts = ALL_PRODUCTS.filter(p => p.category === "Wedding Décor" || p.category === "Roses").slice(0, 4);

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
        name: "Collections",
        item: "https://lahorebouquet.com/collections/bouquets",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Fresh Flower Gajray & Mehndi Jewellery",
        item: "https://lahorebouquet.com/collections/fresh-flower-gajray",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How fresh do flower gajray stay during wedding events?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We weave all gajray on the day of delivery and pack them in insulated cooling boxes with moist floral wraps. They stay crisp, fragrant, and fresh throughout your evening function.",
        },
      },
      {
        "@type": "Question",
        name: "Can I customize the colors of my mehndi floral jewellery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! You can choose your color palette (yellow marigold, blush pink roses, white motia, or purple lisianthus) to match your wedding outfit via WhatsApp.",
        },
      },
    ],
  };

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-white/50 flex items-center gap-2">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <Link href="/collections/wedding-decor" className="hover:text-white transition-colors">Wedding Décor</Link>
        <span>/</span>
        <span className="text-[#E11D48] font-semibold">Fresh Flower Gajray</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E11D48]/20 text-[#F43F5E] border border-[#E11D48]/40 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          Handcrafted Floral Jewellery • Fresh Motia & Roses
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Fresh Flower Gajray & Mehndi Jewellery in Lahore
        </h1>

        <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-3xl">
          Complete your Dholak, Mayun, and Mehndi ceremonies with the intoxicating natural fragrance of pure Pakistani motia (Arabian jasmine) and fresh red garden roses. Our artisans in Gulberg handcraft bespoke gajray wrist cuffs, bridal matha patti, floral earrings, and ceremonial Nikah haar with refrigerated express delivery across Lahore.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#E11D48]" /> Crafted fresh on the day of delivery</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#25D366]" /> Cold-packed to retain fragrance</span>
          <a 
            href="https://wa.me/923001234567?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20fresh%20flower%20gajray%20or%20mehndi%20jewellery."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#25D366] font-semibold hover:underline"
          >
            <MessageCircle className="w-4 h-4" /> Book Wedding Gajray on WhatsApp
          </a>
        </div>
      </section>

      {/* Gajray Menu Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {GAJRAY_ITEMS.map((item, idx) => (
          <div key={idx} className="p-6 rounded-2xl bg-[#17171E] border border-white/10 space-y-3 hover:border-[#E11D48]/40 transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold text-[#F43F5E] uppercase tracking-wider">{item.tags}</span>
                <h3 className="font-playfair text-xl font-bold text-white mt-1">{item.name}</h3>
              </div>
              <span className="text-base font-bold text-[#E11D48] whitespace-nowrap bg-[#E11D48]/10 px-3 py-1 rounded-xl border border-[#E11D48]/20">
                Rs. {item.price.toLocaleString()} PKR
              </span>
            </div>
            <p className="text-xs text-white/70 leading-relaxed">{item.desc}</p>
            <a 
              href={`https://wa.me/923001234567?text=Hello%20Lahore%20Bouquet!%20I%20want%20to%20order:%20${encodeURIComponent(item.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#25D366] font-semibold hover:underline pt-2"
            >
              <MessageCircle className="w-4 h-4" /> Order this design on WhatsApp →
            </a>
          </div>
        ))}
      </section>

      {/* Pairing Bouquets */}
      <section className="space-y-4 pt-6 border-t border-white/10">
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>Popular wedding & event floral bouquets</span>
          <Link href="/collections/wedding-decor" className="text-[#E11D48] hover:underline font-semibold">
            View All Wedding Décor →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {weddingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
