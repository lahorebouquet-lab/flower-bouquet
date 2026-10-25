import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Truck, Camera, Heart, MapPin, Sparkles } from "lucide-react";
import { SITE_URL, whatsappLink } from "@/lib/business";
import RelatedProducts from "../components/RelatedProducts";
import DecorationAreaDetails from "../components/DecorationAreaDetails";
import { withSeo } from "@/lib/seo";

export const metadata: Metadata = withSeo("/birthday-decoration-dha-lahore", {
  title: { absolute: "Birthday Decoration in DHA Lahore | Book Online" },
  description: "Book birthday decoration in DHA Lahore — Vibrant balloon garlands. Free quote on WhatsApp, same-week slots available.",
  alternates: { canonical: `${SITE_URL}/birthday-decoration-dha-lahore` },
  openGraph: {
    title: "Birthday Decoration in DHA Lahore | Lahore Bouquet",
    description: "Vibrant balloon garlands. Book on WhatsApp today.",
    url: `${SITE_URL}/birthday-decoration-dha-lahore`,
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: "Birthday Decoration in DHA Lahore" }],
  }
});

const FAQS = [
  { q: "What is the price of birthday decoration in DHA Lahore?", a: "Prices depend on the venue size and flower selection. Message us on WhatsApp (0310-4225974) with your event date and venue in DHA Lahore for a free instant quote." },
  { q: "How early should I book birthday decoration in DHA Lahore?", a: "We recommend booking 1–2 weeks in advance for DHA Lahore, or 2–3 days ahead for a home or surprise setup. Last-minute bookings are sometimes possible — ask on WhatsApp." },
  { q: "Do you provide fresh flowers for the decoration?", a: "Yes — 100% fresh flowers, arranged on the day of your event. We send setup photos on WhatsApp for your approval." },
  { q: "Which venues in DHA Lahore have you decorated?", a: "We decorate homes, farmhouses, marquees, hotels and event halls across DHA Lahore. Share your venue name on WhatsApp and we'll plan the setup." },
  { q: "Can I customize the colour theme?", a: "Absolutely. Share your outfit or theme colours on WhatsApp (0310-4225974) and our team matches the flowers and drapes to your theme." }
];

export default function Page() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Birthday Decoration in DHA Lahore", item: `${SITE_URL}/birthday-decoration-dha-lahore` }] };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link><span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Birthday Decoration in DHA Lahore</span>
      </nav>
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" /> DHA Lahore • Fresh Flowers • Free Quote
        </span>
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">Birthday Decoration in DHA Lahore</h1>
        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Planning birthday decoration in <strong>DHA Lahore</strong>? Lahore Bouquet creates vibrant balloon garlands, fresh flower arrangements and themed setups for DHA homes and venues. Every setup uses <strong>100% fresh flowers</strong>, arranged on the day of your event — and we send you setup photos on WhatsApp for approval.
        </p>
        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          From a surprise bedroom setup to a full party at home, our decoration team handles everything: fresh floral arrangements, balloon garlands, backdrop draping and table centerpieces. We serve homes, farmhouses, hotels and event venues across DHA Lahore, with free quotes and flexible slots — including same-week and midnight surprise slots.
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
          <li><strong>Balloon garlands & arches</strong> — chrome, pastel or theme-colour balloons with name and age lettering.</li>
          <li><strong>Fresh flowers</strong> — roses and seasonal blooms woven into the backdrop and the cake table.</li>
          <li><strong>Cake table & photo corner</strong> — a styled table, fairy lights and a backdrop for photos.</li>
          <li><strong>Room surprise extras</strong> — rose petals, candles and a heart-shaped balloon set for a surprise reveal.</li>
        </ul>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Add <Link href="/helium-balloons-lahore" className="text-[#8B1E2D] underline">helium balloons</Link>, a <Link href="/teddy-bears-lahore" className="text-[#8B1E2D] underline">teddy bear</Link> or a <Link href="/birthday-surprises" className="text-[#8B1E2D] underline">birthday bouquet and cake</Link> to the setup.
        </p>
      </section>
      <section className="p-6 sm:p-8 rounded-2xl bg-[#0B0B0B] border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-white">Get a Free Quote in 3 Steps</h2>
        <ol className="space-y-3 text-xs sm:text-sm text-[#E5DED2] leading-relaxed list-decimal list-inside">
          <li><strong className="text-white">WhatsApp us:</strong> message <strong className="text-[#C6A15B]">0310-4225974</strong> with your event date, venue in DHA Lahore and theme colours.</li>
          <li><strong className="text-white">Get your quote:</strong> we send a free detailed quote with flower and setup options.</li>
          <li><strong className="text-white">We decorate:</strong> our team sets up on your event day — you approve photos on WhatsApp.</li>
        </ol>
        <a href={whatsappLink("Hello Lahore Bouquet! I want birthday decoration in DHA Lahore. My event date is ")} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">
          <MessageCircle className="w-4 h-4" /> Get Free Quote on WhatsApp
        </a>
      </section>
      <DecorationAreaDetails area="dha" kind="birthday" />
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
        <p>Related: <Link href="/delivery-areas/dha" className="text-[#8B1E2D] underline">flower delivery DHA Lahore</Link> • <Link href="/birthday-decoration-lahore" className="text-[#8B1E2D] underline">birthday decoration Lahore</Link> • <Link href="/prices" className="text-[#8B1E2D] underline">price list</Link></p>
      </section>
    </main>
  );
}
