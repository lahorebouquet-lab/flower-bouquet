import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../components/ProductCard";
import { Sparkles, Camera, MessageCircle, HelpCircle, Calendar, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: {
    absolute: "Wedding Room & Car Decoration in Lahore | Masehri & Bridal Décor",
  },
  description: "Fresh flower wedding room decoration, traditional masehri design, and bridal car decoration in Lahore. On-site setup across all areas. Prices from Rs. 6,500.",
  alternates: {
    canonical: "https://lahorebouquet.com/wedding-decor",
  },
  keywords: [
    "wedding room decoration",
    "masehri design",
    "wedding car decoration",
    "wedding car decoration lahore",
    "bridal room decoration lahore",
    "bridal bed decoration lahore",
    "car decoration lahore",
    "fresh flower car decoration lahore"
  ],
  openGraph: {
    title: "Wedding Room & Car Decoration in Lahore | Masehri & Bridal Décor",
    description: "Fresh flower wedding room decoration, traditional masehri design, and bridal car decoration in Lahore. On-site setup across all areas. Prices from Rs. 6,500.",
    url: "https://lahorebouquet.com/wedding-decor",
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
  },
};

export default async function WeddingDecorPage() {
  const allProducts = await getSanityProducts();
  const weddingProducts = allProducts.filter(p => p.category === "Wedding Décor");

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://lahorebouquet.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Wedding Décor",
        item: "https://lahorebouquet.com/wedding-decor",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do florists come to the house for bridal room and masehri setup in Lahore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our expert floral decorators travel to your home or venue anywhere in Lahore (DHA, Bahria Town, Gulberg, Model Town, Johar Town) and complete the bridal bed canopy or masehri installation with fresh fragrant roses and ambient fairy lights."
        }
      },
      {
        "@type": "Question",
        name: "How far in advance should I book wedding car decoration in Lahore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We recommend booking at least 2 to 3 days in advance to reserve your preferred date and time slot. Same-day emergency car decoration is also accommodated based on florist availability."
        }
      },
      {
        "@type": "Question",
        name: "How much does wedding car decoration cost in Lahore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Wedding car decoration starts from Rs. 6,500 for classic bonnet bouquets and ribbon ribbons, and goes up to Rs. 12,000+ for full luxury floral netting with imported roses, orchids, and baby's breath."
        }
      },
      {
        "@type": "Question",
        name: "Do you also provide fresh flower mehndi jewellery and gajray?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! We craft matching fresh flower jewellery (haath phool, matha patti, jhumkay) and fragrant motia gajray for Mehndi and Mayun celebrations across Lahore."
        }
      }
    ]
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Wedding & Car Décor</span>
      </nav>

      {/* Hero Category Banner (Section 5 Standard) */}
      <section className="bg-[#0B0B0B] p-8 sm:p-12 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
            On-Site Floral Artistry
          </span>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Wedding Room and Car Décor in Lahore
          </h1>

          <p className="text-[#F8F3EA]/90 text-xs sm:text-sm leading-relaxed font-light">
            Make your wedding unforgettable with fresh bridal room decoration, traditional masehri designs, and elegant wedding car decoration. Lahore Bouquet provides complete on-site floral styling across Lahore—including DHA, Gulberg, Bahria Town, and Model Town—using fragrant red roses, motia, and imported orchids. Prices start from <strong>Rs. 6,500</strong> for car decoration and <strong>Rs. 12,000</strong> for bridal room canopies.
          </p>

          <p className="text-[#F8F3EA]/85 text-xs sm:text-sm leading-relaxed font-light">
            We decorate the rooms and cars that matter most on your wedding day. Our team comes to your home or venue, sets up the canopy or car flowers, and leaves the space ready before the guests arrive.
          </p>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-[#C6A15B]" /> On-site setup at home or venue</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#C6A15B]" /> 100% Fresh Motia & Rose Garlands</span>
            <a 
              href="https://wa.me/923094895080?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20book%20wedding%20decor."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#C6A15B] font-semibold hover:underline"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" /> Book Consultation on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* What we offer & Booking tips */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
          <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">What we offer</h2>
          <ul className="space-y-2.5 text-xs text-[#2A2A2A]">
            <li className="p-3.5 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
              <strong className="block text-sm text-[#8B1E2D] font-bold">Bridal room canopy décor (From Rs. 14,500)</strong>
              Fabric drapes, fresh rose garlands, petals on the bed.
            </li>
            <li className="p-3.5 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
              <strong className="block text-sm text-[#8B1E2D] font-bold">Wedding car decoration (From Rs. 8,500)</strong>
              Fresh flowers with ribbons and a clean finish.
            </li>
            <li className="p-3.5 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
              <strong className="block text-sm text-[#8B1E2D] font-bold">Mehndi flower jewellery (Rs. 4,500)</strong>
              Haath phool and matha patti made of fresh flowers.
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-3 flex flex-col justify-between">
          <div className="space-y-3">
            <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">Booking tips</h2>
            <ul className="space-y-2 text-xs text-[#2A2A2A] list-disc list-inside leading-relaxed">
              <li>Book at least a few days ahead in wedding season.</li>
              <li>Send us the room size and a photo of your bed and ceiling so we can plan drapes correctly.</li>
              <li>Tell us the setup time. We prefer to finish at least an hour before guests arrive.</li>
            </ul>
          </div>
          <div className="pt-4 border-t border-[#E5DED2]">
            <a
              href="https://wa.me/923094895080?text=Hello%20Lahore%20Bouquet!%20I%20would%20like%20to%20send%20photos%20for%20a%20wedding%20booking."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8B1E2D] hover:text-[#C6A15B] transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Share room photos on WhatsApp for custom quote →</span>
            </a>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between text-xs text-[#2A2A2A]">
          <span>Showing wedding decor and jewellery services</span>
          <span className="text-[#8B1E2D] font-semibold">On-site execution in Lahore</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {weddingProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Category FAQ */}
      <section className="bg-white p-8 sm:p-10 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#2A2A2A] leading-relaxed">
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Do you set up at the venue?</h3>
            <p>Yes, anywhere in Lahore.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Do the flowers smell?</h3>
            <p>Fresh roses do, and that is the point. Tell us if anyone in the room has an allergy.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
