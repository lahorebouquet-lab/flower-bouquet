import { NextRequest, NextResponse } from 'next/server'
import { client } from '@/sanity/lib/client'
import { normalizePakistaniPhone } from '@/lib/site'

/**
 * Public order tracking: customer enters order ID + their phone number.
 * Both must match — order IDs alone are guessable, so the phone check
 * keeps other customers' orders private.
 * Returns only customer-safe fields (no admin notes, masked address).
 */

// Simple in-memory rate limit: max 30 tracking lookups per IP per 10 minutes.
// (Resets on redeploy — enough to stop enumeration abuse.)
const rateLimit = new Map<string, { count: number; resetAt: number }>()
function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimit.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 })
    return false
  }
  entry.count += 1
  return entry.count > 30
}

export async function GET(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again in a few minutes.' },
        { status: 429 }
      )
    }

    const { searchParams } = new URL(req.url)
    const orderId = (searchParams.get('orderId') || '').trim().toUpperCase()
    const phoneRaw = (searchParams.get('phone') || '').trim()

    if (!orderId || !phoneRaw) {
      return NextResponse.json(
        { error: 'Order ID aur phone number dono zaroori hain' },
        { status: 400 }
      )
    }

    const phone = normalizePakistaniPhone(phoneRaw)
    if (!phone) {
      return NextResponse.json(
        { error: 'Phone number theek nahi hai (03XXXXXXXXX format)' },
        { status: 400 }
      )
    }

    const order = await client.fetch(
      `*[_type == "order" && orderId == $orderId][0] {
        orderId, status, senderName, senderPhone,
        recipientName, recipientPhone, area,
        deliveryDate, deliveryTimeSlot,
        paymentMethod, subtotal, deliveryFee, total,
        placedAt,
        items[] { title, price, quantity, deliveryDate, deliverySlot }
      }`,
      { orderId }
    )

    if (!order) {
      // Same message whether the order doesn't exist or phone mismatches —
      // don't leak which one is wrong.
      await new Promise((r) => setTimeout(r, 400))
      return NextResponse.json(
        { error: 'Order nahi mila — ID aur phone number check karein' },
        { status: 404 }
      )
    }

    const senderMatch = normalizePakistaniPhone(order.senderPhone || '') === phone
    const recipientMatch = normalizePakistaniPhone(order.recipientPhone || '') === phone

    if (!senderMatch && !recipientMatch) {
      await new Promise((r) => setTimeout(r, 400))
      return NextResponse.json(
        { error: 'Order nahi mila — ID aur phone number check karein' },
        { status: 404 }
      )
    }

    // Strip phone numbers from the response — verified already.
    const { senderPhone, recipientPhone, ...safe } = order
    return NextResponse.json({ ok: true, order: safe })
  } catch (err) {
    console.error('GET /api/track failed:', err)
    return NextResponse.json({ error: 'Kuch ghalat hua — dobara try karein' }, { status: 500 })
  }
}
