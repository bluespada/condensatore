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

import { Http } from '@server/src/core/annotation';
import { Context } from 'hono';


export default class ApiController {
    
    @Http.Route({ 
        path: "/api", 
        method: "GET", 
        auth: true, 
        csrf: true 
    })
    public index(c: Context){
        return c.json({ message: "Hello World" });
    }

    @Http.Route({
        path: "/api/private/auth/signin",
        method: "POST",
        auth: false,
        csrf: false,
    })
    public async AuthSignIn(c: Context){
        
        const body = await c.req.json();

        return c.json({
            error: false,
            messages: "Sucess login",
            timestamp: new Date().getTime(),
            data: {
                token: "",
                body: body,
            }
        });
    }

    @Http.Route({
        path: "/api/private/auth/sessions",
        method: "POST",
        auth: true,
        csrf: false,
    })
    public async AuthSessions(c: Context){
        // user and data are getting from auth bearer token
        // parse back to the client as descrypted data.
        const user = c.get("session.user");
        const data = c.get("session.data");

        return c.json({
            error: false,
            messages: "Sucess login",
            timestamp: new Date().getTime(),
            data: {
                data,
                user,
            }
        });
    }
}