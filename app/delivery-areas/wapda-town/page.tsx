import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../../components/ProductCard";
import { MapPin, Clock, Camera, MessageCircle, Wallet, Gift, HelpCircle, Navigation, Package } from "lucide-react";
import { SITE_URL, areaFloristSchema } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Delivery in Wapda Town Lahore | Rs. 300, 2.5–3.5 Hours",
  },
  description: "Same-day flower bouquets, roses & cakes delivered to Wapda Town, PIA Society, Valencia & Township Lahore in 2.5–3.5 hours. Fee Rs. 300. Photo on WhatsApp",
  alternates: {
    canonical: `${SITE_URL}/delivery-areas/wapda-town`,
  },
  openGraph: {
    title: "Flower Delivery in Wapda Town Lahore | Rs. 300, 2.5–3.5 Hours",
    description: "Same-day flower bouquets, roses & cakes delivered to Wapda Town, PIA Society, Valencia & Township Lahore in 2.5–3.5 hours. Fee Rs. 300. Photo on WhatsApp",
    url: `${SITE_URL}/delivery-areas/wapda-town`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Flower Delivery in Wapda Town Lahore | Rs. 300, 2.5–3.5 Hours",
      },
    ],
  }
};

export default async function WapdaTownDeliveryPage() {
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
        name: "Wapda Town Lahore",
        item: `${SITE_URL}/delivery-areas/wapda-town`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long does flower delivery to Wapda Town take, and what is the fee?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Delivery to Wapda Town, PIA Society, Valencia Town and Township takes 2.5 to 3.5 hours with a flat fee of Rs. 300. Our southern route runs via College Road, and every bouquet travels in an air-conditioned van with WhatsApp photo proof before dispatch.",
        },
      },
      {
        "@type": "Question",
        name: "Do you deliver to Valencia Town and PIA Society as well?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — Valencia Town, PIA Housing Society, NFC Society and Township are all on the same southern delivery route with the same Rs. 300 flat fee and 2.5 to 3.5 hour window.",
        },
      },
      {
        "@type": "Question",
        name: "Is midnight flower delivery available in Wapda Town?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our midnight slot covers Wapda Town and the surrounding societies 7 days a week. Message us on WhatsApp by the evening to reserve it and we will confirm your delivery window.",
        },
      },
      {
        "@type": "Question",
        name: "Cake ke saath phool bhi bhej sakte hain?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ji haan! Wapda Town me hum aksar 'cake ke saath gulab ka guldasta' ka combo bhejte hain — birthday ka mukammal surprise ek hi rider ke saath pohchta hai. Order ke waqt WhatsApp par cake ka flavour aur phoolon ka rang bata dein, hum photo bhej kar confirm karenge.",
        },
      },
      {
        "@type": "Question",
        name: "Can I pay cash on delivery in Wapda Town?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes — cash on delivery is available across Wapda Town, Valencia, PIA Society and Township. We also accept JazzCash, EasyPaisa, bank transfer and international cards.",
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
        <span className="text-[#8B1E2D] font-semibold">Wapda Town Lahore</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
          Chaudhary Chowk • PIA Society • Valencia • Township
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Flower Delivery in Wapda Town & Township
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          We deliver fresh imported roses, money bouquets, celebration cakes and gift hampers to Wapda Town, PIA Housing Society, Valencia Town and Township Lahore — in 2.5 to 3.5 hours for a flat Rs. 300. Every order is hydrated for transit and dispatched in air-conditioned courier vans, with photo proof sent on WhatsApp before our rider leaves. To order, message 0310-4225974 on WhatsApp any time between 9 AM and 1 AM with your society and street — approve the bouquet photo, then pay by COD, JazzCash, EasyPaisa, bank transfer or international card.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#8B1E2D]" /> 2.5 to 3.5 hours • Rs. 300 flat delivery fee</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before dispatch</span>
          <a 
            href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20to%20Wapda%20Town%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#8B1E2D] font-semibold hover:text-[#C6A15B]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order to Wapda Town on WhatsApp
          </a>
        </div>
      </section>

      {/* Delivery Time & Fee */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Wallet className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Delivery time & fee — Wapda Town & Township</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Delivery fee: Rs. 300 flat</strong> — across Wapda Town, PIA Housing Society, Valencia Town, NFC Society and Township. No hidden charges.</li>
          <li><strong>Delivery time: 2.5 to 3.5 hours</strong>, 7 days a week, from 9 AM to 1 AM, via the College Road southern route in AC vans.</li>
          <li><strong>Midnight slot:</strong> available every night — message us on WhatsApp by the evening to reserve it.</li>
          <li><strong>Payments:</strong> cash on delivery (COD), JazzCash, EasyPaisa, bank transfer and international cards.</li>
          <li><strong>Prices start at Rs. 1,180.</strong> Call or WhatsApp <strong>0310-4225974</strong> and our Lahore florists will confirm your slot instantly.</li>
        </ul>
      </section>

      {/* Coverage */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <MapPin className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Wapda Town & nearby societies we cover</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Wapda Town (Chaudhary Chowk):</strong> the central roundabout blocks and residential streets — family birthdays and anniversaries.</li>
          <li><strong>PIA Housing Society:</strong> residential blocks popular for housewarming and nikkah bouquets.</li>
          <li><strong>Valencia Town:</strong> modern villas and apartments; Eid hampers and birthday combos are frequent orders here.</li>
          <li><strong>Township & College Road:</strong> markets, colleges and family homes along the College Road commercial belt.</li>
          <li><strong>NFC Society:</strong> neighbouring residential blocks on the same southern route.</li>
          <li><strong>Audit & Accounts and adjoining societies:</strong> quiet residential pockets with same-day family-event deliveries.</li>
        </ul>
      </section>

      {/* Popular Occasions */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Gift className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Occasions we deliver for in Wapda Town</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Wapda Town orders are warm family affairs — birthdays with cake-and-bouquet combos, nikkah functions in home marquees, Eid gift hampers for relatives, and housewarming flowers for new Valencia homes. College Road&apos;s schools and academies order teacher-appreciation bouquets, while Township markets see a steady stream of shop-opening congratulations. Because this is our longest southern run, every bouquet is hydrated and travels in an air-conditioned van — and you approve a WhatsApp photo before dispatch, with a free handwritten message card in every order. Midnight surprises are available every night — just message us on WhatsApp by the evening and our rider will time the delivery for the celebration.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Wapda Town delivery — frequently asked questions</h2>
        </div>
        <div className="divide-y divide-[rgba(198,161,91,0.25)]">
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">How long does flower delivery to Wapda Town take, and what is the fee?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Delivery to Wapda Town, PIA Society, Valencia Town and Township takes 2.5 to 3.5 hours with a flat fee of Rs. 300. Our southern route runs via College Road, and every bouquet travels in an air-conditioned van with WhatsApp photo proof before dispatch.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Do you deliver to Valencia Town and PIA Society as well?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes — Valencia Town, PIA Housing Society, NFC Society and Township are all on the same southern delivery route with the same Rs. 300 flat fee and 2.5 to 3.5 hour window.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Is midnight flower delivery available in Wapda Town?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes. Our midnight slot covers Wapda Town and the surrounding societies 7 days a week. Message us on WhatsApp by the evening to reserve it and we will confirm your delivery window.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Cake ke saath phool bhi bhej sakte hain?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Ji haan! Wapda Town me hum aksar “cake ke saath gulab ka guldasta” ka combo bhejte hain — birthday ka mukammal surprise ek hi rider ke saath pohchta hai. Order ke waqt WhatsApp par cake ka flavour aur phoolon ka rang bata dein, hum photo bhej kar confirm karenge.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Can I pay cash on delivery in Wapda Town?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes — cash on delivery is available across Wapda Town, Valencia, PIA Society and Township. We also accept JazzCash, EasyPaisa, bank transfer and international cards.</p>
          </div>
        </div>
      </section>

      {/* How Ordering Works */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Package className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">How ordering works in Wapda Town</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Wapda Town sits on our southern route, so orders are batched onto the College Road run. Here is what happens after you message us:
        </p>
        <ol className="space-y-3 text-xs text-[#2A2A2A] leading-relaxed list-decimal list-inside">
          <li><strong>Tell us what you need.</strong> Browse the bouquets below or message <strong>0310-4225974</strong> on WhatsApp (open 9 AM–1 AM daily) with your society and street, the occasion and your budget. Our florists will suggest fresh options starting at Rs. 1,180 — including which roses and seasonal flowers arrived today.</li>
          <li><strong>Approve the photo.</strong> We tie your bouquet fresh, hydrate it for the southern run, and send you a photo on WhatsApp before the rider leaves. Nothing ships until you reply that it looks perfect.</li>
          <li><strong>Pay your way and receive.</strong> Pay cash on delivery, JazzCash, EasyPaisa, bank transfer or an international card. The rider travels by AC van down College Road and reaches your society within 2.5–3.5 hours for Rs. 300 — midnight slot available.</li>
        </ol>
      </section>

      {/* Popular Bouquets in Wapda Town */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Popular bouquets ordered in Wapda Town</span>
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
          <Link href="/delivery-areas/johar-town" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Johar Town →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 250 • 2–3 hours. Phases 1 & 2, Emporium Mall and Shaukat Khanum Hospital.</p>
          </Link>
          <Link href="/delivery-areas/model-town" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Model Town →</p>
            <p className="text-xs text-[#2A2A2A]">FREE delivery • 1.5–2.5 hours. Blocks A–M, Link Road and Garden Town.</p>
          </Link>
          <Link href="/delivery-areas/bahria-town" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Bahria Town →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 400 • 2.5–4 hours. Sectors A–F, Safari Villas and Lake City.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
