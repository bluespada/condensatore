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
import Link from 'next/link';

export default function CommonFooterComponent() : React.ReactNode {
    return (<>
        <footer className="w-full container mx-auto px-4 md:px-0">
            <div className="w-full grid grid-cols-12">
                <div className="col-span-6 flex flex-col gap-3">
                </div>
                <div className="col-span-6 flex flex-col gap-3">
                    <div className="w-fit">
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-row items-center justify-between pb-6">
                <div className="text-green-500 text-xs flex flex-row items-center">
                    <LuDot size={32}/>
                    <span>All service are happy</span>
                </div>
                <div className="text-xs hidden md:flex flex-col items-center" style={{ fontFamily: "Geist Sans", fontSize: "10px" }}>
                    <span>Copyright © 2024 <Link className="text-blue-500" href="https://github.com/mathca-labs/condensatore.git" target="_blank">Condensatore</Link> contributor and released under <Link className="text-blue-500" href="https://mit-license.org" target="_blank">MIT License</Link>.</span>
                </div>
                <div className="w-fit">
                    <ThemeSwitcherComponents/>
                </div>
            </div>
        </footer>
    </>);
}
