import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Truck, Clock, ShieldCheck, Camera, Phone, MessageCircle, MapPin, HeartHandshake, HelpCircle, CheckCircle2 } from "lucide-react";
import { getSanityProducts } from "@/sanity/lib/fetch";
import { ALL_PRODUCTS, LAHORE_AREAS } from "../data/products";
import ProductCard from "../components/ProductCard";
import { SITE_URL } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Delivery in Lahore | Same-Day Bouquets, Order Online",
  },
  description: "Order flowers online for delivery anywhere in Lahore. Same-day bouquets, photo before dispatch, and card messages. Order before 4 PM for same-day delivery.",
  alternates: {
    canonical: `${SITE_URL}/flower-delivery-in-lahore`,
  },
  keywords: [
    "flower delivery in lahore",
    "flower bouquet lahore",
    "flowers in lahore",
    "online flower delivery lahore",
    "flower delivery near me",
    "same day flower delivery lahore"
  ],
  openGraph: {
    title: "Flower Delivery in Lahore | Same-Day Bouquets, Order Online",
    description: "Order flowers online for delivery anywhere in Lahore. Same-day bouquets, photo before dispatch, and card messages. Order before 4 PM for same-day delivery.",
    url: `${SITE_URL}/flower-delivery-in-lahore`,
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
  },
};

export default async function FlowerDeliveryLahorePage() {
  const sanityProducts = await getSanityProducts();
  const allProducts = sanityProducts.length > 0 ? sanityProducts : ALL_PRODUCTS;
  const featuredBouquets = allProducts.slice(0, 8);

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
        name: "Flower Delivery in Lahore",
        item: `${SITE_URL}/flower-delivery-in-lahore`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you offer same-day flower delivery in Lahore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Lahore Bouquet delivers fresh flowers the same day across Lahore for orders placed before 4:00 PM. Delivery typically takes between 2 to 5 hours from order confirmation."
        }
      },
      {
        "@type": "Question",
        name: "Can I choose a specific delivery time in Lahore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You can select your preferred delivery window at checkout (Morning 10 AM-1 PM, Afternoon 1 PM-5 PM, Evening 5 PM-9 PM, or Midnight Surprise 11:30 PM-12:15 AM)."
        }
      },
      {
        "@type": "Question",
        name: "What if the receiver is not home at the time of delivery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our courier calls the recipient before arriving. If they are unavailable, we contact you immediately to reschedule or safely leave the bouquet with a designated family member or security guard."
        }
      },
      {
        "@type": "Question",
        name: "Can I send flowers to a hospital in Lahore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We deliver get-well-soon bouquets to major Lahore hospitals including Doctors Hospital, Shaukat Khanum, CMH, Hameed Latif, and National Hospital. Please ensure you provide the patient's name, ward, and room number."
        }
      },
      {
        "@type": "Question",
        name: "Can I order flowers from overseas (UK, USA, UAE) for someone in Lahore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Many of our customers live abroad and send flowers to family in Lahore. You can order online and pay securely with credit or debit card, bank transfer, or mobile wallet."
        }
      }
    ]
  };

  const localDeliverySchema = {
    "@context": "https://schema.org",
    "@type": "DeliveryService",
    name: "Lahore Bouquet Express Flower Delivery",
    provider: {
      "@type": "Florist",
      name: "Lahore Bouquet",
      telephone: "+923104225974",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Lahore",
        addressLocality: "Lahore",
        addressRegion: "Punjab",
        postalCode: "54000",
        addressCountry: "PK"
      }
    },
    areaServed: {
      "@type": "City",
      name: "Lahore"
    }
  };

  const deliveryZones = [
    { zone: "Gulberg & Lahore Atelier", fee: "Rs. 200 – 300", time: "1 to 2 hours", areas: "Gulberg I, II, III, Main Boulevard, Jail Road" },
    { zone: "DHA Phases 1 to 6 & Cantt", fee: "Rs. 350 – 450", time: "2 to 3 hours", areas: "DHA Phases 1-6, Cantt, Cavalry Ground, PAF Colony" },
    { zone: "Johar Town & Model Town", fee: "Rs. 350 – 450", time: "2 to 3 hours", areas: "Johar Town (G1/G2/Emporium), Model Town, Garden Town, Faisal Town" },
    { zone: "DHA Phases 7 to 9 & Raya", fee: "Rs. 500 – 600", time: "2.5 to 3.5 hours", areas: "DHA Phase 7, Phase 8 (Park View/Ex-Air Avenue), DHA Raya, Phase 9 Prism" },
    { zone: "Bahria Town & Lake City", fee: "Rs. 600 – 800", time: "3 to 4 hours", areas: "Bahria Town (Sectors A-F), Lake City, Raiwind Road, Khayaban-e-Amin" },
    { zone: "Askari, Wapda Town & Valencia", fee: "Rs. 400 – 550", time: "2 to 4 hours", areas: "Askari 1 to 11, Wapda Town, Valencia, Township, Allama Iqbal Town" },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-14 bg-[#F8F3EA] text-[#2A2A2A]">
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localDeliverySchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Flower Delivery in Lahore</span>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B0B0B] p-8 sm:p-14 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
            <Truck className="w-3.5 h-3.5" />
            Same-Day Citywide Dispatch
          </div>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Flower Delivery in Lahore
          </h1>

          {/* AEO / GEO Direct Answer Paragraph */}
          <p className="text-[#F8F3EA]/90 text-sm sm:text-base leading-relaxed font-light">
            We deliver fresh flowers across Lahore, usually within <strong>2 to 5 hours</strong> of confirming your order. If you order before <strong>4:00 PM</strong>, your flowers reach the destination on the same day. Every arrangement is hand-tied to order at our Gulberg atelier, and a live photo is sent on WhatsApp before dispatch. Order online or call <a href="tel:+923104225974" className="text-[#C6A15B] font-semibold hover:underline">0310-4225974</a>.
          </p>

          <div className="flex flex-wrap gap-4 pt-3 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#C6A15B]" /> Delivery in 2 to 5 hours</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before dispatch</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#C6A15B]" /> 100% Fresh stem guarantee</span>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <Link 
              href="/bouquets"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-[#8B1E2D] hover:bg-[#A32838] text-white text-xs sm:text-sm font-semibold transition-all shadow-md active:scale-95"
            >
              Browse Bouquets
            </Link>
            <a 
              href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20want%20to%20order%20flowers%20for%20delivery%20in%20Lahore."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0E7C5B] hover:bg-[#0B6E4F] text-white text-xs sm:text-sm font-semibold transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              Order on WhatsApp (0310-4225974)
            </a>
          </div>
        </div>
      </section>

      {/* Delivery Zones & Timings Table */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0B0B0B]">
            Delivery Charges and Timing by Lahore Area
          </h2>
          <p className="text-xs sm:text-sm text-[#555555]">
            Delivery charges are based on distance from our Lahore atelier. We deliver safely in air-conditioned vehicles so blooms arrive crisp and fresh.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[rgba(198,161,91,0.25)] bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm text-[#2A2A2A]">
            <thead className="bg-[#0B0B0B] text-white uppercase text-[11px] tracking-wider font-semibold">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Delivery Zone</th>
                <th className="py-3.5 px-4 sm:px-6">Estimated Time</th>
                <th className="py-3.5 px-4 sm:px-6">Standard Charge</th>
                <th className="py-3.5 px-4 sm:px-6">Areas Covered</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5DED2]">
              {deliveryZones.map((z, idx) => (
                <tr key={idx} className="hover:bg-[#F8F3EA]/60 transition-colors">
                  <td className="py-4 px-4 sm:px-6 font-semibold text-[#0B0B0B]">{z.zone}</td>
                  <td className="py-4 px-4 sm:px-6 text-[#8B1E2D] font-medium">{z.time}</td>
                  <td className="py-4 px-4 sm:px-6 font-semibold text-[#0B0B0B]">{z.fee}</td>
                  <td className="py-4 px-4 sm:px-6 text-[#666666] text-xs">{z.areas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Areas List Pills */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4">
        <h2 className="font-playfair text-xl sm:text-2xl font-bold text-[#0B0B0B]">
          Complete Lahore Coverage
        </h2>
        <p className="text-xs sm:text-sm text-[#555555]">
          We provide door-to-door delivery across all residential schemes, corporate offices, and gated communities in Lahore:
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {LAHORE_AREAS.map((area, idx) => (
            <span key={idx} className="px-3 py-1.5 rounded-lg bg-[#F8F3EA] border border-[#E5DED2] text-xs text-[#2A2A2A] font-medium flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#8B1E2D]" />
              {area}
            </span>
          ))}
        </div>
        <p className="text-xs text-[#777777] italic pt-2">
          If your area is not listed above, simply message us on WhatsApp and we will confirm the exact delivery route and timing.
        </p>
      </section>

      {/* 5-Step Ordering Flow */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0B0B0B]">
            How to Send Flowers Online in Lahore
          </h2>
          <p className="text-xs sm:text-sm text-[#555555]">
            Ordering takes less than 2 minutes whether you are in Lahore or ordering from overseas:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            { step: "01", title: "Choose Bouquet", desc: "Select roses, sunflowers, chocolates, or mixed bouquets from our collection." },
            { step: "02", title: "Receiver Details", desc: "Enter receiver's name, phone, address, and local Lahore area." },
            { step: "03", title: "Pick Time Slot", desc: "Select morning, afternoon, evening, or midnight surprise delivery." },
            { step: "04", title: "Card Message", desc: "Write your greeting. We include a complimentary handwritten card." },
            { step: "05", title: "Photo & Dispatch", desc: "We send you a WhatsApp photo before our rider departs." },
          ].map((item, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-white border border-[rgba(198,161,91,0.25)] space-y-2 relative">
              <span className="text-xs font-bold text-[#C6A15B] tracking-wider uppercase">Step {item.step}</span>
              <h3 className="font-semibold text-sm text-[#0B0B0B]">{item.title}</h3>
              <p className="text-xs text-[#666666] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* International & Surprise Delivery Notes */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] space-y-3">
          <div className="flex items-center gap-2 text-[#8B1E2D]">
            <HeartHandshake className="w-5 h-5" />
            <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">Sending Flowers from Abroad</h2>
          </div>
          <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
            If you are based in the <strong>UK, USA, UAE, Canada, Saudi Arabia, or Australia</strong>, you can easily send fresh flowers to your family and friends in Lahore. We accept international Visa/Mastercard payments and online bank transfers. We will send you photos and delivery confirmation on WhatsApp every step of the way. <Link href="/send-flowers-to-lahore-from-abroad" className="text-[#8B1E2D] font-semibold hover:text-[#C6A15B] transition-colors">Read our complete guide for overseas orders →</Link>
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] space-y-3">
          <div className="flex items-center gap-2 text-[#8B1E2D]">
            <Clock className="w-5 h-5" />
            <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">Surprise & Midnight Deliveries</h2>
          </div>
          <p className="text-xs sm:text-sm text-[#555555] leading-relaxed">
            Planning a surprise birthday or anniversary delivery? Choose our <strong>11:30 PM to 12:15 AM midnight slot</strong>. We will never reveal the sender until the bouquet is handed over with the handwritten card. Just add your instructions in the order notes or let us know on WhatsApp.
          </p>
        </div>
      </section>

      {/* Featured Bouquets Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0B0B0B]">
              Top Flower Bouquets for Lahore Delivery
            </h2>
            <p className="text-xs text-[#555555] mt-1">Hand-tied fresh on the day of dispatch</p>
          </div>
          <Link href="/bouquets" className="text-xs text-[#8B1E2D] font-bold hover:underline">
            View All ({allProducts.length}) →
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {featuredBouquets.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white p-8 sm:p-10 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#2A2A2A] leading-relaxed">
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Do you offer same-day flower delivery in Lahore?</h3>
            <p>Yes. Orders placed before 4:00 PM are delivered the same day within 2 to 5 hours across all major Lahore localities.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Can I choose a specific delivery time?</h3>
            <p>Yes. Choose from Morning (10 AM-1 PM), Afternoon (1 PM-5 PM), Evening (5 PM-9 PM), or Midnight (11:30 PM-12:15 AM) at checkout.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">What if the receiver is not home?</h3>
            <p>Our rider calls the recipient before arriving. If unanswered, we immediately notify you before deciding whether to leave the package with security or re-route.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Can I send flowers to a hospital in Lahore?</h3>
            <p>Yes. We deliver to Doctors Hospital, Shaukat Khanum, CMH, Hameed Latif, and other medical centers. Include ward/room details during checkout.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
