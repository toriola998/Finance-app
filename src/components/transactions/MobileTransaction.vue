<template>
   <div class="flex items-center justify-between py-4 border-t border-grey-100">
      <div class="flex-items gap-x-3">
         <img :src="item.avatar" alt="" class="h-8 w-8 rounded-full" />
         <div>
            <p class="font-bold text-sm text-grey-900">{{ item.name }}</p>
            <p class="text-xs text-grey-500 mt-1">
               {{ item.category }}
            </p>
         </div>
      </div>

      <div>
         <p :class="['text-sm font-bold', item.amount < 0 ? '' : 'text-green']">
            {{ item.amount < 0 ? item.amount : `+${item.amount}` }}
         </p>

         <p class="text-xs text-grey-500 mt-2">
            {{ formatDate(item.date) }}
         </p>
      </div>
   </div>
</template>

<script setup>
import { formatDate } from '@/utils/date'
defineProps({
   item: Object,
})
</script>
