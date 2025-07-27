import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import data from '../../data.json'

export const useDataStore = defineStore('financeData', () => {
   const financeData = ref({ ...data })
   function setBudget(arg) {
      financeData.value.budgets.unshift(arg)
   }

   function removeBudget(budget) {
      const idx = financeData.value.budgets.indexOf(budget)
      if (idx !== -1) {
         financeData.value.budgets.splice(idx, 1)
      }
   }
   function editBudget(originalBudget, updatedFields) {
      const idx = financeData.value.budgets.indexOf(originalBudget)
      if (idx !== -1) {
         financeData.value.budgets[idx] = {
            ...originalBudget,
            ...updatedFields,
         }
      }
   }

   return { financeData, setBudget, removeBudget, editBudget }
})
