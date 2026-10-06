import { NextRequest, NextResponse } from 'next/server'
import { writeClient } from '@/sanity/lib/writeClient'
import { client } from '@/sanity/lib/client'
import { isAdmin } from '@/lib/adminAuth'

const VALID_STATUSES = ['new', 'contacted', 'recovered', 'ignored']

// Rate limit: max 5 abandoned-cart saves per IP per hour (generous enough
// for real users, strict enough to stop spam).
const rateLimit = new Map<string, { count: number; resetAt: number }>()
function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimit.get(ip)
  if (!entry || now > entry.resetAt) {
    rateLimit.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 })
    return false
  }
  entry.count += 1
  return entry.count > 5
}

/** Public: save an abandoned cart (cart had items, no order placed). */
export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests.' }, { status: 429 })
    }

    const body = await req.json()
    const itemsSummary = String(body.itemsSummary || '').trim().slice(0, 300)
    const itemCount = Math.min(Math.max(Number(body.itemCount) || 0, 0), 100)
    const cartValue = Math.min(Math.max(Number(body.cartValue) || 0, 0), 500000)

    if (itemCount === 0 || !itemsSummary) {
      return NextResponse.json({ error: 'Cart is empty' }, { status: 400 })
    }

    // Avoid duplicates: skip if the same phone already has a "new"
    // abandoned cart in the last 24 hours.
    const phone = String(body.phone || '').trim().slice(0, 20)
    const name = String(body.name || '').trim().slice(0, 80)

    if (!process.env.SANITY_API_WRITE_TOKEN) {
      return NextResponse.json({ error: 'Saving is not configured' }, { status: 500 })
    }

    if (phone) {
      const recent = await writeClient.fetch(
        `count(*[_type == "abandonedCart" && phone == $phone && status == "new" && abandonedAt > $since])`,
        { phone, since: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString() }
      )
      if (recent > 0) {
        return NextResponse.json({ ok: true, deduped: true })
      }
    }

    const doc = await writeClient.create({
      _type: 'abandonedCart',
      phone: phone || undefined,
      name: name || undefined,
      itemsSummary,
      itemCount,
      cartValue,
      status: 'new',
      abandonedAt: new Date().toISOString(),
    })

    return NextResponse.json({ ok: true, id: doc._id })
  } catch (e) {
    console.error('abandoned-cart POST error', e)
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 })
  }
}

/** Admin: list abandoned carts. */
export async function GET(req: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    const { searchParams } = new URL(req.url)
    const status = searchParams.get('status') || ''
    const limit = Math.min(Number(searchParams.get('limit')) || 100, 500)

    let filter = `_type == "abandonedCart"`
    const params: Record<string, any> = { limit }
    if (status && VALID_STATUSES.includes(status)) {
      filter += ` && status == $status`
      params.status = status
    }

    const reader = process.env.SANITY_API_WRITE_TOKEN ? writeClient : client
    const carts = await reader.fetch(
      `*[${filter}] | order(abandonedAt desc)[0...$limit] {
        _id, phone, name, itemsSummary, itemCount, cartValue,
        status, abandonedAt, adminNotes
      }`,
      params
    )
    return NextResponse.json({ carts })
  } catch (e) {
    console.error('abandoned-cart GET error', e)
    return NextResponse.json({ error: 'Failed to load' }, { status: 500 })
  }
}

/** Admin: update status / notes of an abandoned cart. */
export async function PATCH(req: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    const body = await req.json()
    const id = String(body.id || '')
    if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 })

    const patch: Record<string, any> = {}
    if (body.status && VALID_STATUSES.includes(body.status)) patch.status = body.status
    if (typeof body.adminNotes === 'string') patch.adminNotes = body.adminNotes.slice(0, 1000)
    if (Object.keys(patch).length === 0) {
      return NextResponse.json({ error: 'Nothing to update' }, { status: 400 })
    }

    await writeClient.patch(id).set(patch).commit()
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('abandoned-cart PATCH error', e)
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 })
  }
}
