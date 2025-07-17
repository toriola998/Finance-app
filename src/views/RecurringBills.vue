<template>
   <PageLayout title="Recurring Bills">
      <div class="flex flex-col xl:grid grid-cols-[337px_auto] gap-6">
         <RecurringBillsSummary />

         <div class="px-5 py-6 md:p-8 bg-white rounded-xl">
            <div class="flex-items justify-between mb-6 gap-x-6">
               <SearchInput
                  placeholder="Search bills"
                  searchWidth="max-w-[300px]"
                  @search="handleSearch"
               />
               <DropdownMenu
                  title="Sort by"
                  :options="sortList"
                  @select="handleSortSelect"
               >
                  <DropdownButton :text="selectedSort" />
               </DropdownMenu>
            </div>

            <div v-if="paginatedRecurringBills.length">
               <div v-if="isMobile">
                  <RecurringBillsMobile
                     v-for="(item, index) in paginatedRecurringBills"
                     :key="index"
                     :item="item"
                     class="md:hidden"
                  />
               </div>
               <div v-else>
                  <div class="text-grey-500 text-sm py-4 bills-table">
                     <p>Bills Title</p>
                     <p>Due Date</p>
                     <p>Amount</p>
                  </div>
                  <RecurringBillsDesktop
                     v-for="(item, index) in paginatedRecurringBills"
                     :key="index"
                     :item="item"
                     class="hidden md:grid"
                  />
               </div>
               <Pagination
                  :total-items="filteredRecurringBills.length"
                  :current-page="pageNumber"
                  :items-per-page="itemsPerPage"
                  @updatePage="handlePagination"
               />
            </div>

            <EmptySearch v-else />
         </div>
      </div>
   </PageLayout>
</template>

<script setup>
import { ref, computed } from 'vue'
import { sortList } from '@/data/shared'
import { useScreenSize } from '@/composables/useScreenSize'
import data from '../../data.json'
import PageLayout from '@/components/layout/PageLayout.vue'
import SearchInput from '@/components/input-fields/SearchInput.vue'
import DropdownMenu from '@/components/shared/DropdownMenu.vue'
import RecurringBillsSummary from '@/components/recurring-bills/RecurringBillsSummary.vue'
import RecurringBillsDesktop from '@/components/recurring-bills/RecurringBillsDesktop.vue'
import RecurringBillsMobile from '@/components/recurring-bills/RecurringBillsMobile.vue'
import DropdownButton from '@/components/shared/DropdownButton.vue'
import EmptySearch from '@/components/shared/EmptySearch.vue'
import Pagination from '@/components/shared/Pagination.vue'

const { isMobile } = useScreenSize()

const bills = data.transactions.filter((item) => item.recurring === true)

const pageNumber = ref(1)
const itemsPerPage = 10

const selectedSort = ref('Latest')
const searchQuery = ref('')

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

const filteredRecurringBills = computed(() => {
   let result = [...bills]

   // Filter by Search Query
   if (searchQuery.value.trim() !== '') {
      const query = searchQuery.value.toLowerCase()
      result = result.filter((txn) => txn.name.toLowerCase().includes(query))
   }

   // Sort
   switch (selectedSort.value) {
      case 'latest':
         result.sort((a, b) => new Date(b.date) - new Date(a.date))
         break
      case 'A to Z':
         result.sort((a, b) => a.name.localeCompare(b.name))
         break
      case 'Z to A':
         result.sort((a, b) => b.name.localeCompare(a.name))
         break
      case 'highest':
         result.sort((a, b) => b.amount - a.amount)
         break
      case 'lowest':
         result.sort((a, b) => a.amount - b.amount)
         break
   }

   return result
})

const paginatedRecurringBills = computed(() => {
   const start = (pageNumber.value - 1) * itemsPerPage
   const end = start + itemsPerPage
   return filteredRecurringBills.value.slice(start, end)
})
</script>
