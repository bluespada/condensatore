import NextAuth, { NextAuthConfig } from 'next-auth';
import { Provider } from 'next-auth/providers';
import CredentialsProviders from 'next-auth/providers/credentials';

/**
 * Array of authentication providers.
 * Currently empty, but can be populated with various providers (e.g., Google, GitHub).
 */
const providers: Provider[] = [
    CredentialsProviders({
        name: "Credentials",
        credentials: {
            login: { type: "text", required: true },
            password: { type: "password", required: true }
        },
        async authorize(credentials, req) {
            const origin = new URL(req.url).origin;
            const res = await fetch(origin + "/api/custom/auth/validation", {
                method: "POST",
                body: JSON.stringify(credentials)
            });
            if(res.ok){
                console.log(res.ok, await res.text());
            }
            return null;
        },
    })
];

/**
 * Configuration object for NextAuth.
 * This object defines the authentication providers and other settings.
 * @type {NextAuthConfig}
 */
const config: NextAuthConfig = {
    providers,
    secret: process.env.NEXTAUTH_SECRET || "EE5AD6A7AABDF5E8CA13A874C5A9CAEA396964DCD77C77CE116FF4DBA6",
    pages: {
        "signIn": "/signin",
    }
};

/**
 * Exported handlers and authentication functions from NextAuth.
 * - handlers: Functions to handle authentication routes.
 * - auth: Function to handle authentication status.
 * - signIn: Function to initiate the sign-in process.
 * - signOut: Function to initiate the sign-out process.
 */
export const { handlers, auth, signIn, signOut } = NextAuth(config);