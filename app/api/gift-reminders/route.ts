import { NextRequest, NextResponse } from 'next/server'
import { writeClient } from '@/sanity/lib/writeClient'
import { client } from '@/sanity/lib/client'
import { isAdmin } from '@/lib/adminAuth'

const VALID_OCCASIONS = ['birthday', 'anniversary', 'mothers-day', 'fathers-day', 'valentines-day', 'other']

// Rate limit: max 5 reminder saves per IP per hour.
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

/** Public: save a gift reminder. */
export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests.' }, { status: 429 })
    }

    const body = await req.json()
    const customerName = String(body.customerName || '').trim().slice(0, 80)
    const phone = String(body.phone || '').trim().slice(0, 20)
    const personName = String(body.personName || '').trim().slice(0, 80)
    const occasion = String(body.occasion || 'birthday')
    const month = Number(body.month)
    const day = Number(body.day)

    if (!customerName || !phone || !personName) {
      return NextResponse.json({ error: 'Name, phone and person name are required' }, { status: 400 })
    }
    if (!VALID_OCCASIONS.includes(occasion)) {
      return NextResponse.json({ error: 'Invalid occasion' }, { status: 400 })
    }
    if (!Number.isInteger(month) || month < 1 || month > 12 || !Number.isInteger(day) || day < 1 || day > 31) {
      return NextResponse.json({ error: 'Invalid date' }, { status: 400 })
    }
    // Basic Pakistani phone check: 03XXXXXXXXX or +923XXXXXXXXX (digits only check)
    const digits = phone.replace(/\D/g, '')
    if (!/^(\+?92|0)?3\d{9}$/.test(digits.replace(/^\+/, '')) && !/^0?3\d{9}$/.test(digits)) {
      // lenient: accept 10-13 digits
      if (digits.length < 10 || digits.length > 13) {
        return NextResponse.json({ error: 'Please enter a valid phone number' }, { status: 400 })
      }
    }

    if (!process.env.SANITY_API_WRITE_TOKEN) {
      return NextResponse.json({ error: 'Saving is not configured' }, { status: 500 })
    }

    // Dedup: same phone + person + month/day already active
    const existing = await writeClient.fetch(
      `count(*[_type == "giftReminder" && phone == $phone && personName == $personName && month == $month && day == $day && status == "active"])`,
      { phone, personName, month, day }
    )
    if (existing > 0) {
      return NextResponse.json({ ok: true, deduped: true })
    }

    const doc = await writeClient.create({
      _type: 'giftReminder',
      customerName,
      phone,
      personName,
      occasion,
      month,
      day,
      status: 'active',
      createdAt: new Date().toISOString(),
    })

    return NextResponse.json({ ok: true, id: doc._id })
  } catch (e) {
    console.error('gift-reminders POST error', e)
    return NextResponse.json({ error: 'Failed to save' }, { status: 500 })
  }
}

/** Admin: list reminders. */
export async function GET(req: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    const { searchParams } = new URL(req.url)
    const status = searchParams.get('status') || ''
    const limit = Math.min(Number(searchParams.get('limit')) || 200, 500)

    let filter = `_type == "giftReminder"`
    const params: Record<string, any> = { limit }
    if (status === 'active' || status === 'paused') {
      filter += ` && status == $status`
      params.status = status
    }

    const reader = process.env.SANITY_API_WRITE_TOKEN ? writeClient : client
    const reminders = await reader.fetch(
      `*[${filter}] | order(month asc, day asc)[0...$limit] {
        _id, customerName, phone, personName, occasion, month, day,
        status, createdAt, lastRemindedAt, adminNotes
      }`,
      params
    )
    return NextResponse.json({ reminders })
  } catch (e) {
    console.error('gift-reminders GET error', e)
    return NextResponse.json({ error: 'Failed to load' }, { status: 500 })
  }
}

/** Admin: update status / notes / lastRemindedAt. */
export async function PATCH(req: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  try {
    const body = await req.json()
    const id = String(body.id || '')
    if (!id) return NextResponse.json({ error: 'id required' }, { status: 400 })

    const patch: Record<string, any> = {}
    if (body.status === 'active' || body.status === 'paused') patch.status = body.status
    if (typeof body.adminNotes === 'string') patch.adminNotes = body.adminNotes.slice(0, 1000)
    if (body.markReminded === true) patch.lastRemindedAt = new Date().toISOString()
    if (Object.keys(patch).length === 0) {
      return NextResponse.json({ error: 'Nothing to update' }, { status: 400 })
    }

    await writeClient.patch(id).set(patch).commit()
    return NextResponse.json({ ok: true })
  } catch (e) {
    console.error('gift-reminders PATCH error', e)
    return NextResponse.json({ error: 'Failed to update' }, { status: 500 })
  }
}
