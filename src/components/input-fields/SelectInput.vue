<!--https://codesandbox.io/p/sandbox/vee-validate-headless-ui-example-9jz9h--->
<template>
   <div>
      <label :class="labelClass">{{ label }}</label>
      <div
         :class="[
            'border rounded-lg', // Static classes
            inputClass, // Dynamic classes
            { 'has-error': !!errorMessage }, // Conditional class
         ]"
      >
         <Listbox v-model="value" as="div" class="w-full relative">
            <ListboxButton
               class="p-3 flex-items justify-between capitalize w-full text-[15px]"
            >
               <span>
                  <span v-if="value">{{ value }}</span>
                  <span v-else class="text-grey-18 font-normal text-sm"
                     >Select</span
                  >
               </span>
               <img src="/icons/dropdown-grey.svg" alt="" />
            </ListboxButton>

            <ListboxOptions
               class="absolute bg-white shadow w-full rounded mt-1 max-h-80 overflow-auto z-50"
            >
               <ListboxOption
                  v-slot="{ selected }"
                  v-for="option in options"
                  :key="option[keyProp]"
                  :value="option"
                  as="template"
               >
                  <li
                     :class="[
                        'list-option-style',
                        selected ? 'bg-gray-100' : '',
                     ]"
                  >
                     {{ capFirstLetter(option) }}
                  </li>
               </ListboxOption>
            </ListboxOptions>
            <span class="text-red-2 absolute right-0 text-xs pt-[2px]">{{
               errorMessage
            }}</span>
         </Listbox>
      </div>
   </div>
</template>

<script lang="js">
import { capFirstLetter } from '@/utils/shared-utils'
import { watch } from 'vue'
import {
   Listbox,
   ListboxLabel,
   ListboxButton,
   ListboxOptions,
   ListboxOption,
} from '@headlessui/vue'
import { useField } from 'vee-validate'

export default {
   components: {
      Listbox,
      ListboxLabel,
      ListboxButton,
      ListboxOptions,
      ListboxOption,
   },
   props: {
      options: {
         type: Array,
         required: true,
      },
      modelValue: {
         type: null,
      },
      keyProp: {
         type: String,
         required: true,
      },
      labelProp: {
         type: String,
         required: true,
      },
      name: {
         type: String,
         required: true,
      },
      rules: {
         type: null,
         default: null,
      },
      inputClass: {
         type: String,
         default: 'border-grey-17 bg-white',
      },
      label: {
         type: String,
         required: true,
      },
      labelClass: {
         type: String,
         default: 'text-sm mb-2 text-black-3',
      },
   },
   emits: ['update:modelValue'],
   setup(props, { emit }) {
      const { value, errorMessage } = useField(props.name, props.rules, {
         initialValue: props.modelValue,
      })
      // Sync v-model binding with vee-validate model changes
      watch(value, (newValue) => {
         if (newValue !== props.modelValue) {
            emit('update:modelValue', newValue)
         }
      })
      // Sync vee-validate's model with external model changes.
      watch(
         () => props.modelValue,
         (newModel) => {
            if (newModel !== value.value) {
               value.value = newModel
            }
         },
      )
      return {
         value,
         errorMessage,
         capFirstLetter,
      }
   },
}
</script>

<style scoped>
.list-option-style {
   @apply text-black px-4 py-2 border-b border-gray-100
    cursor-pointer text-[14.5px] hover:bg-gray-50;
}

.has-error {
   @apply border border-red-2 rounded;
}
</style>
