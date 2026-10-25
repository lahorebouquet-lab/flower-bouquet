import React from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";

/**
 * Extra, page-specific content and cross-links for the Islamabad pages, which
 * were short and only linked back to one or two other pages.
 */

const CATEGORIES: [string, string][] = [
  ["/islamabad/bouquets", "Bouquets"],
  ["/islamabad/rose-bouquets", "Red roses"],
  ["/islamabad/sunflower-bouquets", "Sunflowers"],
  ["/islamabad/chocolate-bouquets", "Chocolate bouquets"],
  ["/islamabad/birthday-flowers", "Birthday flowers"],
  ["/islamabad/anniversary-flowers", "Anniversary flowers"],
  ["/islamabad/gifts-and-cakes", "Gifts & cakes"],
  ["/islamabad/wedding-flowers", "Wedding flowers"],
  ["/islamabad/valentines-day", "Valentine's Day"],
  ["/islamabad/flower-prices", "Prices"],
];

const SECTORS: [string, string][] = [
  ["/flower-delivery-islamabad/f-6-islamabad", "F-6"],
  ["/flower-delivery-islamabad/f-7-islamabad", "F-7"],
  ["/flower-delivery-islamabad/f-8-islamabad", "F-8"],
  ["/flower-delivery-islamabad/g-11-islamabad", "G-11"],
  ["/flower-delivery-islamabad/dha-islamabad", "DHA Islamabad"],
  ["/flower-delivery-islamabad/bahria-town-islamabad", "Bahria Town"],
];

const INTRO: Record<string, { title: string; body: string[] }> = {
  "/islamabad/bouquets": {
    title: "Choosing a bouquet for Islamabad",
    body: [
      "Small hand-tied bouquets from Rs. 1,239 suit a quick thank-you or a get-well visit. Medium rose bouquets of 12 to 24 stems, at Rs. 2,600 to 3,800, are the usual choice for birthdays and anniversaries. For a statement gift, the large signature Dutch rose arrangement is Rs. 7,499.",
      "Tell us the recipient's sector and the occasion on WhatsApp and we will suggest what is available that day, then send a photo before it leaves.",
    ],
  },
  "/islamabad/rose-bouquets": {
    title: "How many red roses to send",
    body: [
      "A single red rose says \"thinking of you\" and suits a first date or a small apology. Twelve roses is the classic anniversary and proposal gift. Twenty-four or more makes the biggest impression for milestone anniversaries.",
      "All red roses are hand-tied fresh on the day of delivery and wrapped in premium paper. Add a free handwritten card with your message when you order.",
    ],
  },
  "/islamabad/sunflower-bouquets": {
    title: "When sunflowers are the right choice",
    body: [
      "Sunflowers are bright, cheerful and gender-neutral, so they are a favourite for graduations, new jobs, birthdays and get-well wishes, especially for friends and colleagues. Sunflower bouquets start from Rs. 1,699 and can be mixed with roses or baby's breath.",
      "Sunflowers are seasonal, so message us first and we will confirm what is in stock for your delivery date.",
    ],
  },
  "/islamabad/chocolate-bouquets": {
    title: "What goes into a chocolate bouquet",
    body: [
      "Chocolate bouquets start from Rs. 3,800 and combine fresh roses with branded chocolates such as Ferrero Rocher, KitKat or Dairy Milk, wrapped as one gift. They are popular for birthdays, Valentine's Day and saying sorry.",
      "If the recipient has a favourite chocolate, tell us when you order and we will build the bouquet around it where available.",
    ],
  },
  "/islamabad/birthday-flowers": {
    title: "Birthday surprise ideas for Islamabad",
    body: [
      "The most popular birthday orders are a rose or sunflower bouquet on its own, a bouquet with a cake, or flowers with chocolates and a balloon. For a surprise, give us a delivery window when you know they will be home or at the office.",
      "Bouquets start from Rs. 1,239. Order on WhatsApp with the sector and address, and we will confirm the timing and send a photo before dispatch.",
    ],
  },
  "/islamabad/anniversary-flowers": {
    title: "Anniversary flowers by milestone",
    body: [
      "For a first anniversary, a dozen red roses is the classic choice. For later milestones, many couples choose a larger Dutch rose arrangement, or a bouquet with chocolates or a cake to celebrate together.",
      "Plan ahead for evening or late deliveries, and add a personal card message. We will send you a photo of the finished bouquet before it leaves.",
    ],
  },
  "/islamabad/gifts-and-cakes": {
    title: "Building a gift combo",
    body: [
      "Start with a bouquet, then add a cake, chocolates or a teddy bear to make a complete celebration package. Flowers with a cake is the most popular birthday combo; flowers with chocolates is the favourite for anniversaries.",
      "Cake and gift options change day to day, so message us your budget on WhatsApp and we will share what can be delivered with your bouquet.",
    ],
  },
  "/islamabad/wedding-flowers": {
    title: "Planning wedding flowers in Islamabad",
    body: [
      "For Islamabad weddings we arrange bridal bouquets matched to the outfit, plus stage, entrance and table florals for the venue. Share the date, venue and colour theme on WhatsApp for a custom quote.",
      "Book at least one to two weeks ahead, and earlier during the November to February wedding season, so the right flowers can be sourced.",
    ],
  },
  "/islamabad/valentines-day": {
    title: "Ordering for Valentine's Day",
    body: [
      "Valentine's Day is our busiest day of the year, so the best time to order is a week ahead. Red rose bouquets, roses with chocolates and heart balloons are the most requested gifts.",
      "Pre-booking holds your bouquet and delivery slot, and we confirm the time with you before the day.",
    ],
  },
  "/islamabad/flower-prices": {
    title: "What affects the price",
    body: [
      "The price of a bouquet depends mainly on the number of stems, the type of flower (local roses, imported Dutch roses, sunflowers) and any add-ons such as chocolates or a cake. Islamabad prices match our Lahore prices.",
      "Message us your budget on WhatsApp and we will suggest the best bouquet available for it.",
    ],
  },
  "/flower-delivery-islamabad/f-6-islamabad": {
    title: "Delivering in F-6",
    body: [
      "We deliver across F-6/1 to F-6/4, including the residential streets near Margalla Road and the area close to the diplomatic enclave. Share the full house and street number so the rider can find the address quickly.",
    ],
  },
  "/flower-delivery-islamabad/f-7-islamabad": {
    title: "Delivering in F-7",
    body: [
      "We deliver across F-7/1 to F-7/4, including homes and offices around Jinnah Super Market. For shops and cafés in the market, add the shop name and a contact number for the recipient.",
    ],
  },
  "/flower-delivery-islamabad/f-8-islamabad": {
    title: "Delivering in F-8",
    body: [
      "We deliver to homes and offices across F-8, including addresses near F-8 Markaz. Include the street and house number, and a phone number for the recipient so the rider can call on arrival.",
    ],
  },
  "/flower-delivery-islamabad/g-11-islamabad": {
    title: "Delivering in G-11",
    body: [
      "We deliver across G-11, including the area around G-11 Markaz. For apartment buildings, include the block and flat number so the bouquet reaches the right door.",
    ],
  },
  "/flower-delivery-islamabad/dha-islamabad": {
    title: "Delivering in DHA Islamabad",
    body: [
      "We deliver across DHA Islamabad Phases 1 to 5. Share the phase, sector and house number, and a contact number for the gate if needed.",
    ],
  },
  "/flower-delivery-islamabad/bahria-town-islamabad": {
    title: "Delivering in Bahria Town",
    body: [
      "We deliver across Bahria Town Rawalpindi/Islamabad. Include the phase, street and house number; some phases take longer to reach, so we confirm the delivery time with you when you order.",
    ],
  },
};

export default function IslamabadDetails({ path }: { path: string }) {
  const intro = INTRO[path];
  return (
    <section className="w-full py-12 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto space-y-6">
        {intro && (
          <div className="p-6 rounded-2xl bg-white border border-[#E5DED2] space-y-3">
            <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">{intro.title}</h2>
            {intro.body.map((p, i) => (
              <p key={i} className="text-sm leading-relaxed text-[#2A2A2A]">{p}</p>
            ))}
          </div>
        )}
        <nav aria-label="More Islamabad pages" className="p-6 rounded-2xl bg-[#F8F3EA] border border-[#E5DED2] space-y-4 text-sm">
          <div className="space-y-2">
            <p className="font-bold text-[#0B0B0B]">Shop for Islamabad</p>
            <p className="leading-relaxed">
              {CATEGORIES.filter(([h]) => h !== path).map(([h, l], i) => (
                <React.Fragment key={h}>
                  {i > 0 && " • "}
                  <Link href={h} className="text-[#8B1E2D] hover:underline">{l}</Link>
                </React.Fragment>
              ))}
            </p>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-[#0B0B0B] flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#8B1E2D]" /> Islamabad sectors we deliver to
            </p>
            <p className="leading-relaxed">
              {SECTORS.filter(([h]) => h !== path).map(([h, l], i) => (
                <React.Fragment key={h}>
                  {i > 0 && " • "}
                  <Link href={h} className="text-[#8B1E2D] hover:underline">{l}</Link>
                </React.Fragment>
              ))}
              {" • "}
              <Link href="/flower-delivery-islamabad" className="text-[#8B1E2D] hover:underline">All Islamabad delivery info</Link>
            </p>
          </div>
        </nav>
      </div>
    </section>
  );
}
