import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'

createInertiaApp({
    id: 'react',
    resolve: name => {
        const pages = import.meta.glob('../react/**/*.jsx', { eager: true })
        return pages[`../react/${name}.jsx`]
    },
    setup({ el, App, props }) {
        createRoot(el).render(<App {...props} />)
    },
})
