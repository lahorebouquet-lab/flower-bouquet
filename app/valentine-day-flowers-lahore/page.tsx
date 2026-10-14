import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Truck, Camera, MessageCircle, HelpCircle, Sparkles, Clock, MapPin, BadgeCheck, ShoppingBag } from "lucide-react";
import { SITE_URL, whatsappLink, serviceSchema } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Valentine's Day Flowers in Lahore | Order Red Rose Bouquets",
  },
  description: "Order Valentine's Day flowers in Lahore — gift boxes, balloon flower boxes, heart cakes and romantic bedroom decor. Valentine's gifts from Rs. 6,500 with 2–5h express and midnight delivery. WhatsApp 0310-4225974.",
  alternates: {
    canonical: `${SITE_URL}/valentine-day-flowers-lahore`,
  },
  openGraph: {
    title: "Valentine's Day Flowers in Lahore | Order Red Rose Bouquets",
    description:
      "Valentine's gift boxes, balloon flower boxes, heart cakes and romantic decor — from Rs. 6,500 with express and midnight delivery in Lahore.",
    url: `${SITE_URL}/valentine-day-flowers-lahore`,
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Valentine's Day Flowers in Lahore | Order Red Rose Bouquets",
      },
    ],
  },
};

/**
 * Real Valentine's products from the Sanity catalog.
 * Prices verified from live product pages on 2026-10-11.
 */
const PRODUCTS = [
  {
    name: "Be My Valentine Box",
    slug: "be-my-valentine-box",
    price: 11499,
    desc: "A romantic Valentine's gift box filled with fresh blooms — the classic Feb 14 surprise.",
  },
  {
    name: "Deluxe Valentine's Box",
    slug: "deluxe-valentine-s-box",
    price: 24999,
    desc: "Our deluxe Valentine's presentation — the grandest way to say it with flowers.",
  },
  {
    name: "Valentine Heart Cake",
    slug: "valentine-heart-cake",
    price: 6500,
    desc: "A heart-shaped Valentine's cake that pairs perfectly with any bouquet.",
  },
  {
    name: "Romantic Balloon Flower Box – Red & Black",
    slug: "romantic-balloon-flower-box-red-and-black-valentine-gift",
    price: 13999,
    desc: "Bold red-and-black balloon flower box — a dramatic Valentine's statement gift.",
  },
  {
    name: "Valentine Balloon Flower Box – Red Roses",
    slug: "valentine-balloon-flower-box-red-roses-gift-for-her",
    price: 13999,
    desc: "Red roses with romantic balloons in a luxury box — made for her on Feb 14.",
  },
  {
    name: "Romantic Valentine's Day Bedroom Decor",
    slug: "romantic-valentine-s-day-bedroom-decor",
    price: 24999,
    desc: "A full romantic bedroom surprise setup — roses, candles and decor for Valentine's night.",
  },
];

const FAQS = [
  {
    q: "How much do Valentine's Day flowers cost in Lahore?",
    a: "Our Valentine's gifts range from Rs. 6,500 for the Valentine Heart Cake to Rs. 13,999 for balloon flower boxes and Rs. 24,999 for the Deluxe Valentine's Box or the full Romantic Bedroom Decor setup. Message us on WhatsApp at 0310-4225974 for exact quotes on any custom bouquet.",
  },
  {
    q: "Can I get same-day Valentine's delivery in Lahore?",
    a: "Yes, we deliver Valentine's gifts the same day across Lahore in 2–5 hours — including DHA, Gulberg, Model Town, Johar Town and Bahria Town. For Feb 14 itself, book 2–3 days in advance as slots fill up fast.",
  },
  {
    q: "Do you offer midnight Valentine's surprise delivery?",
    a: "Absolutely! Our midnight surprise slot (11:30 PM – 12:15 AM) is the most romantic way to start Valentine's Day. The gift arrives right at midnight with a personalised card. Book your midnight slot early — limited slots are available on Feb 13 night.",
  },
  {
    q: "What is the best Valentine's gift for her in Lahore?",
    a: "A red rose balloon flower box (Rs. 13,999) or the Be My Valentine Box (Rs. 11,499) are our most-ordered Feb 14 picks. For a grand gesture, the Deluxe Valentine's Box at Rs. 24,999 never misses. Message us on WhatsApp and we'll help you pick based on your budget.",
  },
  {
    q: "Can I order Valentine's flowers from abroad for Lahore delivery?",
    a: "Yes! We serve overseas Pakistanis in the UK, USA, UAE and beyond. Order online, give us the Lahore delivery address, and we'll handle the rest — including a real photo of your bouquet on WhatsApp before dispatch.",
  },
  {
    q: "When should I order for Valentine's Day?",
    a: "Order by Feb 10 for the best prices and guaranteed slots. Feb 11–13 orders are accepted but premium gifts may sell out. We do not recommend waiting until Feb 14 morning — book ahead!",
  },
  {
    q: "Do Valentine's gifts come with a card message?",
    a: "Yes, every Valentine's gift includes a FREE personalised card. Write your message at checkout or on WhatsApp, and we'll handwrite it beautifully.",
  },
];

function formatPrice(n: number): string {
  return `Rs. ${n.toLocaleString("en-PK")}`;
}

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
    description: "Valentine's Day flower delivery in Lahore: gift boxes, balloon flower boxes, heart cakes and romantic bedroom decor. Gifts from Rs. 6,500 with express and midnight delivery.",
  });

  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: PRODUCTS.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        url: `${SITE_URL}/products/${p.slug}`,
        description: p.desc || `${p.name} — fresh flowers with free same-day delivery across Lahore. Order online at Lahore Bouquet.`,
        brand: { "@type": "Brand", name: "Lahore Bouquet" },
        image: `${SITE_URL}/og-image.jpg`,
        offers: {
          "@type": "Offer",
          priceCurrency: "PKR",
          price: p.price,
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}/products/${p.slug}`,
          shippingDetails: {
            "@type": "OfferShippingDetails",
            shippingRate: { "@type": "MonetaryAmount", value: 0, currency: "PKR" },
            shippingDestination: { "@type": "DefinedRegion", addressCountry: "PK", addressRegion: "Lahore" },
          },
          hasMerchantReturnPolicy: {
            "@type": "MerchantReturnPolicy",
            applicableCountry: "PK",
            returnPolicyCategory: "https://schema.org/MerchantReturnNotPermitted",
          },
        },
      },
    })),
  };

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(valentineServiceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }} />

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
          Make this Valentine&apos;s Day unforgettable with <strong>Valentine&apos;s gifts delivered in Lahore</strong> —
          romantic gift boxes, balloon flower boxes, a heart-shaped cake and even a full romantic bedroom
          surprise setup. Every order is prepared fresh and delivered the <strong>same day in 2–5 hours</strong>
          across DHA, Gulberg, Model Town, Johar Town and Bahria Town — or right at <strong>midnight</strong>
          for the ultimate surprise. Gifts start from <strong>Rs. 6,500</strong>, and every order includes a
          FREE personalised card and a real photo of your gift on WhatsApp before dispatch. Book by Feb 10
          for the best prices and guaranteed midnight slots.
        </p>
      </section>

      {/* Product grid — real Sanity products, real prices */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Valentine&apos;s Gifts You Can Order Now</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((p) => (
            <article
              key={p.slug}
              className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4 flex flex-col"
            >
              <div className="space-y-2 flex-1">
                <h3 className="font-playfair font-bold text-lg text-[#0B0B0B]">{p.name}</h3>
                <p className="text-xs text-[#555555] leading-relaxed">{p.desc}</p>
              </div>
              <p className="text-2xl font-bold text-[#8B1E2D]">{formatPrice(p.price)}</p>
              <ul className="space-y-2 text-xs leading-relaxed text-[#555555]">
                <li className="flex items-start gap-2">
                  <BadgeCheck className="w-4 h-4 shrink-0 mt-0.5 text-[#8B1E2D]" />
                  <span>Same-day 2–5h express delivery</span>
                </li>
                <li className="flex items-start gap-2">
                  <BadgeCheck className="w-4 h-4 shrink-0 mt-0.5 text-[#8B1E2D]" />
                  <span>Midnight surprise slot available</span>
                </li>
              </ul>
              <div className="flex flex-wrap gap-2">
                <Link
                  href={`/products/${p.slug}`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0B0B0B] text-white text-xs font-semibold hover:bg-[#8B1E2D] transition-colors"
                >
                  View & Order
                </Link>
                <a
                  href={whatsappLink(`Hello Lahore Bouquet! I want to order "${p.name}" (${formatPrice(p.price)}) for Valentine's Day delivery in Lahore.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#8B1E2D] text-white text-xs font-semibold hover:bg-[#a32438] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  Order on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Why + how */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-[#8B1E2D]">
            <Sparkles className="w-5 h-5" />
            <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">Why Order Early for Feb 14?</h2>
          </div>
          <p className="text-xs sm:text-sm leading-relaxed">
            Valentine&apos;s Day is the busiest flower day of the year in Lahore. Premium gifts sell out and
            delivery slots — especially the midnight slot — fill up 3–5 days before Feb 14. Ordering by
            <strong> Feb 10</strong> guarantees your preferred gift, locks the current price and secures your
            midnight delivery window. Last-minute orders on Feb 13–14 are accepted but with limited options.
          </p>
        </div>
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-[#8B1E2D]">
            <Clock className="w-5 h-5" />
            <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">How Ordering Works</h2>
          </div>
          <ol className="text-xs sm:text-sm leading-relaxed space-y-2 list-decimal list-inside">
            <li>Pick a gift above or message us your budget on WhatsApp at 0310-4225974.</li>
            <li>We confirm availability and your delivery slot — daytime or midnight.</li>
            <li>Get a real photo of YOUR gift on WhatsApp before dispatch.</li>
            <li>Surprise delivered — same-day or right at midnight!</li>
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
          Same-day and midnight delivery across all of Lahore — FREE delivery on Valentine&apos;s orders.
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
          Book your Valentine&apos;s gift today — lock your price and secure your midnight slot.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={whatsappLink("Hello Lahore Bouquet! I want Valentine's Day flowers delivered in Lahore.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp 0310-4225974
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
