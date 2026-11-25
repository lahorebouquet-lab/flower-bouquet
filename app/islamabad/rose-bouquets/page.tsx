import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, whatsappLink } from "@/lib/business";
import { MessageCircle, HelpCircle, Flower2 } from "lucide-react";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo("/islamabad/rose-bouquets", {
  title: {
    absolute: "Red Rose Bouquets in Islamabad | Fresh Roses Delivery | Lahore Bouquet",
  },
  description: "Order red rose bouquets in Islamabad — fresh hand-tied roses delivered same-day in 2-5 hours. From Rs. 1,499. WhatsApp: 0310-4225974",
  alternates: { canonical: `${SITE_URL}/islamabad/rose-bouquets` },
  openGraph: {
    title: "Red Rose Bouquets in Islamabad | Lahore Bouquet",
    description: "Fresh red roses delivered same-day in Islamabad. From Rs. 1,499.",
    url: `${SITE_URL}/islamabad/rose-bouquets`,
    siteName: "Lahore Bouquet",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Red Rose Bouquets in Islamabad | Lahore Bouquet",
    description: "Fresh red roses, same-day Islamabad. From Rs. 1,499.",
  },
});

const FAQS = [
  { q: "How fresh are the roses delivered in Islamabad?", a: "Our roses are hand-tied fresh on the day of delivery. We use quality red roses and wrap them in premium packaging." },
  { q: "What red rose bouquet sizes are available?", a: "From single rose bouquets (Rs. 1,499) to medium arrangements (Rs. 2,600–3,800) and large signature Dutch rose bouquets (Rs. 7,499)." },
  { q: "Can I get red roses delivered today in Islamabad?", a: "Yes. Order before the daily cutoff and your roses arrive same-day in 2 to 5 hours in covered areas." },
  { q: "Can I choose the wrap colour for my rose bouquet?", a: "Yes. Tell us the colour you prefer on WhatsApp when you order and we will confirm what is available for that day. The black wrap and classic wraps are the most requested." },
  { q: "Can I add a message card?", a: "Yes. Send us the message with your order and we will include it with the bouquet. Please share the recipient's name exactly as it should appear." },
  { q: "What if the recipient is not at home?", a: "Share a second contact number when you order. The delivery partner will call before arriving and can hold the bouquet for a short time or hand it to a family member or the guard on your instruction." },
];

const PRODUCTS = [
  { name: "Romantic Rose Bouquet", price: "Rs. 1,499", slug: "romantic-rose-bouquet" },
  { name: "Single Red Rose Bouquet", price: "Rs. 1,499", slug: "single-red-rose-bouquet" },
  { name: "Elegant Autumn Red Rose Bouquet", price: "Rs. 1,599", slug: "elegant-autumn-red-rose-bouquet" },
  { name: "Red Rose Bouquet – Black Wrap", price: "Rs. 1,999", slug: "red-rose-bouquet-black-wrap" },
];

const GUIDE_TITLE = "Choosing a Red Rose Bouquet for Islamabad";
const GUIDE: [string, string][] = [
  ["Which size suits the moment", "A single hand-tied rose bouquet from Rs. 1,499 works for a quiet 'thinking of you', a small apology or an office desk. Medium arrangements at Rs. 2,600 to 3,800 are the usual pick for birthdays and anniversaries because they photograph well and still fit in a car seat. The large signature Dutch rose bouquet at Rs. 7,499 is for proposals, milestone anniversaries and the occasions where the flowers are the main gift."],
  ["What 'fresh' should look like when it arrives", "Look for tight, firm buds with a slight give at the base, green and upright sepals, and petals that are free of brown edges. Roses that open fully within a few hours of delivery were cut too late. Before every order leaves, we send a photo and video on WhatsApp so you can see the exact bouquet that is being dispatched, and you can ask for changes while it is still being tied."],
  ["Keeping roses fresh after delivery", "Trim about two centimetres off the stems at an angle, remove any leaves that would sit below the waterline and use clean, cool water. Keep the vase away from direct sun, fans and fruit bowls. Change the water every day or two and re-trim the stems once. Treated this way, roses commonly stay good for five to seven days."],
  ["Delivery in Islamabad", "Orders are delivered the same day in 2 to 5 hours through our local delivery partner, with free delivery in the sectors we list: F-6, F-7, F-8, F-10, F-11, G-6, G-7, G-9, G-10, G-11, G-13, I-8, I-9, I-10, E-7, E-11, D-12, B-17, Blue Area, DHA Islamabad, Bahria Town, Gulberg Greens and Bahria Enclave. Order earlier in the day for the fastest slot. If you want the flowers to arrive at a specific time, tell us when you order and we will confirm it. See the full list on our Islamabad flower delivery page."],
];

export default function Page() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Flower Delivery in Islamabad", item: `${SITE_URL}/flower-delivery-islamabad` },
    { "@type": "ListItem", position: 3, name: "Rose Bouquets in Islamabad", item: `${SITE_URL}/islamabad/rose-bouquets` },
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
            <Link href="/islamabad/bouquets" className="px-6 py-3 rounded-full border border-[#8B1E2D] text-[#8B1E2D] text-sm font-bold hover:bg-[#8B1E2D] hover:text-white transition-colors">All Bouquets</Link>
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
            <a href={whatsappLink("Hi Lahore Bouquet! I want red roses in Islamabad.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity"><MessageCircle size={18} /> Order: 0310-4225974</a>
          </div>
        </div>
      </section>
    </main>
  );
}
