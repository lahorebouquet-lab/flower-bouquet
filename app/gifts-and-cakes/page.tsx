import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ALL_PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Gift, Truck, Camera, MessageCircle, HelpCircle, Cake } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Flowers with Cake & Gifts Delivery in Lahore",
  },
  description: "Send cake, chocolate and flower combos in Lahore. Ferrero Rocher bouquets, birthday cake with flower box. Same-day delivery, photo on WhatsApp.",
  openGraph: {
    title: "Flowers with Cake & Gifts Delivery in Lahore",
    description: "Send cake, chocolate and flower combos in Lahore. Ferrero Rocher bouquets, birthday cake with flower box. Same-day delivery, photo on WhatsApp.",
  }
};

export default function GiftsAndCakesPage() {
  const giftProducts = ALL_PRODUCTS.filter(p => p.category === "Gifts & Cakes");

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What cake flavours are available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Belgian Chocolate Fudge, Red Velvet, Nutella, and Salted Caramel."
        }
      },
      {
        "@type": "Question",
        name: "Can you write a name on the cake?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, complimentary custom cake piping and a handwritten greeting card are included."
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
        <span className="text-[#E11D48] font-semibold">Gifts & Cakes</span>
      </nav>

      {/* Hero Category Banner */}
      <section className="bg-gradient-to-r from-[#20141A] via-[#2A1522] to-[#20141A] p-8 sm:p-12 rounded-2xl border border-[#E11D48]/30 shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E11D48]/20 text-[#F43F5E] border border-[#E11D48]/40 text-xs font-bold uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5" />
            Celebration Gift Combos
          </span>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Cakes, Chocolates and Gift Combos in Lahore
          </h1>

          <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-light">
            If flowers alone feel too small, combine them. A Ferrero Rocher bouquet works for people who love chocolate. A birthday cake with a flower box works when you can't be there in person. We bundle everything, deliver it together, and send you a photo first.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#E11D48]" /> Delivery in 2 to 5 hours</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#25D366]" /> Photo on WhatsApp before it leaves</span>
            <a 
              href="https://wa.me/923001234567?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20a%20cake%20and%20flower%20combo."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] font-semibold hover:underline"
            >
              <MessageCircle className="w-4 h-4" /> Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Popular Combos */}
      <section className="bg-[#17171E] p-6 sm:p-8 rounded-2xl border border-white/10 space-y-4">
        <h2 className="font-playfair text-xl font-bold text-white">Popular combos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-white/70">
          <div className="p-4 rounded-xl bg-[#121217] border border-white/5 space-y-1">
            <h3 className="font-bold text-white text-sm">Ferrero Rocher and velvet rose bouquet</h3>
            <div className="text-[#E11D48] font-bold">Rs. 3,900</div>
            <p>16 Ferrero Rocher chocolates with 8 imported red roses in luxury wrapping.</p>
          </div>
          <div className="p-4 rounded-xl bg-[#121217] border border-white/5 space-y-1">
            <h3 className="font-bold text-white text-sm">Birthday cake and acrylic flower box with fairy lights</h3>
            <div className="text-[#E11D48] font-bold">Rs. 6,800</div>
            <p>1.5 lb gourmet cake, fresh flower box, warm fairy lights and handwritten card.</p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>Showing cake, chocolate and flower gift bundles</span>
          <span className="text-[#E11D48]">Same-day express delivery active in Lahore</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {giftProducts.map((product) => (
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
            <h3 className="font-semibold text-white text-sm">What cake flavours are available?</h3>
            <p>Belgian Chocolate Fudge, Red Velvet, Nutella, and Salted Caramel.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#121217] border border-white/5">
            <h3 className="font-semibold text-white text-sm">Can you write a name on the cake?</h3>
            <p>Yes, complimentary custom cake piping and a handwritten greeting card are included.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
