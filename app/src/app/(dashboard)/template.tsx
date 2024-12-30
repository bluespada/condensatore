import React from 'react';
import HeaderComponent from '@/components/dashboard/HeaderComponent';
import SidebarComponent from '@/components/dashboard/SidebarComponent';

export default function AppTemplate({ children }){
    return (<>
        <HeaderComponent/>
        <SidebarComponent/>
        <main className="pl-52 w-full h-full">
            <div className="dark:bg-base-100 bg-base-200 w-full h-full px-8">
                { children }
            </div>
        </main>
    </>);
};
