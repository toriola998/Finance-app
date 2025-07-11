<template>
   <PageLayout title="Transactions">
      <div class="bg-white px-4 py-5 rounded-xl">
         <SearchInput placeholder="Search transaction" />
         <DropdownMenu title="Sort by" :options="['Hello', 'Hi']" />

         <div v-if="isMobile">
            <MobileTransaction
               v-for="(item, index) in data.transactions"
               :key="index"
               :item="item"
               class="md:hidden"
            />
         </div>
         <div v-else>
            <div class="text-grey-500 text-sm py-4 transaction-table">
               <p>Recipient/Sender</p>
               <p>Category</p>
               <p>Transaction Date</p>
               <p>Amount</p>
            </div>
            <DesktopTransaction
               v-for="(item, index) in data.transactions"
               :key="index"
               :item="item"
               class="hidden md:grid"
            />
         </div>
      </div>
   </PageLayout>
</template>

<script setup>
import SearchInput from '@/components/input-fields/SearchInput.vue'
import PageLayout from '@/components/layout/PageLayout.vue'
import DropdownMenu from '@/components/shared/DropdownMenu.vue'
import data from '../../data.json'
import MobileTransaction from '@/components/transactions/MobileTransaction.vue'
import DesktopTransaction from '@/components/transactions/DesktopTransaction.vue'
import { useScreenSize } from '@/composables/useScreenSize'

const { isMobile } = useScreenSize()
</script>

<style scoped>
.remove-element {
   @media only screen and (min-width: 768px) {
      display: contents;
   }
}
</style>
