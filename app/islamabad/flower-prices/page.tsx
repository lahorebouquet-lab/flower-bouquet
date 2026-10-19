import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, whatsappLink } from "@/lib/business";
import { Tag, MessageCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Delivery Prices in Islamabad | Price Guide | Lahore Bouquet",
  },
  description: "Transparent flower prices in Islamabad — hand-tied bouquets from Rs. 1,239, roses Rs. 2,600–3,800, free delivery in listed sectors. Last updated October 2026.",
  alternates: {
    canonical: `${SITE_URL}/islamabad/flower-prices/`,
  },
  openGraph: {
    title: "Flower Delivery Prices in Islamabad | Lahore Bouquet",
    description: "Transparent Islamabad flower prices. Bouquets from Rs. 1,239, free delivery in listed sectors.",
    url: `${SITE_URL}/islamabad/flower-prices/`,
    siteName: "Lahore Bouquet",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flower Delivery Prices in Islamabad | Lahore Bouquet",
    description: "Islamabad flower prices from Rs. 1,239. Free delivery in listed sectors.",
  },
};

const PRICE_ROWS = [
  { type: "Hand-tied small bouquets", price: "Rs. 1,239 – 1,900", note: "Single roses, small mixed" },
  { type: "Medium rose bouquets", price: "Rs. 2,600 – 3,800", note: "12–24 roses" },
  { type: "Large signature Dutch rose", price: "Rs. 7,499", note: "Premium arrangement" },
  { type: "Sunflower bouquets", price: "From Rs. 1,699", note: "Seasonal availability" },
  { type: "Chocolate bouquets", price: "From Rs. 3,800", note: "Branded chocolates" },
];

const FAQS = [
  {
    q: "How much does flower delivery cost in Islamabad?",
    a: "Delivery is FREE in all listed Islamabad sectors. Bouquet prices start from Rs. 1,239. There are no hidden charges — the price you see is what you pay."
  },
  {
    q: "What is the cheapest flower option in Islamabad?",
    a: "Hand-tied small bouquets start from Rs. 1,239. Message us on WhatsApp (0310-4225974) with your budget for the best options."
  },
  {
    q: "Are Islamabad prices the same as Lahore?",
    a: "Yes. Islamabad prices match Lahore prices — same bouquets, same rates, same free delivery policy in listed areas."
  },
  {
    q: "Do prices change on Valentine's Day or special occasions?",
    a: "Seasonal demand may affect availability. Special occasion packages (like Valentine's Day 2027 deals) are published separately with fixed prices. Regular bouquet prices stay as listed."
  },
];

export default function IslamabadPricesPage() {
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
      { "@type": "ListItem", position: 2, name: "Flower Delivery in Islamabad", item: `${SITE_URL}/flower-delivery-islamabad` },
      { "@type": "ListItem", position: 3, name: "Flower Prices in Islamabad", item: `${SITE_URL}/islamabad/flower-prices/` },
    ],
  };

  return (
    <main className="bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="w-full py-16 px-4 sm:px-6 text-center border-b border-[#E5DED2]">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-[#101012] leading-tight">
            Flower Delivery Prices in Islamabad
          </h1>
          <p className="text-sm sm:text-base leading-relaxed">
            <strong>Transparent, honest pricing</strong> — the same prices as Lahore, no hidden charges. <strong>Last updated: October 2026.</strong> Free delivery in all listed Islamabad sectors.
          </p>
        </div>
      </section>

      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            Islamabad Price Guide
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F8F3EA]">
                  <th className="border border-[#E5DED2] px-4 py-3 text-left font-bold">Bouquet Type</th>
                  <th className="border border-[#E5DED2] px-4 py-3 text-left font-bold">Price</th>
                  <th className="border border-[#E5DED2] px-4 py-3 text-left font-bold">Details</th>
                </tr>
              </thead>
              <tbody>
                {PRICE_ROWS.map((r, i) => (
                  <tr key={i} className={i % 2 === 1 ? "bg-[#F8F3EA]/50" : ""}>
                    <td className="border border-[#E5DED2] px-4 py-3 flex items-center gap-2"><Tag size={14} className="text-[#8B1E2D]" /> {r.type}</td>
                    <td className="border border-[#E5DED2] px-4 py-3 font-bold text-[#8B1E2D]">{r.price}</td>
                    <td className="border border-[#E5DED2] px-4 py-3 text-xs text-[#636363]">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center space-y-3 pt-2">
            <p className="text-sm"><strong>Delivery:</strong> FREE in listed sectors | <strong>Timing:</strong> Same-day 2–5 hours</p>
            <Link href="/islamabad/bouquets/" className="inline-block px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">
              Shop Bouquets
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            Frequently Asked Questions
          </h2>
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
            <a href={whatsappLink("Hi Lahore Bouquet! I have a question about flower prices in Islamabad.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity">
              <MessageCircle size={18} /> Ask on WhatsApp: 0310-4225974
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
