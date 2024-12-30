"use client";
import React from 'react';
import {
    Input,
    TextArea,
    Selection,
} from '@/components/common/input';
import {
    BiLogoGithub
} from 'react-icons/bi';

export interface ProjectNewFormComponentProps {
}

export default function ProjectNewFormComponent(){
    return (<>
        <div className="w-full h-full pt-12">
            <div className="card bg-base-200 w-full rounded-md border border-gray-300 dark:border-gray-400/15">
                <div className="card-body p-0 flex flex-col">
                    <div className="flex flex-col gap-1.5 border-b border-gray-300 dark:border-gray-400/15 px-6 py-2.5">
                        <span className="text-2xl">
                            Let's build something new
                        </span>
                        <div className="flex flex-col">
                            <span className="text-sm text-gray-500 dark:border-gray-300">
                                Your project will have their own dedicated server instance.
                            </span>
                            <span className="text-sm text-gray-500 dark:border-gray-300">
                                You can setup your project name later on project's settings
                            </span>
                        </div>
                    </div>
                </div>
                <div className="min-h-[20px]">
                    <form
                        className="flex flex-col gap-1.5 px-4 py-3"
                    >
                        <Input
                            label="Project Name"
                            placeholder="Project Name"
                            required
                        />
                        <Selection
                            label="Select Repositories"
                            prefix={(<BiLogoGithub size={20}/>)}
                            options={[
                                {
                                    key: 0,
                                    value: "https://github.com/mathca-labs/condensatore"
                                }
                            ]}
                            placeholder="Select repositories"
                        />
                    </form>
                </div>
            </div>
        </div>
    </>);
}
