<template>
   <div class="bg-white rounded-lg px-5 py-6 md:p-8">
      <div class="flex-items gap-x-4">
         <span class="block rounded-full h-5 w-5 bg-green" />
         <p class="font-bold text-xl text-grey-900">Entertainment</p>
      </div>
      <p class="text-grey-500 text-sm py-5">Maximum of $50.00</p>

      <div
         class="w-full bg-beige-100 rounded h-10 overflow-hidden mb-4 p-[6px]"
      >
         <div
            class="bg-green h-full rounded"
            :style="{ width: (3 / 7.59) * 100 + '%' }"
         />
      </div>

      <div class="py-5 grid grid-cols-2 justify-between">
         <div class="flex-items gap-x-4">
            <span :class="`block w-1 h-10 rounded-full bg-green`" />

            <div>
               <p class="text-xs text-grey-500 mb-[6px]">Spent</p>
               <p class="text-grey-900 font-bold text-sm">$15.00</p>
            </div>
         </div>

         <div class="flex-items gap-x-4">
            <span :class="`block w-1 h-10 rounded-full bg-beige-100`" />

            <div>
               <p class="text-xs text-grey-500 mb-[6px]">Remaining</p>
               <p class="text-grey-900 font-bold text-sm">$15.00</p>
            </div>
         </div>
      </div>

      <LatestSpending />
   </div>
</template>

<script setup>
import LatestSpending from './LatestSpending.vue'
</script>
