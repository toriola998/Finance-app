<template>
   <ModalLayout
      title="Edit Budget"
      sub-text="As your budgets change, feel free to update your spending limits."
      customClass="max-w-[560px]"
   >
      <Form
         @submit="onSubmit"
         :validation-schema="schemas.addNewBudgetSchema"
         :initial-values="defaultValues"
      >
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
               name="maximum"
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
         <TheButton text="Save Changes" class="black mt-6 py-4 w-full" />
      </Form>
   </ModalLayout>
</template>

<script setup lang="js">
import { computed } from 'vue'
import { Form } from 'vee-validate'
import { themeColors, theme } from '@/data/theme'
import { categoryList } from '@/data/shared'
import { useDataStore } from '@/stores/data'
import { toast } from 'vue3-toastify'
import SelectInput from '../input-fields/SelectInput.vue'
import ModalLayout from '../layout/ModalLayout.vue'
import TextInput from '../input-fields/TextInput.vue'
import TheButton from '../shared/TheButton.vue'
import schemas from '@/schema'

const dataStore = useDataStore()
const emit = defineEmits(['editBudgetSuccess'])

const props = defineProps({
   budget: Object,
})

const getThemeLabelFormat = (color) => {
   const match = themeColors.find((t) => {
      return t.color.toLowerCase() === color.toLowerCase()
   })
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
function onSubmit(values) {
   const updatedBudget = {
      category: values.category,
      maximum: parseFloat(values.maximum),
      theme: values.theme.split(' - ')[0].trim(),
   }
   dataStore.editBudget(props.budget, updatedBudget)
   emit('editBudgetSuccess')
   toast.success(`${values.category} budget successfully updated`)
}
</script>
