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

import { pgTable, varchar, integer } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';
import { AuthSchema } from '@schema/index';

const Users = pgTable("res_users", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar().notNull(),
    picture: varchar(),
});

export default Users;

export const authMany2oneRelations = relations(Users, ({ many }) => ({
    Auth: many(AuthSchema.default)
}));
