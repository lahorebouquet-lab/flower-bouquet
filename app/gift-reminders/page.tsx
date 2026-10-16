import type { Metadata } from "next";
import { SITE_URL } from "@/lib/business";
import GiftReminderForm from "./GiftReminderForm";

export const metadata: Metadata = {
  title: { absolute: "Gift Reminders | Never Miss a Birthday | Lahore Bouquet" },
  description:
    "Save birthdays & anniversaries — we'll remind you on WhatsApp 2 days before, with bouquet suggestions. Free gift reminder service in Lahore.",
  alternates: { canonical: `${SITE_URL}/gift-reminders` },
  openGraph: {
    title: "Gift Reminders | Never Miss a Birthday | Lahore Bouquet",
    description:
      "Save birthdays & anniversaries — we'll remind you on WhatsApp 2 days before, with bouquet suggestions. Free service.",
    url: `${SITE_URL}/gift-reminders`,
    siteName: "Lahore Bouquet",
    locale: "en_PK",
    type: "website",
    images: [{ url: `${SITE_URL}/og-image.jpg`, width: 1200, height: 630, alt: "Gift Reminders" }],
  },
};

export default function GiftRemindersPage() {
  return (
    <main className="min-h-screen bg-[#F8F3EA] text-[#2A2A2A]">
      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#8B1E2D] text-white text-[11px] font-bold tracking-widest uppercase mb-4">
            Free Service
          </span>
          <h1 className="font-playfair text-3xl sm:text-4xl font-bold text-[#0B0B0B]">
            Never Miss a Birthday Again
          </h1>
          <p className="text-sm text-[#2A2A2A] mt-3 leading-relaxed max-w-lg mx-auto">
            Save your loved ones&apos; birthdays & anniversaries. We&apos;ll send you a{" "}
            <strong>WhatsApp reminder 2 days before</strong> — with handpicked bouquet
            suggestions, so your gift always arrives on time.
          </p>
        </div>

        <GiftReminderForm />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center">
          {[
            { t: "Save the date", d: "Add birthdays & anniversaries in 30 seconds" },
            { t: "Get reminded", d: "WhatsApp reminder 2 days before the occasion" },
            { t: "Order in 1 tap", d: "Reply to order — same-day delivery in Lahore" },
          ].map((s) => (
            <div key={s.t} className="bg-white rounded-2xl border border-[#E5DED2] p-4">
              <div className="font-bold text-[#0B0B0B] text-sm">{s.t}</div>
              <div className="text-[11px] text-[#636363] mt-1">{s.d}</div>
            </div>
          ))}
        </div>

        {/* How it works — detailed */}
        <div className="mt-10 bg-white rounded-2xl border border-[#E5DED2] p-6 sm:p-8 space-y-4">
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B] text-center">How Gift Reminders Work</h2>
          <div className="text-sm text-[#2A2A2A] leading-relaxed space-y-3">
            <p>
              Life gets busy, and birthdays slip by. Our free gift reminder service makes sure that never happens again. Save the birthdays and anniversaries that matter — your mother&apos;s birthday, your anniversary, your best friend&apos;s nikkah — using the simple form above. It takes less than 30 seconds per date.
            </p>
            <p>
              Two days before each occasion, you&apos;ll receive a WhatsApp message from Lahore Bouquet with a friendly reminder and handpicked bouquet suggestions suited to the occasion and your budget. Just reply to the message to place your order — no need to browse the website or remember what to buy.
            </p>
            <p>
              Your gift is then prepared fresh and delivered across Lahore the same day, usually within 2 to 5 hours, with free delivery. You&apos;ll get a photo on WhatsApp for approval before the bouquet leaves our studio, so what arrives is exactly what you approved. The service is completely free — you only pay if you choose to order.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-10 bg-white rounded-2xl border border-[#E5DED2] p-6 sm:p-8 space-y-6">
          <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B] text-center">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#2A2A2A] leading-relaxed">
            <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
              <h3 className="font-semibold text-[#0B0B0B] text-sm">Is the gift reminder service free?</h3>
              <p>Yes, completely free. You only pay if you decide to order a bouquet after receiving a reminder.</p>
            </div>
            <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
              <h3 className="font-semibold text-[#0B0B0B] text-sm">How will I receive the reminder?</h3>
              <p>On WhatsApp, 2 days before the occasion — with bouquet suggestions matched to the event and your budget.</p>
            </div>
            <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
              <h3 className="font-semibold text-[#0B0B0B] text-sm">Can I save multiple birthdays?</h3>
              <p>Yes. Save as many birthdays and anniversaries as you like — you&apos;ll get a separate reminder for each one.</p>
            </div>
            <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
              <h3 className="font-semibold text-[#0B0B0B] text-sm">Do I have to order from Lahore Bouquet?</h3>
              <p>No. The reminder is a free nudge with suggestions — there&apos;s no obligation to order. But if you do, same-day delivery across Lahore is available.</p>
            </div>
            <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
              <h3 className="font-semibold text-[#0B0B0B] text-sm">How do I remove a saved reminder?</h3>
              <p>Just message us on WhatsApp at 0310-4225974 and we&apos;ll delete any reminder for you right away.</p>
            </div>
            <div className="space-y-1.5 p-4 rounded-xl bg-[#F8F3EA] border border-[#E5DED2]">
              <h3 className="font-semibold text-[#0B0B0B] text-sm">Will my dates be kept private?</h3>
              <p>Yes. Your saved dates are only used to send you reminders. We never share your personal information — see our privacy policy for details.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
