import { NextRequest, NextResponse } from 'next/server'
import {
  verifyPassword,
  expectedSessionToken,
  adminCookie,
  ADMIN_COOKIE_NAME,
} from '@/lib/adminAuth'

/** Admin login: verify password, set httpOnly session cookie. */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const password = String(body.password || '')

    if (!verifyPassword(password)) {
      // Small delay to slow down brute force attempts.
      await new Promise((r) => setTimeout(r, 600))
      return NextResponse.json({ error: 'Ghalat password' }, { status: 401 })
    }

    const token = expectedSessionToken()
    if (!token) {
      return NextResponse.json({ error: 'Admin login is not configured' }, { status: 500 })
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

/** Admin logout: clear the session cookie. */
export async function DELETE() {
  const res = NextResponse.json({ ok: true })
  res.cookies.set(ADMIN_COOKIE_NAME, '', { path: '/', maxAge: 0 })
  return res
}
