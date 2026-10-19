import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, whatsappLink } from "@/lib/business";
import { MessageCircle, HelpCircle, Flower2 } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Red Rose Bouquets in Islamabad | Fresh Roses Delivery | Lahore Bouquet",
  },
  description: "Order red rose bouquets in Islamabad — fresh hand-tied roses delivered same-day in 2-5 hours. From Rs. 1,499. WhatsApp: 0310-4225974",
  alternates: { canonical: `${SITE_URL}/islamabad/rose-bouquets/` },
  openGraph: {
    title: "Red Rose Bouquets in Islamabad | Lahore Bouquet",
    description: "Fresh red roses delivered same-day in Islamabad. From Rs. 1,499.",
    url: `${SITE_URL}/islamabad/rose-bouquets/`,
    siteName: "Lahore Bouquet",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Rose Bouquets in Islamabad | Lahore Bouquet",
    description: "Fresh red roses, same-day Islamabad. From Rs. 1,499.",
  },
};

const FAQS = [
  { q: "How fresh are the roses delivered in Islamabad?", a: "Our roses are hand-tied fresh on the day of delivery. We use quality red roses and wrap them in premium packaging." },
  { q: "What red rose bouquet sizes are available?", a: "From single rose bouquets (Rs. 1,499) to medium arrangements (Rs. 2,600–3,800) and large signature Dutch rose bouquets (Rs. 7,499)." },
  { q: "Can I get red roses delivered today in Islamabad?", a: "Yes. Order before the daily cutoff and your roses arrive same-day in 2 to 5 hours in covered areas." },
];

const PRODUCTS = [
  { name: "Romantic Rose Bouquet", price: "Rs. 1,499", slug: "romantic-rose-bouquet" },
  { name: "Single Red Rose Bouquet", price: "Rs. 1,499", slug: "single-red-rose-bouquet" },
  { name: "Elegant Autumn Red Rose Bouquet", price: "Rs. 1,599", slug: "elegant-autumn-red-rose-bouquet" },
  { name: "Red Rose Bouquet – Black Wrap", price: "Rs. 1,999", slug: "red-rose-bouquet-black-wrap" },
];

export default function Page() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Flower Delivery in Islamabad", item: `${SITE_URL}/flower-delivery-islamabad` },
    { "@type": "ListItem", position: 3, name: "Rose Bouquets in Islamabad", item: `${SITE_URL}/islamabad/rose-bouquets/` },
  ]};
  return (
    <main className="bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="w-full py-16 px-4 sm:px-6 text-center border-b border-[#E5DED2]">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-[#101012] leading-tight">Red Rose Bouquets in Islamabad</h1>
          <p className="text-sm sm:text-base leading-relaxed"><strong>Fresh red rose bouquets delivered in Islamabad</strong> — hand-tied roses for anniversaries, proposals and romantic surprises. <strong>From Rs. 1,499</strong>, same-day delivery in 2–5 hours. WhatsApp: <strong>0310-4225974</strong>.</p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a href={whatsappLink("Hi Lahore Bouquet! I want to order red roses for delivery in Islamabad.")} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity">Order Red Roses</a>
            <Link href="/islamabad/bouquets/" className="px-6 py-3 rounded-full border border-[#8B1E2D] text-[#8B1E2D] text-sm font-bold hover:bg-[#8B1E2D] hover:text-white transition-colors">All Bouquets</Link>
          </div>
        </div>
      </section>
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">Red Rose Bouquets Available</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {PRODUCTS.map((p) => (
              <div key={p.slug} className="p-5 rounded-2xl bg-[#F8F3EA] border border-[#E5DED2] hover:border-[#8B1E2D] transition-colors flex flex-col">
                <h3 className="font-bold text-[#0B0B0B] text-sm flex items-center gap-2"><Flower2 size={16} className="text-[#8B1E2D]" /> {p.name}</h3>
                <p className="text-[#8B1E2D] font-bold text-base mt-1">{p.price}</p>
                <div className="flex gap-2 mt-3 pt-3 border-t border-[#E5DED2]">
                  <Link href={`/products/${p.slug}`} className="flex-1 text-center px-3 py-2 rounded-full bg-[#8B1E2D] text-white text-xs font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">View</Link>
                  <a href={whatsappLink(`Hi! I want the ${p.name} (${p.price}) for Islamabad.`)} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-3 py-2 rounded-full bg-[#128C7E] text-white text-xs font-bold hover:opacity-90 transition-opacity">WhatsApp</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <details key={i} className="p-5 rounded-2xl bg-[#F8F3EA] border border-[#E5DED2] group">
                <summary className="font-bold text-sm text-[#0B0B0B] cursor-pointer list-none flex justify-between items-center gap-2">
                  <span className="flex items-center gap-2"><HelpCircle size={16} className="text-[#8B1E2D] shrink-0" /> {f.q}</span>
                  <span className="text-[#8B1E2D] group-open:rotate-45 transition-transform text-lg leading-none shrink-0">+</span>
                </summary>
                <p className="text-sm mt-2 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center pt-4">
            <a href={whatsappLink("Hi Lahore Bouquet! I want red roses in Islamabad.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity"><MessageCircle size={18} /> Order: 0310-4225974</a>
          </div>
        </div>
      </section>
    </main>
  );
}
