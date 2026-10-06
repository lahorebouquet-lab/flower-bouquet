"use client";

import React, { useState } from "react";
import { Bell, CheckCircle2 } from "lucide-react";

const OCCASIONS = [
  { value: "birthday", label: "Birthday" },
  { value: "anniversary", label: "Anniversary" },
  { value: "mothers-day", label: "Mother's Day" },
  { value: "fathers-day", label: "Father's Day" },
  { value: "valentines-day", label: "Valentine's Day" },
  { value: "other", label: "Other" },
];

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

export default function GiftReminderForm() {
  const [customerName, setCustomerName] = useState("");
  const [phone, setPhone] = useState("");
  const [personName, setPersonName] = useState("");
  const [occasion, setOccasion] = useState("birthday");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!customerName.trim() || !phone.trim() || !personName.trim() || !month || !day) {
      setError("Please fill all fields.");
      return;
    }
    setSaving(true);
    try {
      const res = await fetch("/api/gift-reminders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: customerName.trim(),
          phone: phone.trim(),
          personName: personName.trim(),
          occasion,
          month: Number(month),
          day: Number(day),
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }
      setDone(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  if (done) {
    return (
      <div className="bg-white rounded-3xl border border-[#C6A15B]/40 p-8 text-center space-y-3">
        <CheckCircle2 className="w-12 h-12 text-green-700 mx-auto" />
        <h2 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Reminder Saved!</h2>
        <p className="text-sm text-[#2A2A2A]">
          We&apos;ll WhatsApp you 2 days before {personName}&apos;s{" "}
          {OCCASIONS.find((o) => o.value === occasion)?.label.toLowerCase()} with bouquet
          suggestions. You&apos;ll never miss it again!
        </p>
        <button
          onClick={() => {
            setDone(false);
            setPersonName("");
            setMonth("");
            setDay("");
          }}
          className="text-xs font-bold text-[#8B1E2D] hover:underline"
        >
          + Add another reminder
        </button>
      </div>
    );
  }

  const inputCls =
    "w-full px-4 py-3 rounded-xl border border-[#E5DED2] bg-white text-sm focus:outline-none focus:border-[#8B1E2D]";

  return (
    <form onSubmit={submit} className="bg-white rounded-3xl border border-[#C6A15B]/40 p-6 sm:p-8 space-y-4 shadow-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold text-[#0B0B0B]">Your Name</label>
          <input value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="e.g. Ahmed Khan" className={inputCls} />
        </div>
        <div>
          <label className="text-xs font-bold text-[#0B0B0B]">Your WhatsApp Number</label>
          <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="03XX-XXXXXXX" inputMode="tel" className={inputCls} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold text-[#0B0B0B]">Whose occasion is it?</label>
          <input value={personName} onChange={(e) => setPersonName(e.target.value)} placeholder="e.g. Mama, Sara, Best friend" className={inputCls} />
        </div>
        <div>
          <label className="text-xs font-bold text-[#0B0B0B]">Occasion</label>
          <select value={occasion} onChange={(e) => setOccasion(e.target.value)} className={inputCls}>
            {OCCASIONS.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-xs font-bold text-[#0B0B0B]">Month</label>
          <select value={month} onChange={(e) => setMonth(e.target.value)} className={inputCls}>
            <option value="">Select</option>
            {MONTHS.map((m, i) => (
              <option key={m} value={i + 1}>{m}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="text-xs font-bold text-[#0B0B0B]">Day</label>
          <select value={day} onChange={(e) => setDay(e.target.value)} className={inputCls}>
            <option value="">Select</option>
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i + 1} value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
      </div>

      {error && <p className="text-xs text-[#8B1E2D] font-semibold">{error}</p>}

      <button
        type="submit"
        disabled={saving}
        className="w-full py-3.5 rounded-full bg-[#8B1E2D] hover:bg-[#C6A15B] text-white hover:text-[#0B0B0B] font-bold text-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
      >
        <Bell className="w-4 h-4" />
        {saving ? "Saving…" : "Remind Me on WhatsApp"}
      </button>

      <p className="text-[11px] text-[#636363] text-center">
        Free forever. We only message you about your saved occasions — no spam.
      </p>
    </form>
  );
}
