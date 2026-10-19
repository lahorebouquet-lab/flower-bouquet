import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, whatsappLink } from "@/lib/business";
import { MessageCircle, HelpCircle, Candy } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Chocolate Bouquets in Islamabad | Sweet Gift Delivery | Lahore Bouquet",
  },
  description: "Order chocolate bouquets in Islamabad — premium chocolates arranged as beautiful bouquets. From Rs. 3,800, same-day delivery. WhatsApp: 0310-4225974",
  alternates: { canonical: `${SITE_URL}/islamabad/chocolate-bouquets/` },
  openGraph: {
    title: "Chocolate Bouquets in Islamabad | Lahore Bouquet",
    description: "Chocolate bouquets delivered same-day in Islamabad. From Rs. 3,800.",
    url: `${SITE_URL}/islamabad/chocolate-bouquets/`,
    siteName: "Lahore Bouquet",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chocolate Bouquets in Islamabad | Lahore Bouquet",
    description: "Chocolate bouquets, same-day Islamabad. From Rs. 3,800.",
  },
};

const FAQS = [
  { q: "What chocolates are used in the bouquets?", a: "We use quality branded chocolates. Ask on WhatsApp (0310-4225974) about current chocolate options and customization." },
  { q: "How much do chocolate bouquets cost in Islamabad?", a: "Chocolate bouquets start from Rs. 3,800. Larger premium arrangements are available — message us for today's options." },
  { q: "Can I combine flowers with chocolates?", a: "Yes! Flower + chocolate combo bouquets are popular for birthdays and anniversaries. Ask on WhatsApp for combo options." },
  { q: "Is same-day chocolate bouquet delivery available?", a: "Yes, in covered Islamabad areas — same-day in 2 to 5 hours, subject to availability." },
];

export default function Page() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Flower Delivery in Islamabad", item: `${SITE_URL}/flower-delivery-islamabad` },
    { "@type": "ListItem", position: 3, name: "Chocolate Bouquets in Islamabad", item: `${SITE_URL}/islamabad/chocolate-bouquets/` },
  ]};
  return (
    <main className="bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="w-full py-16 px-4 sm:px-6 text-center border-b border-[#E5DED2]">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-[#101012] leading-tight">Chocolate Bouquets in Islamabad</h1>
          <p className="text-sm sm:text-base leading-relaxed"><strong>Delicious chocolate bouquets delivered in Islamabad</strong> — premium chocolates beautifully arranged, perfect for birthdays, anniversaries and sweet surprises. <strong>From Rs. 3,800</strong>, same-day delivery. WhatsApp: <strong>0310-4225974</strong>.</p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a href={whatsappLink("Hi Lahore Bouquet! I want a chocolate bouquet for delivery in Islamabad.")} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity">Order Chocolate Bouquet</a>
            <Link href="/islamabad/bouquets/" className="px-6 py-3 rounded-full border border-[#8B1E2D] text-[#8B1E2D] text-sm font-bold hover:bg-[#8B1E2D] hover:text-white transition-colors">Flower Bouquets</Link>
          </div>
        </div>
      </section>
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">Perfect For</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[["Birthdays", "A sweet alternative to traditional flower bouquets."], ["Anniversaries", "Combine romance with indulgence."], ["Celebrations", "Great for congratulations and festive surprises."]].map(([t, d], i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#F8F3EA] border border-[#E5DED2] text-center">
                <Candy size={20} className="text-[#8B1E2D] mx-auto" />
                <p className="text-sm font-bold mt-2">{t}</p>
                <p className="text-xs text-[#636363] mt-1">{d}</p>
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
            <a href={whatsappLink("Hi Lahore Bouquet! I want chocolates in Islamabad.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity"><MessageCircle size={18} /> Order: 0310-4225974</a>
          </div>
        </div>
      </section>
    </main>
  );
}
