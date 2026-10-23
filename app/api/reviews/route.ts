import { NextRequest, NextResponse } from 'next/server'
import { writeClient } from '@/sanity/lib/writeClient'

// Rate limit: max 5 review submissions per IP per hour.
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

/**
 * Public: submit a customer review from the homepage form.
 * Submissions are saved to Sanity with status "pending" — they do NOT
 * appear on the website until the owner approves them in Sanity Studio.
 */
export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 })
    }

    const body = await req.json()

    // Honeypot: real visitors never see or fill this hidden field.
    // If it has a value, silently pretend success and save nothing.
    if (String(body.website || '').trim() !== '') {
      return NextResponse.json({ ok: true })
    }

    const name = String(body.name || '').trim().slice(0, 60)
    const rating = Number(body.rating)
    const comment = String(body.comment || '').trim().slice(0, 1000)
    const location = String(body.location || '').trim().slice(0, 60)
    const bouquet = String(body.bouquet || '').trim().slice(0, 80)

    if (name.length < 2) {
      return NextResponse.json({ error: 'Please enter your name.' }, { status: 400 })
    }
    if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
      return NextResponse.json({ error: 'Please choose a star rating (1–5).' }, { status: 400 })
    }
    if (comment.length < 10) {
      return NextResponse.json({ error: 'Please write a few words about your experience (at least 10 characters).' }, { status: 400 })
    }

    if (!process.env.SANITY_API_WRITE_TOKEN) {
      return NextResponse.json({ error: 'Saving is not configured' }, { status: 500 })
    }

    const doc = await writeClient.create({
      _type: 'review',
      name,
      rating,
      comment,
      ...(location ? { location } : {}),
      ...(bouquet ? { bouquet } : {}),
      verified: false,
      status: 'pending',
      source: 'website',
      reviewDate: new Date().toISOString().slice(0, 10),
    })

    return NextResponse.json({ ok: true, id: doc._id })
  } catch (e) {
    console.error('reviews POST error', e)
    return NextResponse.json({ error: 'Failed to submit review. Please try again.' }, { status: 500 })
  }
}
