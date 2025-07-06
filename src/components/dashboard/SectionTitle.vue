<template>
   <div class="flex-items justify-between">
      <p class="text-grey-900 text-xl font-bold">{{ title }}</p>
      <router-link :to="link" class="text-sm text-grey-500 flex gap-x-3">
         {{ ctaText }}
         <img src="/assets/icons/icon-caret-right.svg" alt="" />
      </router-link>
   </div>
</template>

<script setup>
defineProps({
   title: String,
   link: String,
   ctaText: String,
})
</script>
