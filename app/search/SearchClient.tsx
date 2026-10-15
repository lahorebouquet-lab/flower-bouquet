"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Search } from "lucide-react";
import ProductCard from "../components/ProductCard";
import { Product } from "../data/products";

function SearchContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const initialQuery = searchParams.get("q") || "";
  const [query, setQuery] = useState(initialQuery);
  const [products, setProducts] = useState<Product[]>([]);
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/products")
      .then((r) => r.json())
      .then((data) => {
        const list = Array.isArray(data) ? data : data.products || [];
        setProducts(list);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      setResults([]);
      return;
    }
    const words = q.split(/\s+/);
    const matched = products.filter((p) => {
      const hay = `${p.title || ""} ${p.desc || ""} ${p.category || ""} ${p.occasion || ""}`.toLowerCase();
      return words.every((w) => hay.includes(w));
    });
    setResults(matched.slice(0, 48));
  }, [query, products]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2 mb-6">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Search</span>
      </nav>

      <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B0B0B] mb-6">
        Search Flowers & Gifts
      </h1>

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="relative max-w-xl">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try 'red roses', 'money bouquet', 'birthday'..."
            aria-label="Search products"
            className="w-full h-12 pl-12 pr-4 rounded-full border border-[#E5DED2] bg-white text-sm text-[#0B0B0B] placeholder:text-[#999999] focus:outline-none focus:border-[#8B1E2D] focus:ring-2 focus:ring-[#8B1E2D]/20"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8B1E2D]" />
        </div>
      </form>

      {loading ? (
        <p className="text-sm text-[#777777]">Loading products...</p>
      ) : !query.trim() ? (
        <div className="text-sm text-[#2A2A2A] space-y-3">
          <p className="font-semibold">Popular searches:</p>
          <div className="flex flex-wrap gap-2">
            {["red roses", "money bouquet", "birthday", "sunflowers", "gajray", "wedding"].map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => {
                  setQuery(term);
                  router.push(`/search?q=${encodeURIComponent(term)}`);
                }}
                className="px-4 py-2 rounded-full border border-[#E5DED2] bg-white text-xs hover:border-[#8B1E2D] hover:text-[#8B1E2D] transition-colors"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      ) : results.length === 0 ? (
        <div className="text-sm text-[#2A2A2A] space-y-2">
          <p className="font-semibold text-base">No results for &ldquo;{query}&rdquo;</p>
          <p>Try a different word, or <Link href="/bouquets" className="text-[#8B1E2D] font-semibold hover:underline">browse all bouquets</Link>.</p>
        </div>
      ) : (
        <>
          <p className="text-sm text-[#2A2A2A] mb-6">
            <strong>{results.length}</strong> result{results.length !== 1 ? "s" : ""} for &ldquo;{query}&rdquo;
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {results.map((p) => (
              <ProductCard key={String(p.id)} product={p} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function SearchClient() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto px-4 py-10 text-sm">Loading search...</div>}>
      <SearchContent />
    </Suspense>
  );
}
