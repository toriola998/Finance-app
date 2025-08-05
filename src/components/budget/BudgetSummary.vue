<template>
   <div class="bg-white px-5 py-6 rounded-2xl max-h-fit">
      <p class="font-bold text-grey-900">Spending Summary</p>
      <BudgetsChart :totalMax="totalMax" :totalSpent="totalSpent" />

      <div
         class="flex-items justify-between [&:not(:last-child)]:border-b border-beige-100 py-4"
         v-for="(item, index) in data.budgets"
         :key="index"
      >
         <div class="flex-items gap-x-4">
            <span
               class="block w-1 h-5 rounded-full"
               :style="{ backgroundColor: item.theme }"
            />
            <p class="text-sm text-grey-500">{{ item.category }}</p>
         </div>

         <p class="flex-items gap-x-2">
            <span class="font-bold text-grey-900">{{
               formatToDollar(Math.abs(getTotalAmountSpent(item.category)))
            }}</span>
            <span class="text-xs text-grey-500">of ${{ item.maximum }}</span>
         </p>
      </div>
   </div>
</template>

<script setup lang="js">
import { useDataStore } from '@/stores'
import { getTotalAmountSpent, formatToDollar } from '@/utils/shared-utils'
import { totalMax, totalSpent } from '@/utils/shared-utils'
import BudgetsChart from '../shared/BudgetsChart.vue'

const { financeData: data } = useDataStore()
</script>
