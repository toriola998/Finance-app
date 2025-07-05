<script setup>
import AuthLayout from '@/components/layout/AuthLayout.vue'
import TextInput from '@/components/input-fields/TextInput.vue'
import TheButton from '@/components/shared/TheButton.vue'
</script>

<template>
   <AuthLayout>
      <div class="flex flex-col gap-y-4">
         <TextInput name="name" label="Name" />
         <TextInput name="email" label="Email" />
         <TextInput name="password" label="Password" type="password" />
      </div>

      <TheButton class="btn black my-8 w-full" text="Login" />

      <div class="flex-center text-sm">
         <p class="text-grey-500 font-medium">Already have an account?</p>
         <router-link to="/" class="text-grey-900 font-bold pl-2 underline"
            >Login</router-link
         >
      </div>
   </AuthLayout>
</template>
