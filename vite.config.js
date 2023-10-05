import {defineConfig} from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import react from "@vitejs/plugin-react";
require('dotenv').config()

const extendedViteDevServerOptions = {}

if (process.env.GITPOD_VITE_URL) {
    extendedViteDevServerOptions.hmr = {
        protocol: 'wss',
        host: new URL(process.env.GITPOD_VITE_URL).hostname,
        clientPort: 443
    }
}

export default defineConfig({
    server: {
        ...extendedViteDevServerOptions
    },
    plugins: [
        laravel({
            input: ['resources/js/vue3.js', 'resources/js/react.jsx'],
            refresh: true,
        }),
        // vue(),
        react(),
    ],
})
