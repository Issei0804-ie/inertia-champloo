import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'

createInertiaApp({
    id: 'vue3',
    resolve: name => {
        const pages = import.meta.glob('../vue3/**/*.vue', { eager: true })
        return pages[`../vue3/${name}.vue`]
    },
    setup({ el, App, props, plugin }) {
        console.log(el);
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el)
    },
})
