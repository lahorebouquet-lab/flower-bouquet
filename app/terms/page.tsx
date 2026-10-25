import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/business";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo("/terms", {
  title: {
    absolute: "Terms of Service | Lahore Bouquet",
  },
  description: "The terms governing orders, delivery, payments and returns at Lahore Bouquet, Lahore's online florist.",
  alternates: {
    canonical: `${SITE_URL}/terms`,
  },
  openGraph: {
    title: "Terms of Service | Lahore Bouquet",
    description: "The terms governing orders, delivery, payments and returns at Lahore Bouquet.",
    url: `${SITE_URL}/terms`,
  }
});

const termsSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/terms#webpage`,
      url: `${SITE_URL}/terms`,
      name: "Terms of Service | Lahore Bouquet",
      isPartOf: { "@id": `${SITE_URL}#website` },
      datePublished: "2026-10-15",
      dateModified: "2026-10-15",
    },
  ],
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-10 text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(termsSchema) }}
      />
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Terms of Service</span>
      </nav>

      <section className="space-y-4">
        <div className="w-10 h-[2px] bg-[#C6A15B]" />
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B0B0B] leading-tight">
          Terms of Service
        </h1>
        <p className="text-xs text-[#777777]">Last updated: October 15, 2026</p>
        <p className="text-sm leading-relaxed">
          By ordering from <Link href="/" className="text-[#8B1E2D] font-semibold hover:underline">Lahore Bouquet</Link>, you agree to these terms.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">1. Orders</h2>
        <p className="text-sm leading-relaxed">
          Orders are placed through our website checkout or WhatsApp (0310-4225974). Your order is confirmed once we acknowledge it and payment is verified. Product prices on product pages are the final prices; delivery across Lahore is free.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">2. Delivery</h2>
        <p className="text-sm leading-relaxed">
          We deliver across Lahore, typically within 2–5 hours for same-day orders placed before our daily cutoff. Delivery times may vary by area, stock availability and order volume, especially on Valentine's Day, Eid and Mother's Day. Please provide a complete address and an reachable phone number for the recipient.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">3. Payments</h2>
        <p className="text-sm leading-relaxed">
          We accept Cash on Delivery, bank transfer, JazzCash, EasyPaisa and international cards. For bank/e-wallet payments, please share your payment screenshot on WhatsApp so we can verify and dispatch your order without delay.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">4. Freshness & Substitutions</h2>
        <p className="text-sm leading-relaxed">
          Every bouquet is hand-tied fresh on the day of delivery, and we send you a photo on WhatsApp for approval before dispatch. If a specific flower is unavailable, we will suggest a substitution of equal or greater value and will not change your order without your approval.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">5. Returns & Refunds</h2>
        <p className="text-sm leading-relaxed">
          Fresh flowers are perishable and cannot be returned. If your order arrives damaged, incorrect or significantly different from the approved photo, contact us on WhatsApp within 24 hours with photos and we will replace it or refund you.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">6. Contact</h2>
        <p className="text-sm leading-relaxed">
          Questions about these terms? Reach us via our <Link href="/contact" className="text-[#8B1E2D] font-semibold hover:underline">contact page</Link> or WhatsApp 0310-4225974.
        </p>
      </section>
    </main>
  );
}
