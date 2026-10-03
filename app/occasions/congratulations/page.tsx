import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ALL_PRODUCTS } from "../../data/products";
import ProductCard from "../../components/ProductCard";
import { Sparkles, Truck, Camera, MessageCircle, Award } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Congratulations & Graduation Flowers in Lahore",
  },
  description: "Congratulation and graduation bouquets in Lahore. Sunflowers, mixed roses and money bouquets for new jobs, results and milestones.",
  openGraph: {
    title: "Congratulations & Graduation Flowers in Lahore",
    description: "Congratulation and graduation bouquets in Lahore. Sunflowers, mixed roses and money bouquets for new jobs, results and milestones.",
  }
};

export default function CongratulationsPage() {
  const congratsProducts = ALL_PRODUCTS.filter(p => 
    p.occasion && (p.occasion.includes("Congratulations") || p.occasion.includes("Graduation"))
  );

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-white/50 flex items-center gap-2">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-white/40">Occasions</span>
        <span>/</span>
        <span className="text-[#E11D48] font-semibold">Congratulations & Graduations</span>
      </nav>

      {/* Hero Category Banner */}
      <section className="bg-gradient-to-r from-[#171922] via-[#1A2333] to-[#171922] p-8 sm:p-12 rounded-2xl border border-blue-500/30 shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/40 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            Milestones & Success
          </span>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Congratulations and Graduation Flowers in Lahore
          </h1>

          <p className="text-white/80 text-xs sm:text-sm leading-relaxed font-light">
            New job? Exam results? First salary? Say well done with flowers. Sunflowers are the happy choice, mixed roses look festive, and a money bouquet is a favourite for graduates.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#E11D48]" /> Delivery in 2 to 5 hours</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#25D366]" /> Photo on WhatsApp before it leaves</span>
            <a 
              href="https://wa.me/923001234567?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20order%20congratulations%20flowers."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] font-semibold hover:underline"
            >
              <MessageCircle className="w-4 h-4" /> Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-white/60">
          <span>Showing {congratsProducts.length} congratulations and graduation bouquets</span>
          <span className="text-[#E11D48]">Same-day express delivery active in Lahore</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {congratsProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
