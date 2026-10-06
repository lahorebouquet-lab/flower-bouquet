'use client'

import { useCallback, useEffect, useState } from 'react'
import AbandonedCartsTab from './AbandonedCartsTab'

const STATUSES = [
  { value: '', label: 'All' },
  { value: 'pending', label: 'Pending' },
  { value: 'confirmed', label: 'Confirmed' },
  { value: 'preparing', label: 'Preparing' },
  { value: 'out-for-delivery', label: 'Out for Delivery' },
  { value: 'delivered', label: 'Delivered' },
  { value: 'cancelled', label: 'Cancelled' },
]

const STATUS_COLORS: Record<string, string> = {
  pending: 'bg-amber-100 text-amber-800 border-amber-300',
  confirmed: 'bg-blue-100 text-blue-800 border-blue-300',
  preparing: 'bg-purple-100 text-purple-800 border-purple-300',
  'out-for-delivery': 'bg-orange-100 text-orange-800 border-orange-300',
  delivered: 'bg-green-100 text-green-800 border-green-300',
  cancelled: 'bg-gray-200 text-gray-600 border-gray-300',
}

interface OrderItem {
  title: string
  slug: string
  price: number
  quantity: number
  deliveryDate: string
  deliverySlot: string
  area: string
  cardOccasion: string
  recipientName: string
  cardMessage: string
}

interface Order {
  _id: string
  orderId: string
  status: string
  senderName: string
  senderPhone: string
  recipientName: string
  recipientPhone: string
  streetAddress: string
  area: string
  deliveryDate: string
  deliveryTimeSlot: string
  cardOccasion: string
  cardMessage: string
  paymentMethod: string
  subtotal: number
  deliveryFee: number
  total: number
  wantPhotoBeforeDispatch: boolean
  adminNotes: string
  placedAt: string
  itemCount: number
  items: OrderItem[]
}

export default function AdminDashboard() {
  const [authed, setAuthed] = useState<boolean | null>(null)
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [loggingIn, setLoggingIn] = useState(false)

  const [orders, setOrders] = useState<Order[]>([])
  const [counts, setCounts] = useState<Record<string, number>>({})
  const [loading, setLoading] = useState(false)
  const [statusFilter, setStatusFilter] = useState('')
  const [query, setQuery] = useState('')
  const [expanded, setExpanded] = useState<string | null>(null)
  const [updating, setUpdating] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'orders' | 'abandoned'>('orders')

  const loadOrders = useCallback(async () => {
    setLoading(true)
    try {
      const params = new URLSearchParams()
      if (statusFilter) params.set('status', statusFilter)
      if (query.trim()) params.set('q', query.trim())
      const res = await fetch(`/api/orders?${params.toString()}`)
      if (res.status === 401) {
        setAuthed(false)
        return
      }
      const data = await res.json()
      if (data.ok) {
        setOrders(data.orders)
        setCounts(data.counts || {})
        setAuthed(true)
      }
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [statusFilter, query])

  // First check: are we already logged in?
  useEffect(() => {
    loadOrders()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (authed) loadOrders()
  }, [statusFilter]) // eslint-disable-line react-hooks/exhaustive-deps

  const doLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoggingIn(true)
    setLoginError('')
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      })
      const data = await res.json()
      if (data.ok) {
        setPassword('')
        setAuthed(true)
        loadOrders()
      } else {
        setLoginError(data.error || 'Login failed')
      }
    } catch {
      setLoginError('Login failed — try again')
    } finally {
      setLoggingIn(false)
    }
  }

  const doLogout = async () => {
    await fetch('/api/admin/login', { method: 'DELETE' })
    setAuthed(false)
    setOrders([])
  }

  const updateStatus = async (id: string, status: string) => {
    setUpdating(id)
    try {
      const res = await fetch('/api/orders', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, status }),
      })
      if (res.ok) {
        setOrders((prev) => prev.map((o) => (o._id === id ? { ...o, status } : o)))
      }
    } finally {
      setUpdating(null)
    }
  }

  const saveNotes = async (id: string, adminNotes: string) => {
    try {
      await fetch('/api/orders', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, adminNotes }),
      })
    } catch (e) {
      console.error(e)
    }
  }

  if (authed === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F3EA]">
        <p className="text-[#636363] text-sm">Loading…</p>
      </div>
    )
  }

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F3EA] px-4">
        <form
          onSubmit={doLogin}
          className="w-full max-w-sm bg-white rounded-2xl border border-[#E5DED2] shadow-lg p-8 space-y-4"
        >
          <div className="text-center">
            <h1 className="font-playfair text-2xl font-bold text-[#0B0B0B]">Lahore Bouquet</h1>
            <p className="text-xs text-[#636363] mt-1">Admin — Order Management</p>
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Admin password"
            className="w-full px-4 py-3 rounded-xl border border-[#E5DED2] bg-[#F8F3EA] text-sm outline-none focus:border-[#8B1E2D]"
            autoFocus
          />
          {loginError && (
            <p className="text-xs text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
              {loginError}
            </p>
          )}
          <button
            type="submit"
            disabled={loggingIn || !password}
            className="w-full py-3 rounded-full bg-[#8B1E2D] hover:bg-[#6d1623] text-white font-bold text-sm transition-colors disabled:opacity-50"
          >
            {loggingIn ? 'Checking…' : 'Login'}
          </button>
        </form>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8F3EA]">
      {/* Header */}
      <header className="bg-[#0B0B0B] text-white px-4 sm:px-8 py-4 flex items-center justify-between sticky top-0 z-10">
        <div>
          <h1 className="font-playfair text-xl font-bold">Orders Dashboard</h1>
          <p className="text-[11px] text-white/60">Lahore Bouquet — admin only</p>
        </div>
        <button
          onClick={doLogout}
          className="text-xs px-4 py-2 rounded-full border border-white/30 hover:bg-white hover:text-black transition-colors"
        >
          Logout
        </button>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-8 py-6 space-y-6">
        {/* Tabs */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
              activeTab === 'orders'
                ? 'bg-[#0B0B0B] text-white'
                : 'bg-white border border-[#E5DED2] hover:border-[#0B0B0B]'
            }`}
          >
            Orders
          </button>
          <button
            onClick={() => setActiveTab('abandoned')}
            className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${
              activeTab === 'abandoned'
                ? 'bg-[#0B0B0B] text-white'
                : 'bg-white border border-[#E5DED2] hover:border-[#0B0B0B]'
            }`}
          >
            Abandoned Carts
          </button>
        </div>

        {activeTab === 'abandoned' ? (
          <AbandonedCartsTab />
        ) : (
        <>
        {/* Status counts */}
        <div className="grid grid-cols-3 sm:grid-cols-7 gap-2">
          {STATUSES.map((s) => (
            <button
              key={s.value}
              onClick={() => setStatusFilter(s.value)}
              className={`rounded-xl border px-3 py-2 text-center transition-all ${
                statusFilter === s.value
                  ? 'bg-[#8B1E2D] text-white border-[#8B1E2D]'
                  : 'bg-white border-[#E5DED2] hover:border-[#8B1E2D]'
              }`}
            >
              <div className="text-lg font-bold">
                {s.value === '' ? counts.all ?? 0 : counts[s.value] ?? 0}
              </div>
              <div className="text-[10px] opacity-80">{s.label}</div>
            </button>
          ))}
        </div>

        {/* Search */}
        <form
          onSubmit={(e) => {
            e.preventDefault()
            loadOrders()
          }}
          className="flex gap-2"
        >
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search order ID, name, phone…"
            className="flex-1 px-4 py-2.5 rounded-xl border border-[#E5DED2] bg-white text-sm outline-none focus:border-[#8B1E2D]"
          />
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-[#0B0B0B] text-white text-sm font-semibold hover:bg-[#8B1E2D] transition-colors"
          >
            Search
          </button>
          {(query || statusFilter) && (
            <button
              type="button"
              onClick={() => {
                setQuery('')
                setStatusFilter('')
              }}
              className="px-4 py-2.5 rounded-xl border border-[#E5DED2] bg-white text-sm hover:border-[#8B1E2D]"
            >
              Clear
            </button>
          )}
        </form>

        {/* Orders list */}
        {loading ? (
          <p className="text-center text-sm text-[#636363] py-10">Loading orders…</p>
        ) : orders.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-[#E5DED2]">
            <p className="text-3xl mb-2">🌸</p>
            <p className="text-sm text-[#636363]">No orders found.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {orders.map((o) => (
              <div
                key={o._id}
                className="bg-white rounded-2xl border border-[#E5DED2] overflow-hidden"
              >
                {/* Row header */}
                <button
                  onClick={() => setExpanded(expanded === o._id ? null : o._id)}
                  className="w-full px-4 sm:px-5 py-4 flex items-center gap-3 text-left hover:bg-[#F8F3EA]/60 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-bold text-sm text-[#0B0B0B]">#{o.orderId}</span>
                      <span
                        className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${STATUS_COLORS[o.status] || STATUS_COLORS.pending}`}
                      >
                        {o.status.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                    <p className="text-xs text-[#636363] mt-1 truncate">
                      {o.senderName} · {o.senderPhone} · {o.itemCount} item{o.itemCount !== 1 ? 's' : ''} · Rs. {Number(o.total).toLocaleString()}
                    </p>
                    <p className="text-[10px] text-[#999] mt-0.5">
                      {o.placedAt
                        ? new Date(o.placedAt).toLocaleString('en-PK', {
                            day: 'numeric',
                            month: 'short',
                            hour: 'numeric',
                            minute: '2-digit',
                          })
                        : ''}
                      {o.deliveryDate ? ` · Delivery: ${o.deliveryDate}` : ''}
                    </p>
                  </div>
                  <span className="text-[#8B1E2D] text-lg">
                    {expanded === o._id ? '▴' : '▾'}
                  </span>
                </button>

                {/* Expanded detail */}
                {expanded === o._id && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 border-t border-[#E5DED2] space-y-4">
                    {/* Status changer */}
                    <div className="flex items-center gap-2 pt-3 flex-wrap">
                      <span className="text-xs font-semibold text-[#636363]">Status:</span>
                      <select
                        value={o.status}
                        disabled={updating === o._id}
                        onChange={(e) => updateStatus(o._id, e.target.value)}
                        className="text-xs font-semibold px-3 py-2 rounded-lg border border-[#E5DED2] bg-[#F8F3EA] outline-none focus:border-[#8B1E2D]"
                      >
                        {STATUSES.filter((s) => s.value).map((s) => (
                          <option key={s.value} value={s.value}>
                            {s.label}
                          </option>
                        ))}
                      </select>
                      {updating === o._id && (
                        <span className="text-[11px] text-[#636363]">Saving…</span>
                      )}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4 text-xs">
                      <div className="bg-[#F8F3EA] rounded-xl p-3 space-y-1.5">
                        <p className="font-bold text-[#8B1E2D] text-[11px] uppercase tracking-wide">Sender</p>
                        <p><span className="text-[#636363]">Name:</span> <b>{o.senderName || '—'}</b></p>
                        <p>
                          <span className="text-[#636363]">WhatsApp:</span>{' '}
                          {o.senderPhone ? (
                            <a
                              href={`https://wa.me/${o.senderPhone.replace(/\D/g, '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#0E7C5B] font-semibold underline"
                            >
                              {o.senderPhone}
                            </a>
                          ) : '—'}
                        </p>
                        <p><span className="text-[#636363]">Payment:</span> <b>{o.paymentMethod?.toUpperCase() || '—'}</b></p>
                        <p><span className="text-[#636363]">Photo before dispatch:</span> <b>{o.wantPhotoBeforeDispatch ? 'Yes' : 'No'}</b></p>
                      </div>
                      <div className="bg-[#F8F3EA] rounded-xl p-3 space-y-1.5">
                        <p className="font-bold text-[#8B1E2D] text-[11px] uppercase tracking-wide">Recipient</p>
                        <p><span className="text-[#636363]">Name:</span> <b>{o.recipientName || '—'}</b></p>
                        <p><span className="text-[#636363]">Phone:</span> <b>{o.recipientPhone || '—'}</b></p>
                        <p><span className="text-[#636363]">Address:</span> <b>{o.streetAddress || '—'}</b></p>
                        <p><span className="text-[#636363]">Area:</span> <b>{o.area || '—'}</b></p>
                        <p><span className="text-[#636363]">Date:</span> <b>{o.deliveryDate || '—'}</b></p>
                        <p><span className="text-[#636363]">Slot:</span> <b>{o.deliveryTimeSlot || '—'}</b></p>
                      </div>
                    </div>

                    {/* Items */}
                    <div>
                      <p className="font-bold text-[#8B1E2D] text-[11px] uppercase tracking-wide mb-2">
                        Items ({o.itemCount})
                      </p>
                      <div className="space-y-2">
                        {(o.items || []).map((it, i) => (
                          <div key={i} className="border border-[#E5DED2] rounded-xl p-3 text-xs space-y-1">
                            <div className="flex justify-between gap-2">
                              <b className="text-[#0B0B0B]">{it.title}</b>
                              <span className="whitespace-nowrap">Rs. {Number(it.price).toLocaleString()} × {it.quantity}</span>
                            </div>
                            {(it.deliveryDate || it.deliverySlot || it.area) && (
                              <p className="text-[#636363]">
                                📅 {it.deliveryDate || '—'} · {it.deliverySlot || '—'} · {it.area || '—'}
                              </p>
                            )}
                            {(it.cardOccasion || it.cardMessage) && (
                              <p className="text-[#636363]">
                                💌 [{it.cardOccasion || '—'}] {it.cardMessage || ''}
                                {it.recipientName ? ` — for ${it.recipientName}` : ''}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {(o.cardOccasion || o.cardMessage) && (
                      <p className="text-xs bg-[#F8F3EA] rounded-xl p-3">
                        <span className="font-bold text-[#8B1E2D]">Card:</span> [{o.cardOccasion || '—'}] {o.cardMessage || ''}
                      </p>
                    )}

                    <div className="flex justify-between text-xs border-t border-[#E5DED2] pt-3">
                      <span className="text-[#636363]">Subtotal Rs. {Number(o.subtotal).toLocaleString()} + Delivery Rs. {Number(o.deliveryFee).toLocaleString()}</span>
                      <span className="font-bold text-[#8B1E2D] text-sm">Total: Rs. {Number(o.total).toLocaleString()}</span>
                    </div>

                    {/* Admin notes */}
                    <div>
                      <label className="text-[11px] font-semibold text-[#636363]">Admin notes (only you see this)</label>
                      <textarea
                        defaultValue={o.adminNotes || ''}
                        rows={2}
                        placeholder="e.g. Customer asked for red ribbon…"
                        onBlur={(e) => {
                          if (e.target.value !== (o.adminNotes || '')) saveNotes(o._id, e.target.value)
                        }}
                        className="mt-1 w-full text-xs px-3 py-2 rounded-xl border border-[#E5DED2] bg-white outline-none focus:border-[#8B1E2D]"
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
        </>
        )}
      </main>
    </div>
  )
}
