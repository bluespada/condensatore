/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
    },
    webpack: (config) => {
        // Resolve 'fs' module to avoid errors
        config.resolve.fallback = {
            "pg": false,
            "pg-native": false,
            // Add other fallbacks if needed
        };
        return config;
    },
};

module.exports = nextConfig;
