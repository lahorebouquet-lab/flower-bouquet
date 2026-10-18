import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: { absolute: "Flower Delivery in Gulberg Greens Islamabad | Lahore Bouquet" },
  description: "Looking for flowers in Gulberg Greens Islamabad? Explore bouquets and gifts from Lahore Bouquet and confirm delivery availability.",
  alternates: { canonical: `${SITE_URL}/flower-delivery-islamabad/gulberg-greens-islamabad` },
  openGraph: {
    title: "Flower Delivery in Gulberg Greens Islamabad | Lahore Bouquet",
    description: "Looking for flowers in Gulberg Greens Islamabad? Explore bouquets and gifts from Lahore Bouquet and confirm delivery availability.",
    url: `${SITE_URL}/flower-delivery-islamabad/gulberg-greens-islamabad`,
    type: "website",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: "Flower Delivery in Gulberg Greens Islamabad | Lahore Bouquet" }],
  }
};

const FAQS = [
  { q: "How long does flower delivery to Gulberg Greens Islamabad take?", a: "Delivery to Gulberg Greens Islamabad takes 2 to 5 hours, 7 days a week. Order on WhatsApp (0310-4225974) — you approve by photo before the rider leaves." },
  { q: "What is the delivery fee for Gulberg Greens Islamabad?", a: "Delivery to Gulberg Greens Islamabad is completely FREE. No hidden charges, no minimum order." },
  { q: "Can I order birthday flowers for Gulberg Greens Islamabad?", a: "Yes! Birthday bouquets delivered same-day within 2 to 5 hours. Add cake or balloons for the complete surprise." },
  { q: "Do you deliver to offices in Gulberg Greens Islamabad?", a: "Absolutely. Homes, offices, shops across Gulberg Greens Islamabad — share the address on WhatsApp." },
  { q: "Can I order from abroad for Gulberg Greens Islamabad delivery?", a: "Yes! UK, USA, Dubai — pay by international card, approve by photo, we deliver to Gulberg Greens Islamabad." },
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
          <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">Gulberg Greens • Farmhouses • Green Living</span>
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-[#101012] leading-tight">Flower Delivery in Gulberg Greens Islamabad</h1>
          <p className="text-sm sm:text-base text-[#2A2A2A] leading-relaxed">A thoughtful bouquet can make a birthday, anniversary or family celebration special. If you're sending flowers to Gulberg Greens Islamabad, Lahore Bouquet can help you choose an available arrangement. Share the complete location including block or street — we confirm price, delivery fee and timing before finalising.</p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link href="/bouquets" className="px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">Shop Bouquets →</Link>
            <a href={whatsappLink("Hi Lahore Bouquet! I want flowers delivered to Gulberg Greens Islamabad.")} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-[#25D366] text-white text-sm font-bold hover:opacity-90 transition-opacity">Order on WhatsApp</a>
          </div>
        </div>
      </section>
      <section className="w-full py-12 px-4 sm:px-6 border-b border-[#E5DED2]">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="font-playfair text-2xl font-bold text-[#101012]">Areas we cover in Gulberg Greens Islamabad</h2>
          <ul className="space-y-2 text-sm list-disc list-inside leading-relaxed">
            <li>Gulberg Greens blocks: farmhouses and residences.</li>
            <li>Commercial areas: shops and offices.</li>
          </ul>
        </div>
      </section>
      <section className="w-full py-12 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="font-playfair text-2xl font-bold text-[#101012]">Popular occasions in Gulberg Greens Islamabad</h2>
          <p className="text-sm leading-relaxed">Gulberg Greens families celebrate with birthday bouquets, anniversary roses and housewarming flowers — farmhouse events are popular here.</p>
        </div>
      </section>
      <section className="w-full py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl font-bold text-[#101012] text-center">Gulberg Greens Islamabad FAQs</h2>
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
