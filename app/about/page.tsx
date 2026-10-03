import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ShieldCheck, Sparkles, Truck, Heart, Camera, MessageCircle, MapPin, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "About Lahore Bouquet | Florist in Gulberg, Lahore",
  },
  description: "Meet Lahore Bouquet, a florist on MM Alam Road, Gulberg. Hand-tied bouquets, bridal décor and same-day flower delivery across Lahore.",
  openGraph: {
    title: "About Lahore Bouquet | Florist in Gulberg, Lahore",
    description: "Meet Lahore Bouquet, a florist on MM Alam Road, Gulberg. Hand-tied bouquets, bridal décor and same-day flower delivery across Lahore.",
  }
};

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-14">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-white/50 flex items-center gap-2">
        <Link href="/" className="hover:text-white transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#E11D48] font-semibold">About</span>
      </nav>

      {/* Editorial Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E11D48]/20 text-[#F43F5E] border border-[#E11D48]/40 text-xs font-bold uppercase tracking-wider">
          <MapPin className="w-3.5 h-3.5" />
          MM Alam Road, Gulberg III, Lahore
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          About Lahore Bouquet
        </h1>

        <p className="text-white/85 text-xs sm:text-sm lg:text-base leading-relaxed max-w-3xl">
          We are a flower shop in Gulberg III, Lahore. Our florists tie every bouquet by hand, send you a photo before it leaves, and deliver it in a cooled van so it arrives looking the way it did in the shop.
        </p>
      </section>

      {/* Story & Image Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <Image 
            src="/images/hero_workshop.jpg"
            alt="Lahore Bouquet Workshop on MM Alam Road Gulberg Lahore"
            fill
            className="object-cover"
          />
        </div>

        <div className="md:col-span-6 space-y-4 text-xs text-white/70 leading-relaxed">
          <h2 className="font-playfair text-2xl font-bold text-white">
            Freshness Tied by Hand Every Day
          </h2>
          <p>
            Started from a love of natural botanicals and meaningful celebrations, Lahore Bouquet crafts bouquets for Lahore's most important days — proposals, anniversaries, Eid greetings, bridal room decorations, and quiet apologies.
          </p>
          <p>
            We buy flowers fresh early every morning, inspect each stem, condition them in nutrient-rich cool water, and wrap them in recyclable paper and fabric instead of suffocating plastic sleeves.
          </p>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="bg-[#17171E] p-8 sm:p-10 rounded-2xl border border-white/10 space-y-6">
        <div>
          <span className="text-xs uppercase font-bold tracking-widest text-[#E11D48]">Our Core Standard</span>
          <h2 className="font-playfair text-2xl font-bold text-white mt-1">Our Promise to You</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-[#121217] border border-white/5 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-white text-sm">
              <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
              <span>We send a photo before delivery.</span>
            </div>
            <p className="text-white/60 leading-relaxed">
              You see the exact finished bouquet on WhatsApp and approve it before our driver heads out.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#121217] border border-white/5 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-white text-sm">
              <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
              <span>Clear ingredients, no surprises.</span>
            </div>
            <p className="text-white/60 leading-relaxed">
              We tell you clearly what is in each bouquet — whether it uses imported Dutch roses or local stems.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#121217] border border-white/5 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-white text-sm">
              <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
              <span>Transparent substitution policy.</span>
            </div>
            <p className="text-white/60 leading-relaxed">
              If a specific bloom isn't available, we suggest a similar flower of equal value and ask before changing anything.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-[#121217] border border-white/5 space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-white text-sm">
              <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
              <span>We reply to messages ourselves.</span>
            </div>
            <p className="text-white/60 leading-relaxed">
              Send us a WhatsApp message and a real florist will answer your questions and take custom requests, not a bot.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="p-6 rounded-2xl bg-gradient-to-r from-[#1A1215] to-[#121217] border border-[#E11D48]/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-sm font-bold text-white">Visit our shop or order same-day online</div>
          <div className="text-xs text-white/60">MM Alam Road, Gulberg III, Lahore • Open 9:00 AM to 1:00 AM daily.</div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/bouquets"
            className="px-5 py-2.5 rounded-xl bg-[#E11D48] hover:bg-[#F43F5E] text-white font-bold text-xs uppercase tracking-wider"
          >
            Browse Bouquets
          </Link>
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </section>
    </main>
  );
}
