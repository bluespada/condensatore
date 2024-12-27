"use client";
import React from 'react';
import { ActionSwitch } from  '@/actions/theme';
import { useCookies } from 'next-client-cookies';
import {
    LuMoon,
    LuSun,
} from 'react-icons/lu';

export default function ThemeSwitcherComponent(){
    const c = useCookies();
    const theme = c.get("theme") || "light";
    return (<>
        <form action={ActionSwitch}>
            <button 
                className="flex flex-row gap-2 items-center bg-primary text-secondary text-sm px-5 py-2 rounded-md"
                type="submit" 
                title="Switch theme"
            >
                {
                    theme == "light" ? <LuMoon size={19}/> : <LuSun size={19}/>
                }
            </button>
        </form>
    </>);
}
