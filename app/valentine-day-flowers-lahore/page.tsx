import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Truck, Camera, MessageCircle, HelpCircle, Sparkles, Clock, MapPin, BadgeCheck } from "lucide-react";
import { SITE_URL, serviceSchema } from "@/lib/business";
import RelatedProducts from "../components/RelatedProducts";

export const metadata: Metadata = {
  title: {
    absolute: "Valentine's Day Flowers in Lahore | Red Roses Delivery",
  },
  description: "Order Valentine's Day flowers in Lahore — premium red rose bouquets, romantic gift boxes and midnight surprise delivery. Fresh roses from Rs. 2,600. Book early for Feb 14!",
  alternates: {
    canonical: `${SITE_URL}/valentine-day-flowers-lahore`,
  },
  openGraph: {
    title: "Valentine's Day Flowers in Lahore | Red Roses Delivery",
    description:
      "Order Valentine's Day flowers in Lahore — premium red rose bouquets, romantic gift boxes and midnight surprise delivery. Fresh roses from Rs. 2,600.",
    url: `${SITE_URL}/valentine-day-flowers-lahore`,
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Valentine's Day Flowers in Lahore | Red Roses Delivery",
      },
    ],
  },
};

const FAQS = [
  {
    q: "How much do Valentine's Day roses cost in Lahore?",
    a: "Valentine's red rose bouquets start from Rs. 2,600 for a dozen roses. Premium long-stem arrangements range from Rs. 4,500 to Rs. 7,499, and luxury 100-rose bouquets go up to Rs. 15,000. Prices rise closer to Feb 14, so book early on WhatsApp at +92 310 4225974 to lock your price.",
  },
  {
    q: "Can I get same-day Valentine's delivery in Lahore?",
    a: "Yes, we deliver Valentine's bouquets the same day across Lahore (2–5 hours) including DHA, Gulberg, Model Town, Johar Town and Bahria Town. For Feb 14 itself, we strongly recommend booking 2–3 days in advance as slots fill up fast.",
  },
  {
    q: "Do you offer midnight Valentine's surprise delivery?",
    a: "Absolutely! Our midnight surprise slot (11:30 PM – 12:15 AM) is the most romantic way to start Valentine's Day. The bouquet arrives right at midnight with a personalised card. Book your midnight slot early — limited slots available on Feb 13 night.",
  },
  {
    q: "What is the best Valentine's gift for her in Lahore?",
    a: "A premium red rose bouquet (24–50 roses) paired with chocolates is the classic winner. For something unforgettable, add a 24K golden rose or a money bouquet. Message us on WhatsApp and we'll help you pick based on your budget.",
  },
  {
    q: "Can I order Valentine's flowers from abroad for Lahore delivery?",
    a: "Yes! We serve overseas Pakistanis in the UK, USA, UAE and beyond. Order online, give us the Lahore delivery address, and we'll handle the rest — including a real photo of your bouquet on WhatsApp before dispatch.",
  },
  {
    q: "When should I order for Valentine's Day?",
    a: "Order by Feb 10 for the best prices and guaranteed slots. Feb 11–13 orders are accepted but premium bouquets may sell out. We do not recommend waiting until Feb 14 morning — book ahead!",
  },
  {
    q: "Do Valentine's bouquets come with a card message?",
    a: "Yes, every Valentine's bouquet includes a FREE personalised card. Write your message at checkout or on WhatsApp, and we'll handwrite it beautifully.",
  },
];

const PACKAGES = [
  {
    name: "Classic Romance",
    price: "Rs. 2,600",
    features: [
      "12 premium red roses",
      "Elegant gift wrapping",
      "FREE personalised card",
      "Same-day delivery in Lahore",
    ],
  },
  {
    name: "Grand Gesture",
    price: "Rs. 7,499",
    features: [
      "50 imported red roses",
      "Luxury box presentation",
      "Chocolates included",
      "FREE personalised card",
      "Midnight delivery available",
    ],
    highlight: true,
  },
  {
    name: "Ultimate Surprise",
    price: "Rs. 15,000",
    features: [
      "100 red roses grand bouquet",
      "24K golden rose keepsake",
      "Premium chocolates + teddy",
      "Midnight surprise delivery",
      "Real photo before dispatch",
    ],
  },
];

export default function ValentineDayFlowersLahorePage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
      { "@type": "ListItem", position: 2, name: "Valentine's Day Flowers in Lahore", item: `${SITE_URL}/valentine-day-flowers-lahore` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  const valentineServiceJsonLd = serviceSchema({
    name: "Valentine's Day Flowers in Lahore",
    url: `${SITE_URL}/valentine-day-flowers-lahore`,
    description: "Valentine's Day flower delivery in Lahore: premium red rose bouquets, romantic gift boxes and midnight surprise delivery. From Rs. 2,600.",
  });

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(valentineServiceJsonLd) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Valentine&apos;s Day Flowers in Lahore</span>
      </nav>

      {/* Hero */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/10 text-[#8B1E2D] border border-[#8B1E2D]/25 text-xs font-bold uppercase tracking-wider">
          <Heart className="w-3.5 h-3.5" />
          Feb 14 — Book Early
        </span>
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Valentine&apos;s Day Flowers in Lahore
        </h1>
        <p className="text-sm sm:text-base leading-relaxed max-w-3xl">
          Make this Valentine&apos;s Day unforgettable with <strong>premium red rose bouquets in Lahore</strong>.
          From a classic dozen roses to grand 100-rose arrangements, every bouquet is hand-tied fresh
          and delivered the <strong>same day</strong> across DHA, Gulberg, Model Town, Johar Town and
          Bahria Town. Prices start from <strong>Rs. 2,600</strong> — book by Feb 10 for the best
          prices and guaranteed midnight slots.
        </p>
      </section>

      {/* Packages */}
      <section className="space-y-6">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Valentine&apos;s Bouquets & Prices</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={`p-6 rounded-2xl border shadow-sm space-y-4 ${
                pkg.highlight
                  ? "bg-[#0B0B0B] border-[#C6A15B] text-white"
                  : "bg-white border-[rgba(198,161,91,0.25)]"
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className={`font-playfair font-bold text-lg ${pkg.highlight ? "text-[#C6A15B]" : "text-[#0B0B0B]"}`}>
                  {pkg.name}
                </h3>
                {pkg.highlight && (
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-[#C6A15B] text-[#0B0B0B] px-2 py-0.5 rounded-full">
                    Most Loved
                  </span>
                )}
              </div>
              <p className={`text-2xl font-bold ${pkg.highlight ? "text-white" : "text-[#8B1E2D]"}`}>{pkg.price}</p>
              <ul className="space-y-2 text-xs leading-relaxed">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2">
                    <BadgeCheck className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.highlight ? "text-[#C6A15B]" : "text-[#8B1E2D]"}`} />
                    <span className={pkg.highlight ? "text-[#BDBDBD]" : ""}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20want%20to%20order%20Valentine%27s%20Day%20flowers."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8B1E2D] text-white text-xs font-semibold hover:bg-[#a32438] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Order on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Why + how */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-[#8B1E2D]">
            <Sparkles className="w-5 h-5" />
            <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">Why Order Early?</h2>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed">
            Rose prices rise every year as Feb 14 approaches, and premium bouquets sell out.
            Ordering by <strong>Feb 10</strong> locks your price, guarantees your preferred bouquet,
            and secures a midnight delivery slot. Last-minute orders on Feb 13–14 are accepted
            but with limited designs.
          </p>
        </div>
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-[#8B1E2D]">
            <Clock className="w-5 h-5" />
            <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">How Ordering Works</h2>
          </div>
          <ol className="text-xs sm:text-sm leading-relaxed space-y-2 list-decimal list-inside">
            <li>Pick your bouquet or message us your budget on WhatsApp.</li>
            <li>We confirm availability and your delivery slot.</li>
            <li>Get a real photo of your bouquet before dispatch.</li>
            <li>Surprise delivered — same-day or at midnight!</li>
          </ol>
        </div>
      </section>

      {/* Areas */}
      <section className="p-6 sm:p-8 rounded-2xl bg-[#0B0B0B] border border-[rgba(198,161,91,0.25)] space-y-3">
        <div className="flex items-center gap-2">
          <Truck className="w-5 h-5 text-[#C6A15B]" />
          <h2 className="font-playfair text-xl font-bold text-white">Valentine&apos;s Delivery Areas</h2>
        </div>
        <p className="text-xs text-[#C6A15B] leading-loose">
          DHA (Phases 1–9) · Gulberg · Model Town · Johar Town · Bahria Town · Cantt · Valencia Town ·
          Wapda Town · Faisal Town · Garden Town · Lake City · Askari 11
        </p>
        <p className="text-xs text-[#BDBDBD] leading-relaxed flex items-start gap-2">
          <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-[#C6A15B]" />
          Same-day and midnight delivery across all of Lahore — FREE on Valentine&apos;s orders.
        </p>
      </section>

      {/* Related links */}
      <section className="flex flex-wrap gap-3 text-xs">
        <Link href="/roses" className="px-4 py-2 rounded-full bg-white border border-[rgba(198,161,91,0.35)] hover:border-[#C6A15B] transition-colors font-semibold text-[#0B0B0B]">
          Red Roses Collection →
        </Link>
        <Link href="/gifts-and-cakes" className="px-4 py-2 rounded-full bg-white border border-[rgba(198,161,91,0.35)] hover:border-[#C6A15B] transition-colors font-semibold text-[#0B0B0B]">
          Gifts & Chocolates →
        </Link>
        <Link href="/bestsellers" className="px-4 py-2 rounded-full bg-white border border-[rgba(198,161,91,0.35)] hover:border-[#C6A15B] transition-colors font-semibold text-[#0B0B0B]">
          Bestsellers →
        </Link>
      </section>

      <RelatedProducts title="Romantic Bestsellers" categoryMatch="Roses" count={4} />

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

      {/* Final CTA */}
      <section className="text-center space-y-4 p-8 rounded-2xl bg-[#8B1E2D]/5 border border-[#8B1E2D]/20">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Don&apos;t Wait Until Feb 14!</h2>
        <p className="text-sm text-[#555555] max-w-xl mx-auto">
          Book your Valentine&apos;s bouquet today — lock your price and secure your midnight slot.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20want%20Valentine%27s%20Day%20flowers%20in%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Us Now
          </a>
          <Link
            href="/roses"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0B0B0B] text-white text-sm font-semibold hover:bg-[#8B1E2D] transition-colors"
          >
            <Camera className="w-4 h-4" />
            Browse Red Roses
          </Link>
        </div>
      </section>
    </main>
  );
}
