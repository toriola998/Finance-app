<template>
   <div class="flex flex-col gap-y-3 md:flex-row md:gap-x-6 w-full">
      <article
         :class="`p-5 rounded-xl w-full ${item.theme.bgColor}`"
         v-for="(item, index) in summaryData"
         :key="index"
      >
         <p :class="`text-sm mb-3  ${item.theme.titleColor}`">
            {{ item.title }}
         </p>
         <p :class="`font-bold text-[32px] ${item.theme.valueColor}`">
            {{ item.value }}
         </p>
      </article>
   </div>
</template>

<script setup>
const summaryData = [
   {
      title: 'Current Balance',
      value: '$4,836.00',
      theme: {
         bgColor: 'bg-grey-900',
         titleColor: 'text-white',
         valueColor: 'text-white',
      },
   },
   {
      title: 'Income',
      value: '$3,814.25',
      theme: {
         bgColor: 'bg-white',
         titleColor: 'text-grey-500',
         valueColor: 'text-grey-900',
      },
   },
   {
      title: 'Expense',
      value: '$1,700.50',
      theme: {
         bgColor: 'bg-white',
         titleColor: 'text-grey-500',
         valueColor: 'text-grey-900',
      },
   },
]
</script>
