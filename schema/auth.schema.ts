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
import { UsersSchema } from '@schema/index';

const Auth = pgTable("res_auth", {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    email: varchar().notNull().unique(),
    password: varchar().notNull(),
    userId: integer("user_id").references(() => UsersSchema.default.id),
});

export default Auth;

export const authMany2oneRelations = relations(Auth, ({ one }) => ({
    Users: one(UsersSchema.default, {
        fields: [Auth.userId],
        references: [UsersSchema.default.id]
    })
}));

