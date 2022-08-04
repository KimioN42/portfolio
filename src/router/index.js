import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/contact',
        name: 'contact',
        component: ContactView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }
        // still need to figure out a way to scroll to hash when navigating between views...
        // probably the transition is the issue here
        if (to.hash) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve({
                        el: to.hash,
                        behavior: 'smooth'
                    }, 5000)
                })
            })
        } else {
            return {
                top: 0,
                behavior: 'smooth'
            }
        }
    }
})

export default router
