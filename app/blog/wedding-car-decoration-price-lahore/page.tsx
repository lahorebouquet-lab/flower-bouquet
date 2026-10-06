import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, BUSINESS, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Wedding Car Decoration Prices in Lahore (2026) | Fresh vs Artificial",
  },
  description: "Wedding car decoration in Lahore 2026 — fresh flower car decor Rs. 8,000–25,000, artificial Rs. 3,500–8,000, luxury imported Rs. 20,000–40,000. Booking tips & same-day baraat car styling.",
  alternates: {
    canonical: `${SITE_URL}/blog/wedding-car-decoration-price-lahore`,
  },
  openGraph: {
    title: "Wedding Car Decoration Prices in Lahore (2026)",
    description: "Fresh flower car decor Rs. 8,000–25,000, artificial from Rs. 3,500 — real 2026 Lahore rates and booking guide.",
    url: `${SITE_URL}/blog/wedding-car-decoration-price-lahore`,
    type: "article",
  }
};

const FAQS = [
  {
    q: "How much does wedding car decoration cost in Lahore?",
    a: "Fresh flower car decoration costs Rs. 8,000–25,000 depending on flower quantity and type; artificial (silk) car decor costs Rs. 3,500–8,000; luxury imported-rose car styling runs Rs. 20,000–40,000. Share your car model and date on WhatsApp 0310-4225974 for an exact quote."
  },
  {
    q: "Fresh flowers or artificial — which is better for car decoration?",
    a: "Fresh flowers look richer in photos and smell wonderful, but they wilt in heat and cost 2–3x more. Artificial decor survives long baraat routes and summer weddings, and can be reused. For winter weddings (Nov–Feb), fresh is the clear winner."
  },
  {
    q: "How far in advance should I book car decoration?",
    a: "Book 5–7 days ahead in wedding season (November–February); 2–3 days is usually fine off-season. Friday–Sunday baraat dates fill fastest — early booking also locks the price before seasonal flower hikes."
  },
  {
    q: "Do you decorate the car at our home or do we bring it?",
    a: "Our team comes to your home, farmhouse or venue — we decorate the car on-site 2–3 hours before the baraat. Just share your location and the car's make and colour on WhatsApp."
  },
  {
    q: "Can car decoration match my wedding theme colours?",
    a: "Yes — tell us your theme (red-gold, blush-pink, white-green) and we match the flowers, ribbons and net to it. Send a photo of your outfit or stage decor and our team will coordinate everything."
  }
];

export default function WeddingCarDecorationPricePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Wedding Car Decoration Prices in Lahore (2026)",
    description: "Fresh vs artificial wedding car decor rates in Lahore, booking tips and theme matching.",
    author: { "@type": "Organization", name: "Lahore Bouquet Florist Team", url: `${SITE_URL}` },
    publisher: { "@type": "Organization", name: "Lahore Bouquet", url: `${SITE_URL}` },
    datePublished: "2026-10-06",
    dateModified: "2026-10-06",
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-10 bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B]">Home</Link><span>/</span>
        <Link href="/blog" className="hover:text-[#0B0B0B]">Blog</Link><span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Car Decoration Prices</span>
      </nav>
      <header className="space-y-4">
        <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">Price Guide • October 2026</span>
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B0B0B] leading-tight">Wedding Car Decoration Prices in Lahore (2026)</h1>
        <p className="text-sm text-[#777777]">By Lahore Bouquet Florist Team • Updated 6 October 2026 • 5 min read</p>
        <p className="text-sm sm:text-base leading-relaxed"><strong>Quick answer:</strong> Fresh flower car decor costs <strong>Rs. 8,000–25,000</strong>, artificial decor <strong>Rs. 3,500–8,000</strong>, and luxury imported-rose styling <strong>Rs. 20,000–40,000</strong>. We decorate at your home or venue, 2–3 hours before the baraat — book on WhatsApp <strong>{BUSINESS.phone.intl}</strong>.</p>
      </header>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">2026 Car Decoration Price Ranges</h2>
        <div className="grid sm:grid-cols-3 gap-3">
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]">
            <div className="font-bold text-sm">Artificial (Silk) Decor</div>
            <p className="text-sm mt-1">Rs. 3,500–8,000. Survives heat & long routes, reusable. Best for summer baraats.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[#C6A15B] shadow-sm">
            <div className="font-bold text-sm">Fresh Flower Decor <span className="text-xs text-[#8B1E2D] font-bold">★ Most booked</span></div>
            <p className="text-sm mt-1">Rs. 8,000–25,000. Local roses, carnations & seasonal blooms — richest in photos.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[#E5DED2]">
            <div className="font-bold text-sm">Luxury Imported Styling</div>
            <p className="text-sm mt-1">Rs. 20,000–40,000. Imported roses, orchids & full bonnet-to-boot coverage.</p>
          </div>
        </div>
        <p className="text-sm leading-relaxed">Decorating the full wedding? See our <Link href="/wedding-decor" className="text-[#8B1E2D] underline font-semibold">wedding decoration services in Lahore</Link> — stage, car, room and entrance packages booked together save 10–15%.</p>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Booking Tips (Save Money & Stress)</h2>
        <ul className="space-y-2 text-sm list-disc list-inside leading-relaxed">
          <li><strong>Book 5–7 days ahead</strong> in wedding season (Nov–Feb) — Friday–Sunday dates fill first and flower prices climb.</li>
          <li><strong>Share car make & colour</strong> — a white Corolla and a black Honda City need different flower palettes; photos help us plan.</li>
          <li><strong>Match your theme</strong> — send your stage or outfit colours; we coordinate ribbons, net and blooms to the same palette.</li>
          <li><strong>Confirm the timing</strong> — we arrive 2–3 hours before the baraat; share the exact pickup address and a contact number.</li>
          <li><strong>Bundle & save</strong> — car + bridal room + stage booked together costs less than three separate bookings.</li>
        </ul>
        <a href={whatsappLink("Hello Lahore Bouquet! I need wedding car decoration in Lahore. Please share prices and available dates.")} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">Get a Car Decor Quote on WhatsApp</a>
      </section>

      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <details key={i} className="p-5 rounded-2xl bg-white border border-[#E5DED2] group">
              <summary className="font-bold text-sm text-[#0B0B0B] cursor-pointer list-none flex justify-between items-center">{f.q}<span className="text-[#8B1E2D] group-open:rotate-45 transition-transform text-lg leading-none">+</span></summary>
              <p className="text-sm mt-2 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </article>
  );
}
