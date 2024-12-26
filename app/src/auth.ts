import NextAuth, { NextAuthConfig } from 'next-auth';
import { Provider } from 'next-auth/providers';

/**
 * Array of authentication providers.
 * Currently empty, but can be populated with various providers (e.g., Google, GitHub).
 */
const providers: Provider[] = [];

/**
 * Configuration object for NextAuth.
 * This object defines the authentication providers and other settings.
 * @type {NextAuthConfig}
 */
const config: NextAuthConfig = {
    providers,
};

/**
 * Exported handlers and authentication functions from NextAuth.
 * - handlers: Functions to handle authentication routes.
 * - auth: Function to handle authentication status.
 * - signIn: Function to initiate the sign-in process.
 * - signOut: Function to initiate the sign-out process.
 */
export const { handlers, auth, signIn, signOut } = NextAuth(config);