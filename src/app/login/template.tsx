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
        <main className="w-full h-full min-h-screen flex flex-col items-center gap-5 pt-12">
            <div className="w-1/2 text-center flex flex-col">
                <span className="text-3xl font-semibold">Log In To Condensatore</span>
                <span className="text-xs dark:text-gray-300 text-gray-500">One Step Ahead!!</span>
            </div>
            <div className="w-1/4 rounded-md card dark:bg-card-dark bg-card-light dark:shadow-black/10 shadow-gray-800/5 dark:shadow-xl shadow-lg">
                <div className="card-body">
                    { children }
                </div>
            </div>
        </main>
        <CommonFooterComponents/>
    </>)
}
