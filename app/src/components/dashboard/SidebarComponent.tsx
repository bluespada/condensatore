"use client";
import React from 'react';
import {
    LuLogOut,
    LuPuzzle,
    LuUser,
    LuLock,
    LuBriefcaseBusiness,
    LuServer,
    LuUsers,
    LuShield,
    LuArrowUpRight,
} from 'react-icons/lu';
import {
    LiaDocker
} from 'react-icons/lia';
import {
    SiCloudflareworkers
} from 'react-icons/si';
import { signOut } from 'next-auth/react';
import Link from 'next/link';


export default function SidebarComponent(){
    return (<>
        <aside className="fixed top-0 left-0 w-52 z-[2]">
            <div className="w-full h-screen overflow-hidden flex flex-col justify-between border-r dark:border-gray-400/20 border-gray-300">
                <div>
                </div>
                <div className="w-full h-full flex flex-col overflow-y-auto">
                    <span className="text-xs text-gray-500 dark:text-gray-400 uppercase px-4 py-2.5">
                        Menu
                    </span>
                    <SidebarItemMenu
                        icons={<LuBriefcaseBusiness size={20}/>}
                        name="Projects"
                        link="/"
                    />
                    <span className="text-xs text-gray-500 dark:text-gray-400 uppercase px-4 py-2.5">
                        Account
                    </span>
                    <SidebarItemMenu
                        icons={<LuUser size={20}/>}
                        name="Preferences"
                        link="/user"
                    />
                    <SidebarItemMenu
                        icons={<LuPuzzle size={20}/>}
                        name="Access Token"
                        link="/user"
                    />
                    <SidebarItemMenu
                        icons={<LuLock size={20}/>}
                        name="Audit Logs"
                        link="/user"
                    />
                    <span className="text-xs text-gray-500 dark:text-gray-400 uppercase px-4 py-2.5">
                        Administration
                    </span>
                    <SidebarItemMenu
                        icons={<LuUsers size={20}/>}
                        name="Users"
                        link="/manage/users"
                    />
                    <SidebarItemMenu
                        icons={<LiaDocker size={20}/>}
                        name="Docker"
                        link="/manage/docker"
                    />
                    <SidebarItemMenu
                        icons={<SiCloudflareworkers size={20}/>}
                        name="Workers"
                        link="/manage/workers"
                    />
                    <SidebarItemMenu
                        icons={<LuServer size={20}/>}
                        name="Domain"
                        link="/manage/dns"
                    />
                    <SidebarItemMenu
                        icons={<LuShield size={20}/>}
                        name="SSL Certificate"
                        link="/manage/ssl"
                    />
                    <span className="text-xs text-gray-500 dark:text-gray-300 uppercase px-4 py-2.5">
                        Documentation
                    </span>
                    <SidebarItemMenu
                        icons={<LuArrowUpRight size={20}/>}
                        name="Guide Book"
                        link="/user"
                    />
                    <SidebarItemMenu
                        icons={<LuArrowUpRight size={20}/>}
                        name="API Reference"
                        link="/user"
                    />
                </div>
                <div className="h-fit w-full">
                    <button
                        onClick={() => signOut({ redirectTo: "/signin" })}
                        title="signout"
                        className="flex flex-row items-center py-1.5 px-4 hover:px-[0.5rem] gap-2.5 hover:border-l-[0.5rem] hover:border-primary w-full hover:outline-none focus:outline-none"
                    >
                        <LuLogOut/>
                        <span>
                            Sign Out
                        </span>
                    </button>
                </div>
            </div>
        </aside>
    </>);
}

export function SidebarItemMenu({
    link, name, icons
}: { link: string, name?: string, icons: React.ReactNode }) {
    return (<>
        <Link 
            className="flex flex-row items-center py-1.5 px-4 hover:px-[0.5rem] gap-2.5 hover:border-l-[0.5rem] hover:border-primary w-full hover:outline-none focus:outline-none text-gray-600 dark:text-gray-300/80 hover:text-primary text-sm"
            href={link}
        >
            {icons}
            {name}
        </Link>
    </>)
}
