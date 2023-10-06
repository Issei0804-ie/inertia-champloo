<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
    @vite('resources/js/vue3.js')
    @vite('resources/js/react.jsx')
    @vite('resources/js/svelte.js')
    @inertiaHead
</head>
<body>
    @inertia('react')
    @inertia('vue3')
    @inertia('svelte')
</body>
</html>
