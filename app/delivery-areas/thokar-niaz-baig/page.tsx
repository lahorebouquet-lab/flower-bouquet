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
    absolute: "Flower Delivery in Thokar Niaz Baig Lahore | Rs. 300, 2–3 Hours",
  },
  description: "Same-day flower delivery to Thokar Niaz Baig Lahore — interchange, M-2 motorway entry & nearby blocks — in 2–3 hours. Delivery fee Rs. 300. Imported roses, money bouquets, cakes & midnight surprises. Photo on WhatsApp first.",
  alternates: {
    canonical: `${SITE_URL}/delivery-areas/thokar-niaz-baig`,
  },
  openGraph: {
    title: "Flower Delivery in Thokar Niaz Baig Lahore | Rs. 300, 2–3 Hours",
    description: "Same-day flower delivery to Thokar Niaz Baig Lahore — interchange, M-2 motorway entry & nearby blocks — in 2–3 hours. Delivery fee Rs. 300. Imported roses, money bouquets, cakes & midnight surprises. Photo on WhatsApp first.",
    url: `${SITE_URL}/delivery-areas/thokar-niaz-baig`,
  }
};

const thokarNiazBaigBreadcrumbSchema = {
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
      name: "Thokar Niaz Baig Lahore",
      item: `${SITE_URL}/delivery-areas/thokar-niaz-baig`,
    },
  ],
};

const thokarNiazBaigFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does flower delivery to Thokar Niaz Baig take, and what is the fee?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Delivery to Thokar Niaz Baig takes 2 to 3 hours with a flat fee of Rs. 300. Blocks close to the interchange and Multan Road arrive at the faster end; orders deeper toward Wapda Town take the full window in peak traffic.",
      },
    },
    {
      "@type": "Question",
      name: "Which areas around Thokar Niaz Baig do you cover?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We cover the Thokar Niaz Baig interchange and its surrounding blocks, the Multan Road corridor near Thokar, residential societies on the Wapda Town side, and blocks bordering Johar Town. Sharing your exact block, street and house number helps our rider reach you without delay.",
      },
    },
    {
      "@type": "Question",
      name: "I am driving in from Islamabad — can you time the delivery for my arrival at Thokar?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — scheduled deliveries are our specialty. Tell us your expected arrival time at the Thokar Niaz Baig interchange on WhatsApp (0310-4225974), and we will have the bouquet ready for handover or deliver it to your home or office nearby. For motorway-side handoffs, please stay on the phone with the rider.",
      },
    },
    {
      "@type": "Question",
      name: "Do you deliver to offices and shops near the Thokar interchange?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, we deliver to offices, showrooms and businesses around the Thokar Niaz Baig interchange and along Multan Road — inauguration flowers, client thank-yous and corporate bouquets are regular orders here. Share the building or plaza name with your floor or shop number.",
      },
    },
    {
      "@type": "Question",
      name: "WhatsApp par Thokar Niaz Baig ke liye order kaise karun?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "0310-4225974 par likhein — masalan 'Thokar Niaz Baig ke paas anniversary ke liye 50 surkh gulab ka guldasta chahiye, raat 8 baje tak.' Hum apko WhatsApp par phoolon ki photo bhej kar confirm karenge, phir rider rawana hoga. Cash on delivery, JazzCash, EasyPaisa, bank transfer aur international cards sab chalte hain.",
      },
    },
  ],
};

export default async function ThokarNiazBaigDeliveryPage() {
  // Sanity CMS first — falls back to static content below if unreachable
  const sanityData = await getSanityAreaPage("thokar-niaz-baig");
  if (sanityData) {
    return <NeighborhoodTemplate data={sanityData} />;
  }

  const allProducts = await getSanityProducts();
  const popularBouquets = allProducts.slice(0, 4);

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(thokarNiazBaigBreadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(thokarNiazBaigFaqSchema) }}
      />
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/delivery-areas" className="hover:text-[#0B0B0B] transition-colors">Delivery Areas</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Thokar Niaz Baig Lahore</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
          Interchange • M-2 Motorway Link
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Flower Delivery in Thokar Niaz Baig Lahore
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Thokar Niaz Baig sits at Lahore&apos;s southwestern gateway — the interchange where the M-2 motorway meets Multan Road, feeding Johar Town, Wapda Town and the Raiwind Road corridor. Our riders know this junction and its surrounding blocks well, reaching most addresses in 2 to 3 hours for a flat fee of Rs. 300. Our florists send you a photo on WhatsApp before your bouquet leaves, and we deliver to homes, offices and businesses around the interchange. To order, WhatsApp 0310-4225974 any time between 9 AM and 1 AM with your block and street details — approve the bouquet photo we send, then pay by COD, JazzCash, EasyPaisa, bank transfer or international card.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#8B1E2D]" /> 2 to 3 hours • Rs. 300 flat delivery fee</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo on WhatsApp before it leaves</span>
          <a
            href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20flowers%20to%20Thokar%20Niaz%20Baig%20Lahore."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#8B1E2D] font-semibold hover:text-[#C6A15B]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order to Thokar Niaz Baig on WhatsApp
          </a>
        </div>
      </section>

      {/* Delivery Time & Fee */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Wallet className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Delivery time & fee — Thokar Niaz Baig Lahore</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Delivery fee: Rs. 300 flat</strong> — around the Thokar Niaz Baig interchange, the Multan Road corridor near Thokar and nearby blocks. No hidden charges.</li>
          <li><strong>Delivery time: 2 to 3 hours</strong>, 7 days a week, from 9 AM to 1 AM. Interchange-side addresses are usually fastest; deeper blocks toward Wapda Town take the full window.</li>
          <li><strong>Midnight slot:</strong> 11:30 PM–12:15 AM every night with a Rs. 500 surcharge — message us on WhatsApp by the evening to reserve it.</li>
          <li><strong>Payments:</strong> cash on delivery (COD), JazzCash, EasyPaisa, bank transfer and international cards.</li>
          <li><strong>Prices start at Rs. 1,180.</strong> Call or WhatsApp <strong>0310-4225974</strong> and our Lahore florists will confirm your slot instantly.</li>
        </ul>
      </section>

      {/* Thokar Coverage */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <AlertCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Areas around Thokar Niaz Baig we cover</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Thokar Niaz Baig interchange:</strong> the junction itself and its immediate blocks — scheduled handoffs for travellers coming off the M-2 motorway.</li>
          <li><strong>M-2 motorway entry corridor:</strong> the approach roads and service areas at Lahore&apos;s motorway entry — coordinate with the rider by phone for exact pickup points.</li>
          <li><strong>Multan Road near Thokar:</strong> businesses, showrooms and housing along Multan Road&apos;s Thokar stretch — corporate and inauguration flowers.</li>
          <li><strong>Blocks bordering Johar Town:</strong> residential streets between Thokar and Johar Town — birthday and anniversary bouquets to family homes.</li>
          <li><strong>Wapda Town side:</strong> societies and blocks toward Wapda Town — housewarming arrangements and occasion gifts.</li>
          <li><strong>Raiwind Road start:</strong> the corridor&apos;s city-side beginning near Thokar — farmhouses and businesses along the early stretch.</li>
        </ul>
      </section>

      {/* Popular Occasions */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Gift className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Occasions we deliver for in Thokar Niaz Baig</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Because Thokar is Lahore&apos;s motorway gateway, a good share of our orders here are welcome-home surprises — families greeting relatives driving in from Islamabad or up-country with fresh bouquets timed to their arrival. Birthday and anniversary orders go to the surrounding residential blocks, while the Multan Road commercial stretch brings inauguration flowers and client thank-yous for showrooms and offices. Eid hampers and housewarming arrangements head to new homes on the Wapda Town side, and our midnight slot is popular for late-night birthday surprises. Whatever the occasion, your bouquet is photographed on WhatsApp before dispatch, so what arrives is exactly what you approved — with a free handwritten message card in every order.
        </p>
      </section>

      {/* FAQ */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Thokar Niaz Baig delivery — frequently asked questions</h2>
        </div>
        <div className="divide-y divide-[rgba(198,161,91,0.25)]">
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">How long does flower delivery to Thokar Niaz Baig take, and what is the fee?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Delivery to Thokar Niaz Baig takes 2 to 3 hours with a flat fee of Rs. 300. Blocks close to the interchange and Multan Road arrive at the faster end; orders deeper toward Wapda Town take the full window in peak traffic.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Which areas around Thokar Niaz Baig do you cover?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">We cover the Thokar Niaz Baig interchange and its surrounding blocks, the Multan Road corridor near Thokar, residential societies on the Wapda Town side, and blocks bordering Johar Town. Sharing your exact block, street and house number helps our rider reach you without delay.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">I am driving in from Islamabad — can you time the delivery for my arrival at Thokar?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes — scheduled deliveries are our specialty. Tell us your expected arrival time at the Thokar Niaz Baig interchange on WhatsApp (0310-4225974), and we will have the bouquet ready for handover or deliver it to your home or office nearby. For motorway-side handoffs, please stay on the phone with the rider.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">Do you deliver to offices and shops near the Thokar interchange?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Yes, we deliver to offices, showrooms and businesses around the Thokar Niaz Baig interchange and along Multan Road — inauguration flowers, client thank-yous and corporate bouquets are regular orders here. Share the building or plaza name with your floor or shop number.</p>
          </div>
          <div className="py-3 space-y-1">
            <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">WhatsApp par Thokar Niaz Baig ke liye order kaise karun?</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">0310-4225974 par likhein — masalan “Thokar Niaz Baig ke paas anniversary ke liye 50 surkh gulab ka guldasta chahiye, raat 8 baje tak.” Hum apko WhatsApp par phoolon ki photo bhej kar confirm karenge, phir rider rawana hoga. Cash on delivery, JazzCash, EasyPaisa, bank transfer aur international cards sab chalte hain.</p>
          </div>
        </div>
      </section>

      {/* How Ordering Works */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Package className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">How ordering works in Thokar Niaz Baig</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Ordering to the Thokar Niaz Baig area is straightforward — here is what happens after you message us:
        </p>
        <ol className="space-y-3 text-xs text-[#2A2A2A] leading-relaxed list-decimal list-inside">
          <li><strong>Tell us what you need.</strong> Browse the bouquets below or message <strong>0310-4225974</strong> on WhatsApp (open 9 AM–1 AM daily) with your block, street and house number, the occasion and your budget — or your expected arrival time if you are coming off the motorway. Our florists will suggest fresh options starting at Rs. 1,180.</li>
          <li><strong>Approve the photo.</strong> We tie your bouquet fresh and send you a photo on WhatsApp before the rider leaves. Nothing ships until you reply that it looks perfect — ask for tweaks and we redo it.</li>
          <li><strong>Pay your way and receive.</strong> Pay cash on delivery, JazzCash, EasyPaisa, bank transfer or an international card. The rider reaches your Thokar Niaz Baig address within 2–3 hours for the Rs. 300 flat fee — or in the midnight slot.</li>
        </ol>
      </section>

      {/* Popular Bouquets in Thokar Niaz Baig */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Most ordered bouquets in Thokar Niaz Baig Lahore</span>
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
          <Link href="/delivery-areas/johar-town" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Johar Town →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 250 • 2–3 hours. G1 Market, Emporium Mall.</p>
          </Link>
          <Link href="/delivery-areas/iqbal-town" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Iqbal Town →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 300 • 2–3 hours. Moon Market, blocks.</p>
          </Link>
          <Link href="/delivery-areas/faisal-town" className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Faisal Town →</p>
            <p className="text-xs text-[#2A2A2A]">Rs. 300 • 2–3 hours. Blocks near Johar Town.</p>
          </Link>
        </div>
      </section>
    </main>
  );
}
