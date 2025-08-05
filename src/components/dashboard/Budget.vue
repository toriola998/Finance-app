<template>
   <DashboardCardLayout title="Budgets" cta-text="See All" link="/budgets">
      <div class="sm:flex justify-end lg:flex-col xl:flex-row">
         <BudgetsChart :totalMax="totalMax" :totalSpent="totalSpent" />

         <div class="grid grid-cols-2 gap-4 sm:flex flex-col">
            <ExpenceCard :list="budgets" />
         </div>
      </div>
   </DashboardCardLayout>
</template>

<script setup lang="js">
import { budgets } from '@/data/shared'
import { totalMax, totalSpent } from '@/utils/shared-utils'
import ExpenceCard from './ExpenceCard.vue'
import DashboardCardLayout from '../layout/DashboardCardLayout.vue'
import BudgetsChart from '../shared/BudgetsChart.vue'
</script>
