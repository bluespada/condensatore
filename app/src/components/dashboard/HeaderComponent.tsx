"use client";
import React from 'react';
import {
    LuInbox,
    LuMoon,
    LuSun,
} from 'react-icons/lu';
import { ActionSwitch } from '@/actions/theme';
import { useCookies } from 'next-client-cookies';

export default function HeaderComponent(){
    const c = useCookies();
    const theme = c.get("theme") || "light";
    return (<>
        <nav className="w-full pl-52">
            <div className="w-full flex flex-row items-center justify-between border-b border-gray-400/20 px-12 py-1.5">
                <div className="flex flex-row items-center">
                    <div className="breadcrumbs text-sm">
                        <ul>
                            <li>Dashboard</li>
                            <li>Projects</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-3">
                    <button>
                        <LuInbox size={19}/>
                    </button>
                    <form action={ActionSwitch}>
                        <button
                            className="p-2 outline-none"
                            title="Switch Theme"
                        >
                            {
                                theme == "light" ? <LuMoon size={19}/> : <LuSun size={19}/>
                            }
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    </>);
}
