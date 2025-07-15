<template>
   <PageLayout title="Pots">
      <template #header>
         <button class="btn black px-4">+ Add New Pot</button>
      </template>

      <div class="mt-8 flex flex-col gap-6 lg:grid grid-cols-2">
         <PotsCard />
         <PotsCard />
      </div>
   </PageLayout>
</template>

<script setup>
import PageLayout from '@/components/layout/PageLayout.vue'
import PotsCard from '@/components/pots/PotsCard.vue'
</script>
