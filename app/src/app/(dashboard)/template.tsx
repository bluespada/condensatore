import React from 'react';

export default function AppTemplate({ children }){
    return (<>
        <main className="w-full h-full">
            { children }
        </main>
    </>);
};
