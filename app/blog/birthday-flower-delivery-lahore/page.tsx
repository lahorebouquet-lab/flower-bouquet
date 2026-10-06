import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, BUSINESS, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Birthday Flower Delivery in Lahore: Surprise Ideas (2026)",
  },
  description: "Birthday flower delivery in Lahore — bouquets from Rs. 1,180, midnight surprise at 12 AM, cake + teddy + balloon combos. Same-day 2–5 hour delivery.",
  alternates: {
    canonical: `${SITE_URL}/blog/birthday-flower-delivery-lahore`,
  },
  openGraph: {
    title: "Birthday Flower Delivery in Lahore — Surprise Ideas",
    description: "Bouquets from Rs. 1,180 with midnight surprise delivery, cake, teddy & balloon combos across Lahore.",
    url: `${SITE_URL}/blog/birthday-flower-delivery-lahore`,
    type: "article",
  }
};

const FAQS = [
  {
    q: "What flowers are best for a birthday in Lahore?",
    a: "Bright mixed bouquets, pink or red roses, lilies and sunflowers are birthday favourites. Match the mood: cheerful mixed bouquets for friends, elegant roses for a partner, and soft pastels for mothers."
  },
  {
    q: "How much does birthday flower delivery cost in Lahore?",
    a: "Birthday bouquets start at Rs. 1,180. Most people spend Rs. 2,000–4,500 on a beautiful birthday bouquet. Combos with cake (from Rs. 2,200), teddy bear (from Rs. 1,499) and helium balloons (from Rs. 199 each) are the most popular."
  },
  {
    q: "Do you deliver birthday flowers at midnight?",
    a: "Yes — our midnight surprise service runs 11:30 PM to 12:15 AM. The rider arrives right at midnight with flowers, cake, teddy and a handwritten card. Book the midnight slot before 8:00 PM; a Rs. 500 midnight surcharge applies."
  },
  {
    q: "How fast is same-day birthday delivery?",
    a: "2–5 hours across DHA, Gulberg, Model Town, Johar Town, Bahria Town, Cantt, Wapda Town and Askari. Order in the morning for afternoon delivery, or message us on WhatsApp for the fastest available slot."
  },
  {
    q: "Can you decorate the room for a birthday surprise too?",
    a: "Yes! We offer full birthday room decoration — balloon garlands, backdrops, fairy lights and flower styling at homes across Lahore. Book 2–3 days ahead for decoration setups."
  }
];

export default function BirthdayFlowerDeliveryPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Birthday Flower Delivery in Lahore (2026)",
    description: "Birthday bouquet picks, midnight surprise ideas, cake/teddy/balloon combos and same-day delivery in Lahore.",
    author: { "@type": "Organization", name: "Lahore Bouquet Florist Team", url: `${SITE_URL}` },
    publisher: { "@type": "Organization", name: "Lahore Bouquet", url: `${SITE_URL}` },
    datePublished: "2026-10-06",
    dateModified: "2026-10-06",
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-10 bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B]">Home</Link><span>/</span>
        <Link href="/blog" className="hover:text-[#0B0B0B]">Blog</Link><span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Birthday Flower Delivery</span>
      </nav>
      <header className="space-y-4">
        <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">Occasions Guide • October 2026</span>
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B0B0B] leading-tight">Birthday Flower Delivery in Lahore: Surprise Ideas (2026)</h1>
        <p className="text-sm text-[#777777]">By Lahore Bouquet Florist Team • Updated 6 October 2026 • 5 min read</p>
        <p className="text-sm sm:text-base leading-relaxed"><strong>Quick answer:</strong> Birthday bouquets from <strong>Rs. 1,180</strong> with <strong>same-day 2–5 hour delivery</strong> — or make it unforgettable with a <strong>midnight surprise at 12 AM</strong>. Cake, teddy & balloon combos available. Order on WhatsApp <strong>{BUSINESS.phone.intl}</strong>.</p>
      </header>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Birthday Picks by Recipient</h2>
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]"><div className="font-bold text-sm">For Partner / Spouse</div><p className="text-sm mt-1">Red or pink roses with a teddy bear — the romantic classic. Rs. 2,500–6,000.</p><Link href="/teddy-bears-lahore" className="text-xs text-[#8B1E2D] underline">Add a teddy bear →</Link></div>
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]"><div className="font-bold text-sm">For Friends & Siblings</div><p className="text-sm mt-1">Cheerful mixed bouquets + helium balloon bunch. Rs. 1,800–4,000.</p><Link href="/helium-balloons-lahore" className="text-xs text-[#8B1E2D] underline">Add balloons →</Link></div>
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]"><div className="font-bold text-sm">For Parents</div><p className="text-sm mt-1">Elegant lilies or pastel bouquets with a heartfelt card. Rs. 1,180–3,500.</p><Link href="/bouquets" className="text-xs text-[#8B1E2D] underline">Shop bouquets →</Link></div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Birthday Bouquet Ideas in Lahore</h2>
        <p className="text-sm leading-relaxed">Not sure which bouquet to pick? These are our most-ordered birthday bouquets in Lahore — every one is hand-tied fresh on the day of delivery:</p>
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]"><div className="font-bold text-sm">Classic Red Rose Bouquet</div><p className="text-sm mt-1">12–50 stems, the timeless birthday gift. From Rs. 1,180.</p><Link href="/bouquets" className="text-xs text-[#8B1E2D] underline">Shop rose bouquets →</Link></div>
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]"><div className="font-bold text-sm">Elegant Lily Bouquet</div><p className="text-sm mt-1">Oriental lilies for a sophisticated birthday surprise.</p><Link href="/lily-bouquet-lahore" className="text-xs text-[#8B1E2D] underline">Shop lily bouquets →</Link></div>
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]"><div className="font-bold text-sm">Cheerful Sunflower Bouquet</div><p className="text-sm mt-1">Bright and joyful — perfect for friends. Rs. 2,400–3,800.</p><Link href="/sunflower-bouquet-lahore" className="text-xs text-[#8B1E2D] underline">Shop sunflower bouquets →</Link></div>
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]"><div className="font-bold text-sm">Chocolate Bouquet</div><p className="text-sm mt-1">Premium chocolates arranged like flowers — a birthday favourite.</p><Link href="/chocolate-bouquets-lahore" className="text-xs text-[#8B1E2D] underline">Shop chocolate bouquets →</Link></div>
        </div>
        <p className="text-sm leading-relaxed">Browse the full collection of <Link href="/bouquets" className="text-[#8B1E2D] underline font-semibold">birthday bouquets in Lahore</Link> — 262+ designs with same-day delivery.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">The Midnight Birthday Surprise</h2>
        <ul className="space-y-2 text-sm list-disc list-inside leading-relaxed">
          <li><strong>Midnight delivery 11:30 PM–12:15 AM</strong> — flowers, cake and gifts arrive right at 12 AM.</li>
          <li><strong>Full combo</strong> — bouquet + cake + teddy bear + helium balloons + handwritten card in one delivery.</li>
          <li><strong>Room decoration</strong> — we can also decorate the room with balloons and flowers while you plan the surprise. <Link href="/birthday-decoration-lahore" className="text-[#8B1E2D] underline">See birthday decoration →</Link></li>
          <li><strong>Photo approval first</strong> — we send you a photo of everything on WhatsApp before dispatch.</li>
        </ul>
        <a href={whatsappLink("Hello Lahore Bouquet! I want to plan a birthday flower surprise in Lahore.")} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">Plan a Birthday Surprise</a>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">How to Order in 3 Steps</h2>
        <ol className="space-y-2 text-sm list-decimal list-inside leading-relaxed">
          <li><strong>Pick your bouquet</strong> — browse <Link href="/bouquets" className="text-[#8B1E2D] underline">birthday bouquets</Link> or tell us your budget on WhatsApp and our florist will suggest the best options.</li>
          <li><strong>Add your extras</strong> — cake, <Link href="/teddy-bears-lahore" className="text-[#8B1E2D] underline">teddy bear</Link>, <Link href="/helium-balloons-lahore" className="text-[#8B1E2D] underline">helium balloons</Link> and a free handwritten card message.</li>
          <li><strong>Approve the photo</strong> — we send a real photo on WhatsApp before dispatch. Nothing leaves until you say it looks perfect.</li>
        </ol>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <details key={i} className="p-5 rounded-2xl bg-white border border-[#E5DED2] group">
              <summary className="font-bold text-sm text-[#0B0B0B] cursor-pointer list-none flex justify-between items-center">{f.q}<span className="text-[#8B1E2D] group-open:rotate-45 transition-transform text-lg leading-none">+</span></summary>
              <p className="text-sm mt-2 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </article>
  );
}
