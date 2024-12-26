/** this is a basic next js middleware */
import { NextResponse, MiddlewareConfig } from 'next/server';
import type { NextRequest } from 'next/server';


/**
 * Basic next js middleware that simply forwards the request.
 * @param {NextRequest} req - The request to forward.
 * @returns {Promise<NextResponse>} - The forwarded response.
 */
export async function middleware(req: NextRequest) : Promise<NextResponse> {
    const res = await fetch(req.nextUrl.origin + "/api/auth/sigin_validation", {
        method: "POST",
        body: JSON.stringify({})
    });
    console.log(await res.json());
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