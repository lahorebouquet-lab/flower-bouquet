import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Script from "next/script";
import {
  Camera,
  MessageCircle,
  Star,
  Flower2,
  Check,
} from "lucide-react";
import { SITE_URL } from "@/lib/business";
import WhatsAppButton from "./WhatsAppButton";

export const metadata: Metadata = {
  title: {
    absolute: "Fresh Flower Bouquets in Lahore | Lahore Bouquet",
  },
  description: "Fresh hand-tied bouquets from Rs. 1,239.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: `${SITE_URL}/order-flowers-lahore`,
  },
  // Override the layout's site-wide OG/Twitter descriptions, which carry
  // same-day/delivery wording — this page must not mention delivery at all.
  openGraph: {
    title: "Fresh Flower Bouquets in Lahore | Lahore Bouquet",
    description: "Fresh hand-tied bouquets from Rs. 1,239.",
    url: `${SITE_URL}/order-flowers-lahore`,
    siteName: "Lahore Bouquet",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fresh Flower Bouquets in Lahore | Lahore Bouquet",
    description: "Fresh hand-tied bouquets from Rs. 1,239.",
  },
};

const WA_NUMBER = "923104225974";

function waLink(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

const BESTSELLERS = [
  {
    name: "Aesthetic Bloom",
    detail: "7 fresh roses",
    price: "Rs. 6,499",
  },
  {
    name: "Mint Oasis",
    detail: "white blooms",
    price: "Rs. 8,999",
  },
  {
    name: "Velvet Crush",
    detail: "red roses",
    price: "Rs. 9,999",
  },
  {
    name: "Ivory Aura",
    detail: "white roses & chrysanthemums",
    price: "Rs. 10,499",
  },
];

const BUDGETS = [
  { label: "Under Rs. 2,000", message: "My budget is under Rs. 2,000." },
  { label: "Under Rs. 3,500", message: "My budget is under Rs. 3,500." },
  { label: "Premium Rs. 5,000+", message: "I want a premium bouquet (Rs. 5,000+)." },
];

const OCCASIONS = ["Birthday", "Anniversary", "Midnight Surprise", "Get Well Soon"];

const REVIEWS = [
  {
    name: "Mian Waiz",
    quote:
      "Ordered a chocolate bouquet — excellent quality and beautiful presentation!",
  },
  {
    name: "Shah Rajpoot",
    quote:
      "I ordered a red rose bouquet today — honestly, I had a really good experience!",
  },
  {
    name: "Tayyaba",
    quote:
      "Your service was professional and reasonably priced. Highly satisfied and would definitely recommend!",
  },
];

const FAQS = [
  {
    q: "How can I pay?",
    a: "Pay by bank transfer, JazzCash, EasyPaisa or international cards.",
  },
];

const BTN_GREEN =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-green-900/20 transition active:scale-[0.98]";

export default function OrderFlowersLahorePage() {
  return (
    <div className="min-h-screen bg-white text-[#1d1d1f]">
      {/* REPLACE AW-XXXXXXXXX WITH YOUR GOOGLE ADS TAG ID */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"
      />
      <Script id="google-ads-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          if (typeof gtag === 'function') {
            gtag('config', 'AW-XXXXXXXXX');
          }
        `}
      </Script>

      {/* ---------- 1. HERO ---------- */}
      <header className="bg-[#FDF2F4] px-5 pb-8 pt-6 text-center">
        <p className="font-playfair text-2xl font-bold tracking-wide text-[#8B1E2D]">
          Lahore Bouquet
        </p>
        <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8B1E2D]/60">
          Fresh Flowers • Lahore
        </p>

        <h1 className="font-playfair mx-auto mt-6 max-w-md text-4xl font-bold leading-tight text-[#1d1d1f]">
          Fresh Flower Bouquets in Lahore
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-[#55555a]">
          Fresh hand-tied bouquets from Rs. 1,239.
        </p>

        <div className="mt-6">
          <WhatsAppButton
            href={waLink(
              "Hi Lahore Bouquet! I want to order flowers. (From Google Ad)"
            )}
            label="Order on WhatsApp"
            className={`${BTN_GREEN} w-full max-w-sm text-lg`}
          >
            <MessageCircle className="h-6 w-6 shrink-0" aria-hidden="true" />
            Order on WhatsApp
          </WhatsAppButton>
        </div>

        <div className="relative mx-auto mt-7 max-w-md overflow-hidden rounded-3xl shadow-xl shadow-rose-900/10">
          <Image
            src="/images/hero_rose_square.webp"
            alt="Fresh red and white rose bouquet from Lahore Bouquet"
            width={800}
            height={800}
            priority
            sizes="(max-width: 768px) 100vw, 448px"
            className="h-auto w-full object-cover"
          />
        </div>
      </header>

      {/* ---------- 2. TRUST LINE ---------- */}
      <section
        aria-label="Why order with Lahore Bouquet"
        className="border-y border-[#F3D9DE] bg-white px-5 py-4"
      >
        <p className="mx-auto flex max-w-lg items-center justify-center gap-2.5 text-center text-sm font-semibold">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FDF2F4] text-[#8B1E2D]">
            <Camera className="h-5 w-5" aria-hidden="true" />
          </span>
          Photo on WhatsApp before dispatch
        </p>
      </section>

      {/* ---------- 3. BESTSELLERS ---------- */}
      <section className="mx-auto max-w-2xl px-5 py-10">
        <h2 className="font-playfair text-center text-3xl font-bold text-[#8B1E2D]">
          Bestsellers
        </h2>
        <p className="mt-2 text-center text-sm text-[#55555a]">
          Our most-loved bouquets, hand-tied fresh today.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-4">
          {BESTSELLERS.map((item) => (
            <article
              key={item.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-[#F3D9DE] bg-white shadow-sm"
            >
              {/* Photo placeholder — owner will add real photos */}
              <div className="flex aspect-[4/5] flex-col items-center justify-center gap-2 bg-[#FDF2F4] px-3 text-center">
                <Flower2
                  className="h-10 w-10 text-[#8B1E2D]/40"
                  aria-hidden="true"
                />
                <p className="font-playfair text-base font-bold leading-tight text-[#8B1E2D]">
                  {item.name}
                </p>
                <p className="text-[11px] font-medium text-[#8B1E2D]/60">
                  Photo coming soon
                </p>
              </div>
              <div className="flex flex-1 flex-col p-3">
                <h3 className="font-playfair text-base font-bold leading-tight">
                  {item.name}
                </h3>
                <p className="mt-0.5 text-xs text-[#55555a]">{item.detail}</p>
                <p className="mt-2 text-base font-bold text-[#8B1E2D]">
                  {item.price}
                </p>
                <WhatsAppButton
                  href={waLink(
                    `Hi Lahore Bouquet! I want to order ${item.name}. (From Google Ad)`
                  )}
                  label={`Order ${item.name} on WhatsApp`}
                  className="mt-3 inline-flex w-full items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-3 py-2.5 text-[13px] font-bold text-white transition active:scale-[0.98]"
                >
                  <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                  Order on WhatsApp
                </WhatsAppButton>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ---------- 4. BUDGET OPTIONS ---------- */}
      <section className="bg-[#FDF2F4] px-5 py-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-playfair text-center text-3xl font-bold text-[#8B1E2D]">
            Pick Your Budget
          </h2>
          <p className="mt-2 text-center text-sm text-[#55555a]">
            Beautiful bouquets for every budget — tap one and we will help you
            choose.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {BUDGETS.map((budget) => (
              <WhatsAppButton
                key={budget.label}
                href={waLink(
                  `Hi Lahore Bouquet! ${budget.message} (From Google Ad)`
                )}
                label={`Order flowers, budget ${budget.label}`}
                className="flex items-center justify-between gap-2 rounded-2xl border border-[#F3D9DE] bg-white px-5 py-4 text-left shadow-sm transition active:scale-[0.98]"
              >
                <span className="font-playfair text-lg font-bold text-[#8B1E2D]">
                  {budget.label}
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                </span>
              </WhatsAppButton>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 5. HOW IT WORKS ---------- */}
      <section className="mx-auto max-w-2xl px-5 py-10">
        <h2 className="font-playfair text-center text-3xl font-bold text-[#8B1E2D]">
          How It Works
        </h2>
        <ol className="mt-6 space-y-4">
          {[
            {
              step: "1",
              title: "Pick a bouquet",
              text: "Choose a bestseller above, or tell us your budget and occasion on WhatsApp.",
            },
            {
              step: "2",
              title: "We send a photo for approval",
              text: "We hand-tie your bouquet fresh and send you its photo on WhatsApp before dispatch.",
            },
          ].map((item) => (
            <li key={item.step} className="flex gap-4">
              <span className="font-playfair flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#8B1E2D] text-lg font-bold text-white">
                {item.step}
              </span>
              <div>
                <h3 className="font-playfair text-lg font-bold leading-tight">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-[#55555a]">
                  {item.text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* ---------- 6. OCCASIONS ---------- */}
      <section className="bg-[#FDF2F4] px-5 py-10">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-playfair text-center text-3xl font-bold text-[#8B1E2D]">
            For Every Occasion
          </h2>
          <div className="mt-6 grid grid-cols-2 gap-3">
            {OCCASIONS.map((occasion) => (
              <WhatsAppButton
                key={occasion}
                href={waLink(
                  `Hi Lahore Bouquet! I want flowers for a ${occasion}. (From Google Ad)`
                )}
                label={`Order flowers for ${occasion}`}
                className="rounded-2xl border border-[#F3D9DE] bg-white px-4 py-5 text-center shadow-sm transition active:scale-[0.98]"
              >
                <span className="font-playfair block text-lg font-bold text-[#8B1E2D]">
                  {occasion}
                </span>
                <span className="mt-1 block text-xs font-semibold text-[#25D366]">
                  Order on WhatsApp →
                </span>
              </WhatsAppButton>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 7. REVIEWS ---------- */}
      <section className="mx-auto max-w-2xl px-5 py-10">
        <h2 className="font-playfair text-center text-3xl font-bold text-[#8B1E2D]">
          What Customers Say
        </h2>
        <div className="mt-6 space-y-4">
          {REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="rounded-2xl border border-[#F3D9DE] bg-[#FDF2F4] p-5"
            >
              <div
                className="flex gap-0.5 text-[#E8A33D]"
                aria-label="5 out of 5 stars"
              >
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-current"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-3 text-[15px] leading-relaxed">
                “{review.quote}”
              </blockquote>
              <figcaption className="mt-3 text-sm font-bold text-[#8B1E2D]">
                — {review.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ---------- 8. FAQ ---------- */}
      <section className="mx-auto max-w-2xl px-5 py-10">
        <h2 className="font-playfair text-center text-3xl font-bold text-[#8B1E2D]">
          Quick Answers
        </h2>
        <div className="mt-6 space-y-3">
          {FAQS.map((faq) => (
            <details
              key={faq.q}
              className="group rounded-2xl border border-[#F3D9DE] bg-white px-5 py-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 text-[15px] font-bold">
                {faq.q}
                <span className="font-playfair shrink-0 text-xl text-[#8B1E2D] transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-2 text-sm leading-relaxed text-[#55555a]">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* ---------- 10. FINAL CTA ---------- */}
      <section className="bg-[#8B1E2D] px-5 py-12 text-center text-white">
        <h2 className="font-playfair mx-auto max-w-md text-3xl font-bold leading-tight">
          Order Fresh Flowers Now
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/80">
          Fresh hand-tied bouquets from Rs. 1,239.
        </p>
        <div className="mt-6">
          <WhatsAppButton
            href={waLink(
              "Hi Lahore Bouquet! I want to order flowers. (From Google Ad)"
            )}
            label="Order on WhatsApp"
            className={`${BTN_GREEN} w-full max-w-sm text-lg`}
          >
            <MessageCircle className="h-6 w-6 shrink-0" aria-hidden="true" />
            Order on WhatsApp
          </WhatsAppButton>
        </div>
        <p className="mt-4 flex items-center justify-center gap-1.5 text-xs font-medium text-white/70">
          <Check className="h-4 w-4" aria-hidden="true" />
          Photo approval on WhatsApp before dispatch
        </p>
      </section>

      {/* Spacer so the sticky mobile button never covers the final CTA */}
      <div className="h-20 bg-white md:hidden" aria-hidden="true" />

      {/* ---------- STICKY MOBILE WHATSAPP BUTTON ---------- */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-green-600/20 bg-white/95 px-4 py-3 backdrop-blur md:hidden">
        <WhatsAppButton
          href={waLink(
            "Hi Lahore Bouquet! I want to order flowers. (From Google Ad)"
          )}
          label="Order on WhatsApp"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-base font-bold text-white shadow-lg transition active:scale-[0.98]"
        >
          <MessageCircle className="h-5 w-5 shrink-0" aria-hidden="true" />
          Order on WhatsApp
        </WhatsAppButton>
      </div>
    </div>
  );
}
