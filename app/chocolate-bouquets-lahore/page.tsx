import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Sparkles, Truck, Camera, MessageCircle, HelpCircle, Gift, Heart, ShieldCheck } from "lucide-react";
import { getSanityProducts } from "@/sanity/lib/fetch";
import { ALL_PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";
import { SITE_URL, itemListSchema } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Chocolate Bouquet in Lahore | Price & Delivery | Lahore Bouquet",
  },
  description: "Order a chocolate bouquet in Lahore: chocolates arranged like flowers. Chocolate bouquet price in Pakistan from Rs. 4,200. Delivery across the city.",
  alternates: {
    canonical: `${SITE_URL}/chocolate-bouquets-lahore`,
  },
  keywords: [
    "chocolate bouquet",
    "chocolate flower bouquet",
    "chocolate bouquet price in pakistan",
    "chocolate bouquet near me",
    "ferrero rocher bouquet lahore",
    "chocolate bouquets lahore"
  ],
  openGraph: {
    title: "Chocolate Bouquet in Lahore | Price & Delivery",
    description: "Order a chocolate bouquet in Lahore: chocolates arranged like flowers. Chocolate bouquet price in Pakistan from Rs. 4,200. Delivery across the city.",
    url: `${SITE_URL}/chocolate-bouquets-lahore`,
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
  },
};

export default async function ChocolateBouquetsLahorePage() {
  const sanityProducts = await getSanityProducts();
  const allProducts = sanityProducts.length > 0 ? sanityProducts : ALL_PRODUCTS;

  // Filter chocolate and gift combo products
  const chocolateProducts = allProducts.filter(p => 
    p.category === "Gifts & Cakes" || 
    p.title.toLowerCase().includes("chocolate") || 
    p.title.toLowerCase().includes("ferrero") ||
    p.title.toLowerCase().includes("cake") ||
    p.title.toLowerCase().includes("hamper")
  );

  const itemListJsonLd = itemListSchema(chocolateProducts, `${SITE_URL}/chocolate-bouquets-lahore`, "Chocolate Bouquets in Lahore");

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Bouquets",
        item: `${SITE_URL}/bouquets`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Chocolate Bouquets",
        item: `${SITE_URL}/chocolate-bouquets-lahore`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I get a chocolate bouquet delivered today in Lahore?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We offer same-day chocolate bouquet delivery across Lahore within 2 to 5 hours for orders placed before 4:00 PM."
        }
      },
      {
        "@type": "Question",
        name: "What is the chocolate bouquet price in Pakistan?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Chocolate bouquets in Lahore start from Rs. 3,800 to Rs. 4,200 for Cadbury and Ferrero Rocher arrangements, and go up to Rs. 6,500+ for large floral combos and acrylic gift hampers."
        }
      },
      {
        "@type": "Question",
        name: "How do you protect chocolate bouquets from melting in Lahore heat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All our chocolate bouquets are crafted in temperature-controlled ateliers and dispatched with careful, climate-protected delivery to prevent chocolates from melting."
        }
      },
      {
        "@type": "Question",
        name: "Can I customize the brand of chocolates used?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We can craft custom bouquets using Ferrero Rocher, Cadbury Dairy Milk, KitKat, Lindt, Galaxy, or Kinder chocolates. Contact us on WhatsApp (0310-4225974) for custom orders."
        }
      }
    ]
  };

  const priceTable = [
    { name: "Ferrero Rocher & Velvet Rose Bouquet", items: "16 Ferrero Rocher + Fresh Dutch Red Roses", price: "Rs. 4,200", badge: "Bestseller" },
    { name: "Cadbury Dairy Milk & Rose Bouquet", items: "12 Dairy Milk Bars + 10 Pink/Red Roses", price: "Rs. 3,800", badge: "Popular" },
    { name: "All-Ferrero Gold Statement Bouquet", items: "24 Ferrero Rocher in Luxury Gold Wrapping", price: "Rs. 5,500", badge: "Luxury" },
    { name: "Birthday Cake & Acrylic Flower Box", items: "Fresh Bakery Fudge Cake + Roses + Fairy Lights", price: "Rs. 5,800", badge: "Celebration" },
    { name: "Flowers with Teddy Bear & Chocolate Hamper", items: "Plush Cuddly Bear + Chocolates + Fresh Bouquet", price: "Rs. 5,200", badge: "Complete Gift" },
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 py-10 space-y-14 bg-[#F8F3EA] text-[#2A2A2A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <Link href="/bouquets" className="hover:text-[#0B0B0B] transition-colors">Bouquets</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Chocolate Bouquets</span>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B0B0B] p-8 sm:p-14 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5" />
            Delicious & Beautiful Gifts
          </div>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Chocolate Bouquets in Lahore
          </h1>

          {/* AEO / GEO Direct Answer Paragraph */}
          <p className="text-[#F8F3EA]/90 text-sm sm:text-base leading-relaxed font-light">
            A chocolate bouquet is a gift that looks like flowers and tastes like dessert. Lahore Bouquet arranges premium <strong>Ferrero Rocher, Cadbury Dairy Milk, and KitKat</strong> chocolates with luxury satin ribbons, imported wrapping paper, and optional fresh Dutch roses. Prices start from <strong>Rs. 4,200</strong>, with same-day delivery across Lahore within 2 to 5 hours. Order online or call <a href="tel:+923104225974" className="text-[#C6A15B] font-semibold hover:underline">0310-4225974</a>.
          </p>

          <div className="flex flex-wrap gap-4 pt-3 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#C6A15B]" /> Delivery in 2 to 5 hours</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> WhatsApp photo before dispatch</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-[#C6A15B]" /> Melt-free AC transport</span>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <a 
              href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20want%20to%20order%20a%20chocolate%20bouquet."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0E7C5B] hover:bg-[#0B6E4F] text-white text-xs sm:text-sm font-semibold transition-all shadow-md active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              Order on WhatsApp (0310-4225974)
            </a>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0B0B0B]">
              Browse Chocolate & Gift Combos
            </h2>
            <p className="text-xs text-[#555555] mt-1">Hand-wrapped with authentic branded chocolates and fresh stems</p>
          </div>
          <span className="text-xs text-[#8B1E2D] font-bold">Same-Day Lahore Delivery</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {chocolateProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Styles & Pricing Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0B0B0B]">
            Chocolate Bouquet Price in Pakistan
          </h2>
          <p className="text-xs sm:text-sm text-[#555555]">
            Prices depend on the number and brand of chocolates selected. We use only fresh, genuine confectioneries with valid expiry dates.
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[rgba(198,161,91,0.25)] bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm text-[#2A2A2A]">
            <thead className="bg-[#0B0B0B] text-white uppercase text-[11px] tracking-wider font-semibold">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Bouquet Arrangement</th>
                <th className="py-3.5 px-4 sm:px-6">Included Confections</th>
                <th className="py-3.5 px-4 sm:px-6">Price</th>
                <th className="py-3.5 px-4 sm:px-6">Collection</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5DED2]">
              {priceTable.map((item, idx) => (
                <tr key={idx} className="hover:bg-[#F8F3EA]/60 transition-colors">
                  <td className="py-4 px-4 sm:px-6 font-semibold text-[#0B0B0B]">{item.name}</td>
                  <td className="py-4 px-4 sm:px-6 text-[#666666] text-xs">{item.items}</td>
                  <td className="py-4 px-4 sm:px-6 text-[#8B1E2D] font-bold">{item.price}</td>
                  <td className="py-4 px-4 sm:px-6">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-[#C6A15B]/20 text-[#0B0B0B] border border-[#C6A15B]">
                      {item.badge}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Guide: Choosing Styles */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#8B1E2D]/10 flex items-center justify-center text-[#8B1E2D]">
            <Gift className="w-5 h-5" />
          </div>
          <h3 className="font-playfair text-lg font-bold text-[#0B0B0B]">All-Chocolate Bouquet</h3>
          <p className="text-xs text-[#555555] leading-relaxed">
            Ideal for people who prefer a lasting sweet treat over fresh flowers. Packed tightly in spiral or tier form with Italian gold Ferrero Rocher or classic Dairy Milk bars.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#8B1E2D]/10 flex items-center justify-center text-[#8B1E2D]">
            <Heart className="w-5 h-5" />
          </div>
          <h3 className="font-playfair text-lg font-bold text-[#0B0B0B]">Chocolate & Rose Combo</h3>
          <p className="text-xs text-[#555555] leading-relaxed">
            The ultimate romantic gesture. Fresh imported velvet red roses nestled with wrapped chocolates, providing breathtaking floral beauty alongside indulgent confectionery.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#8B1E2D]/10 flex items-center justify-center text-[#8B1E2D]">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="font-playfair text-lg font-bold text-[#0B0B0B]">Custom Theme Bouquet</h3>
          <p className="text-xs text-[#555555] leading-relaxed">
            Pick your favourite treats: Kinder Joy, Lindt truffles, or Snickers. We build customized bouquets tailored to your recipient&apos;s taste and budget.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-white p-8 sm:p-10 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-sm space-y-6">
        <div className="flex items-center gap-2 text-[#0B0B0B]">
          <HelpCircle className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold">Frequently Asked Questions</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-[#2A2A2A] leading-relaxed">
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Can I get a chocolate bouquet delivered today in Lahore?</h3>
            <p>Yes. Same-day delivery is available within 2 to 5 hours for orders confirmed before 4:00 PM.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">How long do the chocolates stay fresh?</h3>
            <p>We only use sealed, factory-fresh chocolates with verified expiry dates. Keep the arrangement in an air-conditioned room away from direct Lahore summer heat.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Can I add a handwritten card?</h3>
            <p>Yes. Every chocolate bouquet includes a complimentary handwritten card with your personalized message.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">What is the starting price?</h3>
            <p>Chocolate bouquets start from Rs. 3,800 to Rs. 4,200 depending on the confectionery selected.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
