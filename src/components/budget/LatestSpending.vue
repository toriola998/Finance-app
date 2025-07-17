<template>
   <AllSpendings
      v-if="showAllSpendings"
      :all-latest-spending="latestSpending"
   />

   <div class="bg-beige-100 p-4 md:p-5 rounded-lg">
      <div class="flex-between">
         <p class="font-bold text-grey-900">Latest Spending</p>
         <button
            class="text-sm text-grey-500 flex gap-x-3"
            @click="showAllSpendings = true"
         >
            See All
            <img src="/assets/icons/icon-caret-right.svg" alt="" />
         </button>
      </div>

      <div
         class="flex-between py-4"
         v-for="(item, index) in latestSpending.slice(0, 3)"
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
</template>

<script setup>
import { ref, provide } from 'vue'
import { formatDate } from '@/utils/date'
import { formatToDollar } from '@/utils/shared-utils'
import AllSpendings from './AllSpendings.vue'

defineProps({
   latestSpending: Array,
})

const showAllSpendings = ref(false)

provide('closeModal', () => {
   showAllSpendings.value = false
})
</script>
