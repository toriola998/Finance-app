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
      <AccountSummary />
      <div class="xl:flex gap-x-6">
         <div class="xl:w-[60%]">
            <Pots />
            <Transactions />
         </div>
         <div class="xl:w-[40%]">
            <Budget />
            <RecurringBills />
         </div>
      </div>
   </PageLayout>
</template>
