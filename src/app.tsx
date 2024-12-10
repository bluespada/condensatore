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

import React from 'react';
import { Hono } from 'hono';
import { reactRenderer } from '@hono/react-renderer';
import { useRoute } from '@utils/router';
import "@controller/index";

const app = new Hono();

app.get(
    "*",
    reactRenderer(({  children, title }: any) => {
        return (<html>
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{ title }</title>
            </head>
            <body>
                <div id="zeus">{ children }</div>
            </body>
        </html>);
    })
);

useRoute(app);

export default {
    port: 3001,
    fetch: app.fetch,
};