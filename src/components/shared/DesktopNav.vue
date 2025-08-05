<template>
   <nav class="relative">
      <div class="min-h-screen fixed bg-grey-900 rounded-r-2xl pr-6 w-[300px]">
         <router-link to="/" class="block mx-8 mb-16 mt-10">
            <img src="/assets/icons/logo-large.svg" alt="" />
         </router-link>

         <ul>
            <li v-for="(item, index) in navLinks" :key="index">
               <router-link
                  :to="item.link"
                  exact-active-class="bg-beige-100 rounded-r-lg border-l-4 border-green"
                  class="px-6 py-4 flex-items gap-x-5"
               >
                  <img
                     :src="`/assets/icons/${item.icon}`"
                     alt=""
                     :class="isActive(item.link) ? 'filter-green' : ''"
                  />
                  <span
                     class="text-grey-300 font-semibold text-sm"
                     :class="isActive(item.link) ? 'text-grey-900' : ''"
                     >{{ item.text }}</span
                  >
               </router-link>
            </li>

            <!-- <li class="absolute bottom-14">
               <button class="flex-items gap-x-5 px-6 text-grey-300 font-bold">
                  <img src="/assets/icons/icon-minimize-menu.svg" alt="" />
                  Minimize Menu
               </button>
            </li> -->
         </ul>
      </div>
   </nav>
</template>

<script setup>
defineProps({
   navLinks: Array,
   isActive: Function,
})
</script>
