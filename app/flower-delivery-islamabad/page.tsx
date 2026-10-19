import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, whatsappLink } from "@/lib/business";
import { Star, MapPin, Truck, Clock, Camera, Phone, MessageCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Delivery in Islamabad: Same-Day Bouquets | Lahore Bouquet",
  },
  description: "Send fresh flower bouquets in Islamabad with same-day delivery in 2-5 hours. Hand-tied bouquets, red roses, sunflowers & gifts delivered across F-6, F-7, DHA, Bahria Town & more. Order on WhatsApp: 0310-4225974",
  alternates: {
    canonical: `${SITE_URL}/flower-delivery-islamabad`,
  },
  openGraph: {
    title: "Flower Delivery in Islamabad: Same-Day Bouquets | Lahore Bouquet",
    description: "Fresh flower bouquets delivered same-day in 2-5 hours across Islamabad. F-6, F-7, DHA, Bahria Town & more. WhatsApp: 0310-4225974",
    url: `${SITE_URL}/flower-delivery-islamabad`,
    siteName: "Lahore Bouquet",
    type: "website",
    locale: "en_PK",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Flower Delivery in Islamabad: Same-Day Bouquets | Lahore Bouquet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flower Delivery in Islamabad: Same-Day Bouquets | Lahore Bouquet",
    description: "Fresh flower bouquets delivered same-day in 2-5 hours across Islamabad. WhatsApp: 0310-4225974",
    images: [`${SITE_URL}/og-image.jpg`],
  },
};

const FAQS = [
  {
    q: "Do you deliver flowers in Islamabad?",
    a: "Yes. Lahore Bouquet delivers fresh flower bouquets across selected areas of Islamabad through our local delivery partner — including F-6, F-7, F-8, G-11, DHA Islamabad, Bahria Town and more. Share your complete address on WhatsApp (0310-4225974) and we'll confirm availability."
  },
  {
    q: "Is same-day flower delivery available in Islamabad?",
    a: "Yes. Orders are delivered same-day in 2 to 5 hours in covered Islamabad areas. Order early in the day for the fastest delivery."
  },
  {
    q: "How much does flower delivery cost in Islamabad?",
    a: "Delivery is FREE in all listed Islamabad sectors — same as Lahore. Bouquet prices: hand-tied small Rs. 1,239–1,900, medium rose Rs. 2,600–3,800, large signature Dutch rose Rs. 7,499, sunflower from Rs. 1,699, chocolate from Rs. 3,800."
  },
  {
    q: "Can I send flowers to Islamabad from abroad?",
    a: "Yes. Order online from anywhere in the world — UK, USA, UAE — and pay with an international debit/credit card. We deliver fresh flowers the same day in 2 to 5 hours with photo proof on WhatsApp."
  },
  {
    q: "Which areas of Islamabad do you deliver to?",
    a: "We deliver to F-6, F-7, F-8, F-10, F-11, G-6, G-7, G-9, G-10, G-11, G-13, I-8, I-9, I-10, E-7, E-11, D-12, B-17, Blue Area, DHA Islamabad, Bahria Town, Gulberg Greens and Bahria Enclave. If your area isn't listed, message us on WhatsApp to check."
  },
  {
    q: "Can I see the bouquet before it's delivered?",
    a: "Yes. Our florist sends you a real photo of your bouquet on WhatsApp for approval before dispatch — same as Lahore."
  },
  {
    q: "What payment methods do you accept for Islamabad orders?",
    a: "We accept Cash on Delivery (COD), bank transfer (Allied Bank), JazzCash, EasyPaisa, and international debit/credit cards — same as Lahore."
  },
  {
    q: "Do you offer midnight flower delivery in Islamabad?",
    a: "Yes. Midnight surprise delivery slot is 11:30 PM–12:15 AM — same as Lahore. Book early on WhatsApp (0310-4225974) to reserve your slot."
  },
];

const KEPT_AREAS = [
  { label: "F-6", slug: "f-6-islamabad", note: "Margalla Road area — diplomatic enclave nearby" },
  { label: "F-7", slug: "f-7-islamabad", note: "Jinnah Super Market area" },
  { label: "F-8", slug: "f-8-islamabad", note: "Near F-8 Markaz" },
  { label: "G-11", slug: "g-11-islamabad", note: "G-11 Markaz area" },
  { label: "DHA Islamabad", slug: "dha-islamabad", note: "DHA Phase 1-5" },
  { label: "Bahria Town", slug: "bahria-town-islamabad", note: "Bahria Town Rawalpindi/Islamabad" },
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/flower-delivery-islamabad#service`,
    name: "Flower Delivery in Islamabad",
    serviceType: "Flower delivery",
    description: "Fresh flower bouquets delivered same-day in 2-5 hours across selected Islamabad areas.",
    provider: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Lahore Bouquet",
      url: SITE_URL,
      telephone: "+923104225974",
      email: "lahorebouquet@gmail.com",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Islamabad",
        containedInPlace: {
          "@type": "AdministrativeArea",
          name: "Islamabad Capital Territory, Pakistan",
        },
      },
      ...KEPT_AREAS.map((a) => ({
        "@type": "Place" as const,
        name: `${a.label}, Islamabad`,
      })),
    ],
    url: `${SITE_URL}/flower-delivery-islamabad`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
      { "@type": "ListItem", position: 2, name: "Flower Delivery in Islamabad", item: `${SITE_URL}/flower-delivery-islamabad` },
    ],
  };

  return (
    <main className="bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero — direct answer */}
      <section className="w-full py-16 px-4 sm:px-6 text-center border-b border-[#E5DED2]">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-[#101012] leading-tight">
            Flower Delivery in Islamabad – Same-Day in 2-5 Hours
          </h1>
          <p className="text-sm sm:text-base text-[#2A2A2A] leading-relaxed">
            <strong>Lahore Bouquet delivers fresh flower bouquets across Islamabad</strong> through our local delivery partner — covering F-6, F-7, F-8, G-11, DHA Islamabad, Bahria Town and more. <strong>Same-day delivery in 2 to 5 hours.</strong> Order on WhatsApp at <strong>0310-4225974</strong> — share your address and we'll confirm availability and timing.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              href="/bouquets"
              className="px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors"
            >
              Shop Flowers
            </Link>
            <a
              href={whatsappLink("Hi Lahore Bouquet! I want to order flowers for delivery in Islamabad.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Prices for Islamabad */}
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            Prices for Islamabad
          </h2>
          <p className="text-sm text-[#2A2A2A] text-center">
            Same prices as Lahore — no hidden charges. Free delivery in all listed sectors.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F8F3EA]">
                  <th className="border border-[#E5DED2] px-4 py-3 text-left font-bold">Bouquet Type</th>
                  <th className="border border-[#E5DED2] px-4 py-3 text-left font-bold">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#E5DED2] px-4 py-3">Hand-tied small bouquets</td>
                  <td className="border border-[#E5DED2] px-4 py-3">Rs. 1,239 – 1,900</td>
                </tr>
                <tr className="bg-[#F8F3EA]/50">
                  <td className="border border-[#E5DED2] px-4 py-3">Medium rose bouquets</td>
                  <td className="border border-[#E5DED2] px-4 py-3">Rs. 2,600 – 3,800</td>
                </tr>
                <tr>
                  <td className="border border-[#E5DED2] px-4 py-3">Large signature Dutch rose arrangement</td>
                  <td className="border border-[#E5DED2] px-4 py-3">Rs. 7,499</td>
                </tr>
                <tr className="bg-[#F8F3EA]/50">
                  <td className="border border-[#E5DED2] px-4 py-3">Sunflower bouquets</td>
                  <td className="border border-[#E5DED2] px-4 py-3">From Rs. 1,699</td>
                </tr>
                <tr>
                  <td className="border border-[#E5DED2] px-4 py-3">Chocolate bouquets</td>
                  <td className="border border-[#E5DED2] px-4 py-3">From Rs. 3,800</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm">
            <Link href="/prices" className="text-[#8B1E2D] underline font-semibold">See full price guide →</Link>
          </p>
        </div>
      </section>

      {/* Delivery Areas */}
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2]">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012]">
              Flower Delivery Areas in Islamabad
            </h2>
            <p className="text-sm text-[#2A2A2A] max-w-2xl mx-auto leading-relaxed">
              We deliver through our local partner in these Islamabad areas. Same-day delivery in 2 to 5 hours.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {KEPT_AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/flower-delivery-islamabad/${area.slug}`}
                className="p-5 rounded-2xl bg-white border border-[#E5DED2] hover:border-[#8B1E2D] transition-colors"
              >
                <h3 className="font-bold text-[#0B0B0B] flex items-center gap-2">
                  <MapPin size={16} className="text-[#8B1E2D]" /> {area.label}
                </h3>
                <p className="text-xs text-[#636363] mt-1">{area.note}</p>
                <p className="text-xs text-[#8B1E2D] font-semibold mt-2">View delivery info →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            How to Order Flowers in Islamabad
          </h2>
          <ol className="space-y-3 text-sm sm:text-base leading-relaxed list-decimal list-inside">
            <li><strong>Choose your bouquet</strong> — browse our collection or message us on WhatsApp with your budget.</li>
            <li><strong>Share the delivery address</strong> — recipient's name, phone number and complete Islamabad address.</li>
            <li><strong>We confirm</strong> — availability, exact price and delivery time (2-5 hours).</li>
            <li><strong>Pay & receive</strong> — pay via the confirmed method; your flowers arrive fresh the same day.</li>
          </ol>
          <div className="text-center pt-2">
            <a
              href={whatsappLink("Hi Lahore Bouquet! I want to order flowers for Islamabad.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={18} /> Order on WhatsApp: 0310-4225974
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2]">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            Why Order from Lahore Bouquet?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: <Clock size={20} />, text: "Same-day delivery in 2–5 hours across covered Islamabad areas" },
              { icon: <Truck size={20} />, text: "Local delivery partner serving F-6, F-7, DHA, Bahria Town & more" },
              { icon: <Camera size={20} />, text: "Fresh hand-tied bouquets — photo confirmation where available" },
              { icon: <Phone size={20} />, text: "Order from anywhere in the world via WhatsApp: 0310-4225974" },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#E5DED2]">
                <span className="text-[#8B1E2D] mt-0.5">{item.icon}</span>
                <p className="text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012]">
            Customer Reviews
          </h2>
          <p className="text-sm text-[#2A2A2A]">
            Our customers rate us 5 stars:
          </p>
          <div className="flex justify-center gap-1" role="img" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="fill-[#C6A15B] text-[#C6A15B]" />
            ))}
          </div>
          <p className="text-sm italic text-[#2A2A2A] max-w-xl mx-auto">
            "Thank you very much. Your service was professional, and reasonably priced." — Tayyaba
          </p>
          <a
            href="https://g.page/r/CUmgyWPjM_pKEAI/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B1E2D] text-white hover:bg-[#C6A15B] hover:text-[#0B0B0B] font-bold text-xs uppercase tracking-wider transition-all"
          >
            <Star className="w-4 h-4" /> Leave a Google Review
          </a>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <details key={i} className="p-5 rounded-2xl bg-white border border-[#E5DED2] group">
                <summary className="font-bold text-sm text-[#0B0B0B] cursor-pointer list-none flex justify-between items-center gap-2">
                  <span className="flex items-center gap-2"><HelpCircle size={16} className="text-[#8B1E2D] shrink-0" /> {f.q}</span>
                  <span className="text-[#8B1E2D] group-open:rotate-45 transition-transform text-lg leading-none shrink-0">+</span>
                </summary>
                <p className="text-sm mt-2 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
