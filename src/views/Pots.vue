<template>
   <PageLayout title="Pots">
      <template #header>
         <button class="btn black px-4" @click="showAddPot = true">
            + Add New Pot
         </button>
      </template>

      <div class="mt-8 flex flex-col gap-6 lg:grid grid-cols-2">
         <PotsCard />
         <PotsCard />
      </div>

      <AddNewPot v-if="showAddPot" />
   </PageLayout>
</template>

<script setup>
import { ref, provide } from 'vue'
import PageLayout from '@/components/layout/PageLayout.vue'
import AddNewPot from '@/components/pots/AddNewPot.vue'
import PotsCard from '@/components/pots/PotsCard.vue'

const showAddPot = ref(false)

provide('closeModal', () => {
   showAddPot.value = false
})
</script>
