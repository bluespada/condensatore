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
import { ThemeSwitcherComponents } from '@app/utils/themes';
import { LuDot } from 'react-icons/lu';

export default function CommonFooterComponent() : React.ReactNode {
    return (<>
        <footer className="w-full min-h-12 container mx-auto">
            <div className="w-full grid grid-cols-12">
                <div className="col-span-6 flex flex-col gap-3">
                </div>
                <div className="col-span-6 flex flex-col gap-3">
                    <div className="w-fit">
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-row items-center justify-between">
                <div className="text-blue-500 text-xs flex flex-row items-center">
                    <LuDot size={32}/>
                    <span>All Service is Healthy</span>
                </div>
                <div className="text-xs hidden md:block" style={{ fontFamily: "Geist Sans", fontSize: "10px" }}>
                    <span>Copyright © 2024 <b>Condensatore</b> contributor.</span>
                </div>
                <div className="w-fit">
                    <ThemeSwitcherComponents/>
                </div>
            </div>
        </footer>
    </>);
}
