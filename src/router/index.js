import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Login from '@/views/auth/Login.vue'

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         path: '/',
         name: 'login',
         component: Login,
      },
      {
         path: '/sign-up',
         name: 'Sign-Up',
         // route level code-splitting
         // this generates a separate chunk (About.[hash].js) for this route
         // which is lazy-loaded when the route is visited.
         component: () => import('../views/auth/SignUp.vue'),
      },
      {
         path: '/dashboard',
         name: 'Dashboard',
         component: () => import('../views/Dashboard.vue'),
      },
      {
         path: '/transactions',
         name: 'Transactions',
         component: () => import('../views/Transactions.vue'),
      },
      {
         path: '/budgets',
         name: 'Budgets',
         component: () => import('../views/Budgets.vue'),
      },
      {
         path: '/pots',
         name: 'Pots',
         component: () => import('../views/Pots.vue'),
      },
      {
         path: '/recurring-bills',
         name: 'RecurringBills',
         component: () => import('../views/RecurringBills.vue'),
      },
   ],
})

export default router
