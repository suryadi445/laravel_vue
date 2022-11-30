/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import router from './router/index.js';

const app = createApp({
    data() {
        return {
            title: 'Laravel 9',
        }
    },
    computed: {
        nama() {
            // We will see what `params` is shortly
            return this.$route.params.nama
        },
    },
});

const options = {
    position: 'top-right',
    newestOnTop: true,
    maxToasts: 20,
    transition: 'Vue-Toastification__bounce',
    transitionDuration: 750,
    draggable: true,
    draggablePercent: 0.6,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    closeOnClick: true,
    timeout: 5000,
    container: document.body,
    toastClassName: [],
    bodyClassName: [],
    hideProgressBar: false,
    hideCloseButton: false,
    icon: true
};

import ExampleComponent from './components/ExampleComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
app.component('example-component', ExampleComponent);
app.component('header-component', HeaderComponent);
app.component('footer-component', FooterComponent);

app.use(Toast, options);
app.use(router);
app.mount('#app');
