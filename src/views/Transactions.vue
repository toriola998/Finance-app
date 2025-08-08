<template>
   <PageLayout title="Transactions">
      <div class="bg-white px-4 py-5 xl:p-7 rounded-xl relative">
         <div class="flex-items justify-between mb-6 gap-x-6">
            <SearchInput
               placeholder="Search transaction"
               searchWidth="max-w-[300px]"
               @search="handleSearch"
            />

            <div class="flex-items gap-x-5">
               <DropdownMenu
                  title="Sort by"
                  :options="sortList"
                  @select="handleSortSelect"
               >
                  <DropdownButton :text="selectedSort" />
               </DropdownMenu>

               <DropdownMenu
                  title="Category"
                  :options="categoryList"
                  @select="handleCategorySelect"
               >
                  <DropdownButton
                     :text="selectedCategory"
                     icon="/assets/icons/icon-filter-mobile.svg"
                  />
               </DropdownMenu>
            </div>
         </div>

         <div v-if="paginatedTransactions.length">
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
               :total-items="filteredTransactions.length"
               :current-page="pageNumber"
               :items-per-page="itemsPerPage"
               @updatePage="handlePagination"
            />
         </div>

         <EmptySearch v-else />
      </div>
   </PageLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useScreenSize } from '@/composables/useScreenSize'
import { sortTransactions, sortList } from '@/data/shared'
import SearchInput from '@/components/input-fields/SearchInput.vue'
import PageLayout from '@/components/layout/PageLayout.vue'
import DropdownMenu from '@/components/shared/DropdownMenu.vue'
import data from '../../data.json'
import MobileTransaction from '@/components/transactions/MobileTransaction.vue'
import DesktopTransaction from '@/components/transactions/DesktopTransaction.vue'
import Pagination from '@/components/shared/Pagination.vue'
import EmptySearch from '@/components/shared/EmptySearch.vue'
import DropdownButton from '@/components/shared/DropdownButton.vue'

const { isMobile } = useScreenSize()

const pageNumber = ref(1)
const itemsPerPage = 10

const selectedCategory = ref('All Transactions')
const selectedSort = ref('Latest')
const searchQuery = ref('')

const handleCategorySelect = (category) => {
   selectedCategory.value = category
   pageNumber.value = 1 // Reset to first page when filter changes
}

const handleSortSelect = (sort) => {
   selectedSort.value = sort
   pageNumber.value = 1 // Reset to first page when sort changes
}

const handleSearch = (query) => {
   searchQuery.value = query
   pageNumber.value = 1 // Reset pagination on search
}

const handlePagination = (currentPage) => {
   pageNumber.value = currentPage
   window.scrollTo({
      top: 0,
      behavior: 'smooth', // for smooth scrolling
   })
}

const filteredTransactions = computed(() => {
   let result = [...data.transactions]

   // Filter by Category
   if (selectedCategory.value !== 'All Transactions') {
      result = result.filter((txn) => txn.category === selectedCategory.value)
   }

   // Filter by Search Query
   if (searchQuery.value.trim() !== '') {
      const query = searchQuery.value.toLowerCase()
      result = result.filter((txn) => txn.name.toLowerCase().includes(query))
   }

   // Sort
   result = sortTransactions(result, selectedSort.value)

   return result
})

const paginatedTransactions = computed(() => {
   const start = (pageNumber.value - 1) * itemsPerPage
   const end = start + itemsPerPage
   return filteredTransactions.value.slice(start, end)
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
