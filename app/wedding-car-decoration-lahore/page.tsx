import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Car, Sparkles, MoonStar, MessageCircle, Truck, Camera, Heart, Flower2 } from "lucide-react";
import { SITE_URL, whatsappLink } from "@/lib/business";
import RelatedProducts from "../components/RelatedProducts";

export const metadata: Metadata = {
  title: {
    absolute: "Wedding Car Decoration in Lahore | Fresh Flowers",
  },
  description: "Wedding car decoration in Lahore from Rs. 1,500 — fresh rose bonnets, ribbons & floral styling for barat cars. On-site setup. Book on WhatsApp.",
  alternates: {
    canonical: `${SITE_URL}/wedding-car-decoration-lahore`,
  },
  openGraph: {
    title: "Wedding Car Decoration in Lahore | Fresh Flower Styling",
    description: "Fresh flower wedding car decoration — bonnets, ribbons & handles. On-site setup across Lahore from Rs. 1,500.",
    url: `${SITE_URL}/wedding-car-decoration-lahore`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Wedding car decorated with fresh flowers — wedding car decoration in Lahore",
      },
    ],
  }
};

const FAQS = [
  {
    q: "What is the price of wedding car decoration in Lahore?",
    a: "At Lahore Bouquet, simple ribbon and floral bow styling starts at Rs. 1,500. Full fresh-flower bonnet cascades with door-handle corsages cost more depending on flower selection. Message us on WhatsApp (0310-4225974) with your car model for an exact quote."
  },
  {
    q: "Do you decorate the car at our home or the venue?",
    a: "Both. Our team comes to your home, farmhouse or hotel anywhere in DHA, Gulberg, Model Town, Johar Town, Bahria Town, Cantt or Wapda Town — usually 2–3 hours before the barat — and finishes the full styling on-site."
  },
  {
    q: "Will the flowers stay fresh during the whole barat?",
    a: "Yes. We use fresh roses and hardy blooms fixed with floral foam and water tubes where needed, so arrangements stay fresh for 6–8 hours — easily covering the full barat, photoshoot and venue arrival."
  },
  {
    q: "Can you decorate a specific car model (e.g., luxury cars)?",
    a: "Absolutely — we've styled everything from Corollas to luxury sedans and SUVs. Tell us the make and colour on WhatsApp and we'll design the florals to complement it. Premium packages are available for luxury vehicles."
  },
  {
    q: "How far in advance should I book car decoration?",
    a: "2–3 days ahead is ideal so we can reserve fresh flowers in your colours. During peak wedding season (December–February), book a week early. Same-day requests are sometimes possible — just ask on WhatsApp."
  }
];

const OPTIONS = [
  {
    name: "Classic Ribbon Styling",
    size: "Ribbons + floral bows",
    price: "From Rs. 1,500",
    desc: "Elegant satin ribbons with fresh floral bows on the bonnet, mirrors and handles — simple and classy.",
    popular: true,
  },
  {
    name: "Fresh Rose Bonnet",
    size: "Full bonnet cascade",
    price: "Custom quote",
    desc: "A lush cascade of fresh red roses across the bonnet with matching door-handle corsages and rear-window bouquet.",
    popular: false,
  },
  {
    name: "Luxury Car Package",
    size: "Premium vehicles",
    price: "Custom quote",
    desc: "Designer styling for luxury sedans and SUVs — imported blooms, premium ribbons and photo-shoot-ready finishing.",
    popular: false,
  },
  {
    name: "Barat Complete",
    size: "Car + groom florals",
    price: "Custom quote",
    desc: "Car decoration plus groom's boutonnière and family car accents — one booking for the whole barat look.",
    popular: false,
  },
];

export default function WeddingCarDecorationLahorePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
      { "@type": "ListItem", position: 2, name: "Wedding Car Decoration in Lahore", item: `${SITE_URL}/wedding-car-decoration-lahore` },
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
        <span className="text-[#8B1E2D] font-semibold">Wedding Car Decoration in Lahore</span>
      </nav>

      {/* Hero */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <Car className="w-3.5 h-3.5 text-[#C6A15B]" />
          On-Site Setup • Fresh Roses • All Car Models
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Wedding Car Decoration in Lahore — Fresh Flower Styling
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Make your barat arrival unforgettable with <strong>wedding car decoration in Lahore</strong>. Lahore Bouquet styles cars with <strong>fresh roses, satin ribbons and floral cascades</strong> — from simple Rs. 1,500 ribbon styling to full fresh-flower bonnets for luxury vehicles. Our team comes to your home or venue in <strong>DHA, Gulberg, Model Town, Johar Town, Bahria Town, Cantt or Wapda Town</strong> and finishes everything on-site, hours before the barat. Send your car model on WhatsApp for an instant quote.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#8B1E2D]" /> On-site team across Lahore</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo-shoot ready finish</span>
          <span className="flex items-center gap-1.5"><Flower2 className="w-4 h-4 text-[#8B1E2D]" /> Fresh roses, 6–8 hr freshness</span>
        </div>
      </section>

      {/* Options & price cards */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Car Decoration Packages & Prices in Lahore</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed max-w-3xl">
          Transparent pricing — no hidden charges. Final quotes depend on car model and flower selection — see real starting prices on our <Link href="/prices" className="text-[#8B1E2D] underline">prices page</Link>.
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
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">What Our Car Decoration Includes</h2>
        </div>
        <ul className="space-y-2 text-xs sm:text-sm text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Bonnet arrangement:</strong> fresh rose cascade or ribbon-and-bow styling as the centrepiece.</li>
          <li><strong>Door handles & mirrors:</strong> matching mini corsages on all four handles and side mirrors.</li>
          <li><strong>Rear window:</strong> floral bouquet or ribbon heart for photos from behind.</li>
          <li><strong>Number plate accents:</strong> tasteful floral framing (where permitted).</li>
        </ul>
        <p className="text-xs text-[#2A2A2A] leading-relaxed">
          Decorating the venue too? See our <Link href="/bridal-room-decoration-lahore" className="text-[#8B1E2D] underline">bridal room decoration</Link> and <Link href="/wedding-decor" className="text-[#8B1E2D] underline">wedding decoration</Link> for complete packages.
        </p>
      </section>

      {/* Occasions */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">More Than Just Barat Cars</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-2">
            <h3 className="font-playfair font-bold text-[#0B0B0B] text-sm">Walima & Receptions</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Elegant white-and-gold styling for walima arrivals — sophisticated and photo-ready.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-2">
            <h3 className="font-playfair font-bold text-[#0B0B0B] text-sm">Nikkah</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Minimal fresh-flower touches for intimate nikkah ceremonies.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-2">
            <h3 className="font-playfair font-bold text-[#0B0B0B] text-sm">Rukhsati</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">A beautifully decorated car for the emotional rukhsati farewell — handled with care.</p>
          </div>
        </div>
      </section>

      {/* Service areas */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">On-Site Car Decoration Across Lahore</h2>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Our team serves <strong>DHA</strong> (all phases), <strong>Gulberg</strong>, <strong>Model Town</strong>, <strong>Johar Town</strong>, <strong>Bahria Town</strong>, <strong>Cantt</strong>, <strong>Wapda Town</strong> and <strong>Askari</strong> — homes, farmhouses and hotels. We bring all flowers, ribbons, stands and tools; the car never needs to move.
        </p>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Planning from abroad? Families in the <strong>UK, USA and UAE</strong> book barat car decoration for Lahore weddings regularly — pay by international card, approve the design on WhatsApp, and our team handles the on-site setup.
        </p>
      </section>

      {/* How to order */}
      <section className="p-6 sm:p-8 rounded-2xl bg-[#0B0B0B] border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-white">How to Book in 3 Steps</h2>
        <ol className="space-y-3 text-xs sm:text-sm text-[#E5DED2] leading-relaxed list-decimal list-inside">
          <li><strong className="text-white">WhatsApp us:</strong> message <strong className="text-[#C6A15B]">0310-4225974</strong> with your car make, model and colour, plus the date and location.</li>
          <li><strong className="text-white">Confirm the quote:</strong> we send a transparent package quote — no hidden charges, ever.</li>
          <li><strong className="text-white">We decorate:</strong> our team arrives 2–3 hours before the barat and finishes on-site. Pay by COD, JazzCash, EasyPaisa, bank transfer or international card.</li>
        </ol>
        <a
          href={whatsappLink("Hello Lahore Bouquet! I want to book wedding car decoration in Lahore.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors"
        >
          <MessageCircle className="w-4 h-4" /> Book Car Decoration on WhatsApp
        </a>
      </section>

      {/* FAQ */}
      <section className="my-10">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B] text-center mb-6">Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href="/bridal-room-decoration-lahore" className="block p-4 rounded-xl bg-white border border-[#E5DED2] hover:border-[#8B1E2D] transition-colors">
            <span className="text-sm font-semibold text-[#0B0B0B]">Bridal Room Decoration in Lahore</span>
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
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Wedding Car Decoration FAQs</h2>
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
        <p>Related: <Link href="/wedding-decor" className="text-[#8B1E2D] underline">wedding decoration</Link> • <Link href="/bridal-room-decoration-lahore" className="text-[#8B1E2D] underline">bridal room décor</Link> • <Link href="/prices" className="text-[#8B1E2D] underline">price list</Link> • <Link href="/delivery-areas" className="text-[#8B1E2D] underline">service areas</Link></p>
      </section>
    </main>
  );
}
