<template>
   <PageLayout title="Transactions">
      <div class="bg-white px-4 py-5 rounded-xl relative">
         <SearchInput placeholder="Search transaction" />
         <DropdownMenu
            title="Sort by"
            :options="['Hello', 'Hi']"
            custom-class="right-0 top-14"
         >
            <button
               class="rounded-xl text-grey-900 text-sm border border-beige-500"
            >
               h
            </button>
         </DropdownMenu>

         <div v-if="isMobile">
            <MobileTransaction
               v-for="(item, index) in paginatedTransactions"
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
               v-for="(item, index) in paginatedTransactions"
               :key="index"
               :item="item"
               class="hidden md:grid"
            />
         </div>
         <Pagination
            :total-items="data.transactions.length"
            :current-page="pageNumber"
            :items-per-page="itemsPerPage"
            @updatePage="handlePagination"
         />
      </div>
   </PageLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useScreenSize } from '@/composables/useScreenSize'
import SearchInput from '@/components/input-fields/SearchInput.vue'
import PageLayout from '@/components/layout/PageLayout.vue'
import DropdownMenu from '@/components/shared/DropdownMenu.vue'
import data from '../../data.json'
import MobileTransaction from '@/components/transactions/MobileTransaction.vue'
import DesktopTransaction from '@/components/transactions/DesktopTransaction.vue'
import Pagination from '@/components/shared/Pagination.vue'

const { isMobile } = useScreenSize()

const pageNumber = ref(1)
const itemsPerPage = 10

const handlePagination = (currentPage) => {
   pageNumber.value = currentPage
   window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smooth scrolling
   })
}

const paginatedTransactions = computed(() => {
   if (!data?.transactions) return []
   const start = (pageNumber.value - 1) * itemsPerPage
   const end = start + itemsPerPage
   return data.transactions.slice(start, end)
})
</script>

<style scoped>
.remove-element {
   @media only screen and (min-width: 768px) {
      display: contents;
   }
}
</style>
