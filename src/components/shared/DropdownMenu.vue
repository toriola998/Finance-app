<template>
   <Menu>
      <MenuButton>
         <slot />
      </MenuButton>

      <MenuItems :class="`options-dropdown border border-red ${customClass}`">
         <p class="title" v-if="title">
            {{ title }}
         </p>
         <div class="flex flex-col min-h-0 max-h-60 overflow-y-auto">
            <menu-item
               v-for="(item, index) in options"
               :key="index"
               class="item text-justify"
            >
               <button @click="item.action" class="capitalize text-start">
                  {{ item }}
               </button>
            </menu-item>
         </div>
      </MenuItems>
   </Menu>
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
   @apply absolute rounded-lg shadow z-50 bg-red h-20;
}
.options-dropdown .item {
   @apply text-black text-[14.5px] hover:bg-gray-50 px-4 py-3;
}
.options-dropdown .title {
   @apply text-black font-semibold mb-4 pt-2 px-4;
}
</style>
