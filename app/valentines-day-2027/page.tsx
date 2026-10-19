import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Heart, Truck, Camera, MessageCircle, HelpCircle, Sparkles, Clock, MapPin, BadgeCheck, ShoppingBag } from "lucide-react";
import { SITE_URL, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Valentine's Day Gifts in Lahore & Islamabad | Lahore Bouquet",
  },
  description: "Shop Valentine's Day 2027 flower bouquets, teddy bears, chocolates, cakes and luxury gift deals from Rs. 5,000 to Rs. 100,000 at Lahore Bouquet. Enquire about delivery in Lahore and Islamabad.",
  alternates: {
    canonical: `${SITE_URL}/valentines-day-2027`,
  },
  openGraph: {
    title: "Valentine's Day Gifts in Lahore & Islamabad | Lahore Bouquet",
    description: "Shop Valentine's Day 2027 flower bouquets, teddy bears, chocolates, cakes and luxury gift deals from Rs. 5,000 to Rs. 100,000. Enquire about delivery in Lahore and Islamabad.",
    url: `${SITE_URL}/valentines-day-2027`,
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/images/valentine-2027/lahore-bouquet-sweet-love-deal-5000.webp`,
        width: 1408,
        height: 1760,
        alt: "Valentine's Day Gifts in Lahore & Islamabad | Lahore Bouquet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Valentine's Day Gifts in Lahore & Islamabad | Lahore Bouquet",
    description: "Valentine's Day 2027 deals Rs. 5,000–100,000. Enquire about delivery in Lahore and Islamabad. WhatsApp: 0310-4225974",
    images: [`${SITE_URL}/images/valentine-2027/lahore-bouquet-sweet-love-deal-5000.webp`],
  },
};

const DEALS = [
  {
    code: "LB-V27-5000",
    name: "Sweet Love Deal",
    price: 5000,
    image: "/images/valentine-2027/lahore-bouquet-sweet-love-deal-5000.webp",
    alt: "Sweet Love Deal — small red rose bouquet with teddy bear and chocolates",
    title: "Sweet Love Deal — Roses, Teddy Bear & Chocolates | Lahore Bouquet",
    desc: "Make Valentine's Day special with the Sweet Love Deal from Lahore Bouquet. A charming red rose bouquet paired with a cute teddy bear, chocolates, greeting card and elegant burgundy wrapping with gold ribbon.",
    items: ["Small red rose bouquet", "Small teddy bear", "Chocolates", "Greeting card", "Elegant wrapping"],
  },
  {
    code: "LB-V27-10000",
    name: "Love Surprise Deal",
    price: 10000,
    image: "/images/valentine-2027/lahore-bouquet-love-surprise-deal-10000.webp",
    alt: "Love Surprise Deal — medium rose bouquet with teddy bear and chocolate box",
    title: "Love Surprise Deal — Premium Rose Bouquet & Gift Set | Lahore Bouquet",
    desc: "Surprise someone special with the Love Surprise Deal. A medium rose bouquet with a teddy bear, chocolate box and personalized message card in premium wrapping — perfect for Valentine's Day and anniversaries.",
    items: ["Medium rose bouquet", "Medium teddy bear", "Chocolate box", "Personalized message card", "Premium wrapping"],
  },
  {
    code: "LB-V27-15000",
    name: "Royal Romance Deal",
    price: 15000,
    image: "/images/valentine-2027/lahore-bouquet-royal-romance-deal-15000.webp",
    alt: "Royal Romance Deal — premium rose bouquet with teddy bear and chocolate hamper",
    title: "Royal Romance Deal — Luxury Roses, Teddy Bear & Chocolate Hamper",
    desc: "The Royal Romance Deal delivers a luxurious gifting experience — a premium rose bouquet paired with a teddy bear, chocolate hamper, personalized card and decorative packaging.",
    items: ["Premium rose bouquet", "Teddy bear", "Chocolate hamper", "Decorative gift packaging", "Personalized card"],
  },
  {
    code: "LB-V27-20000",
    name: "Ultimate Love Deal",
    price: 20000,
    image: "/images/valentine-2027/lahore-bouquet-ultimate-love-deal-20000.webp",
    alt: "Ultimate Love Deal — large rose bouquet with teddy bear, cake and chocolates",
    title: "Ultimate Love Deal — Large Roses, Teddy Bear, Cake & Chocolates",
    desc: "Go beyond an ordinary bouquet with the Ultimate Love Deal. A large rose bouquet, large teddy bear, cake, chocolate hamper and premium gift packaging in one coordinated Valentine's surprise.",
    items: ["Large rose bouquet", "Large teddy bear", "Cake", "Chocolate hamper", "Premium gift packaging"],
  },
  {
    code: "LB-V27-30000",
    name: "Luxury Valentine Deal",
    price: 30000,
    image: "/images/valentine-2027/lahore-bouquet-luxury-valentine-deal-30000.webp",
    alt: "Luxury Valentine Deal — grand rose bouquet with teddy bear, cake and balloons",
    title: "Luxury Valentine Deal — Grand Roses, Teddy Bear & Premium Gift Hamper",
    desc: "Make a grand romantic gesture with the Luxury Valentine Deal. A statement rose bouquet with a premium teddy bear, cake, chocolates, balloons and coordinated luxury packaging.",
    items: ["Grand rose bouquet", "Premium teddy bear", "Cake", "Chocolate hamper", "Balloons", "Luxury packaging"],
  },
  {
    code: "LB-V27-50000",
    name: "VIP Valentine Deal",
    price: 50000,
    image: "/images/valentine-2027/lahore-bouquet-vip-valentine-deal-50000.webp",
    alt: "VIP Valentine Deal — extra-large rose arrangement with giant teddy bear",
    title: "VIP Valentine Deal — Extra-Large Roses & Luxury Gift Collection",
    desc: "The VIP Valentine Deal is for those who want an impressive premium gifting experience — an extra-large rose arrangement, giant teddy bear, premium chocolates, cake, personalized gifts and a luxury presentation box.",
    items: ["Extra-large premium rose arrangement", "Giant teddy bear", "Premium chocolate collection", "Cake", "Personalized gifts", "Luxury presentation box"],
  },
  {
    code: "LB-V27-100000",
    name: "Millionaire Valentine Experience",
    price: 100000,
    image: "/images/valentine-2027/lahore-bouquet-millionaire-valentine-deal-100000.webp",
    alt: "Millionaire Valentine Experience — grand luxury floral arrangement with giant teddy bear",
    title: "Millionaire Valentine Experience — Ultimate Luxury Flowers & Gifts",
    desc: "Lahore Bouquet's top-tier Valentine's offering. A grand luxury floral arrangement with a giant premium teddy bear, luxury chocolate and gift hampers, cake and personalized keepsakes in a premium presentation. Customized to your preferences — quoted on real costs before confirmation.",
    items: ["Grand luxury floral arrangement", "Giant premium teddy bear", "Luxury chocolate & gift hampers", "Cake", "Personalized keepsakes", "Premium presentation", "Customized surprise experience"],
  },
];

const FAQS = [
  {
    q: "Where can I order Valentine's Day flowers in Lahore?",
    a: "Order directly from Lahore Bouquet on WhatsApp at 0310-4225974. Choose from 7 Valentine's 2027 packages (Rs. 5,000–100,000) with same-day delivery in 2–5 hours across Lahore."
  },
  {
    q: "What Valentine's Day gift packages does Lahore Bouquet offer?",
    a: "7 packages: Sweet Love Deal (Rs. 5,000), Love Surprise Deal (Rs. 10,000), Royal Romance Deal (Rs. 15,000), Ultimate Love Deal (Rs. 20,000), Luxury Valentine Deal (Rs. 30,000), VIP Valentine Deal (Rs. 50,000), and Millionaire Valentine Experience (Rs. 100,000). Each combines roses with teddy bears, chocolates, cakes and premium packaging."
  },
  {
    q: "How much do Valentine's Day gift packages cost?",
    a: "Packages range from Rs. 5,000 (Sweet Love Deal) to Rs. 100,000 (Millionaire Valentine Experience). All prices are fixed — no hidden charges. Delivery is free in listed Lahore areas."
  },
  {
    q: "Can I order roses and chocolates together?",
    a: "Yes — every Valentine's package combines fresh roses with chocolates, plus teddy bears and greeting cards. Higher tiers add cakes, balloons and luxury hampers."
  },
  {
    q: "How can I place a WhatsApp order?",
    a: "Tap the WhatsApp button on any deal — your message is pre-filled with the product code and price. Send it to 0310-4225974 with your delivery address and preferred date/time."
  },
  {
    q: "Can I request delivery in Islamabad?",
    a: "Yes. All 7 Valentine's deals are available for Islamabad delivery through our local partner. Same-day delivery in 2–5 hours in covered sectors (F-6, F-7, F-8, G-11, DHA, Bahria Town & more)."
  },
  {
    q: "Is midnight delivery available for Valentine's Day?",
    a: "Yes — midnight surprise delivery (11:30 PM–12:15 AM) is available. Book early on WhatsApp as Valentine's slots fill fast."
  },
  {
    q: "Can I customize a Valentine's gift?",
    a: "Yes. Message us on WhatsApp with your budget and preferences — flower colors, cake flavors, message cards and add-ons can be customized, especially for the VIP and Millionaire tiers."
  },
];

function formatPrice(n: number) {
  return "Rs. " + n.toLocaleString("en-PK");
}

function orderLink(deal: typeof DEALS[0]) {
  const msg = `Hi Lahore Bouquet, I'm interested in the ${deal.name} for Rs. ${deal.price.toLocaleString("en-PK")}, product code ${deal.code}, for Valentine's Day 2027. Please confirm availability, delivery charges, delivery area, and delivery timing.`;
  return `https://wa.me/923104225974?text=${encodeURIComponent(msg)}`;
}

export default function ValentinesDay2027Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Valentine's Day 2027 Gift Deals — Lahore Bouquet",
    itemListElement: DEALS.map((d, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: d.title,
        image: `${SITE_URL}${d.image}`,
        description: d.desc,
        sku: d.code,
        brand: { "@type": "Brand", name: "Lahore Bouquet" },
        offers: {
          "@type": "Offer",
          priceCurrency: "PKR",
          price: d.price,
          availability: "https://schema.org/PreOrder",
          url: `${SITE_URL}/valentines-day-2027#${d.code}`,
        },
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Valentine's Day 2027", item: `${SITE_URL}/valentines-day-2027` },
    ],
  };

  return (
    <main className="bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-6 text-center border-b border-[#E5DED2] bg-[#0B0B0B] text-white">
        <div className="max-w-3xl mx-auto space-y-5">
          <p className="text-[#C6A15B] text-xs font-bold tracking-[0.25em] uppercase flex items-center justify-center gap-2">
            <Heart size={14} className="fill-[#8B1E2D] text-[#8B1E2D]" /> Valentine's Day 2027 <Heart size={14} className="fill-[#8B1E2D] text-[#8B1E2D]" />
          </p>
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold leading-tight">
            Valentine's Day Flowers &amp; Gifts in Lahore
          </h1>
          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl mx-auto">
            Make 14 February 2027 unforgettable with romantic rose bouquets, chocolate gifts, teddy bears, cakes and luxury Valentine's packages from Lahore Bouquet.
          </p>
          <p className="text-[#C6A15B] font-bold text-base sm:text-lg">
            Valentine's Day gift deals from Rs. 5,000 to Rs. 100,000
          </p>
          <p className="text-xs text-white/60 max-w-xl mx-auto">
            Enquire about delivery in Lahore and Islamabad — confirm availability, delivery charges and timing on WhatsApp before ordering.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <a href="#deals" className="px-8 py-3.5 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">
              Explore Valentine's Deals
            </a>
            <a
              href={whatsappLink("Hi Lahore Bouquet! I want to order a Valentine's Day 2027 gift.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full bg-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              <MessageCircle size={18} /> WhatsApp: 0310-4225974
            </a>
          </div>
          <p className="text-xs text-white/50">14 February 2027 — Book early, Valentine's slots fill fast</p>
        </div>
      </section>

      {/* Trust bar */}
      <section className="w-full py-6 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          {[
            { icon: <Truck size={20} />, label: "Same-day 2–5h delivery" },
            { icon: <Camera size={20} />, label: "Photo approval on WhatsApp" },
            { icon: <Clock size={20} />, label: "Midnight surprise available" },
            { icon: <BadgeCheck size={20} />, label: "Lahore & Islamabad" },
          ].map((t, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5 text-[#8B1E2D]">
              {t.icon}
              <span className="text-xs font-semibold text-[#2A2A2A]">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Deals grid */}
      <section id="deals" className="w-full py-16 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <h2 className="font-playfair text-2xl sm:text-4xl font-bold text-[#101012]">
              7 Valentine's Day 2027 Deals
            </h2>
            <p className="text-sm text-[#2A2A2A] max-w-2xl mx-auto">
              Every package includes fresh roses, a teddy bear, chocolates and elegant packaging. Prices are fixed — no hidden charges.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {DEALS.map((deal) => (
              <article key={deal.code} id={deal.code} className="bg-white rounded-3xl overflow-hidden border border-[#E5DED2] shadow-sm hover:shadow-lg transition-shadow flex flex-col">
                <div className="relative aspect-[4/5] bg-[#F8F3EA]">
                  {/* Direct img (not next/image): the _next/image optimizer returns 402 to crawlers */}
                  <img
                    src={deal.image}
                    alt={deal.alt}
                    width={1408}
                    height={1760}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col gap-3 grow">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-playfair text-xl font-bold text-[#101012]">{deal.name}</h3>
                    <span className="text-[10px] font-mono text-[#636363] bg-[#F8F3EA] px-2 py-1 rounded shrink-0">{deal.code}</span>
                  </div>
                  <p className="font-playfair text-3xl font-bold text-[#8B1E2D]">{formatPrice(deal.price)}</p>
                  <p className="text-sm text-[#2A2A2A] leading-relaxed">{deal.desc}</p>
                  <ul className="text-xs text-[#2A2A2A] space-y-1 list-disc list-inside">
                    {deal.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-1.5 text-xs text-[#636363]">
                    <MapPin size={14} className="text-[#8B1E2D]" /> Lahore &amp; Islamabad delivery
                  </div>
                  <div className="mt-auto pt-3 flex gap-2">
                    <a
                      href={orderLink(deal)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity"
                    >
                      <MessageCircle size={16} /> Order on WhatsApp
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How to order */}
      <section className="w-full py-16 px-4 sm:px-6 border-t border-[#E5DED2] bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            How to Order Your Valentine's Gift
          </h2>
          <ol className="space-y-3 text-sm sm:text-base leading-relaxed list-decimal list-inside">
            <li><strong>Pick your deal</strong> — choose from the 7 packages above.</li>
            <li><strong>Tap "Order on WhatsApp"</strong> — your message arrives pre-filled with product code &amp; price.</li>
            <li><strong>Share details</strong> — delivery city (Lahore/Islamabad), address, date &amp; preferred time.</li>
            <li><strong>Approve the photo</strong> — we send a real photo before dispatch.</li>
            <li><strong>Receive &amp; surprise</strong> — same-day in 2–5 hours, or midnight 11:30 PM–12:15 AM.</li>
          </ol>
        </div>
      </section>

      {/* Internal links */}
      <section className="w-full py-12 px-4 sm:px-6 border-t border-[#E5DED2] bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <h2 className="font-playfair text-xl font-bold text-[#101012]">Explore More from Lahore Bouquet</h2>
          <div className="flex flex-wrap justify-center gap-2 text-sm">
            <Link href="/" className="px-4 py-2 rounded-full border border-[#E5DED2] hover:border-[#8B1E2D] hover:text-[#8B1E2D] transition-colors">Home</Link>
            <Link href="/flower-delivery-in-lahore" className="px-4 py-2 rounded-full border border-[#E5DED2] hover:border-[#8B1E2D] hover:text-[#8B1E2D] transition-colors">Flower Delivery in Lahore</Link>
            <Link href="/flower-delivery-islamabad" className="px-4 py-2 rounded-full border border-[#E5DED2] hover:border-[#8B1E2D] hover:text-[#8B1E2D] transition-colors">Flower Delivery in Islamabad</Link>
            <Link href="/delivery-areas" className="px-4 py-2 rounded-full border border-[#E5DED2] hover:border-[#8B1E2D] hover:text-[#8B1E2D] transition-colors">Delivery Areas</Link>
            <Link href="/bouquets" className="px-4 py-2 rounded-full border border-[#E5DED2] hover:border-[#8B1E2D] hover:text-[#8B1E2D] transition-colors">All Bouquets</Link>
            <Link href="/contact" className="px-4 py-2 rounded-full border border-[#E5DED2] hover:border-[#8B1E2D] hover:text-[#8B1E2D] transition-colors">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            Valentine's Day 2027 — FAQs
          </h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <details key={i} className="p-5 rounded-2xl bg-white border border-[#E5DED2] group">
                <summary className="font-bold text-sm text-[#0B0B0B] cursor-pointer list-none flex justify-between items-center gap-2">
                  <span className="flex items-center gap-2"><HelpCircle size={16} className="text-[#8B1E2D] shrink-0" /> {f.q}</span>
                  <span className="text-[#8B1E2D] group-open:rotate-45 transition-transform text-lg leading-none shrink-0">+</span>
                </summary>
                <p className="text-sm mt-2 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center pt-4">
            <p className="text-sm text-[#636363]">
              Looking for 2026 options? <Link href="/valentine-day-flowers-lahore" className="text-[#8B1E2D] underline font-semibold">View Valentine's Day Flowers Lahore</Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
