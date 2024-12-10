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

import { Context } from 'hono';
import { Http } from '@utils/annotation';
import { API_VERSION } from '@utils/static';

export default class ApiController {

    @Http.Route("/api", { method: "GET", middleware: [] })
    public async index(c: Context){
        return c.json({
            error: false,
            messages: "",
            data: {
                server: `condensator with hono `,
                version: API_VERSION
            }
        });
    }
}