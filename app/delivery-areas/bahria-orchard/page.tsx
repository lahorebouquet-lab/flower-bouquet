import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts, getSanityAreaPage } from "@/sanity/lib/fetch";
import ProductCard from "../../components/ProductCard";
import NeighborhoodTemplate from "../../components/NeighborhoodTemplate";
import { MapPin, Clock, Camera, MessageCircle, Wallet, Gift, HelpCircle, Navigation, AlertCircle, Package } from "lucide-react";
import { SITE_URL, areaFloristSchema } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Delivery in Bahria Orchard Lahore | FREE delivery, 3–4 hrs",
  },
  description: "Same-day flower delivery to Bahria Orchard Lahore — Phases 1–4 near Raiwind Road in 3–4 hours. Delivery FREE delivery. Fresh roses, money bouquets, cakes &",
  alternates: {
    canonical: `${SITE_URL}/delivery-areas/bahria-orchard`,
  },
  openGraph: {
    title: "Flower Delivery in Bahria Orchard Lahore | FREE delivery, 3–4 hrs",
    description: "Same-day flower delivery to Bahria Orchard Lahore — Phases 1–4 near Raiwind Road in 3–4 hours. Delivery FREE delivery. Fresh roses, money bouquets, cakes &",
    url: `${SITE_URL}/delivery-areas/bahria-orchard`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Flower Delivery in Bahria Orchard Lahore | FREE delivery, 3–4 hrs",
      },
    ],
  }
};

const bahriaOrchardBreadcrumbSchema = {
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
      name: "Delivery Areas",
      item: `${SITE_URL}/delivery-areas`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Bahria Orchard Lahore",
      item: `${SITE_URL}/delivery-areas/bahria-orchard`,
    },
  ],
};

const bahriaOrchardFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does flower delivery to Bahria Orchard take, and what is the fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Delivery to Bahria Orchard takes 3 to 4 hours with free delivery. Phase 1 and Phase 2 orders usually arrive fastest; Phases 3 and 4 take the full window during peak Raiwind Road traffic.",
      },
    },
    {
      "@type": "Question",
      name: "Which Bahria Orchard phases do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover Bahria Orchard Phase 1 through Phase 4, the Orchard commercial areas, and nearby streets along Raiwind Road. Sharing your exact phase, block and house number helps our rider reach you.",
      },
    },
    {
      "@type": "Question",
      name: "Bahria Orchard has strict gate checks — how will the rider get in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our riders carry valid CNICs and follow Bahria security protocol. Pre-inform your gate that a Lahore Bouquet courier is arriving, and we will send you the rider's name and number on WhatsApp before dispatch.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer midnight delivery to Bahria Orchard?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our midnight slot runs 11:30 PM to 12:15 AM with free delivery. Message us on WhatsApp by the evening to reserve, as gate entry takes extra coordination at night.",
      },
    },
    {
      "@type": "Question",
      name: "WhatsApp par Bahria Orchard ke liye order kaise karun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "0310-4225974 par likhein — masalan 'Bahria Orchard Phase 3 me anniversary ke liye 50 surkh gulab ka guldasta chahiye, shaam 7 baje tak.' Hum WhatsApp par phoolon ki photo bhej kar confirm karenge, phir rider rawana hoga. COD, JazzCash, EasyPaisa, bank transfer aur international cards sab chalte hain.",
      },
    },
  ],
};

const areaFlorist = areaFloristSchema("Bahria Orchard", `${SITE_URL}/delivery-areas/bahria-orchard`);

export default async function BahriaOrchardDeliveryPage() {
  // Sanity CMS first — falls back to static content below if unreachable
  const sanityData = await getSanityAreaPage("bahria-orchard");
  if (sanityData) {
    return <NeighborhoodTemplate data={sanityData} />;
  }

  const allProducts = await getSanityProducts();
  const popularBouquets = allProducts.slice(0, 4);

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bahriaOrchardBreadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bahriaOrchardFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaFlorist) }}
      />
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/delivery-areas" className="hover:text-[#0B0B0B] transition-colors">Delivery Areas</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Bahria Orchard</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
          Phases 1–4 • Raiwind Road
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Flower Delivery in Bahria Orchard Lahore
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Bahria Orchard spreads across Phases 1 to 4 near Raiwind Road, and our riders run these phases daily. Most orders arrive within 3 to 4 hours for a flat free delivery. Because Bahria security runs strict gate checks, share your phase, block and house number exactly, and pre-inform your guard. Our florists send you a photo on WhatsApp before your bouquet leaves. Order on WhatsApp at 0310-4225974 (9 AM–1 AM), then pay by COD, JazzCash, EasyPaisa, bank transfer or international card.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#8B1E2D]" /> 3 to 4 hours • FREE delivery</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before it leaves</span>
          <a
            href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20to%20Bahria%20Orchard%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#8B1E2D] font-semibold hover:text-[#C6A15B]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order to Bahria Orchard on WhatsApp
          </a>
        </div>
      </section>

      {/* Delivery Time & Fee */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Wallet className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Delivery time & fee — Bahria Orchard</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Delivery fee: FREE</strong> — across Bahria Orchard Phases 1 to 4 and the commercial areas.</li>
          <li><strong>Delivery time: 3 to 4 hours</strong>, 7 days a week, 9 AM to 1 AM. Phase 1–2 orders are usually fastest; Phases 3–4 take the full window in peak traffic.</li>
          <li><strong>Midnight slot:</strong> 11:30 PM–12:15 AM, with free delivery. Reserve on WhatsApp by the evening so we can coordinate gate entry.</li>
          <li><strong>Payments:</strong> cash on delivery (COD), JazzCash, EasyPaisa, bank transfer and international cards.</li>
          <li><strong>Prices start at Rs. 1,239.</strong> Call or WhatsApp <strong>0310-4225974</strong> and our florists will confirm your slot instantly.</li>
        </ul>
      </section>

      {/* Coverage */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <AlertCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Bahria Orchard phases & areas we cover</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Bahria Orchard Phase 1 & 2:</strong> the most established phases — birthday and anniversary bouquets to family homes.</li>
          <li><strong>Bahria Orchard Phase 3 & 4:</strong> expanding residential blocks — allow the full window and share a pin for newly handed-over streets.</li>
          <li><strong>Orchard commercial areas:</strong> markets, eateries and offices — inauguration flowers, corporate bouquets and client thank-yous.</li>
          <li><strong>Gated phase entries:</strong> riders carry valid CNICs and follow Bahria security protocol — we share the rider&apos;s name and number before dispatch.</li>
        </ul>
      </section>

      {/* Popular Occasions */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Gift className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Occasions we deliver for in Bahria Orchard</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Bahria Orchard orders lean premium and family-focused — imported rose bouquets for anniversaries, money bouquets for milestone birthdays, and Eid hampers across all four phases. Every order includes a free handwritten message card, and your bouquet is photographed on WhatsApp before dispatch.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Bahria Orchard delivery — frequently asked questions</h2>
        </div>
        <div className="divide-y divide-[rgba(198,161,91,0.25)]">
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">How long does flower delivery to Bahria Orchard take, and what is the fee?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Delivery to Bahria Orchard takes 3 to 4 hours with free delivery. Phase 1 and Phase 2 orders usually arrive fastest; Phases 3 and 4 take the full window during peak Raiwind Road traffic.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Which Bahria Orchard phases do you cover?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">We cover Bahria Orchard Phase 1 through Phase 4, the Orchard commercial areas, and nearby streets along Raiwind Road. Sharing your exact phase, block and house number helps our rider reach you.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Bahria Orchard has strict gate checks — how will the rider get in?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Our riders carry valid CNICs and follow Bahria security protocol. Pre-inform your gate that a Lahore Bouquet courier is arriving, and we will send you the rider&apos;s name and number on WhatsApp before dispatch.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Do you offer midnight delivery to Bahria Orchard?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes. Our midnight slot runs 11:30 PM to 12:15 AM with free delivery. Message us on WhatsApp by the evening to reserve, as gate entry takes extra coordination at night.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">WhatsApp par Bahria Orchard ke liye order kaise karun?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">0310-4225974 par likhein — masalan “Bahria Orchard Phase 3 me anniversary ke liye 50 surkh gulab ka guldasta chahiye, shaam 7 baje tak.” Hum WhatsApp par phoolon ki photo bhej kar confirm karenge, phir rider rawana hoga. COD, JazzCash, EasyPaisa, bank transfer aur international cards sab chalte hain.</p>
          </div>
        </div>
      </section>

      {/* How Ordering Works */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Package className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">How ordering works in Bahria Orchard</h2>
        </div>
        <ol className="space-y-3 text-xs text-[#2A2A2A] leading-relaxed list-decimal list-inside">
          <li><strong>Tell us what you need.</strong> Browse the bouquets below or message <strong>0310-4225974</strong> on WhatsApp (open 9 AM–1 AM daily) with your phase, block, house number, the occasion and your budget. Our florists will suggest fresh options starting at Rs. 1,239.</li>
          <li><strong>Approve the photo.</strong> We tie your bouquet fresh and send you a photo on WhatsApp before the rider leaves. Nothing ships until you reply it looks perfect — ask for tweaks and we redo it.</li>
          <li><strong>Pay your way and receive.</strong> Pay cash on delivery, JazzCash, EasyPaisa, bank transfer or an international card. The rider reaches your phase within 3–4 hours for the FREE fee — or in the midnight slot.</li>
        </ol>
      </section>

      {/* Popular Bouquets in Bahria Orchard */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Most ordered bouquets in Bahria Orchard</span>
          <Link href="/bouquets" className="text-[#8B1E2D] hover:underline font-semibold">
            View All Bouquets →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {popularBouquets.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Navigation className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Nearby areas we also deliver</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-3">
          <Link href="/delivery-areas/al-kabir-town" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Al Kabir Town →</p>
            <p className="text-xs text-[#2A2A2A]">FREE • 3–4 hours. Phase 1 & 2 near Raiwind Road.</p>
          </Link>
          <Link href="/delivery-areas/raiwind-road" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Raiwind Road →</p>
            <p className="text-xs text-[#2A2A2A]">FREE • 3–4 hours. Raiwind Road corridor.</p>
          </Link>
          <Link href="/delivery-areas/lake-city" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Lake City →</p>
            <p className="text-xs text-[#2A2A2A]">FREE • 3–4 hours. Golf course & Downtown commercial.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
