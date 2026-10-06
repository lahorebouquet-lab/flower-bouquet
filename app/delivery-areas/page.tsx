import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Truck, MessageCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { SITE_URL } from "@/lib/business";
import { DELIVERY_AREA_FEES, DELIVERY_POLICY_LINE } from "@/lib/delivery";
import { siteWhatsappLink } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Delivery Areas in Lahore | DHA, Gulberg, Bahria",
  },
  description: "We deliver flowers to DHA, Gulberg, Bahria Town, Model Town, Johar Town, Cantt, Askari and more across Lahore in 2 to 5 hours.",
  alternates: {
    canonical: `${SITE_URL}/delivery-areas`,
  },
  openGraph: {
    title: "Flower Delivery Areas in Lahore | DHA, Gulberg, Bahria",
    description: "We deliver flowers to DHA, Gulberg, Bahria Town, Model Town, Johar Town, Cantt, Askari and more across Lahore in 2 to 5 hours.",
    url: `${SITE_URL}/delivery-areas`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Flower Delivery Areas in Lahore | DHA, Gulberg, Bahria",
      },
    ],
  }
};

export const LAHORE_ZONES = [
  { name: "DHA Lahore (Phases 1 to 9)", time: "2 to 3 hours", slug: "/delivery-areas/dha", highlight: "Phases 1–9, Sector Y, Raya, Phase 5 Commercial" },
  { name: "Gulberg (I, II & III)", time: "30 to 90 mins", slug: "/delivery-areas/gulberg", highlight: "MM Alam Road, Main Boulevard, Mini Market, Liberty" },
  { name: "Bahria Town & Lake City", time: "2.5 to 4 hours", slug: "/delivery-areas/bahria-town", highlight: "Sectors A–F, Safari Villas, Lake City Ring Road" },
  { name: "Model Town & Garden Town", time: "1.5 to 2.5 hours", slug: "/delivery-areas/model-town", highlight: "Blocks A to M, Model Town Link Road, Barkat Market" },
  { name: "Johar Town & Faisal Town", time: "2 to 3 hours", slug: "/delivery-areas/johar-town", highlight: "G1 Market, Shaukat Khanum, Emporium Mall, Kotha Pind" },
  { name: "Cantt & Cavalry Ground", time: "2 to 2.5 hours", slug: "/delivery-areas/cantt", highlight: "Saddar, PAF Colony, Cavalry Commercial, CMH" },
  { name: "Askari Housing (Askari 1 to 11)", time: "2 to 3 hours", slug: "/delivery-areas/askari", highlight: "Askari 1, 5, 9, 10, 11 (Bedian Road)" },
  { name: "Wapda Town & Township", time: "2.5 to 3.5 hours", slug: "/delivery-areas/wapda-town", highlight: "Chaudhary Chowk, College Road, Peco Road" },
  { name: "Lake City Lahore", time: "3 to 4 hours", slug: "/delivery-areas/lake-city", highlight: "Golf Course, Downtown, Ring Road Interchange" },
  { name: "Valencia Town", time: "2.5 to 3.5 hours", slug: "/delivery-areas/valencia-town", highlight: "Main Boulevard, Commercial Market" },
  { name: "EME Society", time: "2.5 to 3.5 hours", slug: "/delivery-areas/eme-society", highlight: "Commercial Area, Multan Road Link" },
  { name: "NFC Society", time: "2.5 to 3.5 hours", slug: "/delivery-areas/nfc", highlight: "NFC Commercial Market, Housing Blocks" },
  { name: "Tariq Gardens", time: "2.5 to 3.5 hours", slug: "/delivery-areas/tariq-gardens", highlight: "Housing Blocks, Multan Road Corridor" },
  { name: "DHA Rahbar", time: "3 to 4 hours", slug: "/delivery-areas/dha-rahbar", highlight: "Sectors, Commercial Area, near Valencia" },
  { name: "Al Kabir Town", time: "3 to 4 hours", slug: "/delivery-areas/al-kabir-town", highlight: "Phase 1 & 2, Raiwind Road" },
  { name: "Bahria Orchard", time: "3 to 4 hours", slug: "/delivery-areas/bahria-orchard", highlight: "Phases 1–4, Raiwind Road" },
  { name: "Raiwind Road", time: "3 to 4 hours", slug: "/delivery-areas/raiwind-road", highlight: "Road Corridor, Housing Schemes" },
  { name: "Thokar Niaz Baig", time: "2 to 3 hours", slug: "/delivery-areas/thokar-niaz-baig", highlight: "Interchange, M-2 Motorway Link" },
  { name: "Iqbal Town", time: "2 to 3 hours", slug: "/delivery-areas/iqbal-town", highlight: "Moon Market, Allama Iqbal Town Blocks" },
  { name: "Faisal Town", time: "2 to 3 hours", slug: "/delivery-areas/faisal-town", highlight: "Residential Blocks, near Johar Town" },
];

export default function DeliveryAreasPage() {
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
    ],
  };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Delivery Areas</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <Truck className="w-3.5 h-3.5 text-[#C6A15B]" />
          Careful, Climate-Protected Delivery
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Flower Delivery Areas in Lahore
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          We deliver across Lahore from our local base. Areas closer to our dispatch points are usually quicker. Tell us the full address and we'll confirm the time.
        </p>
      </section>

      {/* Delivery Policy — single source of truth in lib/delivery.ts */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.35)] shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <Truck className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">
            Delivery Fees
          </h2>
        </div>
        <p className="text-xs text-[#2A2A2A] leading-relaxed">
          {DELIVERY_POLICY_LINE} — no hidden charges. For areas not listed below, the fee is confirmed on WhatsApp before you order.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {DELIVERY_AREA_FEES.map((a) => (
            <div
              key={a.area}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-[#F8F3EA] border border-[#E5DED2] text-xs"
            >
              <span className="text-[#0B0B0B] font-medium">{a.area}</span>
              {a.fee === 0 ? (
                <span className="inline-flex items-center gap-1 text-[#8B1E2D] font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> FREE
                </span>
              ) : (
                <a
                  href={siteWhatsappLink(`Hi Lahore Bouquet! What is the delivery fee for ${a.area}?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#8B1E2D] font-semibold hover:underline"
                >
                  <MessageCircle className="w-3.5 h-3.5" /> Fee on WhatsApp
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Zones Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {LAHORE_ZONES.map((zone, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] space-y-2 hover:border-[#C6A15B] transition-colors shadow-sm"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-playfair font-bold text-[#0B0B0B] text-base">
                {zone.name}
              </h2>
              <span className="text-[11px] font-bold text-[#8B1E2D] bg-[#8B1E2D]/10 px-2.5 py-0.5 rounded-full border border-[#8B1E2D]/20">
                {zone.time}
              </span>
            </div>
            <p className="text-xs text-[#2A2A2A]">
              Key sectors: {zone.highlight}
            </p>
            {zone.slug !== "/delivery-areas" && (
              <div className="pt-2">
                <Link
                  href={zone.slug}
                  className="text-xs text-[#8B1E2D] hover:text-[#C6A15B] font-semibold inline-flex items-center gap-1 transition-colors"
                >
                  <span>View {zone.name} delivery guide</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Not Listed Help Block */}
      <section className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <h3 className="font-playfair text-lg font-bold text-[#0B0B0B]">Your area not listed?</h3>
        <p className="text-xs text-[#2A2A2A] leading-relaxed max-w-2xl">
          Message us on WhatsApp with your exact address or live location pin. We deliver to Raiwind Road, Bahria Orchard, Ferozepur Road, Shahdara, and suburban areas upon advance booking.
        </p>
        <div className="pt-1">
          <a
            href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20Can%20you%20deliver%20to%20my%20address%20in%20Lahore?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8B1E2D] hover:text-[#C6A15B] transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Check your area on WhatsApp →</span>
          </a>
        </div>
      </section>

      {/* Extended Area Coverage List */}
      <section className="p-6 rounded-2xl bg-[#0B0B0B] border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <h3 className="font-playfair text-lg font-bold text-white">More Areas We Deliver Across Lahore</h3>
        <p className="text-xs text-[#BDBDBD] leading-relaxed max-w-2xl">
          Beyond our dedicated delivery guides above, our riders cover these neighbourhoods daily
          within the same 2–5 hour window:
        </p>
        <p className="text-xs text-[#C6A15B] leading-loose">
          Valencia Town · Allama Iqbal Town · Faisal Town · Garden Town · Shadman · Sabzazar ·
          Samanabad · Multan Road · Ferozepur Road · Ravi Road · Mughalpura · Shalimar · Harbanspura ·
          Shahdara · Raiwind Road · Bahria Orchard · Lake City · Wapda Town · NFC · Tariq Gardens ·
          DHA Rahbar · Askari 11 · Paragon City · Divine Gardens
        </p>
      </section>
    </main>
  );
}
