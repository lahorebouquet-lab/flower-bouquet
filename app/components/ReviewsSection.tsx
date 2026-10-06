"use client";

import React from "react";
import Image from "next/image";
import { Star, BadgeCheck } from "lucide-react";
import { SanityReview } from "@/sanity/lib/fetch";
import { GOOGLE_BUSINESS_URL } from "@/lib/site";

interface ReviewsSectionProps {
  reviews: SanityReview[];
}

/**
 * Customer Reviews — renders only when real reviews exist in Sanity.
 * Hidden entirely when the list is empty.
 */
export default function ReviewsSection({ reviews }: ReviewsSectionProps) {
  if (!reviews || reviews.length === 0) return null;

  const visible = reviews.slice(0, 6);

  return (
    <section className="w-full py-16 px-4 sm:px-6 bg-[#F8F3EA] border-b border-[#E5DED2] text-[#101012]">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">
            Loved Across Lahore
          </span>
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012]">
            Customer Reviews
          </h2>
          <p className="text-xs sm:text-sm text-[#2A2A2A]">
            Real words from real customers — verified orders delivered across Lahore.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {visible.map((review) => (
            <article
              key={review.id}
              className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-xs space-y-3 flex flex-col"
            >
              <div className="flex text-[#C6A15B]" aria-label={`Rated ${review.rating} out of 5`}>
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i <= Math.round(review.rating) ? "fill-[#C6A15B]" : "text-[#E5DED2]"}`}
                  />
                ))}
              </div>

              <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed flex-1">
                &ldquo;{review.quote}&rdquo;
              </p>

              {review.photo && (
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#F8F3EA]">
                  <Image
                    src={review.photo}
                    alt={`Bouquet ordered by ${review.name}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
              )}

              <div className="flex items-center gap-2 pt-1 border-t border-[#E5DED2]">
                <div className="w-9 h-9 rounded-full bg-[#8B1E2D]/10 border border-[#8B1E2D]/20 flex items-center justify-center text-[#8B1E2D] font-bold text-sm shrink-0">
                  {review.name.charAt(0).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1 text-xs font-bold text-[#0B0B0B]">
                    <span className="truncate">{review.name}</span>
                    {review.verified !== false && (
                      <BadgeCheck className="w-3.5 h-3.5 text-[#8B1E2D] shrink-0" aria-label="Verified order" />
                    )}
                  </div>
                  <div className="text-[11px] text-[#777777] truncate">
                    {review.location}
                    {review.item ? ` · ${review.item}` : ""}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {GOOGLE_BUSINESS_URL && (
          <div className="text-center">
            <a
              href={GOOGLE_BUSINESS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#0B0B0B] text-[#0B0B0B] hover:bg-[#0B0B0B] hover:text-white font-bold text-xs uppercase tracking-wider transition-all"
            >
              See us on Google
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
