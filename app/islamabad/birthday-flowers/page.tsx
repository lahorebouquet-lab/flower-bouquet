import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, whatsappLink } from "@/lib/business";
import { Cake, Clock, Truck, MessageCircle, HelpCircle, Gift } from "lucide-react";
import { withSeo } from "@/lib/seo";
import IslamabadDetails from "../../components/IslamabadDetails";

export const metadata: Metadata = withSeo("/islamabad/birthday-flowers", {
  title: {
    absolute: "Birthday Flower Delivery in Islamabad | Same-Day | Lahore Bouquet",
  },
  description: "Send birthday flowers in Islamabad with same-day delivery in 2-5 hours. Birthday bouquets from Rs. 1,239. Order on WhatsApp: 0310-4225974",
  alternates: {
    canonical: `${SITE_URL}/islamabad/birthday-flowers`,
  },
  openGraph: {
    title: "Birthday Flower Delivery in Islamabad | Lahore Bouquet",
    description: "Birthday bouquets delivered same-day in Islamabad. From Rs. 1,239.",
    url: `${SITE_URL}/islamabad/birthday-flowers`,
    siteName: "Lahore Bouquet",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Birthday Flower Delivery in Islamabad | Lahore Bouquet",
    description: "Same-day birthday bouquets Islamabad. From Rs. 1,239. WhatsApp: 0310-4225974",
  },
});

const FAQS = [
  {
    q: "Can I get same-day birthday flower delivery in Islamabad?",
    a: "Yes. Birthday bouquets are delivered same-day in 2 to 5 hours across covered Islamabad areas. Order early in the day for the fastest delivery."
  },
  {
    q: "What birthday bouquets are available in Islamabad?",
    a: "We offer rose bouquets, sunflower bouquets, mixed birthday bouquets and chocolate bouquets starting from Rs. 1,239. Message us on WhatsApp for today's availability."
  },
  {
    q: "Can I add a cake or chocolates with birthday flowers?",
    a: "Yes. Ask on WhatsApp (0310-4225974) about cake and chocolate add-ons with your birthday bouquet order."
  },
  {
    q: "Do you offer midnight birthday surprise delivery in Islamabad?",
    a: "Yes. Midnight surprise delivery slot is 11:30 PM–12:15 AM. Book early on WhatsApp to reserve your slot."
  },
];

const PRODUCTS = [
  { name: "Heartfelt Single Rose Birthday Bouquet", price: "Rs. 1,239", slug: "heartfelt-single-rose-birthday-bouquet" },
  { name: "Romantic Rose Bouquet", price: "Rs. 1,499", slug: "romantic-rose-bouquet" },
  { name: "Sunflower Bouquet", price: "Rs. 1,699", slug: "sunflower-bouquet" },
  { name: "Red Rose Bouquet – Black Wrap", price: "Rs. 1,999", slug: "red-rose-bouquet-black-wrap" },
];

export default function IslamabadBirthdayPage() {
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
      { "@type": "ListItem", position: 3, name: "Birthday Flowers in Islamabad", item: `${SITE_URL}/islamabad/birthday-flowers` },
    ],
  };

  return (
    <main className="bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="w-full py-16 px-4 sm:px-6 text-center border-b border-[#E5DED2]">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-[#101012] leading-tight">
            Birthday Flower Delivery in Islamabad
          </h1>
          <p className="text-sm sm:text-base leading-relaxed">
            <strong>Surprise them on their birthday with fresh flowers in Islamabad</strong> — birthday bouquets delivered same-day in 2 to 5 hours. <strong>Starting from Rs. 1,239</strong> with free delivery in listed sectors. Midnight surprise delivery available. Order on WhatsApp: <strong>0310-4225974</strong>.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a href={whatsappLink("Hi Lahore Bouquet! I want to order birthday flowers for delivery in Islamabad.")} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity">
              Order Birthday Flowers
            </a>
            <Link href="/islamabad/bouquets" className="px-6 py-3 rounded-full border border-[#8B1E2D] text-[#8B1E2D] text-sm font-bold hover:bg-[#8B1E2D] hover:text-white transition-colors">
              All Bouquets
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            Birthday Bouquets for Islamabad
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {PRODUCTS.map((p) => (
              <div key={p.slug} className="p-5 rounded-2xl bg-[#F8F3EA] border border-[#E5DED2] hover:border-[#8B1E2D] transition-colors flex flex-col">
                <h3 className="font-bold text-[#0B0B0B] text-sm flex items-center gap-2"><Cake size={16} className="text-[#8B1E2D]" /> {p.name}</h3>
                <p className="text-[#8B1E2D] font-bold text-base mt-1">{p.price}</p>
                <div className="flex gap-2 mt-3 pt-3 border-t border-[#E5DED2]">
                  <Link href={`/products/${p.slug}`} className="flex-1 text-center px-3 py-2 rounded-full bg-[#8B1E2D] text-white text-xs font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">View</Link>
                  <a href={whatsappLink(`Hi Lahore Bouquet! I want to order the ${p.name} (${p.price}) for birthday delivery in Islamabad.`)} target="_blank" rel="noopener noreferrer" className="flex-1 text-center px-3 py-2 rounded-full bg-[#128C7E] text-white text-xs font-bold hover:opacity-90 transition-opacity">WhatsApp</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2]">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            How Birthday Delivery Works
          </h2>
          <ol className="space-y-3 text-sm leading-relaxed list-decimal list-inside">
            <li><strong>Choose a bouquet</strong> — pick from above or message us your budget on WhatsApp.</li>
            <li><strong>Share details</strong> — recipient's name, phone, Islamabad address and preferred delivery time.</li>
            <li><strong>We confirm</strong> — availability, exact price and delivery slot (2-5 hours or midnight).</li>
            <li><strong>Surprise delivered</strong> — fresh flowers arrive on the birthday, same day.</li>
          </ol>
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
            <a href={whatsappLink("Hi Lahore Bouquet! I want to order birthday flowers in Islamabad.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity">
              <MessageCircle size={18} /> Order on WhatsApp: 0310-4225974
            </a>
          </div>
        </div>
      </section>
      <IslamabadDetails path="/islamabad/birthday-flowers" />
    </main>
  );
}
