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

import { Context, Next } from 'hono';

export interface IAuthMiddleware {
    mustGroup?: string[] | string
}

export const Auth = ({
    mustGroup
}: IAuthMiddleware) => {
    return (c: Context, next: Next) => {
        /** Do Something with authentication like redirect to auth pages */
        console.log("executed");
        return next();
    }
}

export const Example = (c: Context, next: Next) => {
    console.log("from example");
    return next();
}