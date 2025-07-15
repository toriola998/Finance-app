<template>
   <section class="flex flex-col gap-6 md:flex-row xl:flex-col">
      <div
         class="bg-grey-900 p-6 text-white w-full rounded-xl flex gap-x-4 md:gap-y-10 md:flex-col items-center md:items-start"
      >
         <img
            src="/assets/icons/icon-recurring-bills.svg"
            alt=""
            class="h-7 block"
         />

         <div>
            <p class="text-sm">Total Bills</p>
            <p class="mt-2 font-bold text-[32px]">$384.98</p>
         </div>
      </div>

      <div class="rounded-xl bg-white px-5 pt-5 w-full">
         <p class="font-bold text-grey-900">Summary</p>
         <ul>
            <li class="flex-between py-4">
               <span class="text-grey-500 text-xs">Paid Blls</span>
               <span class="text-grey-900 font-bold text-sm">4 ($190.00)</span>
            </li>
            <li class="flex-between py-4 border-y border-grey-1">
               <span class="text-grey-500 text-xs">Total Upcoming</span>
               <span class="text-grey-900 font-bold text-sm">4 ($194.98)</span>
            </li>
            <li class="flex-between py-4 text-red">
               <span class="text-xs">Due Soon</span>
               <span class="font-bold text-sm">4 ($194.98)</span>
            </li>
         </ul>
      </div>
   </section>
</template>
