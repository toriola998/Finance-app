<template>
   <div class="px-4 pt-6 pb-20 md:pb-28 bg-beige-100 min-h-screen">
      <header>
         <h1 class="text-grey-900 font-bold text-[32px] mb-8">Overview</h1>
      </header>

      <slot />

      <MobileNav :navLinks="navLinks" :isActive="isActive" />
   </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import MobileNav from '../shared/MobileNav.vue'

const route = useRoute()

const isActive = (link) => route.path === link

defineProps({
   title: String,
})

const navLinks = [
   {
      link: '/dashboard',
      icon: 'icon-nav-overview.svg',
      text: 'Overview',
   },
   {
      link: '/budgets',
      icon: 'icon-nav-budgets.svg',
      text: 'Budgets',
   },
   {
      link: '/transactions',
      icon: 'icon-nav-transactions.svg',
      text: 'Transactions',
   },
   {
      link: '/pots',
      icon: 'icon-nav-pots.svg',
      text: 'Pots',
   },

   {
      link: '/recurring-bills',
      icon: 'icon-nav-recurring-bills.svg',
      text: 'Recurring Bills',
   },
]
</script>
