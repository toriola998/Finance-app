<template>
   <ModalLayout
      :title="`Delete ${name}?`"
      :sub-text="`Are you sure you want to delete this ${title}? This action cannot
      be reversed, and all the data inside it will be removed forever.`"
      customClass="max-w-[560px]"
   >
      <div class="flex flex-col gap-y-5">
         <button class="btn red w-full">Yes, Confirm Deletion</button>
         <button class="text-sm text-grey-500 flex-center">No, Go Back</button>
      </div>
   </ModalLayout>
</template>

<script setup>
import ModalLayout from '../layout/ModalLayout.vue'

defineProps({
   title: String,
   name: String,
})
</script>
