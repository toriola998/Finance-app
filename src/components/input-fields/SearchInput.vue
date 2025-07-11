<template>
   <div :class="`search ${searchWidth}`">
      <input
         type="text"
         :placeholder="placeholder"
         v-model="searchText"
         class="w-full outline-0"
      />
      <button @click="$emit('search', searchText)">
         <img
            src="/assets/icons/icon-search.svg"
            alt=""
            height="20"
            width="20"
         />
      </button>
   </div>
</template>

<script setup>
import { ref } from 'vue'
const searchText = ref('')

defineProps({
   searchWidth: {
      type: String,
      default: 'big-search',
   },
   placeholder: String,
})
</script>

<style scoped>
@reference "../../styles/main.css";

.search {
   @apply flex items-center justify-between w-full
   rounded-lg px-4 h-12 border border-beige-500;
}

/* .search:focus-within {
   @apply border border-main-purple;
} */

.search input::placeholder {
   font-size: 14px;
   @apply text-sm text-beige-500;
}

.big-search {
   @apply sm:w-[460px];
}
</style>
