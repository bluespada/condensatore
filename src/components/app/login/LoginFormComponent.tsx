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

export default function LoginFormComponent() : React.ReactNode {
    
    const [rememberMe, setRememberMe] = React.useState<boolean>(false);

    return (<>
        <div className="w-full h-full flex flex-col">
            <form 
                className="w-full flex flex-col gap-3.5"
            >
                <Input
                    label="Email address"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    required
                />
                <Input
                    label="Password"
                    name="password"
                    type="password"
                    required
                />
                <div className="form-control">
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
                        className="btn btn-sm btn-primary w-full text-sm"
                    >
                        <LuLogIn size={18}/>
                        <span>Sign In</span>
                    </button>
                </div>
            </form>
        </div>
    </>);
}
