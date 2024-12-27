import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            id?: number | string
            role?: string[]
            image?: string
        } & DefaultSession['user'],
    }
    
    interface User {
        id?: string
        name?: string
        image?: string
        role?: string[]
    }
}
