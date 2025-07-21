<template>
   <div
      class="bg-white rounded-lg px-5 py-6 md:p-8"
      v-for="(item, index) in data.budgets"
      :key="index"
   >
      <div class="flex-between">
         <div class="flex-items gap-x-4">
            <span
               class="block rounded-full h-5 w-5"
               :style="{ backgroundColor: item.theme }"
            />
            <p class="font-bold text-xl text-grey-900">{{ item.category }}</p>
         </div>
         <DropdownMenu
            :options="['Edit Pot', 'Delete Pot']"
            custom-class="min-w-max"
         >
            <button>
               <img src="/assets/icons/icon-ellipsis.svg" alt="" />
            </button>
         </DropdownMenu>
      </div>
      <p class="text-grey-500 text-sm py-5">Maximum of ${{ item.maximum }}</p>

      <div
         class="w-full bg-beige-100 rounded h-10 overflow-hidden mb-4 p-[6px]"
      >
         <div
            class="h-full rounded"
            :style="{
               backgroundColor: item.theme,
               width: calculateProgress(item) + '%',
            }"
         />
      </div>

      <ExpenseTrack :item="item" />
      <LatestSpending :latest-spending="filterByCategory(item.category)" />
   </div>
</template>

<script setup>
import { getTotalAmountSpent, filterByCategory } from '@/utils/shared-utils'
import { useDataStore } from '@/stores/data'
import LatestSpending from './LatestSpending.vue'
import ExpenseTrack from './ExpenseTrack.vue'
import DropdownMenu from '../shared/DropdownMenu.vue'

const { financeData: data } = useDataStore()

function calculateProgress(item) {
   const spent = getTotalAmountSpent(item.category)
   const max = item.maximum

   if (max <= 0) return 0 // Avoid divide by zero

   const percentage = Math.abs(spent / max) * 100
   return Math.min(Math.max(percentage, 0), 100)
}
</script>
