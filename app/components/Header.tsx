"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "../context/CartContext";
import Logo from "./Logo";
import { Heart, ShoppingBag, Menu, X, ChevronDown, ChevronRight, Sparkles, MapPin } from "lucide-react";

interface SubItem {
  name: string;
  href: string;
  badge?: string;
  desc?: string;
}

interface NavItem {
  name: string;
  href: string;
  children?: SubItem[];
}

const NAV_ITEMS: NavItem[] = [
  {
    name: "Bouquets",
    href: "/bouquets",
    children: [
      { name: "All Hand-Tied Bouquets", href: "/bouquets", desc: "Fresh seasonal florals tied daily" },
      { name: "Imported Dutch Roses", href: "/roses", desc: "Long-stem premium roses", badge: "Hot" },
      { name: "Velvet Red Roses", href: "/roses/red-roses", desc: "12, 24, or 50 stem arrangements", badge: "Bestseller" },
      { name: "Pure White Roses", href: "/roses/white-roses", desc: "Elegant peace & sympathy roses" },
      { name: "Sunflowers & Mixed Blooms", href: "/sunflowers", desc: "Vibrant golden sunflowers & lilies" },
      { name: "Custom Money Bouquets", href: "/money-bouquets", desc: "Banknotes carefully styled with roses", badge: "Trending" },
      { name: "Handmade Crochet Bouquets", href: "/crochet-bouquets", desc: "Keepsake eternal yarn flowers" },
      { name: "Dried Everlasting Florals", href: "/dried-flowers", desc: "Natural preserved botanical stems" },
    ],
  },
  {
    name: "Occasions",
    href: "/birthday-surprises",
    children: [
      { name: "Birthday Surprises", href: "/birthday-surprises", desc: "Bouquets, cakes & midnight delivery", badge: "Midnight" },
      { name: "Wedding Anniversaries", href: "/occasions/anniversary", desc: "Romantic long-stem rose tributes" },
      { name: "Love & Romance", href: "/occasions/love-and-romance", desc: "Red roses, chocolates & greeting cards" },
      { name: "Barat & Walima Décor", href: "/occasions/barat-and-walima", desc: "Stage floral arches & car decor" },
      { name: "Eid Mubarak Gifts", href: "/occasions/eid-gifts", desc: "Chaand Raat hampers & Eidi bouquets", badge: "Special" },
      { name: "Congratulations & Graduations", href: "/occasions/congratulations", desc: "Festive congratulations bouquets" },
      { name: "Get Well Soon & Apologies", href: "/occasions/get-well-and-sorry", desc: "Gentle hospital & apology flowers" },
    ],
  },
  {
    name: "Cakes & Gifts",
    href: "/gifts-and-cakes",
    children: [
      { name: "All Cakes & Gift Combos", href: "/gifts-and-cakes", desc: "Flowers paired with cakes & sweets" },
      { name: "Fresh Bakery Cakes", href: "/gifts-and-cakes?filter=layers-cakes", desc: "Fudge, red velvet & lotus cakes" },
      { name: "Gourmet Chocolates & Mithai", href: "/gifts-and-cakes?filter=chocolates", desc: "Ferrero Rocher & artisan hampers" },
      { name: "Fresh Flower Gajray", href: "/collections/fresh-flower-gajray", desc: "Motia & rose wrist cuffs", badge: "Handmade" },
      { name: "Cash Money Bouquets", href: "/money-bouquets", desc: "Crisp State Bank currency bouquets" },
    ],
  },
  {
    name: "Scents & Perfumes",
    href: "/collections/scents-and-perfumes",
    children: [
      { name: "All Fragrance Gift Sets", href: "/collections/scents-and-perfumes", desc: "Perfumes paired with fresh roses", badge: "New" },
      { name: "Royal Arabian Oud & Attar", href: "/collections/scents-and-perfumes", desc: "Pure Rooh-e-Gulab & woody oud" },
      { name: "Designer Perfume Combos", href: "/collections/scents-and-perfumes", desc: "Authentic branded fragrances" },
      { name: "Scented Botanical Candles", href: "/collections/scents-and-perfumes", desc: "Hand-poured soy wax aromatherapy" },
    ],
  },
  {
    name: "Delivery Areas",
    href: "/delivery-areas",
    children: [
      { name: "All Lahore Zones", href: "/delivery-areas", desc: "Full delivery schedule & coverage" },
      { name: "Gulberg Lahore Express", href: "/delivery-areas/gulberg", desc: "Our fastest delivery zone • 30–90 mins", badge: "Express" },
      { name: "DHA Lahore (Phases 1–9)", href: "/delivery-areas/dha", desc: "Phases 1-9, Raya & Sector Y", badge: "2-3h" },
      { name: "Bahria Town & Lake City", href: "/delivery-areas/bahria-town", desc: "Sectors A-F via Ring Road" },
      { name: "Model Town & Garden Town", href: "/delivery-areas/model-town", desc: "Blocks A-M & Link Road" },
      { name: "Johar Town & Faisal Town", href: "/delivery-areas/johar-town", desc: "Emporium & Shaukat Khanum" },
      { name: "Cantt & Cavalry Ground", href: "/delivery-areas/cantt", desc: "Saddar, PAF Colony & CMH" },
      { name: "Askari Housing (1 to 11)", href: "/delivery-areas/askari", desc: "Bedian Road & Cantt towers" },
      { name: "Wapda Town & Township", href: "/delivery-areas/wapda-town", desc: "Valencia & PIA Society" },
    ],
  },
  {
    name: "Price Guide",
    href: "/prices",
    children: [
      { name: "Lahore Price Guide 2026", href: "/prices", desc: "Transparent stem and bouquet pricing" },
      { name: "Wedding & Car Décor", href: "/wedding-decor", desc: "Bridal stages, canopies and car styling" },
      { name: "Floral Care & Blog", href: "/blog", desc: "Expert tips to make flowers last longer" },
    ],
  },
];

export default function Header() {
  const pathname = usePathname();
  const { totalCartCount, setIsCartOpen, wishlist, showToast } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<{ [key: string]: boolean }>({});
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle subtle scroll styling enhancement
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [pathname]);

  // Lock body scrolling when mobile menu drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleMouseEnter = (name: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const toggleMobileAccordion = (name: string) => {
    setExpandedMobile((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleWishlistClick = () => {
    if (wishlist.length === 0) {
      showToast("Your wishlist is empty. Tap ♡ on any bouquet!");
    } else {
      showToast(`You have ${wishlist.length} saved item${wishlist.length > 1 ? "s" : ""} in wishlist ❤️`);
    }
  };

  return (
    <>
      {/* Site-wide Top Announcement Bar (WCAG Compliant: #8B1E2D bg with #FFFFFF high-contrast text > 11:1 ratio) */}
      <div className="bg-[#8B1E2D] border-b border-[#C6A15B]/30 text-center py-2 px-4 text-[11px] sm:text-xs text-white flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#FFF8E7] animate-pulse" aria-hidden="true" />
        <span className="font-medium tracking-wide text-white">
          <strong className="text-white font-bold underline decoration-[#C6A15B] decoration-2 underline-offset-2">Same-Day</strong> Flower, Cake & Perfume Delivery Across Lahore • Photo Proof on WhatsApp Before Dispatch
        </span>
      </div>

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-[#0B0B0B]/98 shadow-[0_8px_30px_rgba(0,0,0,0.85)]" : "bg-[#0B0B0B]"
        } border-b border-white/[0.08]`}
      >
        <div className="max-w-[1580px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px] lg:h-[80px]">
            {/* Left: Brand Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Logo variant="header" className="hover:opacity-95 transition-opacity" />
            </div>

            {/* Center: Luxury Editorial Navigation with Dropdown Menus (Desktop) */}
            <nav className="hidden lg:flex items-center gap-2.5 xl:gap-6">
              {NAV_ITEMS.map((item) => {
                const hasChildren = Boolean(item.children && item.children.length > 0);
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href) ||
                      (hasChildren && item.children?.some((c) => pathname.startsWith(c.href)));
                const isDropdownOpen = openDropdown === item.name;

                return (
                  <div
                    key={item.name}
                    className="relative py-4"
                    onMouseEnter={() => hasChildren && handleMouseEnter(item.name)}
                    onMouseLeave={() => hasChildren && handleMouseLeave()}
                  >
                    <Link
                      href={item.href}
                      className={`relative flex items-center gap-1 text-xs font-medium tracking-wide transition-colors duration-200 select-none py-1.5 ${
                        isActive || isDropdownOpen
                          ? "text-[#C6A15B] font-semibold"
                          : "text-white/85 hover:text-[#C6A15B]"
                      }`}
                    >
                      <span className="whitespace-nowrap">{item.name}</span>
                      {hasChildren && (
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            isDropdownOpen ? "rotate-180 text-[#C6A15B]" : "text-white/50"
                          }`}
                        />
                      )}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C6A15B] rounded-full shadow-[0_0_8px_rgba(198,161,91,0.6)] animate-fade-in" />
                      )}
                    </Link>

                    {/* Floating Dropdown Menu (Section 3: #0B0B0B background with #C6A15B accent borders) */}
                    {hasChildren && isDropdownOpen && (
                      <div className="absolute top-[90%] left-0 w-72 sm:w-80 p-3 bg-[#0B0B0B]/98 backdrop-blur-2xl rounded-2xl border border-[rgba(198,161,91,0.30)] shadow-[0_20px_50px_rgba(0,0,0,0.95)] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                        <div className="space-y-1">
                          {item.children?.map((sub) => {
                            const isSubActive = pathname === sub.href;
                            return (
                              <Link
                                key={sub.name}
                                href={sub.href}
                                className={`group flex items-start justify-between p-2.5 rounded-xl transition-all ${
                                  isSubActive
                                    ? "bg-[#8B1E2D]/20 border border-[rgba(198,161,91,0.35)]"
                                    : "hover:bg-white/[0.05] border border-transparent"
                                }`}
                              >
                                <div className="space-y-0.5">
                                  <div className="flex items-center gap-2">
                                    <span
                                      className={`text-xs font-semibold ${
                                        isSubActive
                                          ? "text-[#C6A15B]"
                                          : "text-white group-hover:text-[#C6A15B] transition-colors"
                                      }`}
                                    >
                                      {sub.name}
                                    </span>
                                    {sub.badge && (
                                      <span className="px-1.5 py-0.5 text-xs font-bold rounded-full bg-[#8B1E2D] text-white border border-[#C6A15B]/30 tracking-wide">
                                        {sub.badge}
                                      </span>
                                    )}
                                  </div>
                                  {sub.desc && (
                                    <p className="text-xs text-white/60 group-hover:text-white/80 line-clamp-1">
                                      {sub.desc}
                                    </p>
                                  )}
                                </div>
                                <ChevronRight className="w-3.5 h-3.5 text-white/30 group-hover:text-[#C6A15B] group-hover:translate-x-0.5 transition-all mt-1" />
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Right: Action Buttons (WhatsApp, Wishlist, Bag, Mobile Toggle) */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Header Button: Order on WhatsApp */}
              <a
                href="https://wa.me/923104225974?text=Hi%20Lahore%20Bouquet%2C%20I%20would%20like%20to%20order%20flowers%2C%20cakes%20or%20perfumes"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Order"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#0E7C5B]/15 border border-[#0E7C5B]/40 hover:bg-[#0E7C5B] text-[#0B6E4F] hover:text-white font-semibold text-xs tracking-wide transition-all duration-200 shadow-sm active:scale-95"
              >
                <svg
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M12.031 2c-5.516 0-9.988 4.473-9.988 9.99 0 1.763.459 3.486 1.332 5.006L2 22.5l5.656-1.348c1.472.802 3.13 1.226 4.821 1.226 5.516 0 9.988-4.473 9.988-9.99 0-5.517-4.472-9.988-9.988-9.988zm-.002 18.232c-1.503 0-2.973-.404-4.253-1.168l-.305-.181-3.156.752.827-3.08-.198-.316a8.204 8.204 0 0 1-1.258-4.449c0-4.543 3.696-8.24 8.243-8.24 4.547 0 8.242 3.697 8.242 8.24 0 4.544-3.695 8.242-8.242 8.242zm4.518-6.175c-.248-.124-1.467-.724-1.695-.806-.228-.083-.394-.124-.56.124-.166.248-.642.806-.787.972-.145.166-.29.186-.538.062-.248-.124-1.047-.386-1.995-1.231-.738-.658-1.236-1.472-1.381-1.72-.145-.248-.016-.382.108-.506.112-.111.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.041-.311-.021-.435-.062-.124-.56-1.348-.767-1.847-.202-.485-.407-.419-.56-.427l-.477-.008c-.166 0-.435.062-.663.311-.228.248-.87.85-.87 2.074 0 1.224.891 2.406 1.015 2.572.124.166 1.754 2.678 4.249 3.755.594.256 1.058.409 1.42.524.597.19 1.14.163 1.569.099.479-.071 1.467-.6 1.674-1.181.207-.58.207-1.077.145-1.181-.062-.104-.228-.166-.476-.29z" />
                </svg>
                <span className="hidden sm:inline">WhatsApp Order</span>
              </a>

              {/* Circular Wishlist Button */}
              <button
                type="button"
                onClick={handleWishlistClick}
                aria-label="View Saved Wishlist"
                className="relative h-9 w-9 rounded-full flex items-center justify-center border border-white/10 bg-white/[0.04] text-white/80 hover:text-[#8B1E2D] hover:border-[#8B1E2D]/50 hover:bg-white/10 transition-all duration-200 active:scale-95 cursor-pointer"
              >
                <Heart className="w-4 h-4" strokeWidth={1.8} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 h-3.5 min-w-[14px] px-1 bg-[#8B1E2D] text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Refined Shopping Bag Button: Dark ghost button with subtle gold border so Hero primary CTA stands out */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                aria-label="Bag"
                className="h-9 px-3.5 rounded-full bg-white/[0.06] hover:bg-[#8B1E2D] text-white border border-[#C6A15B]/40 hover:border-[#8B1E2D] font-semibold text-xs tracking-wider flex items-center gap-1.5 transition-all duration-200 active:scale-95 cursor-pointer group shadow-sm"
              >
                <ShoppingBag className="w-3.5 h-3.5" strokeWidth={2} />
                <span className="hidden sm:inline font-medium">Bag</span>
                <span className="h-4 min-w-[16px] px-1 bg-[#8B1E2D] text-white group-hover:bg-white group-hover:text-[#8B1E2D] font-bold text-xs rounded-full flex items-center justify-center transition-colors">
                  {totalCartCount}
                </span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
                className="lg:hidden h-10 w-10 rounded-full flex items-center justify-center border border-white/10 bg-white/[0.04] text-white/80 hover:text-[#C6A15B] hover:bg-white/[0.08] transition-all cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Accordion Navigation Drawer (Section 24: Mobile Header Black, Menu Black, CTA Burgundy, Accent Gold) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 z-40 bg-[#0B0B0B]/98 backdrop-blur-xl border-t border-[rgba(198,161,91,0.20)] overflow-y-auto animate-fade-in flex flex-col justify-between p-5 text-white">
          <div className="space-y-1.5">
            <p className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C6A15B] mb-2 px-2">
              Explore Collections & Categories
            </p>
            {NAV_ITEMS.map((item) => {
              const hasChildren = Boolean(item.children && item.children.length > 0);
              const isExpanded = Boolean(expandedMobile[item.name]);
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href) ||
                    (hasChildren && item.children?.some((c) => pathname.startsWith(c.href)));

              return (
                <div key={item.name} className="border-b border-white/[0.08] pb-1">
                  <div className="flex items-center justify-between">
                    <Link
                      href={item.href}
                      onClick={() => !hasChildren && setMobileMenuOpen(false)}
                      className={`flex-1 py-2.5 px-2 text-xs font-semibold tracking-wider uppercase transition-colors ${
                        isActive ? "text-[#C6A15B]" : "text-white/80 hover:text-[#C6A15B]"
                      }`}
                    >
                      {item.name}
                    </Link>
                    {hasChildren && (
                      <button
                        type="button"
                        onClick={() => toggleMobileAccordion(item.name)}
                        className="p-2 text-white/50 hover:text-[#C6A15B]"
                        aria-label={`Toggle ${item.name} menu`}
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isExpanded ? "rotate-180 text-[#C6A15B]" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {/* Submenu Accordion */}
                  {hasChildren && isExpanded && (
                    <div className="pl-3 pr-1 py-1 space-y-1 bg-white/[0.03] rounded-xl mb-1 border border-white/[0.05]">
                      {item.children?.map((sub) => {
                        const isSubActive = pathname === sub.href;
                        return (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex items-center justify-between py-2 px-2 rounded-lg text-xs transition-colors ${
                              isSubActive
                                ? "text-[#C6A15B] bg-[#8B1E2D]/20 font-semibold"
                                : "text-white/70 hover:text-white hover:bg-white/[0.04]"
                            }`}
                          >
                            <span>{sub.name}</span>
                            {sub.badge && (
                              <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-[#8B1E2D] text-white font-bold">
                                {sub.badge}
                              </span>
                            )}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-4 mt-4 border-t border-white/[0.08] space-y-3">
            <div className="flex items-center justify-between text-xs text-white/60 px-1">
              <span>Express Delivery in Lahore</span>
              <span className="text-[#C6A15B] font-medium">● 2–5 Hours / Midnight</span>
            </div>
            <a
              href="https://wa.me/923104225974?text=Hi%20Lahore%20Bouquet%2C%20I%20would%20like%20to%20order%20flowers"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-11 rounded-full bg-[#8B1E2D] hover:bg-[#C6A15B] text-white hover:text-[#0B0B0B] font-bold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-md"
            >
              Order via WhatsApp: +92 310 4225974
            </a>
          </div>
        </div>
      )}
    </>
  );
}