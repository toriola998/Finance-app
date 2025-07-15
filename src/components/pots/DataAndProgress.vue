<template>
   <div class="flex-between mt-10 mb-4">
      <p class="text-grey-500 text-sm">{{ text }}</p>
      <p class="text-grey-900 font-bold text-[32px]">{{ amount }}</p>
   </div>

   <div class="w-full bg-beige-100 rounded-full h-2 overflow-hidden mb-4">
      <slot />
   </div>
   <div class="flex-between text-grey-500 mb-[30px]">
      <p class="font-bold text-sm">{{ percentage }}</p>
      <p class="text-xs">Target of {{ target }}</p>
   </div>
</template>

<script setup>
defineProps({
   target: String | Number,
   percentage: String | Number,
   text: String,
   amount: String | Number,
})
</script>
