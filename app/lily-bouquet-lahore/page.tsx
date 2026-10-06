export const revalidate = 60;
import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Flower2, Truck, Camera, MessageCircle, HelpCircle, Sparkles, Droplets, Heart } from "lucide-react";
import { getSanityProducts } from "@/sanity/lib/fetch";
import { ALL_PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";

export const metadata: Metadata = {
  title: {
    absolute: "Lily Bouquet in Lahore | Fresh Oriental Lilies Delivery",
  },
  description: "Order a fresh lily bouquet in Lahore. Elegant Oriental and Asiatic lilies — perfect for sympathy, get-well wishes and refined gifting. Delivery in 2–5 hours.",
  alternates: {
    canonical: "https://lahorebouquet.com/lily-bouquet-lahore",
  },
  keywords: [
    "lily bouquet",
    "lily bouquet lahore",
    "white lily bouquet",
    "oriental lilies pakistan",
    "buy lilies online lahore",
  ],
  openGraph: {
    title: "Lily Bouquet in Lahore | Fresh Oriental Lilies Delivery",
    description: "Order a fresh lily bouquet in Lahore. Elegant Oriental and Asiatic lilies — perfect for sympathy, get-well wishes and refined gifting.",
    url: "https://lahorebouquet.com/lily-bouquet-lahore",
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
  },
};

const FAQS = [
  {
    q: "What do lilies symbolize when gifted?",
    a: "White lilies symbolize purity, sympathy and remembrance — making them the traditional choice for condolences and get-well wishes. Pink lilies express admiration and prosperity, while orange lilies convey passion and confidence.",
  },
  {
    q: "How long do lily bouquets last?",
    a: "Fresh lily bouquets last 7 to 10 days with fresh water and trimmed stems. We remove the pollen anthers before dispatch so the blooms stay pristine and won't stain clothes or furniture.",
  },
  {
    q: "Are lilies good for condolence flowers in Lahore?",
    a: "Yes — white lilies are the most requested condolence flower in Lahore. We deliver sympathy lily arrangements across the city in 2 to 5 hours, including same-day service.",
  },
  {
    q: "Do lilies have a strong fragrance?",
    a: "Oriental lilies (like Stargazer and Casablanca) are beautifully fragrant. If you prefer a milder scent — for hospitals or offices — ask for Asiatic lilies, which are nearly scent-free.",
  },
];

export default async function LilyBouquetLahorePage() {
  const sanityProducts = await getSanityProducts();
  const allProducts = sanityProducts.length > 0 ? sanityProducts : ALL_PRODUCTS;

  const lilyProducts = allProducts.filter(p =>
    p.category?.toLowerCase().includes("lil") ||
    p.title.toLowerCase().includes("lily") ||
    p.title.toLowerCase().includes("lilies")
  );
  const displayProducts = lilyProducts.length > 0 ? lilyProducts : allProducts.filter(p => p.badgeType === "bestseller" || p.badge === "Bestseller").slice(0, 4);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://lahorebouquet.com" },
      { "@type": "ListItem", position: 2, name: "Bouquets", item: "https://lahorebouquet.com/bouquets" },
      { "@type": "ListItem", position: 3, name: "Lily Bouquet Lahore", item: "https://lahorebouquet.com/lily-bouquet-lahore" },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-14 bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/bouquets" className="hover:text-[#0B0B0B] transition-colors">Bouquets</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Lily Bouquet Lahore</span>
      </nav>

      {/* Hero */}
      <section className="bg-[#0B0B0B] p-8 sm:p-14 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
            <Flower2 className="w-3.5 h-3.5" />
            Elegant & Fragrant
          </div>
          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Lily Bouquet in Lahore
          </h1>
          <p className="text-[#F8F3EA]/90 text-sm sm:text-base leading-relaxed font-light">
            A lily bouquet is the most graceful gift you can send — tall, fragrant and quietly luxurious.
            White lilies are Lahore&apos;s classic choice for <strong>sympathy and get-well wishes</strong>, while
            pink and Stargazer lilies suit birthdays and anniversaries. Lahore Bouquet hand-ties fresh
            Oriental and Asiatic lilies on the morning of dispatch and delivers anywhere in Lahore in{" "}
            <strong>2 to 5 hours</strong>, with a live photo sent on WhatsApp before our rider departs.
            Order online or call <a href="tel:+923104225974" className="text-[#C6A15B] font-semibold hover:underline">0310-4225974</a>.
          </p>
          <div className="flex flex-wrap gap-4 pt-3 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#C6A15B]" /> Delivery in 2 to 5 hours</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Live WhatsApp photo before dispatch</span>
            <span className="flex items-center gap-1.5"><Droplets className="w-4 h-4 text-[#C6A15B]" /> Pollen removed for stain-free blooms</span>
          </div>
          <div className="pt-2 flex flex-wrap gap-3">
            <a
              href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20want%20to%20order%20a%20lily%20bouquet."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-semibold transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              Order on WhatsApp (0310-4225974)
            </a>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="space-y-6">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">
            {lilyProducts.length > 0 ? "Our Lily Bouquets" : "Customer Favourites"}
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {displayProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        {lilyProducts.length === 0 && (
          <p className="text-xs text-[#777777]">
            New lily arrangements arrive weekly — message us on WhatsApp for today&apos;s fresh lily selection.
          </p>
        )}
      </section>

      {/* Lily care + meaning */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-[#8B1E2D]">
            <Heart className="w-5 h-5" />
            <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">When to Send Lilies</h2>
          </div>
          <ul className="text-xs sm:text-sm leading-relaxed space-y-2 list-disc list-inside">
            <li><strong>Condolences:</strong> white Oriental lilies are the traditional sympathy flower.</li>
            <li><strong>Get-well wishes:</strong> elegant for hospital and home recovery.</li>
            <li><strong>Anniversaries:</strong> Stargazer lilies for a bold romantic statement.</li>
            <li><strong>Corporate gifting:</strong> refined and long-lasting on office desks.</li>
          </ul>
        </div>
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-3">
          <div className="flex items-center gap-2 text-[#8B1E2D]">
            <Droplets className="w-5 h-5" />
            <h2 className="font-playfair text-xl font-bold text-[#0B0B0B]">Lily Care Tips</h2>
          </div>
          <ul className="text-xs sm:text-sm leading-relaxed space-y-2 list-disc list-inside">
            <li>Trim stems at an angle and change water every 2 days.</li>
            <li>Keep away from direct sunlight and ripening fruit.</li>
            <li>Remove spent blooms so buds below keep opening.</li>
            <li>We pre-remove pollen anthers — blooms stay clean and stain-free.</li>
          </ul>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white p-8 sm:p-10 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold">Frequently Asked Questions</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#2A2A2A] leading-relaxed">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
              <h3 className="font-semibold text-[#0B0B0B] text-sm">{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
