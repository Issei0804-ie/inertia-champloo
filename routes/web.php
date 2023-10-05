<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/vue3', function () {
    \Inertia\Inertia::setRootView('vue3');
    return \Inertia\Inertia::render('Hello');
});

Route::get('/react', function () {
    \Inertia\Inertia::setRootView('react');
    return \Inertia\Inertia::render('Hello');
});

Route::get('/svelte', function () {
    \Inertia\Inertia::setRootView('svelte');
    return \Inertia\Inertia::render('Hello');
});

Route::get('/champloo', function () {
    \Inertia\Inertia::setRootView('champloo');
    return \Inertia\Inertia::render('Hello');
});
