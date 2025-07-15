<template>
   <div class="modal-overlay flex-center px-4">
      <div
         :class="`relative bg-white rounded w-max px-5 py-7 sm:p-8 modal-inner ${customClass}`"
      >
         <div class="flex-between">
            <p class="text-grey-900 font-bold text-xl md:text-[32px]">
               {{ title }}
            </p>
            <button @click="closeModal" class="rounded-full hover:bg-gray-100">
               <img src="/assets/icons/icon-close-modal.svg" alt="" />
            </button>
         </div>

         <p class="text-grey-500 text-sm my-5">{{ subText }}</p>

         <slot />
      </div>
   </div>
</template>

<script setup>
import { inject } from 'vue'
defineProps({
   customClass: String,
   title: String,
   subText: String,
})
const closeModal = inject('closeModal')
</script>

<style scoped>
@reference "../../styles/main.css";

.modal-overlay {
   background: #00000080;
   @apply left-0 bottom-0 top-0 right-0 z-[100] fixed h-full;
}
</style>
