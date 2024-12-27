"use client";
import React from 'react';
import { Input } from '@/components/common/input';
import { signIn } from 'next-auth/react';


interface AuthSignInFormComponentProps {
    action?: (unkown) => unknown;
}

export default function AuthSignInFormComponent(props: AuthSignInFormComponentProps) {
    
    const [login, setLogin] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await signIn("credentials", {
            login,
            password,
        }, { redirect: false });
        console.log(res);
    };

    return (
        <>
            <div className="w-full h-full min-h-screen flex flex-col items-center">
                <div
                    className="w-full md:w-1/3 flex flex-col pt-12 pb-8"
                >
                    <span className="text-2xl font-bold">
                        Welcome Back
                    </span>
                    <span className="text-gray-400 text-sm">
                        Sign in to Your account.
                    </span>
                </div>
                <form
                    className="w-full md:w-1/3 flex flex-col gap-3"
                    onSubmit={handleLogin}
                >
                    <Input
                        label="Login"
                        type="text"
                        required
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <Input
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button className="btn btn-primary">
                        Login
                    </button>
                </form>
            </div>
        </>
    );
}
