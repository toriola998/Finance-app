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

   function addNewPot(arg) {
      financeData.value.pots.unshift(arg)
   }

   function deletePot(budget) {
      const idx = financeData.value.pots.indexOf(budget)
      if (idx !== -1) {
         financeData.value.pots.splice(idx, 1)
      }
   }

   function editPot(originalPot, updatedFields) {
      const idx = financeData.value.pots.indexOf(originalPot)
      if (idx !== -1) {
         financeData.value.pots[idx] = {
            ...originalPot,
            ...updatedFields,
         }
      }
   }

   return {
      financeData,
      setBudget,
      removeBudget,
      editBudget,
      addNewPot,
      editPot,
      deletePot,
   }
})
