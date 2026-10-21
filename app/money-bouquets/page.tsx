export const revalidate = 3600;
import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../components/ProductCard";
import { Banknote, Truck, Camera, MessageCircle, HelpCircle } from "lucide-react";
import { SITE_URL, itemListSchema } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Money Bouquet in Lahore | Custom Cash Gift Bouquets",
  },
  description: "Custom money bouquets in Lahore made with real PKR notes and fresh roses. Perfect for weddings, Eid and birthdays. Set your own budget.",
  alternates: {
    canonical: `${SITE_URL}/money-bouquets`,
  },
  openGraph: {
    title: "Money Bouquet in Lahore | Custom Cash Gift Bouquets",
    description: "Custom money bouquets in Lahore made with real PKR notes and fresh roses. Perfect for weddings, Eid and birthdays. Set your own budget.",
    url: `${SITE_URL}/money-bouquets`,
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Money Bouquet in Lahore | Custom Cash Gift Bouquets",
      },
    ],
  },
};

export default async function MoneyBouquetsPage() {
  const allProducts = await getSanityProducts();
  const moneyProducts = allProducts.filter(p => p.category === "Money Bouquets");

  const itemListJsonLd = itemListSchema(moneyProducts, `${SITE_URL}/money-bouquets`, "Money Bouquets in Lahore");

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Bouquets",
        item: `${SITE_URL}/bouquets`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Money Bouquets",
        item: `${SITE_URL}/money-bouquets`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you supply the cash or do I?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You pay for the notes as part of the order, and we buy fresh crisp notes for you. Or you can transfer the cash amount directly."
        }
      },
      {
        "@type": "Question",
        name: "Can I ask for new notes only?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we use fresh, uncreased notes for our money bouquets."
        }
      },
      {
        "@type": "Question",
        name: "How much does a money bouquet cost in Lahore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The design, fresh roses and wrap start from Rs. 4,500, and you add the cash amount of your choice on top. Tell us your total budget on WhatsApp and we will plan the denominations for you."
        }
      },
      {
        "@type": "Question",
        name: "How far in advance should I order a money bouquet?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Same-day delivery in 2 to 5 hours is possible for standard designs. For large cash amounts or fully custom designs, ordering a day ahead gives us time to arrange fresh notes in your chosen denominations."
        }
      },
      {
        "@type": "Question",
        name: "Which occasions are money bouquets best for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Weddings and salami, Eid, birthdays, graduations, a first salary celebration, and new-baby visits. They are the most popular premium gift for occasions where cash is the tradition."
        }
      },
      {
        "@type": "Question",
        name: "Where can I order a money bouquet in Lahore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "From us! Every money bouquet in Lahore we craft is made with real PKR notes — hand-folded into fans and flower shapes, then set among fresh red roses. You pick the cash amount and denominations (Rs. 100 to 5,000), and we handle the rest. Message us on WhatsApp (0310-4225974) to get started."
        }
      },
      {
        "@type": "Question",
        name: "How much does a money bouquet in Lahore cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The craftsmanship for a money bouquet in Lahore — design, fresh roses and wrap — starts from Rs. 4,500, and you add whatever cash amount you like on top at face value. Tell us your total budget on WhatsApp and we'll plan the denominations for you."
        }
      },
      {
        "@type": "Question",
        name: "Can I get a money bouquet in Lahore delivered today?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! A money bouquet in Lahore can be delivered the same day within 2 to 5 hours for standard designs. For big cash amounts or fully custom designs, ordering a day ahead is better — it gives us time to arrange fresh, crisp notes in your chosen denominations."
        }
      }
    ]
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/bouquets" className="hover:text-[#0B0B0B] transition-colors">Bouquets</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Money Bouquets</span>
      </nav>

      {/* Hero Category Banner (Section 5 Standard) */}
      <section className="bg-[#0B0B0B] p-8 sm:p-12 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
            <Banknote className="w-3.5 h-3.5 text-[#C6A15B]" />
            Custom Currency Artistry
          </span>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Money Bouquets in Lahore
          </h1>

          <p className="text-[#F8F3EA]/85 text-xs sm:text-sm leading-relaxed font-light">
            <strong className="text-white">Money bouquets in Lahore start from Rs. 2,500 with same-day delivery in 2–5 hours.</strong> A money bouquet lets you give cash without handing over an envelope. We fold real notes by hand into a fan or flower shape and add fresh red roses. You choose the amount and the note denominations, whether Rs. 100, 500, 1,000 or 5,000.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#C6A15B]" /> Delivery in 2 to 5 hours</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before it leaves</span>
            <a 
              href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20customize%20a%20money%20bouquet."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#C6A15B] font-semibold hover:underline"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" /> Customize on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Popular For & How It Works */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-3">
          <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">Popular for</h2>
          <p className="text-xs text-[#2A2A2A] leading-relaxed">
            Weddings and salami, Eid, birthdays, graduations, a first salary, and new-baby visits.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-3">
          <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">How it works</h2>
          <ol className="space-y-1.5 text-xs text-[#2A2A2A] list-decimal list-inside">
            <li>Tell us your budget for the notes.</li>
            <li>We add the design and roses. The bouquet starts at Rs. 4,500 for the design, roses and wrap.</li>
            <li>You approve a photo on WhatsApp.</li>
            <li>We deliver across Lahore.</li>
          </ol>
        </div>
      </section>

      {/* Why a Money Bouquet */}
      <section className="bg-white p-6 sm:p-10 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">A Gift That Is Both Beautiful and Useful</h2>
        <div className="text-sm text-[#2A2A2A] leading-relaxed space-y-3">
          <p>
            A money bouquet solves the oldest gifting dilemma in Pakistan: you want to give cash, but handing over an envelope feels plain. We hand-fold real PKR notes into fans and flower shapes, then set them among fresh red roses with premium wrapping — so the gift looks stunning in photos and the recipient still gets the full cash value.
          </p>
          <p>
            Every bouquet is made to your budget. Choose the total cash amount and the denominations — Rs. 100, 500, 1,000 or 5,000 — and we arrange fresh, uncreased notes in a design that matches the occasion. The craftsmanship charge for the design, roses and wrap starts from Rs. 4,500, and the cash amount you choose is added on top at face value.
          </p>
          <p>
            Money bouquets are our most requested premium gift for weddings and salami in Lahore, and they are equally popular for Eid, birthdays and graduations. We deliver across Lahore the same day, usually within 2 to 5 hours, with free delivery — and you approve a photo on WhatsApp before the bouquet leaves our studio.
          </p>
        </div>
      </section>

      {/* Product Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Showing custom money bouquet arrangements</span>
          <span className="text-[#8B1E2D] font-semibold">Real PKR notes with fresh roses</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {moneyProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Category FAQ */}
      <section className="bg-white p-8 sm:p-10 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#2A2A2A] leading-relaxed">
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Do you supply the cash or do I?</h3>
            <p>You pay for the notes as part of the order, and we buy fresh crisp notes for you. Or you can transfer the cash amount directly.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Can I ask for new notes only?</h3>
            <p>Yes, we use fresh, uncreased notes for our money bouquets.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">How much does a money bouquet cost in Lahore?</h3>
            <p>The design, fresh roses and wrap start from Rs. 4,500, and you add the cash amount of your choice on top. Tell us your total budget on WhatsApp and we will plan the denominations for you.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">How far in advance should I order a money bouquet?</h3>
            <p>Same-day delivery in 2 to 5 hours is possible for standard designs. For large cash amounts or fully custom designs, ordering a day ahead gives us time to arrange fresh notes in your chosen denominations.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Which occasions are money bouquets best for?</h3>
            <p>Weddings and salami, Eid, birthdays, graduations, a first salary celebration, and new-baby visits. They are the most popular premium gift for occasions where cash is the tradition.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Where can I order a money bouquet in Lahore?</h3>
            <p>From us! Every money bouquet in Lahore we craft is made with real PKR notes — hand-folded into fans and flower shapes, then set among fresh red roses. You pick the cash amount and denominations (Rs. 100 to 5,000), and we handle the rest. Message us on WhatsApp (0310-4225974) to get started.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">How much does a money bouquet in Lahore cost?</h3>
            <p>The craftsmanship for a money bouquet in Lahore — design, fresh roses and wrap — starts from Rs. 4,500, and you add whatever cash amount you like on top at face value. Tell us your total budget on WhatsApp and we'll plan the denominations for you.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Can I get a money bouquet in Lahore delivered today?</h3>
            <p>Yes! A money bouquet in Lahore can be delivered the same day within 2 to 5 hours for standard designs. For big cash amounts or fully custom designs, ordering a day ahead is better — it gives us time to arrange fresh, crisp notes in your chosen denominations.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
