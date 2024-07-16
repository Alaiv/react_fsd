import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteSvgr from 'vite-plugin-svgr';

export default defineConfig({
    plugins: [
        react(),
        viteSvgr({
            exportAsDefault: true,
        }),
    ],
    resolve: {
        alias: [
            { find: '@', replacement: '/src' },
        ],
    },
    define: {
        __IS_DEV__: JSON.stringify(true),
        __API_URL__: JSON.stringify('http://localhost:8000'),
        __PROJECT__: JSON.stringify('frontend'),
    },
});
