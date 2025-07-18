<template>
   <ModalLayout
      title="Add New Budget"
      sub-text="Choose a category to set a spending budget. These categories can help you monitor spending."
      customClass="max-w-[560px]"
   >
      <Form @submit="onSubmit" :validation-schema="schemas.addNewBudgetSchema">
         <div class="flex flex-col gap-y-4">
            <SelectInput
               :options="categoryList"
               name="category"
               key-prop="category"
               label-prop="category"
               label="Budget Category"
            />
            <TextInput
               is-amount
               name="maximumSpend"
               label="Maximum spend"
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
         <TheButton text="Add Pot" class="black mt-6 py-4 w-full" />
      </Form>
   </ModalLayout>
</template>

<script setup>
import { Form } from 'vee-validate'
import { theme } from '@/data/theme'
import { categoryList } from '@/data/shared'
import ModalLayout from '../layout/ModalLayout.vue'
import TextInput from '../input-fields/TextInput.vue'
import SelectInput from '../input-fields/SelectInput.vue'
import TheButton from '../shared/TheButton.vue'
import schemas from '@/schema'

async function onSubmit(values) {
   console.log(values)
}
</script>
