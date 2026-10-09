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
    absolute: "Flower Delivery in Faisal Town Lahore | FREE delivery, 2–3 hrs",
  },
  description: "Same-day flower delivery to Faisal Town Lahore — residential blocks, near Johar Town & Shaukat Khanum — in 2–3 hours. Delivery FREE delivery.",
  alternates: {
    canonical: `${SITE_URL}/delivery-areas/faisal-town`,
  },
  openGraph: {
    title: "Flower Delivery in Faisal Town Lahore | FREE delivery, 2–3 hrs",
    description: "Same-day flower delivery to Faisal Town Lahore — residential blocks, near Johar Town & Shaukat Khanum — in 2–3 hours. Delivery FREE delivery.",
    url: `${SITE_URL}/delivery-areas/faisal-town`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Flower Delivery in Faisal Town Lahore | FREE delivery, 2–3 hrs",
      },
    ],
  }
};

const faisalTownBreadcrumbSchema = {
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
      name: "Faisal Town Lahore",
      item: `${SITE_URL}/delivery-areas/faisal-town`,
    },
  ],
};

const faisalTownFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does flower delivery to Faisal Town take, and what is the fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Delivery to Faisal Town takes 2 to 3 hours with free delivery. Blocks near the Johar Town side arrive at the faster end; orders deeper into the scheme take the full window during peak traffic.",
      },
    },
    {
      "@type": "Question",
      name: "Which blocks of Faisal Town do you deliver to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all residential blocks of Faisal Town. Sharing your block, street and house number helps our rider reach you without delay — several streets repeat house numbering, so the block name matters.",
      },
    },
    {
      "@type": "Question",
      name: "Do you deliver get-well flowers to Shaukat Khanum Hospital?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we regularly deliver fresh get-well flowers and hampers to Shaukat Khanum Memorial Cancer Hospital near Faisal Town. Please provide the patient's name along with the ward and room number.",
      },
    },
    {
      "@type": "Question",
      name: "Can I order flowers for an office or business near Johar Town from Faisal Town's page?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Faisal Town sits right beside Johar Town, so we also deliver to offices and businesses on the Johar Town side: client thank-yous, inauguration flowers and corporate bouquets. Share the building or plaza name with your floor number.",
      },
    },
    {
      "@type": "Question",
      name: "WhatsApp par Faisal Town ke liye order kaise karun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "0310-4225974 par likhein — masalan 'Faisal Town me anniversary ke liye imported gulab ka guldasta aur cake chahiye, raat 7 baje tak.' Hum apko WhatsApp par phoolon ki photo bhej kar confirm karenge, phir rider rawana hoga. Cash on delivery, JazzCash, EasyPaisa, bank transfer aur international cards sab chalte hain.",
      },
    },
  ],
};

const areaFlorist = areaFloristSchema("Faisal Town", `${SITE_URL}/delivery-areas/faisal-town`);

export default async function FaisalTownDeliveryPage() {
  // Sanity CMS first — falls back to static content below if unreachable
  const sanityData = await getSanityAreaPage("faisal-town");
  if (sanityData) {
    return <NeighborhoodTemplate data={sanityData} />;
  }

  const allProducts = await getSanityProducts();
  const popularBouquets = allProducts.slice(0, 4);

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faisalTownBreadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faisalTownFaqSchema) }}
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
        <span className="text-[#8B1E2D] font-semibold">Faisal Town Lahore</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
          Residential Blocks • Near Johar Town
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Flower Delivery in Faisal Town Lahore
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Faisal Town is a well-established residential scheme tucked between Johar Town and the Multan Road corridor, and our riders run its blocks every day. Delivery takes 2 to 3 hours with free delivery. Our florists send you a photo on WhatsApp before your bouquet leaves, and we deliver to homes, offices and to Shaukat Khanum Memorial Cancer Hospital nearby. To order, WhatsApp 0310-4225974 any time between 9 AM and 1 AM with your block and street details — approve the bouquet photo we send, then pay by COD, JazzCash, EasyPaisa, bank transfer or international card.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#8B1E2D]" /> 2 to 3 hours • FREE delivery</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before it leaves</span>
          <a
            href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20to%20Faisal%20Town%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#8B1E2D] font-semibold hover:text-[#C6A15B]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order to Faisal Town on WhatsApp
          </a>
        </div>
      </section>

      {/* Delivery Time & Fee */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Wallet className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Delivery time & fee — Faisal Town Lahore</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Delivery fee: FREE</strong> — across all residential blocks of Faisal Town and the nearby Johar Town side. No hidden charges.</li>
          <li><strong>Delivery time: 2 to 3 hours</strong>, 7 days a week, from 9 AM to 1 AM. Blocks near the Johar Town side are usually fastest; deeper streets take the full window.</li>
          <li><strong>Midnight slot:</strong> 11:30 PM–12:15 AM every night with free delivery — message us on WhatsApp by the evening to reserve it.</li>
          <li><strong>Payments:</strong> cash on delivery (COD), JazzCash, EasyPaisa, bank transfer and international cards.</li>
          <li><strong>Prices start at Rs. 1,239.</strong> Call or WhatsApp <strong>0310-4225974</strong> and our Lahore florists will confirm your slot instantly.</li>
        </ul>
      </section>

      {/* Faisal Town Coverage */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <AlertCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Blocks & areas in Faisal Town we cover</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Faisal Town residential blocks:</strong> all blocks across the scheme — birthday and anniversary bouquets to family homes.</li>
          <li><strong>Johar Town side:</strong> streets bordering Johar Town — the same 2–3 hour free-delivery service for homes and offices.</li>
          <li><strong>Shaukat Khanum Hospital:</strong> get-well flowers and hampers to Shaukat Khanum Memorial Cancer Hospital — share the patient&apos;s ward and room number.</li>
          <li><strong>Multan Road side:</strong> businesses and housing toward Multan Road — inauguration flowers and corporate orders.</li>
          <li><strong>Near Iqbal Town:</strong> blocks on the Iqbal Town side — housewarming arrangements and occasion gifts.</li>
          <li><strong>Near Thokar Niaz Baig:</strong> streets toward the Thokar side — welcome-home surprises and scheduled deliveries.</li>
        </ul>
      </section>

      {/* Popular Occasions */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Gift className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Occasions we deliver for in Faisal Town</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Faisal Town orders lean family-first — birthday bouquets and anniversary roses to homes across the blocks, and Eid hampers that travel between relatives in the scheme. Our get-well deliveries to Shaukat Khanum are a regular, sensitive service: soft-coloured lilies and cheerful mixed bouquets with hampers, handled with care. The Johar Town-side offices order client thank-yous and inauguration flowers, while shaadi season brings nikkah gifts and bridal bouquets. And for birthdays that strike at midnight, our late-night slot is always ready. Whatever the occasion, your bouquet is photographed on WhatsApp before dispatch, so what arrives is exactly what you approved — with a free handwritten message card in every order.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Faisal Town delivery — frequently asked questions</h2>
        </div>
        <div className="divide-y divide-[rgba(198,161,91,0.25)]">
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">How long does flower delivery to Faisal Town take, and what is the fee?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Delivery to Faisal Town takes 2 to 3 hours with free delivery. Blocks near the Johar Town side arrive at the faster end; orders deeper into the scheme take the full window during peak traffic.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Which blocks of Faisal Town do you deliver to?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">We cover all residential blocks of Faisal Town. Sharing your block, street and house number helps our rider reach you without delay — several streets repeat house numbering, so the block name matters.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Do you deliver get-well flowers to Shaukat Khanum Hospital?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes, we regularly deliver fresh get-well flowers and hampers to Shaukat Khanum Memorial Cancer Hospital near Faisal Town. Please provide the patient&apos;s name along with the ward and room number.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Can I order flowers for an office or business near Johar Town from Faisal Town&apos;s page?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes — Faisal Town sits right beside Johar Town, so we also deliver to offices and businesses on the Johar Town side: client thank-yous, inauguration flowers and corporate bouquets. Share the building or plaza name with your floor number.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">WhatsApp par Faisal Town ke liye order kaise karun?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">0310-4225974 par likhein — masalan “Faisal Town me anniversary ke liye imported gulab ka guldasta aur cake chahiye, raat 7 baje tak.” Hum apko WhatsApp par phoolon ki photo bhej kar confirm karenge, phir rider rawana hoga. Cash on delivery, JazzCash, EasyPaisa, bank transfer aur international cards sab chalte hain.</p>
          </div>
        </div>
      </section>

      {/* How Ordering Works */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Package className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">How ordering works in Faisal Town</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Ordering to Faisal Town is straightforward — here is what happens after you message us:
        </p>
        <ol className="space-y-3 text-xs text-[#2A2A2A] leading-relaxed list-decimal list-inside">
          <li><strong>Tell us what you need.</strong> Browse the bouquets below or message <strong>0310-4225974</strong> on WhatsApp (open 9 AM–1 AM daily) with your block, street and house number, the occasion and your budget. Our florists will suggest fresh options starting at Rs. 1,239 — including which roses and seasonal flowers arrived today.</li>
          <li><strong>Approve the photo.</strong> We tie your bouquet fresh and send you a photo on WhatsApp before the rider leaves. Nothing ships until you reply that it looks perfect — ask for tweaks and we redo it.</li>
          <li><strong>Pay your way and receive.</strong> Pay cash on delivery, JazzCash, EasyPaisa, bank transfer or an international card. The rider reaches your Faisal Town address within 2–3 hours for the FREE fee — or in the midnight slot.</li>
        </ol>
      </section>

      {/* Popular Bouquets in Faisal Town */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Most ordered bouquets in Faisal Town Lahore</span>
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
          <Link href="/delivery-areas/iqbal-town" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Iqbal Town →</p>
            <p className="text-xs text-[#2A2A2A]">FREE • 2–3 hours. Moon Market, blocks.</p>
          </Link>
          <Link href="/delivery-areas/johar-town" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Johar Town →</p>
            <p className="text-xs text-[#2A2A2A]">FREE • 2–3 hours. G1 Market, Emporium Mall.</p>
          </Link>
          <Link href="/delivery-areas/thokar-niaz-baig" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Thokar Niaz Baig →</p>
            <p className="text-xs text-[#2A2A2A]">FREE • 2–3 hours. Interchange &amp; M-2 link.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
