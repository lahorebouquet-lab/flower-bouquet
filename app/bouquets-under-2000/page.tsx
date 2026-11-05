import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../components/ProductCard";
import { Sparkles, Truck, Camera, MessageCircle, HelpCircle } from "lucide-react";
import { ALL_PRODUCTS } from "../data/products";
import { SITE_URL, itemListSchema } from "@/lib/business";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo("/bouquets-under-2000", {
  title: {
    absolute: "Bouquets Under Rs. 2,000 in Lahore | Same-Day",
  },
  description: "Bouquets under Rs. 2,000 in Lahore: roses, sunflowers and mixed bouquets from Rs. 1,239. FREE same-day delivery in 2–5 hours, photo before dispatch.",
  alternates: {
    canonical: `${SITE_URL}/bouquets-under-2000`,
  },
  openGraph: {
    title: "Bouquets Under Rs. 2,000 in Lahore | Same-Day",
    description: "Bouquets under Rs. 2,000 in Lahore: roses, sunflowers and mixed bouquets from Rs. 1,239. FREE same-day delivery in 2–5 hours, photo before dispatch.",
    url: `${SITE_URL}/bouquets-under-2000`,
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Bouquets Under Rs. 2,000 in Lahore | Same-Day",
      },
    ],
  },
});

const BOUQUET_CATEGORIES = [
  "Bouquets",
  "Roses",
  "Velvet Red Roses",
  "Pure White Roses",
  "Sunflowers",
  "Flower Boxes",
  "Chocolate Bouquets",
  "Crochet",
  "Dried",
];

const FAQ_ITEMS = [
  {
    q: "What is the cheapest bouquet in Lahore?",
    a: "Hand-tied small bouquets start from Rs. 1,239 with free delivery in listed Lahore areas. Every bouquet on this page costs Rs. 2,000 or less.",
  },
  {
    q: "What kinds of bouquets cost under Rs. 2,000?",
    a: "Single and small rose bouquets, sunflower bouquets, small mixed bouquets and handmade crochet bouquets. Medium rose bouquets (Rs. 2,600–3,800) and the large signature arrangement (Rs. 7,499) are above this budget.",
  },
  {
    q: "Is delivery free on bouquets under Rs. 2,000?",
    a: "Yes. Delivery is FREE in listed Lahore areas — DHA, Gulberg, Bahria Town, Model Town, Johar Town, Cantt and more — whatever the bouquet costs.",
  },
  {
    q: "Can I get a bouquet under Rs. 2,000 delivered today?",
    a: "Yes. Order before 4:00 PM and your bouquet arrives the same day within 2–5 hours. A midnight slot (11:30 PM–12:15 AM) is also available — book before 8:00 PM.",
  },
  {
    q: "Can I see the bouquet before it is delivered?",
    a: "Yes. Our florist sends you a real photo of the actual bouquet on WhatsApp for your approval before dispatch.",
  },
  {
    q: "How do I pay for a bouquet under Rs. 2,000?",
    a: "Cash on delivery, bank transfer, JazzCash, EasyPaisa or international debit/credit card. Order on WhatsApp at 0310-4225974 or add your bouquet to the bag here.",
  },
];

export default async function BouquetsUnder2000Page() {
  const sanityProducts = await getSanityProducts();
  const allProducts = sanityProducts.length > 0 ? sanityProducts : ALL_PRODUCTS;

  // Same bouquet categories as /bouquets, priced Rs. 1,239–2,000.
  const bouquets = allProducts
    .filter((p) => BOUQUET_CATEGORIES.includes(p.category ?? ""))
    .filter((p) => typeof p.price === "number" && p.price >= 1239 && p.price <= 2000)
    .sort((a, b) => (a.price ?? 0) - (b.price ?? 0));

  const itemListJsonLd = itemListSchema(bouquets, `${SITE_URL}/bouquets-under-2000`, "Bouquets Under Rs. 2,000 in Lahore");

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Bouquets Under Rs. 2,000",
        item: `${SITE_URL}/bouquets-under-2000`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-14 text-[#2A2A2A] bg-[#F8F3EA]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Bouquets Under Rs. 2,000</span>
      </nav>

      {/* Hero Category Banner */}
      <section className="bg-[#0B0B0B] p-8 sm:p-14 rounded-3xl border border-[#C6A15B]/30 shadow-2xl relative overflow-hidden text-white">
        <div className="max-w-3xl relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#C6A15B] border border-[#C6A15B]/40 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Hand-Tied to Order in Lahore
          </div>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Bouquets Under Rs. 2,000 in Lahore — Fresh, Same-Day
          </h1>

          <p className="text-[#F8F3EA]/90 text-sm sm:text-base leading-relaxed font-light">
            A thoughtful bouquet does not need a big budget. Every bouquet on this page costs <strong>Rs. 2,000 or less</strong> — fresh roses, cheerful sunflowers, small mixed bouquets and handmade crochet keepsakes, all hand-tied to order and delivered in <strong>2 to 5 hours</strong> with a photo on WhatsApp before dispatch.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#BDBDBD]">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#C6A15B]" /> Delivery in 2 to 5 hours</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#25D366]" /> Photo on WhatsApp before dispatch</span>
            <a
              href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20a%20bouquet%20under%20Rs.%202000."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#C6A15B] hover:text-white font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order on WhatsApp (0310-4225974)
            </a>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#555555]">
          <span>
            Showing <strong className="text-[#0B0B0B]">{bouquets.length} bouquets Rs. 1,239 – Rs. 2,000</strong>
          </span>
          <span className="text-[#8B1E2D] font-semibold">Same-day express delivery active</span>
        </div>

        {bouquets.length === 0 && (
          <div className="bg-white p-10 rounded-2xl border border-[#E5DED2] text-center">
            <p className="text-sm font-semibold text-[#0B0B0B]">No bouquets under Rs. 2,000 are listed right now.</p>
            <p className="text-xs text-[#636363] mt-1">Please check back soon, or message us on WhatsApp (0310-4225974) and we will suggest one within your budget.</p>
          </div>
        )}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {bouquets.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* What fits under Rs. 2,000 */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0B0B0B]">
            What Fits Under Rs. 2,000?
          </h2>
          <p className="text-xs sm:text-sm text-[#555555]">
            Honest price bands for budget bouquets in Lahore:
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[rgba(198,161,91,0.25)] bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm text-[#2A2A2A]">
            <thead className="bg-[#0B0B0B] text-white uppercase text-[11px] tracking-wider font-semibold">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Bouquet Type</th>
                <th className="py-3.5 px-4 sm:px-6">Price</th>
                <th className="py-3.5 px-4 sm:px-6">Best For</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5DED2]">
              <tr className="hover:bg-[#F8F3EA]/60 transition-colors">
                <td className="py-4 px-4 sm:px-6 font-semibold text-[#0B0B0B]">Hand-tied small bouquets</td>
                <td className="py-4 px-4 sm:px-6 text-[#8B1E2D] font-bold">Rs. 1,239 – 1,900</td>
                <td className="py-4 px-4 sm:px-6 text-[#666666]">Thank-you, office desk, quick surprise gift</td>
              </tr>
              <tr className="hover:bg-[#F8F3EA]/60 transition-colors">
                <td className="py-4 px-4 sm:px-6 font-semibold text-[#0B0B0B]">Sunflower bouquets</td>
                <td className="py-4 px-4 sm:px-6 text-[#8B1E2D] font-bold">From Rs. 1,699</td>
                <td className="py-4 px-4 sm:px-6 text-[#666666]">Birthdays, get-well wishes, cheerful surprises</td>
              </tr>
              <tr className="hover:bg-[#F8F3EA]/60 transition-colors">
                <td className="py-4 px-4 sm:px-6 font-semibold text-[#0B0B0B]">Crochet bouquets</td>
                <td className="py-4 px-4 sm:px-6 text-[#8B1E2D] font-bold">From Rs. 1,250</td>
                <td className="py-4 px-4 sm:px-6 text-[#666666]">Keepsake gifts that never wilt</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs sm:text-sm text-[#555555]">
          Looking for something bigger? Medium rose bouquets are Rs. 2,600–3,800 and the large signature rose bouquet is Rs. 7,499 — see the full list on our <Link href="/prices" className="text-[#8B1E2D] underline font-semibold">flower bouquet prices in Lahore</Link> page, or browse <Link href="/bouquets" className="text-[#8B1E2D] underline font-semibold">all bouquets</Link>.
        </p>
      </section>

      {/* How to order on a budget */}
      <section className="bg-white p-8 sm:p-10 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">How to Order a Bouquet Under Rs. 2,000</h2>
        <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
          Pick a bouquet above, add it to the bag, choose your delivery area, date and time slot, and pay by cash on delivery, bank transfer, JazzCash, EasyPaisa or card — or order directly on WhatsApp at 0310-4225974. Before your bouquet leaves, we send you a photo of the actual arrangement on WhatsApp for your approval.
        </p>
        <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
          Delivery is free across Lahore — DHA, Gulberg, Johar Town, Bahria Town, Model Town, Cantt, Wapda Town and Township — and same-day orders placed before 4:00 PM arrive within 2 to 5 hours. Need a birthday surprise at midnight? Our 11:30 PM to 12:15 AM midnight slot has you covered — book before 8:00 PM. We are open every day from 9:00 AM to 1:00 AM. Sending flowers to someone in Lahore from another city or from abroad? Read our guide on <Link href="/blog/how-to-order-flowers-online-lahore-2026" className="text-[#8B1E2D] underline font-semibold">how to send flowers to Lahore</Link>.
        </p>
      </section>

      {/* FAQs */}
      <section className="bg-white p-8 sm:p-10 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#2A2A2A] leading-relaxed">
          {FAQ_ITEMS.map((f) => (
            <div key={f.q} className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
              <h3 className="font-semibold text-[#0B0B0B] text-sm">{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related links */}
      <section className="text-center text-xs text-[#636363] space-x-4">
        <span className="font-bold text-[#0B0B0B]">More to explore:</span>
        <Link href="/bouquets" className="text-[#8B1E2D] underline font-semibold">All Bouquets</Link>
        <Link href="/prices" className="text-[#8B1E2D] underline font-semibold">Price Guide</Link>
        <Link href="/roses" className="text-[#8B1E2D] underline font-semibold">Rose Bouquets</Link>
        <Link href="/sunflower-bouquet-lahore" className="text-[#8B1E2D] underline font-semibold">Sunflower Bouquets</Link>
      </section>
    </main>
  );
}
