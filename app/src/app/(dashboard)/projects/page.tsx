import React from 'react';
import client from '@/lib/db';
import { auth } from '@/auth';
import ProjectListComponent from '@/components/dashboard/projects/ProjectListComponent';
import { Metadata } from 'next';
import { Octokit } from '@octokit/rest';

export const metadata : Metadata = {
    title: "Dashboard | Condensatore"
}

export default async function Dashboard(){
    const octo = new Octokit({
        auth: process.env.GIT_ACCESS,
    });
    const orgs = await octo.orgs.listForAuthenticatedUser();
    const repos = await octo.repos.listForOrg({ org: "astinagroup", type: "all", per_page: 100, page: 2 })
    console.info(orgs.data.map(i => i.login), repos.data.map(i => i.name));
    const session = await auth();
    const projects = await client.projects.findMany({
        where: {
            userId: Number.parseInt(session.user.id),
        }
    });
    return (<ProjectListComponent data={projects}/>)
}
