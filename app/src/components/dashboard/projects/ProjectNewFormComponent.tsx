"use client";
import React from 'react';
import { Input, Selection } from '@/components/common/input';
import { BiLogoGithub } from 'react-icons/bi';
import { ActionCreateProjects } from '@/actions/projects';

export interface ProjectNewFormComponentProps {
}

export default function ProjectNewFormComponent(){
    const [formState, formAction] = React.useActionState(ActionCreateProjects, {});

    React.useEffect(() => {
        if(Object.keys(formState).length == 0) return;
    }, [formState]);

    return (<>
        <div className="w-full h-full pt-12">
            <div className="card bg-base-100 dark:bg-base-200 w-full rounded-md border border-gray-300 dark:border-gray-400/15">
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
                        action={ActionCreateProjects}
                        className="flex flex-col gap-3 px-4 py-3"
                    >
                        <Input
                            label="Project Name"
                            name="name"
                            placeholder="Project Name"
                            required
                        />
                        <Selection
                            label="User or Organization"
                            prefix={(<BiLogoGithub size={20}/>)}
                            options={[
                                {
                                    key: 0,
                                    value: "https://github.com/mathca-labs/condensatore"
                                }
                            ]}
                            placeholder="Select User or Organization"
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
                        <div className="w-full flex flex-row items-center justify-between pt-12">
                            <button className="btn btn-primary btn-sm" type="button">
                                Back
                            </button>
                            <div className="flex flex-row items-center gap-3">
                                <span className="dark:text-gray-300/30 text-gray-500 text-xs">
                                    <span className="italic">Tips</span>: You can still rename your project later
                                </span>
                                <button className="btn btn-sm btn-primary outline-none" type="submit">
                                    Start endless journey
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>);
}
