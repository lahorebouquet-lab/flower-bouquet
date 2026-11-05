import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, whatsappLink } from "@/lib/business";
import { Truck, Clock, Camera, MessageCircle, HelpCircle, Heart } from "lucide-react";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo("/flowers-for-mother-in-lahore", {
  title: {
    absolute: "Flowers for Mother in Lahore | Same-Day Delivery",
  },
  description: "Flowers for your mother in Lahore: pink roses, lilies and mixed bouquets from Rs. 1,239. Same-day delivery in 2–5 hours, photo before dispatch.",
  alternates: {
    canonical: `${SITE_URL}/flowers-for-mother-in-lahore`,
  },
  openGraph: {
    title: "Flowers for Mother in Lahore | Same-Day Delivery",
    description: "Flowers for your mother in Lahore: pink roses, lilies and mixed bouquets from Rs. 1,239. Same-day delivery in 2–5 hours, photo before dispatch.",
    url: `${SITE_URL}/flowers-for-mother-in-lahore`,
    siteName: "Lahore Bouquet",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowers for Mother in Lahore | Same-Day Delivery",
    description: "Flowers for your mother in Lahore: pink roses, lilies and mixed bouquets from Rs. 1,239. Same-day delivery in 2–5 hours, photo before dispatch.",
  },
});

const FAQS = [
  {
    "q": "What are the best flowers for my mother in Lahore?",
    "a": "Pink roses, lilies and soft mixed bouquets are the most-loved choices for mothers. For a cheerful birthday surprise, a sunflower bouquet works beautifully too."
  },
  {
    "q": "How much do flowers for mother cost?",
    "a": "Hand-tied small bouquets start from Rs. 1,239, medium rose bouquets are Rs. 2,600–3,800, and the large signature rose arrangement is Rs. 7,499. Sunflower bouquets start from Rs. 1,699."
  },
  {
    "q": "Can I get flowers delivered to my mother today?",
    "a": "Yes. Orders placed before 4:00 PM Pakistan time are delivered the same day in 2 to 5 hours across Lahore."
  },
  {
    "q": "Can I add a cake or a card with the flowers?",
    "a": "Yes. You can add a cake, a gift box or a handwritten message card with your bouquet — just tell us on WhatsApp (0310-4225974) when you order."
  },
  {
    "q": "Do you deliver flowers on Mother's Day?",
    "a": "Yes. We deliver every day including Mother's Day. Order early, as same-day slots fill up quickly on the day."
  },
  {
    "q": "Can I see the bouquet before it is delivered?",
    "a": "Yes. Our florist sends you a real photo of the actual bouquet on WhatsApp for your approval before dispatch."
  },
  {
    "q": "Can I order flowers for my mother from abroad?",
    "a": "Yes. Order from anywhere in the world on WhatsApp and pay by international debit or credit card. Delivery in Lahore is the same day in 2 to 5 hours."
  }
];

const PICKS = [
  {
    "name": "Sunflower Bouquet",
    "price": "Rs. 1,699",
    "slug": "sunflower-bouquet",
    "note": "Bright and cheerful — a happy birthday favourite for mothers."
  },
  {
    "name": "Romantic Rose Bouquet",
    "price": "Rs. 1,499",
    "slug": "romantic-rose-bouquet",
    "note": "Soft roses, a gentle classic for Ami."
  },
  {
    "name": "Eternal Elegance",
    "price": "Rs. 1,399",
    "slug": "eternal-elegance",
    "note": "An elegant mixed bouquet that suits any occasion."
  },
  {
    "name": "Sweetheart Bloom",
    "price": "Rs. 1,799",
    "slug": "sweetheart-bloom",
    "note": "Soft colours and fresh seasonal flowers."
  },
  {
    "name": "Pure Comfort",
    "price": "Rs. 1,999",
    "slug": "pure-comfort",
    "note": "Calm, comforting blooms — lovely for get-well wishes."
  },
  {
    "name": "Tulip Lavender",
    "price": "Rs. 1,699",
    "slug": "tulip-lavender",
    "note": "A handmade crochet keepsake she can keep forever."
  }
];

export default function FlowersForMotherInLahorePage() {
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
    "@id": `${SITE_URL}/flowers-for-mother-in-lahore#service`,
    name: "Flowers for Mother in Lahore",
    serviceType: "Flower delivery",
    description: "Fresh flower bouquets for mothers in Lahore — pink roses, lilies and mixed bouquets, delivered same-day in 2-5 hours.",
    provider: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Lahore Bouquet",
      url: SITE_URL,
      telephone: "+923104225974",
      email: "lahorebouquet@gmail.com",
    },
    areaServed: {
      "@type": "City",
      name: "Lahore",
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: "Punjab, Pakistan",
      },
    },
    url: `${SITE_URL}/flowers-for-mother-in-lahore`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
      { "@type": "ListItem", position: 2, name: "Flowers for Mother in Lahore", item: `${SITE_URL}/flowers-for-mother-in-lahore` },
    ],
  };

  return (
    <main className="bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero — direct answer */}
      <section className="w-full py-16 px-4 sm:px-6 text-center border-b border-[#E5DED2]">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-[#101012] leading-tight">
            Flowers for Mother in Lahore – Same-Day Delivery
          </h1>
          <p className="text-sm sm:text-base text-[#2A2A2A] leading-relaxed">
            <strong>Flowers are the simplest way to tell your mother she is loved.</strong> Lahore Bouquet delivers fresh, hand-tied bouquets to mothers across Lahore — DHA, Gulberg, Bahria Town, Model Town, Johar Town and more. Soft pink roses, lilies and gentle mixed bouquets from <strong>Rs. 1,239</strong>, delivered <strong>same-day in 2 to 5 hours</strong>. Order on WhatsApp at <strong>0310-4225974</strong> and see a real photo of the actual bouquet before it is dispatched.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              href="/bouquets"
              className="px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors"
            >
              Shop Flowers
            </Link>
            <a
              href={whatsappLink("Hi Lahore Bouquet! I want to order flowers for my mother in Lahore.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Popular bouquets */}
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2]">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012]">
              Best Bouquets for Mother
            </h2>
            <p className="text-sm text-[#2A2A2A] max-w-2xl mx-auto leading-relaxed">
              Soft, gentle and thoughtful — these are the bouquets Lahore orders most for mothers, for birthdays, Mother's Day, Eid and just because.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {PICKS.map((p) => (
              <div key={p.slug} className="p-5 rounded-2xl bg-white border border-[#E5DED2] hover:border-[#8B1E2D] transition-colors flex flex-col">
                <h3 className="font-bold text-[#0B0B0B] text-sm">{p.name}</h3>
                <p className="text-[#8B1E2D] font-bold text-base mt-1">{p.price}</p>
                <p className="text-xs text-[#636363] mt-1">{p.note}</p>
                <div className="flex gap-2 mt-3 pt-3 border-t border-[#E5DED2]">
                  <Link href={`/products/${p.slug}`} className="flex-1 text-center px-3 py-2 rounded-full bg-[#8B1E2D] text-white text-xs font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">
                    View
                  </Link>
                  <a
                    href={whatsappLink(`Hi Lahore Bouquet! I want to order the ${p.name} (${p.price}) for delivery in Lahore.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-3 py-2 rounded-full bg-[#128C7E] text-white text-xs font-bold hover:opacity-90 transition-opacity"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm">
            <Link href="/bouquets" className="text-[#8B1E2D] underline font-semibold">Browse all bouquets →</Link>
          </p>
        </div>
      </section>

      {/* Occasions */}
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            Flowers for Every Occasion for Mother
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[#F8F3EA] border border-[#E5DED2]">
              <h3 className="font-bold text-[#0B0B0B] text-sm">Mother's Day</h3>
              <p className="text-xs text-[#636363] mt-1 leading-relaxed">Soft pink roses and lilies are the classic Mother's Day gift. Order early — delivery slots fill up on the day.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F8F3EA] border border-[#E5DED2]">
              <h3 className="font-bold text-[#0B0B0B] text-sm">Birthday</h3>
              <p className="text-xs text-[#636363] mt-1 leading-relaxed">A bright sunflower bouquet or a cheerful mixed bunch makes her birthday feel special, delivered the same day.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F8F3EA] border border-[#E5DED2]">
              <h3 className="font-bold text-[#0B0B0B] text-sm">Eid & Thank-You</h3>
              <p className="text-xs text-[#636363] mt-1 leading-relaxed">Say Eid Mubarak or simply thank you with a graceful mixed bouquet and a handwritten message card.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prices */}
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            Flower Prices for Mother
          </h2>
          <p className="text-sm text-[#2A2A2A] text-center">
            Same prices across Lahore — no hidden charges. Free delivery in listed Lahore areas.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#F8F3EA]">
                  <th className="border border-[#E5DED2] px-4 py-3 text-left font-bold">Bouquet Type</th>
                  <th className="border border-[#E5DED2] px-4 py-3 text-left font-bold">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-[#E5DED2] px-4 py-3">Hand-tied small bouquets</td>
                  <td className="border border-[#E5DED2] px-4 py-3">Rs. 1,239 – 1,900</td>
                </tr>
                <tr className="bg-[#F8F3EA]/50">
                  <td className="border border-[#E5DED2] px-4 py-3">Medium rose bouquets</td>
                  <td className="border border-[#E5DED2] px-4 py-3">Rs. 2,600 – 3,800</td>
                </tr>
                <tr>
                  <td className="border border-[#E5DED2] px-4 py-3">Large signature rose arrangement</td>
                  <td className="border border-[#E5DED2] px-4 py-3">Rs. 7,499</td>
                </tr>
                <tr className="bg-[#F8F3EA]/50">
                  <td className="border border-[#E5DED2] px-4 py-3">Sunflower bouquets</td>
                  <td className="border border-[#E5DED2] px-4 py-3">From Rs. 1,699</td>
                </tr>
                <tr>
                  <td className="border border-[#E5DED2] px-4 py-3">Chocolate bouquets</td>
                  <td className="border border-[#E5DED2] px-4 py-3">From Rs. 3,800</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-sm">
            <Link href="/prices" className="text-[#8B1E2D] underline font-semibold">See full price guide →</Link>
          </p>
        </div>
      </section>

      {/* How to Order */}
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            How to Order
          </h2>
          <ol className="space-y-3 text-sm sm:text-base leading-relaxed list-decimal list-inside">
            <li><strong>Choose your bouquet</strong> — browse the picks above or message us on WhatsApp with your budget.</li>
            <li><strong>Share the delivery details</strong> — recipient's name, phone number and complete Lahore address.</li>
            <li><strong>We confirm</strong> — availability, exact price and delivery time (2–5 hours).</li>
            <li><strong>Pay & receive</strong> — pay by cash on delivery, bank transfer, JazzCash, EasyPaisa or card; your flowers arrive fresh the same day.</li>
          </ol>
          <div className="text-center pt-2">
            <a
              href={whatsappLink("Hi Lahore Bouquet! I want to order flowers for my mother in Lahore.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={18} /> Order on WhatsApp: 0310-4225974
            </a>
          </div>
        </div>
      </section>

      {/* Delivery Charges & Timing */}
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            Delivery Charges, Timing & Payment
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[#F8F3EA] border border-[#E5DED2]">
              <h3 className="font-bold text-[#0B0B0B] text-sm flex items-center gap-2"><Truck size={16} className="text-[#8B1E2D]" /> Delivery Charges</h3>
              <p className="text-xs text-[#2A2A2A] mt-2 leading-relaxed"><strong>FREE</strong> delivery in listed Lahore areas — DHA, Gulberg, Bahria Town, Model Town, Johar Town, Cantt and more. Confirm your area on WhatsApp (0310-4225974).</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F8F3EA] border border-[#E5DED2]">
              <h3 className="font-bold text-[#0B0B0B] text-sm flex items-center gap-2"><Clock size={16} className="text-[#8B1E2D]" /> Delivery Time</h3>
              <p className="text-xs text-[#2A2A2A] mt-2 leading-relaxed"><strong>Same-day in 2–5 hours</strong> for orders placed before 4:00 PM Pakistan time. Midnight slot: 11:30 PM–12:15 AM (book before 8:00 PM).</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F8F3EA] border border-[#E5DED2]">
              <h3 className="font-bold text-[#0B0B0B] text-sm flex items-center gap-2"><MessageCircle size={16} className="text-[#8B1E2D]" /> Payment</h3>
              <p className="text-xs text-[#2A2A2A] mt-2 leading-relaxed">COD, bank transfer, JazzCash, EasyPaisa, and international debit/credit cards accepted.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2]">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            Why Order from Lahore Bouquet?
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#E5DED2]">
              <span className="text-[#8B1E2D] mt-0.5"><Clock size={20} /></span>
              <p className="text-sm">Same-day delivery in 2–5 hours across Lahore for orders placed before 4:00 PM</p>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#E5DED2]">
              <span className="text-[#8B1E2D] mt-0.5"><Camera size={20} /></span>
              <p className="text-sm">A real photo of your actual bouquet on WhatsApp before dispatch</p>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#E5DED2]">
              <span className="text-[#8B1E2D] mt-0.5"><Heart size={20} /></span>
              <p className="text-sm">Hand-tied fresh on the day of delivery — never pre-made</p>
            </div>
            <div className="flex items-start gap-3 bg-white rounded-xl p-4 border border-[#E5DED2]">
              <span className="text-[#8B1E2D] mt-0.5"><Truck size={20} /></span>
              <p className="text-sm">FREE delivery in listed Lahore areas — DHA, Gulberg, Bahria Town, Model Town and more</p>
            </div>
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="w-full py-12 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <h2 className="font-playfair text-xl font-bold text-[#101012]">More Flower Gift Ideas</h2>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <Link href="/bouquets" className="px-4 py-2 rounded-full border border-[#E5DED2] hover:border-[#8B1E2D] hover:text-[#8B1E2D] transition-colors">All Bouquets</Link>
            <Link href="/prices" className="px-4 py-2 rounded-full border border-[#E5DED2] hover:border-[#8B1E2D] hover:text-[#8B1E2D] transition-colors">Price Guide</Link>
            <Link href="/blog/how-to-order-flowers-online-lahore-2026" className="px-4 py-2 rounded-full border border-[#E5DED2] hover:border-[#8B1E2D] hover:text-[#8B1E2D] transition-colors">How to Order Flowers Online</Link>
            <Link href="/flowers-for-mother-in-lahore" className="px-4 py-2 rounded-full border border-[#E5DED2] hover:border-[#8B1E2D] hover:text-[#8B1E2D] transition-colors">Flowers for Mother</Link>
            <Link href="/flowers-for-wife-in-lahore" className="px-4 py-2 rounded-full border border-[#E5DED2] hover:border-[#8B1E2D] hover:text-[#8B1E2D] transition-colors">Flowers for Wife</Link>
            <Link href="/flowers-for-husband-in-lahore" className="px-4 py-2 rounded-full border border-[#E5DED2] hover:border-[#8B1E2D] hover:text-[#8B1E2D] transition-colors">Flowers for Husband</Link>
            <Link href="/flowers-for-father-in-lahore" className="px-4 py-2 rounded-full border border-[#E5DED2] hover:border-[#8B1E2D] hover:text-[#8B1E2D] transition-colors">Flowers for Father</Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <details key={i} className="p-5 rounded-2xl bg-white border border-[#E5DED2] group">
                <summary className="font-bold text-sm text-[#0B0B0B] cursor-pointer list-none flex justify-between items-center gap-2">
                  <span className="flex items-center gap-2"><HelpCircle size={16} className="text-[#8B1E2D] shrink-0" /> {f.q}</span>
                  <span className="text-[#8B1E2D] group-open:rotate-45 transition-transform text-lg leading-none shrink-0">+</span>
                </summary>
                <p className="text-sm mt-2 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
