import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import User from '../pages/User.vue'
import NotFound from '../pages/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { name: 'Home', path: '/home', component: Home },
    { name: 'About', path: '/about', component: About },
    { name: 'User', path: '/user/:nama?', component: User, props: true },
    { path: "/:catchAll(.*)", component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router
