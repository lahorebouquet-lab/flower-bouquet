export const revalidate = 60;
import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../../components/ProductCard";
import { Sparkles, MessageCircle, Clock, ShieldCheck, HeartHandshake, CheckCircle2 } from "lucide-react";
import { SITE_URL } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Fresh Gajray in Lahore | Mehndi Jewellery | Lahore Bouquet",
  },
  description: "Order fresh motia & red rose gajray, wedding garlands (mala/haar), haath phool, and handmade bridal mehndi jewellery in Lahore. 4 hours express delivery",
  alternates: {
    canonical: `${SITE_URL}/collections/fresh-flower-gajray`,
  },
  keywords: [
    "gajray lahore",
    "garlands mala lahore",
    "fresh flower gajray",
    "mehndi jewellery lahore",
    "motia gajray lahore",
    "rose gajray lahore",
    "wedding garland lahore",
    "wedding mala haar lahore",
    "haath phool lahore",
    "bridal floral jewellery lahore",
    "4 hours delivery lahore",
    "mehndi flower jewellery",
    "nikah haar lahore",
    "lahore bouquet gajray"
  ],
  openGraph: {
    title: "Fresh Gajray in Lahore | Mehndi Jewellery | Lahore Bouquet",
    description: "Order fresh motia & red rose gajray, wedding garlands (mala/haar), haath phool, and handmade bridal mehndi jewellery in Lahore. 4 hours express delivery",
    url: `${SITE_URL}/collections/fresh-flower-gajray`,
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Fresh Gajray in Lahore | Mehndi Jewellery | Lahore Bouquet",
      },
    ],
  }
};

export default async function FreshFlowerGajrayPage() {
  const allProducts = await getSanityProducts();
  const gajrayProducts = allProducts.filter(p => p.category === "Fresh Flower Gajray");
  const weddingProducts = allProducts.filter(p => p.category === "Wedding Décor" || p.category === "Roses").slice(0, 4);

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
        name: "Wedding Décor",
        item: `${SITE_URL}/wedding-decor`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Gajray & Garlands Mala in Lahore",
        item: `${SITE_URL}/collections/fresh-flower-gajray`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How fast can gajray and malas be delivered?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We deliver in 4 hours across Lahore including DHA (Phases 1-9), Gulberg, Bahria Town, Model Town, Johar Town, and Cantt. Same-day emergency orders are also accommodated."
        }
      },
      {
        "@type": "Question",
        name: "How do the flowers stay fresh during evening events?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Every piece is woven on the day of delivery and packed in insulated moisture-retaining cold boxes to keep the jasmine motia crisp and fragrant all night."
        }
      },
      {
        "@type": "Question",
        name: "Can I order matching floral jewellery for my bridal dress?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Send us a photo of your bridal lehenga or outfit on WhatsApp, and our florists will match roses, baby's breath, pearls, and ribbons to your exact shades."
        }
      },
      {
        "@type": "Question",
        name: "Do you offer bulk gajray discounts for wedding guests?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we prepare wholesale and bulk packages of 20, 50, or 100+ fresh motia and red rose gajray pairs at discounted wedding rates with venue delivery."
        }
      }
    ]
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Gajray & Garlands Mala Collection Lahore",
    numberOfItems: gajrayProducts.length,
    itemListElement: gajrayProducts.map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: {
        "@type": "Product",
        name: p.title,
        url: `https://lahorebouquet.com/products/${p.slug}`,
        image: `https://lahorebouquet.com${p.image}`,
        description: p.desc,
        offers: {
          "@type": "Offer",
          price: p.price,
          priceCurrency: "PKR",
          availability: "https://schema.org/InStock",
        },
      },
    })),
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/wedding-decor" className="hover:text-[#0B0B0B] transition-colors">Wedding Décor</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Gajray & Garlands Mala</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#8B1E2D] border border-[#8B1E2D]/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            Handcrafted Floral Artistry • 4 Hours Delivery Lahore
          </span>
          <span className="px-3 py-1 rounded-full bg-white border border-[#E5DED2] text-xs font-semibold text-[#0B0B0B]">
            {gajrayProducts.length} Premium Designs
          </span>
        </div>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Gajray & Garlands Mala for Weddings in Lahore
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Complete your Mayun, Mehndi, Nikah, and Barat celebrations with the timeless fragrance of authentic Pakistani motia (Arabian jasmine) and fresh velvety red roses. Sourced fresh daily, our florists in Gulberg hand-weave ceremonial wedding garlands (haar/mala), bridal haath phool, wrist cuffs, floral choker necklaces, and matching guest gajray with <strong>guaranteed 4-hour refrigerated delivery across Lahore</strong>.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#8B1E2D]" /> 4 Hours Express Lahore Delivery</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#C6A15B]" /> Moisture-Sealed Cold Packing</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-[#25D366]" /> Live Photo on WhatsApp Before Dispatch</span>
          <a 
            href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20gajray%20or%20wedding%20garlands%20mala."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#8B1E2D] font-semibold hover:text-[#C6A15B]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Custom Bridal Order on WhatsApp
          </a>
        </div>
      </section>

      {/* Gajray Products Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between border-b border-[#E5DED2] pb-4">
          <div>
            <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Gajray & Garlands Mala Collection</h2>
            <p className="text-xs text-[#777777]">Handcrafted gajray pairs, haath phool, bridal floral sets, and ceremonial malas</p>
          </div>
          <span className="text-xs font-semibold text-[#8B1E2D] bg-[#8B1E2D]/10 px-3 py-1.5 rounded-full">
            4-Hour Express Delivery
          </span>
        </div>

        {gajrayProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {gajrayProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white rounded-2xl border border-[#E5DED2]">
            <p className="text-sm text-[#777777]">Loading handcrafted floral jewellery...</p>
          </div>
        )}
      </section>

      {/* Bespoke Bridal & Bulk Mehndi Inquiries */}
      <section className="bg-white rounded-2xl border border-[rgba(198,161,91,0.35)] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
        <div className="space-y-2 text-center md:text-left">
          <span className="text-xs font-bold text-[#8B1E2D] uppercase tracking-wider">Custom Wedding Packages</span>
          <h3 className="font-playfair text-xl sm:text-2xl font-bold text-[#0B0B0B]">
            Need Bulk Gajray for Mehndi Guests or Custom Bridal Jewellery?
          </h3>
          <p className="text-xs sm:text-sm text-[#777777] max-w-xl">
            We prepare bulk fresh motia gajray for Mayun, Mehndi, and Dholak ceremonies (20 to 100+ pairs) with custom color themes matching your bridal dress. Live photos sent before dispatch.
          </p>
        </div>
        <a
          href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20need%20a%20quote%20for%20bulk%20mehndi%20gajray%20or%20bespoke%20bridal%20flower%20jewellery."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0E7C5B] text-white text-sm font-bold shadow-md hover:bg-[#0B6E4F] transition-all whitespace-nowrap"
        >
          <MessageCircle className="w-5 h-5" />
          Chat on WhatsApp: 0310 4225974
        </a>
      </section>

      {/* Pairing Wedding Décor & Bouquets */}
      {weddingProducts.length > 0 && (
        <section className="space-y-4 pt-6 border-t border-[#E5DED2]">
          <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
            <span className="font-semibold text-sm text-[#0B0B0B]">Popular Wedding Room & Car Décor</span>
            <Link href="/wedding-decor" className="text-[#8B1E2D] hover:underline font-semibold">
              View All Wedding Décor →
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {weddingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}

      {/* Floral Jewellery for Mehndi — keyword section */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Sparkles className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold">Floral Jewellery for Mehndi in Lahore</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Fresh flower jewellery is the signature look of a Pakistani mehndi — delicate, fragrant and photographed all night. Our florists handcraft mehndi jewellery sets from fresh jasmine motia, roses and baby&apos;s breath: maang tikka strands, jhumka-style earrings, bracelets, hathphool and kamarband, all matched to your outfit colours. A complete bridal mehndi floral jewellery set starts at <strong>Rs. 3,500</strong>; individual pieces (tikka, earrings or bracelets) from <strong>Rs. 900</strong>.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#2A2A2A]">
          <div className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] space-y-2">
            <h3 className="font-bold text-[#0B0B0B] text-sm">Bridal Mehndi Set</h3>
            <p className="leading-relaxed">Tikka, earrings, 2 bracelets, hathphool — colour-matched to your dress. Rs. 3,500–6,000.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] space-y-2">
            <h3 className="font-bold text-[#0B0B0B] text-sm">Family & Friends Sets</h3>
            <p className="leading-relaxed">Matching tikka + bracelet sets for sisters and cousins, 5+ sets discounted. Rs. 1,500/set onwards.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] space-y-2">
            <h3 className="font-bold text-[#0B0B0B] text-sm">Freshness Promise</h3>
            <p className="leading-relaxed">Woven on your event morning, packed in cold boxes, delivered in 2–5 hours — fragrant all night.</p>
          </div>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Send your outfit photo on <a href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20want%20floral%20jewellery%20for%20a%20mehndi." target="_blank" rel="noopener noreferrer" className="text-[#8B1E2D] underline font-semibold">WhatsApp</a> and we&apos;ll design a matching set — also see our <Link href="/blog/gajra-prices-lahore-2026" className="text-[#8B1E2D] underline">gajra price guide</Link> and <Link href="/blog/nikkah-flowers-guide-lahore" className="text-[#8B1E2D] underline">nikkah flower guide</Link>.
        </p>
      </section>

      {/* Comprehensive FAQs for High Search Visibility */}
      <section className="bg-white p-8 sm:p-10 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Sparkles className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold">Frequently Asked Questions — Gajray & Malas in Lahore</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#2A2A2A] leading-relaxed">
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">How fast can gajray and malas be delivered?</h3>
            <p>We deliver in 4 hours across Lahore including DHA (Phases 1-9), Gulberg, Bahria Town, Model Town, Johar Town, and Cantt. Same-day emergency orders are also accommodated.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">How do the flowers stay fresh during evening events?</h3>
            <p>Every piece is woven on the day of delivery and packed in insulated moisture-retaining cold boxes to keep the jasmine motia crisp and fragrant all night.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Can I order matching floral jewellery for my bridal dress?</h3>
            <p>Yes. Send us a photo of your bridal lehenga or outfit on WhatsApp, and our florists will match roses, baby&apos;s breath, pearls, and ribbons to your exact shades.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Do you offer bulk gajray discounts for wedding guests?</h3>
            <p>Yes, we prepare wholesale and bulk packages of 20, 50, or 100+ fresh motia and red rose gajray pairs at discounted wedding rates with venue delivery.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
