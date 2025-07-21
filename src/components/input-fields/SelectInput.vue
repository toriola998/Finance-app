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
               class="p-3 flex-items justify-between capitalize w-full text-sm text-grey-900 gap-x-3"
            >
               <span class="flex-items gap-x-3">
                  <span
                     :class="['h-4 w-4 rounded-full']"
                     :style="{ backgroundColor: value?.color }"
                     v-if="value?.color"
                  />
                  <span>{{ value?.label }}</span>
               </span>
               <img src="/assets/icons/icon-caret-down.svg" alt="" />
            </ListboxButton>

            <ListboxOptions
               class="absolute bg-white shadow w-full rounded mt-1 max-h-40 overflow-auto z-50"
            >
               <ListboxOption
                  v-slot="{ selected }"
                  v-for="option in options"
                  :key="option.label"
                  :value="option"
                  as="template"
               >
                  <li
                     :class="[
                        'list-option-style',
                        selected ? 'bg-gray-100' : '',
                     ]"
                  >
                     <span
                        v-if="option.color"
                        :class="['h-4 w-4 rounded-full block']"
                        :style="{ backgroundColor: option?.color }"
                     />
                     <span>{{ option.label }}</span>
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
      label: {
         type: String,
         required: true,
      },
      inputClass: {
         type: String,
         default: 'border-beige-500 bg-white',
      },
      labelClass: {
         type: String,
         default: 'text-xs mb-2 text-grey-500 font-bold',
      },
   },
   emits: ['update:modelValue'],
   setup(props, { emit }) {
      const { value, errorMessage } = useField(props.name, props.rules, {
         initialValue: props.modelValue || props.options[0],
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
               value.value = newModel || props.options[0]
            }
         },
         { immediate: true }, // ensure it runs on mount
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
@reference "../../styles/main.css";

.list-option-style {
   @apply text-grey-900 px-4 py-3 border-b border-gray-100
    cursor-pointer text-sm hover:bg-gray-50 flex items-center gap-x-3;
}

.has-error {
   @apply border border-red;
}
</style>
