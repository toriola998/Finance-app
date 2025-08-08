<template>
   <div class="flex-items gap-x-2 relative">
      <p class="text-sm text-grey-500 hidden xl:block" v-if="title">
         {{ title }}
      </p>
      <Menu>
         <MenuButton>
            <slot />
         </MenuButton>

         <MenuItems :class="`options-dropdown ${customClass}`">
            <div
               class="flex flex-col min-h-0 max-h-60 overflow-y-auto no-scrollbar px-5"
            >
               <p
                  class="text-sm text-grey-500 px-4 py-3 lg:hidden"
                  v-if="title"
               >
                  {{ title }}
               </p>

               <menu-item
                  v-for="(item, index) in options"
                  :key="index"
                  class="item text-justify"
               >
                  <button
                     @click="$emit('select', item)"
                     class="capitalize text-start"
                  >
                     {{ item }}
                  </button>
               </menu-item>
            </div>
         </MenuItems>
      </Menu>
   </div>
</template>

<script setup lang="js">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
defineProps({
   options: Array,
   title: String,
   customClass: String,
})
</script>

<style scoped>
@reference "../../styles/main.css";

.options-dropdown {
   @apply absolute rounded-lg z-50 bg-white right-0 top-10;
   box-shadow: 0px 4px 24px 0px #00000040;
}
.options-dropdown .item {
   @apply text-black text-[14.5px] px-4 py-3 border-t border-grey-100;
}
</style>
