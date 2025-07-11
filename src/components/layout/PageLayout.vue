<template>
   <div
      class="px-4 pt-6 pb-20 lg:pl-0 lg:pb-0 lg:pt-0 md:pb-28 bg-beige-100 min-h-screen"
   >
      <div class="lg:hidden">
         <header>
            <h1 class="text-grey-900 font-bold text-[32px] mb-8">
               {{ title }}
            </h1>
         </header>

         <MobileNav :navLinks="navLinks" :isActive="isActive" />
         <main>
            <slot />
         </main>
      </div>

      <div class="hidden lg:grid grid-cols-[300px_auto] gap-x-10">
         <DesktopNav :navLinks="navLinks" :isActive="isActive" class="" />
         <div class="w-full py-10 max-w-[1500px] mx-auto">
            <header>
               <h1 class="text-grey-900 font-bold text-[32px] mb-8">
                  Overview
               </h1>
            </header>
            <main>
               <slot />
            </main>
         </div>
      </div>
   </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import MobileNav from '../shared/MobileNav.vue'
import DesktopNav from '../shared/DesktopNav.vue'

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
