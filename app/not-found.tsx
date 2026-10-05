import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, MessageCircle, Sparkles, Flower2, Heart, Gift, Truck } from "lucide-react";

export const metadata = {
  title: "404 - Page Not Found | Lahore Bouquet",
  description: "The floral page you are looking for has moved or does not exist. Browse our fresh bouquets, roses, and same-day delivery services across Lahore.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  const quickLinks = [
    { name: "Hand-Tied Bouquets", href: "/bouquets", desc: "Fresh seasonal florals tied daily", icon: Flower2 },
    { name: "Imported Dutch Roses", href: "/roses", desc: "Velvet red and pure white roses", icon: Heart },
    { name: "Custom Money Bouquets", href: "/money-bouquets", desc: "Currency notes with fresh roses", icon: Sparkles },
    { name: "Birthday Surprises", href: "/birthday-surprises", desc: "Midnight delivery & cake combos", icon: Gift },
    { name: "Lahore Delivery Zones", href: "/delivery-areas", desc: "Gulberg, DHA, Bahria & Cantt", icon: Truck },
    { name: "Transparent Price Guide", href: "/prices", desc: "Real starting stem & bouquet rates", icon: Compass },
  ];

  return (
    <main className="min-h-[70vh] flex items-center justify-center py-16 px-4 sm:px-6 bg-[#F8F3EA] text-[#2A2A2A]">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Decorative Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#8B1E2D]/15 border border-[#8B1E2D]/30 text-[#8B1E2D] text-xs font-bold uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
          404 • Page Not Found
        </div>

        {/* Main Heading & Subtitle */}
        <div className="space-y-3">
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
            This Stem Has Wandered Off
          </h1>
          <p className="text-xs sm:text-sm text-[#2A2A2A] max-w-lg mx-auto leading-relaxed">
            The page you are looking for might have been moved, renamed, or is temporarily out of season. Explore our most popular fresh floral arrangements or reach out to our Gulberg workshop directly.
          </p>
        </div>

        {/* Quick Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left pt-2">
          {quickLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group p-4 rounded-xl bg-white border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-all shadow-2xs hover:shadow-xs flex items-center gap-3.5"
              >
                <div className="w-10 h-10 rounded-lg bg-[#8B1E2D]/10 text-[#8B1E2D] flex items-center justify-center shrink-0 group-hover:bg-[#8B1E2D] group-hover:text-white transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-xs sm:text-sm font-bold text-[#0B0B0B] group-hover:text-[#8B1E2D] transition-colors">
                    {item.name}
                  </h2>
                  <p className="text-[11px] text-[#777777] mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 pt-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-[#8B1E2D] hover:bg-[#C6A15B] text-white hover:text-[#0B0B0B] font-semibold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Return to Homepage
          </Link>

          <a
            href="https://wa.me/923001234567?text=Hi%20Lahore%20Bouquet,%20I%20was%20looking%20for%20flowers%20on%20your%20website%20and%20need%20assistance."
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-md flex items-center gap-2"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
