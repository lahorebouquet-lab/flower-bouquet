import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: { absolute: "Flower Delivery in Blue Area Islamabad | Same-Day, Free Delivery" },
  description: "Same-day flower delivery to Blue Area Islamabad — Jinnah Avenue offices in 2–5 hours. Free delivery, WhatsApp photo approval.",
  alternates: { canonical: `${SITE_URL}/flower-delivery-islamabad/blue-area-islamabad` },
  openGraph: {
    title: "Flower Delivery in Blue Area Islamabad | Same-Day, Free Delivery",
    description: "Same-day flower delivery to Blue Area Islamabad — Jinnah Avenue offices in 2–5 hours. Free delivery, WhatsApp photo approval.",
    url: `${SITE_URL}/flower-delivery-islamabad/blue-area-islamabad`,
    type: "website",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: "Flower Delivery in Blue Area Islamabad | Same-Day, Free Delivery" }],
  }
};

const FAQS = [
  { q: "How long does flower delivery to Blue Area Islamabad take?", a: "Delivery to Blue Area Islamabad takes 2 to 5 hours, 7 days a week. Order on WhatsApp (0310-4225974) — you approve by photo before the rider leaves." },
  { q: "What is the delivery fee for Blue Area Islamabad?", a: "Delivery to Blue Area Islamabad is completely FREE. No hidden charges, no minimum order." },
  { q: "Can I order birthday flowers for Blue Area Islamabad?", a: "Yes! Birthday bouquets are our most popular Blue Area Islamabad order. Add cake or balloons — delivered same-day within 2 to 5 hours." },
  { q: "Do you deliver to offices in Blue Area Islamabad?", a: "Absolutely. Homes, offices, shops across Blue Area Islamabad — share the building name on WhatsApp." },
  { q: "Can I order from abroad for Blue Area Islamabad delivery?", a: "Yes! UK, USA, Dubai — pay by international card, approve by photo, we deliver to Blue Area Islamabad." },
];

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <main className="bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="w-full py-16 px-4 sm:px-6 text-center border-b border-[#E5DED2]">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">Jinnah Avenue • Corporate Towers • Business District</span>
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-[#101012] leading-tight">Flower Delivery in Blue Area Islamabad</h1>
          <p className="text-sm sm:text-base text-[#2A2A2A] leading-relaxed">Blue Area is Islamabad's central business district — corporate towers, banks, hotels and offices along Jinnah Avenue. We deliver corporate bouquets, client gifts and event flowers within 2 to 5 hours. Free delivery, WhatsApp photo approval, bulk orders welcome.</p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link href="/bouquets" className="px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">Shop Bouquets →</Link>
            <a href={whatsappLink("Hi Lahore Bouquet! I want flowers delivered to Blue Area Islamabad.")} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-[#25D366] text-white text-sm font-bold hover:opacity-90 transition-opacity">Order on WhatsApp</a>
          </div>
        </div>
      </section>
      <section className="w-full py-12 px-4 sm:px-6 border-b border-[#E5DED2]">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="font-playfair text-2xl font-bold text-[#101012]">Areas we cover in Blue Area Islamabad</h2>
          <ul className="space-y-2 text-sm list-disc list-inside leading-relaxed">
            <li>Jinnah Avenue: corporate towers and bank branches.</li>
            <li>Centaurus & malls: retail and hospitality flowers.</li>
            <li>Government offices: formal event arrangements.</li>
          </ul>
        </div>
      </section>
      <section className="w-full py-12 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="font-playfair text-2xl font-bold text-[#101012]">Popular occasions in Blue Area Islamabad</h2>
          <p className="text-sm leading-relaxed">Blue Area is corporate territory — client bouquets, conference arrangements, inauguration stands, farewell flowers. Bulk orders with advance booking.</p>
        </div>
      </section>
      <section className="w-full py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl font-bold text-[#101012] text-center">Blue Area Islamabad FAQs</h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <details key={i} className="p-5 rounded-2xl bg-white border border-[#E5DED2] group">
                <summary className="font-bold text-sm text-[#0B0B0B] cursor-pointer list-none flex justify-between items-center gap-2">{f.q}<span className="text-[#8B1E2D] group-open:rotate-45 transition-transform text-lg leading-none shrink-0">+</span></summary>
                <p className="text-sm mt-2 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center pt-4">
            <p className="text-sm">Explore all <Link href="/flower-delivery-islamabad" className="text-[#8B1E2D] underline font-semibold">Islamabad delivery areas</Link></p>
          </div>
        </div>
      </section>
    </main>
  );
}
