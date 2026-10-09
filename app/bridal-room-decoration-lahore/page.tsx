import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { BedDouble, Sparkles, MoonStar, MessageCircle, Truck, Camera, Heart, Flower2 } from "lucide-react";
import { SITE_URL, whatsappLink } from "@/lib/business";
import RelatedProducts from "../components/RelatedProducts";

export const metadata: Metadata = {
  title: {
    absolute: "Bridal Room Decoration in Lahore | Same-Day Setup",
  },
  description: "Bridal room decoration in Lahore from Rs. 7,999 — rose petal beds, canopies, fairy lights & candles. On-site setup across Lahore. Book on WhatsApp.",
  alternates: {
    canonical: `${SITE_URL}/bridal-room-decoration-lahore`,
  },
  openGraph: {
    title: "Bridal Room Decoration in Lahore | Romantic Setup",
    description: "Rose-petal bridal rooms, canopies & fairy lights — on-site decoration across Lahore from Rs. 7,999.",
    url: `${SITE_URL}/bridal-room-decoration-lahore`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Bridal room decoration with rose petals — bridal room decoration in Lahore",
      },
    ],
  }
};

const FAQS = [
  {
    q: "What is the price of bridal room decoration in Lahore?",
    a: "At Lahore Bouquet, wedding décor setups start at Rs. 7,999. A classic bridal room package — rose-petal bed styling, fairy lights and scented candles — is quoted on WhatsApp (0310-4225974) based on your room size and flower choices. Grand canopy installations cost more."
  },
  {
    q: "Do you decorate the room on the wedding day itself?",
    a: "Yes. Our team arrives 3–4 hours before you need the room and completes the full setup — bed styling, petal carpets, drapes, lights and candles. We serve DHA, Gulberg, Model Town, Johar Town, Bahria Town, Cantt and Wapda Town, at homes and hotels."
  },
  {
    q: "What's included in a bridal room decoration package?",
    a: "A standard package includes fresh red rose petal bed styling, petal carpet or trail, fairy-light draping, scented candles, and balloon or floral accents. Canopy beds, photo backdrops and welcome signage can be added — everything is customised to your theme."
  },
  {
    q: "Can I get bridal room decoration at a hotel in Lahore?",
    a: "Absolutely — we decorate bridal suites at hotels across Lahore regularly. Share your hotel name, room number and check-in time on WhatsApp; we coordinate with the hotel staff and finish the setup before you arrive."
  },
  {
    q: "How far in advance should I book bridal room decoration?",
    a: "Book 2–3 days ahead for standard packages so we can reserve fresh flowers. For wedding-season weekends (December–February), a week's notice is safer. Last-minute requests are often possible — just message us and we'll confirm availability."
  }
];

const OPTIONS = [
  {
    name: "Classic Bridal Room",
    size: "Rose petals + lights",
    price: "From Rs. 7,999",
    desc: "Rose-petal bed styling, petal trail, fairy lights and scented candles — the timeless bridal room look.",
    popular: true,
  },
  {
    name: "Canopy Bed Setup",
    size: "Draped canopy + florals",
    price: "Custom quote",
    desc: "Romantic draped canopy over the bed with hanging florals and warm lighting — a dreamy, photo-perfect centrepiece.",
    popular: false,
  },
  {
    name: "Full Room Transformation",
    size: "Walls, floor & ceiling",
    price: "Custom quote",
    desc: "Complete makeover — floral wall backdrops, balloon ceiling, petal carpets and ambient lighting throughout the room.",
    popular: false,
  },
  {
    name: "Hotel Suite Package",
    size: "On-site at hotels",
    price: "Custom quote",
    desc: "We come to your hotel bridal suite and set everything up before check-in — coordinated with hotel staff.",
    popular: false,
  },
];

export default function BridalRoomDecorationLahorePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
      { "@type": "ListItem", position: 2, name: "Bridal Room Decoration in Lahore", item: `${SITE_URL}/bridal-room-decoration-lahore` },
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
        <span className="text-[#8B1E2D] font-semibold">Bridal Room Decoration in Lahore</span>
      </nav>

      {/* Hero */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <BedDouble className="w-3.5 h-3.5 text-[#C6A15B]" />
          On-Site Setup • Fresh Flowers • Same Week Booking
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Bridal Room Decoration in Lahore — Romantic Setup
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Make the wedding night unforgettable with <strong>bridal room decoration in Lahore</strong>. Lahore Bouquet's team creates rose-petal beds, draped canopies, fairy-light ceilings and candle-lit ambience — at your home or hotel suite, anywhere in <strong>DHA, Gulberg, Model Town, Johar Town, Bahria Town, Cantt or Wapda Town</strong>. Décor setups start at <strong>Rs. 7,999</strong>. We arrive hours before, set up everything, and leave the room photo-ready. Share your theme on WhatsApp for an instant custom quote.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#8B1E2D]" /> On-site team across Lahore</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo-ready finishing</span>
          <span className="flex items-center gap-1.5"><Flower2 className="w-4 h-4 text-[#8B1E2D]" /> Fresh roses & florals</span>
        </div>
      </section>

      {/* Options & price cards */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Bridal Room Packages & Prices in Lahore</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed max-w-3xl">
          Transparent pricing — no hidden charges. Final quotes depend on room size and flower selection — see real starting prices on our <Link href="/prices" className="text-[#8B1E2D] underline">prices page</Link>.
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

      {/* What's included */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">What Our Bridal Room Setup Includes</h2>
        </div>
        <ul className="space-y-2 text-xs sm:text-sm text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Rose-petal bed:</strong> fresh red rose petals arranged in hearts, trails or full coverage.</li>
          <li><strong>Fairy lights & candles:</strong> warm draped lighting plus scented pillar candles for ambience.</li>
          <li><strong>Petal carpets & trails:</strong> from the door to the bed — a grand entrance.</li>
          <li><strong>Balloon & floral accents:</strong> ceiling balloons, wall florals and photo-backdrop corners.</li>
        </ul>
        <p className="text-xs text-[#2A2A2A] leading-relaxed">
          Planning the full wedding? See our <Link href="/wedding-decor" className="text-[#8B1E2D] underline">wedding decoration</Link> range and <Link href="/wedding-car-decoration-lahore" className="text-[#8B1E2D] underline">wedding car decoration</Link> for a complete package.
        </p>
      </section>

      {/* Occasions */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">More Than Just Bridal Rooms</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-2">
            <h3 className="font-playfair font-bold text-[#0B0B0B] text-sm">Anniversary Surprises</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Surprise your spouse with a decorated room on your anniversary — we set up while you're out at dinner.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-2">
            <h3 className="font-playfair font-bold text-[#0B0B0B] text-sm">Birthday Room Décor</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Midnight birthday room setups with balloons, LED numbers and flower petals.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-2">
            <h3 className="font-playfair font-bold text-[#0B0B0B] text-sm">Proposal Setups</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Marry-me signage, petal hearts and candles — a proposal scene she'll say yes to.</p>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">On-Site Decoration Across Lahore</h2>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Our decoration team serves <strong>DHA</strong> (all phases), <strong>Gulberg</strong>, <strong>Model Town</strong>, <strong>Johar Town</strong>, <strong>Bahria Town</strong>, <strong>Cantt</strong>, <strong>Wapda Town</strong> and <strong>Askari</strong> — homes, farmhouses and hotels. We bring everything: flowers, drapes, lights, candles and stands. You just open the door.
        </p>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Organising from abroad? Families in the <strong>UK, USA and UAE</strong> book bridal room decoration for Lahore weddings regularly — pay by international card, approve the design on WhatsApp, and our team handles the on-site setup.
        </p>
      </section>

      {/* How to order */}
      <section className="p-6 sm:p-8 rounded-2xl bg-[#0B0B0B] border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-white">How to Book in 3 Steps</h2>
        <ol className="space-y-3 text-xs sm:text-sm text-[#E5DED2] leading-relaxed list-decimal list-inside">
          <li><strong className="text-white">WhatsApp us:</strong> message <strong className="text-[#C6A15B]">0310-4225974</strong> with your date, venue (home/hotel + area) and theme or reference photos.</li>
          <li><strong className="text-white">Confirm the quote:</strong> we send a transparent package quote — no hidden charges, ever.</li>
          <li><strong className="text-white">We set up:</strong> our team arrives 3–4 hours early and finishes before your moment. Pay by COD, JazzCash, EasyPaisa, bank transfer or international card.</li>
        </ol>
        <a
          href={whatsappLink("Hello Lahore Bouquet! I want to book bridal room decoration in Lahore.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors"
        >
          <MessageCircle className="w-4 h-4" /> Book Bridal Room Décor on WhatsApp
        </a>
      </section>

      {/* FAQ */}
      <section className="my-10">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B] text-center mb-6">Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href="/wedding-car-decoration-lahore" className="block p-4 rounded-xl bg-white border border-[#E5DED2] hover:border-[#8B1E2D] transition-colors">
            <span className="text-sm font-semibold text-[#0B0B0B]">Wedding Car Decoration in Lahore</span>
            <span className="text-[#8B1E2D] ml-2">→</span>
          </Link>
          <Link href="/wedding-decor" className="block p-4 rounded-xl bg-white border border-[#E5DED2] hover:border-[#8B1E2D] transition-colors">
            <span className="text-sm font-semibold text-[#0B0B0B]">Wedding Decoration in Lahore</span>
            <span className="text-[#8B1E2D] ml-2">→</span>
          </Link>
        </div>
      </section>

      <RelatedProducts title="Wedding Décor Picks" categoryMatch="Wedding Décor" count={4} />

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Bridal Room Decoration FAQs</h2>
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
        <p>Related: <Link href="/wedding-decor" className="text-[#8B1E2D] underline">wedding decoration</Link> • <Link href="/wedding-car-decoration-lahore" className="text-[#8B1E2D] underline">car decoration</Link> • <Link href="/prices" className="text-[#8B1E2D] underline">price list</Link> • <Link href="/delivery-areas" className="text-[#8B1E2D] underline">service areas</Link></p>
      </section>
    </main>
  );
}
