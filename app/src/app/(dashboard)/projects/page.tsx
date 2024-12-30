import React from 'react';
import client from '@/lib/db';
import { auth } from '@/auth';
import ProjectListComponent from '@/components/dashboard/projects/ProjectListComponent';
import { Metadata } from 'next';

export const metadata : Metadata = {
    title: "Dashboard | Condensatore"
}

export default async function Dashboard(){
    const session = await auth();
    const projects = await client.projects.findMany({
        where: {
            userId: Number.parseInt(session.user.id),
        }
    });
    return (<ProjectListComponent data={projects}/>)
}
