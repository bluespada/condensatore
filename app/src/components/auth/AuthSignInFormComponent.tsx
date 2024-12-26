"use client";
import React from 'react';

interface AuthSignInFormComponentProps {
    action?: (unkown) => unknown;
}

export default function AuthSignInFormComponent(props: AuthSignInFormComponentProps) {
    
    const [login, setLogin] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="w-full h-full min-h-screen flex flex-col items-center justify-center">
                <span>hahaha</span>
            </div>
        </>
    );
}
