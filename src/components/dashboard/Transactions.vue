<template>
   <section class="dashboard-card">
      <SectionTitle title="Transactions" cta-text="View All" link="/" />

      <div class="mt-3">
         <div
            :class="`flex-items justify-between py-4 border-b border-grey-100`"
            v-for="(item, index) in transactions"
            :key="index"
         >
            <div class="flex-items gap-x-4">
               <img
                  :src="`/assets/avatars/${item.avatar}`"
                  alt=""
                  class="h-8 w-8 rounded-full"
               />
               <p class="font-bold text-sm text-grey-900">{{ item.name }}</p>
            </div>

            <div>
               <p class="text-sm font-bold text-green">{{ item.price }}</p>
               <p class="text-xs text-grey-500 mt-2">{{ item.date }}</p>
            </div>
         </div>
      </div>
   </section>
</template>

<script setup>
import SectionTitle from './SectionTitle.vue'

const transactions = [
   {
      avatar: 'emma-richardson.jpg',
      name: 'Emma Richardson',
      price: '+$75.50',
      date: '19 Aug 2024',
   },
   {
      avatar: 'savory-bites-bistro.jpg',
      name: 'Savory Bites Bistro',
      price: '+$55.50',
      date: '19 Aug 2024',
   },
   {
      avatar: 'daniel-carter.jpg',
      name: 'Daniel Carter',
      price: '+$42.30',
      date: '18 Aug 2024',
   },
   {
      avatar: 'sun-park.jpg',
      name: 'Sun Park',
      price: '+$120.00',
      date: '17 Aug 2024',
   },
   {
      avatar: 'urban-services-hub.jpg',
      name: 'Urban Services Hub',
      price: '+$65.00',
      date: '17 Aug 2024',
   },
]
</script>
