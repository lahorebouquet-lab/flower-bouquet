import { createHash, randomBytes, timingSafeEqual } from 'crypto'
import { cookies } from 'next/headers'
import { writeClient } from '@/sanity/lib/writeClient'

// Admin auth for /admin and order-management APIs.
//
// Password source: ADMIN_PASSWORD env var if set, otherwise the stored
// SHA-256 hash below. The plaintext password is never kept in the repo.
//
// Sessions: on successful login we mint a cryptographically random token
// and store it as an `adminSession` document in Sanity (7-day expiry).
// The cookie is unforgeable without a valid login — unlike a deterministic
// hash-derived token, it cannot be recomputed from public repo contents.
// Serverless-safe: sessions live in Sanity, not in instance memory.

const ADMIN_PASSWORD_HASH =
  process.env.ADMIN_PASSWORD_HASH ||
  // SHA-256 of the owner-chosen admin password (set 2026-10-06).
  '3d75cc1fe61dddb4897621844832c91e462d31298a6a018790e8bef992646439'

const COOKIE_NAME = 'lb_admin'
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000 // 7 days
const TOKEN_RE = /^[a-f0-9]{64}$/

function sha256(s: string): string {
  return createHash('sha256').update(s, 'utf8').digest('hex')
}

function safeEqual(a: string, b: string): boolean {
  const ba = Buffer.from(a)
  const bb = Buffer.from(b)
  return ba.length === bb.length && timingSafeEqual(ba, bb)
}

/** True if the supplied password matches the configured admin password. */
export function verifyPassword(password: string): boolean {
  if (!password) return false
  const envPw = process.env.ADMIN_PASSWORD
  if (envPw) return safeEqual(sha256(password), sha256(envPw))
  if (!ADMIN_PASSWORD_HASH) return false
  return safeEqual(sha256(password), ADMIN_PASSWORD_HASH)
}

function sessionDocId(token: string): string {
  return `adminSession.${token}`
}

/**
 * Mint a new admin session after a successful password check.
 * Returns the raw token to store in the httpOnly cookie, or null on failure.
 */
export async function createSession(): Promise<string | null> {
  const token = randomBytes(32).toString('hex')
  const now = new Date()
  try {
    await writeClient.create({
      _id: sessionDocId(token),
      _type: 'adminSession',
      createdAt: now.toISOString(),
      expiresAt: new Date(now.getTime() + SESSION_TTL_MS).toISOString(),
    })
    return token
  } catch (err) {
    console.error('createSession failed:', err)
    return null
  }
}

/** Check the request's admin cookie against live Sanity sessions. */
export async function isAdmin(): Promise<boolean> {
  const jar = await cookies()
  const token = jar.get(COOKIE_NAME)?.value
  if (!token || !TOKEN_RE.test(token)) return false
  try {
    // writeClient has useCdn:false — always a fresh read.
    const s = await writeClient.fetch(
      `*[_type == "adminSession" && _id == $id && expiresAt > now()][0]{ _id }`,
      { id: sessionDocId(token) }
    )
    return !!s?._id
  } catch {
    return false
  }
}

/** Destroy the current session (logout). */
export async function destroySession(): Promise<void> {
  const jar = await cookies()
  const token = jar.get(COOKIE_NAME)?.value
  if (!token || !TOKEN_RE.test(token)) return
  try {
    await writeClient.delete(sessionDocId(token))
  } catch {
    /* already gone — nothing to do */
  }
}

export function adminCookie(token: string) {
  return {
    name: COOKIE_NAME,
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
    maxAge: Math.floor(SESSION_TTL_MS / 1000),
  }
}

export const ADMIN_COOKIE_NAME = COOKIE_NAME
