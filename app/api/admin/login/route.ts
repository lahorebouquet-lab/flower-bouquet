import { NextRequest, NextResponse } from 'next/server'
import {
  verifyPassword,
  createSession,
  destroySession,
  adminCookie,
  ADMIN_COOKIE_NAME,
} from '@/lib/adminAuth'

// In-memory rate limit: max 5 login attempts per IP per 10 minutes.
// (Resets on redeploy — enough to blunt brute-force scripts.)
const loginAttempts = new Map<string, { count: number; resetAt: number }>()
function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = loginAttempts.get(ip)
  if (!entry || now > entry.resetAt) {
    loginAttempts.set(ip, { count: 1, resetAt: now + 10 * 60 * 1000 })
    return false
  }
  entry.count += 1
  return entry.count > 5
}

/** Admin login: verify password, mint a random Sanity-backed session. */
export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many attempts. Please try again in a few minutes.' },
        { status: 429 }
      )
    }

    const body = await req.json()
    const password = String(body.password || '')

    if (!verifyPassword(password)) {
      // Small delay to slow down brute force attempts.
      await new Promise((r) => setTimeout(r, 600))
      return NextResponse.json({ error: 'Ghalat password' }, { status: 401 })
    }

    const token = await createSession()
    if (!token) {
      return NextResponse.json({ error: 'Could not create admin session' }, { status: 500 })
    }

    const res = NextResponse.json({ ok: true })
    const c = adminCookie(token)
    res.cookies.set(c.name, c.value, {
      httpOnly: c.httpOnly,
      secure: c.secure,
      sameSite: c.sameSite,
      path: c.path,
      maxAge: c.maxAge,
    })
    return res
  } catch (err) {
    console.error('POST /api/admin/login failed:', err)
    return NextResponse.json({ error: 'Login failed' }, { status: 500 })
  }
}

/** Admin logout: destroy the server-side session and clear the cookie. */
export async function DELETE() {
  await destroySession()
  const res = NextResponse.json({ ok: true })
  res.cookies.set(ADMIN_COOKIE_NAME, '', { path: '/', maxAge: 0 })
  return res
}
