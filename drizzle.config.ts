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

import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    out: "./.drizzle",
    schema: "./schema/index.ts",
    dialect: "postgresql",
    dbCredentials: {
        url: process.env.DATABASE_URL!
    }
});
