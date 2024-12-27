"use client";
import React from 'react';
import { signIn } from 'next-auth/react';

interface AuthSignInFormComponentProps {
    action?: (unkown) => unknown;
}

export default function AuthSignInFormComponent(props: AuthSignInFormComponentProps) {
    
    const [login, setLogin] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await signIn("credentials", {
            login,
            password,
        }, { redirect: false });
    };

    return (
        <>
            <div className="w-full h-full min-h-screen flex flex-col items-center justify-center">
                <form
                    className="flex flex-col gap-3"
                    onSubmit={handleLogin}
                >
                    <input
                        className="input input-primary input-sm"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <input
                        className="input input-primary input-sm"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className="btn btn-sm btn-primary">
                        Login
                    </button>
                </form>
            </div>
        </>
    );
}
