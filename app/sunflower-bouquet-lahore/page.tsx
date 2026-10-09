export const revalidate = 60;
import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Sun, Truck, Camera, MessageCircle, HelpCircle, Sparkles, Droplets, Heart } from "lucide-react";
import { getSanityProducts } from "@/sanity/lib/fetch";
import { ALL_PRODUCTS } from "../data/products";
import ProductCard from "../components/ProductCard";
import { SITE_URL, itemListSchema } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Send Sunflower Bouquet in Lahore | Same-Day Gift Delivery",
  },
  description: "Send a sunflower bouquet in Lahore as a bright same-day gift. Fresh hand-tied sunflowers from Rs. 1,590 with 2–5 hour express delivery, 9 AM–1 AM.",
  alternates: {
    canonical: `${SITE_URL}/sunflower-bouquet-lahore`,
  },
  keywords: [
    "sunflower bouquet",
    "sunflower price in pakistan",
    "sunflower bouquet lahore",
    "buy sunflowers lahore",
    "fresh sunflower delivery lahore"
  ],
  openGraph: {
    title: "Send Sunflower Bouquet in Lahore | Same-Day Gift Delivery",
    description: "Send a sunflower bouquet in Lahore as a bright same-day gift. Fresh hand-tied sunflowers from Rs. 1,590 with 2–5 hour express delivery, 9 AM–1 AM.",
    url: `${SITE_URL}/sunflower-bouquet-lahore`,
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Send Sunflower Bouquet in Lahore | Same-Day Gift Delivery",
      },
    ],
  },
};

export default async function SunflowerBouquetLahorePage() {
  const sanityProducts = await getSanityProducts();
  const allProducts = sanityProducts.length > 0 ? sanityProducts : ALL_PRODUCTS;

  // Filter sunflower bouquets
  const sunflowerProducts = allProducts.filter(p => 
    p.category === "Sunflowers" || 
    p.title.toLowerCase().includes("sunflower")
  );

  const itemListJsonLd = itemListSchema(sunflowerProducts, `${SITE_URL}/sunflower-bouquet-lahore`, "Sunflower Bouquets in Lahore");

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
        name: "Sunflower Bouquet Lahore",
        item: `${SITE_URL}/sunflower-bouquet-lahore`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How long do sunflowers last?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "With clean water and regular stem trimming, fresh sunflowers last 5 to 7 days in a cool indoor spot."
        }
      },
      {
        "@type": "Question",
        name: "Do sunflowers have a strong scent?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Sunflowers have a very gentle, subtle earthy scent, making them safe for hospital rooms and people sensitive to strong perfumes."
        }
      },
      {
        "@type": "Question",
        name: "Can I customize sunflower with roses?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Our Sunflower & White Roses bouquet pairs golden sunflowers with elegant white roses for a striking contrast."
        }
      },
      {
        "@type": "Question",
        name: "Do you send a photo before delivery?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Always. We WhatsApp you a high-resolution photo of your actual bouquet before it leaves for delivery in Lahore."
        }
      }
    ]
  };

  const priceGuide = [
    { name: "Golden Duo: Two Sunflowers with Baby's Breath", price: "Rs. 1,900", desc: "Two jumbo golden blooms with aromatic gypsophila and kraft wrap." },
    { name: "Sunflower & White Roses \u2013 Black Wrap", price: "Rs. 2,499", desc: "Golden sunflowers paired with elegant white roses in a chic black wrap." },
    { name: "Graduation Celebration Sunflower Bouquet", price: "Rs. 3,800", desc: "Multi-stem sunflower statement bundle with convocation satin ribbon." },
    { name: "Handmade Crochet Everlasting Sunflower Bouquet", price: "Rs. 2,800", desc: "Eternal handcrafted yarn sunflowers that never wilt or need water." },
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
        <span className="text-[#8B1E2D] font-semibold">Sunflower Bouquet Lahore</span>
      </nav>

      {/* Hero Section */}
      <section className="bg-[#0B0B0B] p-8 sm:p-14 rounded-2xl border border-[rgba(198,161,91,0.25)] shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl relative z-10 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
            <Sun className="w-3.5 h-3.5" />
            Golden Radiant Blooms
          </div>

          <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            Sunflower Bouquet in Lahore
          </h1>

          {/* AEO / GEO Direct Answer Paragraph */}
          <p className="text-[#F8F3EA]/90 text-sm sm:text-base leading-relaxed font-light">
            A sunflower bouquet is the happiest gift you can send. Big, vibrant yellow, and impossible to ignore, it works wonderfully for birthdays, graduations, thank-yous, and cheering someone up. Lahore Bouquet offers fresh sunflower bouquets starting from <strong>Rs. 1,590</strong>, hand-tied on the morning of dispatch and delivered anywhere in Lahore in <strong>2 to 5 hours</strong>. A photo of the actual bouquet is sent on WhatsApp before our rider departs. Order online or call <a href="tel:+923104225974" className="text-[#C6A15B] font-semibold hover:underline">0310-4225974</a>.
          </p>

          <div className="flex flex-wrap gap-4 pt-3 text-xs text-white/80">
            <span className="flex items-center gap-1.5"><Truck className="w-4 h-4 text-[#C6A15B]" /> Delivery in 2 to 5 hours</span>
            <span className="flex items-center gap-1.5"><Camera className="w-4 h-4 text-[#C6A15B]" /> Live WhatsApp photo before dispatch</span>
            <span className="flex items-center gap-1.5"><Droplets className="w-4 h-4 text-[#C6A15B]" /> Stems hydrated in wet sponge/vial</span>
          </div>

          <div className="pt-2 flex flex-wrap gap-3">
            <a 
              href="https://wa.me/923104225974?text=Hello%20Lahore%20Bouquet!%20I%20want%20to%20order%20a%20sunflower%20bouquet."
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
              Fresh Sunflower Arrangements
            </h2>
            <p className="text-xs text-[#555555] mt-1">Arranged to order with fresh foliage and signature wrapping</p>
          </div>
          <span className="text-xs text-[#8B1E2D] font-bold">Same-Day Citywide Dispatch</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {sunflowerProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Price & Options Table */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#0B0B0B]">
            Sunflower Price in Pakistan & Bouquet Options
          </h2>
          <p className="text-xs sm:text-sm text-[#555555]">
            Sunflower prices vary depending on stem counts and seasonal market yields. Here is our transparent rate list for Lahore:
          </p>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[rgba(198,161,91,0.25)] bg-white shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm text-[#2A2A2A]">
            <thead className="bg-[#0B0B0B] text-white uppercase text-[11px] tracking-wider font-semibold">
              <tr>
                <th className="py-3.5 px-4 sm:px-6">Bouquet Style</th>
                <th className="py-3.5 px-4 sm:px-6">Description</th>
                <th className="py-3.5 px-4 sm:px-6">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5DED2]">
              {priceGuide.map((item, idx) => (
                <tr key={idx} className="hover:bg-[#F8F3EA]/60 transition-colors">
                  <td className="py-4 px-4 sm:px-6 font-semibold text-[#0B0B0B]">{item.name}</td>
                  <td className="py-4 px-4 sm:px-6 text-[#666666] text-xs">{item.desc}</td>
                  <td className="py-4 px-4 sm:px-6 text-[#8B1E2D] font-bold">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Occasions & Care Tips */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] space-y-4">
          <h3 className="font-playfair text-xl font-bold text-[#0B0B0B]">When to Send Sunflowers</h3>
          <ul className="space-y-2.5 text-xs text-[#555555]">
            <li className="flex items-start gap-2">
              <span className="text-[#C6A15B] font-bold">✓</span>
              <span><strong>Birthdays:</strong> Especially for friends who love vivid, optimistic colors.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C6A15B] font-bold">✓</span>
              <span><strong>Graduation & Convocation:</strong> The golden yellow represents accomplishment and bright futures.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C6A15B] font-bold">✓</span>
              <span><strong>Thank-You Gifts:</strong> Warm, friendly, and thoughtful without being romantic.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#C6A15B] font-bold">✓</span>
              <span><strong>Get-Well Recovery:</strong> Mild fragrance and sunny energy brighten up any room.</span>
            </li>
          </ul>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] space-y-4">
          <h3 className="font-playfair text-xl font-bold text-[#0B0B0B]">How to Keep Sunflowers Fresh</h3>
          <ul className="space-y-2.5 text-xs text-[#555555]">
            <li className="flex items-start gap-2">
              <span className="text-[#8B1E2D] font-bold">1.</span>
              <span>Trim 1 inch off the stem at a 45-degree angle before placing in a vase.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8B1E2D] font-bold">2.</span>
              <span>Sunflowers drink a lot of water. Use a tall vase and top up fresh cold water daily.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8B1E2D] font-bold">3.</span>
              <span>Keep away from direct Lahore summer sun, heaters, and direct air-conditioner drafts.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#8B1E2D] font-bold">4.</span>
              <span>Remove any submerged leaves to prevent bacterial growth and extend bloom longevity.</span>
            </li>
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
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">How long do sunflowers last?</h3>
            <p>With clean water and regular stem trimming, fresh sunflowers last 5 to 7 days in a cool indoor spot.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Do sunflowers have a strong scent?</h3>
            <p>No. Sunflowers have a very gentle, subtle earthy scent, making them safe for hospital rooms and people sensitive to strong perfumes.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Can I customize sunflower with roses?</h3>
            <p>Yes. Our Sunflower &amp; White Roses bouquet pairs golden sunflowers with elegant white roses for a striking contrast.</p>
          </div>
          <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
            <h3 className="font-semibold text-[#0B0B0B] text-sm">Do you send a photo before delivery?</h3>
            <p>Always. We WhatsApp you a high-resolution photo of your actual bouquet before it leaves for delivery in Lahore.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
