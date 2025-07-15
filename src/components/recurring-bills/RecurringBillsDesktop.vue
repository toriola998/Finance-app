<template>
   <div class="bills-table items-center py-4 border-t border-grey-100">
      <div class="flex-items gap-x-4 min-w-[272px]">
         <img :src="item.avatar" alt="" class="h-8 w-8 rounded-full" />
         <p class="font-bold text-sm text-grey-900">{{ item.name }}</p>
      </div>

      <p class="text-xs text-grey-500 mt-2">
         {{ getDayWithSuffix(item.date) }}
      </p>
      <p :class="['text-sm font-bold', item.amount < 0 ? '' : 'text-green']">
         {{ item.amount < 0 ? item.amount : `+${item.amount}` }}
      </p>
   </div>
</template>

<script setup>
import { getDayWithSuffix } from '@/utils/date'
defineProps({
   item: Object,
})
</script>
