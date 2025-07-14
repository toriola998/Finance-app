<template>
   <nav
      class="bg-grey-900 rounded-t-lg flex justify-between pt-2 md:pb-2 px-4 md:px-10 fixed bottom-0 right-0 left-0 z-50"
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
</template>

<script setup>
defineProps({
   navLinks: Array,
   isActive: Function,
})
</script>
