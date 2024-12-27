/** this is a basic next js middleware */
import { NextResponse, MiddlewareConfig } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '@/auth';


/**
 * Basic next js middleware that simply forwards the request.
 * @param {NextRequest} req - The request to forward.
 * @returns {Promise<NextResponse>} - The forwarded response.
 */
export async function middleware(req: NextRequest) : Promise<NextResponse> {
    console.log(process.env.DATABASE_URL);
    const session = await auth();
    if(!session?.user) return NextResponse.redirect(new URL('/signin', req.url));
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