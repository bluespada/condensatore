import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            role?: number
            image?: string
        } & DefaultSession['user'],
    }
    
    interface User {
        id?: string
        name?: string
        image?: string
        role?: number
    }
}