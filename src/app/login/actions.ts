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
"use server";

export interface ActionSignInState {
    error: boolean
    messages: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const ActionSignIn = async (formState: ActionSignInState|null, formData: FormData) => {
    await new Promise(resolve => setInterval(resolve, 5000));

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const form : any = {};

    form.email = formData.get("email");
    form.password = formData.get("password");

    console.table(form);

    return null;
}
