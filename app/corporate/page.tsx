import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { getSanityProducts } from "@/sanity/lib/fetch";
import ProductCard from "../../app/components/ProductCard";
import { Briefcase, Building, Clock, ShieldCheck, MessageCircle, FileText, CalendarCheck, Sparkles } from "lucide-react";
import { SITE_URL, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Corporate Flower Delivery Lahore | Office Subscriptions & Event Floral",
  },
  description: "Corporate flowers in Lahore: weekly office subscriptions from Rs. 4,500/month, executive gifting, event stage décor & bulk festive gifting. Official invoicing, dedicated account manager.",
  alternates: {
    canonical: `${SITE_URL}/corporate`,
  },
  openGraph: {
    title: "Corporate Flower Delivery Lahore | Office Subscriptions & Event Floral",
    description: "Weekly office flower subscriptions, executive gifting, conference stage décor and bulk festive gifting across Lahore — with official invoicing.",
    url: `${SITE_URL}/corporate`,
  }
};

const FAQS = [
  {
    q: "How much does a corporate flower subscription cost in Lahore?",
    a: "Weekly office subscriptions start at Rs. 4,500 per month for a single reception arrangement refreshed every Monday. Multi-location and daily-refresh plans are quoted based on your number of arrangements — message us on WhatsApp for a tailored quote."
  },
  {
    q: "Which areas of Lahore do you serve for corporate clients?",
    a: "We serve corporate clients across Gulberg (Main Boulevard, MM Alam Road), DHA Phase 5–8 commercial areas, Johar Town, Model Town Link Road, Cantt and Bahria Town — with scheduled Monday-morning replenishment and same-day emergency replacements."
  },
  {
    q: "Do you provide official invoices for corporate orders?",
    a: "Yes. Every corporate order comes with an official invoice/receipt suitable for your accounts and procurement records. Monthly consolidated billing is available for subscription clients."
  },
  {
    q: "Can you handle bulk festive gifting for employees?",
    a: "Yes. We prepare bulk Eid, New Year and company-anniversary gift bouquets and hampers — from 20 to 500+ units — with your company card, branded ribbons and staggered delivery across Lahore offices."
  },
  {
    q: "Do you decorate corporate events and conferences?",
    a: "Yes. We do stage backdrops, podium florals, entrance arches, VIP table centrepieces and guest corsages for conferences, AGMs, award nights and brand launches across Lahore venues."
  }
];

export default async function CorporatePage() {
  const allProducts = await getSanityProducts();
  const corporateItems = allProducts.slice(0, 4);

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
        name: "Corporate Flowers",
        item: `${SITE_URL}/corporate`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Corporate Flower Delivery & Office Subscriptions in Lahore",
    provider: { "@type": "LocalBusiness", name: "Lahore Bouquet", url: `${SITE_URL}` },
    areaServed: { "@type": "City", name: "Lahore" },
    description: "Weekly office flower subscriptions, executive gifting, corporate event stage décor and bulk festive gifting across Lahore.",
  };

  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 py-10 space-y-12 bg-[#F8F3EA] text-[#2A2A2A]">
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-xs text-[#777777] flex items-center gap-2">
        <Link href="/" className="hover:text-[#0B0B0B] transition-colors">Home</Link>
        <span>/</span>
        <span className="text-[#8B1E2D] font-semibold">Corporate Floristry</span>
      </nav>

      {/* Hero Header */}
      <section className="space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8B1E2D]/20 text-[#C6A15B] border border-[#8B1E2D] text-xs font-bold uppercase tracking-wider">
          <Briefcase className="w-3.5 h-3.5 text-[#C6A15B]" />
          B2B Floral Solutions • Office Subscriptions • Event Décor
        </span>

        <h1 className="font-playfair text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B0B0B] leading-tight">
          Corporate Flower Delivery & Office Subscriptions in Lahore
        </h1>

        <p className="text-[#2A2A2A] text-xs sm:text-sm leading-relaxed max-w-3xl">
          First impressions start at your reception desk. Lahore Bouquet keeps offices, hotels, restaurants and event venues across Lahore looking exceptional with weekly fresh-flower subscriptions, executive gifting, conference stage décor and bulk festive gifting — managed by a dedicated account manager, billed monthly, and refreshed like clockwork every Monday morning.
        </p>

        <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#2A2A2A]">
          <span className="flex items-center gap-1.5"><FileText className="w-4 h-4 text-[#8B1E2D]" /> Official invoicing & monthly consolidated billing</span>
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-[#C6A15B]" /> Monday-morning replenishment, same-day emergency swaps</span>
          <a
            href={whatsappLink("Hello Lahore Bouquet! I am inquiring about corporate flower subscriptions and executive gifting.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#8B1E2D] font-semibold hover:text-[#C6A15B]"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" /> Chat with Corporate Account Manager
          </a>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <CalendarCheck className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Office Flower Subscription Plans</h2>
        </div>
        <p className="text-xs sm:text-sm text-[#2A2A2A] leading-relaxed max-w-3xl">
          A subscription means you never think about flowers again — our florists design, deliver and refresh on schedule, and you approve each week's arrangement on WhatsApp. All plans include free delivery, vase rotation and a freshness guarantee.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-3">
            <h3 className="font-playfair text-lg font-bold text-[#0B0B0B]">Essential</h3>
            <p className="font-playfair text-2xl font-bold text-[#8B1E2D]">Rs. 4,500<span className="text-sm font-normal text-[#777]">/month</span></p>
            <ul className="text-xs text-[#2A2A2A] space-y-2 list-disc list-inside leading-relaxed">
              <li>1 reception arrangement, refreshed weekly</li>
              <li>Monday-morning delivery</li>
              <li>Seasonal flower selection</li>
              <li>WhatsApp photo approval</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-[#0B0B0B] border border-[#C6A15B] shadow-sm space-y-3 relative">
            <span className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-[#C6A15B] text-[#0B0B0B] text-[11px] font-bold uppercase tracking-wider">Most Popular</span>
            <h3 className="font-playfair text-lg font-bold text-white">Professional</h3>
            <p className="font-playfair text-2xl font-bold text-[#C6A15B]">Rs. 9,500<span className="text-sm font-normal text-[#BDBDBD]">/month</span></p>
            <ul className="text-xs text-[#E5DED2] space-y-2 list-disc list-inside leading-relaxed">
              <li>3 arrangements — reception + 2 executive areas</li>
              <li>Weekly refresh + mid-week touch-up</li>
              <li>Premium & imported flower options</li>
              <li>Priority same-day replacement</li>
            </ul>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-3">
            <h3 className="font-playfair text-lg font-bold text-[#0B0B0B]">Enterprise</h3>
            <p className="font-playfair text-2xl font-bold text-[#8B1E2D]">Custom</p>
            <ul className="text-xs text-[#2A2A2A] space-y-2 list-disc list-inside leading-relaxed">
              <li>Multi-floor / multi-branch coverage</li>
              <li>Daily refresh for hotels & restaurants</li>
              <li>Event & festive calendar management</li>
              <li>Dedicated account manager + monthly billing</li>
            </ul>
          </div>
        </div>
      </section>

      {/* B2B Services Grid */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-[#8B1E2D]" />
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Corporate Services</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-3">
            <Building className="w-8 h-8 text-[#8B1E2D]" />
            <h3 className="font-playfair text-lg font-bold text-[#0B0B0B]">Weekly Reception Florals</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">
              Fresh weekly vase rotations delivered every Monday morning to greet clients and teams with vibrant seasonal blooms — the core of our subscription plans above.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-3">
            <Briefcase className="w-8 h-8 text-[#8B1E2D]" />
            <h3 className="font-playfair text-lg font-bold text-[#0B0B0B]">Executive & Client Gifting</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">
              Congratulatory bouquets, gourmet chocolate hampers and premium imported-rose arrangements for partner milestones, promotions and deal closings — with your company card and branded ribbon.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-3">
            <ShieldCheck className="w-8 h-8 text-[#C6A15B]" />
            <h3 className="font-playfair text-lg font-bold text-[#0B0B0B]">Corporate Event Stages</h3>
            <p className="text-xs text-[#2A2A2A] leading-relaxed">
              Floral podium decorations, entrance arches, VIP table centrepieces and guest corsages for conferences, AGMs, award nights and brand launches at Lahore venues.
            </p>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="p-6 sm:p-8 rounded-2xl bg-white border border-[rgba(198,161,91,0.25)] shadow-sm space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">How Corporate Onboarding Works</h2>
        <ol className="space-y-3 text-xs sm:text-sm text-[#2A2A2A] leading-relaxed list-decimal list-inside">
          <li><strong>Site visit & quote (free):</strong> we visit your office in Gulberg, DHA, Johar Town or anywhere in Lahore, assess the spaces and send a tailored plan within 24 hours.</li>
          <li><strong>Trial week:</strong> one week of arrangements at a trial rate — you judge the freshness and design before committing.</li>
          <li><strong>Scheduled service:</strong> Monday-morning refreshes begin, with WhatsApp photo approvals and a direct line to your account manager.</li>
          <li><strong>Monthly billing:</strong> one consolidated invoice each month; add event décor or festive gifting anytime.</li>
        </ol>
        <a
          href={whatsappLink("Hello Lahore Bouquet! Please book a free corporate site visit and quote for our office.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors"
        >
          <MessageCircle className="w-4 h-4" /> Book a Free Site Visit
        </a>
      </section>

      {/* FAQ */}
      <section className="space-y-4">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Corporate FAQs</h2>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <details key={i} className="p-5 rounded-2xl bg-white border border-[#E5DED2] group">
              <summary className="font-bold text-sm text-[#0B0B0B] cursor-pointer list-none flex justify-between items-center">
                {f.q}
                <span className="text-[#8B1E2D] group-open:rotate-45 transition-transform text-lg leading-none">+</span>
              </summary>
              <p className="text-sm mt-2 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Recommended Arrangements */}
      <section className="space-y-4 pt-6 border-t border-[#E5DED2]">
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Popular Executive Arrangements</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {corporateItems.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
