<template>
   <div v-for="(item, index) in list" :key="index">
      <div class="flex gap-x-4">
         <span :class="`h-11 rounded-3xl block w-1 ${item.color}`" />
         <div>
            <p class="text-xs text-grey-500">{{ item.title }}</p>
            <p class="font-bold mt-1">{{ item.value }}</p>
         </div>
      </div>
   </div>
</template>

<script setup>
defineProps({
   list: Array,
})
</script>
