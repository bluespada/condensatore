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

export default class WebhookController {

    @Http.Route({ path: "/webhook", method: "GET" })
    public index(c: Context){
        return c.json({

        });
    }

    @Http.Route({ path: "/webhook/event/pull/{platform_id}/{repo_id}", method: "POST" })
    public EventPull(c: Context){
        return c.json({
            error: false,
            messages: "",
            data: [],
        });
    }
};