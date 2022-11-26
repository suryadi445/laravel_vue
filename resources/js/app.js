/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import NotFound from './pages/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { path: '/home', component: Home },
    { path: '/about', component: About },
    { path: "/:catchAll(.*)", component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

const app = createApp({
    data() {
        return {
            title: 'Laravel 9',
        }
    }
});

import ExampleComponent from './components/ExampleComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
app.component('example-component', ExampleComponent);
app.component('header-component', HeaderComponent);
app.component('footer-component', FooterComponent);

app.use(router);
app.mount('#app');
