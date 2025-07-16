<template>
   <PageLayout title="Budgets">
      <template #header>
         <button class="btn black px-4">+ Add New Budget</button>
      </template>
      <div class="flex flex-col xl:grid grid-cols-[428px_auto] gap-6">
         <BudgetSummary />

         <div>
            <BudgetCard />
         </div>
      </div>
   </PageLayout>
</template>

<script setup>
import BudgetCard from '@/components/budget/BudgetCard.vue'
import BudgetSummary from '@/components/budget/BudgetSummary.vue'
import PageLayout from '@/components/layout/PageLayout.vue'
</script>
