import {defineConfig} from 'vite'
import laravel from 'laravel-vite-plugin'
import vue from '@vitejs/plugin-vue'
import react from "@vitejs/plugin-react";
import { svelte } from '@sveltejs/vite-plugin-svelte';
const vitePreprocess = import('@sveltejs/vite-plugin-svelte').then(m => m.vitePreprocess())

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
        laravel.default({
            input: ['resources/js/vue3.js', 'resources/js/react.jsx', 'resources/js/svelte.js'],
            refresh: true,
        }),
        vue(),
        react(),
        svelte({
            preprocess: {
                //@ts-ignore
                script:async (options) => (await vitePreprocess).script(options),
                //@ts-ignore
                style:async (options) => (await vitePreprocess).style(options),
            }
        })
    ],
})
