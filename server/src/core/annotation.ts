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

import { Context } from "hono";

export interface IHonoRouter {
    path: string
    method: string
    auth?: boolean
    csrf?: boolean
    fn: (c: Context) => any
}

const router: IHonoRouter[] = [];

export function getRoute() : IHonoRouter[] {
    return router;
};

function Route({ path, method = "GET", auth, csrf }:{ path: string, method: string, auth?: boolean, csrf?: boolean }){
    return function(target: any, propertyKey: any, descriptor: PropertyDescriptor){
        router.push({
            path,
            method,
            auth,
            csrf,
            fn: descriptor.value
        })
    }
}

export const Http = {
    Route,
};