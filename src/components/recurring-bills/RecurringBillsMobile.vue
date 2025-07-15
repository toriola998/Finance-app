<template>
   <div class="flex items-center justify-between py-4 border-t border-grey-100">
      <div>
         <div class="flex-items gap-x-3">
            <img :src="item.avatar" alt="" class="h-8 w-8 rounded-full" />
            <p class="font-bold text-sm text-grey-900">{{ item.name }}</p>
         </div>
         <p class="text-xs text-green mt-2">
            Monthly - {{ getDayWithSuffix(item.date) }}
         </p>
      </div>

      <div>
         <p :class="['text-sm font-bold', item.amount < 0 ? '' : 'text-green']">
            {{ item.amount < 0 ? item.amount : `+${item.amount}` }}
         </p>
      </div>
   </div>
</template>

<script setup>
import { getDayWithSuffix } from '@/utils/date'

defineProps({
   item: Object,
})
</script>
