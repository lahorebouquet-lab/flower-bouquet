"use client";

import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Banknote,
  CakeSlice,
  Camera,
  Check,
  ChevronDown,
  Clock3,
  Flower2,
  Gift,
  Heart,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";
import { LANDING_CSS } from "./styles";
import WhatsAppButton from "./WhatsAppButton";

const WHATSAPP_NUMBER = "923104225974";
const WHATSAPP_LABEL = "+92 310 4225974";

/* Real Lahore Bouquet product photos, served from the same image CDN as lahorebouquet.com. */
const SANITY = "https://cdn.sanity.io/images/hgqfqfmw/production/";
const photo = (file: string, width = 640) =>
  `${SANITY}${file}?w=${width}&q=75&auto=format`;
const HERO_IMAGE = photo(
  "3adcea6f2309a235f104143cd6f5b5eafbc17658-4030x4076.webp",
  900
);

const benefits = [
  {
    icon: Flower2,
    eyebrow: "Made to order",
    title: "Freshly hand-tied",
    copy: "Every bouquet is arranged fresh by our Lahore florist team, never pulled from a shelf.",
  },
  {
    icon: Truck,
    eyebrow: "Same-day service",
    title: "At your door in 2–5 hours",
    copy: "Fast delivery across listed Lahore areas, with free delivery where we serve.",
  },
  {
    icon: Camera,
    eyebrow: "Your approval",
    title: "Photo before dispatch",
    copy: "We send a photo of your actual bouquet on WhatsApp before it leaves our studio.",
  },
  {
    icon: Clock3,
    eyebrow: "After-hours surprise",
    title: "Midnight delivery slot",
    copy: "Make the moment memorable with a dedicated 11:30 PM–12:15 AM surprise slot.",
  },
];

const products = [
  {
    file: "a0f7eb9d029c45030daf06ac89ce96d1d6fb2fd6-4030x4076.webp",
    label: "Best value",
    title: "Sweetheart Bloom",
    copy: "7 fresh red roses with green fillers",
    price: "Rs. 1,799",
    slug: "sweetheart-bloom",
  },
  {
    file: "3adcea6f2309a235f104143cd6f5b5eafbc17658-4030x4076.webp",
    label: "Under Rs. 2,500",
    title: "Midnight Romance",
    copy: "Fresh red roses with green fillers",
    price: "Rs. 2,499",
    slug: "midnight-romance",
  },
  {
    file: "95adad1469c2b03043496407aa0470fefd6493fa-500x500.webp",
    label: "Bestseller",
    title: "Aesthetic Bloom",
    copy: "7 fresh roses in kraft wrapping",
    price: "Rs. 6,499",
    slug: "aesthetic-bloom",
  },
  {
    file: "faca8c5b4a089fa86fd2c739f636f25d59f242b6-500x500.webp",
    label: "Sunflowers",
    title: "Bold Harmony",
    copy: "6 fresh sunflowers with gypsophila",
    price: "Rs. 6,499",
    slug: "bold-harmony",
  },
  {
    file: "f6aabc596dbf6bdc7310a5de88fbb442acc27490-500x500.webp",
    label: "Red & pink",
    title: "Blush Aura",
    copy: "Fresh red and pink roses",
    price: "Rs. 7,499",
    slug: "blush-aura",
  },
  {
    file: "3011d2b3d8f90ef88c22743ae39085f53e693bb3-500x500.webp",
    label: "Bestseller",
    title: "Velvet Crush",
    copy: "Fresh red roses with baby's breath",
    price: "Rs. 9,999",
    slug: "velvet-crush",
  },
  {
    file: "3caa000f4c26cbb8a14064cdc6fffe3b4e66401a-2480x2508.webp",
    label: "With chocolates",
    title: "Golden Glow",
    copy: "Fresh sunflowers with premium chocolates",
    price: "Rs. 9,949",
    slug: "golden-glow",
  },
  {
    file: "4848235cc0ed0cb24eb55b51a46350ed09a6f1d0-4030x4076.webp",
    label: "Midnight favourite",
    title: "Midnight Love",
    copy: "Fresh red roses with a heart balloon",
    price: "Rs. 12,499",
    slug: "midnight-love",
  },
];

/* Approved verbatim customer reviews (Tayyaba's wording corrected to the
 * approved text — the ZIP's version was not verbatim). */
const reviews = [
  {
    name: "Mian Waiz",
    item: "Chocolate Bouquet",
    text: "Ordered a chocolate bouquet — excellent quality and beautiful presentation!",
  },
  {
    name: "Shah Rajpoot",
    item: "Red Rose Bouquet",
    text: "I ordered a red rose bouquet today — honestly, I had a really good experience!",
  },
  {
    name: "Tayyaba",
    item: "Lahore",
    text: "Your service was professional and reasonably priced. Highly satisfied and would definitely recommend!",
  },
];

const occasions = [
  {
    icon: Gift,
    title: "Birthday",
    copy: "A beautiful surprise they will remember.",
  },
  {
    icon: Heart,
    title: "Anniversary",
    copy: "Say it with flowers, even from far away.",
  },
  {
    icon: Sparkles,
    title: "Proposal",
    copy: "Set the scene with something unforgettable.",
  },
  {
    icon: Flower2,
    title: "Apology",
    copy: "A thoughtful way to start the conversation.",
  },
  {
    icon: CakeSlice,
    title: "Congratulations",
    copy: "Celebrate their next big milestone.",
  },
  {
    icon: Clock3,
    title: "Midnight surprise",
    copy: "Be the first to make their day special.",
  },
];

const faqs = [
  {
    question: "How quickly can you deliver flowers in Lahore?",
    answer:
      "Same-day delivery is available, usually within 2–5 hours, depending on the area and order time.",
  },
  {
    question: "Do you offer free delivery?",
    answer:
      "Yes. Free delivery is available across the listed Lahore delivery areas. If you are outside them, message us and we will confirm availability.",
  },
  {
    question: "Can I see the bouquet before delivery?",
    answer:
      "Yes. We share a photo of your finished bouquet on WhatsApp before dispatch so you can approve it.",
  },
  {
    question: "Do you deliver at midnight?",
    answer:
      "Yes. Our midnight surprise slot runs from 11:30 PM to 12:15 AM. Book before 8 PM.",
  },
  {
    question: "How can I pay?",
    answer:
      "Cash on Delivery, bank transfer, JazzCash, EasyPaisa, or any international debit/credit card.",
  },
  {
    question: "What is the starting price?",
    answer:
      "Hand-tied bouquets start from Rs. 1,239. Your final price depends on the flowers, size and extras you choose.",
  },
  {
    question: "Can customers from overseas order flowers?",
    answer:
      "Yes. Customers in the UK, USA, UAE and elsewhere can order for delivery to someone in Lahore and pay by card.",
  },
];

type GtagWindow = Window & {
  gtag?: (...args: unknown[]) => void;
};

function track(
  action: "whatsapp_click" | "phone_call" | "generate_lead",
  params: Record<string, string> = {}
) {
  try {
    const w = window as GtagWindow;
    w.gtag?.("event", action, { page: "ads_landing_page", ...params });
  } catch {
    /* analytics must never block the customer */
  }
}

/* Who sent this visitor? Google Ads adds gclid/gbraid/wbraid automatically. */
function computeAdReference(): string {
  try {
    const p = new URLSearchParams(window.location.search);
    if (p.get("gclid") || p.get("gbraid") || p.get("wbraid"))
      return "Google Ad";
    const source = p.get("utm_source");
    if (source)
      return [source, p.get("utm_campaign")].filter(Boolean).join(" / ");
  } catch {
    /* fall through to the default */
  }
  return "Ads landing page";
}

function scrollToOrder() {
  document.getElementById("order")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollToBouquets() {
  document
    .getElementById("bouquets")
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  // Default ref line (also the SSR value) — corrected after mount so the
  // first client render matches the server render (no hydration mismatch).
  const [adRef, setAdRef] = useState("Ads landing page");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    recipient: "",
    area: "",
    occasion: "Birthday",
    time: "",
    request: "",
    budget: "",
  });

  useEffect(() => {
    setAdRef(computeAdReference());
  }, []);

  /* Every WhatsApp message carries a reference line so orders from ads can be told apart. */
  function whatsappLink(message: string) {
    const fullMessage = `${message}\n\n(Ref: ${adRef})`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(fullMessage)}`;
  }

  const handleOrderSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const orderMessage = [
      "Hello Lahore Bouquet! I want to place an order.",
      `My name: ${form.name}`,
      `My WhatsApp number: ${form.phone}`,
      `Recipient: ${form.recipient}`,
      `Delivery area: ${form.area}`,
      `Occasion: ${form.occasion}`,
      `Preferred delivery time: ${form.time || "Please advise"}`,
      `Bouquet / gift request: ${form.request || "Please suggest something beautiful"}`,
      `Budget: ${form.budget || "Please suggest options"}`,
    ].join("\n");
    track("generate_lead", {
      action: "order_form_submit",
      occasion: form.occasion,
    });
    setSubmitted(true);
    window.location.href = whatsappLink(orderMessage);
  };

  return (
    <div className="lb-site">
      <style>{LANDING_CSS}</style>
      <link rel="preconnect" href="https://cdn.sanity.io" crossOrigin="anonymous" />
      <link rel="preload" as="image" href={HERO_IMAGE} />

      <div className="announcement-bar">
        <div className="lb-container announcement-inner">
          <span className="announcement-dot" />
          <span>Same-day flower, cake &amp; gift delivery across Lahore</span>
          <span className="announcement-divider" />
          <strong>Free delivery in listed areas</strong>
        </div>
      </div>

      <header className="site-header">
        <div className="lb-container header-inner">
          <a className="wordmark" href="#top" aria-label="Lahore Bouquet home">
            <span className="wordmark-mark">
              <Flower2 size={18} strokeWidth={1.7} />
            </span>
            <span>
              <b>Lahore</b>
              <em>Bouquet</em>
            </span>
          </a>
          <div className="header-right">
            <span className="header-note">Hand-tied fresh in Lahore</span>
            <a
              className="header-call"
              href="tel:+923104225974"
              onClick={() => track("phone_call", { placement: "header" })}
            >
              <Phone size={16} /> {WHATSAPP_LABEL}
            </a>
          </div>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="lb-container hero-grid">
            <div className="hero-copy">
              <p className="kicker">
                <span /> Lahore’s fresh flower delivery studio
              </p>
              <h1>
                Send fresh flowers across Lahore <i>— same day.</i>
              </h1>
              <p className="hero-lede">
                Hand-tied bouquets, cakes and gifts delivered in 2–5 hours —
                with a photo on WhatsApp before dispatch.
              </p>
              <div className="hero-actions">
                <WhatsAppButton
                  href={whatsappLink(
                    "Hello Lahore Bouquet! I would like to order fresh flowers in Lahore."
                  )}
                  label="Order on WhatsApp"
                  eventParams={{ placement: "hero" }}
                  className="button button-primary"
                >
                  <MessageCircle size={18} /> Order on WhatsApp{" "}
                  <ArrowUpRight size={17} />
                </WhatsAppButton>
                <button className="button button-ghost" onClick={scrollToBouquets}>
                  See bouquets &amp; prices <ArrowRight size={17} />
                </button>
              </div>
              <p className="urgency">
                <Clock3 size={15} /> Order before 4:00 PM for same-day
                delivery.
              </p>
              <div className="hero-trust">
                <span>
                  <Check size={14} /> Free delivery in Lahore
                </span>
                <span>
                  <Check size={14} /> Photo before dispatch
                </span>
                <span>
                  <Check size={14} /> Cash on Delivery
                </span>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-image-wrap">
                <img
                  src={HERO_IMAGE}
                  alt="Hand-tied red and blush rose bouquet prepared for delivery in Lahore"
                />
                <div className="hero-image-stamp">
                  <span>01</span>
                  <small>
                    made
                    <br />
                    with care
                  </small>
                </div>
              </div>
              <div className="floating-card floating-card-proof">
                <span className="floating-icon">
                  <Camera size={17} />
                </span>
                <span>
                  <b>Photo proof</b>
                  <small>before dispatch</small>
                </span>
              </div>
              <div className="floating-card floating-card-price">
                <span className="price-label">Hand-tied from</span>
                <b>Rs. 1,239</b>
              </div>
            </div>
          </div>
          <div className="hero-bloom bloom-one" />
          <div className="hero-bloom bloom-two" />
        </section>

        <section className="proof-strip">
          <div className="lb-container proof-grid">
            <div>
              <Truck size={22} />
              <span>
                <b>Free 2–5 hour delivery</b>
                <small>across listed Lahore areas</small>
              </span>
            </div>
            <div>
              <Camera size={22} />
              <span>
                <b>See it before it goes</b>
                <small>photo on WhatsApp</small>
              </span>
            </div>
            <div>
              <Clock3 size={22} />
              <span>
                <b>Midnight surprises</b>
                <small>11:30 PM–12:15 AM</small>
              </span>
            </div>
            <div>
              <Banknote size={22} />
              <span>
                <b>Cash on Delivery</b>
                <small>JazzCash, EasyPaisa, cards</small>
              </span>
            </div>
          </div>
        </section>

        <section className="products-section section-pad" id="bouquets">
          <div className="lb-container">
            <div className="section-heading-row">
              <div>
                <p className="kicker">
                  <span /> Our bouquets, real photos
                </p>
                <h2>
                  Pick a bouquet,
                  <br />
                  <i>we deliver today.</i>
                </h2>
              </div>
              <a href="/bouquets" className="text-link" target="_blank" rel="noreferrer">
                See all bouquets <ArrowUpRight size={16} />
              </a>
            </div>
            <div className="product-grid">
              {products.map((product, index) => (
                <article className="product-card" key={product.slug}>
                  <div className="product-image">
                    <img
                      src={photo(product.file)}
                      srcSet={`${photo(product.file, 400)} 400w, ${photo(product.file, 640)} 640w`}
                      sizes="(max-width: 720px) 50vw, 25vw"
                      alt={`${product.title}: ${product.copy.toLowerCase()}, hand-tied by Lahore Bouquet`}
                      width={640}
                      height={640}
                      loading={index < 2 ? "eager" : "lazy"}
                      decoding="async"
                    />
                    <span>{product.label}</span>
                  </div>
                  <div className="product-body">
                    <h3>{product.title}</h3>
                    <p>{product.copy}</p>
                    <strong className="product-price">{product.price}</strong>
                    <WhatsAppButton
                      href={whatsappLink(
                        `Hello Lahore Bouquet! I want to order ${product.title} (${product.price}).`
                      )}
                      label={`Order ${product.title} on WhatsApp`}
                      eventParams={{
                        placement: "product",
                        product: product.title,
                      }}
                      className="product-order"
                    >
                      <MessageCircle size={15} /> Order on WhatsApp
                    </WhatsAppButton>
                  </div>
                </article>
              ))}
            </div>
            <div className="product-note">
              <p>
                Every bouquet is hand-tied fresh on the day, and you approve a
                photo before dispatch. Flowers may vary slightly with the
                season.
              </p>
              <button className="button button-ghost" onClick={scrollToOrder}>
                Tell us your budget instead <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </section>

        <section className="reviews-section section-pad section-tint">
          <div className="lb-container">
            <div className="center-heading">
              <p className="kicker">
                <span /> Loved across Lahore
              </p>
              <h2>
                What our customers <i>say.</i>
              </h2>
            </div>
            <div className="review-grid">
              {reviews.map((review) => (
                <figure className="review-card" key={review.name}>
                  <div
                    className="review-stars"
                    aria-label="5 out of 5 stars"
                  >
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                  <blockquote>“{review.text}”</blockquote>
                  <figcaption>
                    <b>{review.name}</b>
                    <small>{review.item}</small>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="order-section section-pad" id="order">
          <div className="lb-container order-grid">
            <div className="section-intro">
              <p className="kicker">
                <span /> One easy WhatsApp order
              </p>
              <h2>
                Tell us the moment.
                <br />
                <i>We’ll make it beautiful.</i>
              </h2>
              <p>
                Share a few details and our florist will recommend the right
                bouquet for your occasion, budget and delivery time.
              </p>
              <div className="order-assurance">
                <span>
                  <Check size={14} />
                </span>
                <p>
                  <b>No guesswork.</b>
                  <br />
                  You approve a photo of the actual bouquet before dispatch.
                </p>
              </div>
            </div>
            <form className="order-form" onSubmit={handleOrderSubmit}>
              <div className="form-heading">
                <span>Quick order</span>
                <small>Usually replied to within minutes</small>
              </div>
              <div className="form-row">
                <label>
                  Your name
                  <input
                    required
                    value={form.name}
                    onChange={(e) =>
                      setForm({ ...form, name: e.target.value })
                    }
                    placeholder="e.g. Ayesha"
                  />
                </label>
                <label>
                  WhatsApp number
                  <input
                    required
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                    placeholder="03XX-XXXXXXX"
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Recipient’s name
                  <input
                    required
                    value={form.recipient}
                    onChange={(e) =>
                      setForm({ ...form, recipient: e.target.value })
                    }
                    placeholder="Who are we surprising?"
                  />
                </label>
                <label>
                  Delivery area
                  <input
                    required
                    value={form.area}
                    onChange={(e) =>
                      setForm({ ...form, area: e.target.value })
                    }
                    placeholder="DHA, Gulberg, Johar Town..."
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Occasion
                  <select
                    value={form.occasion}
                    onChange={(e) =>
                      setForm({ ...form, occasion: e.target.value })
                    }
                  >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Proposal</option>
                    <option>Apology</option>
                    <option>Congratulations</option>
                    <option>Just because</option>
                    <option>Wedding</option>
                  </select>
                </label>
                <label>
                  Preferred time
                  <input
                    type="text"
                    value={form.time}
                    onChange={(e) =>
                      setForm({ ...form, time: e.target.value })
                    }
                    placeholder="Today, evening, midnight..."
                  />
                </label>
              </div>
              <div className="form-row">
                <label>
                  Bouquet or gift idea
                  <input
                    value={form.request}
                    onChange={(e) =>
                      setForm({ ...form, request: e.target.value })
                    }
                    placeholder="Red roses, cake with flowers..."
                  />
                </label>
                <label>
                  Approx. budget
                  <input
                    value={form.budget}
                    onChange={(e) =>
                      setForm({ ...form, budget: e.target.value })
                    }
                    placeholder="e.g. Rs. 3,000"
                  />
                </label>
              </div>
              <button className="button button-form" type="submit">
                <MessageCircle size={18} />{" "}
                {submitted ? "Opening WhatsApp..." : "Get my bouquet quote"}{" "}
                <ArrowUpRight size={17} />
              </button>
              <p className="form-footnote">
                <ShieldCheck size={14} /> Your details open securely in
                WhatsApp. No spam.
              </p>
            </form>
          </div>
        </section>

        <section className="benefits-section section-pad section-tint">
          <div className="lb-container">
            <div className="center-heading">
              <p className="kicker">
                <span /> The Lahore Bouquet difference
              </p>
              <h2>
                A little more care in <i>every stem.</i>
              </h2>
              <p>When the moment matters, the details matter too.</p>
            </div>
            <div className="benefit-grid">
              {benefits.map(({ icon: Icon, eyebrow, title, copy }) => (
                <article className="benefit-card" key={title}>
                  <div className="line-icon">
                    <Icon size={22} />
                  </div>
                  <p className="card-eyebrow">{eyebrow}</p>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="occasion-section section-pad section-dark">
          <div className="lb-container occasion-layout">
            <div className="occasion-intro">
              <p className="kicker kicker-light">
                <span /> Whatever the occasion
              </p>
              <h2>
                Say it without
                <br />
                <i>saying too much.</i>
              </h2>
              <p>
                From a quiet apology to a midnight celebration, choose the
                feeling and we’ll help you send it beautifully.
              </p>
              <WhatsAppButton
                href={whatsappLink(
                  "Hello Lahore Bouquet! Please suggest a bouquet for my occasion."
                )}
                label="Ask our florist on WhatsApp"
                eventParams={{ placement: "occasion_section" }}
                className="button button-light"
              >
                Ask our florist <ArrowUpRight size={17} />
              </WhatsAppButton>
            </div>
            <div className="occasion-grid">
              {occasions.map(({ icon: Icon, title, copy }) => (
                <WhatsAppButton
                  key={title}
                  href={whatsappLink(
                    `Hello Lahore Bouquet! I need flowers for this occasion: ${title}.`
                  )}
                  label={`Order flowers for ${title}`}
                  eventParams={{ placement: "occasion", occasion: title }}
                  className="occasion-card"
                >
                  <span>
                    <Icon size={20} />
                  </span>
                  <b>{title}</b>
                  <small>{copy}</small>
                  <ArrowUpRight className="occasion-arrow" size={15} />
                </WhatsAppButton>
              ))}
            </div>
          </div>
        </section>

        <section className="delivery-section section-pad">
          <div className="lb-container delivery-grid">
            <div className="delivery-art">
              <div className="delivery-circle">
                <MapPin size={35} />
                <span>
                  LAHORE
                  <br />
                  <b>DELIVERY</b>
                </span>
              </div>
              <div className="delivery-sticker">
                free delivery
                <br />
                <b>across listed areas</b>
              </div>
            </div>
            <div className="delivery-copy">
              <p className="kicker">
                <span /> Made in Lahore, sent with heart
              </p>
              <h2>
                Beautifully delivered
                <br />
                <i>across the city.</i>
              </h2>
              <p>
                We deliver across DHA Phases 1–9, Gulberg I–III, Bahria Town,
                Model Town, Johar Town, Cantt, Askari, Wapda Town, Township,
                Faisal Town and surrounding Lahore areas.
              </p>
              <div className="delivery-points">
                <span>
                  <Check size={15} /> Free delivery across listed areas
                </span>
                <span>
                  <Check size={15} /> Outside the list? Ask us on WhatsApp
                </span>
                <span>
                  <Check size={15} /> Midnight slot: 11:30 PM–12:15 AM
                </span>
              </div>
              <WhatsAppButton
                href={whatsappLink(
                  "Hello Lahore Bouquet! Can you deliver to my area in Lahore?"
                )}
                label="Check my delivery area on WhatsApp"
                eventParams={{ placement: "delivery" }}
                className="text-link"
              >
                Check my delivery area <ArrowUpRight size={16} />
              </WhatsAppButton>
            </div>
          </div>
        </section>

        <section className="process-section section-pad section-tint">
          <div className="lb-container">
            <div className="center-heading">
              <p className="kicker">
                <span /> From your thought to their door
              </p>
              <h2>
                Simple, personal, <i>reliable.</i>
              </h2>
            </div>
            <div className="process-grid">
              <div>
                <span className="process-number">01</span>
                <h3>Choose your bouquet</h3>
                <p>
                  Tell us the occasion, flowers and budget. We’ll share the
                  best options.
                </p>
              </div>
              <div>
                <span className="process-number">02</span>
                <h3>Confirm on WhatsApp</h3>
                <p>
                  Share the recipient’s address, phone number and your
                  personal card message.
                </p>
              </div>
              <div>
                <span className="process-number">03</span>
                <h3>Approve before dispatch</h3>
                <p>
                  We send a photo of the finished bouquet, then deliver it
                  with care.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section section-pad">
          <div className="lb-container faq-layout">
            <div className="faq-intro">
              <p className="kicker">
                <span /> Questions, answered
              </p>
              <h2>
                Everything you need
                <br />
                <i>to know.</i>
              </h2>
              <p>
                Still unsure? Message us directly and our team will guide you.
              </p>
              <WhatsAppButton
                href={whatsappLink(
                  "Hello Lahore Bouquet! I have a question about ordering."
                )}
                label="Ask on WhatsApp"
                eventParams={{ placement: "faq" }}
                className="text-link"
              >
                Ask on WhatsApp <ArrowUpRight size={16} />
              </WhatsAppButton>
            </div>
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div
                  className={`faq-item ${openFaq === index ? "is-open" : ""}`}
                  key={faq.question}
                >
                  <button
                    onClick={() =>
                      setOpenFaq(openFaq === index ? -1 : index)
                    }
                    aria-expanded={openFaq === index}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown size={18} />
                  </button>
                  {openFaq === index && <p>{faq.answer}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="lb-container final-cta-inner">
            <div>
              <p className="kicker kicker-light">
                <span /> Make someone’s day
              </p>
              <h2>
                Send something
                <br />
                <i>beautiful today.</i>
              </h2>
            </div>
            <div className="final-cta-actions">
              <p>
                Fresh flowers, thoughtful gifts and reliable delivery across
                Lahore.
              </p>
              <WhatsAppButton
                href={whatsappLink(
                  "Hello Lahore Bouquet! I would like to order something beautiful today."
                )}
                label="Order on WhatsApp"
                eventParams={{ placement: "final_cta" }}
                className="button button-light"
              >
                <MessageCircle size={18} /> Order on WhatsApp{" "}
                <ArrowUpRight size={17} />
              </WhatsAppButton>
              <a
                className="final-phone"
                href="tel:+923104225974"
                onClick={() => track("phone_call", { placement: "final_cta" })}
              >
                <Phone size={16} /> Call {WHATSAPP_LABEL}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="lb-container footer-grid">
          <div>
            <a className="wordmark wordmark-footer" href="#top">
              <span className="wordmark-mark">
                <Flower2 size={18} strokeWidth={1.7} />
              </span>
              <span>
                <b>Lahore</b>
                <em>Bouquet</em>
              </span>
            </a>
            <p>Fresh flowers, cakes and gifts delivered across Lahore.</p>
          </div>
          <div>
            <p className="footer-label">Talk to us</p>
            <a href="tel:+923104225974">{WHATSAPP_LABEL}</a>
            <a href="mailto:lahorebouquet@gmail.com">
              lahorebouquet@gmail.com
            </a>
          </div>
          <div>
            <p className="footer-label">Hours</p>
            <p>
              Monday–Sunday
              <br />
              9:00 AM–1:00 AM PKT
            </p>
          </div>
          <div>
            <p className="footer-label">Based in</p>
            <p>
              Lahore, Punjab
              <br />
              Pakistan
            </p>
          </div>
        </div>
        <div className="lb-container footer-bottom">
          <span>© {new Date().getFullYear()} Lahore Bouquet</span>
          <span>Freshly arranged. Thoughtfully delivered.</span>
          <a
            href="https://lahorebouquet.com"
            target="_blank"
            rel="noreferrer"
          >
            lahorebouquet.com <ArrowUpRight size={13} />
          </a>
        </div>
      </footer>

      <div className="mobile-sticky-cta">
        <WhatsAppButton
          href={whatsappLink(
            "Hello Lahore Bouquet! I would like to order flowers in Lahore."
          )}
          label="Order on WhatsApp"
          eventParams={{ placement: "mobile_sticky" }}
        >
          <MessageCircle size={18} /> WhatsApp order
        </WhatsAppButton>
        <a
          href="tel:+923104225974"
          onClick={() => track("phone_call", { placement: "mobile_sticky" })}
        >
          <Phone size={17} /> Call now
        </a>
      </div>
    </div>
  );
}
