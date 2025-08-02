import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import Login from '@/views/auth/Login.vue'

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   scrollBehavior(to, from, savedPosition) {
      // Always scroll to the top of the page on new route navigation
      if (to.hash) {
         // If there's a hash in the URL (e.g., #section-id), scroll to that element
         return { selector: to.hash, behavior: 'smooth' }
      } else if (savedPosition) {
         // If navigating back/forward, restore the saved scroll position
         return savedPosition
      } else {
         // Otherwise, scroll to the top of the page
         return { top: 0, behavior: 'smooth' }
      }
   },
   routes: [
      {
         path: '/login',
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
         path: '/',
         name: 'Overview',
         component: () => import('../views/Overview.vue'),
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
