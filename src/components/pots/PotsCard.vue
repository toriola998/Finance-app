<template>
   <article class="bg-white rounded-lg px-5 py-6">
      <div class="flex-between">
         <div class="flex-items gap-x-4">
            <span
               class="block h-5 w-5 rounded-full"
               :style="{ backgroundColor: pot.theme }"
            />
            <p class="font-bold text-grey-900 text-xl">{{ pot.name }}</p>
         </div>

         <DropdownMenu
            :options="['Edit Pot', 'Delete Pot']"
            custom-class="min-w-max"
            @select="handleDropdownSelect"
         >
            <button>
               <img src="/assets/icons/icon-ellipsis.svg" alt="" />
            </button>
         </DropdownMenu>
      </div>
      <DataAndProgress
         text="Total Saved"
         :amount="formatToDollar(pot.total)"
         :target="formatToDollar(pot.target)"
         :percentage="`${(pot.total / pot.target).toFixed(4) * 100}%`"
      >
         <div
            class="h-full rounded"
            :style="{
               backgroundColor: pot.theme,
               width: calculateProgress(pot) + '%',
            }"
         />
      </DataAndProgress>

      <div class="mt-10 flex gap-x-4">
         <button class="btn beige w-full" @click="$emit('addMoney', pot)">
            + Add Money
         </button>
         <button class="btn beige w-full" @click="$emit('withdrawMoney', pot)">
            Withdraw
         </button>
      </div>
   </article>
</template>

<script setup>
import { formatToDollar } from '@/utils/shared-utils'
import DropdownMenu from '../shared/DropdownMenu.vue'
import DataAndProgress from './DataAndProgress.vue'

const props = defineProps({
   pot: Object,
})

function calculateProgress(item) {
   const total = item.total
   const target = item.target

   if (target <= 0) return 0 // Avoid divide by zero

   const percentage = Math.abs(total / target) * 100
   return Math.min(Math.max(percentage, 0), 100)
}

const emit = defineEmits([
   'action-selected',
   'item-selected',
   'addMoney',
   'withdrawMoney',
])

function handleDropdownSelect(selectedAction) {
   // Emit the selected item to parent
   emit('item-selected', props.pot)

   // Emit the action to parent
   emit('action-selected', selectedAction)
}
</script>
