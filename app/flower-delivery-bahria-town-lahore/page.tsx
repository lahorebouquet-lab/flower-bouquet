import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Truck, Camera, Heart, MapPin, MoonStar } from "lucide-react";
import { SITE_URL, whatsappLink } from "@/lib/business";
import RelatedProducts from "../components/RelatedProducts";

export const metadata: Metadata = {
  title: { absolute: "Flower Delivery in Bahria Town Lahore | Same-Day Bouquets" },
  description: "Order flowers online in Bahria Town Lahore — fresh bouquets from Rs. 349 with free same-day delivery across all Bahria Town sectors.",
  alternates: { canonical: `${SITE_URL}/flower-delivery-bahria-town-lahore` },
  openGraph: {
    title: "Flower Delivery in Bahria Town Lahore | Same-Day Bouquets",
    description: "Fresh bouquets delivered same-day across Bahria Town Lahore. Free delivery, photo approval on WhatsApp.",
    url: `${SITE_URL}/flower-delivery-bahria-town-lahore`,
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: "Flower delivery in Bahria Town Lahore" }],
  }
};

const FAQS = [
  { q: "Do you deliver flowers in Bahria Town Lahore on the same day?", a: "Yes. We deliver fresh bouquets the same day across all Bahria Town sectors. Order before our daily cutoff and your flowers arrive within 2–5 hours. Delivery is free." },
  { q: "What is the price of a flower bouquet in Bahria Town?", a: "Our bouquets start at Rs. 349. Message us on WhatsApp (0310-4225974) for today's exact prices and availability." },
  { q: "Which Bahria Town sectors do you deliver to?", a: "We deliver to all Bahria Town sectors in Lahore — Sector A, B, C, D, E, F and surrounding blocks. Same-day delivery, free of charge." },
  { q: "Can I send flowers to Bahria Town from abroad?", a: "Absolutely. Overseas Pakistanis in the UK, USA, UAE and Canada use us regularly. Pay by international card, approve the photo on WhatsApp, and we handle the Bahria Town delivery." },
  { q: "Do you offer midnight delivery in Bahria Town?", a: "Yes — midnight surprise delivery is available in Bahria Town for birthdays and anniversaries. Book a day in advance on WhatsApp (0310-4225974)." },
  {
    q: "How do I order flower delivery in Bahria Town Lahore?",
    a: "Ordering flower delivery in Bahria Town Lahore is easy — browse our bouquets, pick your favourite, and check out in under 2 minutes. We hand-tie your flowers fresh and deliver them the same day across Bahria Town Lahore with free shipping."
  },
  {
    q: "Is flower delivery in Bahria Town Lahore really free?",
    a: "Yes! Flower delivery in Bahria Town Lahore comes with free standard shipping on every order. No hidden charges, no minimum order — just fresh flowers delivered to your doorstep."
  },
];

const AREAS = ["Sector A", "Sector B", "Sector C", "Sector D", "Sector E", "Sector F", "Bahria Orchard", "Iqbal Block", "Quaid Block"];

export default function Page() {
  const breadcrumbSchema = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
    { "@type": "ListItem", position: 2, name: "Flower Delivery in Bahria Town Lahore", item: `${SITE_URL}/flower-delivery-bahria-town-lahore` }] };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link><span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Flower Delivery in Bahria Town Lahore</span>
      </nav>
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" /> Bahria Town Lahore • Free Same-Day Delivery
        </span>
        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">Flower Delivery in Bahria Town Lahore — Fresh Bouquets, Same Day</h1>
        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Looking for <strong>flower delivery in Bahria Town Lahore</strong>? Lahore Bouquet delivers fresh, hand-tied bouquets across every Bahria Town sector — from classic red rose bouquets starting at Rs. 349 to premium mixed arrangements. Order before our daily cutoff and your flowers arrive within <strong>2–5 hours</strong>, with a real photo sent to your WhatsApp for approval before dispatch. Delivery is <strong>free</strong> across all Bahria Town sectors.
        </p>
        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          Bahria Town families celebrate in style — birthdays, anniversaries, nikkah ceremonies and housewarmings. Our florists prepare every order fresh on the day of delivery and serve homes, farmhouses and event venues across Bahria Town. Overseas Pakistanis regularly use us to send flowers to family in Bahria Town Lahore.
        </p>
        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#8B1E2D]" /> Same-day 2–5 hour delivery</span>
          <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Photo approval on WhatsApp first</span>
          <span className="flex items-center gap-1.5"><MoonStar className="w-4 h-4 text-[#8B1E2D]" /> Midnight delivery available</span>
        </div>
      </section>
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <div className="flex items-center gap-2"><MapPin className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Bahria Town Areas We Deliver To</h2></div>
        <div className="flex flex-wrap gap-2">{AREAS.map((a) => (
          <span key={a} className="px-3 py-1.5 rounded-full bg-[#F8F3EA] border border-[rgba(198,161,91,0.35)] text-xs font-medium text-[#2A2A2A]">{a}</span>))}
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          Free same-day delivery across Bahria Town. Also serving <Link href="/flower-delivery-in-lahore" className="text-[#8B1E2D] underline">all of Lahore</Link> including <Link href="/flower-delivery-dha-lahore" className="text-[#8B1E2D] underline">DHA</Link>, <Link href="/flower-delivery-gulberg-lahore" className="text-[#8B1E2D] underline">Gulberg</Link> and <Link href="/flower-delivery-model-town-lahore" className="text-[#8B1E2D] underline">Model Town</Link>.
        </p>
      </section>
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <div className="flex items-center gap-2"><Heart className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Perfect for Every Bahria Town Occasion</h2></div>
        <ul className="space-y-2 text-xs sm:text-sm text-[#2A2A2A] list-disc list-inside leading-relaxed">
          <li><strong>Birthdays:</strong> vibrant bouquets with personalized cards, delivered to Bahria homes.</li>
          <li><strong>Anniversaries:</strong> romantic roses with midnight surprise delivery.</li>
          <li><strong>Housewarmings:</strong> elegant arrangements for new Bahria homes.</li>
          <li><strong>Weddings:</strong> bridal bouquets, <Link href="/gajray-lahore" className="text-[#8B1E2D] underline">gajray</Link> and <Link href="/bridal-room-decoration-lahore" className="text-[#8B1E2D] underline">bridal room decoration</Link>.</li>
        </ul>
      </section>
      <section className="p-6 sm:p-8 rounded-2xl bg-[#0B0B0B] border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-white">How to Order in 3 Steps</h2>
        <ol className="space-y-3 text-xs sm:text-sm text-[#E5DED2] leading-relaxed list-decimal list-inside">
          <li><strong className="text-white">WhatsApp us:</strong> message <strong className="text-[#C6A15B]">0310-4225974</strong> with the bouquet and Bahria Town delivery address.</li>
          <li><strong className="text-white">Approve the photo:</strong> we send a real photo before dispatch.</li>
          <li><strong className="text-white">Pay & receive:</strong> COD, JazzCash, EasyPaisa, bank transfer or international card. Same-day in 2–5 hours.</li>
        </ol>
        <a href={whatsappLink("Hello Lahore Bouquet! I want flower delivery in Bahria Town Lahore.")} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">
          <MessageCircle className="w-4 h-4" /> Order Flowers in Bahria Town on WhatsApp
        </a>
      </section>
      <RelatedProducts title="Popular Bouquets for Bahria Town" count={4} />
      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Bahria Town Flower Delivery FAQs</h2>
        <div className="space-y-3">{FAQS.map((f, i) => (
          <details key={i} className="p-5 rounded-2xl bg-white border border-[#E5DED2] group">
            <summary className="font-bold text-sm text-[#0B0B0B] cursor-pointer list-none flex justify-between items-center gap-2">{f.q}
              <span className="text-[#8B1E2D] group-open:rotate-45 transition-transform text-lg leading-none shrink-0">+</span></summary>
            <p className="text-sm mt-2 leading-relaxed">{f.a}</p>
          </details>))}
        </div>
      </section>
      <section className="text-xs text-[#777777]">
        <p>Related: <Link href="/flower-delivery-in-lahore" className="text-[#8B1E2D] underline">flower delivery Lahore</Link> • <Link href="/flower-delivery-dha-lahore" className="text-[#8B1E2D] underline">DHA</Link> • <Link href="/prices" className="text-[#8B1E2D] underline">price list</Link></p>
      </section>
    </main>
  );
}
