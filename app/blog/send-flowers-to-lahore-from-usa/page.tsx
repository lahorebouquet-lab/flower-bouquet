import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, BUSINESS, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Send Flowers to Lahore from the USA (2026 Guide) | Same-Day Delivery",
  },
  description: "In the USA and want to send flowers to Lahore? Order the evening before US time for next-day Lahore delivery. Pay by US card, get WhatsApp photo proof. Full 2026 guide.",
  alternates: {
    canonical: `${SITE_URL}/blog/send-flowers-to-lahore-from-usa`,
  },
  openGraph: {
    title: "Send Flowers to Lahore from the USA — Same-Day Delivery Guide",
    description: "Order from New York, Houston or California — pay by US card, approve the bouquet photo on WhatsApp, get delivery confirmation in Lahore.",
    url: `${SITE_URL}/blog/send-flowers-to-lahore-from-usa`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Send Flowers to Lahore from the USA — Same-Day Delivery Guide",
      },
    ],
  }
};

const FAQS = [
  {
    q: "What is the cutoff time for flower delivery to Lahore from the USA?",
    a: "Pakistan is 9–10 hours ahead of US Eastern time and 12–13 hours ahead of Pacific time. Our same-day cutoff is 4:00 PM Pakistan time — that's roughly 6:00–7:00 AM Eastern / 3:00–4:00 AM Pacific. In practice: order by US evening and your flowers are delivered the next morning in Lahore."
  },
  {
    q: "How do I pay for flowers in Lahore from the USA?",
    a: "Pay securely online with any US Visa, Mastercard, Amex or Discover card, or by international bank transfer. Your statement shows the USD equivalent — a medium rose bouquet (Rs. 2,600–3,800) is roughly $9–14. No Pakistani account needed."
  },
  {
    q: "If I order at night in the USA, when do flowers arrive in Lahore?",
    a: "US evening is Lahore morning. An order placed at 9 PM Eastern (7 AM Pakistan time) is prepared fresh the same Lahore morning and delivered within 2–5 hours — often before your recipient's lunch."
  },
  {
    q: "How will I know the flowers were delivered?",
    a: "You get two WhatsApp updates: a live photo of the finished bouquet for your approval before dispatch, and a delivery confirmation once it reaches your recipient in Lahore."
  },
  {
    q: "Can I send flowers for Eid or a wedding in Lahore from the USA?",
    a: "Yes — Eid, nikkahs and shaadi events are peak diaspora occasions. For Eid week and wedding season (November–February), book 2–3 days ahead. We also handle bridal bouquets, gajray and venue flowers in coordination with Lahore event planners."
  },
  {
    q: "Do you deliver to hospitals in Lahore from US orders?",
    a: "Yes. We regularly deliver get-well bouquets to Shaukat Khanum, CMH Lahore and private hospitals. Just share the patient name, hospital and room/ward number on WhatsApp and we handle the rest."
  }
];

export default function SendFlowersFromUSAPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Send Flowers to Lahore from the USA (2026 Guide)",
    description: "Complete guide for US Pakistanis: timezone strategy, payment, pricing and delivery tracking for sending flowers to Lahore.",
    author: { "@type": "Organization", name: "Lahore Bouquet Florist Team", url: `${SITE_URL}` },
    publisher: { "@type": "Organization", name: "Lahore Bouquet", url: `${SITE_URL}` },
    datePublished: "2026-10-06",
    dateModified: "2026-10-06",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-10 bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B]">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-[#0B0B0B]">Blog</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Send Flowers from the USA</span>
      </nav>

      <header className="space-y-4">
        <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">Diaspora Guide • October 2026</span>
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B0B0B] leading-tight">
          How to Send Flowers to Lahore from the USA
        </h1>
        <p className="text-sm text-[#777777]">By Lahore Bouquet Florist Team • Updated 6 October 2026 • 5 min read</p>
        <p className="text-sm sm:text-base leading-relaxed">
          <strong>Quick answer:</strong> WhatsApp us at <strong>{BUSINESS.phone.intl}</strong> in your <strong>US evening</strong> — that's morning in Lahore, so flowers are prepared fresh and delivered the <strong>same Lahore day</strong>. Pay by US card, approve the bouquet photo on WhatsApp, and get delivery confirmation.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">The Timezone Trick: Your Evening Is Lahore's Morning</h2>
        <p className="text-sm leading-relaxed">
          The 9–13 hour gap between the USA and Pakistan is actually an advantage. When you order at night in New York, Houston or Los Angeles, our florists are just starting their morning in Lahore:
        </p>
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]">
            <div className="font-bold text-[#0B0B0B] text-sm">Eastern (NYC, Chicago)</div>
            <p className="text-sm mt-1">Pakistan is <strong>9–10 hrs ahead</strong>. Order by <strong>9 PM ET</strong> for next-morning Lahore delivery.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]">
            <div className="font-bold text-[#0B0B0B] text-sm">Central / Mountain</div>
            <p className="text-sm mt-1">Pakistan is <strong>10–12 hrs ahead</strong>. Order by <strong>8 PM CT</strong> for next-morning delivery.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]">
            <div className="font-bold text-[#0B0B0B] text-sm">Pacific (California)</div>
            <p className="text-sm mt-1">Pakistan is <strong>12–13 hrs ahead</strong>. Order by <strong>6 PM PT</strong> for next-morning delivery.</p>
          </div>
        </div>
        <p className="text-sm leading-relaxed">
          Our order desk is open 9 AM–1 AM Pakistan time, so even a late US-night order lands while we're still working. For a <strong>midnight birthday surprise</strong> in Lahore, order any time before 3 PM Eastern on the day.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">How Ordering Works from the USA (3 Steps)</h2>
        <ol className="space-y-4">
          <li className="p-5 rounded-2xl bg-white border border-[#E5DED2]">
            <div className="font-bold text-[#0B0B0B]">1. Choose on WhatsApp</div>
            <p className="text-sm mt-1">Browse <Link href="/bouquets" className="text-[#8B1E2D] underline">bouquets</Link>, <Link href="/roses" className="text-[#8B1E2D] underline">roses</Link> or <Link href="/money-bouquets" className="text-[#8B1E2D] underline">money bouquets</Link> and send the link — or describe it in plain words. We reply with options, exact USD-equivalent pricing and delivery time.</p>
          </li>
          <li className="p-5 rounded-2xl bg-white border border-[#E5DED2]">
            <div className="font-bold text-[#0B0B0B]">2. Pay with your US card</div>
            <p className="text-sm mt-1">Any US Visa, Mastercard, Amex or Discover works, or send an international bank transfer. A generous medium bouquet (Rs. 2,600–3,800) shows up as roughly $9–14 on your statement.</p>
          </li>
          <li className="p-5 rounded-2xl bg-white border border-[#E5DED2]">
            <div className="font-bold text-[#0B0B0B]">3. Approve the photo, we deliver</div>
            <p className="text-sm mt-1">You receive a real photo of your bouquet on WhatsApp before dispatch. Then same-day 2–5 hour delivery across <Link href="/delivery-areas" className="text-[#8B1E2D] underline">all Lahore areas</Link>, with confirmation on arrival.</p>
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">What US Pakistanis Order Most</h2>
        <ul className="space-y-2 text-sm list-disc list-inside leading-relaxed">
          <li><strong>Birthday & anniversary surprises</strong> — midnight delivery is the top US request.</li>
          <li><strong>Eid flowers</strong> — book 2–3 days before Eid; it's our busiest diaspora week.</li>
          <li><strong>Nikkah & wedding flowers</strong> — bridal bouquets, gajray, car and stage décor coordinated with Lahore venues.</li>
          <li><strong>Get-well bouquets</strong> — delivered to Shaukat Khanum, CMH and private hospitals.</li>
          <li><strong>Mother's / Father's Day</strong> — lily and mixed bouquets with handwritten cards.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Pricing for US Senders</h2>
        <p className="text-sm leading-relaxed">
          Bouquets start at Rs. 1,180 (about $4). Most US customers spend Rs. 2,600–7,499 ($9–26). Delivery is <strong>free</strong> across all listed Lahore areas — see our <Link href="/delivery-areas" className="text-[#8B1E2D] underline">delivery areas</Link> page or the full range on our <Link href="/prices" className="text-[#8B1E2D] underline">prices page</Link>.
        </p>
        <a
          href={whatsappLink("Hello Lahore Bouquet! I'm ordering from the USA and want to send flowers to Lahore.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors"
        >
          Order from the USA on WhatsApp
        </a>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <details key={i} className="p-5 rounded-2xl bg-white border border-[#E5DED2] group">
              <summary className="font-bold text-sm text-[#0B0B0B] cursor-pointer list-none flex justify-between items-center">
                {f.q}
                <span className="text-[#8B1E2D] group-open:rotate-45 transition-transform text-lg leading-none">+</span>
              </summary>
              <p className="text-sm mt-2 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="text-xs text-[#777777] space-y-2">
        <p>Also read: <Link href="/blog/send-flowers-to-lahore-from-abroad" className="text-[#8B1E2D] underline">general overseas ordering guide</Link> • <Link href="/blog/send-flowers-to-lahore-from-uk" className="text-[#8B1E2D] underline">sending from the UK</Link> • <Link href="/blog/send-flowers-to-lahore-from-uae" className="text-[#8B1E2D] underline">sending from the UAE</Link></p>
      </section>
    </article>
  );
}
