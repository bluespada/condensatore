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
"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    LuBookOpen,
    LuGithub,
} from 'react-icons/lu';
import { useCookies } from 'next-client-cookies';

export default function CommonHeaderComponent() : React.ReactNode {
    const cookies = useCookies();
    return (<>
        <nav className="w-full flex flex-row justify-between items-center px-2.5 md:px-8 py-1.5">
            <div className="">
                <Link href="/" className="flex flex-row items-center gap-2">
                    <Image 
                        className="rotate-45"
                        src={cookies.get("theme") == "dark" ? `/logo_white.png` :`/logo_black.png`}
                        width={42}
                        height={42}
                        alt="platform-logo"
                    />
                    <div className="flex flex-col">
                        <span className="text-base font-semibold text-primary" style={{ fontFamily: "Geist Sans" }}>Condensatore</span>
                        <span style={{ fontSize: '10px' }}>Deployment with Pricision and Flow</span>
                    </div>
                </Link>
            </div>
            <div className="flex flex-row items-center gap-1.5">
                <button className="btn btn-sm border border-primary hover:border-primary hover:bg-primary/5 text-xs dark:bg-base-100 dark:text-primary outline-none rounded-md">
                    <LuBookOpen size={16}/>
                </button>
                <button className="btn btn-sm border border-primary hover:border-primary bg-primary/90 text-base-100 hover:bg-primary text-xs outline-none rounded-md">
                    <LuGithub size={16}/>
                </button>
            </div>
        </nav>
    </>);
}
