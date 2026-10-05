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
  alternates: {
    canonical: "https://lahorebouquet.com/about",
  },
  openGraph: {
    title: "About Lahore Bouquet | Florist in Gulberg, Lahore",
    description: "Meet Lahore Bouquet, a florist on MM Alam Road, Gulberg. Hand-tied bouquets, bridal décor and same-day flower delivery across Lahore.",
    url: "https://lahorebouquet.com/about",
  }
};

const aboutSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://lahorebouquet.com/about#webpage",
      url: "https://lahorebouquet.com/about",
      name: "About Lahore Bouquet | Florist in Gulberg, Lahore",
      isPartOf: { "@id": "https://lahorebouquet.com#website" },
      about: { "@id": "https://lahorebouquet.com#florist" },
    },
    {
      "@type": "Florist",
      "@id": "https://lahorebouquet.com#florist",
      name: "Lahore Bouquet",
      url: "https://lahorebouquet.com",
      telephone: "+923104225974",
      email: "flowerbouquet@gmail.com",
      priceRange: "Rs. 1,180 - Rs. 14,500",
      address: {
        "@type": "PostalAddress",
        streetAddress: "MM Alam Road, Gulberg III",
        addressLocality: "Lahore",
        addressRegion: "Punjab",
        postalCode: "54000",
        addressCountry: "PK",
      },
    },
  ],
};

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-14 text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">About</span>
      </nav>

      {/* Editorial Header (Section 11: #0B0B0B Heading, #2A2A2A text, #C6A15B accent) */}
      <section className="space-y-4">
        <div className="w-10 h-[2px] bg-[#C6A15B]" />
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#8B1E2D] border border-[#E5DED2] text-xs font-bold uppercase tracking-wider shadow-xs">
          <MapPin className="w-3.5 h-3.5 text-[#8B1E2D]" />
          MM Alam Road, Gulberg III, Lahore
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          About Lahore Bouquet
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm lg:text-base leading-relaxed max-w-3xl">
          We are an artisanal florist studio in Gulberg III, Lahore. Our florists tie every bouquet by hand, send you a photo before it leaves, and deliver it in temperature-regulated transport so it arrives looking pristine.
        </p>
      </section>

      {/* Story & Image Section */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden border border-[rgba(198,161,91,0.25)] shadow-md">
          <Image 
            src="/images/hero_workshop.jpg"
            alt="Lahore Bouquet Workshop on MM Alam Road Gulberg Lahore"
            fill
            className="object-cover"
          />
        </div>

        <div className="md:col-span-6 space-y-4 text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">
            Freshness Tied by Hand Every Day
          </h2>
          <p>
            Started from a passion for botanical artistry and memorable celebrations, <span className="text-[#8B1E2D] font-semibold">Lahore Bouquet</span> crafts floral tributes for life's defining moments — proposals, anniversaries, Eid greetings, bridal room decorations, and heartfelt apologies.
          </p>
          <p>
            We curate flowers fresh each morning, inspect each stem, condition them in nutrient-rich cool water, and wrap them in recyclable paper and fabric instead of suffocating plastic sleeves.
          </p>
        </div>
      </section>

      {/* Our Promise Section (White cards, #0B0B0B headings, #E5DED2 border) */}
      <section className="bg-white p-8 sm:p-10 rounded-2xl border border-[#E5DED2] space-y-6 shadow-xs">
        <div>
          <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">Our Core Standard</span>
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B] mt-1">Our Promise to You</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
          <div className="p-5 rounded-xl bg-[#F8F3EA] border border-[#E5DED2] space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-[#0B0B0B] text-sm">
              <CheckCircle2 className="w-4 h-4 text-[#8B1E2D]" />
              <span>We send a photo before delivery.</span>
            </div>
            <p className="text-[#2A2A2A] leading-relaxed">
              You see the exact finished bouquet on WhatsApp and approve it before our driver heads out.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F8F3EA] border border-[#E5DED2] space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-[#0B0B0B] text-sm">
              <CheckCircle2 className="w-4 h-4 text-[#8B1E2D]" />
              <span>Clear ingredients, no surprises.</span>
            </div>
            <p className="text-[#2A2A2A] leading-relaxed">
              We tell you clearly what is in each bouquet — whether it uses imported Dutch roses or local stems.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F8F3EA] border border-[#E5DED2] space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-[#0B0B0B] text-sm">
              <CheckCircle2 className="w-4 h-4 text-[#8B1E2D]" />
              <span>Transparent substitution policy.</span>
            </div>
            <p className="text-[#2A2A2A] leading-relaxed">
              If a specific bloom isn't available, we suggest a similar flower of equal value and ask before changing anything.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#F8F3EA] border border-[#E5DED2] space-y-1.5">
            <div className="flex items-center gap-2 font-bold text-[#0B0B0B] text-sm">
              <CheckCircle2 className="w-4 h-4 text-[#8B1E2D]" />
              <span>We reply to messages ourselves.</span>
            </div>
            <p className="text-[#2A2A2A] leading-relaxed">
              Send us a WhatsApp message and a real florist will answer your questions and take custom requests, not a bot.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Strip (Section 1: #0B0B0B dark strip with #8B1E2D CTA button) */}
      <section className="p-8 rounded-2xl bg-[#0B0B0B] text-white border border-[#C6A15B]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-1 text-center sm:text-left">
          <div className="text-base font-bold text-white">Visit our shop or order same-day online</div>
          <div className="text-xs text-[#BDBDBD]">MM Alam Road, Gulberg III, Lahore • Open 9:00 AM to 1:00 AM daily.</div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/bouquets"
            className="px-6 py-3 rounded-full bg-[#8B1E2D] hover:bg-[#C6A15B] text-white hover:text-[#0B0B0B] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-md active:scale-95"
          >
            Browse Bouquets
          </Link>
          <a
            href="https://wa.me/923104225974"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-white/10 hover:bg-[#C6A15B] text-white hover:text-[#0B0B0B] border border-[#C6A15B]/40 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all duration-200 active:scale-95"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>WhatsApp</span>
          </a>
        </div>
      </section>
    </main>
  );
}
