import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, Clock, User, ArrowLeft, ArrowRight, Share2, Sparkles } from "lucide-react";
import { getSanityBlogPost, getSanityBlogPosts } from "@/sanity/lib/fetch";
import { PortableText } from "next-sanity";
import { SITE_URL } from "@/lib/business";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getSanityBlogPost(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Lahore Bouquet",
    };
  }

  return {
    title: {
      absolute: `${post.title} | Lahore Bouquet Blog`,
    },
    description: post.excerpt,
    alternates: {
      canonical: `https://lahorebouquet.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://lahorebouquet.com/blog/${post.slug}`,
      type: "article",
      images: post.image ? [{ url: post.image }] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getSanityBlogPost(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getSanityBlogPosts();
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image ? [post.image] : undefined,
    datePublished: post.publishedAt || "2026-10-01",
    author: {
      "@type": "Organization",
      name: post.author || "Lahore Bouquet Florist Team",
      url: `${SITE_URL}`,
    },
    publisher: {
      "@type": "Organization",
      name: "Lahore Bouquet",
      url: `${SITE_URL}`,
    },
  };

  const portableTextComponents = {
    block: {
      h2: ({ children }: any) => (
        <h2 className="font-playfair text-xl sm:text-2xl font-bold text-[#0B0B0B] mt-8 mb-3 pt-4 border-t border-[#E5DED2]">
          {children}
        </h2>
      ),
      h3: ({ children }: any) => (
        <h3 className="font-playfair text-lg sm:text-xl font-semibold text-[#0B0B0B] mt-6 mb-2">
          {children}
        </h3>
      ),
      normal: ({ children }: any) => (
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed mb-4">
          {children}
        </p>
      ),
      blockquote: ({ children }: any) => (
        <blockquote className="p-4 my-6 rounded-r-xl border-l-4 border-[#8B1E2D] bg-white/70 italic text-xs sm:text-sm text-[#0B0B0B] shadow-2xs">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }: any) => (
        <ul className="list-disc pl-5 space-y-2 mb-4 text-xs sm:text-sm text-[#2A2A2A]">
          {children}
        </ul>
      ),
      number: ({ children }: any) => (
        <ol className="list-decimal pl-5 space-y-2 mb-4 text-xs sm:text-sm text-[#2A2A2A]">
          {children}
        </ol>
      ),
    },
    marks: {
      link: ({ value, children }: any) => (
        <a
          href={value?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#8B1E2D] underline font-medium hover:text-[#C6A15B] transition-colors"
        >
          {children}
        </a>
      ),
      strong: ({ children }: any) => (
        <strong className="font-bold text-[#0B0B0B]">{children}</strong>
      ),
    },
  };

  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-10 space-y-10 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-[#0B0B0B] transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold truncate max-w-xs sm:max-w-md">{post.title}</span>
      </nav>

      {/* Article Header */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-3 text-xs text-[#777777]">
          <span className="px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] font-bold uppercase tracking-wider text-[10px] sm:text-[11px]">
            {post.tag || "Flower Care"}
          </span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" /> {post.date || "October 2026"}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {post.readTime || "4 min read"}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <User className="w-3.5 h-3.5" /> {post.author || "Florist Team"}
          </span>
        </div>

        <h1 className="font-playfair text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B0B0B] leading-tight">
          {post.title}
        </h1>

        <p className="text-sm sm:text-base text-[#2A2A2A] leading-relaxed border-l-2 border-[#C6A15B] pl-4 italic">
          {post.excerpt}
        </p>
      </header>

      {/* Featured Cover Image */}
      {post.image && (
        <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-md border border-[rgba(198,161,91,0.25)] bg-white">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-cover"
          />
        </div>
      )}

      {/* Main Body Content */}
      <section className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[rgba(198,161,91,0.25)] shadow-xs">
        {post.body && Array.isArray(post.body) && post.body.length > 0 ? (
          <PortableText value={post.body} components={portableTextComponents} />
        ) : (
          <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed">
            {post.excerpt}
          </p>
        )}

        {/* Florist Atelier Dispatch CTA */}
        <div className="mt-10 p-6 rounded-xl bg-[#F8F3EA] border border-[#C6A15B]/40 space-y-3">
          <div className="flex items-center gap-2 text-[#8B1E2D] font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#C6A15B]" />
            Order Fresh Flowers in Lahore Today
          </div>
          <p className="text-xs text-[#2A2A2A] leading-relaxed">
            Need fresh imported Dutch roses, sunflowers, or custom money bouquets in Lahore? We hand-tie fresh bouquets daily in our Gulberg atelier and dispatch across DHA, Bahria Town, and Model Town in 2 to 5 hours with WhatsApp photo proof.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/bouquets"
              className="px-5 py-2.5 rounded-full bg-[#8B1E2D] text-white hover:bg-[#C6A15B] hover:text-[#0B0B0B] text-xs font-semibold uppercase tracking-wider transition-all shadow-xs"
            >
              Browse Bouquets
            </Link>
            <Link
              href="/delivery-areas"
              className="px-5 py-2.5 rounded-full border border-[#8B1E2D] text-[#8B1E2D] hover:bg-[#8B1E2D] hover:text-white text-xs font-semibold uppercase tracking-wider transition-all"
            >
              View Lahore Delivery Areas
            </Link>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="space-y-5 pt-6 border-t border-[#E5DED2]">
          <h2 className="font-playfair text-xl sm:text-2xl font-bold text-[#0B0B0B]">
            More Guides & Insights
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                href={`/blog/${related.slug}`}
                className="group rounded-xl p-4 bg-white border border-[rgba(198,161,91,0.25)] hover:border-[#C6A15B] transition-all flex flex-col justify-between space-y-3"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase text-[#8B1E2D] tracking-wider">
                    {related.tag}
                  </span>
                  <h3 className="font-playfair text-sm font-bold text-[#0B0B0B] group-hover:text-[#8B1E2D] transition-colors line-clamp-2 mt-1">
                    {related.title}
                  </h3>
                </div>
                <div className="text-[11px] text-[#8B1E2D] font-semibold flex items-center gap-1 group-hover:text-[#C6A15B]">
                  Read Guide <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Back to Blog */}
      <div className="pt-4 flex justify-between items-center text-xs">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-[#8B1E2D] hover:text-[#0B0B0B] font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Guides
        </Link>
      </div>
    </main>
  );
}
