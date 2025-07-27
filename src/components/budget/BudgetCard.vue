<template>
   <div
      class="bg-white rounded-lg px-5 py-6 md:p-8"
      v-for="(item, index) in data.budgets"
      :key="index"
   >
      <div class="flex-between">
         <div class="flex-items gap-x-4">
            <span
               class="block rounded-full h-5 w-5"
               :style="{ backgroundColor: item.theme }"
            />
            <p class="font-bold text-xl text-grey-900">{{ item.category }}</p>
         </div>
         <DropdownMenu
            :options="['Edit Budget', 'Delete Budget']"
            custom-class="min-w-max"
            @select="getAction"
         >
            <button @click="getItem(item)">
               <img src="/assets/icons/icon-ellipsis.svg" alt="" />
            </button>
         </DropdownMenu>
      </div>
      <p class="text-grey-500 text-sm py-5">Maximum of ${{ item.maximum }}</p>

      <div
         class="w-full bg-beige-100 rounded h-10 overflow-hidden mb-4 p-[6px]"
      >
         <div
            class="h-full rounded"
            :style="{
               backgroundColor: item.theme,
               width: calculateProgress(item) + '%',
            }"
         />
      </div>

      <ExpenseTrack :item="item" />
      <LatestSpending :latest-spending="filterByCategory(item.category)" />
   </div>
   <DeleteConfirmation
      v-if="showDeleteConfirmation"
      title="Budget"
      :name="budget.category"
      @cancel="showDeleteConfirmation = false"
      @proceed="deleteBudget"
   />
   <EditBudget v-if="showEditBudget" :budget="budget" />
</template>

<script setup>
import { ref, provide } from 'vue'
import { getTotalAmountSpent, filterByCategory } from '@/utils/shared-utils'
import { useDataStore } from '@/stores/data'
import { toast } from 'vue3-toastify'
import LatestSpending from './LatestSpending.vue'
import ExpenseTrack from './ExpenseTrack.vue'
import DropdownMenu from '../shared/DropdownMenu.vue'
import DeleteConfirmation from '../shared/DeleteConfirmation.vue'
import EditBudget from './EditBudget.vue'

const { financeData: data } = useDataStore()

const dataStore = useDataStore()

function calculateProgress(item) {
   const spent = getTotalAmountSpent(item.category)
   const max = item.maximum

   if (max <= 0) return 0 // Avoid divide by zero

   const percentage = Math.abs(spent / max) * 100
   return Math.min(Math.max(percentage, 0), 100)
}

const budget = ref({})
const showDeleteConfirmation = ref(false)
const showEditBudget = ref(false)

function getItem(item) {
   budget.value = item
   console.log(budget.value)
}

function getAction(arg) {
   if (arg === 'Delete Budget') {
      showDeleteConfirmation.value = true
   } else {
      showEditBudget.value = true
   }
}

function deleteBudget() {
   dataStore.removeBudget(budget.value)

   toast.success(`${budget.value.category} successfully deleted`)
   budget.value = {}
   showDeleteConfirmation.value = false
}

provide('closeModal', () => {
   showDeleteConfirmation.value = false
   showEditBudget.value = false
})
</script>
