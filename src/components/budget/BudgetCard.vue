<template>
   <div
      class="bg-white rounded-lg px-5 py-6 md:p-8"
      v-for="(item, index) in data.budgets"
      :key="index"
   >
      <div class="flex-items gap-x-4">
         <span
            class="block rounded-full h-5 w-5"
            :style="{ backgroundColor: item.theme }"
         />
         <p class="font-bold text-xl text-grey-900">{{ item.category }}</p>
      </div>
      <p class="text-grey-500 text-sm py-5">Maximum of ${{ item.maximum }}</p>

      <div
         class="w-full bg-beige-100 rounded h-10 overflow-hidden mb-4 p-[6px]"
      >
         <div
            class="h-full rounded"
            :style="{
               backgroundColor: item.theme,
               width: (3 / 7.59) * 100 + '%',
            }"
         />
      </div>

      <div class="py-5 grid grid-cols-2 justify-between">
         <div class="flex-items gap-x-4">
            <span
               class="block w-1 h-10 rounded-full"
               :style="{ backgroundColor: item.theme }"
            />

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

      <LatestSpending :latest-spending="filterByCategory(item.category)" />
   </div>
</template>

<script setup>
import data from '../../../data.json'
import LatestSpending from './LatestSpending.vue'

function filterByCategory(category) {
   return data.transactions.filter((item) => item.category === category)
}

// defineProps({
//    category: String,
//    maximum: Number,
//    theme: String,
// })
</script>
