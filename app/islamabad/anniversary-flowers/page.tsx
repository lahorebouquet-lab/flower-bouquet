import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, whatsappLink } from "@/lib/business";
import { Heart, Clock, Truck, MessageCircle, HelpCircle } from "lucide-react";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo("/islamabad/anniversary-flowers", {
  title: {
    absolute: "Anniversary Flowers in Islamabad | Romantic Bouquets | Lahore Bouquet",
  },
  description: "Celebrate anniversaries in Islamabad with romantic rose bouquets delivered same-day in 2-5 hours. From Rs. 1,499. Order on WhatsApp: 0310-4225974",
  alternates: {
    canonical: `${SITE_URL}/islamabad/anniversary-flowers/`,
  },
  openGraph: {
    title: "Anniversary Flowers in Islamabad | Lahore Bouquet",
    description: "Romantic anniversary bouquets delivered same-day in Islamabad. From Rs. 1,499.",
    url: `${SITE_URL}/islamabad/anniversary-flowers/`,
    siteName: "Lahore Bouquet",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anniversary Flowers in Islamabad | Lahore Bouquet",
    description: "Romantic bouquets, same-day Islamabad. From Rs. 1,499. WhatsApp: 0310-4225974",
  },
});

const FAQS = [
  {
    q: "What are the best anniversary flowers for Islamabad delivery?",
    a: "Red rose bouquets are the classic anniversary choice. We also offer premium mixed bouquets and luxury arrangements. All delivered same-day in Islamabad."
  },
  {
    q: "Can I schedule anniversary flower delivery in advance?",
    a: "Yes. Message us on WhatsApp (0310-4225974) with your anniversary date and we'll arrange delivery for that day."
  },
  {
    q: "Do you deliver anniversary flowers at midnight in Islamabad?",
    a: "Yes. Midnight surprise delivery slot is 11:30 PM–12:15 AM — perfect for anniversary surprises. Book early to reserve."
  },
  {
    q: "How much do anniversary bouquets cost in Islamabad?",
    a: "Anniversary rose bouquets start from Rs. 1,499. Premium and luxury options go up to Rs. 7,499. Delivery is free in listed sectors."
  },
];

const PRODUCTS = [
  { name: "Romantic Rose Bouquet", price: "Rs. 1,499", slug: "romantic-rose-bouquet" },
  { name: "Single Red Rose Bouquet", price: "Rs. 1,499", slug: "single-red-rose-bouquet" },
  { name: "Elegant Autumn Red Rose Bouquet", price: "Rs. 1,599", slug: "elegant-autumn-red-rose-bouquet" },
  { name: "Red Rose Bouquet – Black Wrap", price: "Rs. 1,999", slug: "red-rose-bouquet-black-wrap" },
];

export default function IslamabadAnniversaryPage() {
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
      { "@type": "ListItem", position: 3, name: "Anniversary Flowers in Islamabad", item: `${SITE_URL}/islamabad/anniversary-flowers/` },
    ],
  };

  return (
    <main className="bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="w-full py-16 px-4 sm:px-6 text-center border-b border-[#E5DED2]">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-[#101012] leading-tight">
            Anniversary Flowers in Islamabad
          </h1>
          <p className="text-sm sm:text-base leading-relaxed">
            <strong>Celebrate your anniversary with romantic rose bouquets in Islamabad</strong> — delivered same-day in 2 to 5 hours. <strong>From Rs. 1,499</strong> with free delivery in listed sectors. Midnight surprise delivery available. Order on WhatsApp: <strong>0310-4225974</strong>.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a href={whatsappLink("Hi Lahore Bouquet! I want to order anniversary flowers for delivery in Islamabad.")} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity">
              Order Anniversary Flowers
            </a>
            <Link href="/islamabad/bouquets/" className="px-6 py-3 rounded-full border border-[#8B1E2D] text-[#8B1E2D] text-sm font-bold hover:bg-[#8B1E2D] hover:text-white transition-colors">
              All Bouquets
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            Romantic Anniversary Bouquets
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {PRODUCTS.map((p) => (
              <div key={p.slug} className="p-5 rounded-2xl bg-[#F8F3EA] border border-[#E5DED2] hover:border-[#8B1E2D] transition-colors flex flex-col">
                <h3 className="font-bold text-[#0B0B0B] text-sm flex items-center gap-2"><Heart size={16} className="text-[#8B1E2D]" /> {p.name}</h3>
                <p className="text-[#8B1E2D] font-bold text-base mt-1">{p.price}</p>
                <div className="flex gap-2 mt-3 pt-3 border-t border-[#E5DED2]">
                  <Link href={`/products/${p.slug}`} className="flex-1 text-center px-3 py-2 rounded-full bg-[#8B1E2D] text-white text-xs font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">View</Link>
                  <a href={whatsappLink(`Hi Lahore Bouquet! I want to order the ${p.name} (${p.price}) for anniversary delivery in Islamabad.`)} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-3 py-2 rounded-full bg-[#128C7E] text-white text-xs font-bold hover:opacity-90 transition-opacity">WhatsApp</a>
                </div>
              </div>
            ))}
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
            <a href={whatsappLink("Hi Lahore Bouquet! I want to order anniversary flowers in Islamabad.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity">
              <MessageCircle size={18} /> Order on WhatsApp: 0310-4225974
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
