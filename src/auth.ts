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
import NextAuth, { NextAuthConfig } from 'next-auth';
import { Provider } from 'next-auth/providers';
import Credentials from 'next-auth/providers/credentials';
import client from '@app/utils/db';
import * as schema from '@schema/index';
import { eq } from 'drizzle-orm';

// set authentication provider here
export const providers : Provider[] = [
    Credentials({
        credentials: {
            email: { type: "email", required: true },
            password: { type: "password", required: true }
        },
        async authorize(credentials){
            const select = await client.select()
                .from(schema.Auth.schema)
                .where(eq(schema.Auth.schema.email, credentials.email as string))
                .leftJoin(schema.Users.schema, eq(schema.Auth.schema.userId, schema.Users.schema.id))
            console.log(select);
            return null;
        }
    })
];

// setup next-auth configuration here
export const configuration : NextAuthConfig = {
    providers,
    secret: process.env.AUTH_SECRET ?? "4E1E5F7CEC463A79D7DF53E8ED27B"
}

export const { signIn, signOut, auth, handlers } = NextAuth(configuration);
