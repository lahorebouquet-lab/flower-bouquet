import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Prices in Lahore 2026 | Bouquet Price Guide",
  },
  description: "See what fresh flowers cost in Lahore: single roses, dozens, 50-rose bouquets, money bouquets, cakes and wedding décor. Updated prices.",
  openGraph: {
    title: "Flower Prices in Lahore 2026 | Bouquet Price Guide",
    description: "See what fresh flowers cost in Lahore: single roses, dozens, 50-rose bouquets, money bouquets, cakes and wedding décor. Updated prices.",
  }
};

export const PRICE_TABLE_ITEMS = [
  { item: "Single long-stem rose (red or white)", price: "Rs. 1,180", link: "/roses/red-roses" },
  { item: "Two sunflowers with baby's breath", price: "Rs. 1,590", link: "/sunflowers" },
  { item: "12 to 15 red roses with baby's breath", price: "Rs. 1,900", link: "/roses/red-roses" },
  { item: "12 white roses with baby's breath", price: "Rs. 2,200", link: "/roses/white-roses" },
  { item: "Handmade crochet sunflower bouquet", price: "Rs. 2,400", link: "/crochet-bouquets" },
  { item: "Sunflower and rose mix", price: "Rs. 2,650", link: "/sunflowers" },
  { item: "Ferrero Rocher and rose bouquet", price: "Rs. 3,900", link: "/gifts-and-cakes" },
  { item: "Money bouquet with roses", price: "Rs. 4,500", link: "/money-bouquets" },
  { item: "Mehndi fresh flower jewellery set", price: "Rs. 4,500", link: "/wedding-decor" },
  { item: "50 red roses", price: "Rs. 5,500", link: "/roses/red-roses" },
  { item: "Cake and acrylic flower box", price: "Rs. 6,800", link: "/gifts-and-cakes" },
  { item: "Wedding car decoration", price: "Rs. 8,500", link: "/wedding-decor" },
  { item: "50 white roses", price: "Rs. 8,900", link: "/roses/white-roses" },
  { item: "Bridal room canopy décor", price: "Rs. 14,500", link: "/wedding-decor" },
];

export default function PriceGuidePage() {
  const tableSchema = {
    "@context": "https://schema.org",
    "@type": "Table",
    about: "Fresh flower bouquet and décor price list in Lahore for 2026"
  };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(tableSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Price Guide</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <Clock className="w-3.5 h-3.5 text-[#C6A15B]" />
          Transparent Pricing • No Hidden Costs
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Flower Prices in Lahore, 2026
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          We'd rather show you our prices than make you ask. Here's what you'll pay at Lahore Bouquet. Prices can change with the season and around big days like Valentine's Day, so we update this page whenever they do. <strong className="text-[#0B0B0B]">Last updated: September 2026</strong>
        </p>
      </section>

      {/* Price Guide Table */}
      <section className="bg-white rounded-2xl border border-[rgba(198,161,91,0.25)] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-[#0B0B0B] border-b border-[rgba(198,161,91,0.25)] text-white font-semibold">
                <th className="p-4 sm:p-5">Item</th>
                <th className="p-4 sm:p-5 text-right sm:text-left">Starting price</th>
                <th className="p-4 sm:p-5 hidden sm:table-cell text-right">Order Link</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5DED2] text-[#2A2A2A]">
              {PRICE_TABLE_ITEMS.map((row, idx) => (
                <tr key={idx} className="hover:bg-[#F8F3EA]/70 transition-colors">
                  <td className="p-4 sm:p-5 font-medium text-[#0B0B0B] flex items-center gap-2">
                    <span>{row.item}</span>
                  </td>
                  <td className="p-4 sm:p-5 font-bold text-[#8B1E2D] whitespace-nowrap text-right sm:text-left">
                    {row.price}
                  </td>
                  <td className="p-4 sm:p-5 text-right hidden sm:table-cell">
                    <Link
                      href={row.link}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#0B0B0B] hover:text-[#8B1E2D] transition-colors"
                    >
                      <span>View Bouquet</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Why do prices change & Delivery Charges FAQ */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-3">
          <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">Why do prices change?</h2>
          <p className="text-xs text-[#2A2A2A] leading-relaxed">
            Imported roses cost more around Valentine's Day and wedding season due to global international auction prices. Cakes vary by weight (1 lb vs 2 lb). Décor pricing depends on the room size and custom drapery density.
          </p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-3 flex flex-col justify-between">
          <div className="space-y-3">
            <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">Is delivery extra?</h2>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">
              Delivery charges depend on your delivery sector in Lahore (typically Rs. 200–350 depending on distance from our MM Alam Road Gulberg flower shop). We always tell you the exact delivery charge before you confirm your order.
            </p>
          </div>
          <div className="pt-2 border-t border-[#E5DED2]">
            <a
              href="https://wa.me/923094895080?text=Hello%20Lahore%20Bouquet!%20What%20would%20delivery%20cost%20to%20my%20area?"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8B1E2D] hover:text-[#C6A15B] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Ask about delivery charge to your sector →</span>
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp Immediate Quote Strip (Section 10 Promo / Luxury Black Banner) */}
      <section className="p-6 sm:p-8 rounded-2xl bg-[#0B0B0B] border border-[rgba(198,161,91,0.30)] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-sm font-bold text-white">Need a custom quote or have a specific budget in mind?</div>
          <div className="text-xs text-[#F8F3EA]/75">Message our Gulberg florists on WhatsApp. We will suggest the fullest bouquet within your budget.</div>
        </div>

        <a
          href="https://wa.me/923094895080?text=Hello%20Lahore%20Bouquet!%20I%20have%20a%20budget%20of%20Rs.%20"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-3 rounded-xl bg-[#8B1E2D] hover:bg-[#C6A15B] text-white hover:text-[#0B0B0B] font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all whitespace-nowrap"
        >
          <MessageCircle className="w-4 h-4 text-white" />
          <span>Chat on WhatsApp</span>
        </a>
      </section>
    </main>
  );
}
