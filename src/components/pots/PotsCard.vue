<template>
   <article class="bg-white rounded-lg px-5 py-6">
      <div class="flex-between">
         <div class="flex-items gap-x-4">
            <span class="block h-5 w-5 rounded-full bg-green" />
            <p class="font-bold text-grey-900 text-xl">Savings</p>
         </div>

         <DropdownMenu
            :options="['Edit Pot', 'Delete Pot']"
            custom-class="min-w-max"
         >
            <button>
               <img src="/assets/icons/icon-ellipsis.svg" alt="" />
            </button>
         </DropdownMenu>
      </div>
      <DataAndProgress
         text="Total Saved"
         amount="$159.00"
         target="$2000"
         percentage="7.5%"
      >
         <div
            class="bg-green h-full rounded"
            :style="{ width: (2 / 7.59) * 100 + '%' }"
         />
      </DataAndProgress>

      <div class="mt-10 flex gap-x-4">
         <button class="btn beige w-full" @click="showAddMoney = true">
            + Add Money
         </button>
         <button class="btn beige w-full" @click="showWithdraw = true">
            Withdraw
         </button>
      </div>
   </article>

   <AddMoney v-if="showAddMoney" />
   <WithdrawSavings v-if="showWithdraw" />
</template>

<script setup>
import { ref, provide } from 'vue'
import DropdownMenu from '../shared/DropdownMenu.vue'
import AddMoney from './AddMoney.vue'
import WithdrawSavings from './WithdrawMoney.vue'
import DataAndProgress from './DataAndProgress.vue'

const showAddMoney = ref(false)
const showWithdraw = ref(false)

provide('closeModal', () => {
   showAddMoney.value = false
   showWithdraw.value = false
})
</script>
