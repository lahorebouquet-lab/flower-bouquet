/**
 * Lahore Bouquet — Single source of truth for delivery policy.
 *
 * Used everywhere: product page, Bag, checkout steps, FAQ text + JSON-LD,
 * /delivery-areas and /prices pages.
 *
 * Current policy (owner-confirmed 2026-10-06): FREE express delivery across
 * all listed Lahore areas. "Other Lahore Area" = fee confirmed on WhatsApp.
 */

export interface DeliveryAreaFee {
  area: string;
  /** Delivery fee in PKR. null = "Fee confirmed on WhatsApp". */
  fee: number | null;
}

export const DELIVERY_AREA_FEES: DeliveryAreaFee[] = [
  { area: "DHA Phase 1-4, Lahore", fee: 0 },
  { area: "DHA Phase 5-6, Lahore", fee: 0 },
  { area: "DHA Phase 7-9, Lahore", fee: 0 },
  { area: "Gulberg (I, II, III), Lahore", fee: 0 },
  { area: "Bahria Town, Lahore", fee: 0 },
  { area: "Model Town, Lahore", fee: 0 },
  { area: "Johar Town, Lahore", fee: 0 },
  { area: "Cantt & Cavalry Ground, Lahore", fee: 0 },
  { area: "Askari (1-11), Lahore", fee: 0 },
  { area: "Wapda Town, Lahore", fee: 0 },
  { area: "Township, Lahore", fee: 0 },
  { area: "Faisal Town, Lahore", fee: 0 },
  { area: "Garden Town, Lahore", fee: 0 },
  { area: "Valencia Town, Lahore", fee: 0 },
  { area: "Allama Iqbal Town, Lahore", fee: 0 },
  { area: "Shadman, Lahore", fee: 0 },
  { area: "Lake City, Lahore", fee: 0 },
  { area: "Other Lahore Area", fee: null },
];

/** Optional order-value threshold for free delivery. null = no threshold. */
export const FREE_DELIVERY_THRESHOLD: number | null = null;

export function getDeliveryFee(area: string): { fee: number | null; label: string } {
  const found = DELIVERY_AREA_FEES.find((a) => a.area === area);
  if (!found || found.fee === null) {
    return { fee: null, label: "Fee confirmed on WhatsApp" };
  }
  if (found.fee === 0) {
    return { fee: 0, label: "FREE" };
  }
  return { fee: found.fee, label: `Rs. ${found.fee.toLocaleString()}` };
}

/** Short policy line for UI. */
export const DELIVERY_POLICY_LINE = "Free express delivery across all listed Lahore areas";

/* ------------------------------------------------------------------ */
/* Delivery slots with cutoff logic                                     */
/* ------------------------------------------------------------------ */

export interface DeliverySlot {
  id: string;
  label: string;
  time: string;
  icon: string;
  /** Slot start in 24h Lahore time — cutoff = start minus CUTOFF_HOURS. */
  startHour: number;
  startMinute: number;
}

/** Hours before a slot starts after which it can't be booked for today. */
export const SLOT_CUTOFF_HOURS = 2;

export const DELIVERY_SLOTS: DeliverySlot[] = [
  { id: "morning", label: "Morning Delivery", time: "10:00 AM – 1:00 PM", icon: "🌅", startHour: 10, startMinute: 0 },
  { id: "afternoon", label: "Afternoon Delivery", time: "1:00 PM – 5:00 PM", icon: "☀️", startHour: 13, startMinute: 0 },
  { id: "evening", label: "Evening Delivery", time: "5:00 PM – 9:00 PM", icon: "🌆", startHour: 17, startMinute: 0 },
  { id: "midnight", label: "Midnight Surprise Slot", time: "11:30 PM – 12:15 AM", icon: "🌙", startHour: 23, startMinute: 30 },
];

/* ------------------------------------------------------------------ */
/* Date helpers (Asia/Karachi)                                          */
/* ------------------------------------------------------------------ */

/** Current date/time in Lahore. */
export function getLahoreNow(): Date {
  return new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Karachi" }));
}

export function toISODate(d: Date): string {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

/** Today's date in Lahore as YYYY-MM-DD. */
export function getTodayISO(): string {
  return toISODate(getLahoreNow());
}

/** Max bookable date (30 days ahead) as YYYY-MM-DD. */
export function getMaxDateISO(): string {
  const d = getLahoreNow();
  d.setDate(d.getDate() + 30);
  return toISODate(d);
}

/** "2026-10-07" -> "Wed, 7 Oct 2026". Falls back to the raw value. */
export function formatDeliveryDate(iso: string): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso);
  if (!m) return iso;
  const y = Number(m[1]);
  const mo = Number(m[2]);
  const d = Number(m[3]);
  const date = new Date(y, mo - 1, d);
  if (isNaN(date.getTime())) return iso;
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${days[date.getDay()]}, ${d} ${months[mo - 1]} ${y}`;
}

/** Is a slot still bookable for today (Lahore time, cutoff = 2h before start)? */
export function isSlotAvailableToday(slot: DeliverySlot, now?: Date): boolean {
  const lahoreNow = now ?? getLahoreNow();
  const cutoff = new Date(lahoreNow);
  cutoff.setHours(slot.startHour - SLOT_CUTOFF_HOURS, slot.startMinute, 0, 0);
  return lahoreNow.getTime() < cutoff.getTime();
}

/** Human-readable order-by time for today's cutoff, e.g. "3:00 PM". */
export function getSlotCutoffLabel(slot: DeliverySlot): string {
  const h24 = slot.startHour - SLOT_CUTOFF_HOURS;
  const h = h24 % 12 === 0 ? 12 : h24 % 12;
  const ampm = h24 < 12 ? "AM" : "PM";
  const mm = String(slot.startMinute).padStart(2, "0");
  return `${h}:${mm} ${ampm}`;
}

/** Slots are only restricted for today — all slots available on future dates. */
export function isSlotAvailableOnDate(slotId: string, isoDate: string, now?: Date): boolean {
  if (isoDate !== getTodayISO()) return true;
  const slot = DELIVERY_SLOTS.find((s) => s.id === slotId);
  return slot ? isSlotAvailableToday(slot, now) : true;
}
