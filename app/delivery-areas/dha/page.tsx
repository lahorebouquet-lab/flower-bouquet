import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../../components/ProductCard";
import { MapPin, Clock, Camera, MessageCircle, Wallet, Gift, HelpCircle, Navigation, AlertCircle, Package } from "lucide-react";
import { SITE_URL, areaFloristSchema } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Delivery in DHA Lahore | Rs. 250, 2–3 Hours",
  },
  description: "Same-day flower delivery to DHA Lahore Phases 1–9, Defence Raya & Sector Y in 2–3 hours. Delivery fee Rs. 250. Imported roses, money bouquets, cakes & midnight surprises. Photo on WhatsApp first.",
  alternates: {
    canonical: `${SITE_URL}/delivery-areas/dha`,
  },
  openGraph: {
    title: "Flower Delivery in DHA Lahore | Rs. 250, 2–3 Hours",
    description: "Same-day flower delivery to DHA Lahore Phases 1–9, Defence Raya & Sector Y in 2–3 hours. Delivery fee Rs. 250. Imported roses, money bouquets, cakes & midnight surprises. Photo on WhatsApp first.",
    url: `${SITE_URL}/delivery-areas/dha`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Flower Delivery in DHA Lahore | Rs. 250, 2–3 Hours",
      },
    ],
  }
};

const dhaBreadcrumbSchema = {
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
      name: "DHA Lahore",
      item: `${SITE_URL}/delivery-areas/dha`,
    },
  ],
};

const dhaFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does flower delivery to DHA Lahore take, and what is the fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Delivery to DHA Lahore takes 2 to 3 hours with a flat fee of Rs. 250. Orders to Phases 1 to 5 usually arrive at the faster end of the window; Phases 6 to 9, Defence Raya and Sector Y take the full window during peak traffic.",
      },
    },
    {
      "@type": "Question",
      name: "Which DHA phases and sectors do you deliver to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover DHA Phases 1 through 9, DHA Phase 9 Town, Defence Raya and Sector Y commercial. Sharing your exact phase, street and house number helps our rider reach you without delay — many DHA blocks look alike.",
      },
    },
    {
      "@type": "Question",
      name: "My DHA street is gated — how will the rider get in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our riders carry valid CNICs for checkpoint clearance. Share a phone number for your street guard or inform the gate that a Lahore Bouquet courier is arriving, and we will send you the rider's name and number on WhatsApp before dispatch.",
      },
    },
    {
      "@type": "Question",
      name: "Do you deliver get-well flowers to CMH Lahore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we regularly deliver fresh get-well flowers and hampers to Combined Military Hospital (CMH) Lahore. Please provide the patient's name along with the ward and room number.",
      },
    },
    {
      "@type": "Question",
      name: "WhatsApp par DHA ke liye order kaise karun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "0310-4225974 par likhein — masalan 'DHA Phase 6 me anniversary ke liye 50 surkh gulab ka guldasta aur cake chahiye, shaam 7 baje tak.' Hum apko WhatsApp par phoolon ki photo bhej kar confirm karenge, phir rider rawana hoga. Cash on delivery, JazzCash, EasyPaisa, bank transfer aur international cards sab chalte hain.",
      },
    },
  ],
};

const areaFlorist = areaFloristSchema("DHA", `${SITE_URL}/delivery-areas/dha`);

export default async function DHADeliveryPage() {
  const allProducts = await getSanityProducts();
  const popularBouquets = allProducts.slice(0, 4);

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dhaBreadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dhaFaqSchema) }}
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
        <span className="text-[#8B1E2D] font-semibold">DHA Lahore</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
          Phases 1 to 9 • Defence Raya • Sector Y
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Flower Delivery in DHA Lahore
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          DHA is one of our busiest delivery zones, and our riders know its phases, blocks and commercial strips street by street. Most orders reach Phases 1 to 5 within about 2 to 3 hours; for Phases 6 to 9, Defence Raya and Sector Y, allow the full window. Delivery anywhere in DHA costs a flat Rs. 250. Our florists send you a photo on WhatsApp before your bouquet leaves, and we deliver to homes, offices, and to Combined Military Hospital (CMH). To order, WhatsApp 0310-4225974 any time between 9 AM and 1 AM with your phase and street details — approve the bouquet photo we send, then pay by COD, JazzCash, EasyPaisa, bank transfer or international card.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#8B1E2D]" /> 2 to 3 hours • Rs. 250 flat delivery fee</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before it leaves</span>
          <a 
            href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20to%20DHA%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#8B1E2D] font-semibold hover:text-[#C6A15B]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order to DHA on WhatsApp
          </a>
        </div>
      </section>

      {/* Delivery Time & Fee */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Wallet className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Delivery time & fee — DHA Lahore</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Delivery fee: Rs. 250 flat</strong> — across DHA Phases 1 to 9, DHA Phase 9 Town, Defence Raya and Sector Y. No hidden charges.</li>
          <li><strong>Delivery time: 2 to 3 hours</strong>, 7 days a week, from 9 AM to 1 AM. Phases 1–5 are usually fastest; Phases 6–9 and Raya take the full window in peak traffic.</li>
          <li><strong>Midnight slot:</strong> available every night — message us on WhatsApp by the evening to reserve it.</li>
          <li><strong>Payments:</strong> cash on delivery (COD), JazzCash, EasyPaisa, bank transfer and international cards.</li>
          <li><strong>Prices start at Rs. 1,180.</strong> Call or WhatsApp <strong>0310-4225974</strong> and our Lahore florists will confirm your slot instantly.</li>
        </ul>
      </section>

      {/* DHA Coverage */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <AlertCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">DHA phases & sectors we cover</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>DHA Phases 1 & 2:</strong> residential blocks off Ghazi Road and Bedian Road link — birthday and anniversary bouquets to family homes.</li>
          <li><strong>DHA Phases 3, 4 & 5:</strong> the busiest residential belt; our riders run these streets daily, including commercial pockets and schools.</li>
          <li><strong>DHA Phases 6, 7 & 8:</strong> villas, farmhouses and new developments — allow the full 3-hour window during evening traffic.</li>
          <li><strong>DHA Phase 9 & Phase 9 Town:</strong> the newest sectors; share your street number exactly as many blocks are still being mapped.</li>
          <li><strong>Defence Raya & Sector Y:</strong> commercial boulevards, Raya Fairways offices and Sector Y markets — corporate gifting and shop-opening flowers.</li>
          <li><strong>CMH Lahore:</strong> get-well flowers and hampers delivered to Combined Military Hospital — share the patient&apos;s ward and room number.</li>
        </ul>
      </section>

      {/* Popular Occasions */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Gift className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Occasions we deliver for in DHA</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          DHA orders skew premium — imported rose bouquets, money bouquets for milestone birthdays, and anniversary surprises with cakes. Shaadi season brings nikkah-stage flowers, bridal bouquets and car-décor bookings across the phases. Corporate clients in Defence Raya and Sector Y order client thank-yous and office inauguration stands, while families send Eid hampers and housewarming arrangements to new Phase 9 homes. Whatever the occasion, your bouquet is photographed on WhatsApp before dispatch, so what arrives is exactly what you approved — with a free handwritten message card in every order.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">DHA delivery — frequently asked questions</h2>
        </div>
        <div className="divide-y divide-[rgba(198,161,91,0.25)]">
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">How long does flower delivery to DHA Lahore take, and what is the fee?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Delivery to DHA Lahore takes 2 to 3 hours with a flat fee of Rs. 250. Orders to Phases 1 to 5 usually arrive at the faster end of the window; Phases 6 to 9, Defence Raya and Sector Y take the full window during peak traffic.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Which DHA phases and sectors do you deliver to?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">We cover DHA Phases 1 through 9, DHA Phase 9 Town, Defence Raya and Sector Y commercial. Sharing your exact phase, street and house number helps our rider reach you without delay — many DHA blocks look alike.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">My DHA street is gated — how will the rider get in?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Our riders carry valid CNICs for checkpoint clearance. Share a phone number for your street guard or inform the gate that a Lahore Bouquet courier is arriving, and we will send you the rider&apos;s name and number on WhatsApp before dispatch.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Do you deliver get-well flowers to CMH Lahore?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes, we regularly deliver fresh get-well flowers and hampers to Combined Military Hospital (CMH) Lahore. Please provide the patient&apos;s name along with the ward and room number.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">WhatsApp par DHA ke liye order kaise karun?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">0310-4225974 par likhein — masalan “DHA Phase 6 me anniversary ke liye 50 surkh gulab ka guldasta aur cake chahiye, shaam 7 baje tak.” Hum apko WhatsApp par phoolon ki photo bhej kar confirm karenge, phir rider rawana hoga. Cash on delivery, JazzCash, EasyPaisa, bank transfer aur international cards sab chalte hain.</p>
          </div>
        </div>
      </section>

      {/* How Ordering Works */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Package className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">How ordering works in DHA</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          DHA orders run on a simple routine our riders repeat dozens of times a day. Here is what happens after you message us:
        </p>
        <ol className="space-y-3 text-xs text-[#2A2A2A] leading-relaxed list-decimal list-inside">
          <li><strong>Tell us what you need.</strong> Browse the bouquets below or message <strong>0310-4225974</strong> on WhatsApp (open 9 AM–1 AM daily) with your DHA phase, street and house number, the occasion and your budget. Our florists will suggest fresh options starting at Rs. 1,180 — including which roses and seasonal flowers arrived today.</li>
          <li><strong>Approve the photo.</strong> We tie your bouquet fresh and send you a photo on WhatsApp before the rider leaves. Nothing ships until you reply that it looks perfect — ask for tweaks and we redo it.</li>
          <li><strong>Pay your way and receive.</strong> Pay cash on delivery, JazzCash, EasyPaisa, bank transfer or an international card. The rider reaches your DHA phase within 2–3 hours for the Rs. 250 flat fee — or in the midnight slot.</li>
        </ol>
      </section>

      {/* Popular Bouquets in DHA */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Most ordered bouquets in DHA Lahore</span>
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
          <Link href="/delivery-areas/gulberg" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Gulberg →</p>
            <p className="text-xs text-[#2A2A2A]">FREE delivery • 30–90 mins. Gulberg I–III, Liberty, MM Alam Road and Main Boulevard.</p>
          </Link>
          <Link href="/delivery-areas/cantt" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Lahore Cantt →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 250 • 2–2.5 hours. Saddar, Cavalry Ground, PAF Colony and CMH with gate clearance.</p>
          </Link>
          <Link href="/delivery-areas/model-town" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Model Town →</p>
            <p className="text-xs text-[#2A2A2A]">FREE delivery • 1.5–2.5 hours. Blocks A–M, Link Road and Garden Town.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
