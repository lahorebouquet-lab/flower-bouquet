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
    absolute: "Flower Delivery on Raiwind Road Lahore | FREE delivery, 3–4 hrs",
  },
  description: "Same-day flower delivery along Raiwind Road Lahore — Bahria Orchard, Al Kabir Town, farmhouses & marquees — in 3–4 hours. Delivery FREE delivery.",
  alternates: {
    canonical: `${SITE_URL}/delivery-areas/raiwind-road`,
  },
  openGraph: {
    title: "Flower Delivery on Raiwind Road Lahore | FREE delivery, 3–4 hrs",
    description: "Same-day flower delivery along Raiwind Road Lahore — Bahria Orchard, Al Kabir Town, farmhouses & marquees — in 3–4 hours. Delivery FREE delivery.",
    url: `${SITE_URL}/delivery-areas/raiwind-road`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Flower Delivery on Raiwind Road Lahore | FREE delivery, 3–4 hrs",
      },
    ],
  }
};

const raiwindRoadBreadcrumbSchema = {
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
      name: "Raiwind Road Lahore",
      item: `${SITE_URL}/delivery-areas/raiwind-road`,
    },
  ],
};

const raiwindRoadFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does flower delivery on Raiwind Road take, and what is the fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Delivery along Raiwind Road takes 3 to 4 hours with free delivery. Addresses near the city-side entry and Bhobtian Chowk usually arrive at the faster end; deeper schemes like Bahria Orchard Phase 4 and Al Kabir Town Phase 2 take the full window.",
      },
    },
    {
      "@type": "Question",
      name: "Which housing schemes on Raiwind Road do you deliver to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover Bahria Orchard Phases 1 to 4, Al Kabir Town Phase 1 and 2, Lake City, farmhouses and wedding marquees along the corridor, and societies toward Adda Plot. Sharing your scheme, phase or block, street and house number helps our rider reach you without delay.",
      },
    },
    {
      "@type": "Question",
      name: "Do you deliver flowers to wedding marquees and farmhouses on Raiwind Road?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — Raiwind Road has some of Lahore's busiest wedding marquees, and we regularly deliver nikkah-stage flowers, bridal bouquets, car décor and entryway arrangements to them. In shaadi season, please book a day ahead so your slot is confirmed.",
      },
    },
    {
      "@type": "Question",
      name: "Can I get same-day delivery to Bahria Orchard?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, same-day delivery to Bahria Orchard is available 7 days a week within our 3 to 4 hour window, from 9 AM to 1 AM. For time-critical surprises, including our midnight slot, message us on WhatsApp as early in the day as possible.",
      },
    },
    {
      "@type": "Question",
      name: "WhatsApp par Raiwind Road ke liye order kaise karun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "0310-4225974 par likhein — masalan 'Bahria Orchard Phase 3 me birthday ke liye imported gulab ka guldasta aur cake chahiye, shaam 6 baje tak.' Hum apko WhatsApp par phoolon ki photo bhej kar confirm karenge, phir rider rawana hoga. Cash on delivery, JazzCash, EasyPaisa, bank transfer aur international cards sab chalte hain.",
      },
    },
  ],
};

const areaFlorist = areaFloristSchema("Raiwind Road", `${SITE_URL}/delivery-areas/raiwind-road`);

export default async function RaiwindRoadDeliveryPage() {
  // Sanity CMS first — falls back to static content below if unreachable
  const sanityData = await getSanityAreaPage("raiwind-road");
  if (sanityData) {
    return <NeighborhoodTemplate data={sanityData} />;
  }

  const allProducts = await getSanityProducts();
  const popularBouquets = allProducts.slice(0, 4);

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(raiwindRoadBreadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(raiwindRoadFaqSchema) }}
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
        <span className="text-[#8B1E2D] font-semibold">Raiwind Road Lahore</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
          Road Corridor • Housing Schemes
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Flower Delivery on Raiwind Road Lahore
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Raiwind Road is one of Lahore&apos;s fastest-growing residential corridors, and our riders run it every day — from the city-side entry all the way out to Bahria Orchard and Al Kabir Town. Because the corridor is long, delivery takes 3 to 4 hours with free delivery. Our florists send you a photo on WhatsApp before your bouquet leaves, and we deliver to homes, offices, farmhouses and wedding marquees along the road. To order, WhatsApp 0310-4225974 any time between 9 AM and 1 AM with your scheme and block details — approve the bouquet photo we send, then pay by COD, JazzCash, EasyPaisa, bank transfer or international card.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#8B1E2D]" /> 3 to 4 hours • FREE delivery</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before it leaves</span>
          <a
            href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20to%20Raiwind%20Road%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#8B1E2D] font-semibold hover:text-[#C6A15B]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order to Raiwind Road on WhatsApp
          </a>
        </div>
      </section>

      {/* Delivery Time & Fee */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Wallet className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Delivery time & fee — Raiwind Road Lahore</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Delivery fee: FREE</strong> — anywhere along the Raiwind Road corridor, from the city-side entry to Bahria Orchard, Al Kabir Town and Adda Plot. No hidden charges.</li>
          <li><strong>Delivery time: 3 to 4 hours</strong>, 7 days a week, from 9 AM to 1 AM. Near-side addresses around Bhobtian Chowk are usually fastest; deeper phases take the full window.</li>
          <li><strong>Midnight slot:</strong> 11:30 PM–12:15 AM every night with free delivery — message us on WhatsApp by the evening to reserve it.</li>
          <li><strong>Payments:</strong> cash on delivery (COD), JazzCash, EasyPaisa, bank transfer and international cards.</li>
          <li><strong>Prices start at Rs. 1,180.</strong> Call or WhatsApp <strong>0310-4225974</strong> and our Lahore florists will confirm your slot instantly.</li>
        </ul>
      </section>

      {/* Raiwind Road Coverage */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <AlertCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Areas along Raiwind Road we cover</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Raiwind Road corridor:</strong> from the city-side entry through Bhobtian Chowk and on toward Adda Plot — homes, businesses and commercial strips along the road.</li>
          <li><strong>Bahria Orchard:</strong> Phases 1 to 4 off Raiwind Road — birthday and anniversary bouquets to family homes across all phases.</li>
          <li><strong>Al Kabir Town:</strong> Phase 1 and 2 housing blocks — housewarming arrangements and occasion bouquets for new residents.</li>
          <li><strong>Lake City:</strong> the golf-course community and Downtown commercial — premium bouquets for villas and corporate offices.</li>
          <li><strong>Farmhouses & wedding marquees:</strong> shaadi-season event flowers — nikkah stages, bridal bouquets, car décor and entryway arrangements.</li>
          <li><strong>Societies near Adda Plot:</strong> housing schemes toward the Raiwind side — share your exact scheme and street so our rider finds you easily.</li>
        </ul>
      </section>

      {/* Popular Occasions */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Gift className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Occasions we deliver for on Raiwind Road</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          With so many new housing schemes on Raiwind Road, housewarming arrangements and Eid hampers are among our most ordered gifts here — families settling into Bahria Orchard and Al Kabir Town love sending fresh flowers to new neighbours. Birthdays and anniversaries bring imported rose bouquets and money bouquets with cakes, while shaadi season keeps our event team busy at the corridor&apos;s marquees with stage flowers and car décor. Corporate clients in Lake City&apos;s commercial pockets order client thank-yous and inauguration stands. Whatever the occasion, your bouquet is photographed on WhatsApp before dispatch, so what arrives is exactly what you approved — with a free handwritten message card in every order.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Raiwind Road delivery — frequently asked questions</h2>
        </div>
        <div className="divide-y divide-[rgba(198,161,91,0.25)]">
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">How long does flower delivery on Raiwind Road take, and what is the fee?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Delivery along Raiwind Road takes 3 to 4 hours with free delivery. Addresses near the city-side entry and Bhobtian Chowk usually arrive at the faster end; deeper schemes like Bahria Orchard Phase 4 and Al Kabir Town Phase 2 take the full window.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Which housing schemes on Raiwind Road do you deliver to?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">We cover Bahria Orchard Phases 1 to 4, Al Kabir Town Phase 1 and 2, Lake City, farmhouses and wedding marquees along the corridor, and societies toward Adda Plot. Sharing your scheme, phase or block, street and house number helps our rider reach you without delay.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Do you deliver flowers to wedding marquees and farmhouses on Raiwind Road?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes — Raiwind Road has some of Lahore&apos;s busiest wedding marquees, and we regularly deliver nikkah-stage flowers, bridal bouquets, car décor and entryway arrangements to them. In shaadi season, please book a day ahead so your slot is confirmed.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Can I get same-day delivery to Bahria Orchard?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes, same-day delivery to Bahria Orchard is available 7 days a week within our 3 to 4 hour window, from 9 AM to 1 AM. For time-critical surprises, including our midnight slot, message us on WhatsApp as early in the day as possible.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">WhatsApp par Raiwind Road ke liye order kaise karun?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">0310-4225974 par likhein — masalan “Bahria Orchard Phase 3 me birthday ke liye imported gulab ka guldasta aur cake chahiye, shaam 6 baje tak.” Hum apko WhatsApp par phoolon ki photo bhej kar confirm karenge, phir rider rawana hoga. Cash on delivery, JazzCash, EasyPaisa, bank transfer aur international cards sab chalte hain.</p>
          </div>
        </div>
      </section>

      {/* How Ordering Works */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Package className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">How ordering works on Raiwind Road</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Ordering to the Raiwind Road corridor is straightforward — here is what happens after you message us:
        </p>
        <ol className="space-y-3 text-xs text-[#2A2A2A] leading-relaxed list-decimal list-inside">
          <li><strong>Tell us what you need.</strong> Browse the bouquets below or message <strong>0310-4225974</strong> on WhatsApp (open 9 AM–1 AM daily) with your scheme, phase or block, street and house number, the occasion and your budget. Our florists will suggest fresh options starting at Rs. 1,180 — including which roses and seasonal flowers arrived today.</li>
          <li><strong>Approve the photo.</strong> We tie your bouquet fresh and send you a photo on WhatsApp before the rider leaves. Nothing ships until you reply that it looks perfect — ask for tweaks and we redo it.</li>
          <li><strong>Pay your way and receive.</strong> Pay cash on delivery, JazzCash, EasyPaisa, bank transfer or an international card. The rider reaches your Raiwind Road address within 3–4 hours for the FREE fee — or in the midnight slot.</li>
        </ol>
      </section>

      {/* Popular Bouquets on Raiwind Road */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Most ordered bouquets on Raiwind Road Lahore</span>
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
          <Link href="/delivery-areas/bahria-orchard" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Bahria Orchard →</p>
            <p className="text-xs text-[#2A2A2A]">FREE • 3–4 hours. Phases 1–4 off Raiwind Road.</p>
          </Link>
          <Link href="/delivery-areas/al-kabir-town" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Al Kabir Town →</p>
            <p className="text-xs text-[#2A2A2A]">FREE • 3–4 hours. Phase 1 &amp; 2 near Raiwind Road.</p>
          </Link>
          <Link href="/delivery-areas/lake-city" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Lake City →</p>
            <p className="text-xs text-[#2A2A2A]">FREE • 3–4 hours. Golf course &amp; Downtown commercial.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
