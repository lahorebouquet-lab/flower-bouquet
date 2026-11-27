import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { HelpCircle, MessageCircle } from "lucide-react";
import { SITE_URL, whatsappLink } from "@/lib/business";
import { withSeo } from "@/lib/seo";

const TITLE = "Flower Questions Answered | Care, Meanings & Gifting";
const DESCRIPTION =
  "Answers to common flower questions: how long roses last, how to keep a bouquet fresh, what each flower means and what to send for every occasion in Lahore.";

export const metadata: Metadata = withSeo("/flower-questions", {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/flower-questions` },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/flower-questions`,
    siteName: "Lahore Bouquet",
    type: "website",
    locale: "en_PK",
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
});

type QA = { q: string; a: string; link?: [string, string] };
type Group = { id: string; title: string; intro: string; items: QA[] };

const GROUPS: Group[] = [
  {
    id: "care",
    title: "Keeping Your Flowers Fresh",
    intro: "Simple habits that make a hand-tied bouquet last longer at home.",
    items: [
      {
        q: "How long do fresh roses last in a vase?",
        a: "With good care, fresh roses usually last about 5 to 7 days, and sometimes longer. Clean water, a clean vase and a cool spot make the biggest difference.",
        link: ["/roses", "See our rose bouquets"],
      },
      {
        q: "How do I keep a bouquet fresh for longer?",
        a: "Trim 1 to 2 cm off the stems at an angle, remove any leaves that would sit below the water line, and use a clean vase with fresh water. Change the water every day or two, add the flower food if the bouquet came with a packet, and keep the vase away from direct sun, heaters and fans.",
      },
      {
        q: "Why is my rose drooping or bending at the neck?",
        a: "Usually an air bubble or a blocked stem is stopping water from reaching the flower. Recut the stem at an angle, ideally under water, and stand the rose in clean water for a few hours. If the head still does not recover, the flower is probably at the end of its life.",
      },
      {
        q: "Should I keep the bouquet in the wrapping?",
        a: "Take the bouquet out of the wrapping when you get it, cut the stems and put it in water. The wrapping is for carrying the bouquet, and the flowers drink better in a vase.",
      },
      {
        q: "Does the weather in Lahore affect how long flowers last?",
        a: "Yes. Flowers last longer in a cool room and wilt faster in heat. In the summer months, keep the bouquet in an air-conditioned room if you can and change the water daily. In winter, a bright room away from a heater works well.",
      },
      {
        q: "Why should I keep fruit away from my flowers?",
        a: "Ripening fruit gives off ethylene gas, which makes cut flowers age faster. Keep the vase away from the fruit bowl.",
      },
      {
        q: "How long do sunflowers last in a vase?",
        a: "Sunflowers usually last about a week with fresh water. They drink a lot, so top up the vase every day.",
        link: ["/sunflower-bouquet-lahore", "See sunflower bouquets"],
      },
      {
        q: "Are lilies safe to keep at home?",
        a: "Lilies are very toxic to cats, so avoid them if you have one. Their pollen can also stain clothes and tablecloths, and you can remove the pollen-tipped anthers as the flowers open.",
        link: ["/lily-bouquet-lahore", "See lily bouquets"],
      },
      {
        q: "Which flowers last the longest?",
        a: "Chrysanthemums, carnations and alstroemeria are generally long-lasting cut flowers. Dried flowers last the longest of all, often months or even a year or more if you keep them out of sun and damp.",
        link: ["/dried-flowers", "See dried flowers"],
      },
    ],
  },
  {
    id: "meanings",
    title: "What Flowers Mean",
    intro: "A quick guide to the flowers people send most often.",
    items: [
      {
        q: "What does a red rose mean?",
        a: "Red roses are the classic symbol of love and romance. They are a common choice for anniversaries, Valentine's Day and surprises for a spouse or partner.",
        link: ["/valentine-day-flowers-lahore", "Valentine's Day flowers"],
      },
      {
        q: "What do pink and white roses mean?",
        a: "Pink roses usually say thank you and admiration, which suits a mother, sister or friend. White roses are linked with purity, new beginnings and remembrance.",
      },
      {
        q: "What does a yellow rose or sunflower mean?",
        a: "Yellow roses and sunflowers stand for friendship, joy and cheerfulness. They are a good pick for a birthday, a congratulations or a get-well message.",
      },
      {
        q: "What does a single rose mean?",
        a: "A single rose says that the person is one of a kind. It is a simple, elegant gesture when you want something small but personal.",
      },
      {
        q: "How many roses should I send?",
        a: "There is no fixed rule. A single rose is a simple, personal gesture, and a dozen is the traditional romantic choice. Choose the size that fits your budget and the occasion, since the thought matters more than the count.",
        link: ["/bouquets-under-2000", "Bouquets under Rs. 2,000"],
      },
      {
        q: "What does a tulip bouquet mean?",
        a: "Tulips are often linked with spring, fresh starts and affection, and they work well as a cheerful gift for a birthday or a new beginning.",
        link: ["/tulip-bouquet-lahore", "See tulip bouquets"],
      },
    ],
  },
  {
    id: "occasions",
    title: "What to Send for Every Occasion",
    intro: "Ideas for the moments people most often order flowers for.",
    items: [
      {
        q: "What flowers should I send for a birthday?",
        a: "Roses, sunflowers and mixed hand-tied bouquets are the most popular birthday choices. Add a message card, and for a surprise you can book the midnight slot in Lahore.",
        link: ["/midnight-flower-delivery-lahore", "Midnight delivery in Lahore"],
      },
      {
        q: "What should I send my mother?",
        a: "Pink roses, lilies and soft mixed bouquets are the usual picks for a mother, whether for her birthday, Mother's Day or just to say thank you.",
        link: ["/flowers-for-mother-in-lahore", "Flowers for mother"],
      },
      {
        q: "Can I send flowers to a man?",
        a: "Yes. Bold colours, sunflowers and simple wrapped bouquets are popular for a husband, father, brother or friend.",
        link: ["/flowers-for-father-in-lahore", "Flowers for father"],
      },
      {
        q: "What should I send for an anniversary?",
        a: "Red roses are the classic anniversary choice. Pair them with a handwritten card, and consider a chocolate bouquet if you want to add something sweet.",
        link: ["/chocolate-bouquets-lahore", "Chocolate bouquets"],
      },
      {
        q: "What flowers suit a wedding or nikkah?",
        a: "Roses, gajray and fresh flower decoration are common for weddings, nikkah ceremonies and bridal rooms. For decoration work, message us the date, the venue and your budget on WhatsApp so we can confirm what is possible.",
        link: ["/wedding-decor", "Wedding decoration"],
      },
      {
        q: "What flowers should I take to a hospital?",
        a: "Choose a small, simple bouquet. Avoid very strongly scented flowers, since some patients find strong smells uncomfortable, and check whether the ward allows flowers at all.",
      },
      {
        q: "What flowers are appropriate for condolences?",
        a: "White or soft-coloured flowers are the usual choice for a condolence message. Customs vary between families, so if you are unsure, ask a relative what the family prefers.",
      },
      {
        q: "What can I send to welcome someone back from Umrah or Hajj?",
        a: "A fresh bouquet with a short message of congratulations is a thoughtful welcome. We have a dedicated page for Hajj and Umrah Mubarak flowers in Lahore.",
        link: ["/umrah-hajj-mubarak-flowers-lahore", "Umrah and Hajj Mubarak flowers"],
      },
      {
        q: "What can I send as a gift if I do not want flowers?",
        a: "Chocolate bouquets, money bouquets, teddy bears and dried flowers are popular alternatives to fresh flowers.",
        link: ["/money-bouquets", "Money bouquets"],
      },
    ],
  },
  {
    id: "ordering",
    title: "Ordering Tips",
    intro: "How to get the best result when you send flowers.",
    items: [
      {
        q: "What should I write on the message card?",
        a: "Keep it short and personal: the person's name, one sentence about the occasion and your name. If you would like a particular wording, send it with the order on WhatsApp and we write it on the card.",
      },
      {
        q: "What details do I need to send flowers to an office?",
        a: "Share the recipient's name and phone number, the company name, the building and floor, and a reception contact if there is one. A phone number matters most, since our rider calls before arriving.",
      },
      {
        q: "How early should I order for Eid, Valentine's Day or Mother's Day?",
        a: "Order 2 to 3 days early for the busiest dates, and choose your delivery date at checkout or on WhatsApp.",
        link: ["/faq", "Read our delivery FAQ"],
      },
      {
        q: "How much will my order cost in total?",
        a: "Hand-tied bouquets start from Rs. 1,239, and delivery is a flat Rs. 800 across listed areas of Lahore and Islamabad. We confirm the total on WhatsApp before you pay.",
        link: ["/prices", "See the price guide"],
      },
      {
        q: "Can I send flowers to Islamabad from Lahore, or from abroad?",
        a: "Yes. We deliver in listed sectors of Islamabad through our local partner, and you can order from abroad with an international card or bank transfer.",
        link: ["/flower-delivery-islamabad", "Islamabad flower delivery"],
      },
      {
        q: "How can I see what I am sending before it is delivered?",
        a: "Our florist sends a photo of the finished bouquet on WhatsApp for your approval before dispatch, so you know exactly what the recipient will receive.",
      },
    ],
  },
];

const ALL = GROUPS.flatMap((g) => g.items);

export default function FlowerQuestionsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ALL.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}` },
      { "@type": "ListItem", position: 2, name: "Flower Questions Answered", item: `${SITE_URL}/flower-questions` },
    ],
  };

  return (
    <main className="bg-[#F8F3EA] text-[#2A2A2A]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="w-full py-16 px-4 sm:px-6 text-center border-b border-[#E5DED2]">
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="font-playfair text-3xl sm:text-5xl font-bold text-[#101012] leading-tight">
            Flower Questions Answered
          </h1>
          <p className="text-sm sm:text-base leading-relaxed">
            <strong>{ALL.length} straight answers</strong> about keeping flowers fresh, what each flower means and what to send for a birthday, anniversary, wedding or condolence. For delivery times, payment and order questions, see our <Link href="/faq" className="text-[#8B1E2D] underline font-semibold">delivery FAQ</Link>.
          </p>
          <div className="flex flex-wrap justify-center gap-2 pt-2 text-sm">
            {GROUPS.map((g) => (
              <a
                key={g.id}
                href={`#${g.id}`}
                className="px-4 py-2 rounded-full border border-[#E5DED2] bg-white hover:border-[#8B1E2D] hover:text-[#8B1E2D] transition-colors"
              >
                {g.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {GROUPS.map((g, gi) => (
        <section
          key={g.id}
          id={g.id}
          className={`w-full py-14 px-4 sm:px-6 border-b border-[#E5DED2] ${gi % 2 === 0 ? "bg-white" : ""}`}
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <h2 className="font-playfair text-2xl sm:text-3xl font-bold text-[#101012]">{g.title}</h2>
              <p className="text-sm text-[#2A2A2A]">{g.intro}</p>
            </div>
            <div className="space-y-3">
              {g.items.map((f) => (
                <details key={f.q} className="p-5 rounded-2xl bg-white border border-[#E5DED2] group">
                  <summary className="font-bold text-sm text-[#0B0B0B] cursor-pointer list-none flex justify-between items-center gap-2">
                    <span className="flex items-center gap-2">
                      <HelpCircle size={16} className="text-[#8B1E2D] shrink-0" /> {f.q}
                    </span>
                    <span className="text-[#8B1E2D] group-open:rotate-45 transition-transform text-lg leading-none shrink-0">+</span>
                  </summary>
                  <p className="text-sm mt-2 leading-relaxed">{f.a}</p>
                  {f.link && (
                    <p className="text-sm mt-2">
                      <Link href={f.link[0]} className="text-[#8B1E2D] underline font-semibold">
                        {f.link[1]} →
                      </Link>
                    </p>
                  )}
                </details>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="w-full py-14 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-3">
          <h2 className="font-playfair text-xl font-bold text-[#101012]">Still have a question?</h2>
          <p className="text-sm">Message us on WhatsApp and we will reply during our opening hours, 9:00 AM to 1:00 AM Pakistan time.</p>
          <a
            href={whatsappLink("Hi Lahore Bouquet! I have a question about flowers.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#128C7E] text-white text-sm font-bold hover:opacity-90 transition-opacity"
          >
            <MessageCircle size={18} /> WhatsApp: 0310-4225974
          </a>
        </div>
      </section>
    </main>
  );
}
