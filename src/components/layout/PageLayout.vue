<template>
   <div class="px-4 py-6 bg-beige-100 min-h-screen">
      <header>
         <h1 class="text-grey-900 font-bold text-[32px] mb-8">Overview</h1>
      </header>

      <slot />
   </div>
</template>

<script setup>
defineProps({
   title: String,
})
</script>
