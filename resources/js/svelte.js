import { createInertiaApp } from '@inertiajs/svelte'

createInertiaApp({
    id: 'svelte',
    resolve: name => {
        const pages = import.meta.glob('../svelte/**/*.svelte', { eager: true })
        return pages[`../svelte/${name}.svelte`]
    },
    setup({ el, App, props }) {
        new App({ target: el, props })
    },
})
