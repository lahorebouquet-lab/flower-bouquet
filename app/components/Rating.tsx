import React from "react";
import { Star } from "lucide-react";

interface RatingProps {
  /** Average rating (e.g. 4.8). */
  rating: number;
  /** Number of real verified reviews. Component renders nothing when 0. */
  reviewCount: number;
  className?: string;
}

/**
 * Star rating display — ONLY renders when there are real verified reviews
 * (reviewCount > 0). Never renders fake/placeholder ratings.
 */
export default function Rating({ rating, reviewCount, className = "" }: RatingProps) {
  if (!reviewCount || reviewCount <= 0) return null;

  const fullStars = Math.round(rating);

  return (
    <div className={`flex items-center gap-1.5 text-xs text-[#2A2A2A] ${className}`}>
      <div className="flex text-[#C6A15B]" aria-label={`Rated ${rating} out of 5`}>
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className={`w-3.5 h-3.5 ${i <= fullStars ? "fill-[#C6A15B]" : "text-[#E5DED2]"}`}
          />
        ))}
      </div>
      <span className="font-semibold text-[#0B0B0B]">{rating.toFixed(1)}</span>
      <span className="text-[#777777]">
        ({reviewCount} review{reviewCount === 1 ? "" : "s"})
      </span>
    </div>
  );
}
