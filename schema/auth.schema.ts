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
import { Users } from '@schema/index';

export const schema = pgTable("res_auth", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    email: varchar().notNull().unique(),
    password: varchar().notNull(),
    userId: integer("user_id").references(() => Users.schema.id),
});


export const authMany2oneRelations = relations(schema, ({ one }) => ({
    Users: one(Users.schema, {
        fields: [schema.userId],
        references: [Users.schema.id]
    })
}));

