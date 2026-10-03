"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "../context/CartContext";
import Logo from "./Logo";
import { Heart, ShoppingBag, Menu, X, ArrowUpRight } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { name: "HOME", href: "/" },
  { name: "BOUQUETS", href: "/collections/bouquets" },
  { name: "ROSES", href: "/collections/roses" },
  { name: "PRICES", href: "/prices" },
  { name: "SUNFLOWERS", href: "/collections/sunflowers" },
  { name: "MONEY BOUQUETS", href: "/collections/money-bouquets" },
  { name: "WEDDING DÉCOR", href: "/collections/wedding-decor" },
  { name: "GIFTS & CAKES", href: "/collections/gifts-cakes" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const { totalCartCount, setIsCartOpen, wishlist, showToast } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle subtle scroll styling enhancement
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const handleWishlistClick = () => {
    if (wishlist.length === 0) {
      showToast("Your wishlist is empty. Tap ♡ on any bouquet!");
    } else {
      showToast(`You have ${wishlist.length} saved item${wishlist.length > 1 ? "s" : ""} in wishlist ❤️`);
    }
  };

  return (
    <>
      {/* Site-wide Top Announcement Bar */}
      <div className="bg-[#0A0A0D] border-b border-white/[0.06] text-center py-2 px-4 text-[11px] sm:text-xs text-white/80 flex items-center justify-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#E11D48] animate-pulse" />
        <span className="font-medium tracking-wide">
          Fresh flowers, hand-tied in Lahore and delivered the same day.
        </span>
      </div>

      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-[#101014]/98 shadow-[0_8px_30px_rgba(0,0,0,0.7)]" : "bg-[#101014]"
        } border-b border-white/[0.08]`}
      >
        <div className="max-w-[1520px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px] lg:h-[80px]">
            {/* Left: Brand Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Logo variant="header" className="hover:opacity-95 transition-opacity" />
            </div>

            {/* Center: Luxury Editorial Navigation (Desktop) */}
            <nav className="hidden xl:flex items-center gap-5 2xl:gap-7">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative py-2 text-[11.5px] font-medium tracking-[0.12em] uppercase transition-colors duration-200 select-none ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-white/65 hover:text-white"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E11D48] rounded-full shadow-[0_0_10px_rgba(225,29,72,0.75)] animate-fade-in" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Action Buttons (Browse Bouquets, WhatsApp, Wishlist, Bag) */}
            <div className="flex items-center gap-2 sm:gap-2.5">
              {/* Header Button: Browse Bouquets */}
              <Link
                href="/collections/bouquets"
                className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-white/15 bg-white/[0.04] hover:bg-white/10 text-white font-semibold text-[11px] tracking-wider uppercase transition-all duration-200"
              >
                <span>Browse Bouquets</span>
              </Link>

              {/* Header Button: Order on WhatsApp */}
              <a
                href="https://wa.me/923001234567?text=Hi%20Lahore%20Bouquet%2C%20I%20would%20like%20to%20order%20fresh%20flowers"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366] text-[#25D366] hover:text-white font-semibold text-[11px] tracking-wider uppercase transition-all duration-200 shadow-[0_2px_10px_rgba(37,211,102,0.2)] active:scale-95"
              >
                <svg
                  className="w-3.5 h-3.5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.031 2c-5.516 0-9.988 4.473-9.988 9.99 0 1.763.459 3.486 1.332 5.006L2 22.5l5.656-1.348c1.472.802 3.13 1.226 4.821 1.226 5.516 0 9.988-4.473 9.988-9.99 0-5.517-4.472-9.988-9.988-9.988zm-.002 18.232c-1.503 0-2.973-.404-4.253-1.168l-.305-.181-3.156.752.827-3.08-.198-.316a8.204 8.204 0 0 1-1.258-4.449c0-4.543 3.696-8.24 8.243-8.24 4.547 0 8.242 3.697 8.242 8.24 0 4.544-3.695 8.242-8.242 8.242zm4.518-6.175c-.248-.124-1.467-.724-1.695-.806-.228-.083-.394-.124-.56.124-.166.248-.642.806-.787.972-.145.166-.29.186-.538.062-.248-.124-1.047-.386-1.995-1.231-.738-.658-1.236-1.472-1.381-1.72-.145-.248-.016-.382.108-.506.112-.111.248-.29.373-.435.124-.145.166-.248.248-.415.083-.166.041-.311-.021-.435-.062-.124-.56-1.348-.767-1.847-.202-.485-.407-.419-.56-.427l-.477-.008c-.166 0-.435.062-.663.311-.228.248-.87.85-.87 2.074 0 1.224.891 2.406 1.015 2.572.124.166 1.754 2.678 4.249 3.755.594.256 1.058.409 1.42.524.597.19 1.14.163 1.569.099.479-.071 1.467-.6 1.674-1.181.207-.58.207-1.077.145-1.181-.062-.104-.228-.166-.476-.29z" />
                </svg>
                <span>Order on WhatsApp</span>
              </a>

              {/* Circular Wishlist Button */}
              <button
                type="button"
                onClick={handleWishlistClick}
                aria-label="Wishlist"
                className="relative h-9 w-9 rounded-full flex items-center justify-center border border-white/10 bg-white/[0.03] text-white/75 hover:text-[#F43F5E] hover:border-[#E11D48]/40 hover:bg-[#E11D48]/10 transition-all duration-200 active:scale-95"
              >
                <Heart className="w-4 h-4" strokeWidth={1.8} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 h-3.5 min-w-[14px] px-1 bg-[#E11D48] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>

              {/* Shopping Bag Button */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                aria-label="Shopping Bag"
                className="h-9 px-3 rounded-full bg-[#E11D48] hover:bg-[#BE123C] text-white font-medium text-[11px] tracking-wider uppercase flex items-center gap-1.5 transition-all duration-200 shadow-md active:scale-95 cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5" strokeWidth={2} />
                <span className="font-semibold hidden sm:inline">BAG</span>
                <span className="h-4 min-w-[16px] px-1 bg-white text-[#9F1239] font-bold text-[9.5px] rounded-full flex items-center justify-center">
                  {totalCartCount}
                </span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                className="lg:hidden h-10 w-10 rounded-full flex items-center justify-center border border-white/10 bg-white/[0.03] text-white/80 hover:text-white hover:bg-white/[0.07] transition-all"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Editorial Navigation Drawer / Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 z-40 bg-[#101014]/98 backdrop-blur-xl border-t border-white/[0.08] overflow-y-auto animate-fade-in flex flex-col justify-between p-6">
          <div className="space-y-1">
            <p className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#E11D48] mb-3 px-3">
              Explore Collections
            </p>
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-3 rounded-lg text-sm font-medium tracking-[0.14em] uppercase transition-colors ${
                    isActive
                      ? "text-white bg-[#E11D48]/15 border-l-2 border-[#E11D48] font-semibold"
                      : "text-white/70 hover:text-white hover:bg-white/[0.04]"
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive ? (
                    <span className="w-2 h-2 rounded-full bg-[#E11D48] shadow-[0_0_8px_rgba(225,29,72,0.8)]" />
                  ) : (
                    <ArrowUpRight className="w-4 h-4 text-white/30" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 mt-6 border-t border-white/[0.08] space-y-3">
            <div className="flex items-center justify-between text-xs text-white/50 px-2">
              <span>Express Delivery in Lahore</span>
              <span className="text-[#25D366] font-medium">● 2–5 Hours / Midnight</span>
            </div>
            <a
              href="https://wa.me/923094895080?text=Hi%20Lahore%20Bouquet%2C%20I%20would%20like%20to%20order%20fresh%20flowers"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-11 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-medium text-xs tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#25D366]/30 transition-all"
            >
              Order via WhatsApp: +92 309 4895080
            </a>
          </div>
        </div>
      )}
    </>
  );
}