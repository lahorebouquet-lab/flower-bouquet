import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Truck, Camera, Heart, MapPin, Sparkles } from "lucide-react";
import { SITE_URL, whatsappLink } from "@/lib/business";
import RelatedProducts from "../components/RelatedProducts";

export const metadata: Metadata = {
  title: { absolute: "Birthday Decoration in Model Town Lahore | Book Online" },
  description: "Book birthday decoration in Model Town Lahore — Vibrant balloon garlands and fresh flower setups. Free quote on WhatsApp, same-week slots available.",
  alternates: { canonical: `${SITE_URL}/birthday-decoration-model-town-lahore` },
  openGraph: {
    title: "Birthday Decoration in Model Town Lahore | Lahore Bouquet",
    description: "Vibrant balloon garlands and fresh flower setups. Book on WhatsApp today.",
    url: `${SITE_URL}/birthday-decoration-model-town-lahore`,
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: "Birthday Decoration in Model Town Lahore" }],
  }
};

const FAQS = [
  { q: "What is the price of birthday decoration in Model Town Lahore?", a: "Prices depend on the venue size and flower selection. Message us on WhatsApp (0310-4225974) with your event date and venue in Model Town Lahore for a free instant quote." },
  { q: "How early should I book birthday decoration in Model Town Lahore?", a: "We recommend booking 1–2 weeks in advance for Model Town Lahore, especially during wedding season (Nov–Feb). Last-minute bookings are sometimes possible — ask on WhatsApp." },
  { q: "Do you provide fresh flowers for the decoration?", a: "Yes — 100% fresh flowers, arranged on the day of your event. We send setup photos on WhatsApp for your approval." },
  { q: "Which venues in Model Town Lahore have you decorated?", a: "We decorate homes, farmhouses, marquees, hotels and event halls across Model Town Lahore. Share your venue name on WhatsApp and we'll plan the setup." },
  { q: "Can I customize the colour theme?", a: "Absolutely. Share your outfit or theme colours on WhatsApp (0310-4225974) and our team matches the flowers and drapes to your theme." }
];

export default function Page() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Birthday Decoration in Model Town Lahore", item: `${SITE_URL}/birthday-decoration-model-town-lahore` }] };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link><span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Birthday Decoration in Model Town Lahore</span>
      </nav>
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" /> Model Town Lahore • Fresh Flowers • Free Quote
        </span>
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">Birthday Decoration in Model Town Lahore</h1>
        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Planning birthday decoration in <strong>Model Town Lahore</strong>? Lahore Bouquet creates elegant stage backdrops, fresh floral arches and entrance florals for Model Town wedding venues, farmhouses and marquees. Every setup uses <strong>100% fresh flowers</strong>, arranged on the day of your event — and we send you setup photos on WhatsApp for approval.
        </p>
        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          From intimate home functions to grand marquee events, our decoration team handles everything: fresh floral arrangements, balloon garlands, backdrop draping and table centerpieces. We serve homes, farmhouses, hotels and event venues across Model Town Lahore, with free quotes and flexible slots — even during peak wedding season.
        </p>
        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Sparkles className="w-4 h-4 text-[#8B1E2D]" /> 100% fresh flowers</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo approval on WhatsApp</span>
          <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#8B1E2D]" /> Setup on event day</span>
        </div>
      </section>
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <div className="flex items-center gap-2"><Heart className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">What's Included</h2></div>
        <ul className="space-y-2 text-xs sm:text-sm text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Fresh floral arrangements</strong> — roses, lilies, carnations and seasonal blooms in your theme colours.</li>
          <li><strong>Backdrop & stage styling</strong> — drapes, fairy lights and floral walls.</li>
          <li><strong>Table centerpieces</strong> — elegant fresh-flower arrangements for guest tables.</li>
          <li><strong>Entrance decor</strong> — welcoming floral arches and signage styling.</li>
        </ul>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Also see our <Link href="/wedding-room-decoration-lahore" className="text-[#8B1E2D] underline">wedding room decoration</Link>, <Link href="/wedding-car-decoration-lahore" className="text-[#8B1E2D] underline">wedding car decoration</Link> and <Link href="/gajray-lahore" className="text-[#8B1E2D] underline">fresh gajray</Link> services.
        </p>
      </section>
      <section className="p-6 sm:p-8 rounded-2xl bg-[#0B0B0B] border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-white">Get a Free Quote in 3 Steps</h2>
        <ol className="space-y-3 text-xs sm:text-sm text-[#E5DED2] leading-relaxed list-decimal list-inside">
          <li><strong className="text-white">WhatsApp us:</strong> message <strong className="text-[#C6A15B]">0310-4225974</strong> with your event date, venue in Model Town Lahore and theme colours.</li>
          <li><strong className="text-white">Get your quote:</strong> we send a free detailed quote with flower and setup options.</li>
          <li><strong className="text-white">We decorate:</strong> our team sets up on your event day — you approve photos on WhatsApp.</li>
        </ol>
        <a href={whatsappLink("Hello Lahore Bouquet! I want birthday decoration in Model Town Lahore. My event date is ")} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">
          <MessageCircle className="w-4 h-4" /> Get Free Quote on WhatsApp
        </a>
      </section>
      <RelatedProducts title="Add Fresh Flowers to Your Event" count={4} />
      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">FAQs</h2>
        <div className="space-y-3">{FAQS.map((f, i) => (
          <details key={i} className="p-5 rounded-2xl bg-white border border-[#E5DED2] group">
            <summary className="font-bold text-sm text-[#0B0B0B] cursor-pointer list-none flex justify-between items-center gap-2">{f.q}
              <span className="text-[#8B1E2D] group-open:rotate-45 transition-transform text-lg leading-none shrink-0">+</span></summary>
            <p className="text-sm mt-2 leading-relaxed">{f.a}</p>
          </details>))}
        </div>
      </section>
      <section className="text-xs text-[#777777]">
        <p>Related: <Link href="/flower-delivery-model-town-lahore" className="text-[#8B1E2D] underline">flower delivery Model Town Lahore</Link> • <Link href="/wedding-decor" className="text-[#8B1E2D] underline">wedding decor</Link> • <Link href="/prices" className="text-[#8B1E2D] underline">price list</Link></p>
      </section>
    </main>
  );
}
