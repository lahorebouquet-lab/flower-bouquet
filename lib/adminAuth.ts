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

const LOGIN_MAX_ATTEMPTS = 5
const LOGIN_WINDOW_MS = 10 * 60 * 1000 // 10 minutes

function attemptDocId(ip: string): string {
  const safe = ip.replace(/[^a-zA-Z0-9]/g, '-').slice(0, 64) || 'unknown'
  return `loginAttempt.${safe}`
}

/**
 * Sanity-backed login rate limit (serverless-safe: per-instance memory
 * doesn't survive across Vercel function instances). Returns true when the
 * IP has exhausted its attempts for the current window.
 */
export async function isLoginRateLimited(ip: string): Promise<boolean> {
  const id = attemptDocId(ip)
  const now = Date.now()
  try {
    const doc = await writeClient.fetch(
      `*[_type == "loginAttempt" && _id == $id][0]{ count, resetAt }`,
      { id }
    )
    if (!doc || now > new Date(doc.resetAt).getTime()) {
      await writeClient.createOrReplace({
        _id: id,
        _type: 'loginAttempt',
        ip,
        count: 1,
        resetAt: new Date(now + LOGIN_WINDOW_MS).toISOString(),
      })
      // Best-effort cleanup of stale counters.
      writeClient
        .delete({
          query: `*[_type == "loginAttempt" && resetAt < $cutoff]`,
          params: { cutoff: new Date(now - 60 * 60 * 1000).toISOString() },
        })
        .catch(() => {})
      return false
    }
    if (doc.count >= LOGIN_MAX_ATTEMPTS) return true
    await writeClient.patch(id).inc({ count: 1 }).commit()
    return false
  } catch (err) {
    console.error('login rate-limit check failed:', err)
    return false // fail open — password check + delay still apply
  }
}

/** Clear the attempt counter after a successful login. */
export async function clearLoginAttempts(ip: string): Promise<void> {
  try {
    await writeClient.delete(attemptDocId(ip))
  } catch {
    /* nothing to clear */
  }
}

export function adminCookie(token: string) {  return {
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
