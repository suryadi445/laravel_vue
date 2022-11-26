/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';
import router from './router';

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
