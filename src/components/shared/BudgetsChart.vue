<template>
   <div class="max-w-[220px] mx-auto mb-4">
      <Doughnut
         v-if="chartData.datasets[0].data.length"
         :data="chartData"
         :options="options"
      />
   </div>
</template>

<script setup>
import { computed } from 'vue'
import { useDataStore } from '@/stores/data'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

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
</script>
