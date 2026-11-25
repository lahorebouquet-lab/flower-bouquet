import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, whatsappLink } from "@/lib/business";
import { MessageCircle, HelpCircle, Gift } from "lucide-react";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo("/islamabad/gifts-and-cakes", {
  title: {
    absolute: "Gifts & Cakes Delivery in Islamabad | Combos & Hampers | Lahore Bouquet",
  },
  description: "Order gifts, cakes and flower combos in Islamabad — birthday combos, anniversary hampers & celebration packages with same-day delivery. WhatsApp: 0310-4225974",
  alternates: { canonical: `${SITE_URL}/islamabad/gifts-and-cakes` },
  openGraph: {
    title: "Gifts & Cakes Delivery in Islamabad | Lahore Bouquet",
    description: "Gift combos and cakes delivered same-day in Islamabad.",
    url: `${SITE_URL}/islamabad/gifts-and-cakes`,
    siteName: "Lahore Bouquet",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gifts & Cakes Delivery in Islamabad | Lahore Bouquet",
    description: "Gift combos, same-day Islamabad delivery.",
  },
});

const FAQS = [
  { q: "Can I order flowers with cake in Islamabad?", a: "Yes. Flower + cake combos are available for birthdays and celebrations. Message us on WhatsApp (0310-4225974) for today's cake options and combo prices." },
  { q: "What gift combos do you offer?", a: "Popular combos include flowers + chocolates, flowers + cake, and flowers + teddy bear. Custom combos can be arranged — just tell us your budget." },
  { q: "Is same-day gift delivery available in Islamabad?", a: "Yes, in covered areas — same-day in 2 to 5 hours, subject to cake and gift availability." },
  { q: "Can I send a combo to someone else's home?", a: "Yes. Give us the recipient's name, full address, a contact number and your message, and we will handle the rest." },
  { q: "Can the cake have a message written on it?", a: "Please ask on WhatsApp when you order. We will confirm whether the message can be written on the cake that day." },
  { q: "Can I order a combo for a specific time?", a: "Yes. Tell us the time you want it to arrive and we will confirm whether it can be done." },
];

const GUIDE_TITLE = "Planning a Gift and Cake Combo in Islamabad";
const GUIDE: [string, string][] = [
  ["Why combos work", "A bouquet on its own is lovely, but a flower and cake combo makes a birthday or anniversary feel complete with one order and one delivery. The most requested combinations are flowers with cake, flowers with chocolates and flowers with a teddy bear."],
  ["How to decide", "Start with the budget and the person. For a birthday at the office, a cake and a small bouquet is usually enough. For an anniversary, add chocolates. For a new baby or a child's birthday, a teddy bear and flowers is a friendly choice. Tell us the budget on WhatsApp and we will suggest what fits."],
  ["Timing and cake availability", "Cakes depend on availability, so order as early in the day as you can and tell us the exact time you need the delivery. If you want a surprise at midnight, the midnight slot runs from 11:30 PM to 12:15 AM and needs to be booked early. We confirm the cake, the price and the time before the order is final."],
  ["Delivery in Islamabad", "Same-day delivery takes 2 to 5 hours in the areas we cover through our local delivery partner, with free delivery in our listed sectors. Check our Islamabad flower delivery page for the sectors, or see Islamabad birthday flowers for ideas that go with a cake."],
];

export default function Page() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Flower Delivery in Islamabad", item: `${SITE_URL}/flower-delivery-islamabad` },
    { "@type": "ListItem", position: 3, name: "Gifts & Cakes in Islamabad", item: `${SITE_URL}/islamabad/gifts-and-cakes` },
  ]};
  return (
    <main className="bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="w-full py-16 px-4 sm:px-6 text-center border-b border-[#E5DED2]">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-[#101012] leading-tight">Gifts & Cakes Delivery in Islamabad</h1>
          <p className="text-sm sm:text-base leading-relaxed"><strong>Complete celebration packages in Islamabad</strong> — flowers with cakes, chocolates, teddy bears and gift hampers. Perfect for birthdays and anniversaries. Same-day delivery. WhatsApp: <strong>0310-4225974</strong>.</p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a href={whatsappLink("Hi Lahore Bouquet! I want a gift + cake combo for delivery in Islamabad.")} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity">Order Gift Combo</a>
            <Link href="/islamabad/birthday-flowers" className="px-6 py-3 rounded-full border border-[#8B1E2D] text-[#8B1E2D] text-sm font-bold hover:bg-[#8B1E2D] hover:text-white transition-colors">Birthday Flowers</Link>
          </div>
        </div>
      </section>
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">Popular Combos</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {[["Flowers + Cake", "The classic birthday surprise package."], ["Flowers + Chocolates", "Romantic and sweet — great for anniversaries."], ["Flowers + Teddy Bear", "Adorable combo for loved ones."]].map(([t, d], i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#F8F3EA] border border-[#E5DED2] text-center">
                <Gift size={20} className="text-[#8B1E2D] mx-auto" />
                <p className="text-sm font-bold mt-2">{t}</p>
                <p className="text-xs text-[#636363] mt-1">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-[#636363]">Prices depend on bouquet + add-on selection. Confirm on WhatsApp before ordering.</p>
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
            <a href={whatsappLink("Hi Lahore Bouquet! I want gifts in Islamabad.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity"><MessageCircle size={18} /> Order: 0310-4225974</a>
          </div>
        </div>
      </section>
    </main>
  );
}
