import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cart from '../views/Cart.vue'
import ProdectDetalis from '../views/ProdectDetalis.vue'
import Login from '../views/login.vue'
const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
    },
    {
        path: '/Cart',
        name: 'Cart',
        component: Cart,
    },
    {
        path: '/ProdectDetalis/:id',
        name: 'ProdectDetalis',
        component: ProdectDetalis,
        props: true,
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router
