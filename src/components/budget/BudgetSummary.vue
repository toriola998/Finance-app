<template>
   <div class="bg-white px-5 py-6 rounded-2xl max-h-fit">
      <p class="font-bold text-grey-900">Spending Summary</p>

      <div
         class="flex-items justify-between [&:not(:last-child)]:border-b border-beige-100 py-4"
         v-for="(item, index) in budgets"
         :key="index"
      >
         <div class="flex-items gap-x-4">
            <span :class="`block w-1 h-5 rounded-full ${item.color}`" />
            <p class="text-sm text-grey-500">{{ item.title }}</p>
         </div>

         <p class="flex-items gap-x-2">
            <span class="font-bold text-grey-900">{{ item.value }}</span>
            <span class="text-xs text-grey-500">of $250.00</span>
         </p>
      </div>
   </div>
</template>

<script setup>
import { budgets } from '@/data/shared'
</script>
