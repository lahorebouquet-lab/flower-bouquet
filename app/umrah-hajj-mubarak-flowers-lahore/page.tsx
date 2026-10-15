import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Truck, Camera, MessageCircle, HelpCircle, Flower2 } from "lucide-react";
import { SITE_URL } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Umrah & Hajj Mubarak Flowers Lahore | Welcome Home Bouquets",
  },
  description:
    "Welcome home your loved ones from Umrah or Hajj with fresh flower bouquets in Lahore. Elegant white and green arrangements, same-day delivery across Lahore.",
  alternates: {
    canonical: `${SITE_URL}/umrah-hajj-mubarak-flowers-lahore`,
  },
  openGraph: {
    title: "Umrah & Hajj Mubarak Flowers Lahore | Welcome Home Bouquets",
    description:
      "Welcome home your loved ones from Umrah or Hajj with fresh flower bouquets in Lahore. Same-day delivery.",
    url: `${SITE_URL}/umrah-hajj-mubarak-flowers-lahore`,
    type: "website",
    locale: "en_PK",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Umrah and Hajj Mubarak Flowers Lahore",
      },
    ],
  },
};

const FAQS = [
  {
    q: "What flowers are best for welcoming someone from Umrah or Hajj?",
    a: "White roses, lilies and mixed white-and-green arrangements are the most loved choice — they symbolize peace and purity. We can also add green accents to match the spirit of the occasion.",
  },
  {
    q: "Can you deliver to the airport for their arrival?",
    a: "We deliver across Lahore including airport-area meetups. Share the flight arrival time on WhatsApp at +92 310 4225974 and we will coordinate the bouquet to reach you before they land.",
  },
  {
    q: "How fast can you deliver Umrah Mubarak flowers?",
    a: "Standard delivery takes 2 to 5 hours anywhere in Lahore after your order is confirmed. If you know the arrival date in advance, you can also schedule delivery for that exact day.",
  },
  {
    q: "Can I include a personalized Umrah Mubarak message?",
    a: "Yes! Every order includes a complimentary handwritten message card. Write your Umrah Mubarak or Hajj Mubarak wishes at checkout or on WhatsApp and we will include it beautifully.",
  },
  {
    q: "Do you offer flower arrangements for home welcome décor?",
    a: "Yes, we can prepare elegant welcome-home arrangements — door garlands, table centerpieces and room décor with fresh flowers. Message us on WhatsApp with your requirements and we will customize it.",
  },
  {
    q: "Will I see the bouquet before delivery?",
    a: "Absolutely. Before our rider leaves, we send you a real photo of your finished bouquet on WhatsApp for approval.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function UmrahHajjFlowersPage() {
  return (
    <main className="min-h-screen bg-[#F8F3EA]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#0B0B0B] text-white px-4 sm:px-6 py-14 sm:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0E7C5B] text-xs font-semibold tracking-wide">
            <Flower2 className="w-3.5 h-3.5" />
            UMRAH & HAJJ MUBARAK
          </div>
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold">
            Umrah & Hajj Mubarak Flowers in Lahore
          </h1>
          <p className="text-[#BDBDBD] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Welcome your loved ones home from their blessed journey with elegant fresh flower
            bouquets — delivered same-day anywhere in Lahore.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href="https://wa.me/923104225974?text=Hi!%20I%20want%20Umrah%20Mubarak%20flowers%20delivered%20in%20Lahore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-semibold hover:bg-[#a32438] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Order on WhatsApp
            </a>
            <Link
              href="/roses/white-roses"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#C6A15B]/50 text-[#C6A15B] text-sm font-semibold hover:bg-[#C6A15B]/10 transition-colors"
            >
              White Rose Bouquets
            </Link>
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0B0B0B] text-center">
          A Blessed Welcome, Done Right
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-2">
            <Heart className="w-8 h-8 text-[#8B1E2D]" />
            <h3 className="font-semibold text-[#0B0B0B]">Meaningful arrangements</h3>
            <p className="text-xs leading-relaxed text-[#2A2A2A]">
              White roses, lilies and soft green fillers — arrangements that honor the sanctity
              of the occasion, hand-tied fresh on the day of delivery.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-2">
            <Truck className="w-8 h-8 text-[#8B1E2D]" />
            <h3 className="font-semibold text-[#0B0B0B]">Airport & home delivery</h3>
            <p className="text-xs leading-relaxed text-[#2A2A2A]">
              Deliver to their home before they arrive, or coordinate an airport-area handover.
              Share the flight details and we handle the timing.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-2">
            <Camera className="w-8 h-8 text-[#8B1E2D]" />
            <h3 className="font-semibold text-[#0B0B0B]">Photo before dispatch</h3>
            <p className="text-xs leading-relaxed text-[#2A2A2A]">
              We send you a real photo of the finished bouquet on WhatsApp for approval before
              our rider leaves — perfect, especially when you are ordering from abroad.
            </p>
          </div>
        </div>
      </section>

      {/* Popular picks */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 space-y-6">
        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0B0B0B] text-center">
          Most Loved for Umrah & Hajj Mubarak
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          <Link
            href="/roses/white-roses"
            className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-colors shadow-sm"
          >
            <h3 className="font-semibold text-[#0B0B0B]">Pure White Rose Bouquets</h3>
            <p className="text-xs text-[#777777] mt-1">
              The classic Umrah Mubarak welcome — peace, purity and love in every stem.
            </p>
          </Link>
          <Link
            href="/bouquets"
            className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-colors shadow-sm"
          >
            <h3 className="font-semibold text-[#0B0B0B]">White & Green Mixed Bouquets</h3>
            <p className="text-xs text-[#777777] mt-1">
              Elegant mixed arrangements with green accents for the blessed occasion.
            </p>
          </Link>
          <Link
            href="/gifts-and-cakes"
            className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-colors shadow-sm"
          >
            <h3 className="font-semibold text-[#0B0B0B]">Flowers with Dates & Gifts</h3>
            <p className="text-xs text-[#777777] mt-1">
              Pair your bouquet with premium dates and sweets for a complete welcome gift.
            </p>
          </Link>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-[#0B0B0B]">
            <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
            <h2 className="font-playfair text-2xl font-bold">Umrah & Hajj Flower FAQs</h2>
          </div>
          <div className="space-y-4 text-xs text-[#2A2A2A] leading-relaxed">
            {FAQS.map((faq, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2] space-y-1.5">
                <h3 className="font-semibold text-[#0B0B0B] text-sm">{faq.q}</h3>
                <p>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
