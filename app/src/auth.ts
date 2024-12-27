import NextAuth from 'next-auth';
import { Provider } from 'next-auth/providers';
import config from '@/auth.config';
import CredentialsProviders from 'next-auth/providers/credentials';
import client from '@/lib/db';
import { compare } from 'bcrypt';

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
            const auth = await client.auth.findFirst({
                where: {
                    email: credentials?.login,
                }
            });
            if(auth){
                const isValid = await compare(credentials?.password as string, auth.password);
                if(!isValid){
                    return null;
                }
                return {
                    id: auth.ID.toString(),
                    email: auth.email
                }
            }
            return null;
        },
    }),
];

/**
 * Exported handlers and authentication functions from NextAuth.
 * - handlers: Functions to handle authentication routes.
 * - auth: Function to handle authentication status.
 * - signIn: Function to initiate the sign-in process.
 * - signOut: Function to initiate the sign-out process.
 */
export const { handlers, auth, signIn, signOut } = NextAuth({
    providers,
    pages: {
        signIn: "/signin",
        signOut: "/signout",
    },    
    callbacks: {
        async session({ session, user, token }){
            const auth = await client.auth.findFirst({
                where: {
                    email: session?.user?.email,
                },
                include: {
                    users: true,
                }
            });
            session.user.id = auth.ID.toString();
            session.user.email = auth.email;
            session.user.role = auth.users.role;
            session.user.name = auth.users.name;
            session.user.image = auth.users.image;
            return session;
        }
    },
    ...config,
});
