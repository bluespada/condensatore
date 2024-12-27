import { NextAuthConfig } from 'next-auth';

export default {
    secret: process.env.NEXTAUTH_SECRET || "EE5AD6A7AABDF5E8CA13A874C5A9CAEA396964DCD77C77CE116FF4DBA6",
    session: {
        strategy: "jwt"
    },
    pages: {
        "signIn": "/signin",
    },
} as NextAuthConfig;