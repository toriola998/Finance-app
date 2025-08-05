<template>
   <div class="max-w-[220px] mx-auto mb-4 relative">
      <Doughnut
         v-if="chartData.datasets[0].data.length"
         :data="chartData"
         :options="options"
      />
      <div class="chart-center">
         <div class="text-grey-900 font-bold text-[32px]">
            ${{ totalSpent }}
         </div>
         <div class="text-grey-500 text-sm">of ${{ totalMax }} limit</div>
      </div>
   </div>
</template>

<script setup>
import { computed } from 'vue'
import { useDataStore } from '@/stores/data'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import {
   getTotalAmountSpent,
   getTotalMaxBudget,
   getTotalAmountSpentAllCategories,
} from '@/utils/shared-utils'

ChartJS.register(ArcElement, Tooltip, Legend)

const { financeData: data } = useDataStore()

const chartData = computed(() => {
   return {
      labels: data.budgets.map((item) => item.category),
      datasets: [
         {
            backgroundColor: data.budgets.map((item) => item.theme),
            data: data.budgets.map((item) => item.maximum), // ← Use actual values
            borderWidth: 0,
         },
      ],
   }
})

const options = {
   responsive: true,
   cutout: '65%',
   plugins: {
      legend: {
         display: false,
      },
   },
}
const totalSpent = computed(() => {
   return data.budgets.reduce((sum, item) => {
      const categorySpent = Math.abs(getTotalAmountSpent(item.category))
      return sum + categorySpent
   }, 0)
})

const totalMax = computed(() => {
   return data.budgets.reduce((sum, item) => sum + Number(item.maximum), 0)
})
</script>

<style scoped>
.chart-center {
   @apply absolute top-[50%] left-[50%] text-center;
   transform: translate(-50%, -50%);
   pointer-events: none;
}
</style>
