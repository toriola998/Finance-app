<template>
   <div class="py-5 grid grid-cols-2 justify-between">
      <div class="flex-items gap-x-4">
         <span
            class="block w-1 h-10 rounded-full"
            :style="{ backgroundColor: item.theme }"
         />

         <div>
            <p class="text-xs text-grey-500 mb-[6px]">Spent</p>
            <p class="text-grey-900 font-bold text-sm">
               {{ formatToDollar(getTotalAmountSpent(item.category)) }}
            </p>
         </div>
      </div>

      <div class="flex-items gap-x-4">
         <span class="block w-1 h-10 rounded-full bg-beige-100" />

         <div>
            <p class="text-xs text-grey-500 mb-[6px]">Remaining</p>
            <p class="text-grey-900 font-bold text-sm">
               {{ formatToDollar(getRemainingAmount(item)) }}
            </p>
         </div>
      </div>
   </div>
</template>

<script setup>
import { formatToDollar } from '@/utils/shared-utils'
import { getTotalAmountSpent } from '@/utils/shared-utils'

defineProps({
   item: Object,
})

function getRemainingAmount(arg) {
   return Math.abs(arg.maximum) - Math.abs(getTotalAmountSpent(arg.category))
}
</script>
