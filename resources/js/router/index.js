import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import User from '../pages/User.vue'
import Register from '../pages/Register.vue'
import Profile from '../pages/Profile.vue'
import NotFound from '../pages/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    { name: 'Home', path: '/home', component: Home },
    { name: 'About', path: '/about', component: About },
    { name: 'User', path: '/user', component: User },
    { name: 'Register', path: '/user/create', component: Register },
    { name: 'Profile', path: '/user/:id?', component: Profile, props: true },
    { path: "/:catchAll(.*)", component: NotFound },
]

const router = createRouter({
    linkActiveClass: 'active',
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

export default router
