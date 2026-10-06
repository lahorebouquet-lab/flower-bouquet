import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts, getSanityAreaPage } from "@/sanity/lib/fetch";
import ProductCard from "../../components/ProductCard";
import NeighborhoodTemplate from "../../components/NeighborhoodTemplate";
import { MapPin, Clock, Camera, MessageCircle, Wallet, Gift, HelpCircle, Navigation, AlertCircle, Package } from "lucide-react";
import { SITE_URL } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Delivery in Lake City Lahore | Rs. 500, 3–4 Hours",
  },
  description: "Same-day flower delivery to Lake City Lahore — golf-course villas, Downtown commercial and sectors near the Ring Road interchange in 3–4 hours. Delivery fee Rs. 500 flat. Bouquet photo on WhatsApp before dispatch.",
  alternates: {
    canonical: `${SITE_URL}/delivery-areas/lake-city`,
  },
  openGraph: {
    title: "Flower Delivery in Lake City Lahore | Rs. 500, 3–4 Hours",
    description: "Same-day flower delivery to Lake City Lahore — golf-course villas, Downtown commercial and sectors near the Ring Road interchange in 3–4 hours. Delivery fee Rs. 500 flat. Bouquet photo on WhatsApp before dispatch.",
    url: `${SITE_URL}/delivery-areas/lake-city`,
  }
};

const lakeCityBreadcrumbSchema = {
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
      name: "Lake City Lahore",
      item: `${SITE_URL}/delivery-areas/lake-city`,
    },
  ],
};

const lakeCityFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does flower delivery to Lake City Lahore take, and what is the fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Delivery to Lake City takes 3 to 4 hours with a flat fee of Rs. 500. The fee reflects the distance down the Raiwind Road corridor and the extra time for security checks at the gated entrances. Orders to the golf-course villas and sectors near the Ring Road interchange usually take the full window during evening traffic.",
      },
    },
    {
      "@type": "Question",
      name: "Which parts of Lake City do you deliver to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We deliver to the golf-course villas around Lake City Golf Course & Country Club, the Downtown commercial strip, and the residential sectors near the Lake City Ring Road interchange. Share your sector, street and house number exactly — the community is large and many villas look similar.",
      },
    },
    {
      "@type": "Question",
      name: "Lake City is a gated community — how will the rider get in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our riders carry valid CNICs for checkpoint clearance at the Lake City gates. Share your gate's guard phone number or inform security that a Lahore Bouquet courier is arriving, and we will send you the rider's name and number on WhatsApp before dispatch so entry is smooth.",
      },
    },
    {
      "@type": "Question",
      name: "Do you deliver wedding and event flowers to the golf club area?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we deliver wedding flowers, stage décor flowers, bridal bouquets and car décor to celebrations held at the Lake City Golf Course & Country Club area. For events, we recommend booking at least 24 hours ahead so the flowers are fresh and the rider can coordinate entry with your event contact.",
      },
    },
    {
      "@type": "Question",
      name: "WhatsApp par Lake City ke liye order kaise karun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "0310-4225974 par likhein — masalan 'Lake City golf villas me birthday ke liye 30 imported gulab aur cake chahiye, dopehar 3 baje tak.' Hum apko WhatsApp par phoolon ki photo bhej kar confirm karenge, phir rider rawana hoga. Cash on delivery, JazzCash, EasyPaisa, bank transfer aur international cards sab chalte hain.",
      },
    },
  ],
};

export default async function LakeCityDeliveryPage() {
  // Sanity CMS first — falls back to static content below if unreachable
  const sanityData = await getSanityAreaPage("lake-city");
  if (sanityData) {
    return <NeighborhoodTemplate data={sanityData} />;
  }

  const allProducts = await getSanityProducts();
  const popularBouquets = allProducts.slice(0, 4);

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lakeCityBreadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lakeCityFaqSchema) }}
      />
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/delivery-areas" className="hover:text-[#0B0B0B] transition-colors">Delivery Areas</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Lake City Lahore</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
          Golf Course • Downtown • Ring Road Interchange
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Flower Delivery in Lake City Lahore
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Lake City sits at the far end of the Raiwind Road corridor, and reaching its golf-course villas, the Downtown commercial strip and the sectors by the Lake City Ring Road interchange takes real road time — which is why delivery here takes 3 to 4 hours with a flat Rs. 500 fee. Our riders handle the gated entrances with CNIC clearance and know their way around the community&apos;s sectors and the Downtown commercial strip. Every bouquet is photographed on WhatsApp before the rider leaves, so you approve exactly what arrives. To order, message 0310-4225974 any time between 9 AM and 1 AM with your sector, street and house number — then pay by COD, JazzCash, EasyPaisa, bank transfer or international card.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#8B1E2D]" /> 3 to 4 hours • Rs. 500 flat delivery fee</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before it leaves</span>
          <a
            href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20to%20Lake%20City%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#8B1E2D] font-semibold hover:text-[#C6A15B]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order to Lake City on WhatsApp
          </a>
        </div>
      </section>

      {/* Delivery Time & Fee */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Wallet className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Delivery time & fee — Lake City Lahore</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Delivery fee: Rs. 500 flat</strong> — across Lake City&apos;s golf-course villas, Downtown commercial and the sectors near the Ring Road interchange. No hidden charges.</li>
          <li><strong>Delivery time: 3 to 4 hours</strong>, 7 days a week, from 9 AM to 1 AM. Allow the full window for golf-course villas and during evening traffic on the Raiwind Road corridor.</li>
          <li><strong>Midnight slot:</strong> available every night from 11:30 PM to 12:15 AM with a Rs. 500 surcharge — message us on WhatsApp by the evening to reserve it.</li>
          <li><strong>Payments:</strong> cash on delivery (COD), JazzCash, EasyPaisa, bank transfer and international cards.</li>
          <li><strong>Prices start at Rs. 1,180.</strong> Call or WhatsApp <strong>0310-4225974</strong> and our Lahore florists will confirm your slot instantly.</li>
        </ul>
      </section>

      {/* Lake City Coverage */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <AlertCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Lake City areas we cover</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Golf-course villas:</strong> the fairway homes around Lake City Golf Course & Country Club — birthday surprises, anniversaries and housewarming bouquets to family villas.</li>
          <li><strong>Downtown commercial:</strong> the Downtown commercial strip — client thank-yous, shop-opening flowers and corporate gifting for offices and restaurants.</li>
          <li><strong>Sectors near the Ring Road interchange:</strong> the residential sectors closest to the Lake City Ring Road interchange, usually the fastest drop-offs in the community.</li>
          <li><strong>Residential sectors deeper inside Lake City:</strong> homes further from the gates — allow the full 4-hour window and share your exact street number.</li>
          <li><strong>Gated entries:</strong> our riders clear the Lake City checkpoints with valid CNICs — just share your guard&apos;s phone number or inform security a Lahore Bouquet courier is on the way.</li>
          <li><strong>Events at the club:</strong> wedding flowers, stage décor, bridal bouquets and car décor for celebrations at the golf club — book at least 24 hours ahead.</li>
        </ul>
      </section>

      {/* Popular Occasions */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Gift className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Occasions we deliver for in Lake City</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Lake City orders lean premium — imported rose bouquets for anniversaries in the golf-course villas, money bouquets for milestone birthdays, and housewarming arrangements for families moving into new sectors. The wedding season brings bridal bouquets, stage-décor flowers and car-décor bookings for celebrations at the club. Downtown offices order client thank-yous and shop-opening stands, while families send Eid hampers and get-well flowers across the community. Whatever the occasion, your bouquet is photographed on WhatsApp before dispatch, so what arrives is exactly what you approved — with a free handwritten message card in every order.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Lake City delivery — frequently asked questions</h2>
        </div>
        <div className="divide-y divide-[rgba(198,161,91,0.25)]">
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">How long does flower delivery to Lake City Lahore take, and what is the fee?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Delivery to Lake City takes 3 to 4 hours with a flat fee of Rs. 500. The fee reflects the distance down the Raiwind Road corridor and the extra time for security checks at the gated entrances. Orders to the golf-course villas and sectors near the Ring Road interchange usually take the full window during evening traffic.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Which parts of Lake City do you deliver to?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">We deliver to the golf-course villas around Lake City Golf Course &amp; Country Club, the Downtown commercial strip, and the residential sectors near the Lake City Ring Road interchange. Share your sector, street and house number exactly — the community is large and many villas look similar.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Lake City is a gated community — how will the rider get in?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Our riders carry valid CNICs for checkpoint clearance at the Lake City gates. Share your gate&apos;s guard phone number or inform security that a Lahore Bouquet courier is arriving, and we will send you the rider&apos;s name and number on WhatsApp before dispatch so entry is smooth.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Do you deliver wedding and event flowers to the golf club area?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes, we deliver wedding flowers, stage décor flowers, bridal bouquets and car décor to celebrations held at the Lake City Golf Course &amp; Country Club area. For events, we recommend booking at least 24 hours ahead so the flowers are fresh and the rider can coordinate entry with your event contact.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">WhatsApp par Lake City ke liye order kaise karun?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">0310-4225974 par likhein — masalan “Lake City golf villas me birthday ke liye 30 imported gulab aur cake chahiye, dopehar 3 baje tak.” Hum apko WhatsApp par phoolon ki photo bhej kar confirm karenge, phir rider rawana hoga. Cash on delivery, JazzCash, EasyPaisa, bank transfer aur international cards sab chalte hain.</p>
          </div>
        </div>
      </section>

      {/* How Ordering Works */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Package className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">How ordering works in Lake City</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Gated-community deliveries need a little more coordination, and we&apos;ve got the routine down. Here is what happens after you message us:
        </p>
        <ol className="space-y-3 text-xs text-[#2A2A2A] leading-relaxed list-decimal list-inside">
          <li><strong>Tell us what you need.</strong> Browse the bouquets below or message <strong>0310-4225974</strong> on WhatsApp (open 9 AM–1 AM daily) with your sector, street and house number, the occasion and your budget. Our florists will suggest fresh options starting at Rs. 1,180 — including which roses and seasonal flowers arrived today. For the golf-course villas, also share your gate&apos;s guard number for smooth entry.</li>
          <li><strong>Approve the photo.</strong> We tie your bouquet fresh and send you a photo on WhatsApp before the rider leaves. Nothing ships until you reply that it looks perfect — ask for tweaks and we redo it.</li>
          <li><strong>Pay your way and receive.</strong> Pay cash on delivery, JazzCash, EasyPaisa, bank transfer or an international card. The rider reaches your Lake City address within 3–4 hours for the Rs. 500 flat fee — or in the midnight slot from 11:30 PM to 12:15 AM for a Rs. 500 surcharge.</li>
        </ol>
      </section>

      {/* Popular Bouquets in Lake City */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Most ordered bouquets in Lake City Lahore</span>
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
          <Link href="/delivery-areas/bahria-orchard" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Bahria Orchard →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 500 • 3–4 hours. Phases 1–4 off Raiwind Road.</p>
          </Link>
          <Link href="/delivery-areas/bahria-town" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Bahria Town →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 400 • 2.5–4 hours. Sectors A–F, Safari Villas.</p>
          </Link>
          <Link href="/delivery-areas/dha-rahbar" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">DHA Rahbar →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 400 • 3–4 hours. Sectors near Valencia Town.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
