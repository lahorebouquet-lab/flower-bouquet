import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Gem, Sparkles, MoonStar, MessageCircle, Truck, Camera, Heart, Flower2 } from "lucide-react";
import { SITE_URL, whatsappLink } from "@/lib/business";
import RelatedProducts from "../components/RelatedProducts";

export const metadata: Metadata = {
  title: {
    absolute: "Fresh Flower Jewellery in Lahore | Mehndi Sets",
  },
  description: "Order fresh flower jewellery in Lahore — bridal chokers, gajra sets & mehndi floral jewellery from Rs. 2,499. Real flowers, same-day delivery.",
  alternates: {
    canonical: `${SITE_URL}/flower-jewellery-lahore`,
  },
  openGraph: {
    title: "Fresh Flower Jewellery in Lahore | Mehndi & Bridal Sets",
    description: "Real-flower bridal chokers, gajra sets & mehndi jewellery — handcrafted fresh, delivered same-day across Lahore.",
    url: `${SITE_URL}/flower-jewellery-lahore`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Fresh flower bridal jewellery — flower jewellery in Lahore",
      },
    ],
  }
};

const FAQS = [
  {
    q: "What is the price of fresh flower jewellery in Lahore?",
    a: "At Lahore Bouquet, complete gajra sets start at Rs. 2,499, and a floral bridal choker necklace with rose and baby's breath is Rs. 4,499. Full custom bridal sets (choker, earrings, matha patti, gajray) are quoted on WhatsApp (0310-4225974) based on your flowers and design."
  },
  {
    q: "Is fresh flower jewellery better than artificial for mehndi?",
    a: "Real flower jewellery smells divine and photographs beautifully — motia and roses glow in wedding photos in a way artificial flowers can't match. We make everything fresh the same morning, so it stays vibrant through the whole function."
  },
  {
    q: "Can you match the jewellery to my mehndi outfit?",
    a: "Yes — send a photo of your outfit on WhatsApp and our florists match the flowers to your colours: red roses for traditional red, pastels for modern looks, or all-white motia for nikkah elegance. Custom colour matching is free."
  },
  {
    q: "Do you deliver flower jewellery on the wedding day itself?",
    a: "Yes. We deliver fresh flower jewellery the same day across DHA, Gulberg, Model Town, Johar Town, Bahria Town, Cantt and Wapda Town. For morning functions, book the night before and choose an early slot so everything arrives cool and fresh."
  },
  {
    q: "How should I store fresh flower jewellery before the event?",
    a: "Keep it in the cool box or packaging we deliver it in, away from direct sunlight. A light mist of water keeps motia fragrant. Don't refrigerate — the cold air dries the petals. Worn the same day, it stays perfect for 8–12 hours."
  }
];

const OPTIONS = [
  {
    name: "Complete Gajra Set",
    size: "Double gajray + cuffs",
    price: "Rs. 2,499",
    desc: "Matching bridal gajra set — double gajray with wrist cuffs in red roses, baby's breath and peach blossoms.",
    popular: true,
  },
  {
    name: "Floral Bridal Choker",
    size: "Rose & baby's breath",
    price: "Rs. 4,499",
    desc: "Statement bridal choker necklace handcrafted with fresh roses and baby's breath — the centrepiece of a mehndi look.",
    popular: false,
  },
  {
    name: "Mehndi Floral Set",
    size: "Custom design",
    price: "Custom quote",
    desc: "Full mehndi set — choker, earrings, matha patti and gajray matched to your outfit. Instant quote on WhatsApp.",
    popular: false,
  },
  {
    name: "Nikkah White Set",
    size: "All-white motia",
    price: "Custom quote",
    desc: "Elegant all-white motia jewellery for nikkah — minimal, fragrant and timeless. Designed to order.",
    popular: false,
  },
];

export default function FlowerJewelleryLahorePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
      { "@type": "ListItem", position: 2, name: "Fresh Flower Jewellery in Lahore", item: `${SITE_URL}/flower-jewellery-lahore` },
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
        <span className="text-[#8B1E2D] font-semibold">Fresh Flower Jewellery in Lahore</span>
      </nav>

      {/* Hero */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <Gem className="w-3.5 h-3.5 text-[#C6A15B]" />
          Real Flowers • Handcrafted Fresh • Same-Day Delivery
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Fresh Flower Jewellery in Lahore — Mehndi & Bridal Sets
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Looking for <strong>fresh flower jewellery in Lahore</strong>? Lahore Bouquet handcrafts real-flower <strong>bridal chokers, gajra sets and mehndi jewellery</strong> — fragrant motia, red roses and baby's breath, made fresh on your event morning. From a Rs. 2,499 gajra set to a Rs. 4,499 bridal choker, delivered across DHA, Gulberg, Model Town, Johar Town, Bahria Town, Cantt and Wapda Town. Send your outfit photo on WhatsApp and we'll match the flowers to it — free.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#8B1E2D]" /> Same-day 2–5 hour delivery</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo approval on WhatsApp first</span>
          <span className="flex items-center gap-1.5"><Flower2 className="w-4 h-4 text-[#8B1E2D]" /> 100% real fresh flowers</span>
        </div>
      </section>

      {/* Options & price cards */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Flower Jewellery Styles & Prices in Lahore</h2>
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

      {/* What's included */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">What's in a Bridal Flower Jewellery Set</h2>
        </div>
        <ul className="space-y-2 text-xs sm:text-sm text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Floral choker:</strong> handcrafted necklace with roses and baby's breath — the statement piece.</li>
          <li><strong>Earrings & matha patti:</strong> matching floral earrings and forehead band.</li>
          <li><strong>Gajray:</strong> double wrist gajray in motia or red rose — see our <Link href="/gajray-lahore" className="text-[#8B1E2D] underline">fresh gajray</Link> range.</li>
          <li><strong>Hair florals:</strong> pins and bands for braids and buns.</li>
        </ul>
        <p className="text-xs text-[#2A2A2A] leading-relaxed">
          Every set is made to order — no two are identical. Browse real pieces in our <Link href="/collections/fresh-flower-gajray" className="text-[#8B1E2D] underline">gajray & jewellery collection</Link> or message us for a custom design.
        </p>
      </section>

      {/* Occasions */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Occasions for Flower Jewellery</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-2">
            <h3 className="font-playfair font-bold text-[#0B0B0B] text-sm">Mehndi</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">The classic occasion — colourful gajra sets and chokers that pop against yellow, green and orange outfits.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-2">
            <h3 className="font-playfair font-bold text-[#0B0B0B] text-sm">Nikkah</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">All-white motia sets — minimal, fragrant and elegant for daytime nikkah ceremonies.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-2">
            <h3 className="font-playfair font-bold text-[#0B0B0B] text-sm">Dholki & Mayon</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Fun, colourful sets for bridesmaids and family — comfortable enough to dance in all evening.</p>
          </div>
        </div>
      </section>

      {/* Delivery areas */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Flower Jewellery Delivery Across Lahore</h2>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Fresh flower jewellery is made the same morning and delivered within 2–5 hours across <strong>DHA</strong> (all phases), <strong>Gulberg</strong>, <strong>Model Town</strong>, <strong>Johar Town</strong>, <strong>Bahria Town</strong>, <strong>Cantt</strong>, <strong>Wapda Town</strong> and <strong>Askari</strong>. For morning functions, order the night before and pick an early slot. Delivery is <strong>free</strong> across all listed areas.
        </p>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Ordering from abroad? Brides' families in the <strong>UK, USA and UAE</strong> order jewellery sets for Lahore weddings every week — pay by international card, approve the photo on WhatsApp, and we'll handle the delivery.
        </p>
      </section>

      {/* How to order */}
      <section className="p-6 sm:p-8 rounded-2xl bg-[#0B0B0B] border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-white">How to Order in 3 Steps</h2>
        <ol className="space-y-3 text-xs sm:text-sm text-[#E5DED2] leading-relaxed list-decimal list-inside">
          <li><strong className="text-white">WhatsApp us:</strong> message <strong className="text-[#C6A15B]">0310-4225974</strong> with your outfit photo (for colour matching) plus the delivery address in Lahore.</li>
          <li><strong className="text-white">Approve the photo:</strong> we send a real photo of your jewellery set before dispatch — nothing leaves until you approve.</li>
          <li><strong className="text-white">Pay & receive:</strong> pay by COD, JazzCash, EasyPaisa, bank transfer or international card. Same-day delivery in 2–5 hours.</li>
        </ol>
        <a
          href={whatsappLink("Hello Lahore Bouquet! I want to order fresh flower jewellery in Lahore.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors"
        >
          <MessageCircle className="w-4 h-4" /> Order Flower Jewellery on WhatsApp
        </a>
      </section>

      {/* FAQ */}
      <section className="my-10">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B] text-center mb-6">Related Guides</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link href="/gajray-lahore" className="block p-4 rounded-xl bg-white border border-[#E5DED2] hover:border-[#8B1E2D] transition-colors">
            <span className="text-sm font-semibold text-[#0B0B0B]">Fresh Gajray in Lahore</span>
            <span className="text-[#8B1E2D] ml-2">→</span>
          </Link>
          <Link href="/wedding-decor" className="block p-4 rounded-xl bg-white border border-[#E5DED2] hover:border-[#8B1E2D] transition-colors">
            <span className="text-sm font-semibold text-[#0B0B0B]">Wedding Decoration in Lahore</span>
            <span className="text-[#8B1E2D] ml-2">→</span>
          </Link>
        </div>
      </section>

      <RelatedProducts title="Jewellery & Gajray Picks" categoryMatch="Fresh Flower Gajray" count={4} />

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Flower Jewellery FAQs</h2>
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
        <p>Related: <Link href="/gajray-lahore" className="text-[#8B1E2D] underline">fresh gajray</Link> • <Link href="/collections/fresh-flower-gajray" className="text-[#8B1E2D] underline">gajray collection</Link> • <Link href="/prices" className="text-[#8B1E2D] underline">price list</Link> • <Link href="/delivery-areas" className="text-[#8B1E2D] underline">delivery areas & fees</Link></p>
      </section>
    </main>
  );
}
