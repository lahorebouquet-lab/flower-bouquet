import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import { ALL_PRODUCTS } from "../data/products";
import GiftsAndCakesClient from "./GiftsAndCakesClient";
import { Gift, Truck, Camera, MessageCircle, HelpCircle, ShieldCheck, Clock, Heart } from "lucide-react";
import { SITE_URL, itemListSchema } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Layers Cakes & Imported Chocolates Delivery in Lahore | Same Day & Midnight",
  },
  description: "Send original Layers Bakeshop cakes and imported chocolates in Lahore. Lotus Three Milk, Raffaello, Ferrero Rocher, Nutella & KitKat paired with fresh flowers. Same-day 2–4 hours & midnight surprise delivery with WhatsApp photo proof.",
  keywords: [
    "layers cakes lahore",
    "layers bakeshop lahore delivery",
    "cake delivery in lahore",
    "same day cake delivery lahore",
    "birthday cake delivery lahore",
    "anniversary cake lahore",
    "lotus three milk cake lahore",
    "raffaello cake lahore",
    "ferrero rocher gift box lahore",
    "flowers and cake delivery lahore",
    "midnight cake delivery lahore",
    "imported chocolates lahore",
    "lahore bouquet gifts"
  ],
  alternates: {
    canonical: `${SITE_URL}/gifts-and-cakes`,
  },
  openGraph: {
    title: "Layers Cakes & Imported Chocolates Delivery in Lahore",
    description: "Send authentic Layers Bakeshop cakes & luxury chocolates in Lahore. Fast 2 to 4 hours express delivery across Gulberg, DHA, Bahria Town & Cantt.",
    url: `${SITE_URL}/gifts-and-cakes`,
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
  },
};

export default async function GiftsAndCakesPage() {
  const sanityProducts = await getSanityProducts();
  const allProducts = sanityProducts && sanityProducts.length > 0 ? sanityProducts : ALL_PRODUCTS;

  const giftProducts = allProducts.filter(
    (p) =>
      p.category === "Gifts & Cakes" ||
      p.category === "Chocolate Bouquets" ||
      p.category === "Birthday Cakes" ||
      p.title.toLowerCase().includes("cake") ||
      p.title.toLowerCase().includes("chocolate") ||
      p.title.toLowerCase().includes("ferrero")
  );

  const itemListJsonLd = itemListSchema(giftProducts, `${SITE_URL}/gifts-and-cakes`, "Gifts & Cakes in Lahore");

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
        name: "Gifts & Cakes",
        item: `${SITE_URL}/gifts-and-cakes`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Are the cakes authentic from Layers Bakeshop Lahore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, 100%. All Layers cakes are picked up fresh from official Layers Bakeshop kitchens (Lahore) on the day of delivery, sealed in bakery packaging, and accompanied by the bakery tag and celebration candles."
        }
      },
      {
        "@type": "Question",
        name: "How fast can you deliver cakes and chocolates in Lahore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer express 2 to 4 hours delivery across all Lahore sectors including Gulberg, DHA Phases 1–9, Bahria Town, Model Town, Johar Town, Cantt, Askari, and Wapda Town."
        }
      },
      {
        "@type": "Question",
        name: "Do you offer midnight surprise delivery for birthdays and anniversaries?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our dedicated Midnight Surprise slot operates between 11:30 PM and 12:15 AM across Lahore. Pre-booking by 8:00 PM is recommended."
        }
      },
      {
        "@type": "Question",
        name: "Will I get a photo of the cake and bouquet before delivery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely. Our logistics team sends a live photograph of the assembled cake, gift card, and fresh floral arrangement directly to your WhatsApp before dispatch."
        }
      },
      {
        "@type": "Question",
        name: "Can I write a customized message on the greeting card?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, every cake and floral order includes a complimentary embossed greeting card and birthday candle. You can enter your personal message during checkout or via WhatsApp."
        }
      }
    ]
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10 space-y-10 sm:space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
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

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Gifts & Cakes</span>
      </nav>

      {/* Hero Category Banner */}
      <section className="bg-[#0B0B0B] p-6 sm:p-12 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5 text-[#C6A15B]" />
            Original Layers Cakes & Imported Chocolates
          </span>

          <h1 className="font-playfair text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Fresh Layers Cakes & Chocolates Delivery in Lahore
          </h1>

          <p className="text-[#F8F3EA]/85 text-xs sm:text-sm leading-relaxed font-light">
            Celebrate birthdays, anniversaries, and milestones with authentic bakery cakes from Layers Bakeshop and imported chocolates. Pair your favourite Lotus Three Milk, Raffaello, Ferrero Classic, or Belgian Malt with hand-tied Dutch roses. We pick up fresh, package securely, and send you a live WhatsApp photograph before dispatch.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
            <span className="flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-[#C6A15B]" /> Express 2–4 Hours Across Lahore
            </span>
            <span className="flex items-center gap-1.5">
              <Camera className="w-4 h-4 text-[#C6A15B]" /> Live WhatsApp Photo Proof
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-[#C6A15B]" /> Midnight Surprise Slot (11:30 PM)
            </span>
            <a 
              href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20a%20Layers%20cake%20and%20chocolates."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#C6A15B] font-semibold hover:underline"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order on WhatsApp (0310-4225974)
            </a>
          </div>
        </div>
      </section>

      {/* Value Badges Banner */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
        <div className="p-4 rounded-xl bg-white border border-[#E5DED2] flex items-center gap-3 shadow-xs">
          <ShieldCheck className="w-6 h-6 text-[#8B1E2D] shrink-0" />
          <div>
            <div className="font-bold text-[#0B0B0B]">100% Authentic Layers</div>
            <div className="text-[11px] text-[#777777]">Fresh from Lahore kitchens</div>
          </div>
        </div>
        <div className="p-4 rounded-xl bg-white border border-[#E5DED2] flex items-center gap-3 shadow-xs">
          <Truck className="w-6 h-6 text-[#8B1E2D] shrink-0" />
          <div>
            <div className="font-bold text-[#0B0B0B]">Safe Chilled Delivery</div>
            <div className="text-[11px] text-[#777777]">Climate-protected box transit</div>
          </div>
        </div>
        <div className="p-4 rounded-xl bg-white border border-[#E5DED2] flex items-center gap-3 shadow-xs">
          <Gift className="w-6 h-6 text-[#8B1E2D] shrink-0" />
          <div>
            <div className="font-bold text-[#0B0B0B]">Free Greeting Card</div>
            <div className="text-[11px] text-[#777777]">Custom handwritten message included</div>
          </div>
        </div>
        <div className="p-4 rounded-xl bg-white border border-[#E5DED2] flex items-center gap-3 shadow-xs">
          <Clock className="w-6 h-6 text-[#8B1E2D] shrink-0" />
          <div>
            <div className="font-bold text-[#0B0B0B]">Midnight Delivery</div>
            <div className="text-[11px] text-[#777777]">11:30 PM to 12:15 AM surprise</div>
          </div>
        </div>
      </section>

      {/* Interactive Filterable Products Catalog */}
      <GiftsAndCakesClient initialProducts={giftProducts} />

      {/* SEO Editorial Content Section */}
      <section className="bg-white p-6 sm:p-10 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-6">
        <div className="max-w-4xl space-y-4">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0B0B0B]">
            Premium Cake & Chocolate Delivery Service in Lahore
          </h2>
          <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
            Finding a reliable cake delivery service in Lahore that delivers on time, in pristine condition, and with genuine bakery quality can often be stressful. At Lahore Bouquet, we bridge that gap by partnering with Lahore’s favorite bakeshop, <strong>Layers Bakeshop</strong>, alongside providing imported confectionery like <strong>Ferrero Rocher, Nestle KitKat, Snickers, Mars, Bounty, Twix, and MrBeast Feastables</strong>.
          </p>
          <p className="text-xs sm:text-sm text-[#444444] leading-relaxed">
            Whether you want to send a decadent <em>Lotus Three Milk Cake</em> to DHA Phase 5, a romantic <em>Red Velvet Anniversary Cake</em> with 24 red roses to Gulberg, or a midnight birthday package to Bahria Town or Johar Town, our trained riders handle your orders with extreme care. Every cake is transported in upright secure cartons, protecting the delicate piping and toppings throughout Lahore's traffic.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2] space-y-1.5">
              <h3 className="font-bold text-sm text-[#0B0B0B]">Trending Layers Cakes</h3>
              <p className="text-xs text-[#555555]">
                Lotus Three Milk, Raffaello White Chocolate, Ferrero Classic, Nutella Cake, Belgian Dark Chocolate Malt, and Pistachio Celebration Cake.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2] space-y-1.5">
              <h3 className="font-bold text-sm text-[#0B0B0B]">Imported Chocolates</h3>
              <p className="text-xs text-[#555555]">
                Ferrero Rocher 16-Praline Gift Boxes, Mars Miniatures 220g pouches, Snickers Minis 180g sharing bags, and MrBeast Feastables Crunch.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2] space-y-1.5">
              <h3 className="font-bold text-sm text-[#0B0B0B]">All Lahore Sectors</h3>
              <p className="text-xs text-[#555555]">
                Fast delivery across Gulberg, DHA, Bahria Town, Johar Town, Model Town, Cantt, Askari, Wapda Town, Faisal Town, and Mall Road.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="bg-white p-6 sm:p-10 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 text-xs text-[#2A2A2A] leading-relaxed">
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Are the cakes authentic from Layers Bakeshop?</h3>
            <p>Yes. All cakes are picked up fresh from official Layers Bakeshop outlets on Lahore and DHA Lahore immediately prior to dispatch.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">How fast is the delivery in Lahore?</h3>
            <p>Express daytime delivery takes 2 to 4 hours. You can also schedule ahead for specific time slots or choose our Midnight Surprise slot.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Do you offer midnight surprise cake delivery?</h3>
            <p>Yes! We deliver between 11:30 PM and 12:15 AM so your loved ones are surprised right when the clock strikes 12 on their birthday or anniversary.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Can I add custom wording or candles?</h3>
            <p>Yes, complimentary greeting cards and celebration candles are included with every cake. Enter your message at checkout or via WhatsApp.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
