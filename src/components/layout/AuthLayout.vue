<script setup lang="ts">
import AuthDesktopImage from '../AuthDesktopImage.vue'
</script>

<template>
   <div class="bg-beige-100 min-h-screen max-w-screen-[1600px]">
      <div class="bg-grey-900 rounded-b-2xl py-6 lg:hidden lg:p-0">
         <img src="/assets/icons/logo-large.svg" alt="" class="block mx-auto" />
      </div>

      <main
         class="flex items-center justify-center mx-6 min-h-screen lg:justify-normal lg:p-6 lg:pb-10 lg:mx-0"
      >
         <AuthDesktopImage />
         <div class="flex justify-center items-center w-full">
            <div class="bg-white p-5 rounded-lg w-full max-w-[560px]">
               <h1 class="font-bold text-3xl md:text-4xl text-grey-900 mb-8">
                  Login
               </h1>

               <slot />
            </div>
         </div>
      </main>
   </div>
</template>
