import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../../components/ProductCard";
import { Clock, Truck, MessageCircle, AlertCircle, ShieldCheck, Wallet, Gift, HelpCircle, Navigation, Package } from "lucide-react";
import { SITE_URL } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Delivery in Bahria Town Lahore | Rs. 400, 2.5–4 Hours",
  },
  description: "Same-day flower delivery to Bahria Town Sectors A–F, Safari Villas & Lake City in 2.5–4 hours. Fee Rs. 400. AC-van transit, WhatsApp photo proof, COD, midnight slot. Open 9 AM–1 AM.",
  alternates: {
    canonical: `${SITE_URL}/delivery-areas/bahria-town`,
  },
  openGraph: {
    title: "Flower Delivery in Bahria Town Lahore | Rs. 400, 2.5–4 Hours",
    description: "Same-day flower delivery to Bahria Town Sectors A–F, Safari Villas & Lake City in 2.5–4 hours. Fee Rs. 400. AC-van transit, WhatsApp photo proof, COD, midnight slot. Open 9 AM–1 AM.",
    url: `${SITE_URL}/delivery-areas/bahria-town`,
  }
};

export default async function BahriaTownDeliveryPage() {
  const allProducts = await getSanityProducts();
  const popularBouquets = allProducts.slice(1, 5);

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
        name: "Bahria Town Lahore",
        item: `${SITE_URL}/delivery-areas/bahria-town`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does flower delivery to Bahria Town Lahore take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Delivery to Bahria Town Lahore typically takes 2.5 to 4 hours with a flat fee of Rs. 400. We transport all bouquets via the Lahore Ring Road in temperature-controlled vans to prevent petals from wilting on the long southern run.",
        },
      },
      {
        "@type": "Question",
        name: "Do you deliver to Safari Villas and Lake City as well?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our southern delivery route covers Bahria Town Sectors A through F, Safari Villas, Sector Jasmine, and Lake City with same-day and midnight slots at the same Rs. 400 flat fee.",
        },
      },
      {
        "@type": "Question",
        name: "Why is the Bahria Town delivery fee Rs. 400?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bahria Town is our longest route — the rider travels via the Lahore Ring Road and your bouquet rides in an air-conditioned van so the flowers arrive fresh, not wilted. The Rs. 400 fee covers that distance and climate-controlled transit, with no other hidden charges.",
        },
      },
      {
        "@type": "Question",
        name: "Is midnight flower delivery available in Bahria Town?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our midnight slot covers Bahria Town, Safari Villas and Lake City 7 days a week. Because of the longer route, please book by 8:00 PM so our evening Ring Road dispatch can be scheduled smoothly.",
        },
      },
      {
        "@type": "Question",
        name: "Do you deliver flowers to the Grand Mosque area for nikkah events?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — we regularly deliver nikkah-stage flowers, bridal bouquets and décor arrangements to events around Bahria's Grand Mosque and commercial areas. Share the venue name, event time and a contact number on WhatsApp at 0310-4225974, and we will schedule the delivery around your function.",
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
        <span className="text-[#8B1E2D] font-semibold">Bahria Town Lahore</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <Truck className="w-3.5 h-3.5 text-[#C6A15B]" />
          Sectors A to F & Safari Villas Express
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Flower Delivery in Bahria Town Lahore
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Sending flowers to Bahria Town requires careful temperature control during transit. From our workshop on Lahore, our climate-controlled courier vans navigate via the Lahore Ring Road to reach Sectors A through F, Safari Villas, and Lake City within 2.5 to 4 hours for a flat Rs. 400. You receive a photo of your hand-tied bouquet on WhatsApp before our rider departs. To order, WhatsApp 0310-4225974 any time between 9 AM and 1 AM with your sector, street and house number — approve the bouquet photo we send, then pay by COD, JazzCash, EasyPaisa, bank transfer or international card.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#8B1E2D]" /> 2.5 to 4 hours • Rs. 400 flat delivery fee</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#C6A15B]" /> AC van hydration transit</span>
          <a 
            href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20to%20Bahria%20Town%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#8B1E2D] font-semibold hover:text-[#C6A15B]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order to Bahria Town on WhatsApp
          </a>
        </div>
      </section>

      {/* Delivery Time & Fee */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Wallet className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Delivery time & fee — Bahria Town Lahore</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Delivery fee: Rs. 400 flat</strong> — across Bahria Town Sectors A to F, Safari Villas, Sector Jasmine and Lake City. Covers the Ring Road distance and air-conditioned transit.</li>
          <li><strong>Delivery time: 2.5 to 4 hours</strong>, 7 days a week, from 9 AM to 1 AM, via the Lahore Ring Road.</li>
          <li><strong>Midnight slot:</strong> available every night — please book by 8:00 PM so our evening Ring Road dispatch can be scheduled smoothly.</li>
          <li><strong>Payments:</strong> cash on delivery (COD), JazzCash, EasyPaisa, bank transfer and international cards.</li>
          <li><strong>Prices start at Rs. 1,180.</strong> Call or WhatsApp <strong>0310-4225974</strong> and our Lahore florists will confirm your slot instantly.</li>
        </ul>
      </section>

      {/* Bahria Town Coverage */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <AlertCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Bahria Town sectors & landmarks we cover</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Sectors A & B:</strong> residential streets and the commercial pockets near the Bahria entrance — birthday and anniversary bouquets.</li>
          <li><strong>Sectors C & D:</strong> villas and family homes; specify your street and house number clearly as the sectors are large.</li>
          <li><strong>Sectors E & F:</strong> newer developments on the far side — allow the full 4-hour window during peak traffic.</li>
          <li><strong>Safari Villas & Executive Lodges:</strong> gated sub-communities; let your security guard know a flower courier is arriving.</li>
          <li><strong>Grand Mosque & Bahria commercial:</strong> nikkah-event flowers, bridal bouquets and shop-opening arrangements around the mosque and commercial boulevards.</li>
          <li><strong>Lake City & Sector Jasmine:</strong> covered on the same southern route with the same-day and midnight slots.</li>
        </ul>
      </section>

      {/* Popular Occasions */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Gift className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Occasions we deliver for in Bahria Town</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Bahria Town loves a grand gesture — nikkah-stage flowers and bridal bouquets around the Grand Mosque, housewarming arrangements for new Safari Villas homes, and milestone birthdays with imported rose bouquets. “Bahria Town Sector C me walima ke liye stage decoration ke phool” — aise event orders ke liye hum venue ke time ke hisaab se delivery schedule karte hain. Corporate clients in Bahria&apos;s commercial boulevards order inauguration stands and client thank-yous. Because of the long southern run, every bouquet travels hydrated in an air-conditioned van, and you approve a WhatsApp photo before dispatch — with a free handwritten message card in every order.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Bahria Town delivery — frequently asked questions</h2>
        </div>
        <div className="divide-y divide-[rgba(198,161,91,0.25)]">
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">How long does flower delivery to Bahria Town Lahore take?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Delivery to Bahria Town Lahore typically takes 2.5 to 4 hours with a flat fee of Rs. 400. We transport all bouquets via the Lahore Ring Road in temperature-controlled vans to prevent petals from wilting on the long southern run.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Do you deliver to Safari Villas and Lake City as well?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes, our southern delivery route covers Bahria Town Sectors A through F, Safari Villas, Sector Jasmine, and Lake City with same-day and midnight slots at the same Rs. 400 flat fee.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Why is the Bahria Town delivery fee Rs. 400?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Bahria Town is our longest route — the rider travels via the Lahore Ring Road and your bouquet rides in an air-conditioned van so the flowers arrive fresh, not wilted. The Rs. 400 fee covers that distance and climate-controlled transit, with no other hidden charges.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Is midnight flower delivery available in Bahria Town?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes. Our midnight slot covers Bahria Town, Safari Villas and Lake City 7 days a week. Because of the longer route, please book by 8:00 PM so our evening Ring Road dispatch can be scheduled smoothly.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Do you deliver flowers to the Grand Mosque area for nikkah events?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes — we regularly deliver nikkah-stage flowers, bridal bouquets and décor arrangements to events around Bahria&apos;s Grand Mosque and commercial areas. Share the venue name, event time and a contact number on WhatsApp at 0310-4225974, and we will schedule the delivery around your function.</p>
          </div>
        </div>
      </section>

      {/* How Ordering Works */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Package className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">How ordering works in Bahria Town</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Bahria Town is our longest run, so timing is planned around the Ring Road dispatch. Here is what happens after you message us:
        </p>
        <ol className="space-y-3 text-xs text-[#2A2A2A] leading-relaxed list-decimal list-inside">
          <li><strong>Tell us what you need.</strong> Browse the bouquets below or message <strong>0310-4225974</strong> on WhatsApp (open 9 AM–1 AM daily) with your Bahria sector, street and house number, the occasion and your budget. Our florists will suggest fresh options starting at Rs. 1,180 — including which roses and seasonal flowers arrived today.</li>
          <li><strong>Approve the photo.</strong> We tie your bouquet fresh, hydrate it for the long southern run, and send you a photo on WhatsApp before the rider leaves. Nothing ships until you reply that it looks perfect.</li>
          <li><strong>Pay your way and receive.</strong> Pay cash on delivery, JazzCash, EasyPaisa, bank transfer or an international card. The rider travels by AC van via the Ring Road and reaches your sector within 2.5–4 hours for Rs. 400 — midnight slot available (book by 8 PM).</li>
        </ol>
      </section>

      {/* Popular Bouquets in Bahria */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Popular bouquets ordered in Bahria Town</span>
          <Link href="/collections/bouquets" className="text-[#8B1E2D] hover:underline font-semibold">
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
          <Link href="/delivery-areas/wapda-town" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Wapda Town →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 300 • 2.5–3.5 hours. Wapda Town, PIA Society, Valencia and Township.</p>
          </Link>
          <Link href="/delivery-areas/johar-town" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Johar Town →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 250 • 2–3 hours. Phases 1 & 2, Emporium Mall and Shaukat Khanum Hospital.</p>
          </Link>
          <Link href="/delivery-areas/dha" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">DHA Lahore →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 250 • 2–3 hours. Phases 1–9, Defence Raya and Sector Y.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
