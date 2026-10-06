import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BedDouble, Flower2, Flame, Lightbulb, MessageCircle, Truck, Camera, Sparkles, CalendarCheck } from "lucide-react";
import { SITE_URL, whatsappLink } from "@/lib/business";
import RelatedProducts from "../components/RelatedProducts";

export const metadata: Metadata = {
  title: {
    absolute: "Wedding Room Decoration in Lahore | Lahore Bouquet",
  },
  description: "Bridal & wedding room decoration in Lahore from Rs. 14,999 — rose petals, candles, fairy lights, bed styling. Packages up to Rs. 39,999. Book 3–5 days",
  alternates: {
    canonical: `${SITE_URL}/wedding-room-decoration-lahore`,
  },
  openGraph: {
    title: "Wedding Room Decoration in Lahore | Bridal Room Decor",
    description: "Rose petals, candles, fairy lights & bed styling from Rs. 14,999. Wedding-season slots (Nov–Feb) book out early.",
    url: `${SITE_URL}/wedding-room-decoration-lahore`,
    images: [
      {
        url: `${SITE_URL}/images/page-wedding-room-decoration.webp`,
        width: 1200,
        height: 800,
        alt: "Romantic bridal room decorated with red rose petals, candles and fairy lights in Lahore",
      },
    ],
  }
};

const FAQS = [
  {
    q: "How much does wedding room decoration cost in Lahore?",
    a: "Our packages start at Rs. 14,999 (Essential), Rs. 24,999 (Royal) and Rs. 39,999 (Luxury). The price depends on room size, flower quantity and add-ons like fairy lights or a flower wall. Share your room photos on WhatsApp (0310-4225974) for an exact quote."
  },
  {
    q: "How far in advance should I book bridal room decoration?",
    a: "Book 3–5 days ahead for regular dates. During wedding season (November–February), slots fill 2–3 weeks out — early booking is strongly recommended, especially for Friday–Sunday dates."
  },
  {
    q: "What's included in a bridal room decoration package?",
    a: "Every package includes fresh rose-petal bed styling, scented candles, and a romantic setup by our decoration team. Royal adds fairy lights and balloon accents; Luxury adds a flower wall backdrop, premium imported roses and a full room transformation."
  },
  {
    q: "Do you decorate on the wedding day itself while we're at the venue?",
    a: "Yes — that's the most common arrangement. We decorate while the baraat/rukhsati is underway and finish before the couple returns. You share the address and entry details; our team handles everything discreetly."
  },
  {
    q: "Which areas of Lahore do you cover for room decoration?",
    a: "We decorate bridal rooms across DHA, Gulberg, Model Town, Johar Town, Bahria Town, Cantt, Wapda Town and Askari — homes, farmhouses and hotel suites. A small travel fee may apply for Bahria Town and outer areas."
  }
];

const PACKAGES = [
  {
    name: "Essential",
    price: "Rs. 14,999",
    desc: "A beautiful, romantic setup for the wedding night.",
    includes: ["Fresh rose-petal bed styling & trails", "Scented candles (set of 8)", "Balloon accents", "Handwritten welcome card", "2-hour setup by our team"],
    popular: false,
  },
  {
    name: "Royal",
    price: "Rs. 24,999",
    desc: "Our most booked package — full romantic transformation.",
    includes: ["Everything in Essential", "Fairy light canopy & drapes", "Premium red & pink rose styling", "LED candles + flower bowls", "Bathroom & vanity touch-ups", "3-hour setup, photo before handover"],
    popular: true,
  },
  {
    name: "Luxury",
    price: "Rs. 39,999",
    desc: "A magazine-worthy bridal suite experience.",
    includes: ["Everything in Royal", "Fresh flower wall / backdrop", "Imported roses & orchids", "Champagne-style mocktail tray setup", "Full room + lounge styling", "Dedicated decorator + on-call touch-up"],
    popular: false,
  },
];

export default function WeddingRoomDecorationPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
      { "@type": "ListItem", position: 2, name: "Wedding Room Decoration in Lahore", item: `${SITE_URL}/wedding-room-decoration-lahore` },
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

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Wedding Room Decoration in Lahore",
    provider: { "@type": "LocalBusiness", name: "Lahore Bouquet", url: `${SITE_URL}` },
    areaServed: { "@type": "City", name: "Lahore" },
    description: "Bridal and wedding room decoration in Lahore: rose petals, candles, fairy lights and bed styling. Packages from Rs. 14,999.",
  };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/wedding-decor" className="hover:text-[#0B0B0B] transition-colors">Wedding Decor</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Wedding Room Decoration</span>
      </nav>

      {/* Hero */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <BedDouble className="w-3.5 h-3.5 text-[#C6A15B]" />
          Bridal Room Specialists • Wedding Season Nov–Feb
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Wedding Room Decoration in Lahore — Bridal Room Decor
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          The wedding night deserves a room as special as the day. Lahore Bouquet's <strong>wedding room decoration in Lahore</strong> transforms bedrooms into romantic bridal suites — fresh rose petals trailing across the bed, glowing scented candles, fairy-light canopies and elegant styling by our decoration team. We decorate homes, farmhouses and hotel suites across DHA, Gulberg, Model Town, Johar Town, Bahria Town, Cantt and beyond, usually while the baraat is underway so the couple returns to a perfect surprise.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#8B1E2D]" /> We come to your home / hotel</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo before handover</span>
          <span className="flex items-center gap-1.5"><CalendarCheck className="w-4 h-4 text-[#8B1E2D]" /> Book 3–5 days ahead</span>
        </div>

        <div className="rounded-2xl overflow-hidden border border-[rgba(198,161,91,0.35)] shadow-sm">
          <img
            src="/images/page-wedding-room-decoration.webp"
            alt="Bridal bedroom decorated with red rose petals in a heart shape, candles and fairy lights — wedding room decoration in Lahore"
            className="w-full h-auto object-cover"
            loading="eager"
            fetchPriority="high"
          />
        </div>
      </section>

      {/* Packages */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Bridal Room Packages & Prices</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PACKAGES.map((p) => (
            <div key={p.name} className={`p-6 rounded-2xl border shadow-sm space-y-3 relative ${p.popular ? "bg-[#0B0B0B] border-[#C6A15B]" : "bg-white border-[rgba(198,161,91,0.25)]"}`}>
              {p.popular && (
                <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[#C6A15B] text-[#0B0B0B] text-[11px] font-bold uppercase tracking-wider">Most Booked</span>
              )}
              <h3 className={`font-playfair text-lg font-bold ${p.popular ? "text-white" : "text-[#0B0B0B]"}`}>{p.name}</h3>
              <p className={`font-playfair text-2xl font-bold ${p.popular ? "text-[#C6A15B]" : "text-[#8B1E2D]"}`}>{p.price}</p>
              <p className={`text-xs ${p.popular ? "text-[#E5DED2]" : "text-[#2A2A2A]"}`}>{p.desc}</p>
              <ul className={`text-xs space-y-2 list-disc list-inside leading-relaxed ${p.popular ? "text-[#E5DED2]" : "text-[#2A2A2A]"}`}>
                {p.includes.map((inc) => <li key={inc}>{inc}</li>)}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-xs text-[#2A2A2A] leading-relaxed">
          Need something custom — a theme colour, a flower wall with names, or decoration for the whole house? Share room photos on WhatsApp for a tailored quote. Also see our full <Link href="/wedding-decor" className="text-[#8B1E2D] underline">wedding décor services</Link> (car, stage, venue).
        </p>
      </section>

      {/* What's included detail */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">What Our Decorators Bring</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="flex gap-3">
            <Flower2 className="w-5 h-5 text-[#8B1E2D] shrink-0 mt-0.5" />
            <p className="leading-relaxed"><strong>Fresh rose petals & blooms:</strong> hand-scattered petal trails, bed centrepieces and bowl arrangements — prepared the same day, never stale.</p>
          </div>
          <div className="flex gap-3">
            <Flame className="w-5 h-5 text-[#8B1E2D] shrink-0 mt-0.5" />
            <p className="leading-relaxed"><strong>Scented & LED candles:</strong> warm, safe glow around the room — real wax candles where safe, LED where needed.</p>
          </div>
          <div className="flex gap-3">
            <Lightbulb className="w-5 h-5 text-[#8B1E2D] shrink-0 mt-0.5" />
            <p className="leading-relaxed"><strong>Fairy lights & drapes:</strong> canopy lighting over the bed and soft draping for that dreamy bridal-suite feel.</p>
          </div>
          <div className="flex gap-3">
            <BedDouble className="w-5 h-5 text-[#8B1E2D] shrink-0 mt-0.5" />
            <p className="leading-relaxed"><strong>Bed & linen styling:</strong> towel art, cushion arrangement and coordinated colour themes (red-gold classic or blush-pastel modern).</p>
          </div>
        </div>
      </section>

      {/* Wedding season note */}
      <section className="p-6 rounded-2xl bg-[#0B0B0B] border border-[rgba(198,161,91,0.25)] space-y-3">
        <h2 className="font-playfair text-xl font-bold text-white">Wedding Season (Nov–Feb) Books Out Early</h2>
        <p className="text-xs sm:text-sm text-[#E5DED2] leading-relaxed">
          December and January weekends are our busiest — decoration teams are often fully booked 2–3 weeks ahead. If your shaadi is in wedding season, reserve your date as soon as the venue is final. A small advance confirms your slot; the balance is paid on the day.
        </p>
        <p className="text-xs sm:text-sm text-[#E5DED2] leading-relaxed">
          We decorate bridal rooms in homes across <strong className="text-white">DHA, Gulberg, Model Town, Johar Town and Cantt</strong>, farmhouses on Bedian Road and Raiwind Road, and hotel suites throughout Lahore. Out-of-city venues (within 50 km) can be arranged with a travel supplement — ask on WhatsApp.
        </p>
      </section>

      {/* Popular themes */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Popular Bridal Room Themes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-2">
            <h3 className="font-playfair font-bold text-[#0B0B0B] text-sm">Classic Red & Gold</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Deep red rose petals, golden drapes and warm candlelight — the timeless Pakistani bridal look that photographs beautifully and suits traditional décor.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-playfair font-bold text-[#0B0B0B] text-sm">Blush Pastel Romance</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Soft pink and white roses, blush drapes and fairy lights — a modern, dreamy aesthetic popular with younger couples and boutique hotel suites.</p>
          </div>
          <div className="space-y-2">
            <h3 className="font-playfair font-bold text-[#0B0B0B] text-sm">Royal Maroon & Ivory</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Rich maroon petals with ivory accents, brass candle holders and elegant symmetry — for farmhouse suites and grand wedding nights.</p>
          </div>
        </div>
        <p className="text-xs text-[#2A2A2A] leading-relaxed">
          Have a Pinterest board or a reference photo? Send it on WhatsApp and our decorators will match the theme. We can also coordinate the room with your <Link href="/wedding-decor" className="text-[#8B1E2D] underline">wedding car decoration</Link> or stage flowers for one seamless look across the whole celebration.
        </p>
      </section>

      {/* How to book */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">How Booking Works (3 Steps)</h2>
        <ol className="space-y-3 text-xs sm:text-sm text-[#2A2A2A] leading-relaxed list-decimal list-inside">
          <li><strong>Share details on WhatsApp:</strong> message <strong>0310-4225974</strong> with your date, address and a few room photos. We suggest a package and confirm the price.</li>
          <li><strong>Reserve your date:</strong> a small advance locks your slot. Our team arrives 3–4 hours before the couple's expected return (usually during the rukhsati).</li>
          <li><strong>Walk into the surprise:</strong> we send you completion photos before handover and leave the room spotless — you just enjoy the moment.</li>
        </ol>
        <a
          href={whatsappLink("Hello Lahore Bouquet! I want to book wedding room decoration in Lahore.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors"
        >
          <MessageCircle className="w-4 h-4" /> Book Bridal Room Decor on WhatsApp
        </a>
      </section>

      {/* FAQ */}
      
      <section className="my-10">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B] text-center mb-6">Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href="/blog/nikkah-flowers-guide-lahore" className="block p-4 rounded-xl bg-white border border-[#E5DED2] hover:border-[#8B1E2D] transition-colors">
            <span className="text-sm font-semibold text-[#0B0B0B]">Nikkah Flowers Guide</span>
            <span className="text-[#8B1E2D] ml-2">→</span>
          </Link>
          <Link href="/blog/wedding-car-decoration-price-lahore" className="block p-4 rounded-xl bg-white border border-[#E5DED2] hover:border-[#8B1E2D] transition-colors">
            <span className="text-sm font-semibold text-[#0B0B0B]">Wedding Car Decoration Prices</span>
            <span className="text-[#8B1E2D] ml-2">→</span>
          </Link>
        </div>
      </section>

      <RelatedProducts title="Wedding Collection" categoryMatch="Wedding" count={4} />

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Wedding Room Decoration FAQs</h2>
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
        <p>Related: <Link href="/wedding-decor" className="text-[#8B1E2D] underline">wedding décor in Lahore</Link> • <Link href="/birthday-decoration-lahore" className="text-[#8B1E2D] underline">birthday decoration</Link> • <Link href="/prices" className="text-[#8B1E2D] underline">price list</Link> • <Link href="/delivery-areas" className="text-[#8B1E2D] underline">delivery areas</Link></p>
      </section>
    </main>
  );
}
