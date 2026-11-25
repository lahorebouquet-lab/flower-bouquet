import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Camera, MessageCircle, HelpCircle } from "lucide-react";
import { SITE_URL } from "@/lib/business";
import { withSeo } from "@/lib/seo";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../../components/ProductCard";
import { ALL_PRODUCTS } from "../../data/products";

export const metadata: Metadata = withSeo("/occasions/thank-you", {
  title: { absolute: "Thank You Flowers in Lahore | Bouquets & Gifts" },
  description: "Say thank you with flowers in Lahore: hand-tied bouquets for a teacher, colleague, host or friend, delivered with your message and a photo before dispatch.",
  alternates: { canonical: `${SITE_URL}/occasions/thank-you` },
  openGraph: {
    title: "Thank You Flowers in Lahore | Bouquets & Gifts",
    description: "Say thank you with flowers in Lahore: hand-tied bouquets for a teacher, colleague, host or friend, delivered with your message and a photo before dispatch.",
    url: `${SITE_URL}/occasions/thank-you`,
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: "Thank You Flowers in Lahore | Bouquets & Gifts" }],
  },
});

const H1 = "Thank You Flowers in Lahore";
const INTRO = "A bouquet is a warm way to say thank you to a teacher, a colleague, a host or a friend who helped. Choose a hand-tied bouquet, add your message and we deliver it across Lahore.";
const GUIDE_TITLE = "Choosing Thank-You Flowers";
const GUIDE: [string, string][] = [
  [
    "Pick a size that feels right",
    "A small hand-tied bouquet from Rs. 1,239 is a thoughtful thank-you for most people. For a bigger favour, a medium bouquet (roses are Rs. 2,600 to 3,800) says more without being over the top."
  ],
  [
    "Write a short, specific message",
    "Say what they did and what it meant to you. Send the message with your order and we include it on a card with the bouquet."
  ],
  [
    "Send it to an office or home",
    "We deliver to homes and offices across listed Lahore areas. For offices, share the company name, floor or reception details and a phone number."
  ],
  [
    "Timing and payment",
    "Orders placed before 4 PM Pakistan time are delivered the same day, usually in 2 to 5 hours, between 9 AM and 1 AM. We accept bank transfer, JazzCash, EasyPaisa and international debit or credit cards. Cash on Delivery is not available."
  ]
];
const FAQS: { q: string; a: string }[] = [
  {
    "q": "What flowers are best to say thank you?",
    "a": "Sunflowers and mixed bouquets feel warm and friendly. Roses suit a more formal or personal thank-you. Tell us your budget on WhatsApp and we will suggest one."
  },
  {
    "q": "Can I send thank-you flowers to someone in another area of Lahore?",
    "a": "Yes. Give us the full delivery address and a phone number. Delivery is a flat Rs. 800 across listed Lahore areas."
  },
  {
    "q": "Can I send the flowers anonymously?",
    "a": "Yes. Tell us on WhatsApp that you want the card left unsigned or signed with a name of your choice."
  },
  {
    "q": "How soon can the thank-you flowers arrive?",
    "a": "Orders placed before 4 PM Pakistan time are delivered the same day, usually in 2 to 5 hours."
  }
];
const RELATED: [string, string][] = [["/bouquets-under-2000", "Bouquets under Rs. 2,000"], ["/occasions/congratulations", "Congratulations flowers"], ["/sunflower-bouquet-lahore", "Sunflower bouquets"], ["/delivery-areas", "Delivery areas"]];
const WA_TEXT = "Hello Lahore Bouquet! I would like to send thank-you flowers.";
const OCCASIONS = ["Thank You", "Just Because"];

export default async function Page() {
  const sanity = await getSanityProducts();
  const all = sanity.length > 0 ? sanity : ALL_PRODUCTS;
  const matched = all.filter((p) => p.occasion && p.occasion.some((o) => OCCASIONS.includes(o)));
  const filler = all
    .filter((p) => !matched.includes(p) && ["Bouquets", "Roses", "Sunflowers"].includes(p.category ?? ""))
    .filter((p) => typeof p.price === "number" && p.price <= 3000)
    .sort((a, b) => (a.price ?? 0) - (b.price ?? 0));
  const items = [...matched, ...filler].slice(0, 8);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
      { "@type": "ListItem", position: 2, name: H1, item: `${SITE_URL}/occasions/thank-you` },
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
        <span className="text-[#8B1E2D] font-semibold">Thank You</span>
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
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Thank-you and just-because flowers</h2>
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
