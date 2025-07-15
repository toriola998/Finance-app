<template>
   <PageLayout title="Transactions">
      <div class="bg-white px-4 py-5 lg:p-8 rounded-xl relative">
         <div class="flex-items justify-between mb-6 gap-x-6">
            <SearchInput
               placeholder="Search transaction"
               searchWidth="max-w-[300px]"
            />

            <div class="flex-items gap-x-5">
               <DropdownMenu title="Sort by" :options="sortList">
                  <button class="">
                     <span class="hidden md:flex items-center dropdown-btn">
                        {{ sortList[0] }}
                        <img src="/assets/icons/icon-caret-down.svg" alt="" />
                     </span>

                     <img
                        src="/assets/icons/icon-sort-mobile.svg"
                        alt
                        class="md:hidden w-6"
                     />
                  </button>
               </DropdownMenu>

               <DropdownMenu title="Category" :options="categoryList">
                  <button class="">
                     <span class="hidden md:flex items-center dropdown-btn">
                        {{ categoryList[0] }}
                        <img src="/assets/icons/icon-caret-down.svg" alt="" />
                     </span>

                     <img
                        src="/assets/icons/icon-filter-mobile.svg"
                        alt=""
                        class="md:hidden w-6"
                     />
                  </button>
               </DropdownMenu>
            </div>
         </div>

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
import { sortList } from '@/data/shared'
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

const categoryList = [
   'All Transactions',
   'Entertainment',
   'Bills',
   'Groceries',
   'Dining Out',
   'Transportation',
   'Personal Care',
   'Education',
   'Lifestyle',
   'Shopping',
   'General',
]
</script>

<style scoped>
.remove-element {
   @media only screen and (min-width: 768px) {
      display: contents;
   }
}
</style>
