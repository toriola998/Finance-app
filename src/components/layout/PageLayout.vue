<template>
   <div class="px-4 pt-6 pb-20 bg-beige-100 min-h-screen">
      <header>
         <h1 class="text-grey-900 font-bold text-[32px] mb-8">Overview</h1>
      </header>

      <slot />

      <nav
         class="bg-grey-900 rounded-t-lg flex justify-between pt-2 md:pb-2 px-4 md:px-10 fixed bottom-0 right-0 left-0"
      >
         <router-link
            :to="item.link"
            v-for="(item, index) in navLinks"
            :key="index"
            exact-active-class="bg-beige-100 rounded-t-lg border-b-4 border-green"
            class="px-6 py-[10px]"
         >
            <img
               :src="`/assets/icons/${item.icon}`"
               alt=""
               :class="`block mx-auto ${isActive(item.link) ? 'filter-green' : ''}`"
            />
            <span
               class="hidden md:block text-center text-xs text-grey-300 mt-2 font-bold"
               :class="isActive(item.link) ? 'text-grey-900' : ''"
               >{{ item.text }}</span
            >
         </router-link>
      </nav>
   </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

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

<style scoped>
.filter-green {
   filter: brightness(0) saturate(100%) invert(33%) sepia(19%) saturate(1860%)
      hue-rotate(131deg) brightness(95%) contrast(92%);
}
</style>
