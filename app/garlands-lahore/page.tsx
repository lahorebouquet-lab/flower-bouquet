import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Flower2, Users, Church, MessageCircle, Truck, Camera, Sparkles, Leaf } from "lucide-react";
import { SITE_URL, whatsappLink } from "@/lib/business";
import RelatedProducts from "../components/RelatedProducts";

export const metadata: Metadata = {
  title: {
    absolute: "Fresh Flower Garlands (Haar) in Lahore | Lahore Bouquet",
  },
  description: "Fresh flower garlands (haar) in Lahore from Rs. 999 — marigold, rose & jasmine haar for baraat, nikkah, mehndi and welcome ceremonies. Bulk wedding orders",
  alternates: {
    canonical: `${SITE_URL}/garlands-lahore`,
  },
  openGraph: {
    title: "Fresh Flower Garlands (Haar) in Lahore",
    description: "Marigold, rose & jasmine haar from Rs. 999 for baraat, nikkah, mehndi & welcome. Bulk wedding orders, same-day Lahore delivery.",
    url: `${SITE_URL}/garlands-lahore`,
    images: [
      {
        url: `${SITE_URL}/images/page-garlands-haar-lahore.webp`,
        width: 1200,
        height: 800,
        alt: "Fresh marigold and rose garlands (haar) for weddings in Lahore",
      },
    ],
  }
};

const FAQS = [
  {
    q: "How much does a fresh flower garland (haar) cost in Lahore?",
    a: "Fresh garlands start at Rs. 999 for a standard marigold haar. Rose garlands start at Rs. 1,499 and premium jasmine (motia) haar at Rs. 1,999. Prices vary with flower season and length — message us on WhatsApp (0310-4225974) for today's exact rate."
  },
  {
    q: "Do you make garlands for baraat and nikkah ceremonies?",
    a: "Yes — baraat welcome garlands, couple exchange haar for nikkah, and mehndi-stage garland décor are among our most ordered wedding items. For weddings, book 2–3 days ahead so we can source the freshest blooms."
  },
  {
    q: "Can I order garlands in bulk for a wedding?",
    a: "Absolutely. We prepare bulk orders — 20 to 200+ garlands — for baraats, walimas and mehndis, with consistent size and freshness across every piece. Bulk pricing is discounted; share your quantity on WhatsApp for a quote."
  },
  {
    q: "How long do fresh garlands stay fresh?",
    a: "Made the same morning, our garlands stay fresh for 8–12 hours at room temperature. We mist and pack them for transit, and for events we can deliver in two batches (morning + evening) so everything looks fresh for photos."
  },
  {
    q: "What payment methods do you accept?",
    a: "Cash on Delivery (COD), JazzCash, EasyPaisa, bank transfer and international credit/debit cards — convenient whether you're ordering from Lahore or from abroad (UK, USA, UAE)."
  }
];

const TYPES = [
  {
    name: "Marigold Haar (Genda)",
    price: "from Rs. 999",
    desc: "The classic festive garland — vibrant yellow-orange marigolds strung fresh. Perfect for baraat welcomes, dholki nights and religious ceremonies.",
    popular: true,
  },
  {
    name: "Red Rose Haar",
    price: "from Rs. 1,499",
    desc: "Luxurious fresh red-rose garland for nikkah couple exchange and VIP welcomes. Also available in pink and white roses.",
    popular: false,
  },
  {
    name: "Jasmine Haar (Motia)",
    price: "from Rs. 1,999",
    desc: "Delicately fragrant white jasmine — traditional for mehndi, mayoun and bridal wear. Seasonal; book ahead in peak wedding months.",
    popular: false,
  },
  {
    name: "Mixed Floral Toran & Strings",
    price: "from Rs. 799",
    desc: "Decorative marigold-mango-leaf torans for doorways and stage backdrops, plus long floral strings for mehndi décor.",
    popular: false,
  },
];

export default function GarlandsLahorePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
      { "@type": "ListItem", position: 2, name: "Fresh Flower Garlands in Lahore", item: `${SITE_URL}/garlands-lahore` },
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
        <Link href="/wedding-decor" className="hover:text-[#0B0B0B] transition-colors">Wedding Decor</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Flower Garlands</span>
      </nav>

      {/* Hero */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <Flower2 className="w-3.5 h-3.5 text-[#C6A15B]" />
          Made Fresh Same Morning • Bulk Wedding Orders
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Fresh Flower Garlands (Haar) in Lahore
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          No Pakistani wedding is complete without fresh <strong>phoolon ke haar</strong>. Lahore Bouquet hand-strings <strong>flower garlands in Lahore</strong> every morning — marigold (genda), red rose and fragrant jasmine (motia) haar for baraat welcomes, nikkah couple exchange, mehndi stages and VIP receptions. We deliver single garlands and bulk wedding orders across DHA, Gulberg, Model Town, Johar Town, Bahria Town, Cantt, Wapda Town and Askari, misted and packed so they arrive fresh for your ceremony and photos.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#8B1E2D]" /> Same-day 2–5 hour delivery</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo approval on WhatsApp first</span>
          <span className="flex items-center gap-1.5"><Leaf className="w-4 h-4 text-[#8B1E2D]" /> Strung fresh the same morning</span>
        </div>

        <div className="rounded-2xl overflow-hidden border border-[rgba(198,161,91,0.35)] shadow-sm">
          <img
            src="/images/page-garlands-haar-lahore.webp"
            alt="Fresh marigold, rose and jasmine garlands (haar) hand-strung for baraat and nikkah in Lahore"
            className="w-full h-auto object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </section>

      {/* Types */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Flower2 className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Garland Types & Prices in Lahore</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {TYPES.map((t) => (
            <div key={t.name} className={`p-6 rounded-2xl border shadow-sm space-y-3 relative ${t.popular ? "bg-[#0B0B0B] border-[#C6A15B]" : "bg-white border-[rgba(198,161,91,0.25)]"}`}>
              {t.popular && (
                <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[#C6A15B] text-[#0B0B0B] text-[11px] font-bold uppercase tracking-wider">Most Ordered</span>
              )}
              <div className="flex items-start justify-between gap-2">
                <h3 className={`font-playfair text-lg font-bold ${t.popular ? "text-white" : "text-[#0B0B0B]"}`}>{t.name}</h3>
                <p className={`font-playfair text-lg font-bold whitespace-nowrap ${t.popular ? "text-[#C6A15B]" : "text-[#8B1E2D]"}`}>{t.price}</p>
              </div>
              <p className={`text-xs leading-relaxed ${t.popular ? "text-[#E5DED2]" : "text-[#2A2A2A]"}`}>{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Occasions */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Ceremonies We Supply Garlands For</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-2">
            <div className="flex items-center gap-2"><Users className="w-4 h-4 text-[#8B1E2D]" /><h3 className="font-playfair font-bold text-[#0B0B0B] text-sm">Baraat Welcome</h3></div>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Grand marigold garlands to welcome the groom's family — single statement haar or matching sets for the whole baraat party.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-2">
            <div className="flex items-center gap-2"><Church className="w-4 h-4 text-[#8B1E2D]" /><h3 className="font-playfair font-bold text-[#0B0B0B] text-sm">Nikkah Exchange</h3></div>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Elegant rose or jasmine couple haar for the nikkah ceremony — sized for comfortable exchange and photos.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-2">
            <div className="flex items-center gap-2"><Flower2 className="w-4 h-4 text-[#8B1E2D]" /><h3 className="font-playfair font-bold text-[#0B0B0B] text-sm">Mehndi & Dholki</h3></div>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Colourful marigold strings, torans and stage garlands that transform any home into a festive mehndi venue.</p>
          </div>
        </div>
      </section>

      {/* Bulk orders */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Bulk Wedding Orders</h2>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Planning a full wedding? We handle bulk garland orders of 20 to 200+ pieces with <strong>consistent size, colour and freshness</strong> across every haar — baraat sets, stage décor strings, car garlands and guest welcome haar. Bulk orders get discounted pricing and scheduled delivery (we can deliver in morning + evening batches so flowers stay photo-fresh). During wedding season (November–February), book bulk orders at least 3–5 days ahead. Pair with our <Link href="/wedding-decor" className="text-[#8B1E2D] underline">wedding décor</Link> and <Link href="/wedding-room-decoration-lahore" className="text-[#8B1E2D] underline">bridal room decoration</Link> for the complete package.
        </p>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          <strong>Good to know:</strong> jasmine (motia) is highly seasonal — in peak wedding months demand often exceeds supply, so motia haar should be booked a week ahead when possible. Marigold and roses are available year-round. If any flower is unexpectedly unavailable on your date, we always confirm a substitution with you on WhatsApp first — never a silent swap.
        </p>
      </section>

      {/* Freshness & sizing */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Freshness Promise & Sizing Guide</h2>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          A garland is only as good as the morning it was strung. Our florists string every haar <strong>the same morning</strong> as your event — never the night before. Flowers are misted, kept cool, and packed in breathable wrapping for the ride across Lahore. Standard garlands stay fresh 8–12 hours; for all-day weddings we offer a <strong>two-batch delivery</strong> (morning set for the baraat, fresh evening set for the walima stage) so your photos look perfect at every event.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-[#F8F3EA] border border-[rgba(198,161,91,0.25)]">
            <h3 className="font-bold text-[#0B0B0B] mb-1">Standard Haar</h3>
            <p className="text-[#2A2A2A] leading-relaxed">32–36 inches — comfortable for wearing and couple exchange photos.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F3EA] border border-[rgba(198,161,91,0.25)]">
            <h3 className="font-bold text-[#0B0B0B] mb-1">Grand Haar</h3>
            <p className="text-[#2A2A2A] leading-relaxed">48+ inches with double strands — for the groom's baraat entrance and stage moments.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#F8F3EA] border border-[rgba(198,161,91,0.25)]">
            <h3 className="font-bold text-[#0B0B0B] mb-1">Decorative Strings</h3>
            <p className="text-[#2A2A2A] leading-relaxed">6–10 feet lengths for stages, doorways and mehndi backdrops — priced per foot.</p>
          </div>
        </div>
      </section>

      {/* How to order */}
      <section className="p-6 sm:p-8 rounded-2xl bg-[#0B0B0B] border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-white">How to Order in 3 Steps</h2>
        <ol className="space-y-3 text-xs sm:text-sm text-[#E5DED2] leading-relaxed list-decimal list-inside">
          <li><strong className="text-white">WhatsApp your need:</strong> message <strong className="text-[#C6A15B]">0310-4225974</strong> with garland type, quantity and event date — or send a reference photo.</li>
          <li><strong className="text-white">Confirm & pay:</strong> we confirm availability and price; pay by COD, JazzCash, EasyPaisa, bank transfer or international card.</li>
          <li><strong className="text-white">Fresh delivery:</strong> garlands are strung the same morning and delivered misted and packed — same-day in 2–5 hours.</li>
        </ol>
        <p className="text-xs sm:text-sm text-[#E5DED2] leading-relaxed">
          We deliver garlands across <strong className="text-white">DHA, Gulberg, Model Town, Johar Town, Bahria Town, Cantt, Wapda Town and Askari</strong> — to homes, marquees, farmhouses and mosques. For weddings outside Lahore (Kasur, Sheikhupura, Gujranwala), advance bulk orders can be arranged with a day's notice.
        </p>
        <a
          href={whatsappLink("Hello Lahore Bouquet! I want to order fresh flower garlands (haar) in Lahore.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors"
        >
          <MessageCircle className="w-4 h-4" /> Order Garlands on WhatsApp
        </a>
      </section>

      {/* FAQ */}
      
      <section className="my-10">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B] text-center mb-6">Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href="/blog/gajra-prices-lahore-2026" className="block p-4 rounded-xl bg-white border border-[#E5DED2] hover:border-[#8B1E2D] transition-colors">
            <span className="text-sm font-semibold text-[#0B0B0B]">Gajra Prices 2026</span>
            <span className="text-[#8B1E2D] ml-2">→</span>
          </Link>
          <Link href="/blog/nikkah-flowers-guide-lahore" className="block p-4 rounded-xl bg-white border border-[#E5DED2] hover:border-[#8B1E2D] transition-colors">
            <span className="text-sm font-semibold text-[#0B0B0B]">Nikkah Flowers Guide</span>
            <span className="text-[#8B1E2D] ml-2">→</span>
          </Link>
        </div>
      </section>

      <RelatedProducts title="Gajray & Garlands" categoryMatch="Gajray" count={4} />

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Garland FAQs</h2>
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
        <p>Related: <Link href="/wedding-decor" className="text-[#8B1E2D] underline">wedding décor in Lahore</Link> • <Link href="/wedding-room-decoration-lahore" className="text-[#8B1E2D] underline">bridal room decoration</Link> • <Link href="/collections/fresh-flower-gajray" className="text-[#8B1E2D] underline">fresh flower gajray</Link> • <Link href="/prices" className="text-[#8B1E2D] underline">price list</Link></p>
      </section>
    </main>
  );
}
