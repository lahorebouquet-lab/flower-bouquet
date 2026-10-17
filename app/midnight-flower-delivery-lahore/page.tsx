import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Moon, Clock, Camera, MessageCircle, HelpCircle, Sparkles } from "lucide-react";
import { SITE_URL } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Midnight Flower Delivery Lahore | Surprise at 12 AM",
  },
  description:
    "Surprise your loved ones at midnight in Lahore! Fresh flower bouquets, cakes and gifts delivered at 12 AM. Book your midnight surprise delivery today.",
  alternates: {
    canonical: `${SITE_URL}/midnight-flower-delivery-lahore`,
  },
  openGraph: {
    title: "Midnight Flower Delivery Lahore | Surprise at 12 AM",
    description:
      "Surprise your loved ones at midnight in Lahore! Fresh flower bouquets, cakes and gifts delivered at 12 AM.",
    url: `${SITE_URL}/midnight-flower-delivery-lahore`,
    type: "website",
    locale: "en_PK",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Midnight Flower Delivery Lahore",
      },
    ],
  },
};

const FAQS = [
  {
    q: "How does midnight flower delivery work in Lahore?",
    a: "Choose your bouquet and select the Midnight Surprise slot (11:30 PM – 12:15 AM) at checkout, or book on WhatsApp at +92 310 4225974. Our rider arrives right around midnight with fresh flowers, cake if you add one, and your handwritten message card.",
  },
  {
    q: "How early should I book a midnight delivery?",
    a: "We recommend booking at least 4–6 hours before midnight so our florists can prepare everything fresh. For Valentine's Day, New Year and Eid nights, book 2–3 days early — midnight slots fill up fast.",
  },
  {
    q: "Which areas of Lahore do you cover for midnight delivery?",
    a: "We deliver midnight surprises across all major Lahore areas including DHA, Gulberg, Bahria Town, Model Town, Johar Town, Cantt, Wapda Town and Lake City. Share the address on WhatsApp and we will confirm instantly.",
  },
  {
    q: "Can I add a cake and message card to my midnight order?",
    a: "Yes! Every midnight order can include a fresh cake, chocolates, and a complimentary handwritten message card. Tell us your message on WhatsApp or at checkout and we will handwrite it beautifully.",
  },
  {
    q: "Will I see the bouquet before it is delivered?",
    a: "Absolutely. Before our rider leaves, we send you a real photo of your finished bouquet on WhatsApp for approval. You see exactly what will arrive at midnight.",
  },
  {
    q: "What if nobody answers the door at midnight?",
    a: "Share the recipient's phone number when you order. Our rider calls a few minutes before arriving to coordinate. If plans change, message us on WhatsApp and we will reschedule the surprise.",
  },
  {
    q: "What is midnight flower delivery in Lahore?",
    a: "Midnight flower delivery in Lahore is our special surprise service — we bring fresh bouquets, cakes and gifts to your loved one's doorstep right at 12 AM. It's the perfect way to be the very first to wish them on their birthday or anniversary.",
  },
  {
    q: "Can I trust midnight flower delivery in Lahore to arrive on time?",
    a: "Absolutely — that's the whole point! Our rider plans the route in advance and calls a few minutes before arriving, so your midnight flower delivery in Lahore lands right around 12 AM. Just share the recipient's phone number when you order and we'll coordinate everything.",
  },
  {
    q: "What can I include in my midnight flower delivery in Lahore order?",
    a: "Every midnight flower delivery in Lahore can include fresh flowers, a cake, chocolates, and a complimentary handwritten message card. Tell us your message on WhatsApp and we will handwrite it beautifully.",
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

export default function MidnightDeliveryPage() {
  return (
    <main className="min-h-screen bg-[#F8F3EA]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-[#0B0B0B] text-white px-4 sm:px-6 py-14 sm:py-20">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8B1E2D] text-xs font-semibold tracking-wide">
            <Moon className="w-3.5 h-3.5" />
            MIDNIGHT SURPRISE DELIVERY
          </div>
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold">
            Midnight Flower Delivery in Lahore
          </h1>
          <p className="text-[#BDBDBD] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Make birthdays, anniversaries and special nights unforgettable with midnight flower delivery in Lahore.
            Fresh bouquets, cakes and gifts delivered right at <strong className="text-[#C6A15B]">12 AM</strong> —
            anywhere in Lahore.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a
              href="https://wa.me/923104225974?text=Hi!%20I%20want%20to%20book%20a%20midnight%20flower%20delivery%20in%20Lahore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-semibold hover:bg-[#a32438] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Book Midnight Delivery
            </a>
            <Link
              href="/bouquets"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#C6A15B]/50 text-[#C6A15B] text-sm font-semibold hover:bg-[#C6A15B]/10 transition-colors"
            >
              Browse Bouquets
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0B0B0B] text-center">
          How Your Midnight Surprise Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-2">
            <Clock className="w-8 h-8 text-[#8B1E2D]" />
            <h3 className="font-semibold text-[#0B0B0B]">1. Pick your slot</h3>
            <p className="text-xs leading-relaxed text-[#2A2A2A]">
              Choose the Midnight Surprise slot (11:30 PM – 12:15 AM) when ordering, or simply
              tell us on WhatsApp. Book 4–6 hours ahead for the freshest preparation.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-2">
            <Camera className="w-8 h-8 text-[#8B1E2D]" />
            <h3 className="font-semibold text-[#0B0B0B]">2. Approve the photo</h3>
            <p className="text-xs leading-relaxed text-[#2A2A2A]">
              Our florists hand-tie your bouquet fresh in the evening and send you its real photo
              on WhatsApp. Nothing leaves until you love it.
            </p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-2">
            <Sparkles className="w-8 h-8 text-[#8B1E2D]" />
            <h3 className="font-semibold text-[#0B0B0B]">3. The midnight knock</h3>
            <p className="text-xs leading-relaxed text-[#2A2A2A]">
              Our rider arrives right around midnight with flowers, cake and your handwritten card —
              the perfect start to their special day.
            </p>
          </div>
        </div>
      </section>

      {/* Perfect for */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 space-y-6">
        <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0B0B0B] text-center">
          Perfect Midnight Surprises For
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {[
            { t: "Birthdays", d: "Be the first to wish them at 12 AM" },
            { t: "Anniversaries", d: "Red roses at midnight, pure romance" },
            { t: "New Year", d: "Welcome the year with fresh blooms" },
            { t: "Just Because", d: "The best surprises need no reason" },
          ].map((item) => (
            <div
              key={item.t}
              className="p-5 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm text-center space-y-1"
            >
              <h3 className="font-semibold text-[#0B0B0B]">{item.t}</h3>
              <p className="text-xs text-[#777777]">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why midnight flower delivery in Lahore — SEO content */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-12">
        <div className="space-y-4 text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0B0B0B] text-center">
            Why Choose Midnight Flower Delivery in Lahore
          </h2>
          <p>
            There&apos;s something magical about a knock on the door at midnight. With midnight flower
            delivery in Lahore, you get to be the first person to make them smile on their special day.
            Our midnight flower delivery in Lahore service covers birthdays, anniversaries, New Year —
            and those just-because moments that deserve something extraordinary.
          </p>
          <p>
            Every midnight flower delivery in Lahore order is prepared fresh in the evening — never
            pre-made. Our florists hand-tie your bouquet, we send you its real photo on WhatsApp for
            approval, and then our rider heads out so everything arrives right around 12 AM. Book on
            WhatsApp at +92 310 4225974 and let&apos;s plan your surprise together.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 pb-16">
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-6">
          <div className="flex items-center gap-2 text-[#0B0B0B]">
            <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
            <h2 className="font-playfair text-2xl font-bold">Midnight Delivery FAQs</h2>
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
