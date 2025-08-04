<template>
   <button
      class="text-sm btn tw-rounded black"
      :class="[{ 'cursor-not-allowed': isLoading, '!bg-[#808080]': disabled }]"
      @click="$emit('action')"
      :type="type"
      :disabled="disabled"
   >
      <div class="loader" v-if="isLoading"></div>
      <span class="flex gap-x-2 justify-center" v-else>
         <slot></slot>
         {{ text }}
      </span>
   </button>
</template>

<script setup>
defineProps({
   isLoading: Boolean,
   text: String,
   disabled: Boolean,
   type: {
      default: 'submit',
      type: String,
   },
})
</script>

<style scoped>
@reference "../../styles/main.css";

.loader {
   @apply w-5 h-5 rounded-full my-0 mx-auto border-[3px] border-gray-500
    border-t-current border-b-current border-l-current border-r-transparent;
   -webkit-animation: spin 0.7s linear infinite;
   /* Safari */
   animation: spin 0.7s linear infinite;
}
</style>
