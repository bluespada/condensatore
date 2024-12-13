/**
 * copyright (c) 2024 condensatore contributor
 * copyright (c) 2024 bluespada <pentingmain@gmail.com>
 * 
 * this file is part of condensatore.
 * 
 * condensatore is free software: you can redistribute it and/or modify
 * it under the terms of the mit license.
 * 
 * you should have received a copy of the mit license along with condensatore.
 * if not, see <https://mit-license.org/>.
 * 
*/
"use client";
import React from 'react';
import { IThemeMode } from './types';
import { ActionSwitchTheme } from './server';
import {
    LuMoon,
    LuSun,
} from 'react-icons/lu';
import { useCookies } from 'next-client-cookies';

export function ThemeSwitcherComponents(){
    const cookies = useCookies();
    const theme: IThemeMode = cookies.get("theme") as IThemeMode ?? "light";
    // get html tags for 
    React.useEffect(() => {
    }, []);

    return (<>
        <div className="flex flex-row items-center justify-between p-1 gap-1 border dark:border-gray-500 border-gray-300 rounded-full">
            <form action={ActionSwitchTheme}>
                <input name="theme" defaultValue="light" className="hidden"/>
                <button 
                    type="submit"
                    className={`outline-none rounded-full p-1 text-sm ${theme == "light" ? 'bg-primary text-base-100' : ''}`}
                >
                    <LuSun/>
                </button>
            </form>
            <form action={ActionSwitchTheme}>
                <input name="theme" defaultValue="dark" className="hidden"/>
                <button 
                    type="submit"
                    className={`outline-none rounded-full p-1 text-sm ${theme == "dark" ? 'bg-primary text-base-100' : ''}`}
                >
                    <LuMoon/>
                </button>
            </form>
        </div>
    </>);
}
