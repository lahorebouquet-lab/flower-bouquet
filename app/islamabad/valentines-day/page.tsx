import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, whatsappLink } from "@/lib/business";
import { MessageCircle, HelpCircle, Heart } from "lucide-react";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo("/islamabad/valentines-day", {
  title: {
    absolute: "Valentine's Day Flowers in Islamabad 2027 | Romantic Gifts | Lahore Bouquet",
  },
  description: "Valentine's Day 2027 flowers in Islamabad — romantic rose bouquets, luxury deals from Rs. 5,000 to Rs. 100,000. Enquire about Islamabad delivery. WhatsApp: 0310-4225974",
  alternates: { canonical: `${SITE_URL}/islamabad/valentines-day` },
  openGraph: {
    title: "Valentine's Day Flowers in Islamabad 2027 | Lahore Bouquet",
    description: "Valentine's deals Rs. 5,000–100,000. Enquire about Islamabad delivery.",
    url: `${SITE_URL}/islamabad/valentines-day`,
    siteName: "Lahore Bouquet",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Valentine's Day Flowers in Islamabad 2027 | Lahore Bouquet",
    description: "Valentine's deals for Islamabad. Enquire on WhatsApp.",
  },
});

const FAQS = [
  { q: "Can I order Valentine's Day flowers for Islamabad?", a: "Yes. Our Valentine's Day 2027 collection (Rs. 5,000–100,000) is available for Islamabad delivery. Message us on WhatsApp (0310-4225974) to confirm availability for your area." },
  { q: "When should I order for Valentine's Day 2027?", a: "Order as early as possible — Valentine's week is our busiest period. Early booking ensures availability and your preferred delivery slot." },
  { q: "Is midnight Valentine's delivery available in Islamabad?", a: "Midnight surprise delivery (11:30 PM–12:15 AM) may be available — confirm early on WhatsApp as slots are limited." },
  { q: "Can I schedule a delivery for 14 February?", a: "Yes. Share the date, the time window and the address when you order, and we will confirm." },
  { q: "Can I send a surprise to an office?", a: "Yes. Give us the office address, the floor or reception details and the recipient's name. Keep a second contact number ready." },
  { q: "What if I order on 13 or 14 February?", a: "Late orders are possible only if stock and slots remain. Message us as early in the day as you can." },
];

const GUIDE_TITLE = "Planning Valentine's Day Flowers in Islamabad";
const GUIDE: [string, string][] = [
  ["Order early, even if it feels too soon", "Valentine's week is our busiest period and delivery slots fill up. Booking early is the single best thing you can do to get the bouquet you want at the time you want it. Our Valentine's deals range from Rs. 5,000 to Rs. 100,000, so there is a choice for every budget."],
  ["Midnight surprises", "A midnight delivery from 11:30 PM to 12:15 AM is the classic way to start 14 February. Slots are limited and must be confirmed early on WhatsApp, with the full address and a second contact number so the delivery partner can reach the recipient."],
  ["Choosing between the deals", "Smaller deals suit a simple, thoughtful gesture. Mid-range bouquets suit most couples. The larger luxury arrangements are for proposals and big anniversaries. Send us your budget and the person's taste, and we will suggest the right one. All the deals are listed with details on our Valentine's page."],
  ["Delivery in Islamabad", "Same-day delivery in Islamabad takes 2 to 5 hours in covered areas through our local delivery partner, with free delivery in our listed sectors. Confirm availability for your sector on WhatsApp when you order, since Valentine's demand is high. See our Islamabad flower delivery page for the sector list."],
];

export default function Page() {
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Flower Delivery in Islamabad", item: `${SITE_URL}/flower-delivery-islamabad` },
    { "@type": "ListItem", position: 3, name: "Valentine's Day in Islamabad", item: `${SITE_URL}/islamabad/valentines-day` },
  ]};
  return (
    <main className="bg-[#0B0B0B] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <section className="w-full py-16 px-4 sm:px-6 text-center border-b border-[#2A2A2A]">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold leading-tight">Valentine's Day Flowers in Islamabad <span className="text-[#C6A15B]">2027</span></h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed">Make 14 February 2027 unforgettable — <strong className="text-white">romantic Valentine's packages from Rs. 5,000 to Rs. 100,000</strong>, now available for Islamabad. Enquire about delivery, availability and timing on WhatsApp.</p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link href="/valentine-day-flowers-lahore" className="px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">View 7 Valentine's Deals</Link>
            <a href={whatsappLink("Hi Lahore Bouquet! I want Valentine's Day 2027 flowers for delivery in Islamabad.")} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity">Enquire on WhatsApp</a>
          </div>
        </div>
      </section>
      <section className="w-full py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-center">Valentine's Deals for Islamabad</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[["Sweet Love Deal", "Rs. 5,000", "Roses + teddy + chocolates"], ["Love Surprise Deal", "Rs. 10,000", "Premium bouquet + gifts"], ["Royal Romance Deal", "Rs. 15,000", "Luxury roses + hamper"], ["Millionaire Experience", "Rs. 100,000", "Ultimate luxury package"]].map(([n, p, d], i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] hover:border-[#C6A15B] transition-colors">
                <h3 className="font-bold text-sm flex items-center gap-2"><Heart size={16} className="text-[#C6A15B]" /> {n}</h3>
                <p className="text-[#C6A15B] font-bold text-base mt-1">{p}</p>
                <p className="text-xs text-white/60 mt-1">{d}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm"><Link href="/valentine-day-flowers-lahore" className="text-[#C6A15B] underline font-semibold">See all 7 deals with details →</Link></p>
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
      <section className="w-full py-16 px-4 sm:px-6 border-t border-[#2A2A2A]">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-center">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <details key={i} className="p-5 rounded-2xl bg-[#1A1A1A] border border-[#2A2A2A] group">
                <summary className="font-bold text-sm cursor-pointer list-none flex justify-between items-center gap-2">
                  <span className="flex items-center gap-2"><HelpCircle size={16} className="text-[#C6A15B] shrink-0" /> {f.q}</span>
                  <span className="text-[#C6A15B] group-open:rotate-45 transition-transform text-lg leading-none shrink-0">+</span>
                </summary>
                <p className="text-sm mt-2 leading-relaxed text-white/70">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center pt-4">
            <a href={whatsappLink("Hi! Valentine's 2027 Islamabad enquiry.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity"><MessageCircle size={18} /> Enquire: 0310-4225974</a>
          </div>
        </div>
      </section>
    </main>
  );
}
