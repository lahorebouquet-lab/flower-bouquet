import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, whatsappLink } from "@/lib/business";
import { Truck, Clock, Camera, MessageCircle, HelpCircle } from "lucide-react";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo("/send-flowers-to-lahore-from-uk", {
  title: {
    absolute: "Send Flowers to Lahore from UK | Same-Day Delivery",
  },
  description: "Send flowers to Lahore from the UK. Pay by international card, see a WhatsApp photo before dispatch. Same-day delivery in 2–5 hours, from Rs. 1,239.",
  alternates: {
    canonical: `${SITE_URL}/send-flowers-to-lahore-from-uk`,
  },
  openGraph: {
    title: "Send Flowers to Lahore from UK | Same-Day Delivery",
    description: "Send flowers to Lahore from the UK. Pay by international card, see a WhatsApp photo before dispatch. Same-day delivery in 2–5 hours, from Rs. 1,239.",
    url: `${SITE_URL}/send-flowers-to-lahore-from-uk`,
    siteName: "Lahore Bouquet",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Send Flowers to Lahore from UK | Same-Day Delivery",
    description: "Send flowers to Lahore from the UK. Pay by international card, see a WhatsApp photo before dispatch. Same-day delivery in 2–5 hours, from Rs. 1,239.",
  },
});

const FAQS = [
  {
    "q": "Can I pay with a UK debit or credit card?",
    "a": "Yes. We accept international debit and credit cards, and bank transfer. Cash on delivery is not available for orders placed from abroad — payment is made before the bouquet is dispatched."
  },
  {
    "q": "How long does flower delivery take in Lahore?",
    "a": "Same-day delivery in 2 to 5 hours for orders placed before 4:00 PM Pakistan time. Order earlier in the day for the fastest delivery."
  },
  {
    "q": "Can I see the bouquet before it is delivered?",
    "a": "Yes. Our florist sends you a real photo of the actual bouquet on WhatsApp for your approval before dispatch."
  },
  {
    "q": "What is the time difference between the UK and Lahore?",
    "a": "Lahore is 5 hours ahead of London in winter and 4 hours ahead in summer, when the UK is on British Summer Time."
  },
  {
    "q": "Do you offer midnight flower delivery in Lahore?",
    "a": "Yes. The midnight surprise slot is 11:30 PM–12:15 AM. Book before 8:00 PM on WhatsApp (0310-4225974) to reserve your slot."
  },
  {
    "q": "Which areas of Lahore do you deliver to?",
    "a": "We deliver across Lahore including DHA, Gulberg, Bahria Town, Model Town, Johar Town, Cantt, Askari, Wapda Town, Township, Faisal Town, Garden Town, Valencia and Lake City. Delivery is FREE in listed areas."
  },
  {
    "q": "How much do flowers cost in Lahore?",
    "a": "Hand-tied small bouquets are Rs. 1,239–1,900, medium rose bouquets Rs. 2,600–3,800, the large signature rose arrangement Rs. 7,499, sunflower bouquets from Rs. 1,699 and chocolate bouquets from Rs. 3,800. See our full price guide for details."
  },
  {
    "q": "Can I send flowers to Islamabad from the UK?",
    "a": "Yes. We also deliver flowers in Islamabad through our local partner, including F-6, F-7, DHA Islamabad and Bahria Town. See our Islamabad flower delivery page for areas and prices."
  }
];

const PICKS = [
  {
    "name": "Heartfelt Single Rose Birthday Bouquet",
    "price": "Rs. 1,239",
    "slug": "heartfelt-single-rose-birthday-bouquet",
    "note": "A single fresh rose — simple, elegant and affordable."
  },
  {
    "name": "Romantic Rose Bouquet",
    "price": "Rs. 1,499",
    "slug": "romantic-rose-bouquet",
    "note": "Classic roses for birthdays, anniversaries and surprises."
  },
  {
    "name": "Single Red Rose Bouquet",
    "price": "Rs. 1,499",
    "slug": "single-red-rose-bouquet",
    "note": "One perfect red rose, beautifully wrapped."
  },
  {
    "name": "Elegant Autumn Red Rose Bouquet",
    "price": "Rs. 1,599",
    "slug": "elegant-autumn-red-rose-bouquet",
    "note": "Rich red roses with autumn styling."
  },
  {
    "name": "Sunflower Bouquet",
    "price": "Rs. 1,699",
    "slug": "sunflower-bouquet",
    "note": "Bright and cheerful — a happy surprise for anyone."
  },
  {
    "name": "Red Rose Bouquet – Black Wrap",
    "price": "Rs. 1,999",
    "slug": "red-rose-bouquet-black-wrap",
    "note": "Bold red roses in elegant black wrapping."
  }
];

export default function SendFlowersToLahoreFromUkPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/send-flowers-to-lahore-from-uk#service`,
    name: "Send Flowers to Lahore from the UK",
    serviceType: "Flower delivery",
    description: "Send fresh flower bouquets to Lahore from the UK, with same-day delivery in 2-5 hours and a photo on WhatsApp before dispatch.",
    provider: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Lahore Bouquet",
      url: SITE_URL,
      telephone: "+923104225974",
      email: "lahorebouquet@gmail.com",
    },
    areaServed: {
      "@type": "City",
      name: "Lahore",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Punjab, Pakistan",
      },
    },
    url: `${SITE_URL}/send-flowers-to-lahore-from-uk`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
      { "@type": "ListItem", position: 2, name: "Send Flowers to Lahore from the UK", item: `${SITE_URL}/send-flowers-to-lahore-from-uk` },
    ],
  };

  return (
    <main className="bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero — direct answer */}
      <section className="w-full py-16 px-4 sm:px-6 text-center border-b border-[#E5DED2]">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-[#101012] leading-tight">
            Send Flowers to Lahore from the UK – Same-Day in 2-5 Hours
          </h1>
          <p className="text-sm sm:text-base text-[#2A2A2A] leading-relaxed">
            <strong>Living in the UK and want to send flowers to family in Lahore?</strong> Lahore Bouquet delivers fresh, hand-tied bouquets across Lahore — DHA, Gulberg, Bahria Town, Model Town, Johar Town and more. Order on WhatsApp at <strong>0310-4225974</strong>, pay by international debit or credit card, and see a real photo of the actual bouquet on WhatsApp before it is dispatched. <strong>Same-day delivery in 2 to 5 hours</strong> for orders placed before 4 PM Pakistan time.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              href="/bouquets"
              className="px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors"
            >
              Shop Flowers
            </Link>
            <a
              href={whatsappLink("Hi Lahore Bouquet! I am in the UK and want to send flowers to Lahore.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Prices */}
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            Flower Prices for UK Orders
          </h2>
          <p className="text-sm text-[#2A2A2A] text-center">
            Same prices as Lahore — no hidden charges. Free delivery in listed Lahore areas.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F8F3EA]">
                  <th className="border border-[#E5DED2] px-4 py-3 text-left font-bold">Bouquet Type</th>
                  <th className="border border-[#E5DED2] px-4 py-3 text-left font-bold">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#E5DED2] px-4 py-3">Hand-tied small bouquets</td>
                  <td className="border border-[#E5DED2] px-4 py-3">Rs. 1,239 – 1,900</td>
                </tr>
                <tr className="bg-[#F8F3EA]/50">
                  <td className="border border-[#E5DED2] px-4 py-3">Medium rose bouquets</td>
                  <td className="border border-[#E5DED2] px-4 py-3">Rs. 2,600 – 3,800</td>
                </tr>
                <tr>
                  <td className="border border-[#E5DED2] px-4 py-3">Large signature rose arrangement</td>
                  <td className="border border-[#E5DED2] px-4 py-3">Rs. 7,499</td>
                </tr>
                <tr className="bg-[#F8F3EA]/50">
                  <td className="border border-[#E5DED2] px-4 py-3">Sunflower bouquets</td>
                  <td className="border border-[#E5DED2] px-4 py-3">From Rs. 1,699</td>
                </tr>
                <tr>
                  <td className="border border-[#E5DED2] px-4 py-3">Chocolate bouquets</td>
                  <td className="border border-[#E5DED2] px-4 py-3">From Rs. 3,800</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm">
            <Link href="/prices" className="text-[#8B1E2D] underline font-semibold">See full price guide →</Link>
          </p>
        </div>
      </section>

      {/* Popular bouquets */}
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2]">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012]">
              Popular Bouquets to Send to Lahore
            </h2>
            <p className="text-sm text-[#2A2A2A] max-w-2xl mx-auto leading-relaxed">
              Real bouquets available for same-day delivery in Lahore. Prices confirmed — no hidden charges.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PICKS.map((p) => (
              <div key={p.slug} className="p-5 rounded-2xl bg-white border border-[#E5DED2] hover:border-[#8B1E2D] transition-colors flex flex-col">
                <h3 className="font-bold text-[#0B0B0B] text-sm">{p.name}</h3>
                <p className="text-[#8B1E2D] font-bold text-base mt-1">{p.price}</p>
                <p className="text-xs text-[#636363] mt-1">{p.note}</p>
                <div className="flex gap-2 mt-3 pt-3 border-t border-[#E5DED2]">
                  <Link href={`/products/${p.slug}`} className="flex-1 text-center px-3 py-2 rounded-full bg-[#8B1E2D] text-white text-xs font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">
                    View
                  </Link>
                  <a
                    href={whatsappLink(`Hi Lahore Bouquet! I want to order the ${p.name} (${p.price}) for delivery in Lahore.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-3 py-2 rounded-full bg-[#128C7E] text-white text-xs font-bold hover:opacity-90 transition-opacity"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm">
            <Link href="/bouquets" className="text-[#8B1E2D] underline font-semibold">Browse all bouquets →</Link>
          </p>
        </div>
      </section>

      {/* Time difference */}
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            Ordering Across the Time Difference
          </h2>
          <p className="text-sm text-[#2A2A2A] text-center max-w-2xl mx-auto leading-relaxed">
            Lahore is 5 hours ahead of London in winter and 4 hours ahead in summer, when the UK is on British Summer Time. Our 4 PM Pakistan-time cut-off for same-day delivery is 11 AM in London in winter and 12 noon in summer — so an order placed over breakfast in the UK still arrives in Lahore the same afternoon. We are open every day from 9:00 AM to 1:00 AM Pakistan time, and WhatsApp messages are answered during those hours.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#F8F3EA] border border-[#E5DED2]">
              <h3 className="font-bold text-[#0B0B0B] text-sm">Lahore is ahead</h3>
              <p className="text-xs text-[#2A2A2A] mt-2 leading-relaxed">Pakistan is 4 to 5 hours ahead of the UK, so your afternoon in Lahore is still morning in London. Plan your order with the Lahore clock in mind.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F8F3EA] border border-[#E5DED2]">
              <h3 className="font-bold text-[#0B0B0B] text-sm">Same-day cut-off</h3>
              <p className="text-xs text-[#2A2A2A] mt-2 leading-relaxed">Order before 4:00 PM Pakistan time — 11:00 AM in London in winter, 12 noon in summer — for delivery the same day in 2 to 5 hours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            How to Order
          </h2>
          <ol className="space-y-3 text-sm sm:text-base leading-relaxed list-decimal list-inside">
            <li><strong>Choose your bouquet</strong> — browse our collection or message us on WhatsApp with your budget.</li>
            <li><strong>Share the delivery details</strong> — recipient's name, phone number and complete Lahore address, plus the wording for your message card.</li>
            <li><strong>Pay by international card or bank transfer</strong> — we confirm the exact price and delivery time before dispatch. Cash on delivery is not available for orders placed from abroad.</li>
            <li><strong>We send a photo first</strong> — you approve the actual bouquet on WhatsApp, then it is delivered the same day.</li>
          </ol>
          <div className="text-center pt-2">
            <a
              href={whatsappLink("Hi Lahore Bouquet! I am in the UK and want to send flowers to Lahore.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={18} /> Order on WhatsApp: 0310-4225974
            </a>
          </div>
        </div>
      </section>

      {/* Delivery Charges & Timing */}
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            Delivery Charges, Timing & Payment
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[#F8F3EA] border border-[#E5DED2]">
              <h3 className="font-bold text-[#0B0B0B] text-sm flex items-center gap-2"><Truck size={16} className="text-[#8B1E2D]" /> Delivery Charges</h3>
              <p className="text-xs text-[#2A2A2A] mt-2 leading-relaxed"><strong>FREE</strong> delivery in listed Lahore areas — DHA, Gulberg, Bahria Town, Model Town, Johar Town, Cantt and more. Confirm your area on WhatsApp (0310-4225974).</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F8F3EA] border border-[#E5DED2]">
              <h3 className="font-bold text-[#0B0B0B] text-sm flex items-center gap-2"><Clock size={16} className="text-[#8B1E2D]" /> Delivery Time</h3>
              <p className="text-xs text-[#2A2A2A] mt-2 leading-relaxed"><strong>Same-day in 2–5 hours</strong> for orders placed before 4:00 PM Pakistan time. Midnight slot: 11:30 PM–12:15 AM (book before 8:00 PM).</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F8F3EA] border border-[#E5DED2]">
              <h3 className="font-bold text-[#0B0B0B] text-sm flex items-center gap-2"><MessageCircle size={16} className="text-[#8B1E2D]" /> Payment</h3>
              <p className="text-xs text-[#2A2A2A] mt-2 leading-relaxed"><strong>International debit/credit cards</strong> and <strong>bank transfer</strong>. Cash on delivery is not available for orders placed from abroad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2]">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            Why Order from Lahore Bouquet?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#E5DED2]">
              <span className="text-[#8B1E2D] mt-0.5"><Clock size={20} /></span>
              <p className="text-sm">Same-day delivery in 2–5 hours across Lahore for orders placed before 4:00 PM Pakistan time</p>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#E5DED2]">
              <span className="text-[#8B1E2D] mt-0.5"><Camera size={20} /></span>
              <p className="text-sm">A real photo of your actual bouquet on WhatsApp before dispatch — you see exactly what they receive</p>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#E5DED2]">
              <span className="text-[#8B1E2D] mt-0.5"><MessageCircle size={20} /></span>
              <p className="text-sm">Order from anywhere in the world on WhatsApp: 0310-4225974, open daily 9:00 AM–1:00 AM Pakistan time</p>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#E5DED2]">
              <span className="text-[#8B1E2D] mt-0.5"><Truck size={20} /></span>
              <p className="text-sm">FREE delivery in listed Lahore areas — DHA, Gulberg, Bahria Town, Model Town and more</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="w-full py-12 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <h2 className="font-playfair text-xl font-bold text-[#101012]">Explore More Flower Options</h2>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <Link href="/bouquets" className="px-4 py-2 rounded-full border border-[#E5DED2] hover:border-[#8B1E2D] hover:text-[#8B1E2D] transition-colors">All Bouquets</Link>
            <Link href="/prices" className="px-4 py-2 rounded-full border border-[#E5DED2] hover:border-[#8B1E2D] hover:text-[#8B1E2D] transition-colors">Price Guide</Link>
            <Link href="/blog/how-to-order-flowers-online-lahore-2026" className="px-4 py-2 rounded-full border border-[#E5DED2] hover:border-[#8B1E2D] hover:text-[#8B1E2D] transition-colors">How to Order Flowers Online</Link>
            <Link href="/send-flowers-to-lahore-from-abroad" className="px-4 py-2 rounded-full border border-[#E5DED2] hover:border-[#8B1E2D] hover:text-[#8B1E2D] transition-colors">Send Flowers from Abroad</Link>
            <Link href="/flower-delivery-islamabad" className="px-4 py-2 rounded-full border border-[#E5DED2] hover:border-[#8B1E2D] hover:text-[#8B1E2D] transition-colors">Flower Delivery in Islamabad</Link>
            <Link href="/midnight-flower-delivery-lahore" className="px-4 py-2 rounded-full border border-[#E5DED2] hover:border-[#8B1E2D] hover:text-[#8B1E2D] transition-colors">Midnight Delivery</Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <details key={i} className="p-5 rounded-2xl bg-white border border-[#E5DED2] group">
                <summary className="font-bold text-sm text-[#0B0B0B] cursor-pointer list-none flex justify-between items-center gap-2">
                  <span className="flex items-center gap-2"><HelpCircle size={16} className="text-[#8B1E2D] shrink-0" /> {f.q}</span>
                  <span className="text-[#8B1E2D] group-open:rotate-45 transition-transform text-lg leading-none shrink-0">+</span>
                </summary>
                <p className="text-sm mt-2 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
