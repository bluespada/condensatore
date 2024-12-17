import React from 'react';

export default function AppLayout({ children }: { children: React.ReactNode }){
    return (<>
        <html>
            <head>
            </head>
            <body>
                <div id="farad" className="w-full h-full">
                    { children }
                </div>
            </body>
        </html>
    </>)
}
