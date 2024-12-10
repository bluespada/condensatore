import { defineConfig } from 'vite';
import solidPlugins from 'vite-plugin-solid';
import path from 'path';

export default defineConfig({
    plugins: [
        solidPlugins(),
    ],
    resolve: {
        alias: {
            '@web': path.resolve(__dirname, 'src'),
        }
    }
});