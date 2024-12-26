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
        async authorize(credentials, request) {
            const res = await fetch("/api/auth/sigin_validation", {
                method: "POST",
                body: JSON.stringify(credentials)
            });
            if(res.ok){
                console.log(res.ok);
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