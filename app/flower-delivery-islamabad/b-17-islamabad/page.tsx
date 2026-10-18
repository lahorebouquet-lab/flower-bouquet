import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: { absolute: "Flower Delivery in B-17 Islamabad | Flowers & Gifts" },
  description: "Looking for flower delivery in B-17 Islamabad? Explore available bouquets and gifts from Lahore Bouquet. Confirm your location, delivery charges and available delivery time.",
  alternates: { canonical: `${SITE_URL}/flower-delivery-islamabad/b-17-islamabad` },
  openGraph: {
    title: "Flower Delivery in B-17 Islamabad | Flowers & Gifts",
    description: "Looking for flower delivery in B-17 Islamabad? Explore available bouquets and gifts from Lahore Bouquet. Confirm your location, delivery charges and available delivery time.",
    url: `${SITE_URL}/flower-delivery-islamabad/b-17-islamabad`,
    type: "website",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: "Flower Delivery in B-17 Islamabad | Flowers & Gifts" }],
  }
};

const FAQS = [
  { q: "Where can I order flowers online in B-17 Islamabad?", a: "Browse available bouquets on LahoreBouquet.com and contact our team to arrange delivery in B-17 Islamabad. Confirm product availability and delivery charges before payment." },
  { q: "Do you offer same-day delivery in B-17 Islamabad?", a: "Same-day delivery may be available depending on order time and address. Contact us before ordering to confirm the delivery slot." },
  { q: "How much does delivery cost in B-17 Islamabad?", a: "Delivery charges depend on the location and order details. Our team confirms applicable charges before you complete your purchase." },
  { q: "Can I order from abroad for B-17 Islamabad delivery?", a: "Yes. Contact Lahore Bouquet from anywhere — confirm payment options and delivery details with our team before ordering." },
  { q: "Can I request a bouquet photo before delivery?", a: "Photo confirmation may be available depending on the order. Please request it when placing your order." },
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
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-[#101012] leading-tight">Flower Delivery in B-17 Islamabad</h1>
          <p className="text-sm sm:text-base text-[#2A2A2A] leading-relaxed">Want to surprise someone in B-17 Islamabad with a bouquet? Lahore Bouquet makes it convenient to explore available flowers and arrange a gift for birthdays, anniversaries and special occasions.</p>
          <p className="text-sm sm:text-base text-[#2A2A2A] leading-relaxed">Before placing your order, share the recipient's complete address and preferred delivery time. Our team will confirm whether your location is covered and provide the final bouquet price, delivery fee and estimated arrival time.</p>
          <p className="text-sm sm:text-base font-semibold text-[#0B0B0B]">Order flowers for B-17: Contact us to check local delivery options.</p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link href="/bouquets" className="px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">Shop Bouquets →</Link>
            <a href={whatsappLink("Hi Lahore Bouquet! I want flowers delivered to B-17 Islamabad.")} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-[#25D366] text-white text-sm font-bold hover:opacity-90 transition-opacity">Order on WhatsApp</a>
          </div>
        </div>
      </section>
      <section className="w-full py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl font-bold text-[#101012] text-center">Frequently Asked Questions</h2>
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
