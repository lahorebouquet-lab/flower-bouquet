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
    absolute: "Flower Delivery in Valencia Town Lahore | Rs. 400, 2.5–3.5 Hours",
  },
  description: "Same-day flower delivery to Valencia Town Lahore — main boulevard and commercial market in 2.5–3.5 hours. Delivery fee Rs. 400 flat. Bouquet photo on WhatsApp before dispatch.",
  alternates: {
    canonical: `${SITE_URL}/delivery-areas/valencia-town`,
  },
  openGraph: {
    title: "Flower Delivery in Valencia Town Lahore | Rs. 400, 2.5–3.5 Hours",
    description: "Same-day flower delivery to Valencia Town Lahore — main boulevard and commercial market in 2.5–3.5 hours. Delivery fee Rs. 400 flat. Bouquet photo on WhatsApp before dispatch.",
    url: `${SITE_URL}/delivery-areas/valencia-town`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Flower Delivery in Valencia Town Lahore | Rs. 400, 2.5–3.5 Hours",
      },
    ],
  }
};

const valenciaTownBreadcrumbSchema = {
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
      name: "Valencia Town Lahore",
      item: `${SITE_URL}/delivery-areas/valencia-town`,
    },
  ],
};

const valenciaTownFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does flower delivery to Valencia Town Lahore take, and what is the fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Delivery to Valencia Town takes 2.5 to 3.5 hours with a flat fee of Rs. 400. Orders to the main boulevard and commercial market usually arrive at the faster end of the window; the inner residential blocks take the full window during evening traffic.",
      },
    },
    {
      "@type": "Question",
      name: "Which parts of Valencia Town do you deliver to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover the entire Valencia Town — the main boulevard, the commercial market, and all residential blocks. Sharing your block, street and house number helps our rider reach you without delay — several blocks have similar layouts.",
      },
    },
    {
      "@type": "Question",
      name: "Can you deliver flowers to Valencia Town offices and shops?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we regularly deliver to offices and shops around the Valencia commercial market — client thank-yous, shop-opening flowers and congratulatory stands. Just share the shop or office name and a landmark on the market strip so the rider finds it quickly.",
      },
    },
    {
      "@type": "Question",
      name: "Do you deliver get-well flowers to homes in Valencia Town?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we deliver fresh get-well flowers and fruit hampers to family homes across Valencia Town. Bouquets with soft, fragrant blooms like lilies and carnations are the most popular choice for a recovery gift.",
      },
    },
    {
      "@type": "Question",
      name: "WhatsApp par Valencia Town ke liye order kaise karun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "0310-4225974 par likhein — masalan 'Valencia Town block C me birthday ke liye gulabi gulab ka guldasta aur teddy bear chahiye, shaam 6 baje tak.' Hum apko WhatsApp par phoolon ki photo bhej kar confirm karenge, phir rider rawana hoga. Cash on delivery, JazzCash, EasyPaisa, bank transfer aur international cards sab chalte hain.",
      },
    },
  ],
};

const areaFlorist = areaFloristSchema("Valencia Town", `${SITE_URL}/delivery-areas/valencia-town`);

export default async function ValenciaTownDeliveryPage() {
  // Sanity CMS first — falls back to static content below if unreachable
  const sanityData = await getSanityAreaPage("valencia-town");
  if (sanityData) {
    return <NeighborhoodTemplate data={sanityData} />;
  }

  const allProducts = await getSanityProducts();
  const popularBouquets = allProducts.slice(0, 4);

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(valenciaTownBreadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(valenciaTownFaqSchema) }}
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
        <span className="text-[#8B1E2D] font-semibold">Valencia Town Lahore</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
          Main Boulevard • Commercial Market
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Flower Delivery in Valencia Town Lahore
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Valencia Town sits between DHA Rahbar and the NFC corridor, and our riders reach its main boulevard, commercial market and residential blocks in 2.5 to 3.5 hours for a flat Rs. 400 fee. It is a family-neighbourhood zone — birthday bouquets, anniversary roses and housewarming arrangements to block homes make up most of our orders here, alongside shop-opening flowers for the commercial market. Every bouquet is photographed on WhatsApp before the rider leaves, so you approve exactly what arrives. To order, message 0310-4225974 any time between 9 AM and 1 AM with your block, street and house number — then pay by COD, JazzCash, EasyPaisa, bank transfer or international card.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#8B1E2D]" /> 2.5 to 3.5 hours • Rs. 400 flat delivery fee</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before it leaves</span>
          <a
            href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20to%20Valencia%20Town%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#8B1E2D] font-semibold hover:text-[#C6A15B]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order to Valencia Town on WhatsApp
          </a>
        </div>
      </section>

      {/* Delivery Time & Fee */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Wallet className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Delivery time & fee — Valencia Town Lahore</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Delivery fee: Rs. 400 flat</strong> — across Valencia Town&apos;s main boulevard, commercial market and all residential blocks. No hidden charges.</li>
          <li><strong>Delivery time: 2.5 to 3.5 hours</strong>, 7 days a week, from 9 AM to 1 AM. The main boulevard and commercial market are usually fastest; inner blocks take the full window in evening traffic.</li>
          <li><strong>Midnight slot:</strong> available every night from 11:30 PM to 12:15 AM with a Rs. 500 surcharge — message us on WhatsApp by the evening to reserve it.</li>
          <li><strong>Payments:</strong> cash on delivery (COD), JazzCash, EasyPaisa, bank transfer and international cards.</li>
          <li><strong>Prices start at Rs. 1,180.</strong> Call or WhatsApp <strong>0310-4225974</strong> and our Lahore florists will confirm your slot instantly.</li>
        </ul>
      </section>

      {/* Valencia Town Coverage */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <AlertCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Valencia Town blocks we cover</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Main boulevard:</strong> the Valencia Town main boulevard — offices, banks and retail outlets where congratulatory and corporate bouquets are frequent.</li>
          <li><strong>Commercial market:</strong> the Valencia commercial market — shop-opening flowers, congratulatory stands and client thank-yous delivered to stores.</li>
          <li><strong>Residential blocks:</strong> the family blocks behind the boulevard — birthday, anniversary and housewarming bouquets to family homes.</li>
          <li><strong>Blocks near DHA Rahbar:</strong> the blocks bordering DHA Rahbar on the Valencia side — share your block letter so the rider takes the right turn.</li>
          <li><strong>Address tips:</strong> several blocks have similar street layouts, so sharing your exact block, street and house number helps our rider reach you without delay.</li>
          <li><strong>Evening deliveries:</strong> allow the full 3.5-hour window after 5 PM, when the boulevard and market traffic is at its heaviest.</li>
        </ul>
      </section>

      {/* Popular Occasions */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Gift className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Occasions we deliver for in Valencia Town</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Valencia Town is a family-neighbourhood zone, so birthdays lead the way — rose and carnation bouquets with teddy bears and chocolates for children&apos;s parties, and elegant lily arrangements for adults. Anniversaries call for red-rose boxes and imported blooms, while new-home families receive housewarming arrangements. Shaadi season brings bridal bouquets and car-décor bookings, and the commercial market keeps us busy with shop-opening stands and congratulatory flowers. Whatever the occasion, your bouquet is photographed on WhatsApp before dispatch, so what arrives is exactly what you approved — with a free handwritten message card in every order.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Valencia Town delivery — frequently asked questions</h2>
        </div>
        <div className="divide-y divide-[rgba(198,161,91,0.25)]">
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">How long does flower delivery to Valencia Town Lahore take, and what is the fee?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Delivery to Valencia Town takes 2.5 to 3.5 hours with a flat fee of Rs. 400. Orders to the main boulevard and commercial market usually arrive at the faster end of the window; the inner residential blocks take the full window during evening traffic.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Which parts of Valencia Town do you deliver to?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">We cover the entire Valencia Town — the main boulevard, the commercial market, and all residential blocks. Sharing your block, street and house number helps our rider reach you without delay — several blocks have similar layouts.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Can you deliver flowers to Valencia Town offices and shops?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes, we regularly deliver to offices and shops around the Valencia commercial market — client thank-yous, shop-opening flowers and congratulatory stands. Just share the shop or office name and a landmark on the market strip so the rider finds it quickly.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Do you deliver get-well flowers to homes in Valencia Town?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes, we deliver fresh get-well flowers and fruit hampers to family homes across Valencia Town. Bouquets with soft, fragrant blooms like lilies and carnations are the most popular choice for a recovery gift.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">WhatsApp par Valencia Town ke liye order kaise karun?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">0310-4225974 par likhein — masalan “Valencia Town block C me birthday ke liye gulabi gulab ka guldasta aur teddy bear chahiye, shaam 6 baje tak.” Hum apko WhatsApp par phoolon ki photo bhej kar confirm karenge, phir rider rawana hoga. Cash on delivery, JazzCash, EasyPaisa, bank transfer aur international cards sab chalte hain.</p>
          </div>
        </div>
      </section>

      {/* How Ordering Works */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Package className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">How ordering works in Valencia Town</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Ordering to Valencia Town is straightforward — here is what happens after you message us:
        </p>
        <ol className="space-y-3 text-xs text-[#2A2A2A] leading-relaxed list-decimal list-inside">
          <li><strong>Tell us what you need.</strong> Browse the bouquets below or message <strong>0310-4225974</strong> on WhatsApp (open 9 AM–1 AM daily) with your block, street and house number, the occasion and your budget. Our florists will suggest fresh options starting at Rs. 1,180 — including which roses and seasonal flowers arrived today.</li>
          <li><strong>Approve the photo.</strong> We tie your bouquet fresh and send you a photo on WhatsApp before the rider leaves. Nothing ships until you reply that it looks perfect — ask for tweaks and we redo it.</li>
          <li><strong>Pay your way and receive.</strong> Pay cash on delivery, JazzCash, EasyPaisa, bank transfer or an international card. The rider reaches your Valencia Town address within 2.5–3.5 hours for the Rs. 400 flat fee — or in the midnight slot from 11:30 PM to 12:15 AM for a Rs. 500 surcharge.</li>
        </ol>
      </section>

      {/* Popular Bouquets in Valencia Town */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Most ordered bouquets in Valencia Town Lahore</span>
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
          <Link href="/delivery-areas/eme-society" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">EME Society →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 400 • 2.5–3.5 hours. Commercial area off Multan Road.</p>
          </Link>
          <Link href="/delivery-areas/nfc" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">NFC Society →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 400 • 2.5–3.5 hours. NFC commercial market.</p>
          </Link>
          <Link href="/delivery-areas/dha-rahbar" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">DHA Rahbar →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 400 • 3–4 hours. Sectors near Valencia Town.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
