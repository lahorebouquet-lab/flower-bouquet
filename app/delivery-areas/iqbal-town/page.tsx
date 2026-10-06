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
    absolute: "Flower Delivery in Iqbal Town Lahore | Rs. 300, 2–3 Hours",
  },
  description: "Same-day flower delivery to Allama Iqbal Town Lahore — Moon Market, residential blocks & Multan Road side — in 2–3 hours. Delivery fee Rs. 300. Imported roses, money bouquets, cakes & midnight surprises. Photo on WhatsApp first.",
  alternates: {
    canonical: `${SITE_URL}/delivery-areas/iqbal-town`,
  },
  openGraph: {
    title: "Flower Delivery in Iqbal Town Lahore | Rs. 300, 2–3 Hours",
    description: "Same-day flower delivery to Allama Iqbal Town Lahore — Moon Market, residential blocks & Multan Road side — in 2–3 hours. Delivery fee Rs. 300. Imported roses, money bouquets, cakes & midnight surprises. Photo on WhatsApp first.",
    url: `${SITE_URL}/delivery-areas/iqbal-town`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Flower Delivery in Iqbal Town Lahore | Rs. 300, 2–3 Hours",
      },
    ],
  }
};

const iqbalTownBreadcrumbSchema = {
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
      name: "Iqbal Town Lahore",
      item: `${SITE_URL}/delivery-areas/iqbal-town`,
    },
  ],
};

const iqbalTownFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does flower delivery to Iqbal Town take, and what is the fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Delivery to Allama Iqbal Town takes 2 to 3 hours with a flat fee of Rs. 300. Blocks near Moon Market and Multan Road arrive at the faster end; deeper blocks take the full window during evening rush.",
      },
    },
    {
      "@type": "Question",
      name: "Do you deliver flowers to shops in Moon Market?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Moon Market is one of Lahore's busiest shopping areas and we deliver to its shops and offices regularly: shop-opening flowers, inauguration stands and corporate bouquets. Share your shop or plaza name with the lane and shop number so the rider finds you quickly.",
      },
    },
    {
      "@type": "Question",
      name: "Which blocks of Allama Iqbal Town do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all residential blocks of Allama Iqbal Town, including Karim Block and the streets around Moon Market. Sharing your block, street and house number helps our rider reach you without delay — several blocks share similar street layouts.",
      },
    },
    {
      "@type": "Question",
      name: "Can I order flowers for an office near Multan Road in Iqbal Town?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we deliver to offices and businesses along the Multan Road side of Iqbal Town — client thank-yous, staff farewells and corporate event flowers are regular orders. Share the building or plaza name with your floor number.",
      },
    },
    {
      "@type": "Question",
      name: "WhatsApp par Iqbal Town ke liye order kaise karun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "0310-4225974 par likhein — masalan 'Iqbal Town Karim Block me birthday ke liye imported gulab ka guldasta aur cake chahiye, shaam 5 baje tak.' Hum apko WhatsApp par phoolon ki photo bhej kar confirm karenge, phir rider rawana hoga. Cash on delivery, JazzCash, EasyPaisa, bank transfer aur international cards sab chalte hain.",
      },
    },
  ],
};

const areaFlorist = areaFloristSchema("Iqbal Town", `${SITE_URL}/delivery-areas/iqbal-town`);

export default async function IqbalTownDeliveryPage() {
  // Sanity CMS first — falls back to static content below if unreachable
  const sanityData = await getSanityAreaPage("iqbal-town");
  if (sanityData) {
    return <NeighborhoodTemplate data={sanityData} />;
  }

  const allProducts = await getSanityProducts();
  const popularBouquets = allProducts.slice(0, 4);

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(iqbalTownBreadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(iqbalTownFaqSchema) }}
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
        <span className="text-[#8B1E2D] font-semibold">Iqbal Town Lahore</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
          Moon Market • Allama Iqbal Town Blocks
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Flower Delivery in Iqbal Town Lahore
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Allama Iqbal Town is one of Lahore&apos;s oldest and busiest residential schemes, and our riders run its blocks daily — from the famous Moon Market shopping area to the quieter residential streets near Multan Road. Delivery takes 2 to 3 hours with a flat fee of Rs. 300. Our florists send you a photo on WhatsApp before your bouquet leaves, and we deliver to homes, Moon Market shops and offices across the town. To order, WhatsApp 0310-4225974 any time between 9 AM and 1 AM with your block and street details — approve the bouquet photo we send, then pay by COD, JazzCash, EasyPaisa, bank transfer or international card.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#8B1E2D]" /> 2 to 3 hours • Rs. 300 flat delivery fee</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before it leaves</span>
          <a
            href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20to%20Iqbal%20Town%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#8B1E2D] font-semibold hover:text-[#C6A15B]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order to Iqbal Town on WhatsApp
          </a>
        </div>
      </section>

      {/* Delivery Time & Fee */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Wallet className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Delivery time & fee — Iqbal Town Lahore</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Delivery fee: Rs. 300 flat</strong> — across all blocks of Allama Iqbal Town, Moon Market and the Multan Road side. No hidden charges.</li>
          <li><strong>Delivery time: 2 to 3 hours</strong>, 7 days a week, from 9 AM to 1 AM. Blocks near Moon Market and Multan Road are usually fastest; deeper blocks take the full window.</li>
          <li><strong>Midnight slot:</strong> 11:30 PM–12:15 AM every night with a Rs. 500 surcharge — message us on WhatsApp by the evening to reserve it.</li>
          <li><strong>Payments:</strong> cash on delivery (COD), JazzCash, EasyPaisa, bank transfer and international cards.</li>
          <li><strong>Prices start at Rs. 1,180.</strong> Call or WhatsApp <strong>0310-4225974</strong> and our Lahore florists will confirm your slot instantly.</li>
        </ul>
      </section>

      {/* Iqbal Town Coverage */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <AlertCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Blocks & areas in Iqbal Town we cover</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Moon Market:</strong> Lahore&apos;s famous shopping area — shop-opening flowers, inauguration stands and corporate bouquets for its shops and offices.</li>
          <li><strong>Karim Block:</strong> residential streets around Karim Block — birthday and anniversary bouquets to family homes.</li>
          <li><strong>Allama Iqbal Town blocks:</strong> all residential blocks across the town — share your block, street and house number so our rider finds you easily.</li>
          <li><strong>Multan Road side:</strong> offices and businesses along Multan Road&apos;s Iqbal Town stretch — client thank-yous and staff farewell flowers.</li>
          <li><strong>Wahdat Road side:</strong> homes and clinics toward Wahdat Road — get-well flowers and occasion bouquets.</li>
          <li><strong>Near Thokar & Faisal Town:</strong> blocks bordering Thokar Niaz Baig and Faisal Town — the same 2–3 hour, Rs. 300 service.</li>
        </ul>
      </section>

      {/* Popular Occasions */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Gift className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Occasions we deliver for in Iqbal Town</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Iqbal Town orders are wonderfully everyday — birthday bouquets and anniversary roses to family homes across the blocks, get-well flowers to clinics near Wahdat Road, and graduation surprises for students in the area. Moon Market keeps our commercial side busy with shop-opening flowers and inauguration stands, while the Multan Road offices order client thank-yous and farewell bouquets. Eid hampers and housewarming arrangements round out the calendar, and our midnight slot is popular for late-night birthday surprises. Whatever the occasion, your bouquet is photographed on WhatsApp before dispatch, so what arrives is exactly what you approved — with a free handwritten message card in every order.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Iqbal Town delivery — frequently asked questions</h2>
        </div>
        <div className="divide-y divide-[rgba(198,161,91,0.25)]">
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">How long does flower delivery to Iqbal Town take, and what is the fee?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Delivery to Allama Iqbal Town takes 2 to 3 hours with a flat fee of Rs. 300. Blocks near Moon Market and Multan Road arrive at the faster end; deeper blocks take the full window during evening rush.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Do you deliver flowers to shops in Moon Market?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes — Moon Market is one of Lahore&apos;s busiest shopping areas and we deliver to its shops and offices regularly: shop-opening flowers, inauguration stands and corporate bouquets. Share your shop or plaza name with the lane and shop number so the rider finds you quickly.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Which blocks of Allama Iqbal Town do you cover?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">We cover all residential blocks of Allama Iqbal Town, including Karim Block and the streets around Moon Market. Sharing your block, street and house number helps our rider reach you without delay — several blocks share similar street layouts.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Can I order flowers for an office near Multan Road in Iqbal Town?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes, we deliver to offices and businesses along the Multan Road side of Iqbal Town — client thank-yous, staff farewells and corporate event flowers are regular orders. Share the building or plaza name with your floor number.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">WhatsApp par Iqbal Town ke liye order kaise karun?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">0310-4225974 par likhein — masalan “Iqbal Town Karim Block me birthday ke liye imported gulab ka guldasta aur cake chahiye, shaam 5 baje tak.” Hum apko WhatsApp par phoolon ki photo bhej kar confirm karenge, phir rider rawana hoga. Cash on delivery, JazzCash, EasyPaisa, bank transfer aur international cards sab chalte hain.</p>
          </div>
        </div>
      </section>

      {/* How Ordering Works */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Package className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">How ordering works in Iqbal Town</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Ordering to Allama Iqbal Town is straightforward — here is what happens after you message us:
        </p>
        <ol className="space-y-3 text-xs text-[#2A2A2A] leading-relaxed list-decimal list-inside">
          <li><strong>Tell us what you need.</strong> Browse the bouquets below or message <strong>0310-4225974</strong> on WhatsApp (open 9 AM–1 AM daily) with your block, street and house number — or your Moon Market shop details — plus the occasion and your budget. Our florists will suggest fresh options starting at Rs. 1,180.</li>
          <li><strong>Approve the photo.</strong> We tie your bouquet fresh and send you a photo on WhatsApp before the rider leaves. Nothing ships until you reply that it looks perfect — ask for tweaks and we redo it.</li>
          <li><strong>Pay your way and receive.</strong> Pay cash on delivery, JazzCash, EasyPaisa, bank transfer or an international card. The rider reaches your Iqbal Town address within 2–3 hours for the Rs. 300 flat fee — or in the midnight slot.</li>
        </ol>
      </section>

      {/* Popular Bouquets in Iqbal Town */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Most ordered bouquets in Iqbal Town Lahore</span>
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
          <Link href="/delivery-areas/faisal-town" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Faisal Town →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 300 • 2–3 hours. Blocks near Johar Town.</p>
          </Link>
          <Link href="/delivery-areas/thokar-niaz-baig" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Thokar Niaz Baig →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 300 • 2–3 hours. Interchange &amp; M-2 link.</p>
          </Link>
          <Link href="/delivery-areas/johar-town" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Johar Town →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 250 • 2–3 hours. G1 Market, Emporium Mall.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
