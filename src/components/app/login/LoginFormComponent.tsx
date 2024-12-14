/**
 * Copyright (C) 2024 Condensatore Contributor
 * Copyright (C) 2024 Bluespada <pentingmain@gmail.com>
 * 
 * This file is part of Condensatore.
 * 
 * Condensatore is free software: you can redistribute it and/or modify
 * it under the terms of the MIT License.
 * 
 * You should have received a copy of the MIT License along with Condensatore.
 * If not, see <https://mit-license.org/>.
 * 
*/

"use client";
import React from 'react';
import { 
    Input
} from '@app/components/form/input';
import { LuLogIn } from 'react-icons/lu';
import { z } from 'zod';
import { signIn } from 'next-auth/react';
// import { ActionSignIn } from '@app/app/login/actions';

export default function LoginFormComponent() : React.ReactNode {
    
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [rememberMe, setRememberMe] = React.useState<boolean>(false);
    
    /**
    const [formState, formAction, pending] = React.useActionState(ActionSignIn, null);

    React.useEffect(() => {
        if(!formState) return;

    }, [formState]);
    */

    const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await signIn("credentials", {

        }, { email: email, password: password })
    }

    return (<>
        <div className="w-full h-full flex flex-col">
            <form 
                onSubmit={handleSignIn}
                className="w-full flex flex-col gap-3.5"
            >
                <Input
                    label="Email address"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                    schema={z.string().min(1, "Email cannot be empty.").email({ message: "Email must be valid." })}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    label="Password"
                    name="password"
                    type="password"
                    required
                    schema={z.string().min(1, "Password cannot be empty.")}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div className="hidden form-control">
                    <label htmlFor="remember_me" onClick={() => setRememberMe(!rememberMe)} className="label justify-start gap-3 cursor-pointer">
                        <input 
                            name="remember_me"
                            type="checkbox"
                            className="checkbox"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        <span className="label-text">Remember Me</span>
                    </label>
                </div>
                <div className="w-full pt-2">
                    <button 
                        type="submit"
                        className="btn btn-sm btn-primary w-full text-sm disabled:bg-primary/40 disabled:text-base-100"
                    >
                        <LuLogIn size={18}/>
                        <span>Sign In</span>
                    </button>
                </div>
            </form>
        </div>
    </>);
}
