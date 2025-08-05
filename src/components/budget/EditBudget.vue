<template>
   <ModalLayout
      title="Edit Budget"
      sub-text="As your budgets change, feel free to update your spending limits."
      customClass="max-w-[560px]"
   >
      <Form
         @submit="onSubmit"
         :validation-schema="schemas.budgetSchema"
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
import { theme } from '@/data/theme'
import { categoryList } from '@/data/shared'
import { getThemeLabelFormat } from '@/utils/shared-utils'
import { useDataStore } from '@/stores'
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
