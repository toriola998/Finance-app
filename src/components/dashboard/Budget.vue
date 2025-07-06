<template>
   <section class="dashboard-card">
      <SectionTitle title="Budgets" cta-text="See All" link="/" />

      <div class="grid grid-cols-2 gap-4 lg:flex flex-col">
         <ExpenceCard :list="budgets" />
      </div>
   </section>
</template>

<script setup>
import SectionTitle from './SectionTitle.vue'
import ExpenceCard from './ExpenceCard.vue'

const budgets = [
   {
      color: 'bg-green',
      title: 'Entertainment',
      value: '$50.00',
   },
   {
      color: 'bg-cyan',
      title: 'Bills',
      value: '$750.00',
   },
   {
      color: 'bg-yellow',
      title: 'Dining Out',
      value: '$75.00',
   },
   {
      color: 'bg-navy',
      title: 'Personal Care',
      value: '$100.00',
   },
]
</script>
