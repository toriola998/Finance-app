<template>
   <ModalLayout title="Latest Spendings" customClass="sm:w-[500px]">
      <div class="overflow-y-scroll max-h-[430px] pr-5">
         <div
            class="flex-between py-4 [&:not(:last-child)]:border-b border-beige-100"
            v-for="(item, index) in allLatestSpending"
            :key="index"
         >
            <div class="flex-items gap-x-4">
               <img :src="item.avatar" alt="" class="w-8 h-8 rounded-full" />
               <p class="text-sm font-bold text-grey-900">{{ item.name }}</p>
            </div>

            <div class="text-xs">
               <p class="font-bold text-grey-900 text-end">
                  {{ formatToDollar(item.amount) }}
               </p>
               <p class="text-grey-500 mt-2">{{ formatDate(item.date) }}</p>
            </div>
         </div>
      </div>
   </ModalLayout>
</template>

<script setup>
import { formatDate } from '@/utils/date'
import { formatToDollar } from '@/utils/shared-utils'
import ModalLayout from '../layout/ModalLayout.vue'

defineProps({
   allLatestSpending: Array,
})
</script>
