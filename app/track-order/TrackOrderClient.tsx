'use client'

import { useState } from 'react'
import Link from 'next/link'

const TIMELINE = [
  { value: 'pending', label: 'Order Received', icon: '🧾', desc: 'Hum ne aap ka order receive kar liya hai' },
  { value: 'confirmed', label: 'Confirmed', icon: '✅', desc: 'Order confirm ho gaya hai' },
  { value: 'preparing', label: 'Preparing', icon: '💐', desc: 'Phool fresh select ho rahe hain, bouquet ban raha hai' },
  { value: 'out-for-delivery', label: 'Out for Delivery', icon: '🛵', desc: 'Rider aap ki taraf rawana ho gaya hai' },
  { value: 'delivered', label: 'Delivered', icon: '🎉', desc: 'Order deliver ho gaya — enjoy karein!' },
]

interface TrackedOrder {
  orderId: string
  status: string
  senderName: string
  recipientName: string
  area: string
  deliveryDate: string
  deliveryTimeSlot: string
  paymentMethod: string
  subtotal: number
  deliveryFee: number
  total: number
  placedAt: string
  items: { title: string; price: number; quantity: number; deliveryDate: string; deliverySlot: string }[]
}

export default function TrackOrderClient() {
  const [orderId, setOrderId] = useState('')
  const [phone, setPhone] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [order, setOrder] = useState<TrackedOrder | null>(null)

  const track = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setOrder(null)
    try {
      const res = await fetch(
        `/api/track?orderId=${encodeURIComponent(orderId.trim())}&phone=${encodeURIComponent(phone.trim())}`
      )
      const data = await res.json()
      if (data.ok) {
        setOrder(data.order)
      } else {
        setError(data.error || 'Order nahi mila')
      }
    } catch {
      setError('Kuch ghalat hua — dobara try karein')
    } finally {
      setLoading(false)
    }
  }

  const statusIndex = order ? TIMELINE.findIndex((t) => t.value === order.status) : -1
  const isCancelled = order?.status === 'cancelled'

  return (
    <div className="min-h-screen bg-[#F8F3EA]">
      {/* Hero */}
      <div className="bg-[#0B0B0B] text-white px-4 py-12 text-center">
        <p className="text-[11px] tracking-[0.25em] text-[#C6A15B] font-semibold mb-2">LAHORE BOUQUET</p>
        <h1 className="font-playfair text-3xl sm:text-4xl font-bold">Track Your Order</h1>
        <p className="text-sm text-white/70 mt-2 max-w-md mx-auto">
          Apne order ka live status dekhein — Order ID aur phone number enter karein
        </p>
      </div>

      <main className="max-w-2xl mx-auto px-4 py-8 space-y-6">
        {/* Form */}
        <form onSubmit={track} className="bg-white rounded-2xl border border-[#E5DED2] shadow-sm p-6 space-y-4">
          <div>
            <label htmlFor="track-order-id" className="text-xs font-bold text-[#0B0B0B] uppercase tracking-wide">Order ID</label>
            <input
              id="track-order-id"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="e.g. FLB-123456"
              className="mt-1 w-full px-4 py-3 rounded-xl border border-[#E5DED2] bg-[#F8F3EA] text-sm uppercase outline-none focus:border-[#8B1E2D]"
            />
            <p className="text-[11px] text-[#999] mt-1">Order confirm hone par jo ID mili thi (WhatsApp message me bhi hai)</p>
          </div>
          <div>
            <label htmlFor="track-phone" className="text-xs font-bold text-[#0B0B0B] uppercase tracking-wide">Phone Number</label>
            <input
              id="track-phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="03XXXXXXXXX"
              inputMode="tel"
              className="mt-1 w-full px-4 py-3 rounded-xl border border-[#E5DED2] bg-[#F8F3EA] text-sm outline-none focus:border-[#8B1E2D]"
            />
            <p className="text-[11px] text-[#999] mt-1">Wohi number jo order karte waqt diya tha</p>
          </div>
          {error && (
            <p className="text-xs text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3">{error}</p>
          )}
          <button
            type="submit"
            disabled={loading || !orderId.trim() || !phone.trim()}
            className="w-full py-3.5 rounded-full bg-[#8B1E2D] hover:bg-[#6d1623] text-white font-bold text-sm transition-colors disabled:opacity-50"
          >
            {loading ? 'Checking…' : 'Track Order 🔍'}
          </button>
        </form>

        {/* Cancelled */}
        {isCancelled && order && (
          <div className="bg-white rounded-2xl border border-[#E5DED2] p-6 text-center">
            <p className="text-4xl mb-2">❌</p>
            <h2 className="font-playfair text-xl font-bold">Order #{order.orderId} Cancelled</h2>
            <p className="text-sm text-[#636363] mt-1">Ye order cancel kar diya gaya hai. Madad chahiye to WhatsApp par rabta karein.</p>
          </div>
        )}

        {/* Timeline */}
        {order && !isCancelled && (
          <div className="bg-white rounded-2xl border border-[#E5DED2] p-6 space-y-6">
            <div className="text-center">
              <p className="text-xs text-[#636363]">Order</p>
              <h2 className="font-playfair text-2xl font-bold text-[#8B1E2D]">#{order.orderId}</h2>
              {order.placedAt && (
                <p className="text-[11px] text-[#999] mt-1">
                  {new Date(order.placedAt).toLocaleString('en-PK', { day: 'numeric', month: 'short', hour: 'numeric', minute: '2-digit' })}
                </p>
              )}
            </div>

            <div className="space-y-0">
              {TIMELINE.map((step, i) => {
                const done = i <= statusIndex
                const current = i === statusIndex
                return (
                  <div key={step.value} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-lg border-2 transition-all ${
                          done ? 'bg-[#8B1E2D] border-[#8B1E2D]' : 'bg-[#F8F3EA] border-[#E5DED2] grayscale opacity-60'
                        }`}
                      >
                        {step.icon}
                      </div>
                      {i < TIMELINE.length - 1 && (
                        <div className={`w-0.5 h-8 ${i < statusIndex ? 'bg-[#8B1E2D]' : 'bg-[#E5DED2]'}`} />
                      )}
                    </div>
                    <div className={`pb-6 ${done ? '' : 'opacity-50'}`}>
                      <p className={`font-bold text-sm ${current ? 'text-[#8B1E2D]' : 'text-[#0B0B0B]'}`}>
                        {step.label}
                        {current && <span className="ml-2 text-[10px] bg-[#8B1E2D] text-white px-2 py-0.5 rounded-full">CURRENT</span>}
                      </p>
                      <p className="text-xs text-[#636363]">{step.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Order summary */}
            <div className="border-t border-[#E5DED2] pt-4 space-y-2 text-xs">
              <div className="flex justify-between"><span className="text-[#636363]">Recipient:</span><b>{order.recipientName || '—'}</b></div>
              <div className="flex justify-between"><span className="text-[#636363]">Delivery Area:</span><b>{order.area || '—'}</b></div>
              <div className="flex justify-between"><span className="text-[#636363]">Delivery Date:</span><b>{order.deliveryDate || '—'}</b></div>
              <div className="flex justify-between"><span className="text-[#636363]">Time Slot:</span><b>{(order.deliveryTimeSlot || '—').replace('-', ' ')}</b></div>
              <div className="flex justify-between"><span className="text-[#636363]">Payment:</span><b>{(order.paymentMethod || '—').toUpperCase()}</b></div>
              <div className="pt-2 space-y-1">
                {(order.items || []).map((it, i) => (
                  <div key={i} className="flex justify-between">
                    <span>{it.title} × {it.quantity}</span>
                    <span>Rs. {(Number(it.price) * Number(it.quantity)).toLocaleString()}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between font-bold text-sm text-[#8B1E2D] border-t border-[#E5DED2] pt-2">
                <span>Total</span><span>Rs. {Number(order.total).toLocaleString()}</span>
              </div>
            </div>

            <a
              href={`https://wa.me/923104225974?text=${encodeURIComponent(`Assalam-o-Alaikum! Mere order #${order.orderId} ke baare me maloom karna hai.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center w-full py-3 rounded-full border-2 border-[#8B1E2D] text-[#8B1E2D] font-bold text-sm hover:bg-[#8B1E2D] hover:text-white transition-colors"
            >
              Questions? WhatsApp Us 💬
            </a>
          </div>
        )}

        {/* Help */}
        <p className="text-center text-xs text-[#999]">
          Order ID nahi mil rahi? <Link href="/" className="text-[#8B1E2D] underline">WhatsApp par rabta karein</Link> — hum dhoond ke de denge.
        </p>
      </main>
    </div>
  )
}
