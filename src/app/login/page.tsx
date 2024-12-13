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

import React from 'react';
import { Metadata } from 'next';
import LoginFormComponent from '@app/components/app/login/LoginFormComponent';

export const metadata : Metadata = {
    title : "Login - Condensatore"
};

export default function LoginViews() : React.ReactNode {
    return <LoginFormComponent/>
}
