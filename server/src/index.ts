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

import { Context, Hono } from 'hono';
import { getRoute } from '@server/src/core/annotation';
import '@server/src/controller';

const app = new Hono();


for(const route of getRoute()){
    switch(route.method.toUpperCase()){
        case "POST":
            app.post(route.path, route.fn);
            break;
        default:
            app.get(route.path, route.fn);
            break;
    }

    console.log(`Route ${route.method} ${route.path} -> ${route.fn.name}`);
}

export default app;
