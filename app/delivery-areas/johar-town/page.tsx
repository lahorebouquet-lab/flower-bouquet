import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../../components/ProductCard";
import { MapPin, Clock, Camera, MessageCircle, Building2, Wallet, Gift, HelpCircle, Navigation, Package } from "lucide-react";
import { SITE_URL, areaFloristSchema } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Delivery in Johar Town Lahore | Rs. 250, 2–3 Hours",
  },
  description: "Same-day flower delivery across Johar Town Phases 1 & 2, Emporium Mall, G1 Market & Shaukat Khanum Hospital in 2–3 hours. Fee Rs. 250. WhatsApp photo",
  alternates: {
    canonical: `${SITE_URL}/delivery-areas/johar-town`,
  },
  openGraph: {
    title: "Flower Delivery in Johar Town Lahore | Rs. 250, 2–3 Hours",
    description: "Same-day flower delivery across Johar Town Phases 1 & 2, Emporium Mall, G1 Market & Shaukat Khanum Hospital in 2–3 hours. Fee Rs. 250. WhatsApp photo",
    url: `${SITE_URL}/delivery-areas/johar-town`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Flower Delivery in Johar Town Lahore | Rs. 250, 2–3 Hours",
      },
    ],
  }
};

export default async function JoharTownDeliveryPage() {
  const allProducts = await getSanityProducts();
  const popularBouquets = allProducts.slice(2, 6);

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
        name: "Delivery Areas",
        item: `${SITE_URL}/delivery-areas`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Johar Town Lahore",
        item: `${SITE_URL}/delivery-areas/johar-town`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can you deliver get-well-soon flowers to Shaukat Khanum Hospital in Johar Town?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our drivers deliver directly to Shaukat Khanum Memorial Hospital reception and inpatient visitor desks. Please provide the patient's full name and room or ward details, and we will handle the rest the same day.",
        },
      },
      {
        "@type": "Question",
        name: "How fast is delivery to Johar Town Phase 1 and Emporium Mall area?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard delivery takes between 2 to 3 hours via Canal Road and Khayaban-e-Firdousi, with a flat fee of Rs. 250. Urgent express delivery can be arranged on WhatsApp at 0310-4225974.",
        },
      },
      {
        "@type": "Question",
        name: "What is the delivery fee for Johar Town?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A flat Rs. 250 across Johar Town Phases 1 and 2, Faisal Town and the Emporium corridor — including midnight deliveries. No hidden charges.",
        },
      },
      {
        "@type": "Question",
        name: "Do you deliver flowers to offices and events near Expo Centre?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We deliver corporate bouquets, stage flowers and event arrangements to offices and venues around Expo Centre and Khayaban-e-Firdousi. For bulk or event orders, message us on WhatsApp a day ahead so we can schedule the delivery around your program.",
        },
      },
      {
        "@type": "Question",
        name: "Can I pay cash on delivery in Johar Town?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — cash on delivery is available across Johar Town. We also accept JazzCash, EasyPaisa, bank transfer and international cards, so family abroad can pay for a Johar Town delivery directly.",
        },
      },
    ],
  };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/delivery-areas" className="hover:text-[#0B0B0B] transition-colors">Delivery Areas</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Johar Town Lahore</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
          Phases 1 & 2 • G1 Market • Emporium Corridor
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Flower Delivery in Johar Town Lahore
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          We provide fresh flower bouquet delivery across Johar Town Phases 1 and 2, Faisal Town, and adjacent commercial hubs — all for a flat Rs. 250. Whether you need a celebration bouquet delivered near Emporium Mall, an anniversary surprise in Block J or R, or get-well flowers delivered to Shaukat Khanum Hospital or Doctors Hospital, our florists guarantee rapid dispatch and live WhatsApp photo proof before the rider leaves. To order, message 0310-4225974 on WhatsApp any time between 9 AM and 1 AM with your block and street — approve the bouquet photo, then pay by COD, JazzCash, EasyPaisa, bank transfer or international card.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#8B1E2D]" /> 2 to 3 hours • Rs. 250 flat delivery fee</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before dispatch</span>
          <a 
            href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20to%20Johar%20Town%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#8B1E2D] font-semibold hover:text-[#C6A15B]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order to Johar Town on WhatsApp
          </a>
        </div>
      </section>

      {/* Delivery Time & Fee */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Wallet className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Delivery time & fee — Johar Town Lahore</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Delivery fee: Rs. 250 flat</strong> — across Johar Town Phases 1 & 2, Faisal Town, the Emporium corridor and Khayaban-e-Firdousi. No hidden charges.</li>
          <li><strong>Delivery time: 2 to 3 hours</strong>, 7 days a week, from 9 AM to 1 AM, via Canal Road and Khayaban-e-Firdousi.</li>
          <li><strong>Midnight slot:</strong> available every night — message us on WhatsApp by the evening to reserve it.</li>
          <li><strong>Payments:</strong> cash on delivery (COD), JazzCash, EasyPaisa, bank transfer and international cards.</li>
          <li><strong>Prices start at Rs. 1,180.</strong> Call or WhatsApp <strong>0310-4225974</strong> and our Lahore florists will confirm your slot instantly.</li>
        </ul>
      </section>

      {/* Neighborhood Coverage */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Building2 className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Key Johar Town Delivery Zones</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Phase 1 (Blocks A to G):</strong> near G1 Market, the UMT campus and Khayaban-e-Firdousi — student celebrations, convocations and family birthdays.</li>
          <li><strong>Phase 2 (Blocks H to R):</strong> Emporium Mall vicinity, Expo Centre and the residential avenues behind it.</li>
          <li><strong>Hospital deliveries:</strong> Shaukat Khanum Memorial Hospital and Doctors Hospital — our riders know the reception and visitor-desk protocol for get-well flowers.</li>
          <li><strong>Faisal Town & Maulana Shaukat Ali Road:</strong> fast routing for homes and commercial plazas on the Johar Town edge.</li>
          <li><strong>Khayaban-e-Firdousi commercial strip:</strong> offices, clinics and showrooms — corporate bouquets and inauguration flowers.</li>
          <li><strong>Expo Centre surroundings:</strong> event venues and exhibitions; we schedule stage and stall flowers around your program timings.</li>
        </ul>
      </section>

      {/* Popular Occasions */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Gift className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Occasions we deliver for in Johar Town</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Johar Town keeps us busiest with get-well flowers — Shaukat Khanum and Doctors Hospital are on our daily route, and we handle the reception handover with the patient&apos;s name and ward details. Birthdays near Emporium Mall and G1 Market run a close second, followed by UMT convocation bouquets and anniversary surprises in the residential blocks. Bohut se log WhatsApp par likhte hain: “Shaukat Khanum me ami ke liye get-well-soon ka guldasta bhej dein” — hum mareez ka naam aur ward le kar seedha reception par pohcha dete hain. Corporate clients around Expo Centre order event flowers and client thank-yous, and every order carries a free handwritten message card plus WhatsApp photo approval before dispatch.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Johar Town delivery — frequently asked questions</h2>
        </div>
        <div className="divide-y divide-[rgba(198,161,91,0.25)]">
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Can you deliver get-well-soon flowers to Shaukat Khanum Hospital in Johar Town?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes, our drivers deliver directly to Shaukat Khanum Memorial Hospital reception and inpatient visitor desks. Please provide the patient&apos;s full name and room or ward details, and we will handle the rest the same day.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">How fast is delivery to Johar Town Phase 1 and Emporium Mall area?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Standard delivery takes between 2 to 3 hours via Canal Road and Khayaban-e-Firdousi, with a flat fee of Rs. 250. Urgent express delivery can be arranged on WhatsApp at 0310-4225974.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">What is the delivery fee for Johar Town?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">A flat Rs. 250 across Johar Town Phases 1 and 2, Faisal Town and the Emporium corridor — including midnight deliveries. No hidden charges.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Do you deliver flowers to offices and events near Expo Centre?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes. We deliver corporate bouquets, stage flowers and event arrangements to offices and venues around Expo Centre and Khayaban-e-Firdousi. For bulk or event orders, message us on WhatsApp a day ahead so we can schedule the delivery around your program.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Can I pay cash on delivery in Johar Town?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes — cash on delivery is available across Johar Town. We also accept JazzCash, EasyPaisa, bank transfer and international cards, so family abroad can pay for a Johar Town delivery directly.</p>
          </div>
        </div>
      </section>

      {/* How Ordering Works */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Package className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">How ordering works in Johar Town</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Johar Town orders follow a simple three-step routine. Here is what happens after you message us:
        </p>
        <ol className="space-y-3 text-xs text-[#2A2A2A] leading-relaxed list-decimal list-inside">
          <li><strong>Tell us what you need.</strong> Browse the bouquets below or message <strong>0310-4225974</strong> on WhatsApp (open 9 AM–1 AM daily) with your Johar Town block and street, the occasion and your budget. Our florists will suggest fresh options starting at Rs. 1,180 — including which roses and seasonal flowers arrived today.</li>
          <li><strong>Approve the photo.</strong> We tie your bouquet fresh and send you a photo on WhatsApp before the rider leaves. Nothing ships until you reply that it looks perfect — ask for tweaks and we redo it.</li>
          <li><strong>Pay your way and receive.</strong> Pay cash on delivery, JazzCash, EasyPaisa, bank transfer or an international card. The rider reaches your Johar Town block within 2–3 hours for Rs. 250 — or in the midnight slot.</li>
        </ol>
      </section>

      {/* Popular Bouquets in Johar Town */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Popular bouquets ordered in Johar Town</span>
          <Link href="/collections/bouquets" className="text-[#8B1E2D] hover:underline font-semibold">
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
          <Link href="/delivery-areas/model-town" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Model Town →</p>
            <p className="text-xs text-[#2A2A2A]">FREE delivery • 1.5–2.5 hours. Blocks A–M, Link Road and Garden Town.</p>
          </Link>
          <Link href="/delivery-areas/wapda-town" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Wapda Town →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 300 • 2.5–3.5 hours. Wapda Town, PIA Society, Valencia and Township.</p>
          </Link>
          <Link href="/delivery-areas/dha" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">DHA Lahore →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 250 • 2–3 hours. Phases 1–9, Defence Raya and Sector Y.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
