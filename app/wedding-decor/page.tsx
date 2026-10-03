import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ALL_PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Sparkles, Truck, Camera, MessageCircle, HelpCircle, Calendar, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Wedding Room & Car Flower Decoration in Lahore",
  },
  description: "Fresh flower bridal room canopy and wedding car decoration in Lahore. Setup at your home or venue. Book early. Prices from Rs. 8,500.",
  openGraph: {
    title: "Wedding Room & Car Flower Decoration in Lahore",
    description: "Fresh flower bridal room canopy and wedding car decoration in Lahore. Setup at your home or venue. Book early. Prices from Rs. 8,500.",
  }
};

export default function WeddingDecorPage() {
  const weddingProducts = ALL_PRODUCTS.filter(p => p.category === "Wedding Décor");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do you set up at the venue?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, anywhere in Lahore."
        }
      },
      {
        "@type": "Question",
        name: "Do the flowers smell?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Fresh roses do, and that is the point. Tell us if anyone in the room has an allergy."
        }
      }
    ]
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-white/50 flex items-center gap-2">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#E11D48] font-semibold">Wedding & Car Décor</span>
      </nav>

      {/* Hero Category Banner */}
      <section className="bg-gradient-to-r from-[#1C1217] via-[#2D121F] to-[#1C1217] p-8 sm:p-12 rounded-2xl border border-[#E11D48]/30 shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E11D48]/20 text-[#F43F5E] border border-[#E11D48]/40 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            On-Site Floral Artistry
          </span>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Wedding Room and Car Décor in Lahore
          </h1>

          <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-light">
            We decorate the rooms and cars that matter most on your wedding day. Our team comes to your home or venue, sets up the canopy or car flowers, and leaves the space ready before the guests arrive.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#E11D48]" /> On-site setup at home or venue</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#25D366]" /> 100% Fresh Motia & Rose Garlands</span>
            <a 
              href="https://wa.me/923001234567?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20book%20wedding%20decor."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] font-semibold hover:underline"
            >
              <MessageCircle className="w-4 h-4" /> Book Consultation on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* What we offer & Booking tips */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#17171E] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
          <h2 className="font-playfair text-xl font-bold text-white">What we offer</h2>
          <ul className="space-y-2.5 text-xs text-white/70">
            <li className="p-3 rounded-xl bg-[#121217] border border-white/5">
              <strong className="text-white block text-sm text-[#E11D48]">Bridal room canopy décor (From Rs. 14,500)</strong>
              Fabric drapes, fresh rose garlands, petals on the bed.
            </li>
            <li className="p-3 rounded-xl bg-[#121217] border border-white/5">
              <strong className="text-white block text-sm text-[#E11D48]">Wedding car decoration (From Rs. 8,500)</strong>
              Fresh flowers with ribbons and a clean finish.
            </li>
            <li className="p-3 rounded-xl bg-[#121217] border border-white/5">
              <strong className="text-white block text-sm text-[#E11D48]">Mehndi flower jewellery (Rs. 4,500)</strong>
              Haath phool and matha patti made of fresh flowers.
            </li>
          </ul>
        </div>

        <div className="bg-[#17171E] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-3">
          <h2 className="font-playfair text-xl font-bold text-white">Booking tips</h2>
          <ul className="space-y-2 text-xs text-white/70 list-disc list-inside leading-relaxed">
            <li>Book at least a few days ahead in wedding season.</li>
            <li>Send us the room size and a photo of your bed and ceiling so we can plan drapes correctly.</li>
            <li>Tell us the setup time. We prefer to finish at least an hour before guests arrive.</li>
          </ul>
          <div className="pt-3">
            <a
              href="https://wa.me/923001234567?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20send%20photos%20for%20a%20wedding%20booking."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#25D366] hover:underline"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Share room photos on WhatsApp for custom quote →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>Showing wedding decor and jewellery services</span>
          <span className="text-[#E11D48]">On-site execution in Lahore</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {weddingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Category FAQ */}
      <section className="bg-[#17171C] p-8 sm:p-10 rounded-2xl border border-white/10 space-y-6">
        <div className="flex items-center gap-2 text-white">
          <HelpCircle className="w-5 h-5 text-[#E11D48]" />
          <h2 className="font-playfair text-2xl font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-white/70 leading-relaxed">
          <div className="space-y-1.5 p-4 rounded-xl bg-[#121217] border border-white/5">
            <h3 className="font-semibold text-white text-sm">Do you set up at the venue?</h3>
            <p>Yes, anywhere in Lahore.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#121217] border border-white/5">
            <h3 className="font-semibold text-white text-sm">Do the flowers smell?</h3>
            <p>Fresh roses do, and that is the point. Tell us if anyone in the room has an allergy.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
