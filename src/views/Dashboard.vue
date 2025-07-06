<script setup>
import AccountSummary from '@/components/dashboard/AccountSummary.vue'
import Pots from '@/components/dashboard/Pots.vue'
import PageLayout from '@/components/layout/PageLayout.vue'
import Transactions from '@/components/dashboard/Transactions.vue'
import Budget from '@/components/dashboard/Budget.vue'
import RecurringBills from '@/components/dashboard/RecurringBills.vue'
</script>

<template>
   <PageLayout title="Overview">
      <div class="flex flex-col gap-y-8">
         <AccountSummary />
         <Pots />
         <Transactions />
         <Budget />
         <RecurringBills />
      </div>
   </PageLayout>
</template>
