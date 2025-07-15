<template>
   <PageLayout title="Recurring Bills">
      <div class="flex flex-col xl:grid grid-cols-[337px_auto] gap-6">
         <RecurringBillsSummary />

         <div class="px-5 py-6 md:p-8 bg-white rounded-xl">
            <div class="flex-items justify-between mb-6 gap-x-6">
               <SearchInput
                  placeholder="Search bills"
                  searchWidth="max-w-[300px]"
               />
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
            </div>

            <div v-if="isMobile">
               <RecurringBillsMobile
                  v-for="(item, index) in bills"
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
                  v-for="(item, index) in bills"
                  :key="index"
                  :item="item"
                  class="hidden md:grid"
               />
            </div>
         </div>
      </div>
   </PageLayout>
</template>

<script setup>
import { sortList } from '@/data/shared'
import { useScreenSize } from '@/composables/useScreenSize'
import data from '../../data.json'
import PageLayout from '@/components/layout/PageLayout.vue'
import SearchInput from '@/components/input-fields/SearchInput.vue'
import DropdownMenu from '@/components/shared/DropdownMenu.vue'
import RecurringBillsSummary from '@/components/recurring-bills/RecurringBillsSummary.vue'
import RecurringBillsDesktop from '@/components/recurring-bills/RecurringBillsDesktop.vue'
import RecurringBillsMobile from '@/components/recurring-bills/RecurringBillsMobile.vue'

const { isMobile } = useScreenSize()

const bills = data.transactions.filter((item) => item.recurring === true)
</script>
