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
"use server";
import React from 'react';
import { useThemes } from '@app/utils/themes';
import { CookiesProvider } from 'next-client-cookies/server';
import '@fontsource/plus-jakarta-sans';
import '@fontsource/geist-sans';
import '@app/assets/main.scss';

export default async function AppLayout({ children }:{ children: React.ReactNode }) : Promise<React.ReactNode> {

    // because is not react hooks but hook server function
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { value } = await useThemes();

    return (<>
        <html lang={`en`} data-theme={value}>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body>
                <div id="zeus">
                    <CookiesProvider>
                        { children }
                    </CookiesProvider>
                </div>
            </body>
        </html>
    </>);
}
