import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: { absolute: "Flower Delivery in G-10 Islamabad | Lahore Bouquet" },
  description: "Send fresh flower bouquets and birthday gifts to G-10 Islamabad. Explore Lahore Bouquet's available collection and check delivery coverage, prices and timing before ordering.",
  alternates: { canonical: `${SITE_URL}/flower-delivery-islamabad/g-10-islamabad` },
  openGraph: {
    title: "Flower Delivery in G-10 Islamabad | Lahore Bouquet",
    description: "Send fresh flower bouquets and birthday gifts to G-10 Islamabad. Explore Lahore Bouquet's available collection and check delivery coverage, prices and timing before ordering.",
    url: `${SITE_URL}/flower-delivery-islamabad/g-10-islamabad`,
    type: "website",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: "Flower Delivery in G-10 Islamabad | Lahore Bouquet" }],
  }
};

const FAQS = [
  { q: "Where can I order flowers online in G-10 Islamabad?", a: "Browse available bouquets on LahoreBouquet.com and contact our team to arrange delivery in G-10 Islamabad. Confirm product availability and delivery charges before payment." },
  { q: "Do you offer same-day delivery in G-10 Islamabad?", a: "Same-day delivery may be available depending on order time and address. Contact us before ordering to confirm the delivery slot." },
  { q: "How much does delivery cost in G-10 Islamabad?", a: "Delivery charges depend on the location and order details. Our team confirms applicable charges before you complete your purchase." },
  { q: "Can I order from abroad for G-10 Islamabad delivery?", a: "Yes. Contact Lahore Bouquet from anywhere — confirm payment options and delivery details with our team before ordering." },
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
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-[#101012] leading-tight">Flower Delivery in G-10 Islamabad</h1>
          <p className="text-sm sm:text-base text-[#2A2A2A] leading-relaxed">A flower bouquet is a thoughtful way to celebrate a birthday, anniversary or another important moment. If you're looking for flower delivery in G-10 Islamabad, Lahore Bouquet can help you choose an available arrangement and organise delivery.</p>
          <p className="text-sm sm:text-base text-[#2A2A2A] leading-relaxed">Browse our bouquet collection and tell us what you're celebrating. Our team will confirm whether the recipient's address is covered and share the bouquet price, delivery fee and available delivery slot before finalising the order.</p>
          <p className="text-sm sm:text-base font-semibold text-[#0B0B0B]">Send flowers to G-10: Explore our collection and contact us to confirm delivery.</p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link href="/bouquets" className="px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">Shop Bouquets →</Link>
            <a href={whatsappLink("Hi Lahore Bouquet! I want flowers delivered to G-10 Islamabad.")} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-[#25D366] text-white text-sm font-bold hover:opacity-90 transition-opacity">Order on WhatsApp</a>
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
