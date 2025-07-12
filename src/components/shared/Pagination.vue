<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const currentPage = ref(1)
const route = useRoute()

defineProps({
   totalItems: Number,
   itemsPerPage: {
      type: Number,
      default: 5,
   },
})

const emit = defineEmits(['updatePage'])

const onClickHandler = (page) => {
   emit('updatePage', page)
}

onMounted(() => {
   currentPage.value = Number(route.query.page) || 1
})
</script>

<template>
   <div class="flex w-full justify-center mt-12">
      <vue-awesome-paginate
         :total-items="totalItems"
         :items-per-page="itemsPerPage"
         :max-pages-shown="2"
         v-model="currentPage"
         @click="onClickHandler(currentPage)"
      >
         <template #prev-button>
            <span class="flex-items justify-center">
               <img src="/assets/icons/icon-caret-left.svg" />
            </span>
         </template>

         <template #next-button>
            <span class="flex-items justify-center">
               <img src="/assets/icons/icon-caret-right.svg" />
            </span>
         </template>
      </vue-awesome-paginate>
   </div>
</template>

<style>
@reference "../../styles/main.css";
.pagination-container {
   @apply flex gap-x-3;
}

.paginate-buttons {
   @apply h-10 w-10 cursor-pointer rounded-xl text-black border border-beige-500;
}

/* .paginate-buttons:hover {
   background-color: #d8d8d8;
} */

.active-page {
   @apply bg-grey-900 text-white;
}

/*.active-page:hover {
   @apply bg-light-purple;
}*/
</style>
