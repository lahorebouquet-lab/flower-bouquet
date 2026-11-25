import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, whatsappLink } from "@/lib/business";
import { MessageCircle, HelpCircle, Sun } from "lucide-react";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo("/islamabad/sunflower-bouquets", {
  title: {
    absolute: "Sunflower Bouquets in Islamabad | Bright & Fresh | Lahore Bouquet",
  },
  description: "Order bright sunflower bouquets in Islamabad with same-day delivery in 2-5 hours. From Rs. 1,699. Fresh hand-tied sunflowers. WhatsApp: 0310-4225974",
  alternates: { canonical: `${SITE_URL}/islamabad/sunflower-bouquets` },
  openGraph: {
    title: "Sunflower Bouquets in Islamabad | Lahore Bouquet",
    description: "Bright sunflower bouquets, same-day Islamabad. From Rs. 1,699.",
    url: `${SITE_URL}/islamabad/sunflower-bouquets`,
    siteName: "Lahore Bouquet",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunflower Bouquets in Islamabad | Lahore Bouquet",
    description: "Sunflower bouquets, same-day Islamabad. From Rs. 1,699.",
  },
});

const FAQS = [
  { q: "Are sunflower bouquets available in Islamabad?", a: "Yes, subject to seasonal availability. Our Sunflower Bouquet starts from Rs. 1,699. Message us on WhatsApp to check today's availability." },
  { q: "How long do sunflowers last?", a: "Fresh sunflowers typically last 5–7 days with proper care — fresh water daily and keeping them away from direct sunlight." },
  { q: "Can I get sunflower delivery today in Islamabad?", a: "Yes, when in stock. Same-day delivery in 2 to 5 hours across covered Islamabad areas." },
  { q: "Can sunflowers be combined with roses?", a: "Yes. Sunflower and rose mixes are popular for birthdays. Tell us your budget on WhatsApp and we will suggest a combination that is available that day." },
  { q: "Are sunflower bouquets good for get-well gifts?", a: "They are one of the best choices for it. The bright colour lifts a room, and they stay fresh for several days. Check the hospital's policy on flowers before sending them to a ward." },
  { q: "Do sunflowers have a scent?", a: "Only a very mild one. If fragrance matters to the recipient, roses or lilies are a better choice." },
];

const GUIDE_TITLE = "A Practical Guide to Sunflower Bouquets in Islamabad";
const GUIDE: [string, string][] = [
  ["When a sunflower bouquet is the right choice", "Sunflowers are the cheerful option. They suit birthdays, congratulations, graduations, get-well messages and any time you want a gift that does not look like the usual rose bouquet. Our Sunflower Bouquet starts from Rs. 1,699, which makes it a good middle-budget gift."],
  ["Seasonal availability, honestly", "Sunflowers depend on supply and season, so they are not always in stock. That is why we ask you to message us on WhatsApp before ordering. If sunflowers are not available that day we will tell you straight away and suggest the closest alternative instead of substituting without asking."],
  ["How to make them last", "Sunflowers are thirsty. Use a tall vase with plenty of clean water and top it up daily, because they drink a lot. Trim the stems at an angle, remove leaves below the waterline and keep the flowers out of direct afternoon sun. With basic care they usually last five to seven days."],
  ["Delivery in Islamabad", "Same-day delivery takes 2 to 5 hours in the areas we cover, with Rs. 800 delivery in our listed sectors, including F-6, F-7, F-8, F-10, F-11, G-6, G-7, G-9, G-10, G-11, G-13, I-8, I-9, I-10, E-7, E-11, D-12, B-17, Blue Area, DHA Islamabad, Bahria Town, Gulberg Greens and Bahria Enclave. We send a photo and video on WhatsApp before dispatch so you can approve the bouquet. For colour combinations with roses, see our Islamabad flower bouquets page."],
];

export default function Page() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Flower Delivery in Islamabad", item: `${SITE_URL}/flower-delivery-islamabad` },
    { "@type": "ListItem", position: 3, name: "Sunflower Bouquets in Islamabad", item: `${SITE_URL}/islamabad/sunflower-bouquets` },
  ]};
  return (
    <main className="bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="w-full py-16 px-4 sm:px-6 text-center border-b border-[#E5DED2]">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-[#101012] leading-tight">Sunflower Bouquets in Islamabad</h1>
          <p className="text-sm sm:text-base leading-relaxed"><strong>Bright, cheerful sunflower bouquets in Islamabad</strong> — perfect for birthdays, get-well wishes and brightening someone's day. <strong>From Rs. 1,699</strong>, same-day delivery. WhatsApp: <strong>0310-4225974</strong>.</p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a href={whatsappLink("Hi Lahore Bouquet! I want a sunflower bouquet for delivery in Islamabad.")} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity">Order Sunflowers</a>
            <Link href="/products/sunflower-bouquet" className="px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">View Bouquet — Rs. 1,699</Link>
          </div>
        </div>
      </section>
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">Why Sunflowers?</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[["Bright & Cheerful", "Sunflowers instantly lift moods — ideal for birthdays and celebrations."], ["Long-Lasting", "Fresh sunflowers last 5–7 days with basic care."], ["Unique Gift", "Stand out from typical rose bouquets with bold yellow blooms."]].map(([t, d], i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#F8F3EA] border border-[#E5DED2] text-center">
                <Sun size={20} className="text-[#C6A15B] mx-auto" />
                <p className="text-sm font-bold mt-2">{t}</p>
                <p className="text-xs text-[#636363] mt-1">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2] bg-[#F8F3EA]">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">{GUIDE_TITLE}</h2>
          {GUIDE.map(([heading, body], i) => (
            <div key={i} className="space-y-2">
              <h3 className="font-playfair text-lg sm:text-xl font-bold text-[#101012]">{heading}</h3>
              <p className="text-sm sm:text-base leading-relaxed">{body}</p>
            </div>
          ))}
          <p className="text-sm text-center text-[#636363]">
            More: <Link href="/flower-delivery-islamabad" className="underline text-[#8B1E2D]">Flower delivery in Islamabad</Link>
            {" · "}<Link href="/islamabad/bouquets" className="underline text-[#8B1E2D]">Bouquets</Link>
            {" · "}<Link href="/islamabad/flower-prices" className="underline text-[#8B1E2D]">Prices</Link>
          </p>
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
            <a href={whatsappLink("Hi Lahore Bouquet! I want sunflowers in Islamabad.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity"><MessageCircle size={18} /> Order: 0310-4225974</a>
          </div>
        </div>
      </section>
    </main>
  );
}
