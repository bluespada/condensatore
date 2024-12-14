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
import * as bcrypt from 'bcrypt';

/* this is only bridge function to bcrypt to make life easier */
export async function compare(password: string, hash: string) : Promise<boolean> {
    return await bcrypt.compare(password, hash);
}

/* this is only bridge function to bcrypt to make life easier */
export async function hash(password: string) : Promise<string>{
    const salt = await bcrypt.genSalt(12);
    return bcrypt.hash(password, salt);
}
