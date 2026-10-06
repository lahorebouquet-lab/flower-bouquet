import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../../components/ProductCard";
import { MapPin, Clock, Camera, MessageCircle, Sparkles, Wallet, Gift, HelpCircle, Navigation, Package } from "lucide-react";
import { SITE_URL, areaFloristSchema } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Delivery in Gulberg Lahore | FREE, 30–90 Mins",
  },
  description: "Free 30–90 minute flower delivery in Gulberg I, II & III, Liberty, MM Alam Road & Main Boulevard Lahore. Bouquets from Rs. 1,180. Midnight slot, photo on",
  alternates: {
    canonical: `${SITE_URL}/delivery-areas/gulberg`,
  },
  openGraph: {
    title: "Flower Delivery in Gulberg Lahore | FREE, 30–90 Mins",
    description: "Free 30–90 minute flower delivery in Gulberg I, II & III, Liberty, MM Alam Road & Main Boulevard Lahore. Bouquets from Rs. 1,180. Midnight slot, photo on",
    url: `${SITE_URL}/delivery-areas/gulberg`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Flower Delivery in Gulberg Lahore | FREE, 30–90 Mins",
      },
    ],
  }
};

export default async function GulbergDeliveryPage() {
  const allProducts = await getSanityProducts();
  const popularBouquets = allProducts.slice(0, 4);

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
        name: "Delivery Areas",
        item: `${SITE_URL}/delivery-areas`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Gulberg Lahore",
        item: `${SITE_URL}/delivery-areas/gulberg`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How quickly can you deliver flowers to Gulberg Lahore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Because our florists work from Lahore, orders to Gulberg I, II and III, Liberty, MM Alam Road and Main Boulevard are delivered within 30 to 90 minutes. For the fastest arrival, order on WhatsApp at 0310-4225974 and we will dispatch the next available rider.",
        },
      },
      {
        "@type": "Question",
        name: "Is flower delivery really free in Gulberg?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Delivery inside Gulberg (I, II and III), Liberty Market, MM Alam Road, Kasuri Road and the Main Boulevard corridor is completely free with no minimum order. You only pay for the bouquet itself, and prices start at Rs. 1,180.",
        },
      },
      {
        "@type": "Question",
        name: "Can you deliver flowers to restaurants on MM Alam Road?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — this is one of our most common requests. We deliver surprise birthday and anniversary bouquets directly to restaurant tables across MM Alam Road and Kasuri Road. Share the restaurant name, your table booking name and the time, and our rider will coordinate with the staff so the flowers arrive mid-celebration.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer midnight flower delivery in Gulberg?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our midnight delivery slot runs 7 days a week and Gulberg addresses are first on the route. Message us on WhatsApp by the evening to reserve your slot and we will confirm the delivery window.",
        },
      },
      {
        "@type": "Question",
        name: "Kya main WhatsApp par Roman Urdu me order kar sakta hoon?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bilkul! 0310-4225974 par hamein Roman Urdu me message karein — masalan 'Gulberg II me birthday ke liye surkh gulab ka guldasta chahiye' — aur hamari team turant jawab de kar order confirm karegi. Cash on delivery, JazzCash, EasyPaisa, bank transfer aur international cards — sab payment options available hain.",
        },
      },
    ],
  };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/delivery-areas" className="hover:text-[#0B0B0B] transition-colors">Delivery Areas</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Gulberg Lahore</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
          Home Base • Free Delivery • 30–90 Mins
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Flower Delivery in Gulberg Lahore
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Gulberg is our home turf and our fastest delivery zone. Our Lahore workshop ties every bouquet fresh and dispatches riders within minutes — and delivery anywhere inside Gulberg is completely FREE, with no minimum order. Whether you are sending roses to an office on Main Boulevard, surprising someone at a café on MM Alam Road, or ordering a midnight bouquet to Gulberg II, our florists send you a live photo on WhatsApp before the rider leaves, so what arrives is exactly what you approved. Ordering is simple: WhatsApp us at 0310-4225974 any time between 9 AM and 1 AM, approve the bouquet photo we send back, and pay cash on delivery, JazzCash, EasyPaisa, bank transfer or card — our riders handle the rest.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#8B1E2D]" /> 30 to 90 mins • FREE delivery in Gulberg</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before dispatch</span>
          <a 
            href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20to%20Gulberg%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#8B1E2D] font-semibold hover:text-[#C6A15B]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order to Gulberg on WhatsApp
          </a>
        </div>
      </section>

      {/* Delivery Time & Fee */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Wallet className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Delivery time & fee — Gulberg Lahore</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Delivery fee: FREE (Rs. 0)</strong> — across Gulberg I, II & III, Liberty Market, MM Alam Road, Kasuri Road, Main Boulevard and the Jail Road corridor. No minimum order.</li>
          <li><strong>Delivery time: 30 to 90 minutes</strong>, 7 days a week, from 9 AM to 1 AM.</li>
          <li><strong>Midnight slot:</strong> available every night — message us on WhatsApp by the evening to reserve it.</li>
          <li><strong>Payments:</strong> cash on delivery (COD), JazzCash, EasyPaisa, bank transfer and international cards.</li>
          <li><strong>Prices start at Rs. 1,180.</strong> Call or WhatsApp <strong>0310-4225974</strong> and our Lahore florists will confirm your slot instantly.</li>
        </ul>
      </section>

      {/* Neighborhood Coverage */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Sparkles className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Key Gulberg Delivery Zones</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>MM Alam Road & Kasuri Road:</strong> fine-dining restaurants, rooftop cafés, corporate suites and designer boutiques. Our riders deliver surprise bouquets straight to restaurant tables — share the booking name and time and we coordinate with the staff.</li>
          <li><strong>Liberty Market & Noor Jehan Road:</strong> bridal salons, fabric boutiques and shopping plazas. A favourite zone for congratulatory bouquets on new shop openings.</li>
          <li><strong>Main Boulevard & Jail Road Corridor:</strong> banks, corporate headquarters and hotels. We deliver work-anniversary and promotion bouquets to reception desks with your message card.</li>
          <li><strong>Gulberg I:</strong> residential blocks near the stadium road, schools and family homes — birthday, nikkah and housewarming flowers.</li>
          <li><strong>Gulberg II & Mini Market:</strong> quieter residential streets, academies and clinics, where evening surprise deliveries are common.</li>
          <li><strong>Gulberg III & Kalma Chowk edge:</strong> apartments and offices on our fastest 30-minute runs from the workshop.</li>
        </ul>
      </section>

      {/* Popular Occasions */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Gift className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Occasions we deliver for in Gulberg</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Gulberg orders cluster around three moments. Birthday dinners on MM Alam Road — we time the bouquet to arrive with dessert; just share the restaurant name and reservation time. Corporate gifting along Main Boulevard — work anniversaries, promotions and client thank-yous, delivered to reception desks with a free handwritten card. And shaadi-season celebrations — nikkah bouquets, bridal-shower arrangements and car-décor flowers. We also carry get-well bouquets to nearby hospitals and condolence arrangements, handled with same-day sensitivity. Whatever the moment, your flowers are photographed on WhatsApp before dispatch, so what arrives is exactly what you approved.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Gulberg delivery — frequently asked questions</h2>
        </div>
        <div className="divide-y divide-[rgba(198,161,91,0.25)]">
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">How quickly can you deliver flowers to Gulberg Lahore?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Because our florists work from Lahore, orders to Gulberg I, II and III, Liberty, MM Alam Road and Main Boulevard are delivered within 30 to 90 minutes. For the fastest arrival, order on WhatsApp at 0310-4225974 and we will dispatch the next available rider.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Is flower delivery really free in Gulberg?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes. Delivery inside Gulberg (I, II and III), Liberty Market, MM Alam Road, Kasuri Road and the Main Boulevard corridor is completely free with no minimum order. You only pay for the bouquet itself, and prices start at Rs. 1,180.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Can you deliver flowers to restaurants on MM Alam Road?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes — this is one of our most common requests. We deliver surprise birthday and anniversary bouquets directly to restaurant tables across MM Alam Road and Kasuri Road. Share the restaurant name, your table booking name and the time, and our rider will coordinate with the staff so the flowers arrive mid-celebration.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Do you offer midnight flower delivery in Gulberg?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes. Our midnight delivery slot runs 7 days a week and Gulberg addresses are first on the route. Message us on WhatsApp by the evening to reserve your slot and we will confirm the delivery window.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Kya main WhatsApp par Roman Urdu me order kar sakta hoon?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Bilkul! 0310-4225974 par hamein Roman Urdu me message karein — masalan “Gulberg II me birthday ke liye surkh gulab ka guldasta chahiye” — aur hamari team turant jawab de kar order confirm karegi. Cash on delivery, JazzCash, EasyPaisa, bank transfer aur international cards — sab payment options available hain.</p>
          </div>
        </div>
      </section>

      {/* How Ordering Works */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Package className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">How ordering works in Gulberg</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Ordering flowers in Gulberg takes about a minute — and because this is our home zone, everything moves fastest here. Here is exactly what happens after you get in touch:
        </p>
        <ol className="space-y-3 text-xs text-[#2A2A2A] leading-relaxed list-decimal list-inside">
          <li><strong>Tell us what you need.</strong> Browse the bouquets below or message <strong>0310-4225974</strong> on WhatsApp (open 9 AM–1 AM daily) with your Gulberg address, the occasion and your budget. Our florists will suggest fresh options starting at Rs. 1,180 — including which roses and seasonal flowers arrived today.</li>
          <li><strong>Approve the photo.</strong> We tie your bouquet fresh and send you a photo on WhatsApp before the rider leaves. Nothing ships until you reply that it looks perfect — ask for tweaks and we redo it.</li>
          <li><strong>Pay your way and receive.</strong> Pay cash on delivery, JazzCash, EasyPaisa, bank transfer or an international card. The rider reaches your Gulberg doorstep within 30–90 minutes — or in the midnight slot for the evening surprise.</li>
        </ol>
      </section>

      {/* Popular Bouquets in Gulberg */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Popular bouquets ordered in Gulberg</span>
          <Link href="/bouquets" className="text-[#8B1E2D] hover:underline font-semibold">
            View All Bouquets →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {popularBouquets.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Navigation className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Nearby areas we also deliver</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-3">
          <Link href="/delivery-areas/model-town" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Model Town →</p>
            <p className="text-xs text-[#2A2A2A]">FREE delivery • 1.5–2.5 hours. Blocks A–M, Link Road and Garden Town, minutes via Kalma Chowk.</p>
          </Link>
          <Link href="/delivery-areas/dha" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">DHA Lahore →</p>
            <p className="text-xs text-[#2A2A2A]">FREE • 2–3 hours. Phases 1–9, Defence Raya and Sector Y with gated-community protocol.</p>
          </Link>
          <Link href="/delivery-areas/cantt" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Lahore Cantt →</p>
            <p className="text-xs text-[#2A2A2A]">FREE • 2–2.5 hours. Saddar, Cavalry Ground, PAF Colony and CMH with gate clearance.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
