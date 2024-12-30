"use client";
import React from 'react';
import {
    LuInbox,
    LuMoon,
    LuSun,
} from 'react-icons/lu';
import { ActionSwitch } from '@/actions/theme';
import { useCookies } from 'next-client-cookies';
import { usePathname } from 'next/navigation';
import { parsePathnameToBreadcrumbs, capitalFirst } from '@/lib/function';

export default function HeaderComponent(){
    const c = useCookies();
    const theme = c.get("theme") || "light";
    const pathname = usePathname();
    const breadcrumbs = parsePathnameToBreadcrumbs(pathname);
    return (<>
        <nav className="w-full pl-52">
            <div className="w-full flex bg-base-200 dark:bg-base-100 flex-row items-center justify-between border-b border-gray-300 dark:border-gray-400/20 px-12 py-1.5">
                <div className="flex flex-row items-center">
                    <div className="breadcrumbs text-sm">
                        <ul>
                            <li>Dashboard</li>
                            {
                                breadcrumbs.map((i, k) => (<li 
                                    key={k}
                                >
                                    { capitalFirst(i) }
                                </li>))
                            }
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
