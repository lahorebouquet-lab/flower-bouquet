import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, whatsappLink } from "@/lib/business";
import { withSeo } from "@/lib/seo";
import IslamabadDetails from "../../components/IslamabadDetails";

export const metadata: Metadata = withSeo("/flower-delivery-islamabad/f-6-islamabad", {
  title: { absolute: "Flower Delivery in F-6 Islamabad | Lahore Bouquet" },
  description: "Send beautiful flower bouquets to F-6 Islamabad with Lahore Bouquet. Explore roses, birthday flowers and thoughtful gifts, with local delivery availability confirmed before ordering.",
  alternates: { canonical: `${SITE_URL}/flower-delivery-islamabad/f-6-islamabad` },
  openGraph: {
    title: "Flower Delivery in F-6 Islamabad | Lahore Bouquet",
    description: "Send beautiful flower bouquets to F-6 Islamabad with Lahore Bouquet. Explore roses, birthday flowers and thoughtful gifts, with local delivery availability confirmed before ordering.",
    url: `${SITE_URL}/flower-delivery-islamabad/f-6-islamabad`,
    type: "website",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: "Flower Delivery in F-6 Islamabad | Lahore Bouquet" }],
  }
});

const FAQS = [
  { q: "Where can I order flowers online in F-6 Islamabad?", a: "Browse available bouquets on LahoreBouquet.com and contact our team to arrange delivery in F-6 Islamabad. Confirm product availability and delivery charges before payment." },
  { q: "Do you offer same-day delivery in F-6 Islamabad?", a: "Same-day delivery may be available depending on order time and address. Contact us before ordering to confirm the delivery slot." },
  { q: "How much does delivery cost in F-6 Islamabad?", a: "Delivery charges depend on the location and order details. Our team confirms applicable charges before you complete your purchase." },
  { q: "Can I order from abroad for F-6 Islamabad delivery?", a: "Yes. Contact Lahore Bouquet from anywhere — confirm payment options and delivery details with our team before ordering." },
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
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-[#101012] leading-tight">Flower Delivery in F-6 Islamabad</h1>
          <p className="text-xs text-[#636363]">Near Margalla Road and the diplomatic enclave. We deliver to homes and offices across F-6/1 to F-6/4. Same-day delivery in 2-5 hours.</p>
          <p className="text-sm sm:text-base text-[#2A2A2A] leading-relaxed">Looking for flower delivery in F-6 Islamabad? Lahore Bouquet helps you arrange thoughtful flower gifts for birthdays, anniversaries, romantic surprises and special occasions.</p>
          <p className="text-sm sm:text-base text-[#2A2A2A] leading-relaxed">Whether you're sending red roses, a colourful bouquet or a gift for someone special, explore our available collection and choose an arrangement that suits the occasion. Share the recipient's address in F-6 so our team can confirm product availability, delivery charges and the expected delivery time.</p>
          <p className="text-sm sm:text-base font-semibold text-[#0B0B0B]">Order flowers for F-6 Islamabad: Browse our collection or contact us on WhatsApp to arrange your order.</p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link href="/bouquets" className="px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">Shop Bouquets →</Link>
            <a href={whatsappLink("Hi Lahore Bouquet! I want flowers delivered to F-6 Islamabad.")} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity">Order on WhatsApp</a>
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
      <IslamabadDetails path="/flower-delivery-islamabad/f-6-islamabad" />
    </main>
  );
}
