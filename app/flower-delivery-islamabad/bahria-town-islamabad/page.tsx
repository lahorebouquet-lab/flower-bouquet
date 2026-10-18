import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: { absolute: "Flower Delivery in Bahria Town Islamabad | Same-Day, Free Delivery" },
  description: "Same-day flower delivery to Bahria Town Islamabad — Phase 1–8, Civic Centre in 2–5 hours. Free delivery, WhatsApp photo approval.",
  alternates: { canonical: `${SITE_URL}/flower-delivery-islamabad/bahria-town-islamabad` },
  openGraph: {
    title: "Flower Delivery in Bahria Town Islamabad | Same-Day, Free Delivery",
    description: "Same-day flower delivery to Bahria Town Islamabad — Phase 1–8, Civic Centre in 2–5 hours. Free delivery, WhatsApp photo approval.",
    url: `${SITE_URL}/flower-delivery-islamabad/bahria-town-islamabad`,
    type: "website",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: "Flower Delivery in Bahria Town Islamabad | Same-Day, Free Delivery" }],
  }
};

const FAQS = [
  { q: "How long does flower delivery to Bahria Town Islamabad take?", a: "Delivery to Bahria Town Islamabad takes 2 to 5 hours, 7 days a week. Order on WhatsApp (0310-4225974) — you approve by photo before the rider leaves." },
  { q: "What is the delivery fee for Bahria Town Islamabad?", a: "Delivery to Bahria Town Islamabad is completely FREE. No hidden charges, no minimum order." },
  { q: "Can I order birthday flowers for Bahria Town Islamabad?", a: "Yes! Birthday bouquets are our most popular Bahria Town Islamabad order. Add cake or balloons — delivered same-day within 2 to 5 hours." },
  { q: "Do you deliver to offices in Bahria Town Islamabad?", a: "Absolutely. Homes, offices, shops across Bahria Town Islamabad — share the building name on WhatsApp." },
  { q: "Can I order from abroad for Bahria Town Islamabad delivery?", a: "Yes! UK, USA, Dubai — pay by international card, approve by photo, we deliver to Bahria Town Islamabad." },
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
          <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">Phase 1–8 • Civic Centre • Grand Mosque Area</span>
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-[#101012] leading-tight">Flower Delivery in Bahria Town Islamabad</h1>
          <p className="text-sm sm:text-base text-[#2A2A2A] leading-relaxed">Bahria Town Islamabad spans multiple phases with its Civic Centre and Grand Mosque. Our partner delivers across all phases within 2 to 5 hours. Share your phase and street — we handle navigation. Free delivery, WhatsApp photo approval, 7 days a week.</p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link href="/bouquets" className="px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">Shop Bouquets →</Link>
            <a href={whatsappLink("Hi Lahore Bouquet! I want flowers delivered to Bahria Town Islamabad.")} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-[#25D366] text-white text-sm font-bold hover:opacity-90 transition-opacity">Order on WhatsApp</a>
          </div>
        </div>
      </section>
      <section className="w-full py-12 px-4 sm:px-6 border-b border-[#E5DED2]">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="font-playfair text-2xl font-bold text-[#101012]">Areas we cover in Bahria Town Islamabad</h2>
          <ul className="space-y-2 text-sm list-disc list-inside leading-relaxed">
            <li>Bahria Phase 1–4: residential precincts — birthday and anniversary flowers.</li>
            <li>Bahria Phase 5–8: newer phases — housewarming bouquets.</li>
            <li>Civic Centre: commercial hub — corporate bouquets and office flowers.</li>
          </ul>
        </div>
      </section>
      <section className="w-full py-12 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="font-playfair text-2xl font-bold text-[#101012]">Popular occasions in Bahria Town Islamabad</h2>
          <p className="text-sm leading-relaxed">Bahria Town families celebrate big — birthday packages, nikkah flowers, bridal bouquets, Eid hampers. Civic Centre clients order corporate gifts.</p>
        </div>
      </section>
      <section className="w-full py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl font-bold text-[#101012] text-center">Bahria Town Islamabad FAQs</h2>
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
