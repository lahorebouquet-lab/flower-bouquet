import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Redirect uppercase URLs to lowercase (e.g. /BOUQUETS -> /bouquets).
 * Skips API routes, static files, and Sanity Studio.
 */
export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const hostname = req.headers.get("host")?.split(":")[0].toLowerCase();

  // Non-production hostnames (Vercel preview/staging URLs) must never be indexed.
  // Add X-Robots-Tag noindex to every response from *.vercel.app.
  const isVercelHost = hostname?.endsWith(".vercel.app");

  if (hostname === "www.lahorebouquet.com") {
    const url = req.nextUrl.clone();
    url.hostname = "lahorebouquet.com";
    return NextResponse.redirect(url, 308);
  }
  if (
    pathname.startsWith("/api/") ||
    pathname.startsWith("/studio") ||
    pathname.startsWith("/_next/") ||
    pathname.includes(".")
  ) {
    if (isVercelHost) {
      const res = NextResponse.next();
      res.headers.set("X-Robots-Tag", "noindex, nofollow");
      return res;
    }
    return NextResponse.next();
  }
  const lower = pathname.toLowerCase();
  if (pathname !== lower) {
    const url = req.nextUrl.clone();
    url.pathname = lower;
    return NextResponse.redirect(url, 308);
  }
  if (isVercelHost) {
    const res = NextResponse.next();
    res.headers.set("X-Robots-Tag", "noindex, nofollow");
    return res;
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
