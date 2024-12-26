import React from 'react';
import '@fontsource/geist-sans';
import '@assets/main.scss';
import { cookies } from 'next/headers';
import { CookiesProvider } from 'next-client-cookies/server';

export default async function AppLayout({ children }){
    const c = await cookies();
    const themes = c.get("theme")?.value || "light";
    return (<>
        <html lang="en" data-theme={themes}>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body>
                <CookiesProvider>
                    { children }
                </CookiesProvider>
            </body>
        </html>
    </>);
}