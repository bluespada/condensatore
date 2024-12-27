"use client";
import React from 'react';
import { Input } from '@/components/common/input';
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';


interface AuthSignInFormComponentProps {
    action?: (unkown) => unknown;
}

const error_code = {
    "credentials": "Invalid login or password",
}

export default function AuthSignInFormComponent(props: AuthSignInFormComponentProps) {
    const searchParams = useSearchParams();
    const [login, setLogin] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await signIn("credentials", {
            login,
            password,
            redirect: true,
            redirectTo: "/"
        });
    };

    return (
        <>
            <div className="w-full h-full flex flex-col items-center">
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
                    <div
                        className={searchParams.get("error") ? `gap-3 flex flex-col border border-red-500 rounded-md p-2 bg-red-500/20 text-red-500` : 'hidden'}
                    >
                        <span className="text-base font-semibold">
                            Error : {searchParams.get("error")}
                        </span>
                        <span>
                            { error_code[searchParams.get("code")] }
                        </span>
                    </div>
                    <button className="btn btn-primary">
                        Login
                    </button>
                </form>
            </div>
        </>
    );
}
