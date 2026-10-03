import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, Truck, ShieldCheck, MessageCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Delivery Areas in Lahore | DHA, Gulberg, Bahria",
  },
  description: "We deliver flowers to DHA, Gulberg, Bahria Town, Model Town, Johar Town, Cantt, Askari and more across Lahore in 2 to 5 hours.",
  alternates: {
    canonical: "https://lahorebouquet.com/delivery-areas",
  },
  openGraph: {
    title: "Flower Delivery Areas in Lahore | DHA, Gulberg, Bahria",
    description: "We deliver flowers to DHA, Gulberg, Bahria Town, Model Town, Johar Town, Cantt, Askari and more across Lahore in 2 to 5 hours.",
    url: "https://lahorebouquet.com/delivery-areas",
  }
};

export const LAHORE_ZONES = [
  { name: "DHA Lahore (Phases 1 to 9)", time: "2 to 3 hours", slug: "/delivery-areas/dha", highlight: "Phases 1–9, Sector Y, Raya, Phase 5 Commercial" },
  { name: "Gulberg (I, II & III)", time: "30 to 90 mins", slug: "/delivery-areas/gulberg", highlight: "MM Alam Road, Main Boulevard, Mini Market, Liberty" },
  { name: "Bahria Town & Lake City", time: "2.5 to 4 hours", slug: "/delivery-areas/bahria-town", highlight: "Sectors A–F, Safari Villas, Lake City Ring Road" },
  { name: "Model Town & Garden Town", time: "1.5 to 2.5 hours", slug: "/delivery-areas/model-town", highlight: "Blocks A to M, Model Town Link Road, Barkat Market" },
  { name: "Johar Town & Faisal Town", time: "2 to 3 hours", slug: "/delivery-areas/johar-town", highlight: "G1 Market, Shaukat Khanum, Emporium Mall, Kotha Pind" },
  { name: "Cantt & Cavalry Ground", time: "2 to 2.5 hours", slug: "/delivery-areas/cantt", highlight: "Saddar, PAF Colony, Cavalry Commercial, CMH" },
  { name: "Askari Housing (Askari 1 to 11)", time: "2 to 3 hours", slug: "/delivery-areas/askari", highlight: "Askari 1, 5, 9, 10, 11 (Bedian Road)" },
  { name: "Wapda Town & Township", time: "2.5 to 3.5 hours", slug: "/delivery-areas/wapda-town", highlight: "Chaudhary Chowk, College Road, Peco Road" },
];

export default function DeliveryAreasPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-white/50 flex items-center gap-2">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#E11D48] font-semibold">Delivery Areas</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E11D48]/20 text-[#F43F5E] border border-[#E11D48]/40 text-xs font-bold uppercase tracking-wider">
          <Truck className="w-3.5 h-3.5" />
          Temperature-Controlled Vans
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Flower Delivery Areas in Lahore
        </h1>

        <p className="text-white/80 text-xs sm:text-sm leading-relaxed max-w-3xl">
          We deliver across Lahore from our shop on MM Alam Road, Gulberg III. Areas closer to us are usually quicker. Tell us the full address and we'll confirm the time.
        </p>
      </section>

      {/* Zones Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {LAHORE_ZONES.map((zone, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-[#17171E] border border-white/10 space-y-2 hover:border-[#E11D48]/40 transition-colors"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-playfair font-bold text-white text-base">
                {zone.name}
              </h2>
              <span className="text-[11px] font-bold text-[#E11D48] bg-[#E11D48]/15 px-2.5 py-0.5 rounded-full">
                {zone.time}
              </span>
            </div>
            <p className="text-xs text-white/60">
              Key sectors: {zone.highlight}
            </p>
            {zone.slug !== "/delivery-areas" && (
              <div className="pt-2">
                <Link
                  href={zone.slug}
                  className="text-xs text-[#E11D48] hover:underline font-semibold inline-flex items-center gap-1"
                >
                  <span>View {zone.name} delivery guide</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Not Listed Help Block */}
      <section className="p-6 rounded-2xl bg-[#17171E] border border-white/10 space-y-3">
        <h3 className="font-playfair text-lg font-bold text-white">Your area not listed?</h3>
        <p className="text-xs text-white/70 leading-relaxed max-w-2xl">
          Message us on WhatsApp with your exact address or live location pin. We deliver to Raiwind Road, Bahria Orchard, Ferozepur Road, Shahdara, and suburban areas upon advance booking.
        </p>
        <div className="pt-1">
          <a
            href="https://wa.me/923001234567?text=Hello%20Lahore%20Bouquet!%20Can%20you%20deliver%20to%20my%20address%20in%20Lahore?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold text-xs uppercase tracking-wider shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Check Area on WhatsApp</span>
          </a>
        </div>
      </section>
    </main>
  );
}
