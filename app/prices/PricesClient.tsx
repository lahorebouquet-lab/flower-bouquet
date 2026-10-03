"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Sparkles, 
  Clock, 
  ShieldCheck, 
  ArrowRight, 
  MessageCircle, 
  ChevronDown, 
  Search, 
  CheckCircle2, 
  HelpCircle, 
  Filter,
  Heart,
  Star,
  MapPin,
  Calendar,
  Gift,
  Layers,
  Award
} from "lucide-react";

import { SNAPSHOT_PRICES, FAQ_DATA, PriceItem } from "./data";


export const COST_FACTORS = [
  {
    title: "1. Flower Variety & Sourcing",
    desc: "Local seasonal roses and gladiolus keep prices affordable, while imported Dutch roses, Casablanca lilies, and Dutch tulips require temperature-controlled air freight, naturally placing them in higher luxury brackets.",
    icon: Award,
  },
  {
    title: "2. Stem Count & Arrangement Density",
    desc: "A compact 12-stem hand-tied bouquet uses fewer stems than a royal 50-stem or 100-stem grand arrangement. More stems mean greater visual volume and impact.",
    icon: Layers,
  },
  {
    title: "3. Wrapping Style & Materials",
    desc: "Standard cellophane wrap is simple and inexpensive. Our signature aesthetic uses imported matte waterproof Korean paper, velvet ribbons, branded tags, and custom acrylic boxes.",
    icon: Gift,
  },
  {
    title: "4. Add-Ons & Gourmet Extras",
    desc: "Pairing fresh flowers with Ferrero Rocher chocolates, plush 3ft teddy bears, customized helium balloons, or 2-pound bakery fudge cakes creates multi-tiered celebration combos.",
    icon: Heart,
  },
  {
    title: "5. Installation & Setup Scale",
    desc: "For bridal room decor, car styling, or stage installations, pricing reflects on-site florist labor, travel distance across Lahore, lighting equipment, and installation duration.",
    icon: Clock,
  },
];

export const OCCASIONS_DATA = [
  { name: "Anniversaries", href: "/occasions/anniversary", tag: "From PKR 1,900" },
  { name: "Birthdays", href: "/occasions/birthday", tag: "From PKR 1,180" },
  { name: "Eid Celebrations", href: "/collections/bouquets", tag: "From PKR 1,500" },
  { name: "Father's Day", href: "/collections/gifts-cakes", tag: "From PKR 1,800" },
  { name: "Get Well Soon", href: "/collections/sunflowers", tag: "From PKR 500" },
  { name: "Graduation Days", href: "/collections/bouquets", tag: "From PKR 1,200" },
  { name: "Mother's Day", href: "/collections/roses", tag: "From PKR 1,900" },
  { name: "Valentine's Day", href: "/collections/roses", tag: "From PKR 1,900" },
  { name: "Send from Abroad (Overseas Pakistanis)", href: "/collections/bouquets", tag: "Worldwide Cards Accepted" },
];

export const LAHORE_DELIVERY_ZONES = [
  "DHA Lahore (Phases 1 to 9 & Raya)",
  "Gulberg (I, II, III, & Main Boulevard)",
  "Bahria Town (All Sectors) & Bahria Orchard",
  "Model Town & Garden Town",
  "Johar Town & Faisal Town",
  "Cantt, Cavalry Ground & Askari (1 to 11)",
  "Wapda Town, PCSIR & Valencia",
  "Lake City, Khayaban-e-Amin & Pine Avenue",
  "Shadman, Jail Road & Mall Road",
  "Allama Iqbal Town & Sabzazar",
];

export default function PricesClient() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const filteredPrices = useMemo(() => {
    return SNAPSHOT_PRICES.filter((item) => {
      const matchesCategory = activeCategory === "all" || item.category === activeCategory;
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.popularFor.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#0E0E12] text-white">
      {/* 1. Hero Banner: Transparent Lahore Price Guide */}
      <section className="relative py-16 sm:py-20 lg:py-24 border-b border-white/10 bg-gradient-to-b from-[#16161F] via-[#0E0E12] to-[#0E0E12] overflow-hidden">
        {/* Soft Background Radial Lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-[#E11D48]/10 blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center space-y-6">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 text-xs text-white/50">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#E11D48] font-medium">Prices</span>
          </nav>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E11D48]/15 border border-[#E11D48]/35 text-[#F43F5E] text-xs font-semibold uppercase tracking-wider shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
              Transparent Pricing • No Hidden Charges • Lahore Delivery
            </div>

            <h1 className="font-playfair text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Flower Bouquet Price <br className="hidden sm:inline" />
              <span className="text-[#E11D48] italic font-serif">in Lahore</span> Guide
            </h1>

            <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Transparent, upfront starting prices for fresh flower bouquets, wedding room decor, bridal car styling, floral jewellery, gajray, and gourmet gift hampers across Lahore.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-white/70">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
              <Clock className="w-3.5 h-3.5 text-[#E11D48]" />
              <span>2–5h Express Same-Day Delivery</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
              <ShieldCheck className="w-3.5 h-3.5 text-[#25D366]" />
              <span>100% Fresh Stems Guaranteed</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>5,000+ Happy Customers (4.9★)</span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5">
            <Link
              href="/collections/bouquets"
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#E11D48] to-[#BE123C] hover:opacity-95 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-xl shadow-[#E11D48]/35 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Browse All Bouquets</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/923001234567?text=Hello%20Lahore%20Blooms!%20I%20would%20like%20to%20get%20an%20exact%20quote%20for%20a%20bouquet%20or%20event%20setup%20in%20Lahore."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#25D366]/25 hover:scale-[1.02] transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Exact Quote</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. Interactive Quick Price Snapshot Directory */}
      <section className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="space-y-8">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-[1.5px] bg-[#E11D48]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#E11D48]">
                  DIRECTORY
                </span>
              </div>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white mt-1">
                Quick Price Snapshot (2026 Updated)
              </h2>
              <p className="text-xs text-white/60 mt-1 max-w-xl">
                Common starting-price ranges across Lahore Bouquet categories. Final quote depends on stem count, design density, add-ons, and delivery sector.
              </p>
            </div>

            {/* Live Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search bouquet, gajray, decor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#181822] border border-white/10 text-xs text-white placeholder-white/40 focus:border-[#E11D48] outline-none transition-colors"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {[
              { id: "all", label: "All Categories" },
              { id: "bouquets", label: "Flower Bouquets" },
              { id: "decor", label: "Wedding & Room Décor" },
              { id: "jewellery", label: "Floral Jewellery & Gajray" },
              { id: "gifts", label: "Gifts & Cakes" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  activeCategory === tab.id
                    ? "bg-[#E11D48] text-white shadow-md shadow-[#E11D48]/30"
                    : "bg-[#181822] text-white/70 hover:text-white hover:bg-white/10 border border-white/5"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredPrices.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl bg-[#14141C] border border-white/10 p-5 hover:border-[#E11D48]/60 transition-all hover:shadow-[0_8px_30px_rgba(225,29,72,0.18)] hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#E11D48]">
                      {item.category === "bouquets" ? "Bouquet" : item.category === "decor" ? "Event & Décor" : item.category === "jewellery" ? "Floral Wear" : "Gift & Combo"}
                    </span>
                    {item.badge && (
                      <span className="px-2 py-0.5 rounded-full bg-[#E11D48]/15 border border-[#E11D48]/30 text-[#F43F5E] text-[9px] font-bold">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-playfair text-base font-bold text-white group-hover:text-[#F43F5E] transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-xs text-white/60 mt-1 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 text-[11px] text-white/50 border-t border-white/5">
                    <span className="text-white/40">Best for: </span>
                    <span className="text-white/70">{item.popularFor}</span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold text-[#E11D48]">
                      {item.priceLabel}
                    </span>
                  </div>

                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-white/90 group-hover:text-[#E11D48] transition-colors"
                  >
                    <span>View Options</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredPrices.length === 0 && (
            <div className="text-center py-12 bg-[#14141C] rounded-2xl border border-white/10 space-y-2">
              <p className="text-white/60 text-sm">No price category matched "{searchQuery}".</p>
              <button
                onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                className="text-xs font-bold text-[#E11D48] hover:underline"
              >
                Reset search filters
              </button>
            </div>
          )}

        </div>
      </section>

      {/* 3. Deep Category Breakdown: Bouquets, Wedding Décor, Floral Jewellery & Gifts */}
      <section className="py-14 sm:py-18 bg-[#111116] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
          
          {/* Detailed Section 1: Flower Bouquet Price Breakdown */}
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs uppercase font-bold tracking-widest text-[#E11D48]">Section 1</span>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white mt-1">
                Flower Bouquet Price in Lahore
              </h2>
              <p className="text-xs text-white/60 mt-1 max-w-3xl leading-relaxed">
                Most shoppers are looking for cheap bouquet options in Lahore or trying to understand how cost varies by flower species and density. Pricing begins at PKR 500 for lightweight fresh bundles and scales upward based on stem count, imported varieties (like Dutch Red Roses and Casablanca Lilies), wrapping style, chocolates, and baby's breath fillers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-[#171720] border border-white/10 space-y-2">
                <span className="text-xs font-bold text-[#E11D48]">Sunflower Bouquets</span>
                <div className="text-base font-bold text-white">From PKR 500</div>
                <p className="text-[11px] text-white/60">Bright, cheerful golden blooms for birthdays, graduations, and get-well wishes.</p>
                <Link href="/collections/sunflowers" className="text-[11px] text-[#E11D48] font-semibold flex items-center gap-1 pt-1">
                  <span>Explore Sunflowers</span> →
                </Link>
              </div>

              <div className="p-4 rounded-xl bg-[#171720] border border-white/10 space-y-2">
                <span className="text-xs font-bold text-[#E11D48]">Rose Bouquets</span>
                <div className="text-base font-bold text-white">PKR 1,180 – 5,500</div>
                <p className="text-[11px] text-white/60">Classic single-stem up to royal 50-stem imported Dutch velvet rose arrangements.</p>
                <Link href="/collections/roses" className="text-[11px] text-[#E11D48] font-semibold flex items-center gap-1 pt-1">
                  <span>Explore Roses</span> →
                </Link>
              </div>

              <div className="p-4 rounded-xl bg-[#171720] border border-white/10 space-y-2">
                <span className="text-xs font-bold text-[#E11D48]">Chocolate Bouquets</span>
                <div className="text-base font-bold text-white">From PKR 2,299</div>
                <p className="text-[11px] text-white/60">Ferrero Rocher, Cadbury Dairy Milk, and KitKat bars paired with fresh floral accents.</p>
                <Link href="/collections/gifts-cakes" className="text-[11px] text-[#E11D48] font-semibold flex items-center gap-1 pt-1">
                  <span>Explore Chocolates</span> →
                </Link>
              </div>

              <div className="p-4 rounded-xl bg-[#171720] border border-white/10 space-y-2">
                <span className="text-xs font-bold text-[#E11D48]">Oriental Lily Bouquets</span>
                <div className="text-base font-bold text-white">From PKR 3,999</div>
                <p className="text-[11px] text-white/60">Ultra-fragrant Casablanca and Asiatic white/pink lilies for VIP corporate gifting.</p>
                <Link href="/collections/bouquets" className="text-[11px] text-[#E11D48] font-semibold flex items-center gap-1 pt-1">
                  <span>Explore Lilies</span> →
                </Link>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#161622] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-0.5">
                <span className="font-bold text-white">Smart Value Tip:</span>
                <p className="text-white/60">If you want the lowest bouquet price, keep the design compact and upgrade only the parts that matter most — such as luxury Korean matte wrap, a sprig of baby’s breath, or a personalized wax-sealed greeting card.</p>
              </div>
              <Link href="/collections/bouquets" className="px-4 py-2 rounded-lg bg-[#E11D48] text-white font-bold whitespace-nowrap self-start sm:self-auto">
                Compare All Bouquets
              </Link>
            </div>
          </div>

          {/* Detailed Section 2: Wedding & Event Décor Prices */}
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs uppercase font-bold tracking-widest text-[#E11D48]">Section 2</span>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white mt-1">
                Wedding & Event Décor Prices in Lahore
              </h2>
              <p className="text-xs text-white/60 mt-1 max-w-3xl leading-relaxed">
                Full-service on-site floral styling across Lahore — bridal room canopy decor, wedding car decoration, mayon stage backdrops, intimate nikah styling, and celebratory house-front fairy lights.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-[#171720] border border-white/10 space-y-2">
                <span className="text-xs font-bold text-[#E11D48]">Wedding Room Decoration</span>
                <div className="text-base font-bold text-white">From PKR 6,000</div>
                <p className="text-[11px] text-white/60">Petal pathways, canopy bed styling, scented candles, and ambient lighting upgrades.</p>
                <Link href="/collections/wedding-decor" className="text-[11px] text-[#E11D48] font-semibold flex items-center gap-1 pt-1">
                  <span>Room Styling</span> →
                </Link>
              </div>

              <div className="p-4 rounded-xl bg-[#171720] border border-white/10 space-y-2">
                <span className="text-xs font-bold text-[#E11D48]">Wedding Car Decoration</span>
                <div className="text-base font-bold text-white">From PKR 1,500</div>
                <p className="text-[11px] text-white/60">Ribbon designs up to full fresh flower bonnet cascades tailored to your car model.</p>
                <Link href="/collections/wedding-decor" className="text-[11px] text-[#E11D48] font-semibold flex items-center gap-1 pt-1">
                  <span>Car Styling</span> →
                </Link>
              </div>

              <div className="p-4 rounded-xl bg-[#171720] border border-white/10 space-y-2">
                <span className="text-xs font-bold text-[#E11D48]">Mayon & Mehndi Décor</span>
                <div className="text-base font-bold text-white">From PKR 10,000</div>
                <p className="text-[11px] text-white/60">Traditional yellow marigold walls, dholki cushions, floral hangings, and stage backdrops.</p>
                <Link href="/collections/wedding-decor" className="text-[11px] text-[#E11D48] font-semibold flex items-center gap-1 pt-1">
                  <span>Mehndi Stages</span> →
                </Link>
              </div>

              <div className="p-4 rounded-xl bg-[#171720] border border-white/10 space-y-2">
                <span className="text-xs font-bold text-[#E11D48]">Nikah Ceremony Décor</span>
                <div className="text-base font-bold text-white">From PKR 15,000</div>
                <p className="text-[11px] text-white/60">Pure white and pastel floral backdrops, mirror tables, and signature floral curtains.</p>
                <Link href="/collections/wedding-decor" className="text-[11px] text-[#E11D48] font-semibold flex items-center gap-1 pt-1">
                  <span>Nikah Stages</span> →
                </Link>
              </div>
            </div>
          </div>

          {/* Detailed Section 3: Flower Jewellery, Gajray & Garlands Price */}
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs uppercase font-bold tracking-widest text-[#E11D48]">Section 3</span>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white mt-1">
                Flower Jewellery, Gajray & Garlands Price in Lahore
              </h2>
              <p className="text-xs text-white/60 mt-1 max-w-3xl leading-relaxed">
                Handcrafted floral accessories for brides and wedding guests in Lahore — including fresh fragrant motia gajray, rose bracelets, maang tikka, floral earrings, and groom mala.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-[#171720] border border-white/10 space-y-2">
                <span className="text-xs font-bold text-[#E11D48]">Fresh Gajray</span>
                <div className="text-base font-bold text-white">From PKR 450 / pair</div>
                <p className="text-[11px] text-white/60">Fragrant jasmine (motia) and red rose petal gajray tied fresh every morning.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#171720] border border-white/10 space-y-2">
                <span className="text-xs font-bold text-[#E11D48]">Garlands / Mala / Haar</span>
                <div className="text-base font-bold text-white">From PKR 300</div>
                <p className="text-[11px] text-white/60">Light welcoming garlands up to thick royal red rose groom malas with gold trim.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#171720] border border-white/10 space-y-2">
                <span className="text-xs font-bold text-[#E11D48]">Mehndi Floral Jewellery</span>
                <div className="text-base font-bold text-white">From PKR 650</div>
                <p className="text-[11px] text-white/60">Individual pieces: matha patti, floral earrings, rings, and wrist corsages.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#171720] border border-white/10 space-y-2">
                <span className="text-xs font-bold text-[#E11D48]">Bridal Floral Jewellery Set</span>
                <div className="text-base font-bold text-white">From PKR 1,000</div>
                <p className="text-[11px] text-white/60">Complete coordinated set designed to match your bridal lehenga or gharara.</p>
              </div>
            </div>
          </div>

          {/* Detailed Section 4: Gift Prices in Lahore */}
          <div className="space-y-6">
            <div className="border-b border-white/10 pb-4">
              <span className="text-xs uppercase font-bold tracking-widest text-[#E11D48]">Section 4</span>
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-white mt-1">
                Gift Prices & Celebration Hampers in Lahore
              </h2>
              <p className="text-xs text-white/60 mt-1 max-w-3xl leading-relaxed">
                Along with fresh flowers, we curate luxury gift hampers, bakery cake and flower combos, helium balloons, and plush soft toys delivered right to the recipient's doorstep.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-[#171720] border border-white/10 space-y-2">
                <span className="text-xs font-bold text-[#E11D48]">Gift Baskets</span>
                <div className="text-base font-bold text-white">From PKR 2,500</div>
                <p className="text-[11px] text-white/60">Curated wicker baskets filled with chocolates, snacks, and fresh blooms.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#171720] border border-white/10 space-y-2">
                <span className="text-xs font-bold text-[#E11D48]">Cake & Flowers Combo</span>
                <div className="text-base font-bold text-white">From PKR 3,999+</div>
                <p className="text-[11px] text-white/60">2 lb gourmet chocolate fudge cake paired with 12 fresh red roses.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#171720] border border-white/10 space-y-2">
                <span className="text-xs font-bold text-[#E11D48]">Helium Balloons</span>
                <div className="text-base font-bold text-white">From PKR 200</div>
                <p className="text-[11px] text-white/60">Helium latex, foil hearts, and numeric birthday balloons.</p>
              </div>

              <div className="p-4 rounded-xl bg-[#171720] border border-white/10 space-y-2">
                <span className="text-xs font-bold text-[#E11D48]">Teddy Bears</span>
                <div className="text-base font-bold text-white">From PKR 1,200</div>
                <p className="text-[11px] text-white/60">Ultra-soft huggable plush teddy bears in 1ft to 4ft sizes.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Shop by Occasion Guide */}
      <section className="py-14 sm:py-18 max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-[#E11D48]">Occasion Guide</span>
          <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-white">Shop by Occasion & Price Direction</h2>
          <p className="text-xs text-white/60">
            If you already know the moment you are shopping for, use these curated pages to compare suitable options and price points.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {OCCASIONS_DATA.map((occ, idx) => (
            <Link
              key={idx}
              href={occ.href}
              className="p-4 rounded-xl bg-[#14141C] border border-white/10 hover:border-[#E11D48]/60 transition-all flex items-center justify-between group"
            >
              <div>
                <h3 className="font-playfair text-sm font-semibold text-white group-hover:text-[#F43F5E] transition-colors">
                  {occ.name}
                </h3>
                <span className="text-[10px] text-white/50">{occ.tag}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#E11D48] group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </section>

      {/* 5. How Flower Pricing Works (Editorial SEO Guide) */}
      <section className="py-14 sm:py-18 bg-[#111116] border-y border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-[#E11D48]">Buyer Guide</span>
            <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-white">
              How Flower Pricing Works in Lahore
            </h2>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              Wondering why two bouquets of similar size have different prices? Bouquet and décor pricing depends on 5 primary factors. Understanding these helps you pick the right balance of luxury and value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COST_FACTORS.map((factor, idx) => {
              const IconComp = factor.icon;
              return (
                <div key={idx} className="p-5 rounded-2xl bg-[#161622] border border-white/10 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E11D48]/15 flex items-center justify-center text-[#E11D48]">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="font-playfair text-sm sm:text-base font-bold text-white">
                    {factor.title}
                  </h3>
                  <p className="text-xs text-white/60 leading-relaxed">
                    {factor.desc}
                  </p>
                </div>
              );
            })}

            {/* Quick Summary Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-[#E11D48]/20 via-[#161622] to-[#161622] border border-[#E11D48]/40 space-y-3 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#F43F5E]">Fastest Method</span>
                <h3 className="font-playfair text-base font-bold text-white mt-1">Want an Instant Exact Quote?</h3>
                <p className="text-xs text-white/70 mt-1">
                  Send your reference photo, Lahore area, and budget to our WhatsApp team. We'll suggest the closest match in under 10 minutes.
                </p>
              </div>

              <a
                href="https://wa.me/923001234567?text=Hello%20Lahore%20Blooms!%20I%20have%20a%20budget%20and%20reference%20photo%20to%20quote."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Quote on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Lahore Coverage & Delivery Timing */}
      <section className="py-14 sm:py-18 max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 text-xs text-[#E11D48] font-bold uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Coverage Areas</span>
          </div>
          <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-white">
            Delivery Areas in Lahore
          </h2>
          <p className="text-xs text-white/60">
            Same-day 2–5 hours express dispatch across all major residential and commercial sectors in Lahore.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-xs">
          {LAHORE_DELIVERY_ZONES.map((zone, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-[#14141C] border border-white/5 flex items-center gap-2 text-white/80">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] shrink-0" />
              <span className="line-clamp-1">{zone}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Frequently Asked Questions Accordion (with Google FAQPage JSON-LD support) */}
      <section className="py-14 sm:py-20 bg-[#111116] border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs text-[#E11D48] font-bold uppercase tracking-wider">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Got Questions?</span>
            </div>
            <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-white">
              Frequently Asked Questions About Prices
            </h2>
            <p className="text-xs text-white/60 max-w-lg mx-auto">
              Everything you need to know about bouquet costs, decor estimates, payment methods, and delivery in Lahore.
            </p>
          </div>

          <div className="space-y-3">
            {FAQ_DATA.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-[#161620] border border-white/10 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  >
                    <span className="font-playfair text-sm sm:text-base font-semibold text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#E11D48] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/5">
                      <p className="pt-3">{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Conversion Quote Callout Banner */}
      <section className="py-16 sm:py-20 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#201016] via-[#1A1A24] to-[#12121A] border border-[#E11D48]/40 shadow-2xl relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48]">Custom Design Assistance</span>
            <h2 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Need the Exact Price for Your Custom Design?
            </h2>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              Send your reference photo, delivery area in Lahore, and budget on WhatsApp. We’ll confirm the exact price and availability in under 10 minutes.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="https://wa.me/923001234567?text=Hello%20Lahore%20Blooms!%20I%20have%20a%20reference%20photo%20and%20budget%20to%20quote%20for%20delivery%20in%20Lahore."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/30 transition-all hover:scale-[1.02]"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Get WhatsApp Quote</span>
            </a>

            <Link
              href="/collections/bouquets"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-white/20 transition-all"
            >
              <span>Browse Catalog</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
