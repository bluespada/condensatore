/** this is a basic next js middleware */
import { NextResponse, MiddlewareConfig } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';


/**
 * Basic next js middleware that simply forwards the request.
 * @param {NextRequest} req - The request to forward.
 * @returns {Promise<NextResponse>} - The forwarded response.
 */
export async function middleware(req: NextRequest) {
    const c = await cookies();
    const res = await fetch(req.nextUrl.origin + "/api/auth/session", {
        method: "GET",
        headers: {
            cookie: c.toString(),
        },
    });
    const session = await res.json();
    if (!session?.user) {
        return NextResponse.redirect(new URL("/signin", req.nextUrl.origin));
    }
    if(req.nextUrl.pathname == "/") return NextResponse.redirect(new URL("/projects", req.nextUrl.origin));
    return NextResponse.next();
}

/**
 * Configuration object for the Next.js middleware.
 * It defines the routes that the middleware will apply to.
 * The matcher uses a regex pattern to exclude specific paths:
 * - API routes
 * - Static assets from Next.js
 * - Favicon, sitemap, and robots.txt
 * 
 * This ensures that only the desired routes are processed by the middleware.
 */
export const config: MiddlewareConfig = {
    matcher: [
        '/((?!api|signin|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ]
}
