import { NextRequest, NextResponse } from 'next/server'
import { writeClient } from '@/sanity/lib/writeClient'
import { client } from '@/sanity/lib/client'
import { isAdmin } from '@/lib/adminAuth'

const VALID_STATUSES = [
  'pending',
  'confirmed',
  'preparing',
  'out-for-delivery',
  'delivered',
  'cancelled',
]

// Simple in-memory rate limit: max 10 order submissions per IP per 10 minutes.
// (Resets on redeploy — enough to stop casual spam; checkout stays public by design.)
const rateLimit = new Map<string, { count: number; resetAt: number }>()
function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimit.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 })
    return false
  }
  entry.count += 1
  return entry.count > 10
}

/** Public: save a new order when the customer places it. */
export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a few minutes.' },
        { status: 429 }
      )
    }

    const body = await req.json()

    const orderId = String(body.orderId || '').trim()
    if (!orderId) {
      return NextResponse.json({ error: 'orderId is required' }, { status: 400 })
    }
    const items = Array.isArray(body.items) ? body.items : []
    if (items.length === 0) {
      return NextResponse.json({ error: 'items are required' }, { status: 400 })
    }

    // Sanity check on browser-sent totals (full per-product recalculation
    // happens in admin review before dispatch)
    const total = Number(body.total) || 0
    if (total <= 0 || total > 500000) {
      return NextResponse.json({ error: 'Invalid order total' }, { status: 400 })
    }

    if (!process.env.SANITY_API_WRITE_TOKEN) {
      return NextResponse.json(
        { error: 'Order saving is not configured' },
        { status: 500 }
      )
    }

    const doc = {
      _type: 'order',
      orderId,
      status: 'pending',
      senderName: String(body.senderName || ''),
      senderPhone: String(body.senderPhone || ''),
      recipientName: String(body.recipientName || ''),
      recipientPhone: String(body.recipientPhone || ''),
      streetAddress: String(body.streetAddress || ''),
      area: String(body.area || ''),
      deliveryDate: String(body.deliveryDate || ''),
      deliveryTimeSlot: String(body.deliveryTimeSlot || ''),
      items: items.map((it: any) => ({
        _type: 'object',
        _key: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        title: String(it.title || ''),
        slug: String(it.slug || ''),
        price: Number(it.price) || 0,
        quantity: Number(it.quantity) || 1,
        deliveryDate: String(it.deliveryDate || ''),
        deliverySlot: String(it.deliverySlot || ''),
        area: String(it.area || ''),
        cardOccasion: String(it.cardOccasion || ''),
        recipientName: String(it.recipientName || ''),
        cardMessage: String(it.cardMessage || ''),
      })),
      cardOccasion: String(body.cardOccasion || ''),
      cardMessage: String(body.cardMessage || ''),
      paymentMethod: String(body.paymentMethod || ''),
      subtotal: Number(body.subtotal) || 0,
      deliveryFee: Number(body.deliveryFee) || 0,
      discountCode: String(body.discountCode || ''),
      discountAmount: Number(body.discountAmount) || 0,
      total: Number(body.total) || 0,
      wantPhotoBeforeDispatch: body.wantPhotoBeforeDispatch !== false,
      placedAt: new Date().toISOString(),
    }

    // Idempotency: don't create duplicates if the customer double-submits.
    const existing = await client.fetch(
      `*[_type == "order" && orderId == $orderId][0]{ _id }`,
      { orderId }
    )
    if (existing?._id) {
      return NextResponse.json({ ok: true, id: existing._id, duplicate: true })
    }

    const created = await writeClient.create(doc)
    return NextResponse.json({ ok: true, id: created._id })
  } catch (err) {
    console.error('POST /api/orders failed:', err)
    return NextResponse.json({ error: 'Failed to save order' }, { status: 500 })
  }
}

/** Admin only: list orders, newest first. */
export async function GET(req: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    const { searchParams } = new URL(req.url)
    const status = searchParams.get('status') || ''
    const q = searchParams.get('q') || ''
    const limit = Math.min(Number(searchParams.get('limit')) || 100, 500)

    let filter = `_type == "order"`
    const params: Record<string, any> = {}
    if (status && VALID_STATUSES.includes(status)) {
      filter += ` && status == $status`
      params.status = status
    }
    if (q) {
      filter += ` && (orderId match $q || senderName match $q || senderPhone match $q || recipientName match $q || recipientPhone match $q)`
      params.q = `*${q}*`
    }

    // NOTE: use writeClient (useCdn:false) for admin reads so status changes
    // show immediately instead of lagging behind Sanity's CDN cache.
    const reader = process.env.SANITY_API_WRITE_TOKEN ? writeClient : client
    const orders = await reader.fetch(
      `*[${filter}] | order(placedAt desc)[0...$limit] {
        _id, orderId, status, senderName, senderPhone,
        recipientName, recipientPhone, streetAddress, area,
        deliveryDate, deliveryTimeSlot, cardOccasion, cardMessage,
        paymentMethod, subtotal, deliveryFee, total,
        wantPhotoBeforeDispatch, adminNotes, placedAt,
        "itemCount": count(items),
        items[] { title, slug, price, quantity, deliveryDate, deliverySlot, area, cardOccasion, recipientName, cardMessage }
      }`,
      { ...params, limit }
    )
    const counts = await reader.fetch(
      `{
        "all": count(*[_type == "order"]),
        "pending": count(*[_type == "order" && status == "pending"]),
        "confirmed": count(*[_type == "order" && status == "confirmed"]),
        "preparing": count(*[_type == "order" && status == "preparing"]),
        "out-for-delivery": count(*[_type == "order" && status == "out-for-delivery"]),
        "delivered": count(*[_type == "order" && status == "delivered"]),
        "cancelled": count(*[_type == "order" && status == "cancelled"])
      }`
    )
    return NextResponse.json({ ok: true, orders, counts })
  } catch (err) {
    console.error('GET /api/orders failed:', err)
    return NextResponse.json({ error: 'Failed to load orders' }, { status: 500 })
  }
}

/** Admin only: update an order's status / admin notes. */
export async function PATCH(req: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    const body = await req.json()
    const id = String(body.id || '')
    if (!id) {
      return NextResponse.json({ error: 'id is required' }, { status: 400 })
    }
    const patch: Record<string, any> = {}
    if (body.status) {
      if (!VALID_STATUSES.includes(body.status)) {
        return NextResponse.json({ error: 'Invalid status' }, { status: 400 })
      }
      patch.status = body.status
    }
    if (typeof body.adminNotes === 'string') {
      patch.adminNotes = body.adminNotes.slice(0, 2000)
    }
    if (Object.keys(patch).length === 0) {
      return NextResponse.json({ error: 'Nothing to update' }, { status: 400 })
    }
    if (!process.env.SANITY_API_WRITE_TOKEN) {
      return NextResponse.json(
        { error: 'Order saving is not configured' },
        { status: 500 }
      )
    }
    await writeClient.patch(id).set(patch).commit()
    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('PATCH /api/orders failed:', err)
    return NextResponse.json({ error: 'Failed to update order' }, { status: 500 })
  }
}
