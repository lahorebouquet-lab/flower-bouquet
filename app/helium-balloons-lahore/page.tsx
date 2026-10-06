import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PartyPopper, CircleDot, Rainbow, MessageCircle, Truck, Camera, Sparkles, BadgeCheck } from "lucide-react";
import { SITE_URL, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Helium Balloons in Lahore | Birthday Balloon Decoration | Lahore Bouquet",
  },
  description: "Helium balloons in Lahore from Rs. 199/balloon — latex, metallic & confetti balloons, garlands, arches & full birthday decoration. Same-day delivery across DHA, Gulberg, Bahria Town.",
  alternates: {
    canonical: `${SITE_URL}/helium-balloons-lahore`,
  },
  openGraph: {
    title: "Helium Balloons in Lahore | Birthday Balloon Decoration",
    description: "Latex, metallic & confetti helium balloons from Rs. 199. Garlands, arches & birthday setups with same-day Lahore delivery.",
    url: `${SITE_URL}/helium-balloons-lahore`,
  }
};

const FAQS = [
  {
    q: "How much do helium balloons cost in Lahore?",
    a: "Single helium latex balloons start at Rs. 199, metallic/foil number and letter balloons from Rs. 349, and confetti balloons from Rs. 299. Ready bunches of 10 start at Rs. 1,799. Full birthday decoration packages start at Rs. 9,999 — message us on WhatsApp (0310-4225974) for an exact quote."
  },
  {
    q: "How long do helium balloons stay inflated?",
    a: "Standard latex helium balloons float for 8–12 hours; metallic/foil balloons float for 2–3 days. For an evening party, we deliver and inflate 2–3 hours before the event so everything looks perfect when guests arrive."
  },
  {
    q: "Do you do full birthday balloon decoration at home?",
    a: "Yes. Our team sets up balloon garlands, arches, backdrops and themed birthday decoration at homes, farmhouses and venues across Lahore. Packages start at Rs. 9,999 — book 2–3 days ahead."
  },
  {
    q: "Can I get balloons delivered the same day in Lahore?",
    a: "Yes. Balloon bunches and loose helium balloons are delivered same-day (2–5 hours) across DHA, Gulberg, Model Town, Johar Town, Bahria Town, Cantt, Wapda Town and Askari for orders placed before 4:00 PM."
  },
  {
    q: "What payment methods do you accept?",
    a: "Cash on Delivery (COD), JazzCash, EasyPaisa, bank transfer and international credit/debit cards — order easily from Pakistan or abroad (UK, USA, UAE)."
  }
];

const PRODUCTS = [
  {
    name: "Single Helium Balloons",
    price: "from Rs. 199",
    desc: "Latex balloons in 20+ colours, inflated with helium and tied with ribbon — ready to float for 8–12 hours.",
    popular: false,
  },
  {
    name: "Metallic Number & Letter Balloons",
    price: "from Rs. 349",
    desc: "Giant foil numbers (18, 21, 30…) and letter balloons for names — the centrepiece of every birthday photo wall.",
    popular: true,
  },
  {
    name: "Confetti & Chrome Balloons",
    price: "from Rs. 299",
    desc: "Clear balloons filled with colourful confetti, plus premium chrome-finish balloons in gold, rose-gold and silver.",
    popular: false,
  },
  {
    name: "Balloon Bunch (10 pcs)",
    price: "Rs. 1,799",
    desc: "A ready-to-gift bunch of 10 mixed helium balloons with weights and ribbons — delivered inflated and floating.",
    popular: false,
  },
];

export default function HeliumBalloonsLahorePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
      { "@type": "ListItem", position: 2, name: "Helium Balloons in Lahore", item: `${SITE_URL}/helium-balloons-lahore` },
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
        <Link href="/birthday-decoration-lahore" className="hover:text-[#0B0B0B] transition-colors">Birthday Decoration</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Helium Balloons</span>
      </nav>

      {/* Hero */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <PartyPopper className="w-3.5 h-3.5 text-[#C6A15B]" />
          Same-Day Delivery • 20+ Colours
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Helium Balloons in Lahore — Birthday Balloon Decoration
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Searching for a <strong>balloon shop near you in Lahore</strong>? Lahore Bouquet delivers fresh-inflated <strong>helium balloons</strong> — latex, metallic numbers & letters, confetti and chrome balloons — to your doorstep across DHA, Gulberg, Model Town, Johar Town, Bahria Town, Cantt, Wapda Town and Askari. We inflate just before dispatch so your balloons arrive floating high, and our decoration team also creates full birthday setups: garlands, arches, backdrops and themed décor at homes and venues.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#8B1E2D]" /> Same-day 2–5 hour delivery</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo approval on WhatsApp first</span>
          <span className="flex items-center gap-1.5"><BadgeCheck className="w-4 h-4 text-[#8B1E2D]" /> Inflated fresh before dispatch</span>
        </div>
      </section>

      {/* Products */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <CircleDot className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Helium Balloon Prices in Lahore</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PRODUCTS.map((p) => (
            <div key={p.name} className={`p-6 rounded-2xl border shadow-sm space-y-3 relative ${p.popular ? "bg-[#0B0B0B] border-[#C6A15B]" : "bg-white border-[rgba(198,161,91,0.25)]"}`}>
              {p.popular && (
                <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[#C6A15B] text-[#0B0B0B] text-[11px] font-bold uppercase tracking-wider">Most Ordered</span>
              )}
              <div className="flex items-start justify-between gap-2">
                <h3 className={`font-playfair text-lg font-bold ${p.popular ? "text-white" : "text-[#0B0B0B]"}`}>{p.name}</h3>
                <p className={`font-playfair text-lg font-bold whitespace-nowrap ${p.popular ? "text-[#C6A15B]" : "text-[#8B1E2D]"}`}>{p.price}</p>
              </div>
              <p className={`text-xs leading-relaxed ${p.popular ? "text-[#E5DED2]" : "text-[#2A2A2A]"}`}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Decoration services */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <Rainbow className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Full Birthday Decoration Services</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Beyond loose balloons, our team decorates complete birthday setups at your home, farmhouse or venue — balloon garlands framing the cake table, entrance arches, photo backdrops with number balloons, and themed colour schemes (pastel, gold-black luxe, cartoon themes for kids). Packages start at <strong>Rs. 9,999</strong>; share your venue photos on WhatsApp for a custom design and quote. See our <Link href="/birthday-decoration-lahore" className="text-[#8B1E2D] underline">birthday decoration page</Link> for full packages.
        </p>
        <ul className="space-y-2 text-xs sm:text-sm text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Balloon garlands:</strong> organic-style garlands in your theme colours — from Rs. 4,999.</li>
          <li><strong>Entrance arches:</strong> grand welcome arches for homes and halls — from Rs. 7,999.</li>
          <li><strong>Photo backdrops:</strong> sequin or balloon-wall backdrops with name/number foil — from Rs. 8,999.</li>
          <li><strong>Car boot surprises:</strong> balloon-filled car boot setups for birthday reveals — from Rs. 5,999.</li>
        </ul>
      </section>

      {/* Combos */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Perfect Pairings</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-2">
            <h3 className="font-playfair font-bold text-[#0B0B0B] text-sm">Balloons + Flowers</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Helium bunch with a fresh rose bouquet — the complete birthday gift in one delivery.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-2">
            <h3 className="font-playfair font-bold text-[#0B0B0B] text-sm">Balloons + Cake</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Number balloons with a celebration cake — delivered together, ready for the candle moment.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-2">
            <h3 className="font-playfair font-bold text-[#0B0B0B] text-sm">Balloons + Teddy</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">A floating bunch tied to a <Link href="/teddy-bears-lahore" className="text-[#8B1E2D] underline">teddy bear</Link> — a kids' birthday favourite.</p>
          </div>
        </div>
      </section>

      {/* Colours & quality */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Colours, Themes & Quality Promise</h2>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Choose from 20+ latex colours — pastels for baby showers, bold primaries for kids' birthdays, elegant gold-black or rose-gold for milestone celebrations, and classic red for anniversaries. Our metallic number balloons come in every age from 1 to 99, plus full A–Z letter sets for names and messages like "HAPPY BIRTHDAY" or "BRIDE TO BE".
        </p>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          <strong>Quality matters with helium:</strong> we use thick, premium-grade latex and genuine foil balloons (not the thin party-store kind that pop in transit), professional-grade helium, and double-knotted ribbons with weights. Every bunch is photographed before the rider leaves, and if a balloon arrives deflated, we replace it free on the next delivery run. For outdoor events in Lahore's summer heat, ask about our hi-float treated balloons that last significantly longer.
        </p>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          <strong>Good to know:</strong> latex balloons are biodegradable, and we dispose of popped balloons responsibly after setups. For venues with helium restrictions (some marquees and hospitals limit loose balloons), we offer air-filled balloon garlands and backdrops that look just as festive without floating — mention it when you order and we'll design accordingly.
        </p>
      </section>

      {/* How to order */}
      <section className="p-6 sm:p-8 rounded-2xl bg-[#0B0B0B] border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-white">How to Order in 3 Steps</h2>
        <ol className="space-y-3 text-xs sm:text-sm text-[#E5DED2] leading-relaxed list-decimal list-inside">
          <li><strong className="text-white">WhatsApp your theme:</strong> message <strong className="text-[#C6A15B]">0310-4225974</strong> with colours, numbers/letters and quantity — or just say "birthday balloons for a 5-year-old".</li>
          <li><strong className="text-white">Approve & pay:</strong> we confirm the design and price; pay by COD, JazzCash, EasyPaisa, bank transfer or international card.</li>
          <li><strong className="text-white">Fresh inflation & delivery:</strong> balloons are inflated just before the rider leaves and arrive floating — same-day in 2–5 hours.</li>
        </ol>
        <p className="text-xs sm:text-sm text-[#E5DED2] leading-relaxed">
          Ordering a birthday surprise from the <strong className="text-white">UK, USA or UAE</strong>? We deliver balloon setups for overseas Pakistanis every week — pay by international card, approve the design photo on WhatsApp, and we'll have everything floating and ready at the Lahore address on the big day.
        </p>
        <a
          href={whatsappLink("Hello Lahore Bouquet! I want to order helium balloons in Lahore.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors"
        >
          <MessageCircle className="w-4 h-4" /> Order Balloons on WhatsApp
        </a>
      </section>

      {/* FAQ */}
      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Helium Balloon FAQs</h2>
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
        <p>Related: <Link href="/birthday-decoration-lahore" className="text-[#8B1E2D] underline">birthday decoration in Lahore</Link> • <Link href="/teddy-bears-lahore" className="text-[#8B1E2D] underline">teddy bears</Link> • <Link href="/prices" className="text-[#8B1E2D] underline">price list</Link> • <Link href="/delivery-areas" className="text-[#8B1E2D] underline">delivery areas & fees</Link></p>
      </section>
    </main>
  );
}
