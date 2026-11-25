import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Camera, MessageCircle, HelpCircle } from "lucide-react";
import { SITE_URL } from "@/lib/business";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo("/faq", {
  title: { absolute: "Flower Delivery FAQ | Lahore & Islamabad Orders" },
  description: "Answers to common questions about ordering flowers from Lahore Bouquet: delivery times, charges, payment, midnight slots, photos, Islamabad and overseas orders.",
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    title: "Flower Delivery FAQ | Lahore & Islamabad Orders",
    description: "Answers to common questions about ordering flowers from Lahore Bouquet: delivery times, charges, payment, midnight slots, photos, Islamabad and overseas orders.",
    url: `${SITE_URL}/faq`,
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: "Flower Delivery FAQ | Lahore & Islamabad Orders" }],
  },
});

const H1 = "Flower Delivery FAQ: Lahore and Islamabad";
const INTRO = "Quick answers about ordering flowers from Lahore Bouquet: how fast we deliver, what it costs, how to pay, and what happens before and after your order.";
const GUIDE_TITLE = "Ordering at a Glance";
const GUIDE: [string, string][] = [
  [
    "Where we deliver",
    "Across listed areas of Lahore, and in listed sectors of Islamabad through our local delivery partner."
  ],
  [
    "Hours and timing",
    "Open daily from 9 AM to 1 AM. Orders placed before 4 PM Pakistan time are delivered the same day, usually in 2 to 5 hours."
  ],
  [
    "Cost",
    "Hand-tied bouquets start from Rs. 1,239. Delivery is a flat Rs. 800 across listed areas of Lahore and Islamabad."
  ],
  [
    "Payment",
    "Bank transfer, JazzCash, EasyPaisa and international cards. Cash on Delivery is not available."
  ]
];
const FAQS: { q: string; a: string }[] = [
  {
    "q": "Do you deliver flowers on the same day in Lahore?",
    "a": "Yes. Orders placed before 4 PM Pakistan time are delivered the same day, usually in 2 to 5 hours."
  },
  {
    "q": "Do you deliver in Islamabad?",
    "a": "Yes, in listed sectors including F-6, F-7, F-8, G-11, DHA Islamabad and Bahria Town, through our local delivery partner. Delivery usually takes 2 to 5 hours."
  },
  {
    "q": "How much is delivery?",
    "a": "Delivery is a flat Rs. 800 across listed areas of Lahore and Islamabad. For areas not listed, we confirm the fee on WhatsApp before you pay."
  },
  {
    "q": "How much does a bouquet cost?",
    "a": "Hand-tied bouquets start from Rs. 1,239. Medium rose bouquets are Rs. 2,600 to 3,800 and large signature arrangements are Rs. 7,499."
  },
  {
    "q": "Can I get a midnight delivery?",
    "a": "Yes in Lahore. The midnight slot is 11:30 PM to 12:15 AM for birthdays and anniversaries. Book on WhatsApp before 8 PM."
  },
  {
    "q": "Can I see the bouquet before it is delivered?",
    "a": "Yes. Our florist sends a photo of the finished bouquet on WhatsApp for your approval before dispatch."
  },
  {
    "q": "What payment methods do you accept?",
    "a": "Bank transfer, JazzCash, EasyPaisa and international debit or credit cards. Cash on Delivery is not available."
  },
  {
    "q": "Can I send flowers from abroad?",
    "a": "Yes. Order on our website or WhatsApp and pay with your international card. We deliver in Lahore and Islamabad and send you a photo first."
  },
  {
    "q": "Can I add a message card?",
    "a": "Yes. Send your message with the order and we include it on a card with the bouquet."
  },
  {
    "q": "Can I schedule delivery for a specific date?",
    "a": "Yes. Choose the date at checkout or tell us on WhatsApp. For Eid, Valentine's Day and Mother's Day, book 2 to 3 days early."
  },
  {
    "q": "What if the recipient is not at home?",
    "a": "Share the recipient's phone number. The rider calls before arriving, and we coordinate a convenient time if needed."
  },
  {
    "q": "Do you have a shop I can visit?",
    "a": "No. We are a delivery-only florist, so all orders are placed on our website or WhatsApp at 0310-4225974."
  },
  {
    "q": "How do I order?",
    "a": "Choose a bouquet on our website, or message us on WhatsApp with the bouquet name, the delivery address and the date. We confirm the price and time before you pay."
  },
  {
    "q": "How do I track my order?",
    "a": "Use our order tracking page, or message us on WhatsApp with your order details."
  }
];
const RELATED: [string, string][] = [["/payment-methods", "Payment methods"], ["/delivery-areas", "Delivery areas"], ["/policies", "Policies"], ["/track-order", "Track your order"], ["/flower-delivery-islamabad", "Islamabad delivery"]];
const WA_TEXT = "Hello Lahore Bouquet! I have a question about ordering flowers.";

export default async function Page() {

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
      { "@type": "ListItem", position: 2, name: H1, item: `${SITE_URL}/faq` },
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
        <span className="text-[#8B1E2D] font-semibold">FAQ</span>
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
