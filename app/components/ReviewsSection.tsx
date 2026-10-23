"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Star, BadgeCheck, ChevronLeft, ChevronRight, CheckCircle2, Send } from "lucide-react";
import { SanityReview } from "@/sanity/lib/fetch";
import { GOOGLE_BUSINESS_URL } from "@/lib/site";

interface ReviewsSectionProps {
  reviews: SanityReview[];
}

function formatDate(iso?: string): string | null {
  if (!iso) return null;
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return null;
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

/**
 * Customer Reviews — carousel of approved reviews from Sanity, modeled on
 * the card-carousel + "leave a review" pattern used by zerelle.ae, restyled
 * in Lahore Bouquet's own design language.
 *
 * Only reviews with status "approved" in Sanity are passed in (see
 * REVIEWS_QUERY). The "Write a Review" form posts to /api/reviews, which
 * saves submissions as PENDING — they appear here only after the owner
 * approves them in Sanity Studio.
 */
export default function ReviewsSection({ reviews }: ReviewsSectionProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState("");
  const [bouquet, setBouquet] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState(""); // honeypot — humans never fill this
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const list = reviews ?? [];

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * Math.min(el.clientWidth * 0.85, 420), behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, rating, comment, bouquet, location, website }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const inputCls =
    "w-full rounded-xl border border-[#E5DED2] bg-[#F8F3EA] px-4 py-3 text-sm text-[#101012] placeholder:text-[#595959] focus:outline-none focus:ring-2 focus:ring-[#C6A15B] focus:border-transparent";

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

        {list.length > 0 ? (
          <div className="relative">
            <div
              ref={trackRef}
              className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {list.map((review) => {
                const date = formatDate(review.date);
                return (
                  <article
                    key={review.id}
                    className="snap-start shrink-0 w-[86%] sm:w-[47%] lg:w-[31.8%] p-6 rounded-[20px] bg-white border border-[rgba(198,161,91,0.25)] shadow-xs space-y-3 flex flex-col"
                  >
                    <div className="flex text-[#C6A15B]" role="img" aria-label={`Rated ${review.rating} out of 5`}>
                      {[1, 2, 3, 4, 5].map((i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i <= Math.round(review.rating) ? "fill-[#C6A15B]" : "text-[#E5DED2]"}`}
                        />
                      ))}
                    </div>

                    <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed flex-1 line-clamp-5">
                      &ldquo;{review.quote}&rdquo;
                    </p>

                    {review.photo && (
                      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#F8F3EA]">
                        <Image
                          src={review.photo}
                          alt={`Bouquet ordered by ${review.name}`}
                          fill
                          sizes="(max-width: 640px) 86vw, (max-width: 1024px) 47vw, 32vw"
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
                            <BadgeCheck className="w-3.5 h-3.5 text-[#8B1E2D] shrink-0" role="img" aria-label="Verified order" />
                          )}
                        </div>
                        <div className="text-[11px] text-[#595959] truncate">
                          {review.location}
                          {review.item ? ` · ${review.item}` : ""}
                          {date ? ` · ${date}` : ""}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {list.length > 1 && (
              <div className="flex justify-center gap-2 pt-4">
                <button
                  type="button"
                  onClick={() => scrollBy(-1)}
                  aria-label="Previous reviews"
                  className="w-10 h-10 rounded-full bg-white border border-[rgba(16,16,18,0.12)] text-[#101012] flex items-center justify-center shadow-xs hover:bg-[#101012] hover:text-white transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => scrollBy(1)}
                  aria-label="Next reviews"
                  className="w-10 h-10 rounded-full bg-white border border-[rgba(16,16,18,0.12)] text-[#101012] flex items-center justify-center shadow-xs hover:bg-[#101012] hover:text-white transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        ) : (
          <p className="text-center text-xs sm:text-sm text-[#595959]">
            No reviews yet — be the first to share your experience below.
          </p>
        )}

        {/* Write-a-review + Google CTAs (zerelle-style gold button under the carousel) */}
        <div className="text-center flex flex-wrap gap-3 justify-center">
          <button
            type="button"
            onClick={() => {
              setFormOpen((v) => !v);
              setSubmitted(false);
              setError("");
            }}
            aria-expanded={formOpen}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#C6A15B] text-white hover:bg-[#8B1E2D] font-bold text-xs uppercase tracking-wider transition-all"
          >
            <Star className="w-4 h-4" /> Write a Review
          </button>
          {GOOGLE_BUSINESS_URL && (
            <>
              <a
                href={GOOGLE_BUSINESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-[#0B0B0B] text-[#0B0B0B] hover:bg-[#0B0B0B] hover:text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                See us on Google
              </a>
              <a
                href="https://g.page/r/CUmgyWPjM_pKEAI/review"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B1E2D] text-white hover:bg-[#C6A15B] hover:text-[#0B0B0B] font-bold text-xs uppercase tracking-wider transition-all"
              >
                <Star className="w-4 h-4" /> Leave a Google Review
              </a>
            </>
          )}
        </div>

        {formOpen && (
          <div className="max-w-2xl mx-auto w-full">
            {submitted ? (
              <div className="p-6 sm:p-8 rounded-[20px] bg-white border border-[rgba(198,161,91,0.35)] text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-[#C6A15B] mx-auto" />
                <h3 className="font-playfair text-lg font-bold text-[#101012]">Thank you for your review!</h3>
                <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
                  Your review has been submitted successfully. Our team reads every review first,
                  and once it is approved it will appear here on this page.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 rounded-[20px] bg-white border border-[rgba(198,161,91,0.35)] shadow-xs space-y-4 text-left"
              >
                <h3 className="font-playfair text-lg font-bold text-[#101012] text-center">
                  Share your experience
                </h3>

                <div>
                  <label htmlFor="review-name" className="block text-xs font-bold uppercase tracking-wider text-[#2A2A2A] mb-1.5">
                    Your name *
                  </label>
                  <input
                    id="review-name"
                    type="text"
                    required
                    maxLength={60}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Ayesha Khan"
                    className={inputCls}
                  />
                </div>

                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-[#2A2A2A] mb-1.5">
                    Your rating *
                  </span>
                  <div className="flex gap-1" role="radiogroup" aria-label="Star rating">
                    {[1, 2, 3, 4, 5].map((i) => {
                      const active = i <= (hoverRating || rating);
                      return (
                        <button
                          key={i}
                          type="button"
                          role="radio"
                          aria-checked={rating === i}
                          aria-label={`${i} star${i > 1 ? "s" : ""}`}
                          onClick={() => setRating(i)}
                          onMouseEnter={() => setHoverRating(i)}
                          onMouseLeave={() => setHoverRating(0)}
                          className="p-1"
                        >
                          <Star
                            className={`w-8 h-8 transition-colors ${active ? "fill-[#C6A15B] text-[#C6A15B]" : "text-[#E5DED2]"}`}
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label htmlFor="review-comment" className="block text-xs font-bold uppercase tracking-wider text-[#2A2A2A] mb-1.5">
                    Your review *
                  </label>
                  <textarea
                    id="review-comment"
                    required
                    minLength={10}
                    maxLength={1000}
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="How were the flowers and the delivery?"
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="review-bouquet" className="block text-xs font-bold uppercase tracking-wider text-[#2A2A2A] mb-1.5">
                      What did you order? (optional)
                    </label>
                    <input
                      id="review-bouquet"
                      type="text"
                      maxLength={80}
                      value={bouquet}
                      onChange={(e) => setBouquet(e.target.value)}
                      placeholder="e.g. Red Rose Bouquet"
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label htmlFor="review-location" className="block text-xs font-bold uppercase tracking-wider text-[#2A2A2A] mb-1.5">
                      Your area (optional)
                    </label>
                    <input
                      id="review-location"
                      type="text"
                      maxLength={60}
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g. DHA Phase 5"
                      className={inputCls}
                    />
                  </div>
                </div>

                {/* Honeypot — hidden from humans, bots fill it and get dropped */}
                <div className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden" aria-hidden="true">
                  <label>
                    Website
                    <input
                      type="text"
                      name="website"
                      tabIndex={-1}
                      autoComplete="off"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </label>
                </div>

                {error && (
                  <p className="text-xs font-semibold text-[#8B1E2D] bg-[#8B1E2D]/5 border border-[#8B1E2D]/20 rounded-xl px-4 py-3">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#8B1E2D] text-white hover:bg-[#C6A15B] hover:text-[#0B0B0B] font-bold text-xs uppercase tracking-wider transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  {submitting ? "Submitting…" : "Submit Review"}
                </button>
                <p className="text-[11px] text-[#595959] text-center">
                  Reviews appear on this page after a quick approval by our team.
                </p>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
