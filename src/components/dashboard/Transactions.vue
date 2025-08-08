<template>
   <DashboardCardLayout
      title="Transactions"
      cta-text="View All"
      link="/transactions"
   >
      <div
         :class="`flex-items justify-between py-4 [&:not(:last-child)]:border-b border-grey-100`"
         v-for="(item, index) in latestTransactions"
         :key="index"
      >
         <div class="flex-items gap-x-4">
            <img :src="item.avatar" alt="" class="h-8 w-8 rounded-full" />
            <p class="font-bold text-sm text-grey-900">{{ item.name }}</p>
         </div>

         <div>
            <p class="text-sm font-bold text-green">{{ item.amount }}</p>
            <p class="text-xs text-grey-500 mt-2">
               {{ formatDate(item.date) }}
            </p>
         </div>
      </div>
   </DashboardCardLayout>
</template>

<script setup>
import DashboardCardLayout from '../layout/DashboardCardLayout.vue'
import { formatDate } from '@/utils/date'
import { computed } from 'vue'
import { useDataStore } from '@/stores'
const { financeData } = useDataStore()

const latestTransactions = computed(() => {
   return financeData.transactions.slice(0, 5)
})
</script>
