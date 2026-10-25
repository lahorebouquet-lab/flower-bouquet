import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, whatsappLink } from "@/lib/business";
import { MessageCircle, HelpCircle, Sparkles } from "lucide-react";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo("/islamabad/wedding-flowers", {
  title: {
    absolute: "Wedding Flowers in Islamabad | Bridal Bouquets & Decor | Lahore Bouquet",
  },
  description: "Wedding flowers in Islamabad — bridal bouquets, event decoration & floral arrangements. Enquire about packages and availability on WhatsApp: 0310-4225974",
  alternates: { canonical: `${SITE_URL}/islamabad/wedding-flowers` },
  openGraph: {
    title: "Wedding Flowers in Islamabad | Lahore Bouquet",
    description: "Bridal bouquets and wedding floral decoration in Islamabad. Enquire now.",
    url: `${SITE_URL}/islamabad/wedding-flowers`,
    siteName: "Lahore Bouquet",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Flowers in Islamabad | Lahore Bouquet",
    description: "Wedding florals Islamabad. Enquire: 0310-4225974",
  },
});

const FAQS = [
  { q: "Do you provide bridal bouquets in Islamabad?", a: "Yes. Bridal bouquets can be arranged for Islamabad weddings. Message us on WhatsApp (0310-4225974) with your wedding date for availability and pricing." },
  { q: "Can you decorate wedding venues in Islamabad?", a: "Event and venue decoration enquiries are welcome. Share your venue, date and requirements on WhatsApp for a custom quote." },
  { q: "How early should I book wedding flowers?", a: "Book at least 1–2 weeks in advance for weddings to ensure flower availability and proper planning." },
];

export default function Page() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Flower Delivery in Islamabad", item: `${SITE_URL}/flower-delivery-islamabad` },
    { "@type": "ListItem", position: 3, name: "Wedding Flowers in Islamabad", item: `${SITE_URL}/islamabad/wedding-flowers` },
  ]};
  return (
    <main className="bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="w-full py-16 px-4 sm:px-6 text-center border-b border-[#E5DED2]">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-[#101012] leading-tight">Wedding Flowers in Islamabad</h1>
          <p className="text-sm sm:text-base leading-relaxed"><strong>Bridal bouquets, wedding arrangements and event florals in Islamabad</strong> — elegant flowers for your special day. Enquire about packages, availability and custom quotes on WhatsApp: <strong>0310-4225974</strong>.</p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a href={whatsappLink("Hi Lahore Bouquet! I need wedding flowers in Islamabad. My event date is: ___")} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity">Enquire for Wedding</a>
            <Link href="/islamabad/bouquets" className="px-6 py-3 rounded-full border border-[#8B1E2D] text-[#8B1E2D] text-sm font-bold hover:bg-[#8B1E2D] hover:text-white transition-colors">View Bouquets</Link>
          </div>
        </div>
      </section>
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">Wedding Floral Services</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[["Bridal Bouquets", "Hand-tied bouquets for the bride, matched to your theme."], ["Event Arrangements", "Stage, entrance and table floral arrangements."], ["Custom Packages", "Tell us your vision — we'll create a custom quote."]].map(([t, d], i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#F8F3EA] border border-[#E5DED2] text-center">
                <Sparkles size={20} className="text-[#8B1E2D] mx-auto" />
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
            <a href={whatsappLink("Hi! Wedding flowers Islamabad enquiry.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity"><MessageCircle size={18} /> Enquire: 0310-4225974</a>
          </div>
        </div>
      </section>
    </main>
  );
}
