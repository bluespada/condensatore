import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import path from 'path';
import solidDevtools from 'solid-devtools/vite';

const config = defineConfig({
    ssr: {
        external: true,
    },
    plugins: [
        solid({ hot: true }),
        solidDevtools(),
    ],
    server: {
        port: 3000,
        proxy: {
            "/api": "http://localhost:3001"
        }
    },
    resolve: {
        alias: {
            "@app": path.resolve(__dirname, "../app"),
            "@shd": path.resolve(__dirname, "../shared")
        }
    }
});

export default config;
