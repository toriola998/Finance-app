import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import data from '../../data.json'

export const useDataStore = defineStore('financeData', () => {
   const financeData = ref({ ...data })
   console.log(financeData.value)

   function setBudget(arg) {
      financeData.value.budgets.unshift(arg)
   }

   return { financeData, setBudget }
})
