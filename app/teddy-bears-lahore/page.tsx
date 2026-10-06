import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Gift, Ruler, MoonStar, MessageCircle, Truck, Camera, Sparkles, Heart } from "lucide-react";
import { SITE_URL, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Teddy Bears in Lahore | Giant Teddy Bear Delivery | Lahore Bouquet",
  },
  description: "Order teddy bears online in Lahore — from cute small plushies (Rs. 1,499) to 6-feet giant teddy bears (Rs. 12,999). Same-day & midnight delivery with roses and chocolate combos across DHA, Gulberg, Bahria Town.",
  alternates: {
    canonical: `${SITE_URL}/teddy-bears-lahore`,
  },
  openGraph: {
    title: "Teddy Bears in Lahore | Giant Teddy Bear Delivery",
    description: "Small to 6-feet giant teddy bears delivered same-day across Lahore. Combos with roses & chocolates. Midnight surprise delivery available.",
    url: `${SITE_URL}/teddy-bears-lahore`,
  }
};

const FAQS = [
  {
    q: "How much does a teddy bear cost in Pakistan?",
    a: "At Lahore Bouquet, small teddy bears start at Rs. 1,499, medium at Rs. 2,999, large at Rs. 5,999, and 6-feet giant teddy bears at Rs. 12,999. Combo deals with fresh roses and chocolates are available — message us on WhatsApp (0310-4225974) for today's exact price."
  },
  {
    q: "Do you deliver giant 6-feet teddy bears in Lahore?",
    a: "Yes. Our 6-feet giant teddy bears are delivered across Lahore — DHA, Gulberg, Model Town, Johar Town, Bahria Town, Cantt and Wapda Town — in protective packaging so they arrive clean and fluffy. Book a day ahead for giant sizes."
  },
  {
    q: "Can I get a teddy bear with roses for a midnight surprise?",
    a: "Absolutely — teddy bear + red rose bouquet combos are our most ordered midnight surprise in Lahore. Book the midnight slot (11:30 PM–12:15 AM) before 8:00 PM and our rider arrives with the teddy, roses and a handwritten card."
  },
  {
    q: "What payment methods do you accept for teddy bear orders?",
    a: "We accept Cash on Delivery (COD), JazzCash, EasyPaisa, bank transfer and international credit/debit cards — so you can order from anywhere in Pakistan or abroad (UK, USA, UAE)."
  },
  {
    q: "How do I know the teddy bear will look good before delivery?",
    a: "Before our rider leaves, we send you a real photo of your teddy bear (and any combo items) on WhatsApp for approval. Nothing is dispatched until you say it looks perfect."
  }
];

const SIZES = [
  {
    name: "Small Cuddle Bear",
    size: "1.5 – 2 feet",
    price: "Rs. 1,499",
    desc: "A soft, huggable plushie — perfect as an add-on with any bouquet or a sweet small gesture for kids and loved ones.",
    popular: false,
  },
  {
    name: "Medium Hug Bear",
    size: "2.5 – 3 feet",
    price: "Rs. 2,999",
    desc: "The classic gift size. Big enough for a proper hug, ideal for birthdays, anniversaries and Valentine's surprises.",
    popular: true,
  },
  {
    name: "Large Jumbo Bear",
    size: "4 – 5 feet",
    price: "Rs. 5,999",
    desc: "A statement gift that fills the room. Extremely popular for proposals, bridal surprises and big birthday reveals.",
    popular: false,
  },
  {
    name: "6-Feet Giant Bear",
    size: "6 feet",
    price: "Rs. 12,999",
    desc: "Our showstopper — a life-size giant teddy delivered in protective packaging. Book one day ahead; limited daily stock.",
    popular: false,
  },
];

export default function TeddyBearsLahorePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
      { "@type": "ListItem", position: 2, name: "Teddy Bears in Lahore", item: `${SITE_URL}/teddy-bears-lahore` },
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
        <span className="text-[#8B1E2D] font-semibold">Teddy Bears in Lahore</span>
      </nav>

      {/* Hero */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <Gift className="w-3.5 h-3.5 text-[#C6A15B]" />
          Same-Day Delivery • Midnight Surprises
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Teddy Bears in Lahore — Giant Teddy Bear Delivery
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Looking for a <strong>teddy bear in Lahore</strong>? Lahore Bouquet delivers soft, premium-quality teddy bears — from cute 1.5-feet cuddle bears to jaw-dropping <strong>6-feet giant teddy bears</strong> — across DHA, Gulberg, Model Town, Johar Town, Bahria Town, Cantt, Wapda Town and Askari. Pair them with fresh roses, chocolates or a birthday cake, and make it a midnight surprise they'll never forget. Every teddy is quality-checked, fluffed and photographed for your WhatsApp approval before dispatch.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#8B1E2D]" /> Same-day 2–5 hour delivery</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo approval on WhatsApp first</span>
          <span className="flex items-center gap-1.5"><MoonStar className="w-4 h-4 text-[#8B1E2D]" /> Midnight delivery 11:30 PM – 12:15 AM</span>
        </div>
      </section>

      {/* Size & price cards */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Ruler className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Teddy Bear Sizes & Prices in Lahore</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed max-w-3xl">
          Transparent pricing — no hidden charges. Delivery fee depends on your area (free in Gulberg & Model Town, Rs. 250–400 elsewhere — check our <Link href="/delivery-areas" className="text-[#8B1E2D] underline">delivery fee calculator</Link>).
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SIZES.map((s) => (
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

      {/* Combos */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Popular Teddy Bear Combos</h2>
        </div>
        <ul className="space-y-2 text-xs sm:text-sm text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Teddy + Red Roses:</strong> medium teddy with a fresh rose bouquet and handwritten card — the classic anniversary and Valentine's gift.</li>
          <li><strong>Teddy + Chocolates:</strong> plush bear with a premium chocolate box or <Link href="/chocolate-bouquets-lahore" className="text-[#8B1E2D] underline">chocolate bouquet</Link> — a birthday favourite for all ages.</li>
          <li><strong>Giant Teddy + Midnight Delivery:</strong> 6-feet bear arriving at exactly midnight with roses — our most requested surprise in DHA and Gulberg.</li>
          <li><strong>Teddy + Cake:</strong> add a celebration cake for a complete birthday package delivered together.</li>
        </ul>
        <p className="text-xs text-[#2A2A2A] leading-relaxed">
          Combo pricing depends on the bouquet and cake you choose — see real starting prices on our <Link href="/prices" className="text-[#8B1E2D] underline">prices page</Link> or ask on WhatsApp for an instant quote.
        </p>
      </section>

      {/* Occasions */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Occasions for Teddy Bear Gifts</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-2">
            <h3 className="font-playfair font-bold text-[#0B0B0B] text-sm">Birthdays</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">From kids' birthdays to milestone 18ths and 21sts — a teddy with balloons and cake never misses. Midnight delivery available.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-2">
            <h3 className="font-playfair font-bold text-[#0B0B0B] text-sm">Anniversaries & Proposals</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">A giant teddy holding red roses at a proposal or anniversary dinner — delivered to restaurants across MM Alam Road and DHA.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-2">
            <h3 className="font-playfair font-bold text-[#0B0B0B] text-sm">Get Well & New Baby</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Soft, hypoallergenic plushies for hospital visits and newborn celebrations — delivered to homes and hospitals across Lahore.</p>
          </div>
        </div>
      </section>

      {/* Delivery areas */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Teddy Bear Delivery Across Lahore</h2>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          We deliver teddy bears to every corner of Lahore. Standard sizes (small to large) go out the same day in 2–5 hours across <strong>DHA</strong> (all phases), <strong>Gulberg</strong>, <strong>Model Town</strong>, <strong>Johar Town</strong>, <strong>Bahria Town</strong>, <strong>Cantt</strong>, <strong>Wapda Town</strong> and <strong>Askari</strong>. Giant 6-feet bears need a day's notice and travel in protective covering with a dedicated rider so they arrive spotless. Delivery is <strong>free</strong> in Gulberg and Model Town; other areas carry a small transparent fee (Rs. 250–400) shown before you confirm — never added silently at checkout.
        </p>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Ordering from abroad? We deliver teddy bear surprises for overseas Pakistanis every week — pay by international card from the <strong>UK, USA or UAE</strong>, approve the photo on WhatsApp, and we'll handle the Lahore delivery, including midnight slots. Many parents in Dubai and London order giant teddies for their kids' birthdays back home; the look on a child's face when a 6-feet bear walks through the door is worth every rupee.
        </p>
      </section>

      {/* How to order */}
      <section className="p-6 sm:p-8 rounded-2xl bg-[#0B0B0B] border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-white">How to Order in 3 Steps</h2>
        <ol className="space-y-3 text-xs sm:text-sm text-[#E5DED2] leading-relaxed list-decimal list-inside">
          <li><strong className="text-white">WhatsApp us:</strong> message <strong className="text-[#C6A15B]">0310-4225974</strong> with the size you want (or send a reference photo) plus the delivery address in Lahore.</li>
          <li><strong className="text-white">Approve the photo:</strong> we send a real photo of your teddy (and combo items) before dispatch — nothing leaves until you approve.</li>
          <li><strong className="text-white">Pay & receive:</strong> pay by COD, JazzCash, EasyPaisa, bank transfer or international card. Same-day delivery in 2–5 hours; midnight slot on request.</li>
        </ol>
        <a
          href={whatsappLink("Hello Lahore Bouquet! I want to order a teddy bear in Lahore.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors"
        >
          <MessageCircle className="w-4 h-4" /> Order a Teddy Bear on WhatsApp
        </a>
      </section>

      {/* FAQ */}
      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Teddy Bear FAQs</h2>
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
        <p>Related: <Link href="/birthday-decoration-lahore" className="text-[#8B1E2D] underline">birthday decoration in Lahore</Link> • <Link href="/chocolate-bouquets-lahore" className="text-[#8B1E2D] underline">chocolate bouquets</Link> • <Link href="/prices" className="text-[#8B1E2D] underline">price list</Link> • <Link href="/delivery-areas" className="text-[#8B1E2D] underline">delivery areas & fees</Link></p>
      </section>
    </main>
  );
}
