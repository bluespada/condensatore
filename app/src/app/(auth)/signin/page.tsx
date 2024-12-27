import React from 'react';
import { Metadata } from 'next';
import AuthSignInFormComponent from '@/components/auth/AuthSignInFormComponent';

export const metadata : Metadata = {
    title: "Sign In - Condensatore"
}

export default function SigninViews() {
    return (<AuthSignInFormComponent />);
}