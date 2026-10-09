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
    absolute: "Flower Delivery Tariq Gardens Lahore | FREE delivery, 2.5–3.5 hrs",
  },
  description: "Same-day flower delivery to Tariq Gardens Lahore — housing blocks off the Multan Road corridor in 2.5–3.5 hours. Delivery FREE delivery. Fresh roses, money",
  alternates: {
    canonical: `${SITE_URL}/delivery-areas/tariq-gardens`,
  },
  openGraph: {
    title: "Flower Delivery Tariq Gardens Lahore | FREE delivery, 2.5–3.5 hrs",
    description: "Same-day flower delivery to Tariq Gardens Lahore — housing blocks off the Multan Road corridor in 2.5–3.5 hours. Delivery FREE delivery. Fresh roses, money",
    url: `${SITE_URL}/delivery-areas/tariq-gardens`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Flower Delivery Tariq Gardens Lahore | FREE delivery, 2.5–3.5 hrs",
      },
    ],
  }
};

const tariqGardensBreadcrumbSchema = {
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
      name: "Tariq Gardens Lahore",
      item: `${SITE_URL}/delivery-areas/tariq-gardens`,
    },
  ],
};

const tariqGardensFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does flower delivery to Tariq Gardens take, and what is the fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Delivery to Tariq Gardens takes 2.5 to 3.5 hours with free delivery. Earlier orders arrive fastest; evening Multan Road rush hour can push deliveries toward the full window.",
      },
    },
    {
      "@type": "Question",
      name: "Which blocks and areas around Tariq Gardens do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all Tariq Gardens housing blocks, the commercial pockets along the Multan Road corridor, and nearby streets around Thokar Niaz Beg. Sharing your exact block and house number helps our rider find you.",
      },
    },
    {
      "@type": "Question",
      name: "How do I make sure the rider finds my house in Tariq Gardens?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Send your block letter, street and house number on WhatsApp with a live location pin. We share the rider's name and number before dispatch, so you can guide them by phone if needed.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer midnight delivery to Tariq Gardens?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our midnight slot runs 11:30 PM to 12:15 AM with free delivery. Message us on WhatsApp by the evening to reserve — midnight orders cannot be arranged last minute.",
      },
    },
    {
      "@type": "Question",
      name: "WhatsApp par Tariq Gardens ke liye order kaise karun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "0310-4225974 par likhein — masalan 'Tariq Gardens me birthday ke liye lal gulab ka bouquet chahiye, shaam 6 baje tak.' Hum WhatsApp par phoolon ki photo bhej kar confirm karenge, phir rider rawana hoga. COD, JazzCash, EasyPaisa, bank transfer aur international cards sab chalte hain.",
      },
    },
  ],
};

const areaFlorist = areaFloristSchema("Tariq Gardens", `${SITE_URL}/delivery-areas/tariq-gardens`);

export default async function TariqGardensDeliveryPage() {
  // Sanity CMS first — falls back to static content below if unreachable
  const sanityData = await getSanityAreaPage("tariq-gardens");
  if (sanityData) {
    return <NeighborhoodTemplate data={sanityData} />;
  }

  const allProducts = await getSanityProducts();
  const popularBouquets = allProducts.slice(0, 4);

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tariqGardensBreadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tariqGardensFaqSchema) }}
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
        <span className="text-[#8B1E2D] font-semibold">Tariq Gardens</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
          Housing Blocks • Multan Road Corridor
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Flower Delivery in Tariq Gardens Lahore
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Tariq Gardens sits right on the Multan Road corridor, and our riders cover its housing blocks daily. Most orders arrive within 2.5 to 3.5 hours for a flat free delivery. Our florists send you a photo on WhatsApp before your bouquet leaves. We deliver to homes, shops and offices along the corridor — order on WhatsApp at 0310-4225974 (9 AM–1 AM), then pay by COD, JazzCash, EasyPaisa, bank transfer or international card.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#8B1E2D]" /> 2.5 to 3.5 hours • FREE delivery</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before it leaves</span>
          <a
            href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20to%20Tariq%20Gardens%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#8B1E2D] font-semibold hover:text-[#C6A15B]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order to Tariq Gardens on WhatsApp
          </a>
        </div>
      </section>

      {/* Delivery Time & Fee */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Wallet className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Delivery time & fee — Tariq Gardens</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Delivery fee: FREE</strong> — across all Tariq Gardens housing blocks and the Multan Road corridor pockets we serve.</li>
          <li><strong>Delivery time: 2.5 to 3.5 hours</strong>, 7 days a week, 9 AM to 1 AM. Evening Multan Road rush hour can push orders toward the full window.</li>
          <li><strong>Midnight slot:</strong> 11:30 PM–12:15 AM, with free delivery. Reserve on WhatsApp by the evening.</li>
          <li><strong>Payments:</strong> cash on delivery (COD), JazzCash, EasyPaisa, bank transfer and international cards.</li>
          <li><strong>Prices start at Rs. 1,239.</strong> Call or WhatsApp <strong>0310-4225974</strong> and our florists will confirm your slot instantly.</li>
        </ul>
      </section>

      {/* Coverage */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <AlertCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Tariq Gardens areas we cover</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Tariq Gardens housing blocks:</strong> full coverage of the residential blocks — birthday and anniversary bouquets to family homes.</li>
          <li><strong>Multan Road corridor:</strong> shops and offices along the stretch near the society — shop-opening flowers and corporate bouquets.</li>
          <li><strong>Commercial pockets:</strong> markets and service shops around the society entrance — welcome arrangements and promotional stands.</li>
          <li><strong>Thokar Niaz Beg vicinity:</strong> nearby streets and colonies just off the corridor — share a location pin and we route the rider accordingly.</li>
        </ul>
      </section>

      {/* Popular Occasions */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Gift className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Occasions we deliver for in Tariq Gardens</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Tariq Gardens orders are mostly heartfelt family moments — red rose bouquets for anniversaries, pastel baskets for Eid and housewarming, and surprise money bouquets for milestone birthdays. Every order includes a free handwritten message card, and your bouquet is photographed on WhatsApp before dispatch.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Tariq Gardens delivery — frequently asked questions</h2>
        </div>
        <div className="divide-y divide-[rgba(198,161,91,0.25)]">
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">How long does flower delivery to Tariq Gardens take, and what is the fee?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Delivery to Tariq Gardens takes 2.5 to 3.5 hours with free delivery. Earlier orders arrive fastest; evening Multan Road rush hour can push deliveries toward the full window.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Which blocks and areas around Tariq Gardens do you cover?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">We cover all Tariq Gardens housing blocks, the commercial pockets along the Multan Road corridor, and nearby streets around Thokar Niaz Beg. Sharing your exact block and house number helps our rider find you.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">How do I make sure the rider finds my house in Tariq Gardens?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Send your block letter, street and house number on WhatsApp with a live location pin. We share the rider&apos;s name and number before dispatch, so you can guide them by phone if needed.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Do you offer midnight delivery to Tariq Gardens?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes. Our midnight slot runs 11:30 PM to 12:15 AM with free delivery. Message us on WhatsApp by the evening to reserve — midnight orders cannot be arranged last minute.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">WhatsApp par Tariq Gardens ke liye order kaise karun?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">0310-4225974 par likhein — masalan “Tariq Gardens me birthday ke liye lal gulab ka bouquet chahiye, shaam 6 baje tak.” Hum WhatsApp par phoolon ki photo bhej kar confirm karenge, phir rider rawana hoga. COD, JazzCash, EasyPaisa, bank transfer aur international cards sab chalte hain.</p>
          </div>
        </div>
      </section>

      {/* How Ordering Works */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Package className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">How ordering works in Tariq Gardens</h2>
        </div>
        <ol className="space-y-3 text-xs text-[#2A2A2A] leading-relaxed list-decimal list-inside">
          <li><strong>Tell us what you need.</strong> Browse the bouquets below or message <strong>0310-4225974</strong> on WhatsApp (open 9 AM–1 AM daily) with your block, house number, the occasion and your budget. Our florists will suggest fresh options starting at Rs. 1,239.</li>
          <li><strong>Approve the photo.</strong> We tie your bouquet fresh and send you a photo on WhatsApp before the rider leaves. Nothing ships until you reply it looks perfect — ask for tweaks and we redo it.</li>
          <li><strong>Pay your way and receive.</strong> Pay cash on delivery, JazzCash, EasyPaisa, bank transfer or an international card. The rider reaches your block within 2.5–3.5 hours for the FREE fee — or in the midnight slot.</li>
        </ol>
      </section>

      {/* Popular Bouquets in Tariq Gardens */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Most ordered bouquets in Tariq Gardens</span>
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
          <Link href="/delivery-areas/nfc" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">NFC Society →</p>
            <p className="text-xs text-[#2A2A2A]">FREE • 2.5–3.5 hours. NFC commercial market.</p>
          </Link>
          <Link href="/delivery-areas/valencia-town" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Valencia Town →</p>
            <p className="text-xs text-[#2A2A2A]">FREE • 2.5–3.5 hours. Main boulevard & commercial market.</p>
          </Link>
          <Link href="/delivery-areas/eme-society" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">EME Society →</p>
            <p className="text-xs text-[#2A2A2A]">FREE • 2.5–3.5 hours. Commercial area off Multan Road.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
