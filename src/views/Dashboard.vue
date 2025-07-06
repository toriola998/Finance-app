<script setup>
import AccountSummary from '@/components/dashboard/AccountSummary.vue'
import Pots from '@/components/dashboard/Pots.vue'
import PageLayout from '@/components/layout/PageLayout.vue'
import Transactions from '@/components/dashboard/Transactions.vue'
</script>

<template>
   <PageLayout title="Overview">
      <div class="flex flex-col gap-y-8">
         <AccountSummary />
         <Pots />
         <Transactions />
      </div>
   </PageLayout>
</template>
