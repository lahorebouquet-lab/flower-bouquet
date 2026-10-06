import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../../components/ProductCard";
import { MapPin, Clock, Camera, MessageCircle, Trees, Wallet, Gift, HelpCircle, Navigation, Package } from "lucide-react";
import { SITE_URL, areaFloristSchema } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Delivery in Model Town Lahore | FREE, 1.5–2.5 Hours",
  },
  description: "Free flower delivery to Model Town Blocks A–M, Link Road & Garden Town Lahore in 1.5–2.5 hours. Bouquets from Rs. 1,180. Midnight slot, WhatsApp photo",
  alternates: {
    canonical: `${SITE_URL}/delivery-areas/model-town`,
  },
  openGraph: {
    title: "Flower Delivery in Model Town Lahore | FREE, 1.5–2.5 Hours",
    description: "Free flower delivery to Model Town Blocks A–M, Link Road & Garden Town Lahore in 1.5–2.5 hours. Bouquets from Rs. 1,180. Midnight slot, WhatsApp photo",
    url: `${SITE_URL}/delivery-areas/model-town`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Flower Delivery in Model Town Lahore | FREE, 1.5–2.5 Hours",
      },
    ],
  }
};

export default async function ModelTownDeliveryPage() {
  const allProducts = await getSanityProducts();
  const popularBouquets = allProducts.slice(3, 7);

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
        name: "Model Town Lahore",
        item: `${SITE_URL}/delivery-areas/model-town`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How fast is flower delivery to Model Town Lahore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "From our Lahore workshop, Model Town is a short drive down Ferozepur Road or via the Kalma Chowk underpass. Most orders reach Blocks A to M in 1.5 to 2.5 hours — and delivery is completely free. Order on WhatsApp at 0310-4225974 for the fastest dispatch.",
        },
      },
      {
        "@type": "Question",
        name: "Is flower delivery free in Model Town?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Delivery to Model Town Blocks A to M, Model Town Link Road, Garden Town and Barkat Market is free with no minimum order. Bouquets start at Rs. 1,180.",
        },
      },
      {
        "@type": "Question",
        name: "Do you deliver to Model Town Link Road and Garden Town?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our daily couriers service Model Town Link Road commercial markets, Barkat Market, and all Garden Town residential sectors, usually within 2 hours.",
        },
      },
      {
        "@type": "Question",
        name: "Can you deliver flowers to an event or marquee in Model Town?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We regularly deliver birthday décor flowers, stage arrangements and table bouquets to marquees, clubs and Model Town Park events. Share the venue name and event time on WhatsApp and we will schedule the delivery around your function.",
        },
      },
      {
        "@type": "Question",
        name: "Do you deliver get-well flowers to Hameed Latif Hospital?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Hameed Latif Hospital in Garden Town is on our daily route. Share the patient's name and ward or room number and our rider will deliver to the reception or visitor desk the same day.",
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
        <span className="text-[#8B1E2D] font-semibold">Model Town Lahore</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
          Blocks A to M • Link Road • Garden Town Express
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Flower Delivery in Model Town Lahore
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Located just minutes from our Lahore workshop via Kalma Chowk, Model Town is one of our quickest delivery zones — and delivery here is completely FREE. We deliver fresh Dutch roses, sunflower arrangements, money bouquets and celebration cakes across Blocks A through M, Circular Road and Model Town Link Road within 1.5 to 2.5 hours, with a WhatsApp photo of your bouquet before the rider leaves. Ordering is simple: message 0310-4225974 on WhatsApp any time between 9 AM and 1 AM, approve the photo of your bouquet, and pay by COD, JazzCash, EasyPaisa, bank transfer or international card.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#8B1E2D]" /> 1.5 to 2.5 hours • FREE delivery in Model Town</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before dispatch</span>
          <a 
            href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20to%20Model%20Town%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#8B1E2D] font-semibold hover:text-[#C6A15B]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order to Model Town on WhatsApp
          </a>
        </div>
      </section>

      {/* Delivery Time & Fee */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Wallet className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Delivery time & fee — Model Town Lahore</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Delivery fee: FREE (Rs. 0)</strong> — across Model Town Blocks A to M, Model Town Link Road, Garden Town and Barkat Market. No minimum order.</li>
          <li><strong>Delivery time: 1.5 to 2.5 hours</strong>, 7 days a week, from 9 AM to 1 AM, via Ferozepur Road or the Kalma Chowk underpass.</li>
          <li><strong>Midnight slot:</strong> available every night — message us on WhatsApp by the evening to reserve it.</li>
          <li><strong>Payments:</strong> cash on delivery (COD), JazzCash, EasyPaisa, bank transfer and international cards.</li>
          <li><strong>Prices start at Rs. 1,180.</strong> Call or WhatsApp <strong>0310-4225974</strong> and our Lahore florists will confirm your slot instantly.</li>
        </ul>
      </section>

      {/* Delivery Zone Details */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Trees className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Key Model Town Coverage Zones</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Blocks A, B, C, D, E & F:</strong> central circular blocks around Model Town Park, community clubs and established family homes.</li>
          <li><strong>Blocks G, H, J, K, L & M:</strong> outer residential streets and larger family estates, popular for nikkah and birthday home functions.</li>
          <li><strong>Model Town Link Road:</strong> commercial plazas, banks and office suites — same-day desk deliveries for work anniversaries and client thank-yous.</li>
          <li><strong>Garden Town & Barkat Market:</strong> rapid express route via the Kalma Chowk underpass; bridal, boutique and salon deliveries.</li>
          <li><strong>Circular Road:</strong> inner-ring residences and small markets along the society loop.</li>
          <li><strong>Model Town Society offices & adjoining streets:</strong> schools, academies and clinics with quick daytime drop-offs.</li>
        </ul>
      </section>

      {/* Popular Occasions */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Gift className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Occasions we deliver for in Model Town</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Model Town is a family neighbourhood, and our orders here reflect that — birthdays in Blocks C and D, nikkah functions in home marquees, shop-opening bouquets on Link Road and Barkat Market, and get-well flowers for Hameed Latif Hospital. Bohut se customers WhatsApp par seedha likhte hain: “Barkat Market ke qareeb ami ki birthday ke liye gulab ka guldasta bhej dein” — aur hum usi din photo bhej kar phool pohcha dete hain. Corporate clients on Link Road use us for office arrangements and client thank-yous, delivered to reception with a free handwritten card. Every bouquet is photographed on WhatsApp before dispatch, so what arrives is exactly what you approved.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Model Town delivery — frequently asked questions</h2>
        </div>
        <div className="divide-y divide-[rgba(198,161,91,0.25)]">
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">How fast is flower delivery to Model Town Lahore?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">From our Lahore workshop, Model Town is a short drive down Ferozepur Road or via the Kalma Chowk underpass. Most orders reach Blocks A to M in 1.5 to 2.5 hours — and delivery is completely free. Order on WhatsApp at 0310-4225974 for the fastest dispatch.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Is flower delivery free in Model Town?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes. Delivery to Model Town Blocks A to M, Model Town Link Road, Garden Town and Barkat Market is free with no minimum order. Bouquets start at Rs. 1,180.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Do you deliver to Model Town Link Road and Garden Town?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes, our daily couriers service Model Town Link Road commercial markets, Barkat Market, and all Garden Town residential sectors, usually within 2 hours.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Can you deliver flowers to an event or marquee in Model Town?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes. We regularly deliver birthday décor flowers, stage arrangements and table bouquets to marquees, clubs and Model Town Park events. Share the venue name and event time on WhatsApp and we will schedule the delivery around your function.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Do you deliver get-well flowers to Hameed Latif Hospital?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes. Hameed Latif Hospital in Garden Town is on our daily route. Share the patient’s name and ward or room number and our rider will deliver to the reception or visitor desk the same day.</p>
          </div>
        </div>
      </section>

      {/* How Ordering Works */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Package className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">How ordering works in Model Town</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Ordering in Model Town is quick because our riders run the Kalma Chowk route all day. Here is what happens after you message us:
        </p>
        <ol className="space-y-3 text-xs text-[#2A2A2A] leading-relaxed list-decimal list-inside">
          <li><strong>Tell us what you need.</strong> Browse the bouquets below or message <strong>0310-4225974</strong> on WhatsApp (open 9 AM–1 AM daily) with your Model Town block and street, the occasion and your budget. Our florists will suggest fresh options starting at Rs. 1,180 — including which roses and seasonal flowers arrived today.</li>
          <li><strong>Approve the photo.</strong> We tie your bouquet fresh and send you a photo on WhatsApp before the rider leaves. Nothing ships until you reply that it looks perfect — ask for tweaks and we redo it.</li>
          <li><strong>Pay your way and receive.</strong> Pay cash on delivery, JazzCash, EasyPaisa, bank transfer or an international card. The rider reaches your Model Town doorstep within 1.5–2.5 hours — midnight slot included.</li>
        </ol>
      </section>

      {/* Popular Bouquets in Model Town */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Popular bouquets ordered in Model Town</span>
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
          <Link href="/delivery-areas/gulberg" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Gulberg →</p>
            <p className="text-xs text-[#2A2A2A]">FREE delivery • 30–90 mins. Gulberg I–III, Liberty, MM Alam Road and Main Boulevard.</p>
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
