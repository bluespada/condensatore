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
import CommonHeaderComponents from '@app/layout/CommonHeaderComponents';
import CommonFooterComponents from '@app/layout/CommonFooterComponents';

export default function AppLoginTemplate({ children }:{ children: React.ReactNode }) : React.ReactNode {
    return (<>
        <CommonHeaderComponents/>
        <main className="w-full h-full min-h-screen">
            { children }
        </main>
        <CommonFooterComponents/>
    </>)
}
