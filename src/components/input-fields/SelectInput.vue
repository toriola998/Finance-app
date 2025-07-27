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
               <span>
                  <span v-if="value">
                     <span class="flex-items gap-x-3">
                        <span
                           class="h-4 w-4 rounded-full"
                           :style="{ backgroundColor: parsedColor }"
                           v-if="parsedColor"
                        />
                        <span>{{ parsedLabel }}</span>
                     </span>
                  </span>
                  <span v-else class="text-gray-500">Select</span>
               </span>
               <img src="/assets/icons/icon-caret-down.svg" alt="" />
            </ListboxButton>

            <ListboxOptions
               class="absolute bg-white shadow w-full rounded mt-1 max-h-40 overflow-auto z-50"
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
                     <span
                        v-if="getColor(option)"
                        class="h-4 w-4 rounded-full block"
                        :style="{ backgroundColor: getColor(option) }"
                     />
                     <span>{{ getLabel(option) }}</span>
                  </li>
               </ListboxOption>
            </ListboxOptions>
            <span class="text-red absolute right-0 text-xs pt-[2px]">{{
               errorMessage
            }}</span>
         </Listbox>
      </div>
   </div>
</template>

<script lang="js">
import { capFirstLetter } from '@/utils/shared-utils'
import { watch, computed } from 'vue'
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
      function getColor(option) {
         if (typeof option === 'string' && option.startsWith('#')) {
            return option.split(' - ')[0].trim()
         }
         return option || null
      }

      function getLabel(option) {
         if (typeof option === 'string' && option.startsWith('#')) {
            const parts = option.split(' - ')
            return parts[1]?.replace(/['"]+/g, '').trim() || ''
         }
         return option || capFirstLetter(option)
      }

      const parsedColor = computed(() => {
         if (typeof value.value === 'string' && value.value.startsWith('#')) {
            return value.value.split(' - ')[0].trim()
         }
         return null
      })

      const parsedLabel = computed(() => {
         if (typeof value.value === 'string' && value.value.startsWith('#')) {
            const parts = value.value.split(' - ')
            // console.log(parts[1].trim(), 'alleged label,', parts)
            return parts[1]?.replace(/['"]+/g, '').trim() || ''
         }
         return value || ''
      })

      return {
         value,
         errorMessage,
         capFirstLetter,
         getColor,
         getLabel,
         parsedColor,
         parsedLabel,
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
