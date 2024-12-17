import { NextResponse } from 'next/server';
import type { NextRequest }  from 'next/server';
import { MiddlewareConfig } from 'next/server';

async function fetchSession(base: string){
    const res = await fetch(`${base}/api/auth/session`);
    if(res.ok){
        return await res.json();
    }
    return null
}

export async function middleware(req: NextRequest) : Promise<NextResponse> {
    const session = await fetchSession(req.url);
    return NextResponse.next();
}

// matcher all route except api, public, static, and images
export const config : MiddlewareConfig = {
    matcher: [
        {
            source: '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
        }
    ]
}
