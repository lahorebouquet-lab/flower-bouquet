import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Camera, MessageCircle, HelpCircle } from "lucide-react";
import { SITE_URL } from "@/lib/business";
import { withSeo } from "@/lib/seo";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../components/ProductCard";
import { ALL_PRODUCTS } from "../data/products";

export const metadata: Metadata = withSeo("/bouquets-under-3000", {
  title: { absolute: "Bouquets Under Rs. 3,000 in Lahore | Same-Day" },
  description: "Bouquets between Rs. 2,000 and Rs. 3,000 in Lahore: larger rose, sunflower and mixed bouquets, delivered the same day with a photo before dispatch.",
  alternates: { canonical: `${SITE_URL}/bouquets-under-3000` },
  openGraph: {
    title: "Bouquets Under Rs. 3,000 in Lahore | Same-Day",
    description: "Bouquets between Rs. 2,000 and Rs. 3,000 in Lahore: larger rose, sunflower and mixed bouquets, delivered the same day with a photo before dispatch.",
    url: `${SITE_URL}/bouquets-under-3000`,
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: "Bouquets Under Rs. 3,000 in Lahore | Same-Day" }],
  },
});

const H1 = "Bouquets Under Rs. 3,000 in Lahore";
const INTRO = "Stepping up from a small bouquet does not need a big budget. This page lists bouquets priced between Rs. 2,000 and Rs. 3,000, with same-day delivery across listed Lahore areas.";
const GUIDE_TITLE = "What You Get Between Rs. 2,000 and Rs. 3,000";
const GUIDE: [string, string][] = [
  [
    "Bigger and fuller",
    "Compared with our small hand-tied bouquets from Rs. 1,239, this range gives you more stems, fuller wrapping and more choice of flowers. Medium rose bouquets start around Rs. 2,600."
  ],
  [
    "Delivery on top of the price",
    "Delivery is a flat Rs. 800 across listed Lahore areas whatever the bouquet costs. For areas not listed, we confirm the fee on WhatsApp before you pay."
  ],
  [
    "Plan the day",
    "Orders placed before 4 PM Pakistan time are delivered the same day, usually in 2 to 5 hours. A midnight slot from 11:30 PM to 12:15 AM can be reserved on WhatsApp before 8 PM."
  ],
  [
    "Payment",
    "We accept bank transfer, JazzCash, EasyPaisa and international debit or credit cards. Cash on Delivery is not available."
  ]
];
const FAQS: { q: string; a: string }[] = [
  {
    "q": "What is the best bouquet under Rs. 3,000 in Lahore?",
    "a": "For romance, a medium red rose bouquet. For a cheerful gift, a sunflower or mixed bouquet. Tell us the occasion on WhatsApp and we will suggest one."
  },
  {
    "q": "Is delivery included in the Rs. 3,000?",
    "a": "No. Delivery is a flat Rs. 800 across listed Lahore areas and is added to the bouquet price."
  },
  {
    "q": "Can I see the bouquet before it is delivered?",
    "a": "Yes. Our florist sends a photo of your finished bouquet on WhatsApp for approval before dispatch."
  },
  {
    "q": "Do you have cheaper bouquets?",
    "a": "Yes. See our bouquets under Rs. 2,000, which start from Rs. 1,239."
  }
];
const RELATED: [string, string][] = [["/bouquets-under-2000", "Bouquets under Rs. 2,000"], ["/bouquets", "All bouquets"], ["/prices", "Price list"], ["/delivery-areas", "Delivery areas"]];
const WA_TEXT = "Hello Lahore Bouquet! I would like a bouquet under Rs. 3,000.";

export default async function Page() {
  const sanity = await getSanityProducts();
  const all = sanity.length > 0 ? sanity : ALL_PRODUCTS;
  const items = all
    .filter((p) => ["Bouquets", "Roses", "Sunflowers", "Chocolate Bouquets", "Money Bouquets", "Velvet Red Roses", "Pure White Roses", "Crochet", "Dried"].includes(p.category ?? ""))
    .filter((p) => typeof p.price === "number" && p.price > 2000 && p.price <= 3000)
    .sort((a, b) => (a.price ?? 0) - (b.price ?? 0));

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
      { "@type": "ListItem", position: 2, name: H1, item: `${SITE_URL}/bouquets-under-3000` },
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
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Bouquets Under Rs. 3,000</span>
      </nav>

      <section className="bg-[#0B0B0B] p-8 sm:p-12 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">{H1}</h1>
          <p className="text-[#F8F3EA]/85 text-xs sm:text-sm leading-relaxed font-light">{INTRO}</p>
          <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before dispatch</span>
            <a
              href={`https://wa.me/923104225974?text=${encodeURIComponent(WA_TEXT)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#C6A15B] font-semibold hover:underline"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order on WhatsApp (0310-4225974)
            </a>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Bouquets from Rs. 2,000 to Rs. 3,000</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">{GUIDE_TITLE}</h2>
        <div className="space-y-4 text-sm text-[#2A2A2A] leading-relaxed">
          {GUIDE.map(([heading, body], i) => (
            <div key={i} className="space-y-1">
              <h3 className="font-semibold text-[#0B0B0B]">{heading}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white p-8 sm:p-10 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold">Frequently Asked Questions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#2A2A2A] leading-relaxed">
          {FAQS.map((f, i) => (
            <div key={i} className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
              <h3 className="font-semibold text-[#0B0B0B] text-sm">{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </section>

      <p className="text-xs text-center text-[#636363]">
        Related:{" "}
        {RELATED.map(([href, label], i) => (
          <React.Fragment key={href}>
            {i > 0 && " · "}
            <Link href={href} className="underline text-[#8B1E2D]">{label}</Link>
          </React.Fragment>
        ))}
      </p>
    </main>
  );
}
