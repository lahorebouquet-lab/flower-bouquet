#!/usr/bin/env python3
import os

areas = [
    {
        "slug": "f-7-islamabad", "name": "F-7 Islamabad",
        "title": "Flower Delivery in F-7 Islamabad | Same-Day, Free Delivery",
        "desc": "Same-day flower delivery to F-7 Islamabad — Jinnah Super Market, F-7 Markaz and residential sectors in 2–5 hours. Free delivery, WhatsApp photo approval.",
        "badge": "Jinnah Super Market • F-7 Markaz • Residential Sectors",
        "intro": "F-7 is Islamabad's most prestigious sector — home to Jinnah Super Market, F-7 Markaz, and some of the capital's finest residences. Our local partner knows F-7's streets, markaz and residential blocks intimately. Orders to F-7 arrive within 2 to 5 hours with free delivery. Every bouquet is photographed on WhatsApp before dispatch.",
        "coverage": [
            "Jinnah Super Market: Islamabad's iconic shopping hub — flowers for shop openings and office events.",
            "F-7 Markaz: commercial centre — corporate bouquets and client gifts.",
            "F-7 Residential (1, 2, 3, 4): family homes — birthday bouquets and anniversary roses.",
        ],
        "occasions": "F-7 orders are premium — imported rose bouquets for anniversaries, elegant lily arrangements for corporate events, and birthday surprises with cakes.",
    },
    {
        "slug": "f-6-islamabad", "name": "F-6 Islamabad",
        "title": "Flower Delivery in F-6 Islamabad | Same-Day, Free Delivery",
        "desc": "Same-day flower delivery to F-6 Islamabad — Super Market, residential blocks in 2–5 hours. Free delivery, WhatsApp photo approval.",
        "badge": "Super Market • Residential Blocks • Diplomatic Enclave Nearby",
        "intro": "F-6 blends Islamabad's famous Super Market with quiet residential streets near the Diplomatic Enclave. Our riders navigate F-6's sectors daily, delivering birthday bouquets, anniversary roses and corporate arrangements within 2 to 5 hours — free delivery and WhatsApp photo approval.",
        "coverage": [
            "Super Market: historic commercial hub — flowers for shops and cafes.",
            "F-6 Residential (1, 2, 3, 4): family neighbourhoods — birthday and anniversary bouquets.",
            "Diplomatic Enclave vicinity: protocol-aware deliveries for embassy events.",
        ],
        "occasions": "F-6 sees family celebrations and diplomatic-corporate gifting — red rose bouquets, mixed seasonal bunches, and elegant white arrangements for formal events.",
    },
    {
        "slug": "f-8-islamabad", "name": "F-8 Islamabad",
        "title": "Flower Delivery in F-8 Islamabad | Same-Day, Free Delivery",
        "desc": "Same-day flower delivery to F-8 Islamabad — F-8 Markaz, residential sectors in 2–5 hours. Free delivery, WhatsApp photo approval.",
        "badge": "F-8 Markaz • Residential Sectors • Schools & Colleges",
        "intro": "F-8 is a vibrant residential sector with its bustling Markaz, top schools and family neighbourhoods. Our Islamabad partner delivers fresh bouquets across F-8 within 2 to 5 hours. Free delivery, WhatsApp photo approval, same-day 7 days a week.",
        "coverage": [
            "F-8 Markaz: shops and eateries — corporate flowers and shop-opening bouquets.",
            "F-8 Residential (1, 2, 3, 4): family homes — birthday and anniversary deliveries.",
            "Schools & colleges: teacher appreciation and graduation flowers.",
        ],
        "occasions": "F-8 families love birthday surprises — balloon bunches with teddy bears for kids, rose bouquets for anniversaries, graduation flowers for students.",
    },
    {
        "slug": "f-10-islamabad", "name": "F-10 Islamabad",
        "title": "Flower Delivery in F-10 Islamabad | Same-Day, Free Delivery",
        "desc": "Same-day flower delivery to F-10 Islamabad — F-10 Markaz, residential blocks in 2–5 hours. Free delivery, WhatsApp photo approval.",
        "badge": "F-10 Markaz • Residential Blocks • Family Neighbourhoods",
        "intro": "F-10 is one of Islamabad's most family-friendly sectors. We deliver fresh flowers across F-10 within 2 to 5 hours — birthday bouquets, anniversary roses, get-well flowers. Free delivery and WhatsApp photo approval on every order.",
        "coverage": [
            "F-10 Markaz: commercial centre — corporate gifting and shop flowers.",
            "F-10 Residential (1, 2, 3, 4): family neighbourhoods — birthday-bouquet zone.",
        ],
        "occasions": "F-10 birthdays are big — complete surprise packages with bouquet, cake and balloons. Anniversaries call for red roses; new-baby arrivals for pastel arrangements.",
    },
    {
        "slug": "dha-islamabad", "name": "DHA Islamabad",
        "title": "Flower Delivery in DHA Islamabad | Same-Day, Free Delivery",
        "desc": "Same-day flower delivery to DHA Islamabad Phase 1–5 in 2–5 hours. Free delivery, WhatsApp photo approval, premium bouquets.",
        "badge": "DHA Phase 1–5 • Gated Community • Premium Villas",
        "intro": "DHA Islamabad's gated phases are home to the capital's finest villas. Our riders handle DHA gate protocols — share your phase, street and house number. Delivery within 2 to 5 hours, free across all phases, WhatsApp photo approval before dispatch.",
        "coverage": [
            "DHA Phase 1 & 2: established villas — anniversary roses and birthday bouquets.",
            "DHA Phase 3, 4 & 5: newer developments — housewarming and family celebrations.",
        ],
        "occasions": "DHA Islamabad orders skew premium — 50-rose bouquets, imported lilies, money bouquets for milestones, bridal flowers for shaadi events.",
    },
    {
        "slug": "bahria-town-islamabad", "name": "Bahria Town Islamabad",
        "title": "Flower Delivery in Bahria Town Islamabad | Same-Day, Free Delivery",
        "desc": "Same-day flower delivery to Bahria Town Islamabad — Phase 1–8, Civic Centre in 2–5 hours. Free delivery, WhatsApp photo approval.",
        "badge": "Phase 1–8 • Civic Centre • Grand Mosque Area",
        "intro": "Bahria Town Islamabad spans multiple phases with its Civic Centre and Grand Mosque. Our partner delivers across all phases within 2 to 5 hours. Share your phase and street — we handle navigation. Free delivery, WhatsApp photo approval, 7 days a week.",
        "coverage": [
            "Bahria Phase 1–4: residential precincts — birthday and anniversary flowers.",
            "Bahria Phase 5–8: newer phases — housewarming bouquets.",
            "Civic Centre: commercial hub — corporate bouquets and office flowers.",
        ],
        "occasions": "Bahria Town families celebrate big — birthday packages, nikkah flowers, bridal bouquets, Eid hampers. Civic Centre clients order corporate gifts.",
    },
    {
        "slug": "g-9-islamabad", "name": "G-9 Islamabad",
        "title": "Flower Delivery in G-9 Islamabad | Same-Day, Free Delivery",
        "desc": "Same-day flower delivery to G-9 Islamabad — Karachi Company, residential sectors in 2–5 hours. Free delivery, WhatsApp photo approval.",
        "badge": "Karachi Company • G-9 Markaz • Residential Sectors",
        "intro": "G-9 centres on Karachi Company market with dense residential sectors. Our riders know G-9's markaz and streets well. Fresh flowers within 2 to 5 hours — free delivery, WhatsApp photo approval, same-day 7 days a week.",
        "coverage": [
            "Karachi Company: market area — shop flowers and commercial bouquets.",
            "G-9 Markaz: offices and eateries — corporate gifting.",
            "G-9 Residential (1, 2, 3, 4): family homes — birthday and get-well flowers.",
        ],
        "occasions": "G-9 mixes commercial and family needs — shop-opening stands, office flowers, birthday bouquets and anniversary roses.",
    },
    {
        "slug": "e-7-islamabad", "name": "E-7 Islamabad",
        "title": "Flower Delivery in E-7 Islamabad | Same-Day, Free Delivery",
        "desc": "Same-day flower delivery to E-7 Islamabad — Margalla Hills, premium residences in 2–5 hours. Free delivery, WhatsApp photo approval.",
        "badge": "Margalla Hills • Premium Residences • Quiet Sector",
        "intro": "E-7 sits against the Margalla Hills — Islamabad's most exclusive sector. Our partner delivers premium bouquets within 2 to 5 hours. Discreet, punctual service with WhatsApp photo approval and free delivery.",
        "coverage": [
            "E-7 Residential: luxury homes — premium anniversary and birthday bouquets.",
        ],
        "occasions": "E-7 clients prefer understated elegance — white lilies, pastel roses, orchid arrangements. Anniversary and milestone birthdays dominate.",
    },
    {
        "slug": "blue-area-islamabad", "name": "Blue Area Islamabad",
        "title": "Flower Delivery in Blue Area Islamabad | Same-Day, Free Delivery",
        "desc": "Same-day flower delivery to Blue Area Islamabad — Jinnah Avenue offices in 2–5 hours. Free delivery, WhatsApp photo approval.",
        "badge": "Jinnah Avenue • Corporate Towers • Business District",
        "intro": "Blue Area is Islamabad's central business district — corporate towers, banks, hotels and offices along Jinnah Avenue. We deliver corporate bouquets, client gifts and event flowers within 2 to 5 hours. Free delivery, WhatsApp photo approval, bulk orders welcome.",
        "coverage": [
            "Jinnah Avenue: corporate towers and bank branches.",
            "Centaurus & malls: retail and hospitality flowers.",
            "Government offices: formal event arrangements.",
        ],
        "occasions": "Blue Area is corporate territory — client bouquets, conference arrangements, inauguration stands, farewell flowers. Bulk orders with advance booking.",
    },
    {
        "slug": "i-8-islamabad", "name": "I-8 Islamabad",
        "title": "Flower Delivery in I-8 Islamabad | Same-Day, Free Delivery",
        "desc": "Same-day flower delivery to I-8 Islamabad — I-8 Markaz, residential sectors in 2–5 hours. Free delivery, WhatsApp photo approval.",
        "badge": "I-8 Markaz • Residential Sectors • Family Zone",
        "intro": "I-8 is a well-established residential sector with strong community feel. Our partner delivers across I-8 within 2 to 5 hours. Birthday bouquets, anniversary roses, get-well flowers — free delivery and WhatsApp photo approval.",
        "coverage": [
            "I-8 Markaz: local shops — commercial bouquets.",
            "I-8 Residential (1, 2, 3, 4): family neighbourhoods — birthday and Eid flowers.",
        ],
        "occasions": "I-8 families order for every occasion — birthdays, anniversaries, nikkah, Eid hampers, housewarmings. New-baby pastels are popular.",
    },
]

TEMPLATE = '''import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: { absolute: "__TITLE__" },
  description: "__DESC__",
  alternates: { canonical: `${SITE_URL}/flower-delivery-islamabad/__SLUG__` },
  openGraph: {
    title: "__TITLE__",
    description: "__DESC__",
    url: `${SITE_URL}/flower-delivery-islamabad/__SLUG__`,
    type: "website",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: "__TITLE__" }],
  }
};

const FAQS = [
  { q: "How long does flower delivery to __NAME__ take?", a: "Delivery to __NAME__ takes 2 to 5 hours, 7 days a week. Order on WhatsApp (0310-4225974) — you approve by photo before the rider leaves." },
  { q: "What is the delivery fee for __NAME__?", a: "Delivery to __NAME__ is completely FREE. No hidden charges, no minimum order." },
  { q: "Can I order birthday flowers for __NAME__?", a: "Yes! Birthday bouquets are our most popular __NAME__ order. Add cake or balloons — delivered same-day within 2 to 5 hours." },
  { q: "Do you deliver to offices in __NAME__?", a: "Absolutely. Homes, offices, shops across __NAME__ — share the building name on WhatsApp." },
  { q: "Can I order from abroad for __NAME__ delivery?", a: "Yes! UK, USA, Dubai — pay by international card, approve by photo, we deliver to __NAME__." },
];

export default function Page() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  return (
    <main className="bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="w-full py-16 px-4 sm:px-6 text-center border-b border-[#E5DED2]">
        <div className="max-w-3xl mx-auto space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#8B1E2D]">__BADGE__</span>
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-[#101012] leading-tight">Flower Delivery in __NAME__</h1>
          <p className="text-sm sm:text-base text-[#2A2A2A] leading-relaxed">__INTRO__</p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link href="/bouquets" className="px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors">Shop Bouquets →</Link>
            <a href={whatsappLink("Hi Lahore Bouquet! I want flowers delivered to __NAME__.")} target="_blank" rel="noopener noreferrer" className="px-6 py-3 rounded-full bg-[#25D366] text-white text-sm font-bold hover:opacity-90 transition-opacity">Order on WhatsApp</a>
          </div>
        </div>
      </section>
      <section className="w-full py-12 px-4 sm:px-6 border-b border-[#E5DED2]">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="font-playfair text-2xl font-bold text-[#101012]">Areas we cover in __NAME__</h2>
          <ul className="space-y-2 text-sm list-disc list-inside leading-relaxed">
__COVERAGE__
          </ul>
        </div>
      </section>
      <section className="w-full py-12 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="font-playfair text-2xl font-bold text-[#101012]">Popular occasions in __NAME__</h2>
          <p className="text-sm leading-relaxed">__OCCASIONS__</p>
        </div>
      </section>
      <section className="w-full py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl font-bold text-[#101012] text-center">__NAME__ FAQs</h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <details key={i} className="p-5 rounded-2xl bg-white border border-[#E5DED2] group">
                <summary className="font-bold text-sm text-[#0B0B0B] cursor-pointer list-none flex justify-between items-center gap-2">{f.q}<span className="text-[#8B1E2D] group-open:rotate-45 transition-transform text-lg leading-none shrink-0">+</span></summary>
                <p className="text-sm mt-2 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center pt-4">
            <p className="text-sm">Explore all <Link href="/flower-delivery-islamabad" className="text-[#8B1E2D] underline font-semibold">Islamabad delivery areas</Link></p>
          </div>
        </div>
      </section>
    </main>
  );
}
'''

base = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'app', 'flower-delivery-islamabad')
for a in areas:
    d = os.path.join(base, a["slug"])
    os.makedirs(d, exist_ok=True)
    cov = "\n".join(f'            <li>{c}</li>' for c in a["coverage"])
    content = (TEMPLATE
        .replace("__TITLE__", a["title"])
        .replace("__DESC__", a["desc"])
        .replace("__SLUG__", a["slug"])
        .replace("__NAME__", a["name"])
        .replace("__BADGE__", a["badge"])
        .replace("__INTRO__", a["intro"])
        .replace("__OCCASIONS__", a["occasions"])
        .replace("__COVERAGE__", cov))
    with open(os.path.join(d, "page.tsx"), "w") as f:
        f.write(content)
    print("Created:", a["slug"])
