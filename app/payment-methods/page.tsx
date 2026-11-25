import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Camera, MessageCircle, HelpCircle } from "lucide-react";
import { SITE_URL } from "@/lib/business";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo("/payment-methods", {
  title: { absolute: "Payment Methods | Bank Transfer, JazzCash, EasyPaisa, Card" },
  description: "How to pay Lahore Bouquet: bank transfer, JazzCash, EasyPaisa and international cards. Cash on Delivery is not available. Order confirmed once paid.",
  alternates: { canonical: `${SITE_URL}/payment-methods` },
  openGraph: {
    title: "Payment Methods | Bank Transfer, JazzCash, EasyPaisa, Card",
    description: "How to pay Lahore Bouquet: bank transfer, JazzCash, EasyPaisa and international cards. Cash on Delivery is not available. Order confirmed once paid.",
    url: `${SITE_URL}/payment-methods`,
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: "Payment Methods | Bank Transfer, JazzCash, EasyPaisa, Card" }],
  },
});

const H1 = "Payment Methods";
const INTRO = "Pay for your flowers by bank transfer, JazzCash, EasyPaisa or international debit and credit card. Your order is confirmed once payment is verified.";
const GUIDE_TITLE = "How Payment Works";
const GUIDE: [string, string][] = [
  [
    "Accepted methods",
    "Online bank transfer, JazzCash, EasyPaisa and international debit or credit cards (Visa and Mastercard). Cash on Delivery is not available."
  ],
  [
    "When your order is confirmed",
    "We confirm your order once we acknowledge it and payment is verified. You will receive a photo of the finished bouquet on WhatsApp before dispatch."
  ],
  [
    "Paying from outside Pakistan",
    "Use an international card at checkout. If you prefer, message us on WhatsApp at 0310-4225974 and we will arrange a payment link that works from your country."
  ],
  [
    "What you pay",
    "The bouquet price plus a flat Rs. 800 delivery charge across listed areas of Lahore and Islamabad. For areas not listed, we confirm the fee on WhatsApp before you pay."
  ]
];
const FAQS: { q: string; a: string }[] = [
  {
    "q": "Is Cash on Delivery available?",
    "a": "No. Payment is made online before dispatch by bank transfer, JazzCash, EasyPaisa or international card."
  },
  {
    "q": "Can I pay with a foreign card?",
    "a": "Yes. International debit and credit cards are accepted."
  },
  {
    "q": "Are there extra charges at checkout?",
    "a": "No hidden charges. You pay the bouquet price and the Rs. 800 delivery fee, and we confirm the total before you pay."
  },
  {
    "q": "What if I need to cancel or change an order?",
    "a": "Message us on WhatsApp as soon as possible. Our policies page explains cancellations and refunds."
  }
];
const RELATED: [string, string][] = [["/faq", "FAQ"], ["/policies", "Policies"], ["/terms", "Terms"], ["/send-flowers-to-lahore-from-abroad", "Send flowers from abroad"]];
const WA_TEXT = "Hello Lahore Bouquet! I have a question about payment.";

export default async function Page() {

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
      { "@type": "ListItem", position: 2, name: H1, item: `${SITE_URL}/payment-methods` },
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
        <span className="text-[#8B1E2D] font-semibold">Payment Methods</span>
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
