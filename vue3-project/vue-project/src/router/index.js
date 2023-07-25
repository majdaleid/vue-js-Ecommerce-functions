import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Products from '../views/Products.vue'
import PastOrders from '../views/PastOrders.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'Products',
      component:Products
    },
    {
      path: '/past-orders',
      name: 'PastOrders',
      component:PastOrders
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    //  component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
