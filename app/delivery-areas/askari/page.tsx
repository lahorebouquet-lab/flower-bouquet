import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../../components/ProductCard";
import { MapPin, Clock, Camera, MessageCircle, ShieldCheck, Wallet, Gift, HelpCircle, Navigation, Package } from "lucide-react";
import { SITE_URL, areaFloristSchema } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Delivery in Askari Lahore | Rs. 300, 2–3 Hours",
  },
  description: "Same-day flower delivery to Askari 1, 5, 9, 10 & 11 (Bedian Road) Lahore in 2–3 hours. Fee Rs. 300. Gated-community protocol, WhatsApp photo proof, COD",
  alternates: {
    canonical: `${SITE_URL}/delivery-areas/askari`,
  },
  openGraph: {
    title: "Flower Delivery in Askari Lahore | Rs. 300, 2–3 Hours",
    description: "Same-day flower delivery to Askari 1, 5, 9, 10 & 11 (Bedian Road) Lahore in 2–3 hours. Fee Rs. 300. Gated-community protocol, WhatsApp photo proof, COD",
    url: `${SITE_URL}/delivery-areas/askari`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Flower Delivery in Askari Lahore | Rs. 300, 2–3 Hours",
      },
    ],
  }
};

export default async function AskariDeliveryPage() {
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
        name: "Askari Housing Lahore",
        item: `${SITE_URL}/delivery-areas/askari`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Which Askari sectors in Lahore do you deliver to?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We service all Askari communities across Lahore — Askari 1 and 2 (Sarwar Road, Cantt), Askari 3 and 4, Askari 5 and 6, Askari 9 and 10 (Zarrar Shaheed Road, Airport Road), and Askari 11 (Bedian Road). Delivery takes 2 to 3 hours with a flat fee of Rs. 300.",
        },
      },
      {
        "@type": "Question",
        name: "How do your riders clear Askari security gates?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our couriers carry valid CNICs for gated-community clearance. Share your Askari sector, street and a phone number for the gate guard — we send you the rider's name and number on WhatsApp before dispatch so the guard can clear entry without delay.",
        },
      },
      {
        "@type": "Question",
        name: "How long does delivery to Askari 11 on Bedian Road take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Askari 11 sits on Bedian Road near the Ring Road interchange, so our riders reach it in 2 to 3 hours via the Ring Road corridor. For guaranteed same-day arrival, order earlier in the day on WhatsApp at 0310-4225974.",
        },
      },
      {
        "@type": "Question",
        name: "Is midnight flower delivery available in Askari?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our midnight slot covers all Askari sectors 7 days a week. Message us on WhatsApp by the evening to reserve it — for gated sectors, please arrange resident authorization for late-night gate entry in advance.",
        },
      },
      {
        "@type": "Question",
        name: "Can family abroad pay for a flower delivery to Askari?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We accept international cards and bank transfer, so family in the UK, USA, UAE or anywhere else can pay directly for a delivery to Askari. We also accept cash on delivery, JazzCash and EasyPaisa locally. Every order gets a WhatsApp photo approval before dispatch.",
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
        <span className="text-[#8B1E2D] font-semibold">Askari Housing Lahore</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
          Askari 1 to 11 • Bedian Road • Ring Road Corridor
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Flower Delivery in Askari Housing Lahore
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          We service all Askari communities across Lahore, including Askari 1 (Sarwar Road), Askari 5, Askari 9, Askari 10 (Airport Road), and Askari 11 (Bedian Road) — delivered in 2 to 3 hours for a flat Rs. 300. Our couriers carry valid identification for gated security clearance, and every hand-tied bouquet is photographed on WhatsApp before dispatch so you approve exactly what arrives. To order, WhatsApp 0310-4225974 any time between 9 AM and 1 AM with your Askari sector and street — approve the bouquet photo we send, then pay by COD, JazzCash, EasyPaisa, bank transfer or international card.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#8B1E2D]" /> 2 to 3 hours • Rs. 300 flat delivery fee</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before dispatch</span>
          <a 
            href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20to%20Askari%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#8B1E2D] font-semibold hover:text-[#C6A15B]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order to Askari on WhatsApp
          </a>
        </div>
      </section>

      {/* Delivery Time & Fee */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Wallet className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Delivery time & fee — Askari Housing Lahore</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Delivery fee: Rs. 300 flat</strong> — across Askari 1 to 11, including Bedian Road sectors. No hidden charges.</li>
          <li><strong>Delivery time: 2 to 3 hours</strong>, 7 days a week, from 9 AM to 1 AM, via the Ring Road and Bedian Road corridor.</li>
          <li><strong>Midnight slot:</strong> available every night — message us on WhatsApp by the evening to reserve it.</li>
          <li><strong>Payments:</strong> cash on delivery (COD), JazzCash, EasyPaisa, bank transfer and international cards.</li>
          <li><strong>Prices start at Rs. 1,180.</strong> Call or WhatsApp <strong>0310-4225974</strong> and our Lahore florists will confirm your slot instantly.</li>
        </ul>
      </section>

      {/* Askari Sectors */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <ShieldCheck className="w-5 h-5 text-[#C6A15B]" />
          <h2 className="font-playfair text-xl font-bold">Askari Housing Coverage Across Lahore</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Askari 1 & Askari 2:</strong> Cantt central sectors along Sarwar Road — family homes and officers&apos; residences.</li>
          <li><strong>Askari 3 & Askari 4:</strong> established residential pockets with schools and community markets nearby.</li>
          <li><strong>Askari 5 & Askari 6:</strong> the Gulberg–Cantonment perimeter corridor; quick routing from our Lahore base.</li>
          <li><strong>Askari 9 & Askari 10:</strong> Zarrar Shaheed Road and the Allama Iqbal Airport bypass — birthday and anniversary bouquets to villas.</li>
          <li><strong>Askari 11 (Bedian Road):</strong> high-rise towers and modern villas via the Ring Road Bedian Interchange.</li>
          <li><strong>Bedian Road farmhouses & villas:</strong> event and nikkah-function flowers delivered to farmhouse venues along Bedian Road.</li>
        </ul>
      </section>

      {/* Popular Occasions */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Gift className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Occasions we deliver for in Askari</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Askari families order for the big home moments — milestone birthdays in the villas of Askari 10, nikkah ceremonies in Askari 11 towers, anniversaries, and housewarming bouquets for new Bedian Road homes. “Askari 11 me nikkah ke liye stage ke phool chahiye” — aise event orders hum aksar lete hain, aur venue ke time ke hisaab se delivery schedule karte hain. Farmhouse functions along Bedian Road get décor flowers and car-décor bookings in shaadi season. Every order includes a free handwritten message card and a WhatsApp photo approval before our rider clears your sector gate.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Askari delivery — frequently asked questions</h2>
        </div>
        <div className="divide-y divide-[rgba(198,161,91,0.25)]">
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Which Askari sectors in Lahore do you deliver to?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">We service all Askari communities across Lahore — Askari 1 and 2 (Sarwar Road, Cantt), Askari 3 and 4, Askari 5 and 6, Askari 9 and 10 (Zarrar Shaheed Road, Airport Road), and Askari 11 (Bedian Road). Delivery takes 2 to 3 hours with a flat fee of Rs. 300.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">How do your riders clear Askari security gates?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Our couriers carry valid CNICs for gated-community clearance. Share your Askari sector, street and a phone number for the gate guard — we send you the rider&apos;s name and number on WhatsApp before dispatch so the guard can clear entry without delay.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">How long does delivery to Askari 11 on Bedian Road take?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Askari 11 sits on Bedian Road near the Ring Road interchange, so our riders reach it in 2 to 3 hours via the Ring Road corridor. For guaranteed same-day arrival, order earlier in the day on WhatsApp at 0310-4225974.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Is midnight flower delivery available in Askari?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes, our midnight slot covers all Askari sectors 7 days a week. Message us on WhatsApp by the evening to reserve it — for gated sectors, please arrange resident authorization for late-night gate entry in advance.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Can family abroad pay for a flower delivery to Askari?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes. We accept international cards and bank transfer, so family in the UK, USA, UAE or anywhere else can pay directly for a delivery to Askari. We also accept cash on delivery, JazzCash and EasyPaisa locally. Every order gets a WhatsApp photo approval before dispatch.</p>
          </div>
        </div>
      </section>

      {/* How Ordering Works */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Package className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">How ordering works in Askari</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Askari orders follow a gated-community routine our riders know well. Here is what happens after you message us:
        </p>
        <ol className="space-y-3 text-xs text-[#2A2A2A] leading-relaxed list-decimal list-inside">
          <li><strong>Tell us what you need.</strong> Browse the bouquets below or message <strong>0310-4225974</strong> on WhatsApp (open 9 AM–1 AM daily) with your Askari sector, street and a guard contact number, the occasion and your budget. Our florists will suggest fresh options starting at Rs. 1,180 — including which roses and seasonal flowers arrived today.</li>
          <li><strong>Approve the photo.</strong> We tie your bouquet fresh and send you a photo on WhatsApp before the rider leaves — along with the rider&apos;s name and number so your sector gate clears entry in minutes.</li>
          <li><strong>Pay your way and receive.</strong> Pay cash on delivery, JazzCash, EasyPaisa, bank transfer or an international card. The rider clears your sector gate and reaches your doorstep within 2–3 hours for Rs. 300 — midnight slot available.</li>
        </ol>
      </section>

      {/* Popular Bouquets in Askari */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Popular bouquets ordered in Askari Lahore</span>
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
          <Link href="/delivery-areas/cantt" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Lahore Cantt →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 250 • 2–2.5 hours. Saddar, Cavalry Ground, PAF Colony and CMH.</p>
          </Link>
          <Link href="/delivery-areas/dha" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">DHA Lahore →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 250 • 2–3 hours. Phases 1–9, Defence Raya and Sector Y.</p>
          </Link>
          <Link href="/delivery-areas/wapda-town" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Wapda Town →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 300 • 2.5–3.5 hours. Wapda Town, PIA Society, Valencia and Township.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
