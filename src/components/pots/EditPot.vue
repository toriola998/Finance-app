<template>
   <ModalLayout
      title="Edit Pot"
      sub-text="If your saving targets change, feel free to update your pots."
      customClass="max-w-[560px]"
   >
      <Form
         @submit="onSubmit"
         :validation-schema="schemas.potSchema"
         :initial-values="defaultValues"
      >
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

<script setup lang="js">
import { computed } from 'vue'
import { Form } from 'vee-validate'
import { theme } from '@/data/theme'
import { useDataStore } from '@/stores'
import { getThemeLabelFormat } from '@/utils/shared-utils'
import { toast } from 'vue3-toastify'
import ModalLayout from '../layout/ModalLayout.vue'
import TextInput from '../input-fields/TextInput.vue'
import SelectInput from '../input-fields/SelectInput.vue'
import TheButton from '../shared/TheButton.vue'
import schemas from '@/schema'

const dataStore = useDataStore()
const emit = defineEmits(['editPotSuccess'])

const props = defineProps({
   pot: Object,
})

const defaultValues = computed(() => {
   if (!props.pot) return {}

   return {
      potName: props.pot.name,
      theme: getThemeLabelFormat(props.pot.theme),
      target: props.pot.target,
   }
})

function onSubmit(values) {
   const updatedPot = {
      potName: values.potName,
      target: parseFloat(values.target),
      theme: values.theme.split(' - ')[0].trim(),
   }

   dataStore.editPot(props.pot, updatedPot)
   emit('editPotSuccess')
   toast.success(`${values.potName} pot successfully updated`)
}
</script>
