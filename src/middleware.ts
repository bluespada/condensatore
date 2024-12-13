/**
 * Copyright (C) 2024 Condensatore Contributor
 * Copyright (C) 2024 Bluespada <pentingmain@gmail.com>
 * 
 * This file is part of Condensatore.
 * 
 * Condensatore is free software: you can redistribute it and/or modify
 * it under the terms of the MIT License.
 * 
 * You should have received a copy of the MIT License along with Condensatore.
 * If not, see <https://mit-license.org/>.
 * 
*/

import { NextResponse, MiddlewareConfig } from 'next/server';
import type { NextRequest } from 'next/server';

/** eslint-disable no-unused-vars */
export async function middleware(req: NextRequest) : Promise<NextResponse> {
    if(req.nextUrl.pathname == "/"){
        // check for session login
        return NextResponse.redirect(new URL("/login", req.url));
    }
    return NextResponse.next();
};
/** eslint-disable no-unused-vars */

export const config : MiddlewareConfig = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
    ]
};