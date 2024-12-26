import React from 'react';
import Link from 'next/link';
import * as Go from 'react-icons/go';
import * as Lu from 'react-icons/lu';

export default function AuthTemplate({ children }){
    return (<>
        <nav className="w-full">
            <div className="w-full flex flex-row justify-between items-center px-4 py-2">
                <div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                    <Link
                        href="https://github.com/mathca-labs/condensatore/wiki"
                        target="_blank"
                        className="flex flex-row gap-2 items-center bg-primary text-secondary text-sm px-4 py-1.5 rounded-md"
                    >
                        <Go.GoBook size={19} />
                        <span>Docs</span>    
                    </Link>
                    <Link
                        href="https://github.com/mathca-labs/condensatore/wiki"
                        target="_blank"
                        className="flex flex-row gap-2 items-center bg-primary text-secondary text-sm px-4 py-1.5 rounded-md"
                    >
                        <Lu.LuGithub size={19} />
                        <span>Github</span>    
                    </Link>
                </div>
            </div>
        </nav>
        <main className="w-full h-full min-h-screen">
            { children }
        </main>

    </>);
}