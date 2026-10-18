import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, BUSINESS, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Delivery in Islamabad | Same-Day Bouquets – Lahore Bouquet",
  },
  description: "Order fresh flower bouquets in Islamabad for birthdays, anniversaries and special occasions. Explore roses, gifts and local delivery options from Lahore Bouquet. Order online or via WhatsApp.",
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
    a: "We deliver across all major Islamabad sectors: F-6, F-7, F-8, F-10, F-11, G-6, G-7, G-9, G-10, I-8, I-9, I-10, E-7, E-11, Blue Area, DHA Islamabad and Bahria Town. Message us on WhatsApp to confirm delivery to your specific address."
  },
  {
    q: "Is same-day flower delivery available in Islamabad?",
    a: "Yes! Order and your flowers are delivered the same day within 2 to 5 hours across Islamabad. Our local partner prepares every bouquet fresh — you approve by WhatsApp photo before dispatch."
  },
  {
    q: "What are the delivery charges for Islamabad?",
    a: "Delivery is free across Islamabad! Order on WhatsApp (0310-4225974) with your address and we will confirm your 2 to 5 hour delivery slot."
  },
  {
    q: "Can I order from abroad for delivery in Islamabad?",
    a: "Absolutely. If you live in the UK, USA, Dubai or anywhere outside Pakistan, message us on WhatsApp, pay by international card, approve the bouquet by photo, and we deliver fresh to your loved ones in Islamabad."
  },
  {
    q: "How much do flower bouquets cost in Islamabad?",
    a: "Our Islamabad prices match our Lahore menu: cheerful mixed bouquets from Rs. 1,699, premium red rose bouquets from Rs. 2,999, sunflower bunches from Rs. 1,699, and chocolate bouquets from Rs. 3,800. Message us on WhatsApp for the full catalogue with photos."
  },
  {
    q: "Do you deliver to offices and hospitals in Islamabad?",
    a: "Yes! We deliver to homes, offices, hospitals, universities and hotels across Islamabad. Just share the complete address with building name, floor or room number on WhatsApp and we will handle the rest."
  },
  {
    q: "Can I get birthday flowers delivered in Islamabad?",
    a: "Of course! Birthday bouquets are our most popular Islamabad order. Add a cake, helium balloons or a teddy bear for the complete surprise. Order a few hours ahead and we deliver the same day within 2 to 5 hours."
  },
  {
    q: "Do you offer anniversary flowers in Islamabad?",
    a: "Yes — red rose bouquets, elegant lily arrangements and romantic mixed bouquets for anniversaries, all delivered fresh across Islamabad with free delivery and WhatsApp photo approval."
  },
  {
    q: "What makes Lahore Bouquet different from other Islamabad florists?",
    a: "Three things: (1) WhatsApp photo approval — you see your exact bouquet before the rider leaves, (2) free delivery across all Islamabad sectors, and (3) same-day 2 to 5 hour delivery. No surprises, no hidden charges."
  },
  {
    q: "Do you deliver on Sundays and public holidays in Islamabad?",
    a: "Yes, we deliver 7 days a week including Sundays and public holidays. For Eid, Valentine's Day and Mother's Day, we recommend ordering 1–2 days ahead as these are our busiest days."
  },
  {
    q: "Can I customize my bouquet for Islamabad delivery?",
    a: "Yes! Tell us your budget, favourite colours and occasion on WhatsApp, and our florist will create a custom bouquet. You approve the final design by photo before it is dispatched."
  },
  {
    q: "Do you deliver wedding flowers and bridal bouquets in Islamabad?",
    a: "Yes! We create bridal bouquets, gajray, corsages and wedding car decoration for Islamabad weddings through our local partner. Share your event date on WhatsApp for a free quote — book 1–2 weeks ahead for weddings."
  },
  {
    q: "What if the flowers arrive damaged?",
    a: "Fresh flowers are perishable, but if your bouquet arrives damaged, share a photo on WhatsApp within 24 hours and we will replace it or refund your order. Your satisfaction is guaranteed."
  },
  {
    q: "How do I pay for Islamabad flower delivery?",
    a: "We accept bank transfer, JazzCash and EasyPaisa. For customers ordering from abroad (UK, USA, UAE), we accept international cards. Payment details are shared on WhatsApp after you confirm your order."
  }
];

const AREAS = [
  { label: "F-6", slug: "f-6-islamabad" },
  { label: "F-7", slug: "f-7-islamabad" },
  { label: "F-8", slug: "f-8-islamabad" },
  { label: "F-10", slug: "f-10-islamabad" },
  { label: "F-11", slug: "f-11-islamabad" },
  { label: "G-6", slug: "g-6-islamabad" },
  { label: "G-7", slug: "g-7-islamabad" },
  { label: "G-9", slug: "g-9-islamabad" },
  { label: "G-10", slug: "g-10-islamabad" },
  { label: "I-8", slug: "i-8-islamabad" },
  { label: "I-9", slug: "i-9-islamabad" },
  { label: "I-10", slug: "i-10-islamabad" },
  { label: "E-7", slug: "e-7-islamabad" },
  { label: "E-11", slug: "e-11-islamabad" },
  { label: "Blue Area", slug: "blue-area-islamabad" },
  { label: "DHA Islamabad", slug: "dha-islamabad" },
  { label: "Bahria Town", slug: "bahria-town-islamabad" },
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

      {/* Price Guide */}
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2]">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-2">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012]">
              Islamabad Flower Prices 2026
            </h2>
            <p className="text-sm text-[#2A2A2A]">
              Same menu, same prices as Lahore — with free Islamabad delivery.
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#0B0B0B] text-white">
                  <th className="p-3 text-left">Bouquet Type</th>
                  <th className="p-3 text-left">Starting Price</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#E5DED2]">
                  <td className="p-3">Mixed seasonal bouquet</td>
                  <td className="p-3 font-bold text-[#8B1E2D]">Rs. 1,699</td>
                </tr>
                <tr className="border-b border-[#E5DED2] bg-white">
                  <td className="p-3">Red rose bouquet (24 roses)</td>
                  <td className="p-3 font-bold text-[#8B1E2D]">Rs. 2,999</td>
                </tr>
                <tr className="border-b border-[#E5DED2]">
                  <td className="p-3">Sunflower bunch</td>
                  <td className="p-3 font-bold text-[#8B1E2D]">Rs. 1,699</td>
                </tr>
                <tr className="border-b border-[#E5DED2] bg-white">
                  <td className="p-3">Chocolate bouquet</td>
                  <td className="p-3 font-bold text-[#8B1E2D]">Rs. 3,800</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3">Money bouquet</td>
                  <td className="p-3 font-bold text-[#8B1E2D]">Rs. 4,999</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012]">
              Why Islamabad Chooses Lahore Bouquet
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
            <div className="p-6 rounded-2xl bg-[#F8F3EA] border border-[rgba(198,161,91,0.25)] space-y-2">
              <div className="font-bold text-[#8B1E2D]">📸 Photo Before Dispatch</div>
              <p className="text-[#2A2A2A] leading-relaxed">You approve your exact bouquet on WhatsApp before our rider leaves. What you see is what they get — no surprises.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#F8F3EA] border border-[rgba(198,161,91,0.25)] space-y-2">
              <div className="font-bold text-[#8B1E2D]">🚚 Free Same-Day Delivery</div>
              <p className="text-[#2A2A2A] leading-relaxed">Free delivery across all Islamabad sectors, delivered within 2 to 5 hours. No hidden charges, no minimum order games.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#F8F3EA] border border-[rgba(198,161,91,0.25)] space-y-2">
              <div className="font-bold text-[#8B1E2D]">🌍 Order From Anywhere</div>
              <p className="text-[#2A2A2A] leading-relaxed">Living in the UK, USA or Dubai? Pay by international card, approve by photo, and surprise your loved ones in Islamabad.</p>
            </div>
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
              <Link
                key={area.slug}
                href={`/flower-delivery-islamabad/${area.slug}`}
                className="px-4 py-2 rounded-full bg-white border border-[rgba(198,161,91,0.25)] text-xs font-semibold text-[#0B0B0B] hover:border-[#8B1E2D] hover:text-[#8B1E2D] transition-colors"
              >
                {area.label}
              </Link>
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
              <p className="text-[#2A2A2A] leading-relaxed">Same-day delivery within 2 to 5 hours to any Islamabad address.</p>
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
