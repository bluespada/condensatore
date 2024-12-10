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
import { Auth, Example } from '@utils/middleware';

import DashboardViews from '@views/dashboard/dashboard.views';

export default class WebController {

    // dashboard
    @Http.Route("/", { middleware: [
        Auth({ mustGroup: "base.group_no_one" }),
    ] })
    public async dashboard(c: Context){
        return c.render(<DashboardViews/>, { title: "Dashboard" })
    }

};