import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, whatsappLink } from "@/lib/business";
import { Truck, Clock, Camera, MessageCircle, HelpCircle, Heart } from "lucide-react";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo("/flowers-for-husband-in-lahore", {
  title: {
    absolute: "Flowers for Husband in Lahore | Same-Day Delivery",
  },
  description: "Thoughtful flowers for your husband in Lahore: sunflowers and mixed bouquets from Rs. 1,239. Same-day delivery in 2–5 hours, photo before dispatch.",
  alternates: {
    canonical: `${SITE_URL}/flowers-for-husband-in-lahore`,
  },
  openGraph: {
    title: "Flowers for Husband in Lahore | Same-Day Delivery",
    description: "Thoughtful flowers for your husband in Lahore: sunflowers and mixed bouquets from Rs. 1,239. Same-day delivery in 2–5 hours, photo before dispatch.",
    url: `${SITE_URL}/flowers-for-husband-in-lahore`,
    siteName: "Lahore Bouquet",
    type: "website",
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowers for Husband in Lahore | Same-Day Delivery",
    description: "Thoughtful flowers for your husband in Lahore: sunflowers and mixed bouquets from Rs. 1,239. Same-day delivery in 2–5 hours, photo before dispatch.",
  },
});

const FAQS = [
  {
    "q": "Do men like receiving flowers?",
    "a": "Yes — sunflowers, mixed seasonal bouquets and single roses are popular gifts for husbands, especially for birthdays and anniversaries. A bold, cheerful bouquet lands better than a heavily romantic one."
  },
  {
    "q": "What are the best flowers for my husband in Lahore?",
    "a": "Sunflowers, bright mixed bouquets and single imported roses are the most-ordered choices for husbands. A handmade crochet bouquet is a good keepsake that never wilts."
  },
  {
    "q": "What should I send my husband for our anniversary?",
    "a": "A fresh mixed bouquet with a handwritten message card is a thoughtful anniversary gift. Tell us your budget on WhatsApp (0310-4225974) and our florist will build it."
  },
  {
    "q": "How much do flowers for my husband cost?",
    "a": "Hand-tied small bouquets start from Rs. 1,239, medium rose bouquets are Rs. 2,600–3,800, and sunflower bouquets start from Rs. 1,699."
  },
  {
    "q": "Can I get flowers delivered to my husband today?",
    "a": "Yes. Orders placed before 4:00 PM Pakistan time are delivered the same day in 2 to 5 hours across Lahore."
  },
  {
    "q": "Can I add a cake or a gift with the flowers?",
    "a": "Yes. You can add a cake, a gift box or a handwritten message card with your bouquet — just tell us on WhatsApp when you order."
  },
  {
    "q": "Can I see the bouquet before it is delivered?",
    "a": "Yes. Our florist sends you a real photo of the actual bouquet on WhatsApp for your approval before dispatch."
  }
];

const PICKS = [
  {
    "name": "Sunflower Bouquet",
    "price": "Rs. 1,699",
    "slug": "sunflower-bouquet",
    "note": "Bright and bold — the most-ordered pick for husbands."
  },
  {
    "name": "Solo Bloom",
    "price": "Rs. 1,599",
    "slug": "solo-bloom",
    "note": "A single striking bloom, smart and understated."
  },
  {
    "name": "Single Imported Flower",
    "price": "Rs. 1,499",
    "slug": "single-imported-flower",
    "note": "One imported flower, elegantly presented."
  },
  {
    "name": "Orange Daisy",
    "price": "Rs. 1,599",
    "slug": "orange-daisy",
    "note": "A cheerful handmade crochet daisy that never wilts."
  },
  {
    "name": "Affordable Imported Small Bouquets",
    "price": "Rs. 1,999",
    "slug": "affordable-imported-small-bouquets",
    "note": "Imported blooms in a smart small bouquet."
  },
  {
    "name": "Sorry Bouquet",
    "price": "Rs. 1,999",
    "slug": "sorry-bouquet",
    "note": "For the times when sorry needs flowers too."
  }
];

export default function FlowersForHusbandInLahorePage() {
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
    "@id": `${SITE_URL}/flowers-for-husband-in-lahore#service`,
    name: "Flowers for Husband in Lahore",
    serviceType: "Flower delivery",
    description: "Thoughtful flower bouquets for husbands in Lahore — sunflowers, mixed bouquets and single roses, delivered same-day in 2-5 hours.",
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
    url: `${SITE_URL}/flowers-for-husband-in-lahore`,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
      { "@type": "ListItem", position: 2, name: "Flowers for Husband in Lahore", item: `${SITE_URL}/flowers-for-husband-in-lahore` },
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
            Flowers for Husband in Lahore – Thoughtful, Same-Day
          </h1>
          <p className="text-sm sm:text-base text-[#2A2A2A] leading-relaxed">
            <strong>Flowers are for him too.</strong> Lahore Bouquet delivers bold, cheerful bouquets to husbands across Lahore — DHA, Gulberg, Bahria Town, Model Town, Johar Town and more. Bright sunflowers, fresh mixed bouquets and single imported roses from <strong>Rs. 1,239</strong>, delivered <strong>same-day in 2 to 5 hours</strong>. Order on WhatsApp at <strong>0310-4225974</strong> and see a real photo of the actual bouquet before it is dispatched.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              href="/bouquets"
              className="px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors"
            >
              Shop Flowers
            </Link>
            <a
              href={whatsappLink("Hi Lahore Bouquet! I want to order flowers for my husband in Lahore.")}
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
              Best Bouquets for Husband
            </h2>
            <p className="text-sm text-[#2A2A2A] max-w-2xl mx-auto leading-relaxed">
              Bold and cheerful rather than overly romantic — sunflowers, mixed seasonal blooms and single roses are the most-ordered picks for husbands.
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
            Flowers for Every Occasion for Husband
          </h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-2xl bg-[#F8F3EA] border border-[#E5DED2]">
              <h3 className="font-bold text-[#0B0B0B] text-sm">Birthday</h3>
              <p className="text-xs text-[#636363] mt-1 leading-relaxed">A bright sunflower bouquet or a fresh mixed bunch is a cheerful birthday surprise, delivered the same day.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F8F3EA] border border-[#E5DED2]">
              <h3 className="font-bold text-[#0B0B0B] text-sm">Anniversary</h3>
              <p className="text-xs text-[#636363] mt-1 leading-relaxed">Mark the day with a smart mixed bouquet and a handwritten card — or a crochet keepsake that lasts.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F8F3EA] border border-[#E5DED2]">
              <h3 className="font-bold text-[#0B0B0B] text-sm">Apology & Thank-You</h3>
              <p className="text-xs text-[#636363] mt-1 leading-relaxed">When words fall short, a fresh bouquet and an honest note say it best. We deliver the same day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Prices */}
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            Flower Prices for Husband
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
              href={whatsappLink("Hi Lahore Bouquet! I want to order flowers for my husband in Lahore.")}
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
