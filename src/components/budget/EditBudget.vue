<template>
   <ModalLayout
      title="Edit Budget"
      sub-text="As your budgets change, feel free to update your spending limits."
      customClass="max-w-[560px]"
   >
      <Form @submit="onSubmit" :validation-schema="schemas.addNewBudgetSchema" :initial-values="defaultValues">
         <div class="flex flex-col gap-y-4">
            <SelectInput2
               :options="categoryList"
               name="category"
               key-prop="category"
               label-prop="category"
               label="Budget Category"
            />
            <TextInput
               is-amount
               name="maximum"
               label="Maximum spend"
               placeholder="e.g. 2000"
            />
            <SelectInput2
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

<script setup lang="js">
import { ref, computed } from 'vue'
import { Form } from 'vee-validate'
import { themeColors, theme } from '@/data/theme'
import { categoryList } from '@/data/shared'
import SelectInput2 from '../input-fields/SelectInput2.vue'
//import SelectInput2 from '../input-fields/SelectInput2.vue'
import ModalLayout from '../layout/ModalLayout.vue'
import TextInput from '../input-fields/TextInput.vue'
import TheButton from '../shared/TheButton.vue'
import schemas from '@/schema'

function onSubmit(values) {
   console.log(values)
}

const props = defineProps({
   budget: Object,
})

const getThemeLabelFormat = (color) => {
  const match = themeColors.find((t) => {
    console.log(t.color.toLowerCase(), color.toLowerCase(), 'reddd')
    return t.color.toLowerCase() === color.toLowerCase()
  })
  console.log(match, 'match')
  return match ? `${match.color} - '${match.label}'` : color
}

const defaultValues = computed(() => {
  if (!props.budget) return {}

  return {
    maximum: props.budget.maximum,
    theme: getThemeLabelFormat(props.budget.theme),
    category: props.budget.category,
  }
})

</script>
