import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, BUSINESS, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Delivery in Islamabad | Lahore Bouquet",
  },
  description: "Order fresh flower bouquets and gifts in Islamabad from Lahore Bouquet. Explore rose bouquets, birthday flowers and anniversary gifts with convenient online ordering and local delivery.",
  alternates: {
    canonical: `${SITE_URL}/flower-delivery-islamabad`,
  },
  openGraph: {
    title: "Flower Delivery in Islamabad | Lahore Bouquet",
    description: "Fresh flower bouquets and gifts delivered in Islamabad. Rose bouquets, birthday flowers, anniversary gifts — order online.",
    url: `${SITE_URL}/flower-delivery-islamabad`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Flower Delivery in Islamabad | Lahore Bouquet",
      },
    ],
  }
};

const FAQS = [
  {
    q: "Do you deliver flowers in Islamabad?",
    a: "Yes! Lahore Bouquet now delivers fresh flower bouquets across Islamabad through our trusted local partner. Order on WhatsApp (0310-4225974) and your flowers are prepared fresh and delivered to any Islamabad address."
  },
  {
    q: "Which areas of Islamabad do you cover?",
    a: "We deliver across major Islamabad sectors including F-6, F-7, F-8, F-10, G-6, G-9, I-8, E-11, Blue Area, DHA and Bahria Town Islamabad. Message us on WhatsApp to confirm delivery to your specific address."
  },
  {
    q: "Is same-day flower delivery available in Islamabad?",
    a: "Yes, same-day delivery is available for orders placed before the daily cutoff. Delivery timing depends on your sector — our team confirms the exact slot on WhatsApp when you order."
  },
  {
    q: "What are the delivery charges for Islamabad?",
    a: "Delivery charges vary by sector. Contact us on WhatsApp (0310-4225974) with your address for the exact delivery fee — many areas qualify for free delivery on orders above a minimum value."
  },
  {
    q: "Can I order from abroad for delivery in Islamabad?",
    a: "Absolutely. If you live in the UK, USA, Dubai or anywhere outside Pakistan, message us on WhatsApp, pay by international card, approve the bouquet by photo, and we deliver fresh to your loved ones in Islamabad."
  }
];

const AREAS = [
  "F-6", "F-7", "F-8", "F-10", "F-11",
  "G-6", "G-7", "G-9", "G-10",
  "I-8", "I-9", "I-10",
  "E-7", "E-11",
  "Blue Area", "DHA Islamabad", "Bahria Town",
];

export default function FlowerDeliveryIslamabadPage() {
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
    <main className="bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="w-full py-16 px-4 sm:px-6 text-center border-b border-[#E5DED2]">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">
            Now Delivering in the Capital
          </span>
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-[#101012] leading-tight">
            Flower Delivery in Islamabad — Fresh Bouquets & Gifts
          </h1>
          <p className="text-sm sm:text-base text-[#2A2A2A] leading-relaxed">
            Lahore Bouquet now delivers fresh flowers across Islamabad through our trusted local partner.
            Red roses, birthday bouquets, anniversary flowers and gift hampers — prepared fresh and delivered to your door.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              href="/bouquets"
              className="px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors"
            >
              Shop Bouquets →
            </Link>
            <a
              href={whatsappLink("Hi Lahore Bouquet! I want to order flowers for delivery in Islamabad.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#25D366] text-white text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Delivery Areas */}
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2]">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012]">
              Islamabad Delivery Areas
            </h2>
            <p className="text-sm text-[#2A2A2A]">
              We deliver to all major sectors — message us to confirm your address.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {AREAS.map((area) => (
              <span key={area} className="px-4 py-2 rounded-full bg-white border border-[rgba(198,161,91,0.25)] text-xs font-semibold text-[#0B0B0B]">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2]">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012]">
              How Islamabad Delivery Works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] space-y-2">
              <div className="font-bold text-[#8B1E2D]">1. Choose & Order</div>
              <p className="text-[#2A2A2A] leading-relaxed">Browse bouquets online or message us on WhatsApp (0310-4225974) with your choice.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] space-y-2">
              <div className="font-bold text-[#8B1E2D]">2. Photo Approval</div>
              <p className="text-[#2A2A2A] leading-relaxed">Our Islamabad partner prepares your bouquet fresh — you approve by WhatsApp photo.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] space-y-2">
              <div className="font-bold text-[#8B1E2D]">3. Fast Delivery</div>
              <p className="text-[#2A2A2A] leading-relaxed">Delivered to any Islamabad address. Same-day available for orders before cutoff.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            Islamabad Delivery FAQs
          </h2>
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
          <div className="text-center pt-4">
            <p className="text-sm text-[#2A2A2A]">
              Also serving <Link href="/flower-delivery-in-lahore" className="text-[#8B1E2D] underline font-semibold">Lahore</Link> — our home city.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
