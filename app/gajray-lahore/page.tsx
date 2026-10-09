import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Flower2, Sparkles, MoonStar, MessageCircle, Truck, Camera, Heart, Hand } from "lucide-react";
import { SITE_URL, whatsappLink } from "@/lib/business";
import RelatedProducts from "../components/RelatedProducts";

export const metadata: Metadata = {
  title: {
    absolute: "Fresh Gajray in Lahore | Motia & Rose Gajray Delivery",
  },
  description: "Order fresh gajray in Lahore — fragrant motia & red rose gajray from Rs. 370. Bridal wrist cuffs, hand corsages & gajra sets with same-day delivery.",
  alternates: {
    canonical: `${SITE_URL}/gajray-lahore`,
  },
  openGraph: {
    title: "Fresh Gajray in Lahore | Motia & Rose Gajray",
    description: "Fragrant fresh gajray — motia, red rose, wrist cuffs & bridal sets. Same-day delivery across Lahore.",
    url: `${SITE_URL}/gajray-lahore`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Fresh motia and red rose gajray — gajray delivery in Lahore",
      },
    ],
  }
};

const FAQS = [
  {
    q: "What is the price of fresh gajray in Lahore?",
    a: "At Lahore Bouquet, a classic red rose gajra starts at Rs. 370. Bridal wrist cuffs with red roses and baby's breath are Rs. 2,499, and a simple white jasmine hand corsage is Rs. 2,999. Prices depend on flower type and thickness — message us on WhatsApp (0310-4225974) for today's exact quote."
  },
  {
    q: "How long do fresh gajray stay fresh?",
    a: "Our gajray are made fresh on the morning of your event with motia (jasmine) and roses picked the same day. Kept cool and lightly misted, they stay fragrant for 8–12 hours — easily lasting through a full mehndi or wedding function."
  },
  {
    q: "Do you deliver gajray on the same day in Lahore?",
    a: "Yes. Order before our daily cutoff and we deliver fresh gajray the same day across DHA, Gulberg, Model Town, Johar Town, Bahria Town, Cantt and Wapda Town. For mehndi mornings, book the night before and choose an early delivery slot."
  },
  {
    q: "Can I get matching bridal gajra sets for mehndi?",
    a: "Absolutely — we make complete matching sets: double gajray, wrist cuffs, matha patti-style bands and floral chokers in motia, red rose or mixed blossoms. Send your outfit colour on WhatsApp and our florists match the flowers to it."
  },
  {
    q: "Are your gajray made with real fresh flowers?",
    a: "Yes — 100% real fresh flowers, never artificial. We use fragrant motia (jasmine), desi red roses and baby's breath, hand-tied with soft thread so they're comfortable on the wrist for hours."
  }
];

const OPTIONS = [
  {
    name: "Classic Red Rose Gajra",
    size: "Single strand pair",
    price: "Rs. 370",
    desc: "The timeless red rose petal gajra — fragrant, elegant and perfect for mehndis, dholkis and casual festive wear.",
    popular: true,
  },
  {
    name: "Bridal Wrist Cuffs",
    size: "Henna ceremony pair",
    price: "Rs. 2,499",
    desc: "Statement wrist cuffs with red roses, baby's breath and peach blossoms — designed for brides and bridesmaids.",
    popular: false,
  },
  {
    name: "White Jasmine Hand Corsage",
    size: "Single corsage",
    price: "Rs. 2,999",
    desc: "Delicate white jasmine floral corsage — soft, fragrant and beautifully minimal for nikkah and daytime events.",
    popular: false,
  },
  {
    name: "Complete Gajra Set",
    size: "Custom bridal set",
    price: "Custom quote",
    desc: "Matching double gajray, cuffs and hair accessories in your chosen flowers and colours — quoted instantly on WhatsApp.",
    popular: false,
  },
];

export default function GajrayLahorePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
      { "@type": "ListItem", position: 2, name: "Fresh Gajray in Lahore", item: `${SITE_URL}/gajray-lahore` },
    ],
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
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Fresh Gajray in Lahore</span>
      </nav>

      {/* Hero */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <Flower2 className="w-3.5 h-3.5 text-[#C6A15B]" />
          Made Fresh Daily • Same-Day Delivery
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Fresh Gajray in Lahore — Motia & Rose Gajray
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Looking for <strong>fresh gajray in Lahore</strong>? Lahore Bouquet hand-ties fragrant <strong>motia (jasmine) and red rose gajray</strong> every morning — from a classic Rs. 370 gajra pair to bridal wrist cuffs and complete matching gajra sets. Delivered fresh across DHA, Gulberg, Model Town, Johar Town, Bahria Town, Cantt and Wapda Town, in time for your mehndi, dholki or shaadi. Every gajra is made with real flowers and photographed for your WhatsApp approval before dispatch.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#8B1E2D]" /> Same-day 2–5 hour delivery</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo approval on WhatsApp first</span>
          <span className="flex items-center gap-1.5"><Hand className="w-4 h-4 text-[#8B1E2D]" /> Hand-tied with soft thread</span>
        </div>
      </section>

      {/* Options & price cards */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Gajray Styles & Prices in Lahore</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed max-w-3xl">
          Transparent pricing — no hidden charges. Delivery is free across all listed Lahore areas — see our <Link href="/delivery-areas" className="text-[#8B1E2D] underline">delivery areas</Link> page.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {OPTIONS.map((s) => (
            <div key={s.name} className={`p-6 rounded-2xl border shadow-sm space-y-3 relative ${s.popular ? "bg-[#0B0B0B] border-[#C6A15B]" : "bg-white border-[rgba(198,161,91,0.25)]"}`}>
              {s.popular && (
                <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[#C6A15B] text-[#0B0B0B] text-[11px] font-bold uppercase tracking-wider">Most Ordered</span>
              )}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className={`font-playfair text-lg font-bold ${s.popular ? "text-white" : "text-[#0B0B0B]"}`}>{s.name}</h3>
                  <p className={`text-xs ${s.popular ? "text-[#C6A15B]" : "text-[#777]"}`}>{s.size}</p>
                </div>
                <p className={`font-playfair text-xl font-bold whitespace-nowrap ${s.popular ? "text-[#C6A15B]" : "text-[#8B1E2D]"}`}>{s.price}</p>
              </div>
              <p className={`text-xs leading-relaxed ${s.popular ? "text-[#E5DED2]" : "text-[#2A2A2A]"}`}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Occasions */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Perfect Gajray for Every Occasion</h2>
        </div>
        <ul className="space-y-2 text-xs sm:text-sm text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Mehndi & Dholki:</strong> fragrant motia gajray and red rose cuffs — the classic bridal party look.</li>
          <li><strong>Nikkah:</strong> delicate white jasmine corsages and minimal single-strand gajray for daytime elegance.</li>
          <li><strong>Weddings:</strong> complete matching bridal gajra sets — double gajray, cuffs and hair florals in your outfit colours.</li>
          <li><strong>Eid & Festive wear:</strong> simple red rose gajra pairs that go with everything.</li>
        </ul>
        <p className="text-xs text-[#2A2A2A] leading-relaxed">
          Pair your gajray with <Link href="/flower-jewellery-lahore" className="text-[#8B1E2D] underline">fresh flower jewellery</Link> for a complete mehndi look, or browse real designs in our <Link href="/collections/fresh-flower-gajray" className="text-[#8B1E2D] underline">fresh gajray collection</Link>.
        </p>
      </section>

      {/* Delivery areas */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Fresh Gajray Delivery Across Lahore</h2>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Gajray are at their best when they're fresh — that's why we make them the same morning and deliver within 2–5 hours across <strong>DHA</strong> (all phases), <strong>Gulberg</strong>, <strong>Model Town</strong>, <strong>Johar Town</strong>, <strong>Bahria Town</strong>, <strong>Cantt</strong>, <strong>Wapda Town</strong> and <strong>Askari</strong>. For early-morning mehndi functions, order the night before and pick a morning slot — your gajray arrive cool, fragrant and photo-ready. Delivery is <strong>free</strong> across all listed areas.
        </p>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Ordering from abroad for a family wedding? We deliver gajray for overseas Pakistanis every week — pay by international card from the <strong>UK, USA or UAE</strong>, approve the photo on WhatsApp, and we'll handle the Lahore delivery.
        </p>
      </section>

      {/* How to order */}
      <section className="p-6 sm:p-8 rounded-2xl bg-[#0B0B0B] border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-white">How to Order in 3 Steps</h2>
        <ol className="space-y-3 text-xs sm:text-sm text-[#E5DED2] leading-relaxed list-decimal list-inside">
          <li><strong className="text-white">WhatsApp us:</strong> message <strong className="text-[#C6A15B]">0310-4225974</strong> with the gajra style you want (or your outfit photo for colour matching) plus the delivery address in Lahore.</li>
          <li><strong className="text-white">Approve the photo:</strong> we send a real photo of your fresh gajray before dispatch — nothing leaves until you approve.</li>
          <li><strong className="text-white">Pay & receive:</strong> pay by COD, JazzCash, EasyPaisa, bank transfer or international card. Same-day delivery in 2–5 hours.</li>
        </ol>
        <a
          href={whatsappLink("Hello Lahore Bouquet! I want to order fresh gajray in Lahore.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors"
        >
          <MessageCircle className="w-4 h-4" /> Order Fresh Gajray on WhatsApp
        </a>
      </section>

      {/* FAQ */}
      <section className="my-10">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B] text-center mb-6">Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href="/flower-jewellery-lahore" className="block p-4 rounded-xl bg-white border border-[#E5DED2] hover:border-[#8B1E2D] transition-colors">
            <span className="text-sm font-semibold text-[#0B0B0B]">Fresh Flower Jewellery in Lahore</span>
            <span className="text-[#8B1E2D] ml-2">→</span>
          </Link>
          <Link href="/blog/gajra-prices-lahore-2026" className="block p-4 rounded-xl bg-white border border-[#E5DED2] hover:border-[#8B1E2D] transition-colors">
            <span className="text-sm font-semibold text-[#0B0B0B]">Gajra Prices in Lahore 2026</span>
            <span className="text-[#8B1E2D] ml-2">→</span>
          </Link>
        </div>
      </section>

      <RelatedProducts title="Fresh Gajray Collection" categoryMatch="Fresh Flower Gajray" count={4} />

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Gajray FAQs</h2>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <details key={i} className="p-5 rounded-2xl bg-white border border-[#E5DED2] group">
              <summary className="font-bold text-sm text-[#0B0B0B] cursor-pointer list-none flex justify-between items-center gap-2">
                {f.q}
                <span className="text-[#8B1E2D] group-open:rotate-45 transition-transform text-lg leading-none shrink-0">+</span>
              </summary>
              <p className="text-sm mt-2 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="text-xs text-[#777777]">
        <p>Related: <Link href="/collections/fresh-flower-gajray" className="text-[#8B1E2D] underline">fresh gajray collection</Link> • <Link href="/flower-jewellery-lahore" className="text-[#8B1E2D] underline">flower jewellery</Link> • <Link href="/prices" className="text-[#8B1E2D] underline">price list</Link> • <Link href="/delivery-areas" className="text-[#8B1E2D] underline">delivery areas & fees</Link></p>
      </section>
    </main>
  );
}
