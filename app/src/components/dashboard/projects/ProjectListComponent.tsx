"use client";
import React from 'react';
import Link from 'next/link';
import { Projects } from '@prisma/client';

export interface ProjectListComponentProps {
    data?: Projects[]
}

export default function ProjectListComponent(props: ProjectListComponentProps){
    return props?.data.length == 0 ? (<ProjectEmpty/>): (<>

    </>);
}

export function ProjectEmpty(){
    return (<>
        <div className="w-full h-full flex flex-col items-center">
            <div className="pb-12">
            </div>
            <div className="w-full h-[60vh] border dark:border-gray-400/20 border-gray-500 border-dashed flex flex-col items-center justify-center rounded-lg">
                <span>
                    No Projects Found
                </span>
                <span className="pb-12 dark:text-gray-400 text-gray-400 text-sm">
                    Getting started with your brand new projects
                </span>
                <Link href="/projects/new" className="btn btn-sm btn-primary w-72">
                    Create Project
                </Link>
            </div>
        </div>
    </>);
}
