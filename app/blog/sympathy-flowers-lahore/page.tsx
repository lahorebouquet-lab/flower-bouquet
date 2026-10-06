import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, BUSINESS, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Sympathy & Condolence Flowers in Lahore: A Respectful Guide",
  },
  description: "Sympathy and condolence flowers in Lahore — white lilies, roses & respectful condolence baskets with quiet same-day delivery. Guidance on what to send and write.",
  alternates: {
    canonical: `${SITE_URL}/blog/sympathy-flowers-lahore`,
  },
  openGraph: {
    title: "Sympathy & Condolence Flowers in Lahore — A Respectful Guide",
    description: "White lilies & roses with quiet, respectful same-day delivery across Lahore. What to send and what to write.",
    url: `${SITE_URL}/blog/sympathy-flowers-lahore`,
    type: "article",
  }
};

const FAQS = [
  {
    q: "What flowers are appropriate for condolences in Lahore?",
    a: "White lilies, white roses and soft white or cream arrangements are the most appropriate. They convey peace and respect. Avoid bright, festive colours and large celebratory arrangements — keep it simple and dignified."
  },
  {
    q: "Can flowers be sent to a home observing mourning?",
    a: "Yes, but with sensitivity. We deliver quietly and discreetly, without any festive packaging or celebratory notes. Many families appreciate condolence baskets and simple white arrangements sent to the home."
  },
  {
    q: "What should I write on a condolence card?",
    a: "Keep it short and sincere: 'Inna lillahi wa inna ilayhi raji'un — our heartfelt condolences to you and your family,' or simply 'With deepest sympathy.' We handwrite your message on a plain, respectful card."
  },
  {
    q: "Do you offer same-day delivery for sympathy flowers?",
    a: "Yes. We understand these moments can't wait — same-day 2–5 hour delivery is available across DHA, Gulberg, Model Town, Johar Town, Bahria Town, Cantt, Wapda Town and Askari. Just message us on WhatsApp and we'll arrange it with care."
  },
  {
    q: "I'm abroad — can I send condolence flowers to Lahore?",
    a: "Yes. We regularly deliver sympathy flowers ordered from the UK, USA and UAE. Pay by international card, share your card message, and we'll handle the delivery quietly and respectfully, with photo confirmation on WhatsApp."
  }
];

export default function SympathyFlowersPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Sympathy & Condolence Flowers in Lahore",
    description: "A respectful guide to condolence flowers in Lahore — appropriate flowers, card messages and quiet same-day delivery.",
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
        <span className="text-[#8B1E2D] font-semibold">Sympathy Flowers</span>
      </nav>
      <header className="space-y-4">
        <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">Occasions Guide • October 2026</span>
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B0B0B] leading-tight">Sympathy & Condolence Flowers in Lahore: A Respectful Guide</h1>
        <p className="text-sm text-[#777777]">By Lahore Bouquet Florist Team • Updated 6 October 2026 • 4 min read</p>
        <p className="text-sm sm:text-base leading-relaxed"><strong>Quick answer:</strong> White lilies and white roses (from <strong>Rs. 1,180</strong>) are the appropriate choice. We deliver <strong>quietly and respectfully</strong>, same-day, across <strong>Lahore</strong> — WhatsApp <strong>{BUSINESS.phone.intl}</strong> and we will handle the rest with care.</p>
      </header>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Appropriate Sympathy Arrangements</h2>
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]"><div className="font-bold text-sm">White Lily Arrangement</div><p className="text-sm mt-1">Peaceful and dignified — the most requested condolence flower. From Rs. 2,200.</p><Link href="/bouquets" className="text-xs text-[#8B1E2D] underline">View arrangements →</Link></div>
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]"><div className="font-bold text-sm">White Rose Bouquet</div><p className="text-sm mt-1">Simple, respectful white roses with plain wrapping. From Rs. 1,800.</p><Link href="/bouquets" className="text-xs text-[#8B1E2D] underline">View arrangements →</Link></div>
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]"><div className="font-bold text-sm">Condolence Basket</div><p className="text-sm mt-1">A tasteful basket of white and cream blooms for the home. From Rs. 3,500.</p><Link href="/bouquets" className="text-xs text-[#8B1E2D] underline">View arrangements →</Link></div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">How We Handle Condolence Deliveries</h2>
        <ul className="space-y-2 text-sm list-disc list-inside leading-relaxed">
          <li><strong>Quiet, discreet delivery</strong> — no festive packaging, no celebratory language, ever.</li>
          <li><strong>Plain respectful card</strong> — your message handwritten simply and sincerely.</li>
          <li><strong>Same-day service</strong> — we understand these moments cannot wait; 2–5 hour delivery across Lahore.</li>
          <li><strong>Guidance if you're unsure</strong> — message us on WhatsApp and we'll gently help you choose what's appropriate.</li>
        </ul>
        <a href={whatsappLink("Hello Lahore Bouquet. I need to send sympathy flowers in Lahore. Please guide me.")} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">Arrange Sympathy Flowers</a>
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
