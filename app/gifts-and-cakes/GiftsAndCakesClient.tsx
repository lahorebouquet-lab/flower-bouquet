"use client";

import React, { useState, useMemo, Suspense } from "react";
import { Product } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Search, Sparkles, Cake, Gift, ArrowUpDown } from "lucide-react";

interface Props {
  initialProducts: Product[];
  initialFilter?: string;
}

function getFilterFromParam(urlFilter: string | undefined): string {
  if (!urlFilter) return "all";
  const lower = urlFilter.toLowerCase();
  if (lower.includes("cake")) return "layers-cakes";
  if (lower.includes("choc") || lower.includes("mithai")) return "chocolates";
  if (lower.includes("perfume") || lower.includes("scent")) return "perfumes";
  if (lower.includes("gift") || lower.includes("box") || lower.includes("hamper")) return "gift-boxes";
  if (lower.includes("2500") || lower.includes("budget")) return "under-2500";
  return "all";
}

// One rule per tab, used for both the list and the count, so the number on
// each tab always matches what it shows.
const CHOCOLATE_RE = /\b(chocolates?|ferrero|snickers|kit ?kat|mars|bounty|twix|feastables|toblerone|dairy milk|cadbury)\b/;
const isCake = (p: Product) => p.category === "Birthday Cakes" || /\bcakes?\b/.test(p.title.toLowerCase());
const isPerfume = (p: Product) => p.category === "Scents & Perfumes";
const isChocolate = (p: Product) =>
  !isPerfume(p) && !isCake(p) && CHOCOLATE_RE.test(p.title.toLowerCase());
const isGiftBox = (p: Product) => p.category === "Gifts & Cakes" && !isCake(p) && !isChocolate(p);

const TABS: { id: string; label: string; test: (p: Product) => boolean }[] = [
  { id: "layers-cakes", label: "Fresh Bakery Cakes", test: isCake },
  { id: "chocolates", label: "Imported Chocolates", test: isChocolate },
  { id: "gift-boxes", label: "Gift Boxes & Hampers", test: isGiftBox },
  { id: "perfumes", label: "Perfumes", test: isPerfume },
  { id: "under-2500", label: "Under Rs. 2,500", test: (p) => p.price <= 2500 },
];

function GiftsAndCakesInner({ initialProducts, initialFilter }: Props) {
  const [activeFilter, setActiveFilter] = useState<string>(() => getFilterFromParam(initialFilter));
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("featured");

  const filteredProducts = useMemo(() => {
    let list = [...initialProducts];

    // Filter by tab
    const tab = TABS.find((t) => t.id === activeFilter);
    if (tab) list = list.filter(tab.test);

    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.desc?.toLowerCase().includes(q) ||
          p.badge?.toLowerCase().includes(q)
      );
    }

    // Sorting
    if (sortBy === "price-low") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === "newest") {
      list.sort((a, b) => String(b.id).localeCompare(String(a.id)));
    }

    return list;
  }, [initialProducts, activeFilter, searchQuery, sortBy]);

  const counts = useMemo(
    () => Object.fromEntries(TABS.map((t) => [t.id, initialProducts.filter(t.test).length])),
    [initialProducts],
  );
  const activeLabel = TABS.find((t) => t.id === activeFilter)?.label ?? "All Gifts & Cakes";

  return (
    <div className="space-y-6">
      {/* Search, Filter Bar and Sorting */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[#8B1E2D] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search Lotus, Raffaello, Nutella, Ferrero, Snickers, perfume..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#F8F3EA] border border-[#E5DED2] rounded-xl text-xs sm:text-sm text-[#0B0B0B] placeholder-[#777777] outline-none focus:border-[#8B1E2D] transition-colors"
            />
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 shrink-0">
            <ArrowUpDown className="w-3.5 h-3.5 text-[#8B1E2D]" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 bg-[#F8F3EA] border border-[#E5DED2] rounded-xl text-xs font-medium text-[#0B0B0B] outline-none cursor-pointer"
            >
              <option value="featured">Featured First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest First</option>
            </select>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 pt-1 border-t border-[#F0EBE1]">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
              activeFilter === "all"
                ? "bg-[#8B1E2D] text-white shadow-xs"
                : "bg-[#F8F3EA] text-[#2A2A2A] hover:bg-[#E5DED2]"
            }`}
          >
            All Items ({initialProducts.length})
          </button>

          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveFilter(t.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 cursor-pointer ${
                activeFilter === t.id
                  ? "bg-[#8B1E2D] text-white shadow-xs"
                  : "bg-[#F8F3EA] text-[#2A2A2A] hover:bg-[#E5DED2]"
              }`}
            >
              {t.id === "layers-cakes" && <Cake className="w-3.5 h-3.5 text-[#C6A15B]" />}
              {(t.id === "chocolates" || t.id === "gift-boxes") && <Gift className="w-3.5 h-3.5 text-[#C6A15B]" />}
              {t.label} ({counts[t.id]})
            </button>
          ))}
        </div>
      </div>

      {/* Grid Header Info */}
      <div className="flex items-center justify-between text-xs text-[#2A2A2A] px-1">
        <span>
          Showing <strong className="text-[#0B0B0B]">{filteredProducts.length}</strong> items in{" "}
          <span className="text-[#8B1E2D] font-bold">{activeLabel}</span>
        </span>
        <span className="text-[#8B1E2D] font-semibold flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
          Same-Day & Midnight Delivery Active in Lahore
        </span>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white p-12 rounded-2xl border border-[#E5DED2] text-center space-y-3">
          <p className="text-sm font-semibold text-[#0B0B0B]">No products match your search.</p>
          <button
            onClick={() => {
              setActiveFilter("all");
              setSearchQuery("");
            }}
            className="px-4 py-2 bg-[#8B1E2D] text-white rounded-full text-xs font-bold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function GiftsAndCakesClient({ initialProducts, initialFilter }: Props) {
  // NOTE: no useSearchParams here — the server passes initialFilter as a prop
  // (with key={initialFilter} to remount on change), so the product grid
  // server-renders for SEO instead of client-only hydration.
  return (
    <Suspense fallback={<div className="py-8 text-center text-xs text-[#777777]">Loading Gifts & Cakes collection...</div>}>
      <GiftsAndCakesInner initialProducts={initialProducts} initialFilter={initialFilter} />
    </Suspense>
  );
}
