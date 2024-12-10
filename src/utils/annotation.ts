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

import { IHonoRouteMethod, setRoute } from '@utils/router';

function Route(path: string, { method = "GET", middleware = [] }:{ method: IHonoRouteMethod, middleware: any[] }){
    return function(target: any, propertyKey: any, descriptor: PropertyDescriptor){
        setRoute({
            path: path,
            method: method,
            middleware: middleware,
            fn: descriptor.value,
        });
    }
}

export const Http = {
    Route,
};