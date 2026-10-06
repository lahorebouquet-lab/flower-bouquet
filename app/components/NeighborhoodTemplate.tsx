import React from "react";
import Link from "next/link";
import { getSanityProducts, type SanityAreaPage } from "@/sanity/lib/fetch";
import ProductCard from "./ProductCard";
import { MapPin, Clock, Camera, MessageCircle, Wallet, Gift, HelpCircle, Navigation, AlertCircle, Package } from "lucide-react";
import { SITE_URL, BUSINESS, whatsappLink } from "@/lib/business";

interface Props {
  data: SanityAreaPage;
}

/**
 * Renders a neighborhood delivery landing page from a Sanity `areaPage` document.
 * Visual style matches the original static area pages (e.g. app/delivery-areas/dha).
 */
export default async function NeighborhoodTemplate({ data }: Props) {
  const allProducts = await getSanityProducts();
  const popularBouquets = allProducts.slice(0, 4);

  const fee = data.deliveryFee || "Rs. 300";
  const time = data.deliveryTime || "2–3 hours";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
      { "@type": "ListItem", position: 2, name: "Delivery Areas", item: `${SITE_URL}/delivery-areas` },
      { "@type": "ListItem", position: 3, name: data.areaName, item: `${SITE_URL}/delivery-areas/${data.slug}` },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: (data.faqs || []).map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const waMessage = `Hello Lahore Bouquet! I want flower delivery in ${data.areaName}.`;

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
        <span className="text-[#8B1E2D] font-semibold">{data.areaName}</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
          {data.areaName} • Lahore
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          {data.title}
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          {data.intro}
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#8B1E2D]" /> {time} • {fee} delivery fee</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo & video on WhatsApp before dispatch</span>
          <a
            href={whatsappLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#8B1E2D] font-semibold hover:text-[#C6A15B]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Order to {data.areaName} on WhatsApp
          </a>
        </div>
      </section>

      {/* Delivery Time & Fee */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Wallet className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Delivery time & fee — {data.areaName}</h2>
        </div>
        <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Delivery fee: {fee}</strong> — across {data.areaName}, Lahore. No hidden charges.</li>
          <li><strong>Delivery time: {time}</strong>, 7 days a week, from 9 AM to 1 AM.</li>
          <li><strong>Midnight slot:</strong> available every night 11:30 PM – 12:15 AM — message us on WhatsApp by the evening to reserve it.</li>
          <li><strong>Payments:</strong> cash on delivery (COD), JazzCash, EasyPaisa, bank transfer and international cards.</li>
          <li><strong>Prices start at Rs. 1,180.</strong> Call or WhatsApp <strong>{BUSINESS.phone.local}</strong> and our Lahore florists will confirm your slot instantly.</li>
        </ul>
      </section>

      {/* Landmarks / Coverage */}
      {data.landmarks && data.landmarks.length > 0 && (
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-3 shadow-sm">
          <div className="flex items-center gap-2 text-[#0B0B0B]">
            <AlertCircle className="w-5 h-5 text-[#8B1E2D]" />
            <h2 className="font-playfair text-xl font-bold">Landmarks & coverage in {data.areaName}</h2>
          </div>
          <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
            {data.landmarks.map((lm, i) => (
              <li key={i}>{lm}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Popular for this area */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Gift className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">Popular for {data.areaName}</h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-3">
          <Link href="/bouquets" className="p-5 rounded-2xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Fresh Bouquets →</p>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Birthday, anniversary, apology and get-well bouquets from Rs. 1,180, hand-tied fresh.</p>
          </Link>
          <Link href="/birthday-surprises" className="p-5 rounded-2xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Birthday Surprises →</p>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Midnight 12 AM surprises with cake, teddy bear and balloons in one delivery.</p>
          </Link>
          <Link href="/wedding-decor" className="p-5 rounded-2xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
            <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">Wedding Décor →</p>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">Nikkah, mehndi and shaadi flower decoration for {data.areaName} venues and homes.</p>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-[#0B0B0B]">
            <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
            <h2 className="font-playfair text-xl font-bold">{data.areaName} delivery — frequently asked questions</h2>
          </div>
          <div className="divide-y divide-[rgba(198,161,91,0.25)]">
            {data.faqs.map((f, i) => (
              <div key={i} className="py-3 space-y-1">
                <h3 className="text-xs sm:text-sm font-bold text-[#0B0B0B]">{f.question}</h3>
                <p className="text-xs text-[#2A2A2A] leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* How Ordering Works */}
      <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <Package className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-xl font-bold">How ordering works in {data.areaName}</h2>
        </div>
        <ol className="space-y-3 text-xs text-[#2A2A2A] leading-relaxed list-decimal list-inside">
          <li><strong>Tell us what you need.</strong> Browse the bouquets below or message <strong>{BUSINESS.phone.local}</strong> on WhatsApp (open 9 AM–1 AM daily) with your {data.areaName} address, the occasion and your budget. Our florists will suggest fresh options starting at Rs. 1,180.</li>
          <li><strong>Approve the photo & video.</strong> We tie your bouquet fresh and send you a photo and video on WhatsApp before the rider leaves. Nothing ships until you reply that it looks perfect.</li>
          <li><strong>Pay your way and receive.</strong> Pay cash on delivery, JazzCash, EasyPaisa, bank transfer or an international card. The rider reaches {data.areaName} within {time} for a {fee} fee — or in the midnight slot.</li>
        </ol>
      </section>

      {/* Popular Bouquets */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Most ordered bouquets in {data.areaName}</span>
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
      {data.nearbyAreas && data.nearbyAreas.length > 0 && (
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] space-y-4 shadow-sm">
          <div className="flex items-center gap-2 text-[#0B0B0B]">
            <Navigation className="w-5 h-5 text-[#8B1E2D]" />
            <h2 className="font-playfair text-xl font-bold">Nearby areas we also deliver</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            {data.nearbyAreas.map((a, i) => (
              <Link key={i} href={`/delivery-areas/${a.slug}`} className="p-4 rounded-xl border border-[rgba(198,161,91,0.25)] hover:border-[#8B1E2D] transition-colors space-y-1">
                <p className="text-xs sm:text-sm font-bold text-[#8B1E2D]">{a.name} →</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
