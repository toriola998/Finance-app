<template>
   <button class="">
      <span class="hidden md:flex items-center dropdown-btn">
         {{ text }}
         <img src="/assets/icons/icon-caret-down.svg" alt="" />
      </span>

      <img :src="icon" alt="" class="md:hidden w-6" />
   </button>
</template>

<script setup>
defineProps({
   icon: {
      type: String,
      default: '/assets/icons/icon-sort-mobile.svg',
   },
   text: String,
})
</script>
