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
    absolute: "Flower Delivery in Al Kabir Town Lahore | Rs. 500, 3–4 Hours",
  },
  description: "Same-day flower delivery to Al Kabir Town Lahore — Phase 1 & 2 near Raiwind Road in 3–4 hours. Delivery fee Rs. 500. Fresh roses, money bouquets, cakes & midnight surprises. Photo on WhatsApp first.",
  alternates: {
    canonical: `${SITE_URL}/delivery-areas/al-kabir-town`,
  },
  openGraph: {
    title: "Flower Delivery in Al Kabir Town Lahore | Rs. 500, 3–4 Hours",
    description: "Same-day flower delivery to Al Kabir Town Lahore — Phase 1 & 2 near Raiwind Road in 3–4 hours. Delivery fee Rs. 500. Fresh roses, money bouquets, cakes & midnight surprises. Photo on WhatsApp first.",
    url: `${SITE_URL}/delivery-areas/al-kabir-town`,
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Flower Delivery in Al Kabir Town Lahore | Rs. 500, 3–4 Hours",
      },
    ],
  }
};

const alKabirTownBreadcrumbSchema = {
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
      name: "Al Kabir Town Lahore",
      item: `${SITE_URL}/delivery-areas/al-kabir-town`,
    },
  ],
};

const alKabirTownFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does flower delivery to Al Kabir Town take, and what is the fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Delivery to Al Kabir Town takes 3 to 4 hours with a flat fee of Rs. 500. The Raiwind Road corridor gets congested in the evening, so morning and early-afternoon orders arrive at the faster end of the window.",
      },
    },
    {
      "@type": "Question",
      name: "Which parts of Al Kabir Town do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover Al Kabir Town Phase 1 and Phase 2, the Al Kabir commercial area, and the nearby streets along Raiwind Road. Sharing your exact phase, block and house number helps our rider reach you.",
      },
    },
    {
      "@type": "Question",
      name: "My block is new — how will the rider find my house?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Send your phase, block letter and house number on WhatsApp with a live location pin. We share the rider's name and number before dispatch, so you can guide them by phone for newly numbered streets.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer midnight delivery to Al Kabir Town?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our midnight slot runs 11:30 PM to 12:15 AM with a Rs. 500 surcharge. Message us on WhatsApp by the evening to reserve — midnight orders cannot be arranged last minute.",
      },
    },
    {
      "@type": "Question",
      name: "WhatsApp par Al Kabir Town ke liye order kaise karun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "0310-4225974 par likhein — masalan 'Al Kabir Town Phase 2 me birthday ke liye lal gulab ka bouquet chahiye, shaam 6 baje tak.' Hum WhatsApp par phoolon ki photo bhej kar confirm karenge, phir rider rawana hoga. COD, JazzCash, EasyPaisa, bank transfer aur international cards sab chalte hain.",
      },
    },
  ],
};

const areaFlorist = areaFloristSchema("Al Kabir Town", `${SITE_URL}/delivery-areas/al-kabir-town`);

export default async function AlKabirTownDeliveryPage() {
  // Sanity CMS first — falls back to static content below if unreachable
  const sanityData = await getSanityAreaPage("al-kabir-town");
  if (sanityData) {
    return <NeighborhoodTemplate data={sanityData} />;
  }

  const allProducts = await getSanityProducts();
  const popularBouquets = allProducts.slice(0, 4);

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(alKabirTownBreadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(alKabirTownFaqSchema) }}
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
        <span className="text-[#8B1E2D] font-semibold">Al Kabir Town</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
          Phase 1 & 2 • Raiwind Road
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Flower Delivery in Al Kabir Town Lahore
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Al Kabir Town sits just off Raiwind Road near Bahria Orchard, and our riders cover Phase 1 and Phase 2 daily along with the commercial area. Most orders arrive within 3 to 4 hours for a flat delivery fee of Rs. 500. Share your exact phase, block and house number — a location pin on WhatsApp saves the rider a detour. Our florists send you a photo on WhatsApp before your bouquet leaves. Order on WhatsApp at 0310-4225974 (9 AM–1 AM), then pay by COD, JazzCash, EasyPaisa, bank transfer or international card.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#8B1E2D]" /> 3 to 4 hours • Rs. 500 flat delivery fee</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before it leaves</span>
          <a
            href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20to%20Al%20Kabir%20Town%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#8B1E2D] font-semibold hover:text-[#C6A15B]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order to Al Kabir Town on WhatsApp
          </a>
        </div>
      </section>

      {/* Delivery Time & Fee */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Wallet className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Delivery time & fee — Al Kabir Town</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Delivery fee: Rs. 500 flat</strong> — across Al Kabir Town Phase 1 and Phase 2, including the commercial area.</li>
          <li><strong>Delivery time: 3 to 4 hours</strong>, 7 days a week, 9 AM to 1 AM. Morning and early-afternoon orders usually arrive fastest.</li>
          <li><strong>Midnight slot:</strong> 11:30 PM–12:15 AM, with a Rs. 500 surcharge. Reserve on WhatsApp by the evening.</li>
          <li><strong>Payments:</strong> cash on delivery (COD), JazzCash, EasyPaisa, bank transfer and international cards.</li>
          <li><strong>Prices start at Rs. 1,180.</strong> Call or WhatsApp <strong>0310-4225974</strong> and our florists will confirm your slot instantly.</li>
        </ul>
      </section>

      {/* Coverage */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <AlertCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Al Kabir Town areas we cover</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Al Kabir Town Phase 1:</strong> the established phase — birthday and anniversary bouquets to family homes, plus housewarming arrangements.</li>
          <li><strong>Al Kabir Town Phase 2:</strong> the growing phase with new blocks — share your block and house number exactly; a pin helps on newly numbered streets.</li>
          <li><strong>Al Kabir commercial area:</strong> shops, offices and eateries — inauguration flowers, corporate bouquets and promotional stands.</li>
          <li><strong>Raiwind Road frontage:</strong> businesses and residences along the main road near the society — quick routing for roadside drop-offs.</li>
        </ul>
      </section>

      {/* Popular Occasions */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Gift className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Occasions we deliver for in Al Kabir Town</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Al Kabir Town orders mix family celebrations with new-business cheer — red rose and seasonal bouquets for birthdays and anniversaries, and grand-opening stands for the commercial area. Every order includes a free handwritten message card, and your bouquet is photographed on WhatsApp before dispatch.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Al Kabir Town delivery — frequently asked questions</h2>
        </div>
        <div className="divide-y divide-[rgba(198,161,91,0.25)]">
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">How long does flower delivery to Al Kabir Town take, and what is the fee?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Delivery to Al Kabir Town takes 3 to 4 hours with a flat fee of Rs. 500. The Raiwind Road corridor gets congested in the evening, so morning and early-afternoon orders arrive at the faster end of the window.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Which parts of Al Kabir Town do you cover?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">We cover Al Kabir Town Phase 1 and Phase 2, the Al Kabir commercial area, and the nearby streets along Raiwind Road. Sharing your exact phase, block and house number helps our rider reach you.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">My block is new — how will the rider find my house?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Send your phase, block letter and house number on WhatsApp with a live location pin. We share the rider&apos;s name and number before dispatch, so you can guide them by phone for newly numbered streets.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Do you offer midnight delivery to Al Kabir Town?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes. Our midnight slot runs 11:30 PM to 12:15 AM with a Rs. 500 surcharge. Message us on WhatsApp by the evening to reserve — midnight orders cannot be arranged last minute.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">WhatsApp par Al Kabir Town ke liye order kaise karun?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">0310-4225974 par likhein — masalan “Al Kabir Town Phase 2 me birthday ke liye lal gulab ka bouquet chahiye, shaam 6 baje tak.” Hum WhatsApp par phoolon ki photo bhej kar confirm karenge, phir rider rawana hoga. COD, JazzCash, EasyPaisa, bank transfer aur international cards sab chalte hain.</p>
          </div>
        </div>
      </section>

      {/* How Ordering Works */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Package className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">How ordering works in Al Kabir Town</h2>
        </div>
        <ol className="space-y-3 text-xs text-[#2A2A2A] leading-relaxed list-decimal list-inside">
          <li><strong>Tell us what you need.</strong> Browse the bouquets below or message <strong>0310-4225974</strong> on WhatsApp (open 9 AM–1 AM daily) with your phase, block, house number, the occasion and your budget. Our florists will suggest fresh options starting at Rs. 1,180.</li>
          <li><strong>Approve the photo.</strong> We tie your bouquet fresh and send you a photo on WhatsApp before the rider leaves. Nothing ships until you reply it looks perfect — ask for tweaks and we redo it.</li>
          <li><strong>Pay your way and receive.</strong> Pay cash on delivery, JazzCash, EasyPaisa, bank transfer or an international card. The rider reaches your block within 3–4 hours for the Rs. 500 flat fee — or in the midnight slot.</li>
        </ol>
      </section>

      {/* Popular Bouquets in Al Kabir Town */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Most ordered bouquets in Al Kabir Town</span>
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
          <Link href="/delivery-areas/raiwind-road" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Raiwind Road →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 500 • 3–4 hours. Raiwind Road corridor.</p>
          </Link>
          <Link href="/delivery-areas/lake-city" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Lake City →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 500 • 3–4 hours. Golf course & Downtown commercial.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
