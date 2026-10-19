import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, Truck, Clock, Camera, ShieldCheck, MapPin, Star, HelpCircle } from "lucide-react";
import { SITE_URL, BUSINESS, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Best Bouquet in Lahore: Fresh Flowers, Same-Day Delivery | Lahore Bouquet",
  },
  description: "Looking for the best bouquet in Lahore? Lahore Bouquet hand-ties fresh bouquets from Rs. 1,239 with same-day delivery in 2-5 hours across DHA, Gulberg, Model Town & more. WhatsApp: 0310-4225974",
  alternates: {
    canonical: `${SITE_URL}/best-bouquet-in-lahore`,
  },
  openGraph: {
    title: "Best Bouquet in Lahore: Fresh, Same-Day Delivery",
    description: "Fresh hand-tied bouquets from Rs. 1,239, delivered in 2-5 hours across Lahore. Photo approval on WhatsApp before dispatch.",
    url: `${SITE_URL}/best-bouquet-in-lahore`,
    siteName: "Lahore Bouquet",
    type: "website",
    locale: "en_PK",
  }
};

const BOUQUET_TYPES = [
  {
    name: "Hand-Tied Small Bouquets",
    price: "Rs. 1,239 – Rs. 1,900",
    desc: "Fresh seasonal blooms hand-tied the morning of delivery. Perfect for birthdays, thank-yous and everyday surprises.",
  },
  {
    name: "Medium Rose Bouquets",
    price: "Rs. 2,600 – Rs. 3,800",
    desc: "12 to 24 fresh roses in elegant wrap with a handwritten card. Our most popular choice for anniversaries and romantic gestures.",
  },
  {
    name: "Large Signature Rose Arrangement",
    price: "Rs. 7,499",
    desc: "A grand statement piece with premium Dutch roses, designed for proposals, weddings and milestone celebrations.",
  },
  {
    name: "Imported Dutch Rose Bouquets",
    price: "From Rs. 4,800",
    desc: "Rare imported varieties — Dutch roses, tulips and lilies — for when only something extraordinary will do.",
  },
  {
    name: "Sunflower Bouquets",
    price: "From Rs. 1,699",
    desc: "Big, cheerful sunflowers that brighten any room. Great for birthdays, graduations and get-well wishes.",
  },
  {
    name: "Chocolate Bouquets",
    price: "From Rs. 3,800",
    desc: "Premium chocolates arranged with fresh flowers — the gift that combines the best of both worlds.",
  },
];

const DELIVERY_AREAS = [
  "DHA (all phases)", "Gulberg", "Model Town", "Johar Town", "Bahria Town",
  "Cantt", "Wapda Town", "Askari", "Valencia", "EME", "Lake City", "Fazaia",
];

const FAQS = [
  {
    q: "What is the best bouquet to order in Lahore?",
    a: "It depends on the occasion. For romance, our medium red rose bouquets (Rs. 2,600–3,800) are the most ordered. For birthdays, sunflower or mixed seasonal bouquets (from Rs. 1,239) work beautifully. For grand gestures, the large signature Dutch rose arrangement (Rs. 7,499) makes a statement. Message us on WhatsApp and we'll recommend based on your budget.",
  },
  {
    q: "How much does a good bouquet cost in Lahore?",
    a: "Hand-tied small bouquets range from Rs. 1,239 to Rs. 1,900. Medium rose bouquets are Rs. 2,600 to Rs. 3,800, and our large signature rose arrangement is Rs. 7,499. Every price includes same-day delivery across listed Lahore areas.",
  },
  {
    q: "How fast can you deliver a bouquet in Lahore?",
    a: "Order before 4:00 PM and your bouquet arrives the same day in 2 to 5 hours. We also offer a midnight delivery slot (11:30 PM–12:15 AM) for surprise birthdays — book before 8:00 PM.",
  },
  {
    q: "Can I see the bouquet before it's delivered?",
    a: "Yes. Every bouquet is hand-tied fresh to order, and our florist sends you a real photo on WhatsApp for approval before dispatch. Nothing leaves until you say it looks perfect.",
  },
  {
    q: "Do you deliver bouquets outside Lahore?",
    a: "We deliver across Lahore and also serve Islamabad (selected areas, same-day 2–5 hours). For other cities, message us on WhatsApp and we'll confirm.",
  },
  {
    q: "What if the flowers arrive damaged?",
    a: "Every stem is hydrated for transit and hand-checked before dispatch. If flowers arrive damaged, we replace or refund them — that's our freshness promise.",
  },
  {
    q: "Can I order a bouquet from abroad for someone in Lahore?",
    a: "Yes. Order online in under 5 minutes and pay with any international debit/credit card. We deliver fresh flowers the same day with photo proof on WhatsApp.",
  },
  {
    q: "Do you include a card message with the bouquet?",
    a: "Yes, every bouquet comes with a complimentary handwritten card. Add your personal message at checkout or on WhatsApp.",
  },
];

export default function BestBouquetInLahorePage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
      { "@type": "ListItem", position: 2, name: "Best Bouquet in Lahore", item: `${SITE_URL}/best-bouquet-in-lahore` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <main className="w-full bg-white text-[#101012]">
        {/* Hero */}
        <section className="w-full py-12 px-4 sm:px-6 bg-[#F8F3EA]">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="font-playfair text-3xl sm:text-4xl font-bold">
              Best Bouquet in Lahore: Fresh, Same-Day Delivery
            </h1>
            <p className="text-sm sm:text-base text-[#2A2A2A] leading-relaxed max-w-2xl mx-auto">
              <strong>Lahore Bouquet</strong> hand-ties the freshest bouquets in Lahore — from hand-tied small bouquets (Rs. 1,239–1,900) to grand Dutch rose arrangements (Rs. 7,499). Order before 4:00 PM for same-day delivery in 2 to 5 hours across DHA, Gulberg, Model Town, Johar Town, Bahria Town and all major areas. Every bouquet is photographed on WhatsApp for your approval before dispatch.
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <a
                href={whatsappLink("Hi! I want to order a bouquet in Lahore")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#128C7E] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0d6b5e] transition"
              >
                <MessageCircle size={18} /> Order on WhatsApp
              </a>
              <a
                href="tel:+923104225974"
                className="inline-flex items-center gap-2 border-2 border-[#8B1E2D] text-[#8B1E2D] px-6 py-3 rounded-full font-semibold hover:bg-[#8B1E2D] hover:text-white transition"
              >
                <Phone size={18} /> 0310-4225974
              </a>
            </div>
          </div>
        </section>

        {/* Bouquet types with prices */}
        <section className="w-full py-12 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-center mb-8">
              Bouquet Types & Prices
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {BOUQUET_TYPES.map((b) => (
                <div key={b.name} className="border border-[#E5DED2] rounded-xl p-5 bg-white hover:shadow-md transition">
                  <h3 className="font-semibold text-lg">{b.name}</h3>
                  <p className="text-[#8B1E2D] font-bold mt-1">{b.price}</p>
                  <p className="text-sm text-[#2A2A2A] mt-2 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Delivery areas */}
        <section className="w-full py-12 px-4 sm:px-6 bg-[#F8F3EA]">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-center mb-4">
              Delivery Areas
            </h2>
            <p className="text-center text-sm text-[#2A2A2A] mb-6">
              Free same-day delivery across all listed areas. Delivery fee for unlisted areas is confirmed on WhatsApp before you order.
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {DELIVERY_AREAS.map((area) => (
                <span key={area} className="inline-flex items-center gap-1 bg-white border border-[#E5DED2] rounded-full px-4 py-2 text-sm">
                  <MapPin size={14} className="text-[#8B1E2D]" /> {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* How ordering works */}
        <section className="w-full py-12 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-center mb-8">
              How Ordering Works
            </h2>
            <div className="grid sm:grid-cols-4 gap-4">
              {[
                { icon: <MessageCircle size={24} />, title: "1. Choose", desc: "Browse bouquets online or message us on WhatsApp with your budget and occasion." },
                { icon: <Camera size={24} />, title: "2. Approve", desc: "Our florist hand-ties your bouquet fresh and sends a real photo for your approval." },
                { icon: <Truck size={24} />, title: "3. We Deliver", desc: "Same-day delivery in 2–5 hours across Lahore. Midnight slot available for surprises." },
                { icon: <Star size={24} />, title: "4. They Smile", desc: "Your loved one receives fresh flowers with a handwritten card message." },
              ].map((s) => (
                <div key={s.title} className="text-center p-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F8F3EA] text-[#8B1E2D] mb-3">
                    {s.icon}
                  </div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="text-sm text-[#2A2A2A] mt-2">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why choose us */}
        <section className="w-full py-12 px-4 sm:px-6 bg-[#F8F3EA]">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-center mb-8">
              Why Customers Choose Lahore Bouquet
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: <Camera size={20} />, text: "WhatsApp photo approval before dispatch — you see the exact bouquet" },
                { icon: <Clock size={20} />, text: "Same-day delivery in 2–5 hours for orders before 4:00 PM" },
                { icon: <Truck size={20} />, text: "Free delivery across all listed Lahore areas, no hidden charges" },
                { icon: <ShieldCheck size={20} />, text: "Freshness promise — damaged flowers replaced or refunded" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#E5DED2]">
                  <span className="text-[#8B1E2D] mt-0.5">{item.icon}</span>
                  <p className="text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="w-full py-12 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {FAQS.map((f) => (
                <details key={f.q} className="border border-[#E5DED2] rounded-xl p-4 bg-white">
                  <summary className="font-semibold cursor-pointer flex items-center gap-2">
                    <HelpCircle size={18} className="text-[#8B1E2D] shrink-0" /> {f.q}
                  </summary>
                  <p className="text-sm text-[#2A2A2A] mt-3 leading-relaxed pl-7">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="w-full py-12 px-4 sm:px-6 bg-[#8B1E2D] text-white">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold">
              Order Your Bouquet Today
            </h2>
            <p className="text-white/90">
              WhatsApp us now for same-day delivery across Lahore
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={whatsappLink("Hi! I want to order the best bouquet in Lahore")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#8B1E2D] px-6 py-3 rounded-full font-semibold hover:bg-[#F8F3EA] transition"
              >
                <MessageCircle size={18} /> WhatsApp: 0310-4225974
              </a>
              <a
                href="tel:+923104225974"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#8B1E2D] transition"
              >
                <Phone size={18} /> Call Now
              </a>
            </div>
            <p className="text-sm text-white/70">
              Email: {BUSINESS.email} | Open daily 9:00 AM – 1:00 AM
            </p>
            <p className="text-sm">
              <Link href="/" className="underline hover:no-underline">← Back to Homepage</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
