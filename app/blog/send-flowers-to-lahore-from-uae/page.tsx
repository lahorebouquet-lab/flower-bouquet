import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, BUSINESS, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Send Flowers to Lahore from the UAE (2026 Guide) | Same-Day Delivery",
  },
  description: "In Dubai, Sharjah or Abu Dhabi and want to send flowers to Lahore? Only 1 hour time difference — order by 3 PM UAE time for same-day delivery. Pay by card or transfer. Full 2026 guide.",
  alternates: {
    canonical: `${SITE_URL}/blog/send-flowers-to-lahore-from-uae`,
  },
  openGraph: {
    title: "Send Flowers to Lahore from the UAE — Same-Day Delivery Guide",
    description: "1-hour time difference means easy same-day ordering from Dubai, Sharjah & Abu Dhabi. Pay by card, approve the photo on WhatsApp.",
    url: `${SITE_URL}/blog/send-flowers-to-lahore-from-uae`,
    type: "article",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Send Flowers to Lahore from the UAE — Same-Day Delivery Guide",
      },
    ],
  }
};

const FAQS = [
  {
    q: "What is the cutoff time for same-day flower delivery to Lahore from the UAE?",
    a: "The UAE is only 1 hour behind Pakistan, so ordering from Dubai or Abu Dhabi is almost like ordering locally. Our same-day cutoff is 4:00 PM Pakistan time — that's 3:00 PM UAE time. Order any time before that and flowers reach Lahore the same day in 2–5 hours."
  },
  {
    q: "How do I pay for flowers in Lahore from the UAE?",
    a: "Pay securely online with any UAE debit/credit card (Visa, Mastercard), or by bank transfer from Emirates NBD, FAB, Mashreq or any UAE bank. A medium rose bouquet (Rs. 2,600–3,800) is roughly AED 35–50. Share the receipt on WhatsApp for instant confirmation."
  },
  {
    q: "Can I order in the UAE evening for next-morning delivery in Lahore?",
    a: "Yes — and it's the most popular option. Order by 10 PM UAE time and your bouquet is prepared fresh the next Lahore morning and delivered within 2–5 hours. Perfect for birthday mornings."
  },
  {
    q: "How will I know the flowers were delivered?",
    a: "You get two WhatsApp updates: a live photo of the finished bouquet for your approval before our rider leaves, and a delivery confirmation once it reaches your recipient in Lahore."
  },
  {
    q: "Can I send flowers for Eid or a nikkah in Lahore from the UAE?",
    a: "Yes — Eid and wedding season are peak times for UAE orders. Book 2–3 days ahead for Eid week. We also do bridal bouquets, gajray, car decoration and nikkah stage flowers, coordinated with Lahore venues."
  },
  {
    q: "Do you deliver to offices and hospitals in Lahore from UAE orders?",
    a: "Yes. We deliver to corporate offices in Gulberg and DHA, and to hospitals including Shaukat Khanum and CMH Lahore. Share the full address or room/ward details on WhatsApp."
  }
];

export default function SendFlowersFromUAEPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Send Flowers to Lahore from the UAE (2026 Guide)",
    description: "Complete guide for UAE Pakistanis: near-identical timezones, payment options, pricing and delivery tracking for sending flowers to Lahore.",
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
        <span className="text-[#8B1E2D] font-semibold">Send Flowers from the UAE</span>
      </nav>

      <header className="space-y-4">
        <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">Diaspora Guide • October 2026</span>
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B0B0B] leading-tight">
          How to Send Flowers to Lahore from the UAE
        </h1>
        <p className="text-sm text-[#777777]">By Lahore Bouquet Florist Team • Updated 6 October 2026 • 5 min read</p>
        <p className="text-sm sm:text-base leading-relaxed">
          <strong>Quick answer:</strong> the UAE is only <strong>1 hour behind Pakistan</strong>, so ordering from Dubai, Sharjah or Abu Dhabi is almost like ordering locally. WhatsApp us at <strong>{BUSINESS.phone.intl}</strong> before <strong>3 PM UAE time</strong> for <strong>same-day delivery</strong> anywhere in Lahore.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Why the UAE Is the Easiest Country to Order From</h2>
        <p className="text-sm leading-relaxed">
          Unlike the UK or USA, there's virtually no timezone math. Our order desk (9 AM–1 AM Pakistan time) overlaps almost fully with UAE waking hours:
        </p>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]">
            <div className="font-bold text-[#0B0B0B] text-sm">Same-day delivery</div>
            <p className="text-sm mt-1">Order by <strong>3:00 PM UAE time</strong> (4 PM Pakistan time) — flowers arrive in Lahore within 2–5 hours the same day.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]">
            <div className="font-bold text-[#0B0B0B] text-sm">Next-morning surprise</div>
            <p className="text-sm mt-1">Order any time before <strong>10 PM UAE time</strong> — the bouquet is made fresh next morning and delivered within hours.</p>
          </div>
        </div>
        <p className="text-sm leading-relaxed">
          WhatsApp replies come within minutes during UAE daytime, and our <strong>midnight delivery slot</strong> (11:30 PM–12:15 AM PKT = 10:30–11:15 PM UAE) is easy to book from the Gulf — order by 7 PM UAE time.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">How Ordering Works from the UAE (3 Steps)</h2>
        <ol className="space-y-4">
          <li className="p-5 rounded-2xl bg-white border border-[#E5DED2]">
            <div className="font-bold text-[#0B0B0B]">1. Choose on WhatsApp</div>
            <p className="text-sm mt-1">Browse <Link href="/bouquets" className="text-[#8B1E2D] underline">bouquets</Link>, <Link href="/roses" className="text-[#8B1E2D] underline">roses</Link> or <Link href="/money-bouquets" className="text-[#8B1E2D] underline">money bouquets</Link> and send the link — or describe what you want in English, Urdu or Roman Urdu. We confirm price and delivery time instantly.</p>
          </li>
          <li className="p-5 rounded-2xl bg-white border border-[#E5DED2]">
            <div className="font-bold text-[#0B0B0B]">2. Pay by UAE card or transfer</div>
            <p className="text-sm mt-1">Any UAE Visa/Mastercard works online, or transfer from Emirates NBD, FAB, Mashreq or ADCB and share the receipt. A medium rose bouquet (Rs. 2,600–3,800) is about AED 35–50.</p>
          </li>
          <li className="p-5 rounded-2xl bg-white border border-[#E5DED2]">
            <div className="font-bold text-[#0B0B0B]">3. Approve the photo, we deliver</div>
            <p className="text-sm mt-1">A real photo of your bouquet arrives on WhatsApp for approval before dispatch. Then 2–5 hour delivery across <Link href="/delivery-areas" className="text-[#8B1E2D] underline">all Lahore areas</Link> — DHA to Bahria Town — with confirmation on arrival.</p>
          </li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">What UAE Pakistanis Order Most</h2>
        <ul className="space-y-2 text-sm list-disc list-inside leading-relaxed">
          <li><strong>Eid & Ramadan gifts</strong> — the busiest UAE-ordering period; book 2–3 days ahead.</li>
          <li><strong>Birthday midnight surprises</strong> — our most requested Gulf order.</li>
          <li><strong>Nikkah & wedding flowers</strong> — bridal bouquets, gajray, car décor and stage flowers.</li>
          <li><strong>New baby & get-well bouquets</strong> — delivered to homes and hospitals across Lahore.</li>
          <li><strong>Corporate bouquets</strong> — for Lahore offices of Gulf-based companies.</li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Pricing for UAE Senders</h2>
        <p className="text-sm leading-relaxed">
          Bouquets start at Rs. 1,180 (about AED 15). Most UAE customers spend Rs. 2,600–7,499 (AED 35–100). Delivery is <strong>free</strong> across all listed Lahore areas — see our <Link href="/delivery-areas" className="text-[#8B1E2D] underline">delivery areas</Link> page or the full range on our <Link href="/prices" className="text-[#8B1E2D] underline">prices page</Link>.
        </p>
        <a
          href={whatsappLink("Hello Lahore Bouquet! I'm ordering from the UAE and want to send flowers to Lahore.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors"
        >
          Order from the UAE on WhatsApp
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
        <p>Also read: <Link href="/blog/send-flowers-to-lahore-from-abroad" className="text-[#8B1E2D] underline">general overseas ordering guide</Link> • <Link href="/blog/send-flowers-to-lahore-from-uk" className="text-[#8B1E2D] underline">sending from the UK</Link> • <Link href="/blog/send-flowers-to-lahore-from-usa" className="text-[#8B1E2D] underline">sending from the USA</Link></p>
      </section>
    </article>
  );
}
