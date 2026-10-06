import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, BUSINESS, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Send Flowers to Lahore from the UK (2026 Guide) | Same-Day Delivery",
  },
  description: "In the UK and want to send flowers to Lahore? Order by 12 noon UK time for same-day delivery. Pay by international card, get WhatsApp photo proof. Full 2026 guide.",
  alternates: {
    canonical: `${SITE_URL}/blog/send-flowers-to-lahore-from-uk`,
  },
  openGraph: {
    title: "Send Flowers to Lahore from the UK — Same-Day Delivery Guide",
    description: "Order by 12 noon UK time, pay by international card, get photo proof on WhatsApp. Same-day flower delivery across Lahore for UK Pakistanis.",
    url: `${SITE_URL}/blog/send-flowers-to-lahore-from-uk`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Send Flowers to Lahore from the UK — Same-Day Delivery Guide",
      },
    ],
  }
};

const FAQS = [
  {
    q: "What is the cutoff time for same-day flower delivery to Lahore from the UK?",
    a: "Pakistan is 4 hours ahead of the UK in summer (BST) and 5 hours ahead in winter (GMT). Our same-day cutoff is 4:00 PM Pakistan time, so order by 12:00 noon UK time in summer or 11:00 AM in winter. Orders after that are delivered first thing the next morning."
  },
  {
    q: "How do I pay for flowers in Lahore from the UK?",
    a: "Pay securely online with any UK debit or credit card (Visa, Mastercard), or by international bank transfer. Share the receipt on WhatsApp and your order is confirmed within minutes — no Pakistani bank account needed."
  },
  {
    q: "How much does it cost to send flowers from the UK to Lahore?",
    a: "Bouquets start at Rs. 1,180 (roughly £3–4). A beautiful medium rose bouquet costs Rs. 2,600–3,800 (about £7–11), and delivery fees are Rs. 0–400 depending on the Lahore area. You see the full price in GBP terms on your card statement — no hidden charges."
  },
  {
    q: "How will I know the flowers were delivered in Lahore?",
    a: "You get two WhatsApp updates: a live photo of the finished bouquet for your approval before our rider leaves, and a delivery confirmation once it reaches your recipient. For surprise orders, we confirm to you without spoiling it for them."
  },
  {
    q: "Can I send flowers to Lahore for Eid or a nikkah from the UK?",
    a: "Yes — Eid, nikkahs, birthdays and Mother's Day are our busiest diaspora occasions. For Eid and wedding season (November–February), book 2–3 days ahead as slots fill quickly. We also do bridal room decoration and nikkah stage flowers."
  },
  {
    q: "Can I order a midnight birthday surprise from the UK?",
    a: "Absolutely — it's one of our most popular UK orders. Book the midnight slot (11:30 PM–12:15 AM Pakistan time) before 8:00 PM PKT. From the UK that's 4:00 PM in summer, so an afternoon order still makes a midnight surprise the same night."
  }
];

export default function SendFlowersFromUKPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Send Flowers to Lahore from the UK (2026 Guide)",
    description: "Complete guide for UK Pakistanis: cutoff times, payment, pricing and delivery tracking for sending flowers to Lahore.",
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
        <span className="text-[#8B1E2D] font-semibold">Send Flowers from the UK</span>
      </nav>

      <header className="space-y-4">
        <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">Diaspora Guide • October 2026</span>
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B0B0B] leading-tight">
          How to Send Flowers to Lahore from the UK
        </h1>
        <p className="text-sm text-[#777777]">By Lahore Bouquet Florist Team • Updated 6 October 2026 • 5 min read</p>
        <p className="text-sm sm:text-base leading-relaxed">
          <strong>Quick answer:</strong> WhatsApp us at <strong>{BUSINESS.phone.intl}</strong> before <strong>12 noon UK time</strong> and your flowers reach anywhere in Lahore the <strong>same day</strong>. Pay by UK debit/credit card, approve the bouquet photo on WhatsApp, and get delivery confirmation — all without leaving London, Birmingham or Manchester.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">UK Time vs Pakistan Time — The Cutoff That Matters</h2>
        <p className="text-sm leading-relaxed">
          Pakistan runs 4–5 hours ahead of the UK, and this single fact decides whether your flowers arrive today or tomorrow. Our same-day cutoff is <strong>4:00 PM Pakistan time</strong>:
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]">
            <div className="font-bold text-[#0B0B0B] text-sm">Summer (late Mar – late Oct, BST)</div>
            <p className="text-sm mt-1">Pakistan is <strong>4 hours ahead</strong>. Order by <strong>12:00 noon UK time</strong> for same-day delivery in Lahore.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]">
            <div className="font-bold text-[#0B0B0B] text-sm">Winter (late Oct – late Mar, GMT)</div>
            <p className="text-sm mt-1">Pakistan is <strong>5 hours ahead</strong>. Order by <strong>11:00 AM UK time</strong> for same-day delivery in Lahore.</p>
          </div>
        </div>
        <p className="text-sm leading-relaxed">
          Ordering in the UK evening? No problem — your order is prepared first thing in the Lahore morning and delivered the same day. Many UK customers order at 9–10 PM UK time for next-morning delivery surprises.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">How Ordering Works from the UK (3 Steps)</h2>
        <ol className="space-y-4">
          <li className="p-5 rounded-2xl bg-white border border-[#E5DED2]">
            <div className="font-bold text-[#0B0B0B]">1. Choose on WhatsApp — in English or Urdu</div>
            <p className="text-sm mt-1">Browse <Link href="/bouquets" className="text-[#8B1E2D] underline">bouquets</Link>, <Link href="/roses" className="text-[#8B1E2D] underline">roses</Link> or <Link href="/money-bouquets" className="text-[#8B1E2D] underline">money bouquets</Link> and send us the link — or simply describe it: "red roses for my mother's birthday in DHA Phase 5, budget £15." We reply with options and exact prices.</p>
          </li>
          <li className="p-5 rounded-2xl bg-white border border-[#E5DED2]">
            <div className="font-bold text-[#0B0B0B]">2. Pay with your UK card</div>
            <p className="text-sm mt-1">Pay securely online with any UK Visa/Mastercard debit or credit card, or by bank transfer. Your statement shows the GBP equivalent — a medium rose bouquet (Rs. 2,600–3,800) is roughly £7–11. No Pakistani account needed.</p>
          </li>
          <li className="p-5 rounded-2xl bg-white border border-[#E5DED2]">
            <div className="font-bold text-[#0B0B0B]">3. Approve the photo, we deliver</div>
            <p className="text-sm mt-1">Before our rider leaves, you get a real photo of <em>your</em> bouquet on WhatsApp for approval. Then same-day delivery in 2–5 hours across <Link href="/delivery-areas" className="text-[#8B1E2D] underline">all Lahore areas</Link>, with confirmation when it arrives.</p>
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">What UK Pakistanis Order Most</h2>
        <ul className="space-y-2 text-sm list-disc list-inside leading-relaxed">
          <li><strong>Eid bouquets</strong> — the single busiest diaspora week of the year; book 2–3 days ahead.</li>
          <li><strong>Mother's Day & birthdays</strong> — pink rose and lily bouquets with handwritten cards.</li>
          <li><strong>Nikkah & shaadi flowers</strong> — bridal bouquets, gajray and stage flowers; we coordinate with Lahore venues.</li>
          <li><strong>Get-well flowers</strong> — we deliver to Shaukat Khanum, CMH and private hospitals with ward/room details.</li>
          <li><strong>Midnight surprises</strong> — book before 4 PM UK time and the bouquet arrives at midnight Lahore time.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Pricing for UK Senders</h2>
        <p className="text-sm leading-relaxed">
          Bouquets start at Rs. 1,180 (about £3). Most UK customers spend Rs. 2,600–7,499 (£7–20) for a generous bouquet. Delivery is <strong>free</strong> across all listed Lahore areas — see our <Link href="/delivery-areas" className="text-[#8B1E2D] underline">delivery areas</Link> page. Compare the full range on our <Link href="/prices" className="text-[#8B1E2D] underline">prices page</Link>.
        </p>
        <a
          href={whatsappLink("Hello Lahore Bouquet! I'm ordering from the UK and want to send flowers to Lahore.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors"
        >
          Order from the UK on WhatsApp
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
        <p>Also read: <Link href="/blog/send-flowers-to-lahore-from-abroad" className="text-[#8B1E2D] underline">general overseas ordering guide</Link> • <Link href="/blog/send-flowers-to-lahore-from-usa" className="text-[#8B1E2D] underline">sending from the USA</Link> • <Link href="/blog/send-flowers-to-lahore-from-uae" className="text-[#8B1E2D] underline">sending from the UAE</Link></p>
      </section>
    </article>
  );
}
