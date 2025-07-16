<template>
   <DashboardCardLayout title="Pots" cta-text="See Details" link="/pots">
      <div class="md:grid grid-cols-2 gap-x-5">
         <div class="bg-beige-100 p-5 mb-5 flex gap-x-5 rounded-xl">
            <img src="/assets/icons/icon-pot.svg" alt="" />

            <div>
               <p class="text-sm text-grey-500 font-medium">Total Saved</p>
               <p class="text-[32px] text-grey-900 mt-3 font-bold">$850</p>
            </div>
         </div>

         <div class="grid grid-cols-2 gap-4">
            <div v-for="(item, index) in pots" :key="index">
               <div class="flex gap-x-4">
                  <span :class="`h-11 rounded-3xl block w-1 ${item.color}`" />
                  <div>
                     <p class="text-xs text-grey-500">{{ item.title }}</p>
                     <p class="font-bold mt-1">{{ item.value }}</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </DashboardCardLayout>
</template>

<script setup>
import DashboardCardLayout from '../layout/DashboardCardLayout.vue'
const pots = [
   {
      color: 'bg-green',
      title: 'Savings',
      value: '$159',
   },
   {
      color: 'bg-cyan',
      title: 'Gifts',
      value: '$40',
   },
   {
      color: 'bg-navy',
      title: 'Concert Ticket',
      value: '$110',
   },
   {
      color: 'bg-yellow',
      title: 'New Laptop',
      value: '$10',
   },
]
</script>
