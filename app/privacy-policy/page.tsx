import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/business";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo("/privacy-policy", {
  title: {
    absolute: "Privacy Policy | Lahore Bouquet",
  },
  description: "How Lahore Bouquet collects, uses and protects your personal information when you order flowers online in Lahore.",
  alternates: {
    canonical: `${SITE_URL}/privacy-policy`,
  },
  openGraph: {
    title: "Privacy Policy | Lahore Bouquet",
    description: "How Lahore Bouquet collects, uses and protects your personal information.",
    url: `${SITE_URL}/privacy-policy`,
  }
});

const privacySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/privacy-policy#webpage`,
      url: `${SITE_URL}/privacy-policy`,
      name: "Privacy Policy | Lahore Bouquet",
      isPartOf: { "@id": `${SITE_URL}#website` },
      datePublished: "2026-10-15",
      dateModified: "2026-10-15",
    },
  ],
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-10 text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(privacySchema) }}
      />
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Privacy Policy</span>
      </nav>

      <section className="space-y-4">
        <div className="w-10 h-[2px] bg-[#C6A15B]" />
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B0B0B] leading-tight">
          Privacy Policy
        </h1>
        <p className="text-xs text-[#777777]">Last updated: October 15, 2026</p>
        <p className="text-sm leading-relaxed">
          Lahore Bouquet ("we", "us") respects your privacy. This policy explains what information we collect when you use{" "}
          <Link href="/" className="text-[#8B1E2D] font-semibold hover:underline">lahorebouquet.com</Link>, and how we use and protect it.
        </p>
      </section>

      <section className="bg-[#F8F3EA] border border-[#E5DED2] rounded-2xl p-6 sm:p-8 space-y-3">
        <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">Summary</h2>
        <div className="text-sm text-[#2A2A2A] leading-relaxed space-y-2">
          <p>
            <strong>What we collect:</strong> only what we need to fulfil your order — your name, phone number, delivery address and recipient details, plus WhatsApp messages about your order and basic website analytics.
          </p>
          <p>
            <strong>What we never do:</strong> we do not sell your personal information to anyone, and we never share it for marketing by third parties.
          </p>
          <p>
            <strong>Who sees your data:</strong> only our own team and our delivery riders (who need the address to deliver your flowers). Payment screenshots are used solely to verify your payment.
          </p>
          <p>
            <strong>Your control:</strong> you can ask us at any time what data we hold about you, ask us to correct it, or ask us to delete it — just message us on WhatsApp at{" "}
            <a href="https://wa.me/923104225974" className="text-[#8B1E2D] font-semibold hover:underline">0310-4225974</a>{" "}
            or email <a href="mailto:lahorebouquet@gmail.com" className="text-[#8B1E2D] font-semibold hover:underline">lahorebouquet@gmail.com</a>.
          </p>
          <p className="text-xs text-[#777777]">
            The full details are in the sections below.
          </p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">1. Information We Collect</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
          <li><strong>Order details:</strong> your name, phone number, delivery address, and recipient details needed to fulfil your order.</li>
          <li><strong>Messages:</strong> WhatsApp conversations about your order, including bouquet photo approvals.</li>
          <li><strong>Technical data:</strong> basic analytics (pages visited, device type) to improve the website. We do not sell this data.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">2. How We Use It</h2>
        <ul className="list-disc pl-5 space-y-2 text-sm leading-relaxed">
          <li>To prepare, deliver and confirm your flower orders.</li>
          <li>To contact you about your order status on WhatsApp or phone.</li>
          <li>To improve our website, products and delivery service.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">3. Sharing</h2>
        <p className="text-sm leading-relaxed">
          We do not sell your personal information. We share delivery details only with our own delivery riders so your order reaches the right address. Payment screenshots you send are used only to verify your payment.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">4. Your Rights</h2>
        <p className="text-sm leading-relaxed">
          You may ask us at any time what data we hold about you, ask us to correct it, or ask us to delete it. Contact us on WhatsApp at{" "}
          <a href="https://wa.me/923104225974" className="text-[#8B1E2D] font-semibold hover:underline">0310-4225974</a>{" "}
          or email <a href="mailto:lahorebouquet@gmail.com" className="text-[#8B1E2D] font-semibold hover:underline">lahorebouquet@gmail.com</a>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">5. Contact</h2>
        <p className="text-sm leading-relaxed">
          Questions about this policy? Reach us via our <Link href="/contact" className="text-[#8B1E2D] font-semibold hover:underline">contact page</Link>.
        </p>
      </section>
    </main>
  );
}
