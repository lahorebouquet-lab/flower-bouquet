export const revalidate = 86400;
import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, Truck, Clock, Camera, MapPin, HelpCircle, ClipboardCheck, Wallet, Heart, Gift, Sun, Flower2 } from "lucide-react";
import { SITE_URL, BUSINESS, whatsappLink, itemListSchema } from "@/lib/business";
import { getSanityProducts, getSanityReviews } from "@/sanity/lib/fetch";
import ReviewsSection from "../components/ReviewsSection";
import type { Product } from "@/app/data/products";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo("/best-bouquet-in-lahore", {
  title: {
    absolute: "Best Bouquet in Lahore: How to Choose the Right One | Lahore Bouquet",
  },
  description: "A practical guide to choosing the best bouquet in Lahore — what fresh really means, picks by occasion and budget (Rs. 1,239–7,499), and the photo check to ask any florist before you pay.",
  alternates: {
    canonical: `${SITE_URL}/best-bouquet-in-lahore`,
  },
  openGraph: {
    title: "Best Bouquet in Lahore: How to Choose the Right One",
    description: "What makes a bouquet the best choice in Lahore — freshness, occasion fit and honest price bands from Rs. 1,239, with a photo of your actual bouquet before dispatch.",
    url: `${SITE_URL}/best-bouquet-in-lahore`,
    siteName: "Lahore Bouquet",
    type: "website",
    locale: "en_PK",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Best Bouquet in Lahore: How to Choose the Right One | Lahore Bouquet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Bouquet in Lahore: How to Choose the Right One",
    description: "A buyer's guide to bouquets in Lahore — picks by occasion and budget, plus the freshness checks that actually matter.",
    images: [`${SITE_URL}/og-image.jpg`],
  },
});

/**
 * Direct Sanity CDN URL with Sanity-side transforms for this page's featured
 * picks. Deliberately bypasses next/image (/_next/image) so the guide's
 * product photos never depend on the Vercel image-optimization quota.
 * Non-Sanity sources (e.g. the local fallback image) are returned unchanged.
 */
function directCdnUrl(src: string, w = 800, h = 600): string {
  if (!src.includes("cdn.sanity.io")) return src;
  const base = src.split("?")[0];
  return `${base}?w=${w}&h=${h}&fit=crop&auto=format`;
}

/** Real products featured in this guide — pulled live from Sanity by slug. */
const FEATURED: { slug: string; occasion: string; note: string }[] = [
  {
    slug: "heartfelt-single-rose-birthday-bouquet",
    occasion: "First gifts & small birthdays",
    note: "A single rose, simply presented — the easiest first gift, and proof that a small budget can still look thoughtful.",
  },
  {
    slug: "sunflower-bouquet",
    occasion: "Thank-yous & get-well wishes",
    note: "Bright and hard to get wrong. Sunflowers say cheerful better than any card — for birthdays, thank-yous and hospital-room pick-me-ups.",
  },
  {
    slug: "affordable-rose-bouquet",
    occasion: "Anniversaries & romance",
    note: "A medium rose bouquet inside the Rs. 2,600–3,800 band where most anniversary orders land — classic, romantic, sensibly priced.",
  },
  {
    slug: "chocolate-rose-bouquet",
    occasion: "When flowers alone are not enough",
    note: "Roses and chocolate in one gift. A safe upgrade for birthdays and romantic surprises when you want a little extra.",
  },
  {
    slug: "crochet-sunflower",
    occasion: "Keepsakes that never wilt",
    note: "Handmade crochet that keeps its colour for years — the farewell, graduation or long-distance gift they can actually keep.",
  },
  {
    slug: "heartfelt-moments-bouquet",
    occasion: "Grand gestures",
    note: "Our Rs. 7,499 statement arrangement — for proposals, milestone anniversaries and moments that call for the biggest gesture in the range.",
  },
];

const BUDGET_BANDS = [
  {
    band: "Rs. 1,239 – Rs. 1,900",
    title: "Small hand-tied bouquets",
    desc: "Single roses and small hand-tied arrangements. Right for first gifts, apologies, thank-yous and everyday surprises where the gesture matters more than the size.",
  },
  {
    band: "From Rs. 1,699",
    title: "Sunflower bouquets",
    desc: "The cheerful end of the range. Sunflowers photograph beautifully, suit almost every occasion and are a reliable birthday and get-well choice.",
  },
  {
    band: "Rs. 2,600 – Rs. 3,800",
    title: "Medium rose bouquets",
    desc: "The anniversary and romance sweet spot. A full, well-wrapped rose bouquet that looks generous without going over the top.",
  },
  {
    band: "Rs. 7,499",
    title: "Large signature arrangements",
    desc: "Statement pieces for proposals, milestone celebrations and grand romantic gestures — the top of the everyday range.",
  },
];

const FAQS = [
  {
    q: "What is the best bouquet for a first gift?",
    a: "Keep it simple and cheerful. A sunflower bouquet (from Rs. 1,699) or a small hand-tied bouquet (Rs. 1,239–1,900) is friendly without sending the wrong signal. A single rose — like our Heartfelt Single Rose Birthday Bouquet at Rs. 1,239 — is a classic low-pressure choice. Save the big red-rose arrangements for when you know the relationship is ready for them.",
  },
  {
    q: "How big should an anniversary bouquet be?",
    a: "Most anniversary orders in Lahore fall in the medium rose band, Rs. 2,600–3,800 — full enough to feel special, wrapped elegantly and with a handwritten card. For milestone years (first, tenth, twenty-fifth) or a proposal, step up to a large signature arrangement at Rs. 7,499. If you are unsure, send us your budget on WhatsApp and we will show you real photos of what it buys.",
  },
  {
    q: "Fresh flowers or a crochet bouquet — which is the better gift?",
    a: "They do different jobs. Fresh flowers are for the moment: the scent, the surprise, the photo today. A crochet bouquet (from Rs. 999) never wilts, so it suits farewells, graduations, long-distance gifts and anyone who keeps mementos. Many customers send fresh for the day and crochet for keeps.",
  },
  {
    q: "How can I be sure the bouquet looks good before it is delivered?",
    a: "Ask the florist to send a photo of your actual bouquet before dispatch — not a catalogue picture. At Lahore Bouquet this is standard on every order: your bouquet is hand-tied to order, photographed, sent to you on WhatsApp for approval, and only then delivered.",
  },
  {
    q: "How do I make a bouquet last longer at home?",
    a: "Trim the stems at an angle under running water, use a clean vase with fresh water, and keep the bouquet away from direct sunlight and ripening fruit. Change the water every two days and remove any leaf that falls below the waterline. Most fresh bouquets then stay presentable for the better part of a week.",
  },
  {
    q: "When should I order for same-day or midnight delivery in Lahore?",
    a: "For same-day delivery, order before 4:00 PM and your bouquet arrives within 2 to 5 hours. For a midnight birthday surprise, the slot is 11:30 PM–12:15 AM and must be booked before 8:00 PM. Delivery is free across listed Lahore areas, including DHA, Gulberg, Model Town, Johar Town and Bahria Town.",
  },
];

export default async function BestBouquetInLahorePage() {
  const [allProducts, reviews] = await Promise.all([getSanityProducts(), getSanityReviews()]);
  const bySlug = new Map(allProducts.map((p) => [p.slug, p]));
  const picks: { product: Product; occasion: string; note: string }[] = FEATURED
    .map((f) => ({ product: bySlug.get(f.slug), occasion: f.occasion, note: f.note }))
    .filter((x): x is { product: Product; occasion: string; note: string } => Boolean(x.product));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
      { "@type": "ListItem", position: 2, name: "Best Bouquet in Lahore", item: `${SITE_URL}/best-bouquet-in-lahore` },
    ],
  };

  const itemListJsonLd = picks.length
    ? itemListSchema(picks.map((x) => x.product), `${SITE_URL}/best-bouquet-in-lahore`, "Guide Picks: Best Bouquets in Lahore")
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {itemListJsonLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      )}

      <main className="w-full bg-white text-[#101012]">
        {/* Hero */}
        <section className="w-full py-12 px-4 sm:px-6 bg-[#F8F3EA]">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h1 className="font-playfair text-3xl sm:text-4xl font-bold">
              Best Bouquet in Lahore: How to Choose One They&apos;ll Actually Love
            </h1>
            <p className="text-sm sm:text-base text-[#2A2A2A] leading-relaxed max-w-2xl mx-auto">
              &ldquo;Best&rdquo; is not the biggest bunch or the highest price. In Lahore, the best bouquet is the one that arrives fresh, suits the occasion, and looks like the photo you were promised. This guide explains how to judge a bouquet before you pay — what to check, what each budget honestly buys, and our real picks for the occasions that matter.
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-2">
              <a
                href={whatsappLink("Hi! I need help choosing a bouquet in Lahore")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#128C7E] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0d6b5e] transition"
              >
                <MessageCircle size={18} /> Ask on WhatsApp
              </a>
              <Link
                href="/bouquets"
                className="inline-flex items-center gap-2 border-2 border-[#8B1E2D] text-[#8B1E2D] px-6 py-3 rounded-full font-semibold hover:bg-[#8B1E2D] hover:text-white transition"
              >
                <Flower2 size={18} /> Browse All Bouquets
              </Link>
            </div>
          </div>
        </section>

        {/* What "best" actually means */}
        <section className="w-full py-12 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-center mb-4">
              What &ldquo;Best&rdquo; Actually Means
            </h2>
            <p className="text-center text-sm text-[#2A2A2A] mb-8 max-w-2xl mx-auto leading-relaxed">
              Four things separate a bouquet that delights from one that disappoints — and none of them is the price tag.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <Flower2 size={20} />,
                  title: "Tied to order, not grabbed from a shelf",
                  text: "A bouquet arranged after you order lasts longer than one sitting pre-wrapped in a fridge. Every Lahore Bouquet order is hand-tied fresh, only when the order comes in.",
                },
                {
                  icon: <Camera size={20} />,
                  title: "You see your actual bouquet first",
                  text: "Catalogue photos are edited best-cases. Ask for a photo of the exact bouquet being sent — we send one on WhatsApp for your approval before dispatch, every time.",
                },
                {
                  icon: <Clock size={20} />,
                  title: "Short time between tying and doorstep",
                  text: "Flowers fade by the hour once cut. Order before 4:00 PM and your bouquet is delivered the same day within 2 to 5 hours — not carried over to tomorrow.",
                },
                {
                  icon: <Wallet size={20} />,
                  title: "The size matches the occasion",
                  text: "A Rs. 1,239 single rose can be the perfect first gift; a Rs. 7,499 arrangement would be too much. The guide below matches size to moment, so you spend where it counts.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-5 border border-[#E5DED2]">
                  <span className="text-[#8B1E2D] mt-0.5">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <p className="text-sm text-[#2A2A2A] mt-1 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Choose by occasion + featured picks */}
        <section className="w-full py-12 px-4 sm:px-6 bg-[#F8F3EA]">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-center mb-4">
              Choose by Occasion: Our Real Picks
            </h2>
            <p className="text-center text-sm text-[#2A2A2A] mb-8 max-w-2xl mx-auto leading-relaxed">
              Start from the moment, not the flower. Each pick below is a real product from our current catalogue, at its real price.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {picks.map(({ product, occasion, note }) => (
                <Link
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="bg-white border border-[#E5DED2] rounded-xl overflow-hidden hover:shadow-md transition block"
                >
                  <div className="relative w-full aspect-[4/3] bg-[#F8F3EA]">
                    {/* Plain <img> on a direct Sanity CDN URL — see directCdnUrl above. */}
                    <img
                      src={directCdnUrl(product.image)}
                      alt={`${product.title} — bouquet available with same-day delivery in Lahore`}
                      width={800}
                      height={600}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#8B1E2D]">{occasion}</p>
                    <h3 className="font-semibold mt-1">{product.title}</h3>
                    <p className="text-[#8B1E2D] font-bold mt-1">Rs. {product.price.toLocaleString()}</p>
                    <p className="text-sm text-[#2A2A2A] mt-2 leading-relaxed">{note}</p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="text-center mt-8 space-y-2">
              <p className="text-sm text-[#2A2A2A]">
                <Gift className="inline w-4 h-4 text-[#8B1E2D] mr-1" />
                Planning a birthday? See our <Link href="/birthday-surprises" className="text-[#8B1E2D] font-semibold hover:underline">birthday surprises</Link> for flowers with cakes and gifts.
              </p>
              <p className="text-sm text-[#2A2A2A]">
                <Heart className="inline w-4 h-4 text-[#8B1E2D] mr-1" />
                Roses specifically? Browse the full <Link href="/roses" className="text-[#8B1E2D] font-semibold hover:underline">rose bouquet collection</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Budget guide */}
        <section className="w-full py-12 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-center mb-4">
              What Each Budget Honestly Buys
            </h2>
            <p className="text-center text-sm text-[#2A2A2A] mb-8 max-w-2xl mx-auto leading-relaxed">
              No inflated promises — these are the real bands across our catalogue. Every order includes free delivery in listed Lahore areas and a WhatsApp photo before dispatch.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {BUDGET_BANDS.map((b) => (
                <div key={b.title} className="border border-[#E5DED2] rounded-xl p-5 bg-white hover:shadow-md transition">
                  <h3 className="font-semibold text-lg">{b.title}</h3>
                  <p className="text-[#8B1E2D] font-bold mt-1">{b.band}</p>
                  <p className="text-sm text-[#2A2A2A] mt-2 leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-[#2A2A2A] mt-6">
              Adding chocolate? Chocolate bouquets start with the Chocolate Rose Bouquet at Rs. 2,999. For the complete list, see our <Link href="/prices" className="text-[#8B1E2D] font-semibold hover:underline">Lahore flower price guide</Link>.
            </p>
          </div>
        </section>

        {/* Freshness checklist */}
        <section className="w-full py-12 px-4 sm:px-6 bg-[#F8F3EA]">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-center mb-4">
              The Freshness Checklist — Ask Any Florist
            </h2>
            <p className="text-center text-sm text-[#2A2A2A] mb-8 max-w-2xl mx-auto leading-relaxed">
              Whoever you order from in Lahore, ask these five questions first. Our own answers are alongside, so you can compare.
            </p>
            <div className="space-y-3 max-w-3xl mx-auto">
              {[
                {
                  q: "Is the bouquet tied after I order, or pre-made?",
                  a: "Ours is hand-tied to order — nothing is pulled pre-wrapped from a shelf.",
                },
                {
                  q: "Can I see a photo of my actual bouquet before it leaves?",
                  a: "Yes — a real photo is sent on WhatsApp for your approval before dispatch, on every order.",
                },
                {
                  q: "How fast will it reach them, and what is the cut-off?",
                  a: "Order before 4:00 PM for same-day delivery in 2 to 5 hours. Midnight surprises (11:30 PM–12:15 AM) are booked before 8:00 PM.",
                },
                {
                  q: "Is delivery free in my area?",
                  a: "Free across all listed Lahore areas — DHA, Gulberg, Model Town, Johar Town, Bahria Town, Cantt and more. For unlisted areas, the fee is confirmed on WhatsApp before you order.",
                },
                {
                  q: "How can I pay?",
                  a: "Cash on delivery, bank transfer, JazzCash, EasyPaisa or international cards — whatever suits you.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#E5DED2]">
                  <ClipboardCheck size={20} className="text-[#8B1E2D] shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-sm">{item.q}</h3>
                    <p className="text-sm text-[#2A2A2A] mt-1 leading-relaxed">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-center text-sm text-[#2A2A2A] mt-8 max-w-2xl mx-auto leading-relaxed">
              <Sun className="inline w-4 h-4 text-[#C6A15B] mr-1" />
              Once it arrives: trim the stems at an angle, use a clean vase with fresh water, and keep it out of direct sunlight — most bouquets then stay presentable for the better part of a week.
            </p>
          </div>
        </section>

        {/* Customer Reviews (real Sanity reviews, self-hides when empty) */}
        <ReviewsSection reviews={reviews} />

        {/* FAQ */}
        <section className="w-full py-12 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-center mb-8">
              Choosing a Bouquet: Questions People Ask
            </h2>
            <div className="space-y-4">
              {FAQS.map((f) => (
                <details key={f.q} className="border border-[#E5DED2] rounded-xl p-4 bg-white">
                  <summary className="font-semibold cursor-pointer flex items-center gap-2">
                    <HelpCircle size={18} className="text-[#8B1E2D] shrink-0" /> {f.q}
                  </summary>
                  <p className="text-sm text-[#2A2A2A] mt-3 leading-relaxed pl-7">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Keep exploring */}
        <section className="w-full py-12 px-4 sm:px-6 bg-[#F8F3EA]">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-center mb-8">
              Ready to Order?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <Link href="/bouquets" className="border border-[#E5DED2] rounded-xl p-5 bg-white hover:shadow-md transition block">
                <h3 className="font-semibold">All Bouquets</h3>
                <p className="text-sm text-[#2A2A2A] mt-1">The full catalogue — filter by price and find the one that fits.</p>
              </Link>
              <Link href="/prices" className="border border-[#E5DED2] rounded-xl p-5 bg-white hover:shadow-md transition block">
                <h3 className="font-semibold">Lahore Flower Price Guide 2026</h3>
                <p className="text-sm text-[#2A2A2A] mt-1">Complete transparent pricing for every bouquet and service.</p>
              </Link>
              <Link href="/roses" className="border border-[#E5DED2] rounded-xl p-5 bg-white hover:shadow-md transition block">
                <h3 className="font-semibold">Rose Bouquets</h3>
                <p className="text-sm text-[#2A2A2A] mt-1">Red, pink and mixed rose bouquets for romantic occasions.</p>
              </Link>
              <Link href="/birthday-surprises" className="border border-[#E5DED2] rounded-xl p-5 bg-white hover:shadow-md transition block">
                <h3 className="font-semibold">Birthday Surprises</h3>
                <p className="text-sm text-[#2A2A2A] mt-1">Bouquets with cakes, gifts and midnight delivery for birthdays.</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="w-full py-12 px-4 sm:px-6 bg-[#8B1E2D] text-white">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold">
              Still Deciding? Tell Us the Occasion
            </h2>
            <p className="text-white/90 max-w-xl mx-auto">
              Message us the occasion and your budget on WhatsApp — we will suggest two or three real options with photos, and deliver today if you order before 4:00 PM.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href={whatsappLink("Hi! I need help choosing a bouquet in Lahore")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-[#8B1E2D] px-6 py-3 rounded-full font-semibold hover:bg-[#F8F3EA] transition"
              >
                <MessageCircle size={18} /> WhatsApp: 0310-4225974
              </a>
              <a
                href="tel:+923104225974"
                className="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-[#8B1E2D] transition"
              >
                <Phone size={18} /> Call Now
              </a>
            </div>
            <p className="text-sm text-white/70 flex items-center justify-center gap-2">
              <Truck size={14} /> Same-day delivery in 2–5 hours
              <span aria-hidden="true">·</span>
              <MapPin size={14} /> Across Lahore
              <span aria-hidden="true">·</span>
              Open daily 9:00 AM – 1:00 AM
            </p>
            <p className="text-sm text-white/70">
              Email: {BUSINESS.email}
            </p>
            <p className="text-sm">
              <Link href="/" className="underline hover:no-underline">← Back to Homepage</Link>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
