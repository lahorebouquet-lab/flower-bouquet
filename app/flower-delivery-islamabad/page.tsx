import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL, whatsappLink } from "@/lib/business";

export const metadata: Metadata = {
  title: {
    absolute: "Flower Delivery in Islamabad | Bouquets & Gifts",
  },
  description: "Order fresh flower bouquets and gifts in Islamabad with Lahore Bouquet. Explore roses, birthday flowers and anniversary gifts. Check local delivery options and order online.",
  alternates: {
    canonical: `${SITE_URL}/flower-delivery-islamabad`,
  },
  openGraph: {
    title: "Flower Delivery in Islamabad | Bouquets & Gifts",
    description: "Order fresh flower bouquets and gifts in Islamabad with Lahore Bouquet. Explore roses, birthday flowers and anniversary gifts.",
    url: `${SITE_URL}/flower-delivery-islamabad`,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Flower Delivery in Islamabad | Bouquets & Gifts",
      },
    ],
  }
};

const FAQS = [
  {
    q: "Where can I order flowers online in Islamabad?",
    a: "You can browse available bouquets and gifts on LahoreBouquet.com and contact our team to arrange delivery in a covered area of Islamabad. Confirm product availability and delivery charges before payment."
  },
  {
    q: "Do you offer same-day flower delivery in Islamabad?",
    a: "Same-day delivery may be available depending on the order time, bouquet availability and delivery address. Contact us before ordering to confirm the available delivery slot."
  },
  {
    q: "How much does flower delivery cost in Islamabad?",
    a: "The delivery fee depends on the delivery location and order details. Our team can confirm the applicable charges before you complete your purchase."
  },
  {
    q: "Can I send flowers to Islamabad from another city or country?",
    a: "Yes, you can contact Lahore Bouquet to arrange a gift for someone in Islamabad from another location. Available payment options and delivery details should be confirmed with our team before placing the order."
  },
  {
    q: "Can I order red roses for an anniversary in Islamabad?",
    a: "You can ask our team about the available red rose bouquets, sizes and prices. Once your selection and delivery address are confirmed, we'll guide you through the ordering process."
  },
  {
    q: "Do you deliver to all sectors of Islamabad?",
    a: "Delivery is available only in areas covered by our local delivery partner. Share the complete address with us to confirm service availability before payment."
  },
  {
    q: "Can I request a photo of my bouquet before delivery?",
    a: "Bouquet photo confirmation may be available depending on the order and fulfilment process. Please request it when placing your order."
  },
];

const AREAS = [
  { label: "F-6", slug: "f-6-islamabad" },
  { label: "F-7", slug: "f-7-islamabad" },
  { label: "F-8", slug: "f-8-islamabad" },
  { label: "F-10", slug: "f-10-islamabad" },
  { label: "F-11", slug: "f-11-islamabad" },
  { label: "G-6", slug: "g-6-islamabad" },
  { label: "G-7", slug: "g-7-islamabad" },
  { label: "G-9", slug: "g-9-islamabad" },
  { label: "G-10", slug: "g-10-islamabad" },
  { label: "I-8", slug: "i-8-islamabad" },
  { label: "I-9", slug: "i-9-islamabad" },
  { label: "I-10", slug: "i-10-islamabad" },
  { label: "E-7", slug: "e-7-islamabad" },
  { label: "E-11", slug: "e-11-islamabad" },
  { label: "Blue Area", slug: "blue-area-islamabad" },
  { label: "DHA Islamabad", slug: "dha-islamabad" },
  { label: "Bahria Town", slug: "bahria-town-islamabad" },
  { label: "G-11", slug: "g-11-islamabad" },
  { label: "G-13", slug: "g-13-islamabad" },
  { label: "D-12", slug: "d-12-islamabad" },
  { label: "B-17", slug: "b-17-islamabad" },
  { label: "Gulberg Greens", slug: "gulberg-greens-islamabad" },
  { label: "Bahria Enclave", slug: "bahria-enclave-islamabad" },
];

export default function FlowerDeliveryIslamabadPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <main className="bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="w-full py-16 px-4 sm:px-6 text-center border-b border-[#E5DED2]">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-[#101012] leading-tight">
            Flower Delivery in Islamabad – Fresh Flowers & Gifts
          </h1>
          <p className="text-sm sm:text-base text-[#2A2A2A] leading-relaxed">
            Looking for beautiful flowers in Islamabad for someone special? Lahore Bouquet makes it easy to send flowers and thoughtful gifts for birthdays, anniversaries, romantic surprises and other memorable occasions.
          </p>
          <p className="text-sm sm:text-base text-[#2A2A2A] leading-relaxed">
            Choose from our available rose bouquets, birthday flowers, sunflower arrangements, chocolate bouquets and gift hampers. Whether you want to surprise someone with a simple bouquet or celebrate a special day with a thoughtful gift, we&apos;re here to help you find the right option.
          </p>
          <p className="text-sm sm:text-base text-[#2A2A2A] leading-relaxed">
            We arrange deliveries in selected areas of Islamabad through our local delivery partner. Browse our collection, share your delivery details and contact us to confirm availability, prices and delivery timing before placing your order.
          </p>
          <p className="text-sm sm:text-base font-semibold text-[#0B0B0B]">
            Order flowers in Islamabad today and make someone&apos;s day a little more special.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-2">
            <Link
              href="/bouquets"
              className="px-6 py-3 rounded-full bg-[#8B1E2D] text-white text-sm font-bold hover:bg-[#C6A15B] hover:text-[#0B0B0B] transition-colors"
            >
              Shop Flowers
            </Link>
            <a
              href={whatsappLink("Hi Lahore Bouquet! I want to order flowers for delivery in Islamabad.")}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Online Flower Shop */}
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2]">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            Online Flower Shop in Islamabad
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            Sending flowers should be simple, even when you&apos;re ordering from another city or country. At Lahore Bouquet, you can explore available bouquets online and arrange delivery for someone in Islamabad without visiting a physical flower shop yourself.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            From classic red roses to colourful birthday bouquets and chocolate gifts, our collection offers options for different occasions and budgets. Product availability may vary, so contact us if you have a particular flower, colour or arrangement in mind.
          </p>
        </div>
      </section>

      {/* Occasions */}
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            Flowers and Gifts for Every Occasion
          </h2>
          <div className="space-y-4 text-sm sm:text-base leading-relaxed">
            <div>
              <h3 className="font-bold text-[#0B0B0B]">Birthday Flowers</h3>
              <p>Make someone&apos;s birthday memorable with a fresh flower bouquet. Choose an arrangement that suits their personality and add a thoughtful message for a more personal surprise.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#0B0B0B]">Anniversary Flowers</h3>
              <p>Celebrate your relationship with red roses or an elegant floral arrangement. Anniversary flowers are a lovely way to express your feelings, whether you&apos;re planning a surprise or sending a gift from afar.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#0B0B0B]">Red Rose Bouquets</h3>
              <p>Red roses remain a classic choice for romantic occasions, anniversaries and special surprises. Explore the available designs and confirm the bouquet size and price before ordering.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#0B0B0B]">Sunflower Bouquets</h3>
              <p>Bright and cheerful sunflowers are a thoughtful choice for birthdays, congratulations and everyday surprises.</p>
            </div>
            <div>
              <h3 className="font-bold text-[#0B0B0B]">Chocolate Bouquets and Gift Hampers</h3>
              <p>Looking for something beyond traditional flowers? Explore our available chocolate bouquets and gift hampers for birthdays, celebrations and other special moments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Areas */}
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2]">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012]">
              Flower Delivery Areas in Islamabad
            </h2>
            <p className="text-sm text-[#2A2A2A] max-w-2xl mx-auto leading-relaxed">
              Lahore Bouquet arranges flower deliveries in selected areas of Islamabad through a local delivery partner. Delivery availability depends on your complete address, product selection and the requested delivery time.
            </p>
            <p className="text-sm text-[#2A2A2A] max-w-2xl mx-auto leading-relaxed">
              If you&apos;re ordering for someone in Islamabad, send us the recipient&apos;s location before payment so we can confirm whether delivery is available.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {AREAS.map((area) => (
              <Link
                key={area.slug}
                href={`/flower-delivery-islamabad/${area.slug}`}
                className="px-4 py-2 rounded-full bg-white border border-[rgba(198,161,91,0.25)] text-xs font-semibold text-[#0B0B0B] hover:border-[#8B1E2D] hover:text-[#8B1E2D] transition-colors"
              >
                {area.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How to Order */}
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2] bg-white">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            How to Order Flowers in Islamabad
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">Ordering flowers online is straightforward:</p>
          <ol className="space-y-3 text-sm sm:text-base leading-relaxed list-decimal list-inside">
            <li>Browse the available bouquets and gifts on LahoreBouquet.com.</li>
            <li>Choose your preferred arrangement and confirm its price.</li>
            <li>Share the recipient&apos;s name, contact number and complete delivery address.</li>
            <li>Confirm the delivery charges, payment method and estimated arrival time with our team.</li>
            <li>Finalise your order once the details have been confirmed.</li>
          </ol>
          <p className="text-sm sm:text-base leading-relaxed">
            Where available, you can also request a bouquet photo before dispatch.
          </p>
          <p className="text-sm sm:text-base font-semibold">
            Want to send flowers today? Contact our team on WhatsApp to check current availability and delivery options.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="w-full py-16 px-4 sm:px-6 border-b border-[#E5DED2]">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            Why Choose Lahore Bouquet?
          </h2>
          <p className="text-sm sm:text-base leading-relaxed">
            We understand that when you send flowers to someone special, you want the gift to arrive as expected. That&apos;s why we encourage customers to confirm the bouquet details, delivery address and timing before finalising an order.
          </p>
          <ul className="space-y-2 text-sm sm:text-base list-disc list-inside leading-relaxed">
            <li>Convenient online and WhatsApp ordering</li>
            <li>Flower bouquets and gifts for different occasions</li>
            <li>A local delivery partner serving selected Islamabad areas</li>
            <li>Clear confirmation of product prices and delivery charges</li>
            <li>Bouquet photo confirmation where available</li>
            <li>Options for customers ordering from within Pakistan or abroad</li>
          </ul>
          <p className="text-sm sm:text-base leading-relaxed">
            Our aim is to make sending flowers a simple and thoughtful experience, whether you&apos;re celebrating a birthday, remembering an anniversary or surprising someone just because.
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012] text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {FAQS.map((f, i) => (
              <details key={i} className="p-5 rounded-2xl bg-white border border-[#E5DED2] group">
                <summary className="font-bold text-sm text-[#0B0B0B] cursor-pointer list-none flex justify-between items-center gap-2">
                  {f.q}
                  <span className="text-[#8B1E2D] group-open:rotate-45 transition-transform text-lg leading-none shrink-0">+</span>
                </summary>
                <p className="text-sm mt-2 leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="text-center pt-6 space-y-2">
            <h3 className="font-playfair text-xl font-bold text-[#101012]">
              Send Flowers in Islamabad with Lahore Bouquet
            </h3>
            <p className="text-sm leading-relaxed">
              A thoughtful bouquet can make an ordinary day feel special. Explore our available flowers and gifts, choose an arrangement you love, and contact Lahore Bouquet to organise delivery in Islamabad.
            </p>
            <p className="text-sm font-semibold">
              Browse our collection or message us on WhatsApp to confirm your order.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
