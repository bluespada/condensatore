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

import { Next, Context } from "hono";

/**
 * This middleware handle authentication validation
 * and set the user and data jwt to the application context
 * 
 * @param _ 
 * @param next 
 * @returns 
 */
export async function AuthMiddleware(c: Context, next: Next){
    // getting bearer token from headers
    const bearerToken = c.req.header("Authorization")
    
    // if bearer token not found will throw error 401.
    if(!bearerToken){
        return c.json({
            error: true,
            messages: "Unauthorized Access.",
        }, { status: 401 });
    }

    // Do JWT validation

    // Set user and data to the application context
    c.set("session.data", bearerToken?.split("Bearer ")[1]);

    return next();
};

export async function CsrfMiddleware(){
};