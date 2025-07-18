<template>
   <PageLayout title="Budgets">
      <template #header>
         <button class="btn black px-4" @click="showAddNewBudget = true">
            + Add New Budget
         </button>
      </template>
      <div class="flex flex-col xl:grid grid-cols-[428px_auto] gap-6">
         <BudgetSummary />

         <div class="flex flex-col gap-y-6">
            <BudgetCard />
         </div>
      </div>

      <AddNewBudget v-if="showAddNewBudget" />
   </PageLayout>
</template>

<script setup>
import { ref, provide } from 'vue'
import BudgetCard from '@/components/budget/BudgetCard.vue'
import BudgetSummary from '@/components/budget/BudgetSummary.vue'
import PageLayout from '@/components/layout/PageLayout.vue'
import AddNewBudget from '@/components/budget/AddNewBudget.vue'

const showAddNewBudget = ref(false)

provide('closeModal', () => {
   showAddNewBudget.value = false
})
</script>
