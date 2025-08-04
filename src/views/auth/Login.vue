<script setup>
import AuthLayout from '@/components/layout/AuthLayout.vue'
import TextInput from '@/components/input-fields/TextInput.vue'
import TheButton from '@/components/shared/TheButton.vue'
</script>

<template>
   <AuthLayout title="Login">
      <div class="flex flex-col gap-y-4">
         <TextInput name="email" label="Email" />
         <TextInput name="password" label="Password" />
      </div>

      <TheButton class="btn black my-8 w-full" text="Login" />

      <div class="flex-center text-sm">
         <p class="text-grey-500 font-medium">Need to create an account ?</p>
         <router-link
            to="/sign-up"
            class="text-grey-900 font-bold pl-2 underline"
            >Sign Up</router-link
         >
      </div>
   </AuthLayout>
</template>
