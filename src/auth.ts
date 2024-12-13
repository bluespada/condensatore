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

// set authentication provider here
export const providers : Provider[] = [

];

// setup next-auth configuration here
export const configuration : NextAuthConfig = {
    providers,
}

export default NextAuth(configuration);
