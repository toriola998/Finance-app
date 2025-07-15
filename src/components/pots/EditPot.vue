<template>
   <ModalLayout
      title="Edit Pot"
      sub-text="If your saving targets change, feel free to update your pots."
      customClass="max-w-[560px]"
   >
      <Form @submit="onSubmit" :validation-schema="schemas.addNewPotSchema">
         <div class="flex flex-col gap-y-4">
            <TextInput
               name="potName"
               label="Pot Name"
               placeholder="e.g. Rainy Days"
            />
            <TextInput
               is-amount
               name="target"
               label="Target"
               placeholder="e.g. 2000"
            />
            <SelectInput
               :options="theme"
               name="theme"
               key-prop="theme"
               label-prop="theme"
               label="Theme"
            />
         </div>
         <TheButton text="Save Changes" class="black mt-6 py-4 w-full" />
      </Form>
   </ModalLayout>
</template>

<script setup>
import { Form } from 'vee-validate'
import { theme } from '@/data/theme'
import ModalLayout from '../layout/ModalLayout.vue'
import TextInput from '../input-fields/TextInput.vue'
import SelectInput from '../input-fields/SelectInput.vue'
import TheButton from '../shared/TheButton.vue'
import schemas from '@/schema'

async function onSubmit(values) {
   console.log(values)
}
</script>
