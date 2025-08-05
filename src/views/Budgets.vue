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
            <BudgetCard
               v-for="(item, index) in data.budgets"
               :key="index"
               :item="item"
               @action-selected="handleActionSelected"
               @item-selected="handleItemSelected"
            />
         </div>
      </div>
      <AddNewBudget
         v-if="showAddNewBudget"
         @addBudgetSuccess="handleAddBudgetSuccess"
      />
      <DeleteConfirmation
         v-if="showDeleteConfirmation"
         title="Budget"
         :name="budget.category"
         @cancel="showDeleteConfirmation = false"
         @proceed="deleteBudget"
      />
      <EditBudget
         v-if="showEditBudget"
         :budget="budget"
         @editBudgetSuccess="showEditBudget = false"
      />
   </PageLayout>
</template>

<script setup>
import { ref, provide } from 'vue'
import { toast } from 'vue3-toastify'
import { useDataStore } from '@/stores'
import BudgetCard from '@/components/budget/BudgetCard.vue'
import BudgetSummary from '@/components/budget/BudgetSummary.vue'
import PageLayout from '@/components/layout/PageLayout.vue'
import AddNewBudget from '@/components/budget/AddNewBudget.vue'
import EditBudget from '@/components/budget/EditBudget.vue'
import DeleteConfirmation from '@/components/shared/DeleteConfirmation.vue'

const { financeData: data } = useDataStore()
const dataStore = useDataStore()

const budget = ref({})
const showDeleteConfirmation = ref(false)
const showEditBudget = ref(false)
const showAddNewBudget = ref(false)

function handleAddBudgetSuccess() {
   showAddNewBudget.value = false
   toast.success('Budget Successully Added!')
}

// Handle when an item is selected (store the current budget item)
function handleItemSelected(item) {
   budget.value = item
}

// Handle the dropdown action selection
function handleActionSelected(action) {
   if (action === 'Delete Budget') {
      showDeleteConfirmation.value = true
   } else if (action === 'Edit Budget') {
      showEditBudget.value = true
   }
}
function deleteBudget() {
   dataStore.deleteBudget(budget.value)

   toast.success(`${budget.value.category} successfully deleted`)
   budget.value = {}
   showDeleteConfirmation.value = false
}
provide('closeModal', () => {
   showDeleteConfirmation.value = false
   showEditBudget.value = false
   showAddNewBudget.value = false
})
</script>
