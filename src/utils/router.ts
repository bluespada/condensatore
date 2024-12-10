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

export type IHonoRouteMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export interface IHonoRouters {
    path: string
    method: IHonoRouteMethod
    fn: (c: Context) => any
    middleware: any[]
};

const HonoRouters : IHonoRouters[] = [];

export const useRoute = (app: Hono) => {
    for(const route of HonoRouters){
        console.log(`Route ${route.method} ${route.path} -> ${route.fn.name}`);
        switch(route.method){
            default:
                app.get(route.path, route.fn, ...route.middleware);
                break;
        }
    }
};

export const setRoute = (route: IHonoRouters) => {
    HonoRouters.push(route);
}