<template>
   <DashboardCardLayout
      title="Recurring Bills"
      cta-text="See Details"
      link="/recurring-bills"
   >
      <div class="flex flex-col gap-y-3">
         <div
            v-for="(item, index) in bills"
            :key="index"
            :class="`text-sm flex-items justify-between px-4 py-5 bg-beige-100 rounded-lg border-l-4 ${item.borderColor}`"
         >
            <p class="text-grey-500">{{ item.title }}</p>
            <p class="text-grey-900 font-bold">{{ item.price }}</p>
         </div>
      </div>
   </DashboardCardLayout>
</template>

<script setup>
import DashboardCardLayout from '../layout/DashboardCardLayout.vue'

const bills = [
   {
      borderColor: 'border-green',
      title: 'Paid Bills',
      price: '$190.00',
   },
   {
      borderColor: 'border-yellow',
      title: 'Total Upcoming',
      price: '$194.98',
   },
   {
      borderColor: 'border-cyan',
      title: 'Due Soon',
      price: '$59.98',
   },
]
</script>
