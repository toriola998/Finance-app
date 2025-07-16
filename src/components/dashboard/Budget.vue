<template>
   <DashboardCardLayout title="Budgets" cta-text="See All" link="/budgets">
      <div class="grid grid-cols-2 gap-4 lg:flex flex-col">
         <ExpenceCard :list="budgets" />
      </div>
   </DashboardCardLayout>
</template>

<script setup>
import { budgets } from '@/data/shared'
import ExpenceCard from './ExpenceCard.vue'
import DashboardCardLayout from '../layout/DashboardCardLayout.vue'
</script>
