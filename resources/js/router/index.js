import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import NotFound from '../pages/NotFound.vue'
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

export default router
