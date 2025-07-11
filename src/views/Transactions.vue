<template>
   <PageLayout title="Transactions">
      <div class="bg-white px-4 py-5 rounded-xl">
         <SearchInput placeholder="Search transaction" />
         <DropdownMenu title="Sort by" :options="['Hello', 'Hi']" />

         <div
            class="hidden text-grey-500 text-sm md:grid grid-cols-[272px_auto_auto_auto] py-4"
         >
            <p>Recipient/Sender</p>
            <p>Category</p>
            <p>Transaction Date</p>
            <p>Amount</p>
         </div>

         <MobileTransaction
            v-for="(item, index) in data.transactions"
            :key="index"
            :item="item"
            class="md:hidden"
         />
         <DesktopTransaction
            v-for="(item, index) in data.transactions"
            :key="index"
            :item="item"
            class="hidden md:grid"
         />
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
</script>

<style scoped>
.remove-element {
   @media only screen and (min-width: 768px) {
      display: contents;
   }
}
</style>
