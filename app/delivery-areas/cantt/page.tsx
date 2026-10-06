import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../../components/ProductCard";
import { MapPin, Clock, Camera, MessageCircle, ShieldCheck, ShieldAlert, Wallet, Gift, HelpCircle, Navigation, Package } from "lucide-react";
import { SITE_URL, areaFloristSchema } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Delivery in Lahore Cantt & Cavalry | Rs. 250, 2–2.5 Hours",
  },
  description: "Same-day flower delivery to Lahore Cantt, Saddar, Cavalry Ground, PAF Colony & CMH in 2–2.5 hours. Fee Rs. 250. Gate-clearance protocol, photo on WhatsApp",
  alternates: {
    canonical: `${SITE_URL}/delivery-areas/cantt`,
  },
  openGraph: {
    title: "Flower Delivery in Lahore Cantt & Cavalry | Rs. 250, 2–2.5 Hours",
    description: "Same-day flower delivery to Lahore Cantt, Saddar, Cavalry Ground, PAF Colony & CMH in 2–2.5 hours. Fee Rs. 250. Gate-clearance protocol, photo on WhatsApp",
    url: `${SITE_URL}/delivery-areas/cantt`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Flower Delivery in Lahore Cantt & Cavalry | Rs. 250, 2–2.5 Hours",
      },
    ],
  }
};

export default async function CanttDeliveryPage() {
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
        name: "Cantt Lahore",
        item: `${SITE_URL}/delivery-areas/cantt`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do you deliver flowers to gated military areas in Lahore Cantt?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our delivery riders carry valid CNICs and follow official Cantt gate checkpoint clearance protocols. If you live in a restricted officer colony or mess, inform the entry guard that a Lahore Bouquet courier is arriving — we share the rider's name and number on WhatsApp before dispatch so clearance takes minutes.",
        },
      },
      {
        "@type": "Question",
        name: "Do you deliver to CMH Lahore hospital in Cantt?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we regularly deliver fresh get-well flowers and hampers to Combined Military Hospital (CMH) Lahore. Please provide the patient's name and ward number or the doctor's department, and our rider will deliver to the main entrance security counter or the ward the same day.",
        },
      },
      {
        "@type": "Question",
        name: "What is the delivery fee for Lahore Cantt?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A flat Rs. 250 across Lahore Cantt — Saddar, Cavalry Ground, PAF Colony, Falcon Complex, Fortress commercial and CMH. Delivery takes 2 to 2.5 hours, 7 days a week from 9 AM to 1 AM, with no hidden charges.",
        },
      },
      {
        "@type": "Question",
        name: "Can you deliver flowers to a mess dinner or officers' event at night?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We deliver table arrangements and bouquets to mess dinners and officers' events, including our midnight slot. Share the mess or venue name, event time and a contact number on WhatsApp; for restricted colonies, please arrange resident authorization for late-night entry in advance.",
        },
      },
      {
        "@type": "Question",
        name: "Gate par guard ko kya batana hai?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Bas itna keh dein ke 'Lahore Bouquet ka rider aa raha hai'. Hum rider ka naam aur mobile number WhatsApp par pehle se bhej dete hain taake gate par koi der na ho. Agar colony me visitor entry ke liye koi khaas procedure hai to order ke waqt hamein bata dein — hum usi ke mutabiq plan karenge.",
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
        <span className="text-[#8B1E2D] font-semibold">Cantt Lahore</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
          Saddar • Cavalry Ground • PAF Colony • CMH Express
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Flower Delivery in Lahore Cantt & Cavalry
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Lahore Cantonment and Cavalry Ground need couriers who understand gate security protocols and military checkpoint navigation. From Lahore, we cross into Cantt via Sherpao Bridge or the Cavalry Underpass within minutes, delivering handcrafted bouquets in 2 to 2.5 hours for a flat Rs. 250 — with live WhatsApp photo proof before the rider leaves. To order, WhatsApp 0310-4225974 any time between 9 AM and 1 AM with your colony and street details for gate clearance — approve the bouquet photo, then pay by COD, JazzCash, EasyPaisa, bank transfer or international card.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#8B1E2D]" /> 2 to 2.5 hours • Rs. 250 flat delivery fee</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#C6A15B]" /> Official gate checkpoint clearance</span>
          <a 
            href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20to%20Lahore%20Cantt."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#8B1E2D] font-semibold hover:text-[#C6A15B]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order to Cantt on WhatsApp
          </a>
        </div>
      </section>

      {/* Delivery Time & Fee */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Wallet className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Delivery time & fee — Lahore Cantt</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Delivery fee: Rs. 250 flat</strong> — across Saddar, Cavalry Ground, PAF Colony, Falcon Complex, Fortress commercial and CMH. No hidden charges.</li>
          <li><strong>Delivery time: 2 to 2.5 hours</strong>, 7 days a week, from 9 AM to 1 AM, via Sherpao Bridge or the Cavalry Underpass.</li>
          <li><strong>Midnight slot:</strong> available every night — message us on WhatsApp by the evening to reserve it.</li>
          <li><strong>Payments:</strong> cash on delivery (COD), JazzCash, EasyPaisa, bank transfer and international cards.</li>
          <li><strong>Prices start at Rs. 1,180.</strong> Call or WhatsApp <strong>0310-4225974</strong> and our Lahore florists will confirm your slot instantly.</li>
        </ul>
      </section>

      {/* Cantt Checkpoint Instructions */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <ShieldAlert className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Cantt zones & gate clearance protocol</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Cavalry Ground & Saddar:</strong> full commercial and residential access without gate restrictions — our fastest Cantt runs.</li>
          <li><strong>PAF Colony & Falcon Complex:</strong> mention the officer-housing lane in your order and advise the checkpoint sentry that our courier is arriving.</li>
          <li><strong>CMH Lahore:</strong> get-well deliveries accepted at the main entrance security counter or delivered to private patient rooms with ward details.</li>
          <li><strong>Fortress Stadium commercial strip:</strong> restaurants, retail and offices on the Cantt edge — evening surprise deliveries are common here.</li>
          <li><strong>Army officers&apos; housing schemes:</strong> share the scheme and street name; provide resident authorization if late-night delivery is requested.</li>
          <li><strong>Mess dinners & regimental events:</strong> table arrangements delivered to the mess with your event time — book a day ahead for large orders.</li>
        </ul>
      </section>

      {/* Popular Occasions */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Gift className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Occasions we deliver for in Cantt</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Cantt orders have a character of their own — regimental dinners and mess functions needing table arrangements, get-well bouquets for CMH wards, anniversaries in officers&apos; colonies, and congratulatory flowers for postings and promotions. Saddar&apos;s shops and Fortress&apos;s restaurants keep our evening surprise-delivery riders busy, while families across Cavalry Ground order birthday and nikkah bouquets. For every order, our rider carries valid identification for checkpoint clearance, and you receive a WhatsApp photo of your bouquet before dispatch — with a free handwritten message card included.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Cantt delivery — frequently asked questions</h2>
        </div>
        <div className="divide-y divide-[rgba(198,161,91,0.25)]">
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">How do you deliver flowers to gated military areas in Lahore Cantt?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Our delivery riders carry valid CNICs and follow official Cantt gate checkpoint clearance protocols. If you live in a restricted officer colony or mess, inform the entry guard that a Lahore Bouquet courier is arriving — we share the rider&apos;s name and number on WhatsApp before dispatch so clearance takes minutes.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Do you deliver to CMH Lahore hospital in Cantt?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes, we regularly deliver fresh get-well flowers and hampers to Combined Military Hospital (CMH) Lahore. Please provide the patient&apos;s name and ward number or the doctor&apos;s department, and our rider will deliver to the main entrance security counter or the ward the same day.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">What is the delivery fee for Lahore Cantt?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">A flat Rs. 250 across Lahore Cantt — Saddar, Cavalry Ground, PAF Colony, Falcon Complex, Fortress commercial and CMH. Delivery takes 2 to 2.5 hours, 7 days a week from 9 AM to 1 AM, with no hidden charges.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Can you deliver flowers to a mess dinner or officers&apos; event at night?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes. We deliver table arrangements and bouquets to mess dinners and officers&apos; events, including our midnight slot. Share the mess or venue name, event time and a contact number on WhatsApp; for restricted colonies, please arrange resident authorization for late-night entry in advance.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Gate par guard ko kya batana hai?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Bas itna keh dein ke “Lahore Bouquet ka rider aa raha hai”. Hum rider ka naam aur mobile number WhatsApp par pehle se bhej dete hain taake gate par koi der na ho. Agar colony me visitor entry ke liye koi khaas procedure hai to order ke waqt hamein bata dein — hum usi ke mutabiq plan karenge.</p>
          </div>
        </div>
      </section>

      {/* How Ordering Works */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Package className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">How ordering works in Cantt</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Cantt orders need one extra detail — gate clearance — so here is the exact routine our riders follow:
        </p>
        <ol className="space-y-3 text-xs text-[#2A2A2A] leading-relaxed list-decimal list-inside">
          <li><strong>Tell us what you need.</strong> Browse the bouquets below or message <strong>0310-4225974</strong> on WhatsApp (open 9 AM–1 AM daily) with your Cantt colony, street and a guard contact number, the occasion and your budget. Our florists will suggest fresh options starting at Rs. 1,180 — including which roses and seasonal flowers arrived today.</li>
          <li><strong>Approve the photo.</strong> We tie your bouquet fresh and send you a photo on WhatsApp before the rider leaves — along with the rider&apos;s name and number so your gate clears entry in minutes.</li>
          <li><strong>Pay your way and receive.</strong> Pay cash on delivery, JazzCash, EasyPaisa, bank transfer or an international card. The rider clears your colony gate and reaches your doorstep within 2–2.5 hours for Rs. 250 — midnight slot available.</li>
        </ol>
      </section>

      {/* Popular Bouquets in Cantt */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Popular bouquets ordered in Lahore Cantt</span>
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
          <Link href="/delivery-areas/dha" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">DHA Lahore →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 250 • 2–3 hours. Phases 1–9, Defence Raya and Sector Y.</p>
          </Link>
          <Link href="/delivery-areas/askari" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Askari Housing →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 300 • 2–3 hours. Askari 1–11 and Bedian Road with gated-community protocol.</p>
          </Link>
          <Link href="/delivery-areas/gulberg" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Gulberg →</p>
            <p className="text-xs text-[#2A2A2A]">FREE delivery • 30–90 mins. Gulberg I–III, Liberty and MM Alam Road.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
