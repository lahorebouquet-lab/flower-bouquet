'use client'

import { useCallback, useEffect, useState } from 'react'

const STATUSES = [
  { value: '', label: 'All' },
  { value: 'new', label: 'New' },
  { value: 'contacted', label: 'Contacted' },
  { value: 'recovered', label: 'Recovered' },
  { value: 'ignored', label: 'Ignored' },
]

interface AbandonedCart {
  _id: string
  phone: string
  name: string
  itemsSummary: string
  itemCount: number
  cartValue: number
  status: string
  abandonedAt: string
  adminNotes: string
}

/** WhatsApp follow-up message with 10% discount */
function waFollowUpLink(cart: AbandonedCart): string {
  const text =
    `Assalam-o-Alaikum${cart.name ? ' ' + cart.name : ''}! ` +
    `This is Lahore Bouquet. We noticed you left "${cart.itemsSummary}" ` +
    `(Rs. ${Number(cart.cartValue).toLocaleString()}) in your bag. ` +
    `Complete your order today with code WELCOME10 for 10% OFF! ` +
    `We also have more deals — just reply here. Same-day delivery across Lahore.`
  const phone = (cart.phone || '').replace(/\D/g, '')
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
}

export default function AbandonedCartsTab() {
  const [carts, setCarts] = useState<AbandonedCart[]>([])
  const [loading, setLoading] = useState(false)
  const [statusFilter, setStatusFilter] = useState('new')
  const [updating, setUpdating] = useState<string | null>(null)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (statusFilter) params.set('status', statusFilter)
      const res = await fetch(`/api/abandoned-cart?${params}`)
      const data = await res.json()
      setCarts(data.carts || [])
    } catch {
      setCarts([])
    }
    setLoading(false)
  }, [statusFilter])

  useEffect(() => {
    load()
  }, [load])

  const setStatus = async (id: string, status: string) => {
    setUpdating(id)
    try {
      await fetch('/api/abandoned-cart', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      })
      await load()
    } finally {
      setUpdating(null)
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl border border-[#E5DED2] p-4 text-xs text-[#2A2A2A] leading-relaxed">
        <strong className="text-[#0B0B0B]">How it works:</strong> When a visitor
        adds items to their bag but leaves without ordering, their cart is saved
        here (with phone number if they entered it at checkout). Click{' '}
        <strong>WhatsApp</strong> to send them the 10% OFF follow-up message
        (code <strong>WELCOME10</strong>), then mark as Contacted.
      </div>

      {/* Status filter */}
      <div className="flex gap-2 flex-wrap">
        {STATUSES.map((s) => (
          <button
            key={s.value}
            onClick={() => setStatusFilter(s.value)}
            className={`rounded-xl border px-4 py-2 text-xs font-semibold transition-all ${
              statusFilter === s.value
                ? 'bg-[#8B1E2D] text-white border-[#8B1E2D]'
                : 'bg-white border-[#E5DED2] hover:border-[#8B1E2D]'
            }`}
          >
            {s.label}
          </button>
        ))}
        <button
          onClick={load}
          className="rounded-xl border px-4 py-2 text-xs bg-white border-[#E5DED2]"
        >
          {loading ? 'Loading…' : 'Refresh'}
        </button>
      </div>

      {/* List */}
      {carts.length === 0 && !loading && (
        <div className="text-center py-12 text-sm text-[#636363]">
          No abandoned carts {statusFilter ? `with status "${statusFilter}"` : ''} yet.
        </div>
      )}

      <div className="space-y-3">
        {carts.map((c) => (
          <div
            key={c._id}
            className="bg-white rounded-2xl border border-[#E5DED2] p-4 space-y-2"
          >
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div>
                <div className="font-bold text-[#0B0B0B]">
                  {c.phone || '(no phone)'} {c.name && <span className="font-normal text-[#636363]">• {c.name}</span>}
                </div>
                <div className="text-xs text-[#2A2A2A] mt-1">{c.itemsSummary}</div>
                <div className="text-[11px] text-[#636363] mt-1">
                  {c.itemCount} items • Rs. {Number(c.cartValue).toLocaleString()} •{' '}
                  {new Date(c.abandonedAt).toLocaleString('en-PK', {
                    day: 'numeric',
                    month: 'short',
                    hour: 'numeric',
                    minute: '2-digit',
                  })}
                </div>
              </div>
              <span
                className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${
                  c.status === 'new'
                    ? 'bg-amber-100 text-amber-800 border-amber-300'
                    : c.status === 'contacted'
                      ? 'bg-blue-100 text-blue-800 border-blue-300'
                      : c.status === 'recovered'
                        ? 'bg-green-100 text-green-800 border-green-300'
                        : 'bg-gray-200 text-gray-600 border-gray-300'
                }`}
              >
                {c.status.toUpperCase()}
              </span>
            </div>

            <div className="flex gap-2 flex-wrap pt-1">
              {c.phone ? (
                <a
                  href={waFollowUpLink(c)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setStatus(c._id, 'contacted')}
                  className="px-4 py-2 rounded-full bg-[#0E7C5B] text-white text-xs font-bold hover:opacity-90"
                >
                  WhatsApp 10% OFF Message
                </a>
              ) : (
                <span className="text-[11px] text-[#636363] italic">
                  No phone captured — cannot message.
                </span>
              )}
              <button
                onClick={() => setStatus(c._id, 'recovered')}
                disabled={updating === c._id}
                className="px-4 py-2 rounded-full border border-green-600 text-green-700 text-xs font-semibold hover:bg-green-50"
              >
                Mark Recovered
              </button>
              <button
                onClick={() => setStatus(c._id, 'ignored')}
                disabled={updating === c._id}
                className="px-4 py-2 rounded-full border border-[#E5DED2] text-[#636363] text-xs hover:border-[#0B0B0B]"
              >
                Ignore
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
