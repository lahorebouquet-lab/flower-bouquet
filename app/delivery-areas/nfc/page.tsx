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
    absolute: "Flower Delivery in NFC Society Lahore | Rs. 400, 2.5–3.5 Hours",
  },
  description: "Same-day flower delivery to NFC Society Lahore — housing blocks and commercial market in 2.5–3.5 hours. Delivery fee Rs. 400 flat. Bouquet photo on",
  alternates: {
    canonical: `${SITE_URL}/delivery-areas/nfc`,
  },
  openGraph: {
    title: "Flower Delivery in NFC Society Lahore | Rs. 400, 2.5–3.5 Hours",
    description: "Same-day flower delivery to NFC Society Lahore — housing blocks and commercial market in 2.5–3.5 hours. Delivery fee Rs. 400 flat. Bouquet photo on",
    url: `${SITE_URL}/delivery-areas/nfc`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Flower Delivery in NFC Society Lahore | Rs. 400, 2.5–3.5 Hours",
      },
    ],
  }
};

const nfcBreadcrumbSchema = {
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
      name: "NFC Society Lahore",
      item: `${SITE_URL}/delivery-areas/nfc`,
    },
  ],
};

const nfcFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does flower delivery to NFC Society Lahore take, and what is the fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Delivery to NFC Society takes 2.5 to 3.5 hours with a flat fee of Rs. 400. Orders to the commercial market usually arrive at the faster end of the window; the housing blocks further inside take the full window during evening traffic.",
      },
    },
    {
      "@type": "Question",
      name: "Which parts of NFC Society do you deliver to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover the entire NFC Society — the housing blocks, the commercial market and the surrounding sectors near Valencia Town. Sharing your block, street and house number helps our rider reach you without delay — several blocks have similar layouts.",
      },
    },
    {
      "@type": "Question",
      name: "Can you deliver flowers to NFC Society shops and offices?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we regularly deliver to shops and offices around the NFC commercial market — shop-opening flowers, congratulatory stands and client thank-yous. Just share the shop or office name and a landmark on the market strip so the rider finds it quickly.",
      },
    },
    {
      "@type": "Question",
      name: "Do you deliver birthday and anniversary flowers to NFC homes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, most of our NFC Society orders are birthday and anniversary bouquets to family homes — rose and carnation bouquets, teddy bear combos and lily arrangements, often with a cake. Your bouquet is photographed on WhatsApp before dispatch.",
      },
    },
    {
      "@type": "Question",
      name: "WhatsApp par NFC Society ke liye order kaise karun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "0310-4225974 par likhein — masalan 'NFC Society me birthday ke liye mixed phoolon ka guldasta aur teddy bear chahiye, shaam 5 baje tak.' Hum apko WhatsApp par phoolon ki photo bhej kar confirm karenge, phir rider rawana hoga. Cash on delivery, JazzCash, EasyPaisa, bank transfer aur international cards sab chalte hain.",
      },
    },
  ],
};

const areaFlorist = areaFloristSchema("NFC", `${SITE_URL}/delivery-areas/nfc`);

export default async function NFCSocietyDeliveryPage() {
  // Sanity CMS first — falls back to static content below if unreachable
  const sanityData = await getSanityAreaPage("nfc");
  if (sanityData) {
    return <NeighborhoodTemplate data={sanityData} />;
  }

  const allProducts = await getSanityProducts();
  const popularBouquets = allProducts.slice(0, 4);

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nfcBreadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nfcFaqSchema) }}
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
        <span className="text-[#8B1E2D] font-semibold">NFC Society Lahore</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
          NFC Commercial Market • Housing Blocks
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Flower Delivery in NFC Society Lahore
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          NFC Society sits near Valencia Town on the Multan Road corridor, and our riders reach its housing blocks and commercial market in 2.5 to 3.5 hours for a flat Rs. 400 fee. It is a family neighbourhood — birthday bouquets with teddy bears and chocolates, anniversary roses and housewarming arrangements to block homes make up most of our orders here, alongside congratulatory flowers for the commercial market. Every bouquet is photographed on WhatsApp before the rider leaves, so you approve exactly what arrives. To order, message 0310-4225974 any time between 9 AM and 1 AM with your block, street and house number — then pay by COD, JazzCash, EasyPaisa, bank transfer or international card.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#8B1E2D]" /> 2.5 to 3.5 hours • Rs. 400 flat delivery fee</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before it leaves</span>
          <a
            href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20to%20NFC%20Society%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#8B1E2D] font-semibold hover:text-[#C6A15B]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order to NFC Society on WhatsApp
          </a>
        </div>
      </section>

      {/* Delivery Time & Fee */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Wallet className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Delivery time & fee — NFC Society Lahore</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Delivery fee: Rs. 400 flat</strong> — across the NFC Society housing blocks, commercial market and the surrounding sectors near Valencia Town. No hidden charges.</li>
          <li><strong>Delivery time: 2.5 to 3.5 hours</strong>, 7 days a week, from 9 AM to 1 AM. The commercial market is usually fastest; the housing blocks further inside take the full window in evening traffic.</li>
          <li><strong>Midnight slot:</strong> available every night from 11:30 PM to 12:15 AM with a Rs. 500 surcharge — message us on WhatsApp by the evening to reserve it.</li>
          <li><strong>Payments:</strong> cash on delivery (COD), JazzCash, EasyPaisa, bank transfer and international cards.</li>
          <li><strong>Prices start at Rs. 1,180.</strong> Call or WhatsApp <strong>0310-4225974</strong> and our Lahore florists will confirm your slot instantly.</li>
        </ul>
      </section>

      {/* NFC Society Coverage */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <AlertCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">NFC Society blocks we cover</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Commercial market:</strong> the NFC commercial market — shop-opening flowers, congratulatory stands and client thank-yous delivered to stores and offices.</li>
          <li><strong>Housing blocks:</strong> the family housing blocks behind the market — birthday, anniversary and get-well bouquets to family homes.</li>
          <li><strong>Blocks near Valencia Town:</strong> the NFC blocks bordering the Valencia Town side — share your block letter so the rider takes the right turn.</li>
          <li><strong>Sectors near the Multan Road corridor:</strong> homes closest to the corridor, usually the fastest drop-offs in NFC.</li>
          <li><strong>Address tips:</strong> several blocks have similar street layouts, so sharing your exact block, street and house number helps our rider reach you without delay.</li>
          <li><strong>Evening deliveries:</strong> allow the full 3.5-hour window after 5 PM, when the market and corridor traffic is at its heaviest.</li>
        </ul>
      </section>

      {/* Popular Occasions */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Gift className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Occasions we deliver for in NFC Society</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          NFC Society is a family-neighbourhood zone, so birthdays lead the way — mixed-flower bouquets with teddy bears and chocolates for children&apos;s parties, and elegant rose and lily arrangements for adults. Anniversaries call for red-rose boxes and imported blooms, while new-home families receive housewarming arrangements. Shaadi season brings bridal bouquets and car-décor bookings, and the commercial market keeps us busy with congratulatory stands and shop-opening flowers. Whatever the occasion, your bouquet is photographed on WhatsApp before dispatch, so what arrives is exactly what you approved — with a free handwritten message card in every order.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">NFC Society delivery — frequently asked questions</h2>
        </div>
        <div className="divide-y divide-[rgba(198,161,91,0.25)]">
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">How long does flower delivery to NFC Society Lahore take, and what is the fee?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Delivery to NFC Society takes 2.5 to 3.5 hours with a flat fee of Rs. 400. Orders to the commercial market usually arrive at the faster end of the window; the housing blocks further inside take the full window during evening traffic.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Which parts of NFC Society do you deliver to?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">We cover the entire NFC Society — the housing blocks, the commercial market and the surrounding sectors near Valencia Town. Sharing your block, street and house number helps our rider reach you without delay — several blocks have similar layouts.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Can you deliver flowers to NFC Society shops and offices?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes, we regularly deliver to shops and offices around the NFC commercial market — shop-opening flowers, congratulatory stands and client thank-yous. Just share the shop or office name and a landmark on the market strip so the rider finds it quickly.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Do you deliver birthday and anniversary flowers to NFC homes?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes, most of our NFC Society orders are birthday and anniversary bouquets to family homes — rose and carnation bouquets, teddy bear combos and lily arrangements, often with a cake. Your bouquet is photographed on WhatsApp before dispatch.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">WhatsApp par NFC Society ke liye order kaise karun?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">0310-4225974 par likhein — masalan “NFC Society me birthday ke liye mixed phoolon ka guldasta aur teddy bear chahiye, shaam 5 baje tak.” Hum apko WhatsApp par phoolon ki photo bhej kar confirm karenge, phir rider rawana hoga. Cash on delivery, JazzCash, EasyPaisa, bank transfer aur international cards sab chalte hain.</p>
          </div>
        </div>
      </section>

      {/* How Ordering Works */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Package className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">How ordering works in NFC Society</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Ordering to NFC Society is straightforward — here is what happens after you message us:
        </p>
        <ol className="space-y-3 text-xs text-[#2A2A2A] leading-relaxed list-decimal list-inside">
          <li><strong>Tell us what you need.</strong> Browse the bouquets below or message <strong>0310-4225974</strong> on WhatsApp (open 9 AM–1 AM daily) with your block, street and house number, the occasion and your budget. Our florists will suggest fresh options starting at Rs. 1,180 — including which roses and seasonal flowers arrived today.</li>
          <li><strong>Approve the photo.</strong> We tie your bouquet fresh and send you a photo on WhatsApp before the rider leaves. Nothing ships until you reply that it looks perfect — ask for tweaks and we redo it.</li>
          <li><strong>Pay your way and receive.</strong> Pay cash on delivery, JazzCash, EasyPaisa, bank transfer or an international card. The rider reaches your NFC Society address within 2.5–3.5 hours for the Rs. 400 flat fee — or in the midnight slot from 11:30 PM to 12:15 AM for a Rs. 500 surcharge.</li>
        </ol>
      </section>

      {/* Popular Bouquets in NFC Society */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Most ordered bouquets in NFC Society Lahore</span>
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
          <Link href="/delivery-areas/valencia-town" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Valencia Town →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 400 • 2.5–3.5 hours. Main boulevard &amp; commercial market.</p>
          </Link>
          <Link href="/delivery-areas/eme-society" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">EME Society →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 400 • 2.5–3.5 hours. Commercial area off Multan Road.</p>
          </Link>
          <Link href="/delivery-areas/tariq-gardens" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Tariq Gardens →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 400 • 2.5–3.5 hours. Housing near Multan Road corridor.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
