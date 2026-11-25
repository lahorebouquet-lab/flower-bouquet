import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Camera, MessageCircle, HelpCircle } from "lucide-react";
import { SITE_URL } from "@/lib/business";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo("/send-flowers-to-islamabad-from-abroad", {
  title: { absolute: "Send Flowers to Islamabad from Abroad | Same-Day" },
  description: "Send flowers to Islamabad from the UK, USA, UAE, Saudi Arabia or Canada. Pay with an international card, approve a photo, delivery in 2 to 5 hours.",
  alternates: { canonical: `${SITE_URL}/send-flowers-to-islamabad-from-abroad` },
  openGraph: {
    title: "Send Flowers to Islamabad from Abroad | Same-Day",
    description: "Send flowers to Islamabad from the UK, USA, UAE, Saudi Arabia or Canada. Pay with an international card, approve a photo, delivery in 2 to 5 hours.",
    url: `${SITE_URL}/send-flowers-to-islamabad-from-abroad`,
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: "Send Flowers to Islamabad from Abroad | Same-Day" }],
  },
});

const H1 = "Send Flowers to Islamabad from Abroad";
const INTRO = "Living overseas and want to surprise family in Islamabad? Choose a bouquet, pay with your international card and give us the address. Our local delivery partner brings it the same day and we send you a photo first.";
const GUIDE_TITLE = "How Sending Flowers to Islamabad Works";
const GUIDE: [string, string][] = [
  [
    "Choose and pay",
    "Pick a bouquet on our website or message us on WhatsApp at 0310-4225974. We accept bank transfer, JazzCash, EasyPaisa and international debit or credit cards. Cash on Delivery is not available. Your order is confirmed once payment is verified."
  ],
  [
    "Give the delivery details",
    "Share the recipient's full address in Islamabad, a phone number and your message. Delivery is a flat Rs. 800 in the sectors we list, and we confirm the fee on WhatsApp for areas not listed."
  ],
  [
    "Approve a photo",
    "Before dispatch we send a photo of the finished bouquet on WhatsApp so you can approve it or ask for a change."
  ],
  [
    "Delivery",
    "Orders are delivered the same day, usually in 2 to 5 hours, through our local delivery partner in F-6, F-7, F-8, F-10, F-11, G-6, G-7, G-9, G-10, G-11, G-13, I-8, I-9, I-10, E-7, E-11, D-12, B-17, Blue Area, DHA Islamabad, Bahria Town, Gulberg Greens and Bahria Enclave. For Eid, Valentine's Day or Mother's Day, book 2 to 3 days early."
  ]
];
const FAQS: { q: string; a: string }[] = [
  {
    "q": "Can I send flowers to Islamabad from the UK, USA or UAE?",
    "a": "Yes. Order on our website or WhatsApp, pay with your international card and we arrange delivery in Islamabad."
  },
  {
    "q": "How long does delivery in Islamabad take?",
    "a": "Usually 2 to 5 hours after your order is confirmed. You can also choose a date in advance."
  },
  {
    "q": "Can I add a message card?",
    "a": "Yes. Send your message with the order and we include it with the bouquet."
  },
  {
    "q": "What if the recipient is not at home?",
    "a": "Share a second phone number. The delivery partner calls before arriving and we coordinate a convenient time."
  },
  {
    "q": "Do you deliver in Rawalpindi?",
    "a": "Please message us on WhatsApp with the address and we will confirm whether we can deliver there."
  }
];
const RELATED: [string, string][] = [["/flower-delivery-islamabad", "Flower delivery in Islamabad"], ["/islamabad/bouquets", "Islamabad bouquets"], ["/islamabad/flower-prices", "Islamabad flower prices"], ["/send-flowers-to-lahore-from-abroad", "Send flowers to Lahore from abroad"]];
const WA_TEXT = "Hello Lahore Bouquet! I am abroad and would like to send flowers to Islamabad.";

export default async function Page() {

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
      { "@type": "ListItem", position: 2, name: H1, item: `${SITE_URL}/send-flowers-to-islamabad-from-abroad` },
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
        <span className="text-[#8B1E2D] font-semibold">Send Flowers to Islamabad from Abroad</span>
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
