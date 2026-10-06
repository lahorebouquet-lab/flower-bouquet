import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts, getSanityAreaPage } from "@/sanity/lib/fetch";
import ProductCard from "../../components/ProductCard";
import NeighborhoodTemplate from "../../components/NeighborhoodTemplate";
import { MapPin, Clock, Camera, MessageCircle, Wallet, Gift, HelpCircle, Navigation, AlertCircle, Package } from "lucide-react";
import { SITE_URL, areaFloristSchema } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Delivery in DHA Rahbar Lahore | Rs. 400, 3–4 Hours",
  },
  description: "Same-day flower delivery to DHA Rahbar Lahore — sectors & commercial area near Valencia Town in 3–4 hours. Delivery fee Rs. 400. Fresh roses, money",
  alternates: {
    canonical: `${SITE_URL}/delivery-areas/dha-rahbar`,
  },
  openGraph: {
    title: "Flower Delivery in DHA Rahbar Lahore | Rs. 400, 3–4 Hours",
    description: "Same-day flower delivery to DHA Rahbar Lahore — sectors & commercial area near Valencia Town in 3–4 hours. Delivery fee Rs. 400. Fresh roses, money",
    url: `${SITE_URL}/delivery-areas/dha-rahbar`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Flower Delivery in DHA Rahbar Lahore | Rs. 400, 3–4 Hours",
      },
    ],
  }
};

const dhaRahbarBreadcrumbSchema = {
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
      name: "DHA Rahbar Lahore",
      item: `${SITE_URL}/delivery-areas/dha-rahbar`,
    },
  ],
};

const dhaRahbarFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does flower delivery to DHA Rahbar take, and what is the fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Delivery to DHA Rahbar takes 3 to 4 hours with a flat fee of Rs. 400. Because many sectors are still developing, gate clearance and locating exact streets can add time — share your sector, street and house number precisely.",
      },
    },
    {
      "@type": "Question",
      name: "Which DHA Rahbar sectors and areas do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover all DHA Rahbar sectors, the DHA Rahbar commercial area, and nearby streets toward Valencia Town. Our riders update their route maps weekly — your pin on WhatsApp helps us reach new streets fast.",
      },
    },
    {
      "@type": "Question",
      name: "DHA Rahbar is gated — how will the rider get in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our riders carry valid CNICs for checkpoint clearance. Share a phone number for your sector guard or inform the gate that a Lahore Bouquet courier is arriving, and we will send you the rider's name and number on WhatsApp before dispatch.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer midnight delivery to DHA Rahbar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our midnight slot runs 11:30 PM to 12:15 AM with a Rs. 500 surcharge. Message us on WhatsApp by the evening to reserve, especially since gate entry takes extra coordination at night.",
      },
    },
    {
      "@type": "Question",
      name: "WhatsApp par DHA Rahbar ke liye order kaise karun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "0310-4225974 par likhein — masalan 'DHA Rahbar me anniversary ke liye 50 surkh gulab ka guldasta chahiye, shaam 7 baje tak.' Hum WhatsApp par phoolon ki photo bhej kar confirm karenge, phir rider rawana hoga. COD, JazzCash, EasyPaisa, bank transfer aur international cards sab chalte hain.",
      },
    },
  ],
};

const areaFlorist = areaFloristSchema("DHA Rahbar", `${SITE_URL}/delivery-areas/dha-rahbar`);

export default async function DHARahbarDeliveryPage() {
  // Sanity CMS first — falls back to static content below if unreachable
  const sanityData = await getSanityAreaPage("dha-rahbar");
  if (sanityData) {
    return <NeighborhoodTemplate data={sanityData} />;
  }

  const allProducts = await getSanityProducts();
  const popularBouquets = allProducts.slice(0, 4);

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dhaRahbarBreadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dhaRahbarFaqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(areaFlorist) }}
      />
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/delivery-areas" className="hover:text-[#0B0B0B] transition-colors">Delivery Areas</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">DHA Rahbar</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
          Sectors • Commercial Area
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Flower Delivery in DHA Rahbar Lahore
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          DHA Rahbar is DHA&apos;s growing extension near Valencia Town, and our riders are mapping its sectors as new families move in. Most orders arrive within 3 to 4 hours for a flat delivery fee of Rs. 400. Share your exact sector, street and house number — a location pin helps on new streets. Our florists send you a photo on WhatsApp before your bouquet leaves, and riders carry valid CNICs for gated-sector clearance. Order on WhatsApp at 0310-4225974 (9 AM–1 AM), then pay by COD, JazzCash, EasyPaisa, bank transfer or international card.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#8B1E2D]" /> 3 to 4 hours • Rs. 400 flat delivery fee</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before it leaves</span>
          <a
            href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20to%20DHA%20Rahbar%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#8B1E2D] font-semibold hover:text-[#C6A15B]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order to DHA Rahbar on WhatsApp
          </a>
        </div>
      </section>

      {/* Delivery Time & Fee */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Wallet className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Delivery time & fee — DHA Rahbar</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Delivery fee: Rs. 400 flat</strong> — across all DHA Rahbar sectors and the commercial area.</li>
          <li><strong>Delivery time: 3 to 4 hours</strong>, 7 days a week, 9 AM to 1 AM. Newly handed-over streets may take the full window.</li>
          <li><strong>Midnight slot:</strong> 11:30 PM–12:15 AM, with a Rs. 500 surcharge. Reserve on WhatsApp by the evening so we can coordinate gate entry.</li>
          <li><strong>Payments:</strong> cash on delivery (COD), JazzCash, EasyPaisa, bank transfer and international cards.</li>
          <li><strong>Prices start at Rs. 1,180.</strong> Call or WhatsApp <strong>0310-4225974</strong> and our florists will confirm your slot instantly.</li>
        </ul>
      </section>

      {/* Coverage */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <AlertCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">DHA Rahbar sectors & areas we cover</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>DHA Rahbar sectors:</strong> all residential sectors — share your sector name, street and house number exactly for the fastest routing.</li>
          <li><strong>DHA Rahbar commercial area:</strong> shops, offices and eateries — corporate bouquets, inauguration flowers and client thank-yous.</li>
          <li><strong>Newly handed-over blocks:</strong> streets that just opened — a WhatsApp location pin helps our rider reach you without circling.</li>
          <li><strong>Valencia Town side:</strong> adjoining streets toward Valencia Town — housewarming arrangements and Eid hampers to new homes.</li>
        </ul>
      </section>

      {/* Popular Occasions */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Gift className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Occasions we deliver for in DHA Rahbar</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          DHA Rahbar orders are full of new beginnings — housewarming arrangements for new sectors, Eid hampers, and anniversary bouquets with cakes. Shaadi season brings nikkah-stage flowers and bridal bouquets. Every order includes a free handwritten message card, and your bouquet is photographed on WhatsApp before dispatch.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">DHA Rahbar delivery — frequently asked questions</h2>
        </div>
        <div className="divide-y divide-[rgba(198,161,91,0.25)]">
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">How long does flower delivery to DHA Rahbar take, and what is the fee?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Delivery to DHA Rahbar takes 3 to 4 hours with a flat fee of Rs. 400. Because many sectors are still developing, gate clearance and locating exact streets can add time — share your sector, street and house number precisely.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Which DHA Rahbar sectors and areas do you cover?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">We cover all DHA Rahbar sectors, the DHA Rahbar commercial area, and nearby streets toward Valencia Town. Our riders update their route maps weekly — your pin on WhatsApp helps us reach new streets fast.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">DHA Rahbar is gated — how will the rider get in?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Our riders carry valid CNICs for checkpoint clearance. Share a phone number for your sector guard or inform the gate that a Lahore Bouquet courier is arriving, and we will send you the rider&apos;s name and number on WhatsApp before dispatch.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Do you offer midnight delivery to DHA Rahbar?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes. Our midnight slot runs 11:30 PM to 12:15 AM with a Rs. 500 surcharge. Message us on WhatsApp by the evening to reserve, especially since gate entry takes extra coordination at night.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">WhatsApp par DHA Rahbar ke liye order kaise karun?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">0310-4225974 par likhein — masalan “DHA Rahbar me anniversary ke liye 50 surkh gulab ka guldasta chahiye, shaam 7 baje tak.” Hum WhatsApp par phoolon ki photo bhej kar confirm karenge, phir rider rawana hoga. COD, JazzCash, EasyPaisa, bank transfer aur international cards sab chalte hain.</p>
          </div>
        </div>
      </section>

      {/* How Ordering Works */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Package className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">How ordering works in DHA Rahbar</h2>
        </div>
        <ol className="space-y-3 text-xs text-[#2A2A2A] leading-relaxed list-decimal list-inside">
          <li><strong>Tell us what you need.</strong> Browse the bouquets below or message <strong>0310-4225974</strong> on WhatsApp (open 9 AM–1 AM daily) with your sector, street, house number, the occasion and your budget. Our florists will suggest fresh options starting at Rs. 1,180.</li>
          <li><strong>Approve the photo.</strong> We tie your bouquet fresh and send you a photo on WhatsApp before the rider leaves. Nothing ships until you reply it looks perfect — ask for tweaks and we redo it.</li>
          <li><strong>Pay your way and receive.</strong> Pay cash on delivery, JazzCash, EasyPaisa, bank transfer or an international card. The rider reaches your sector within 3–4 hours for the Rs. 400 flat fee — or in the midnight slot.</li>
        </ol>
      </section>

      {/* Popular Bouquets in DHA Rahbar */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Most ordered bouquets in DHA Rahbar</span>
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
          <Link href="/delivery-areas/valencia-town" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Valencia Town →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 400 • 2.5–3.5 hours. Main boulevard & commercial market.</p>
          </Link>
          <Link href="/delivery-areas/lake-city" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Lake City →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 500 • 3–4 hours. Golf course & Downtown commercial.</p>
          </Link>
          <Link href="/delivery-areas/eme-society" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">EME Society →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 400 • 2.5–3.5 hours. Commercial area off Multan Road.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
