'use client'

import { useCallback, useEffect, useState } from 'react'

interface Reminder {
  _id: string
  customerName: string
  phone: string
  personName: string
  occasion: string
  month: number
  day: number
  status: string
  createdAt: string
  lastRemindedAt: string | null
}

const OCCASION_LABELS: Record<string, string> = {
  birthday: 'Birthday',
  anniversary: 'Anniversary',
  'mothers-day': "Mother's Day",
  'fathers-day': "Father's Day",
  'valentines-day': "Valentine's Day",
  other: 'Occasion',
}

/** Next occurrence of month/day at/after today (annual recurrence). */
function nextOccurrence(month: number, day: number): Date {
  const now = new Date()
  let d = new Date(now.getFullYear(), month - 1, day)
  // Handle Feb 29 on non-leap years -> Feb 28
  if (d.getMonth() !== month - 1) d = new Date(now.getFullYear(), month - 1, 28)
  if (d < new Date(now.getFullYear(), now.getMonth(), now.getDate())) {
    d = new Date(now.getFullYear() + 1, month - 1, day)
    if (d.getMonth() !== month - 1) d = new Date(now.getFullYear() + 1, month - 1, 28)
  }
  return d
}

function daysUntil(d: Date): number {
  const now = new Date()
  const a = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime()
  const b = new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime()
  return Math.round((b - a) / 86400000)
}

function waReminderLink(r: Reminder): string {
  const occ = (OCCASION_LABELS[r.occasion] || 'occasion').toLowerCase()
  const text =
    `Assalam-o-Alaikum ${r.customerName}! This is Lahore Bouquet. ` +
    `Just a friendly reminder — ${r.personName}'s ${occ} is coming up on ${r.day}/${r.month}. ` +
    `Shall we arrange fresh flowers with same-day delivery? Reply here and we'll take care of everything!`
  const phone = (r.phone || '').replace(/\D/g, '')
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
}

export default function GiftRemindersTab() {
  const [reminders, setReminders] = useState<Reminder[]>([])
  const [loading, setLoading] = useState(false)
  const [showPaused, setShowPaused] = useState(false)
  const [updating, setUpdating] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch('/api/gift-reminders?status=' + (showPaused ? 'paused' : 'active'))
      const data = await res.json()
      setReminders(data.reminders || [])
    } catch {
      setReminders([])
    }
    setLoading(false)
  }, [showPaused])

  useEffect(() => {
    load()
  }, [load])

  const update = async (id: string, body: Record<string, any>) => {
    setUpdating(id)
    try {
      await fetch('/api/gift-reminders', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, ...body }),
      })
      await load()
    } finally {
      setUpdating(null)
    }
  }

  // Sort by upcoming occurrence; flag ones due within 2 days
  const sorted = [...reminders]
    .map((r) => ({ ...r, next: nextOccurrence(r.month, r.day), inDays: daysUntil(nextOccurrence(r.month, r.day)) }))
    .sort((a, b) => a.inDays - b.inDays)

  const dueSoon = sorted.filter((r) => r.inDays <= 2)

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-[#E5DED2] p-4 text-xs text-[#2A2A2A] leading-relaxed">
        <strong className="text-[#0B0B0B]">How it works:</strong> Customers save
        birthdays/anniversaries on the <strong>/gift-reminders</strong> page. Check this
        tab every morning — anyone <strong>due within 2 days</strong> is highlighted.
        Click <strong>WhatsApp</strong> to send the reminder (opens chat with a ready
        message), then it&apos;s marked as reminded.
      </div>

      <div className="flex gap-2 items-center">
        <button
          onClick={() => setShowPaused(false)}
          className={`px-4 py-2 rounded-full text-xs font-bold ${!showPaused ? 'bg-[#0B0B0B] text-white' : 'bg-white border border-[#E5DED2]'}`}
        >
          Active
        </button>
        <button
          onClick={() => setShowPaused(true)}
          className={`px-4 py-2 rounded-full text-xs font-bold ${showPaused ? 'bg-[#0B0B0B] text-white' : 'bg-white border border-[#E5DED2]'}`}
        >
          Paused
        </button>
        <button onClick={load} className="px-4 py-2 rounded-full text-xs bg-white border border-[#E5DED2]">
          {loading ? 'Loading…' : 'Refresh'}
        </button>
        {dueSoon.length > 0 && (
          <span className="text-xs font-bold text-[#8B1E2D]">
            {dueSoon.length} due within 2 days!
          </span>
        )}
      </div>

      {sorted.length === 0 && !loading && (
        <div className="text-center py-12 text-sm text-[#636363]">
          No {showPaused ? 'paused' : 'active'} reminders yet.
        </div>
      )}

      <div className="space-y-3">
        {sorted.map((r) => (
          <div
            key={r._id}
            className={`bg-white rounded-2xl border p-4 space-y-2 ${
              r.inDays <= 2 ? 'border-[#8B1E2D] ring-1 ring-[#8B1E2D]/30' : 'border-[#E5DED2]'
            }`}
          >
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div>
                <div className="font-bold text-[#0B0B0B]">
                  {r.personName}&apos;s {OCCASION_LABELS[r.occasion] || r.occasion}
                  <span className="font-normal text-[#636363]"> • {r.customerName} ({r.phone})</span>
                </div>
                <div className="text-xs text-[#2A2A2A] mt-1">
                  Date: {r.day}/{r.month} •{" "}
                  <strong className={r.inDays <= 2 ? 'text-[#8B1E2D]' : ''}>
                    {r.inDays === 0 ? 'TODAY!' : r.inDays === 1 ? 'Tomorrow' : `in ${r.inDays} days`}
                  </strong>
                  {r.lastRemindedAt && (
                    <span className="text-[#636363]">
                      {' '}• last reminded {new Date(r.lastRemindedAt).toLocaleDateString('en-PK', { day: 'numeric', month: 'short' })}
                    </span>
                  )}
                </div>
              </div>
              {r.inDays <= 2 && (
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#8B1E2D] text-white">
                  DUE SOON
                </span>
              )}
            </div>

            <div className="flex gap-2 flex-wrap pt-1">
              <a
                href={waReminderLink(r)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => update(r._id, { markReminded: true })}
                className="px-4 py-2 rounded-full bg-[#0E7C5B] text-white text-xs font-bold hover:opacity-90"
              >
                WhatsApp Reminder
              </a>
              <button
                onClick={() => update(r._id, { status: showPaused ? 'active' : 'paused' })}
                disabled={updating === r._id}
                className="px-4 py-2 rounded-full border border-[#E5DED2] text-[#636363] text-xs hover:border-[#0B0B0B]"
              >
                {showPaused ? 'Activate' : 'Pause'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
