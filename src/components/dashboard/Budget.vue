<template>
   <section class="dashboard-card">
      <SectionTitle title="Budgets" cta-text="See All" link="/" />

      <div class="grid grid-cols-2 gap-4 lg:flex flex-col">
         <ExpenceCard :list="budgets" />
      </div>
   </section>
</template>

<script setup>
import { budgets } from '@/data/shared'
import SectionTitle from './SectionTitle.vue'
import ExpenceCard from './ExpenceCard.vue'
</script>
