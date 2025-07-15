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

      <div class="flex-between mt-10 mb-4">
         <p class="text-grey-500 text-sm">Total Saved</p>
         <p class="text-grey-900 font-bold text-[32px]">$159.00</p>
      </div>

      <div class="w-full bg-beige-100 rounded-full h-2 overflow-hidden mb-4">
         <div
            class="bg-green h-full rounded"
            :style="{ width: (2 / 7.59) * 100 + '%' }"
         />
      </div>

      <div class="flex-between text-grey-500">
         <p class="font-bold text-sm">7.95%</p>
         <p class="text-xs">Target of $2,000</p>
      </div>

      <div class="mt-10 flex gap-x-4">
         <button class="btn beige w-full">+ Add Money</button>
         <button class="btn beige w-full">Withdraw</button>
      </div>
   </article>
</template>

<script setup>
import DropdownMenu from '../shared/DropdownMenu.vue'
</script>
