import React from 'react';
import { Metadata } from 'next';
import ProjectNewFormComponent from '@/components/dashboard/projects/ProjectNewFormComponent';

export const metadata: Metadata = {
    title: "Create a projects | Condensatore"
}

export default function NewProjectViews(){
    return <ProjectNewFormComponent/>;
}
