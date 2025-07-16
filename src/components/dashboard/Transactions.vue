<template>
   <section class="dashboard-card">
      <SectionTitle
         title="Transactions"
         cta-text="View All"
         link="/transactions"
      />

      <div
         :class="`flex-items justify-between py-4 [&:not(:last-child)]:border-b border-grey-100`"
         v-for="(item, index) in data.transactions.splice(0, 5)"
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
   </section>
</template>

<script setup>
import SectionTitle from './SectionTitle.vue'
import data from '../../../data.json'
import { formatDate } from '@/utils/date'
</script>
