import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, whatsappLink } from "@/lib/business";
import { MapPin, Truck, Clock, MessageCircle, HelpCircle, Flower2 } from "lucide-react";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo("/islamabad/bouquets", {
  title: {
    absolute: "Flower Bouquets in Islamabad | Fresh Delivery | Lahore Bouquet",
  },
  description: "Order fresh flower bouquets in Islamabad — roses, sunflowers, lilies & mixed bouquets with same-day delivery. From Rs. 1,239. WhatsApp: 0310-4225974",
  alternates: {
    canonical: `${SITE_URL}/islamabad/bouquets`,
  },
  openGraph: {
    title: "Flower Bouquets in Islamabad | Lahore Bouquet",
    description: "Fresh bouquets delivered same-day in Islamabad. Roses, sunflowers & more from Rs. 1,239.",
    url: `${SITE_URL}/islamabad/bouquets`,
    siteName: "Lahore Bouquet",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flower Bouquets in Islamabad | Lahore Bouquet",
    description: "Fresh bouquets, same-day delivery Islamabad. From Rs. 1,239. WhatsApp: 0310-4225974",
  },
});

const FAQS = [
  {
    q: "What types of bouquets are available for Islamabad delivery?",
    a: "We offer rose bouquets, sunflower bouquets, mixed flower bouquets, and chocolate bouquets for Islamabad delivery. All bouquets are hand-tied fresh on the day of delivery."
  },
  {
    q: "How much do bouquets cost in Islamabad?",
    a: "Bouquets start from Rs. 1,239 for hand-tied small bouquets. Medium rose bouquets are Rs. 2,600–3,800, and large signature arrangements are Rs. 7,499. Delivery is free in listed Islamabad sectors."
  },
  {
    q: "Can I get same-day bouquet delivery in Islamabad?",
    a: "Yes. Bouquets are delivered same-day in 2 to 5 hours across covered Islamabad areas including F-6, F-7, DHA and Bahria Town."
  },
  {
    q: "How do I order a bouquet for Islamabad?",
    a: "Message us on WhatsApp at 0310-4225974 with the bouquet name and delivery address. We'll confirm availability, price and delivery time."
  },
];

const PRODUCTS = [
  { name: "Romantic Rose Bouquet", price: "Rs. 1,499", slug: "romantic-rose-bouquet" },
  { name: "Single Red Rose Bouquet", price: "Rs. 1,499", slug: "single-red-rose-bouquet" },
  { name: "Elegant Autumn Red Rose Bouquet", price: "Rs. 1,599", slug: "elegant-autumn-red-rose-bouquet" },
  { name: "Sunflower Bouquet", price: "Rs. 1,699", slug: "sunflower-bouquet" },
  { name: "Red Rose Bouquet – Black Wrap", price: "Rs. 1,999", slug: "red-rose-bouquet-black-wrap" },
  { name: "Heartfelt Single Rose Birthday Bouquet", price: "Rs. 1,239", slug: "heartfelt-single-rose-birthday-bouquet" },
];

export default function IslamabadBouquetsPage() {
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
      { "@type": "ListItem", position: 3, name: "Bouquets in Islamabad", item: `${SITE_URL}/islamabad/bouquets` },
    ],
  };

  return (
    <main className="bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="w-full py-16 px-4 sm:px-6 text-center border-b border-[#E5DED2]">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-[#101012] leading-tight">
            Flower Bouquets in Islamabad
          </h1>
          <p className="text-sm sm:text-base leading-relaxed">
            <strong>Order fresh flower bouquets online in Islamabad</strong> — hand-tied roses, sunflowers and mixed bouquets delivered same-day in 2 to 5 hours. <strong>Starting from Rs. 1,239</strong> with free delivery in listed sectors. Order on WhatsApp: <strong>0310-4225974</strong>.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a href={whatsappLink("Hi Lahore Bouquet! I want to order a flower bouquet for delivery in Islamabad.")} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity">
              Order on WhatsApp
            </a>
            <Link href="/flower-delivery-islamabad" className="px-6 py-3 rounded-full border border-[#8B1E2D] text-[#8B1E2D] text-sm font-bold hover:bg-[#8B1E2D] hover:text-white transition-colors">
              Islamabad Delivery Info
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            Bouquets Available for Islamabad
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PRODUCTS.map((p) => (
              <div key={p.slug} className="p-5 rounded-2xl bg-[#F8F3EA] border border-[#E5DED2] hover:border-[#8B1E2D] transition-colors flex flex-col">
                <h3 className="font-bold text-[#0B0B0B] text-sm flex items-center gap-2"><Flower2 size={16} className="text-[#8B1E2D]" /> {p.name}</h3>
                <p className="text-[#8B1E2D] font-bold text-base mt-1">{p.price}</p>
                <div className="flex gap-2 mt-3 pt-3 border-t border-[#E5DED2]">
                  <Link href={`/products/${p.slug}`} className="flex-1 text-center px-3 py-2 rounded-full bg-[#8B1E2D] text-white text-xs font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">View</Link>
                  <a href={whatsappLink(`Hi Lahore Bouquet! I want to order the ${p.name} (${p.price}) for delivery in Islamabad.`)} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-3 py-2 rounded-full bg-[#128C7E] text-white text-xs font-bold hover:opacity-90 transition-opacity">WhatsApp</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2]">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            Same-Day Bouquet Delivery in Islamabad
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-[#E5DED2] text-center">
              <Clock size={20} className="text-[#8B1E2D] mx-auto" />
              <p className="text-sm font-bold mt-2">2–5 Hours</p>
              <p className="text-xs text-[#636363] mt-1">Same-day delivery in covered areas</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#E5DED2] text-center">
              <Truck size={20} className="text-[#8B1E2D] mx-auto" />
              <p className="text-sm font-bold mt-2">Free Delivery</p>
              <p className="text-xs text-[#636363] mt-1">In all listed Islamabad sectors</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#E5DED2] text-center">
              <MapPin size={20} className="text-[#8B1E2D] mx-auto" />
              <p className="text-sm font-bold mt-2">6+ Sectors</p>
              <p className="text-xs text-[#636363] mt-1">F-6, F-7, F-8, G-11, DHA, Bahria Town</p>
            </div>
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
            <a href={whatsappLink("Hi Lahore Bouquet! I want to order flowers in Islamabad.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity">
              <MessageCircle size={18} /> Order on WhatsApp: 0310-4225974
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
