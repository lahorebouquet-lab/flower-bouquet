import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Globe2, CreditCard, Camera, Clock, MessageCircle, HelpCircle, Plane } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Send Flowers to Lahore from Abroad | UK, USA, UAE, Saudi",
  },
  description:
    "Living in the UK, USA, UAE, Saudi Arabia or Canada? Send fresh flowers, cakes and gifts to your family in Lahore. Pay with your international card, we deliver in 2–5 hours with WhatsApp photo proof.",
  alternates: {
    canonical: "https://lahorebouquet.com/send-flowers-to-lahore-from-abroad",
  },
  openGraph: {
    title: "Send Flowers to Lahore from Abroad | UK, USA, UAE, Saudi",
    description:
      "Living in the UK, USA, UAE, Saudi Arabia or Canada? Send fresh flowers, cakes and gifts to your family in Lahore. Pay with your international card, we deliver in 2–5 hours with WhatsApp photo proof.",
    url: "https://lahorebouquet.com/send-flowers-to-lahore-from-abroad",
    type: "website",
    locale: "en_PK",
  },
};

const FAQS = [
  {
    q: "How do I pay for flowers from abroad?",
    a: "You can pay securely online with any international Visa or Mastercard debit/credit card. If you prefer, message us on WhatsApp at +92 310 4225974 and we will arrange a payment link that works from your country.",
  },
  {
    q: "How quickly will my flowers reach Lahore?",
    a: "Standard delivery takes 2 to 5 hours anywhere in Lahore after your order is confirmed. If you need a midnight surprise (11:30 PM – 12:15 AM), book a few hours in advance.",
  },
  {
    q: "Can I schedule delivery for a specific date, like Eid or a birthday?",
    a: "Yes. Choose your date at checkout or tell us on WhatsApp, and we will deliver on that exact day. For Eid, Valentine's Day and Mother's Day, we recommend booking 2–3 days early.",
  },
  {
    q: "How do I know the bouquet actually looked good?",
    a: "Before our rider leaves the workshop, we send you a real photo of your finished bouquet on WhatsApp for approval. You see exactly what your family will receive.",
  },
  {
    q: "What if nobody is home when the rider arrives?",
    a: "Share the recipient's phone number with us. Our rider calls before arriving, and if needed we coordinate a convenient redelivery time the same day at no extra charge.",
  },
  {
    q: "Which countries can I order from?",
    a: "Anywhere in the world — most of our overseas customers order from the UK, USA, UAE, Saudi Arabia, Canada and Australia. If you have internet access, you can order.",
  },
  {
    q: "Can I add a personal message card?",
    a: "Yes, every order includes a complimentary handwritten message card. Write your message at checkout or on WhatsApp and we will include it with the flowers.",
  },
];

export default function SendFromAbroadPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://lahorebouquet.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Send Flowers from Abroad",
        item: "https://lahorebouquet.com/send-flowers-to-lahore-from-abroad",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Send Flowers from Abroad</span>
      </nav>

      {/* Hero */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <Plane className="w-3.5 h-3.5 text-[#C6A15B]" />
          For Overseas Pakistanis
        </span>
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Send Flowers to Lahore from Abroad
        </h1>
        <p className="text-[#2A2A2A] text-sm sm:text-base leading-relaxed max-w-3xl">
          Living in the <strong>UK, USA, UAE, Saudi Arabia, Canada or Australia</strong> and missing
          your family in Lahore? Order fresh bouquets, cakes and gifts online in under 2 minutes.
          Pay with your international card, and we will hand-deliver everything in{" "}
          <strong>2 to 5 hours</strong> — with a real photo sent to you on WhatsApp before dispatch,
          so you see exactly what your loved ones receive.
        </p>
      </section>

      {/* How it works */}
      <section className="space-y-6">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">How Ordering from Abroad Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-2">
            <Globe2 className="w-8 h-8 text-[#8B1E2D]" />
            <h3 className="font-semibold text-[#0B0B0B]">1. Choose from anywhere</h3>
            <p className="text-xs leading-relaxed">
              Browse bouquets, cakes and gift combos right here. Everything is priced in PKR —
              your card converts automatically at your bank's rate.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-2">
            <CreditCard className="w-8 h-8 text-[#8B1E2D]" />
            <h3 className="font-semibold text-[#0B0B0B]">2. Pay with your international card</h3>
            <p className="text-xs leading-relaxed">
              Secure checkout accepts international Visa and Mastercard. Prefer chatting first?
              Message us on WhatsApp at +92 310 4225974 — we reply fast, whatever your time zone.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-2">
            <Camera className="w-8 h-8 text-[#8B1E2D]" />
            <h3 className="font-semibold text-[#0B0B0B]">3. We deliver with photo proof</h3>
            <p className="text-xs leading-relaxed">
              Our florists prepare your bouquet fresh, send you its photo on WhatsApp for approval,
              then deliver across Lahore in 2 to 5 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Time zone note */}
      <section className="bg-[#0B0B0B] p-8 sm:p-10 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-xl space-y-4">
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-[#C6A15B]" />
          <h2 className="font-playfair text-2xl font-bold text-white">Order on Your Time, We Deliver on Theirs</h2>
        </div>
        <p className="text-sm text-[#BDBDBD] leading-relaxed max-w-3xl">
          It does not matter if it is 3 AM in London or midnight in Toronto — our online store never
          closes. Place your order whenever it suits you; our Lahore workshop (open 9 AM – 1 AM PKT,
          7 days) prepares everything fresh and delivers at the time your family is home. For
          birthdays and Eid, schedule days in advance and we will handle the rest.
        </p>
        <Link
          href="/bouquets"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-semibold hover:bg-[#a32438] transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          Browse Bouquets for Lahore
        </Link>
      </section>

      {/* Popular picks */}
      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Most Loved by Overseas Customers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <Link href="/roses/red-roses" className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-colors shadow-sm">
            <h3 className="font-semibold text-[#0B0B0B]">Imported Red Rose Bouquets</h3>
            <p className="text-xs text-[#777777] mt-1">The classic surprise for parents and spouses — from PKR 1,900.</p>
          </Link>
          <Link href="/money-bouquets" className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-colors shadow-sm">
            <h3 className="font-semibold text-[#0B0B0B]">Money Bouquets</h3>
            <p className="text-xs text-[#777777] mt-1">Send Eidi or a birthday cash gift in stunning floral wrapping.</p>
          </Link>
          <Link href="/gifts-and-cakes" className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-colors shadow-sm">
            <h3 className="font-semibold text-[#0B0B0B]">Cakes & Gift Combos</h3>
            <p className="text-xs text-[#777777] mt-1">Flowers with cake and chocolates — complete celebration in one box.</p>
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white p-8 sm:p-10 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold">Frequently Asked Questions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#2A2A2A] leading-relaxed">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
              <h3 className="font-semibold text-[#0B0B0B] text-sm">{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
