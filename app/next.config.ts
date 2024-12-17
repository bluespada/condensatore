import type { NextConfig } from 'next';

const config : NextConfig = {
    experimental: {
    },
    async rewrites(){
        return [
            {
                source: "/api/v1/:path*",
                destination: process.env.BASE_URL || "http://localhost:3001/api/v1"

            }
        ]
    }
};

export default config;
