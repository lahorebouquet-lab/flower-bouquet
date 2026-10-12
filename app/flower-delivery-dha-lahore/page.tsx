import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Flower2, Sparkles, MoonStar, MessageCircle, Truck, Camera, Heart, MapPin } from "lucide-react";
import { SITE_URL, whatsappLink } from "@/lib/business";
import RelatedProducts from "../components/RelatedProducts";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Delivery in DHA Lahore | Same-Day Bouquets",
  },
  description: "Order flowers online in DHA Lahore — fresh bouquets from Rs. 349 with free same-day delivery across DHA Phase 1-9, delivered in 2-5 hours.",
  alternates: {
    canonical: `${SITE_URL}/flower-delivery-dha-lahore`,
  },
  openGraph: {
    title: "Flower Delivery in DHA Lahore | Same-Day Bouquets",
    description: "Fresh bouquets delivered same-day across DHA Lahore. Free delivery, photo approval on WhatsApp.",
    url: `${SITE_URL}/flower-delivery-dha-lahore`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Flower delivery in DHA Lahore — fresh bouquets",
      },
    ],
  }
};

const FAQS = [
  {
    q: "Do you deliver flowers in DHA Lahore on the same day?",
    a: "Yes. We deliver fresh bouquets the same day across all DHA phases (1–9) in Lahore. Order before our daily cutoff and your flowers arrive within 2–5 hours. Delivery is free across DHA."
  },
  {
    q: "What is the price of a flower bouquet in DHA Lahore?",
    a: "Our bouquets start at Rs. 349. A classic red rose bouquet is our most popular order in DHA. Message us on WhatsApp (0310-4225974) for today's exact prices and availability."
  },
  {
    q: "Which DHA phases do you deliver to?",
    a: "We deliver to all DHA phases in Lahore — Phase 1, 2, 3, 4, 5, 6, 7, 8, 9 and DHA Rahbar. Same-day delivery, free of charge."
  },
  {
    q: "Can I send flowers to DHA Lahore from abroad?",
    a: "Absolutely. We regularly deliver for overseas Pakistanis in the UK, USA, UAE and Canada. Pay by international card, approve the bouquet photo on WhatsApp, and we handle the DHA delivery."
  },
  {
    q: "Do you offer midnight flower delivery in DHA?",
    a: "Yes — surprise midnight delivery is available in DHA Lahore for birthdays and anniversaries. Book at least a day in advance on WhatsApp (0310-4225974) to reserve your slot."
  }
];

const AREAS = [
  "DHA Phase 1", "DHA Phase 2", "DHA Phase 3", "DHA Phase 4",
  "DHA Phase 5", "DHA Phase 6", "DHA Phase 7", "DHA Phase 8",
  "DHA Phase 9", "DHA Rahbar", "DHA EME Sector",
];

export default function FlowerDeliveryDhaLahorePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
      { "@type": "ListItem", position: 2, name: "Flower Delivery in DHA Lahore", item: `${SITE_URL}/flower-delivery-dha-lahore` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Flower Delivery in DHA Lahore</span>
      </nav>

      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
          DHA Lahore • Free Same-Day Delivery
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Flower Delivery in DHA Lahore — Fresh Bouquets, Same Day
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Looking for <strong>flower delivery in DHA Lahore</strong>? Lahore Bouquet delivers fresh, hand-tied bouquets across every DHA phase — from classic red rose bouquets starting at Rs. 349 to premium mixed arrangements. Order before our daily cutoff and your flowers arrive within <strong>2–5 hours</strong>, with a real photo sent to your WhatsApp for approval before dispatch. Delivery is <strong>free</strong> across all DHA phases, and we also handle midnight surprise deliveries for birthdays and anniversaries.
        </p>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Whether it's a birthday in DHA Phase 5, an anniversary in DHA Phase 6, or a get-well bouquet in DHA Rahbar — our florists prepare every order fresh on the day of delivery. We serve homes, offices, hospitals and event venues across DHA, and overseas Pakistanis in the UK, USA, UAE and Canada regularly use us to send flowers to family in DHA Lahore.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#8B1E2D]" /> Same-day 2–5 hour delivery</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo approval on WhatsApp first</span>
          <span className="flex items-center gap-1.5"><MoonStar className="w-4 h-4 text-[#8B1E2D]" /> Midnight delivery available</span>
        </div>
      </section>

      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">DHA Areas We Deliver To</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {AREAS.map((a) => (
            <span key={a} className="px-3 py-1.5 rounded-full bg-[#F8F3EA] border border-[rgba(198,161,91,0.35)] text-xs font-medium text-[#2A2A2A]">{a}</span>
          ))}
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Free same-day delivery across all listed DHA areas. Also serving <Link href="/flower-delivery-in-lahore" className="text-[#8B1E2D] underline">all of Lahore</Link> including <Link href="/flower-delivery-gulberg-lahore" className="text-[#8B1E2D] underline">Gulberg</Link>, <Link href="/flower-delivery-model-town-lahore" className="text-[#8B1E2D] underline">Model Town</Link> and <Link href="/flower-delivery-bahria-town-lahore" className="text-[#8B1E2D] underline">Bahria Town</Link>.
        </p>
      </section>

      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Perfect for Every DHA Occasion</h2>
        </div>
        <ul className="space-y-2 text-xs sm:text-sm text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Birthdays:</strong> vibrant mixed bouquets with a personalized card — delivered to homes and offices across DHA.</li>
          <li><strong>Anniversaries:</strong> romantic red rose bouquets with midnight delivery surprise options.</li>
          <li><strong>Weddings & Nikkah:</strong> bridal bouquets, <Link href="/gajray-lahore" className="text-[#8B1E2D] underline">fresh gajray</Link> and <Link href="/flower-jewellery-lahore" className="text-[#8B1E2D] underline">flower jewellery</Link> for DHA events.</li>
          <li><strong>Corporate:</strong> office arrangements and event florals for DHA businesses.</li>
        </ul>
      </section>

      <section className="p-6 sm:p-8 rounded-2xl bg-[#0B0B0B] border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-white">How to Order in 3 Steps</h2>
        <ol className="space-y-3 text-xs sm:text-sm text-[#E5DED2] leading-relaxed list-decimal list-inside">
          <li><strong className="text-white">WhatsApp us:</strong> message <strong className="text-[#C6A15B]">0310-4225974</strong> with the bouquet you want and the DHA delivery address.</li>
          <li><strong className="text-white">Approve the photo:</strong> we send a real photo of your bouquet before dispatch — nothing leaves until you approve.</li>
          <li><strong className="text-white">Pay & receive:</strong> pay by COD, JazzCash, EasyPaisa, bank transfer or international card. Same-day delivery in 2–5 hours.</li>
        </ol>
        <a
          href={whatsappLink("Hello Lahore Bouquet! I want flower delivery in DHA Lahore.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors"
        >
          <MessageCircle className="w-4 h-4" /> Order Flowers in DHA on WhatsApp
        </a>
      </section>

      <RelatedProducts title="Popular Bouquets for DHA" count={4} />

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">DHA Flower Delivery FAQs</h2>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <details key={i} className="p-5 rounded-2xl bg-white border border-[#E5DED2] group">
              <summary className="font-bold text-sm text-[#0B0B0B] cursor-pointer list-none flex justify-between items-center gap-2">
                {f.q}
                <span className="text-[#8B1E2D] group-open:rotate-45 transition-transform text-lg leading-none shrink-0">+</span>
              </summary>
              <p className="text-sm mt-2 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="text-xs text-[#777777]">
        <p>Related: <Link href="/flower-delivery-in-lahore" className="text-[#8B1E2D] underline">flower delivery Lahore</Link> • <Link href="/flower-delivery-gulberg-lahore" className="text-[#8B1E2D] underline">Gulberg</Link> • <Link href="/prices" className="text-[#8B1E2D] underline">price list</Link> • <Link href="/valentine-day-flowers-lahore" className="text-[#8B1E2D] underline">Valentine's flowers</Link></p>
      </section>
    </main>
  );
}
