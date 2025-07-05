<template>
   <div
      class="text-input w-full relative"
      :class="{ 'has-error': !!errorMessage }"
   >
      <label :for="name" :class="labelClass">{{ label }}</label>
      <input
         :name="name"
         :id="name"
         :type="isPasswordVisible && type === 'password' ? 'text' : type"
         :value="formattedValue"
         :disabled="disabled"
         @input="handleInput"
         @blur="handleBlur"
         @keypress="handleKeyPress"
         @keydown="handleKeyDown"
         :placeholder="placeholder"
         :class="inputClass"
         min="0"
         :data-is-amount="isAmount"
      />
      <div className="absolute right-2 top-[2.4rem]" v-if="type === 'password'">
         <button type="button" @click="togglePassword">
            <img
               :src="`/icons/${isPasswordVisible ? 'eye-open.svg' : 'eye-open.svg'}`"
               alt="show/hide password"
            />
         </button>
      </div>

      <p
         class="text-red-2 absolute right-0 text-xs pt-[2px]"
         v-show="errorMessage"
      >
         {{ errorMessage }}
      </p>
   </div>
</template>

<script setup>
import { toRef, ref, nextTick } from 'vue'
import { useField } from 'vee-validate'

const props = defineProps({
   type: {
      type: String,
      default: 'text',
   },
   value: {
      type: String,
      default: undefined,
   },
   name: {
      type: String,
      required: true,
   },
   label: {
      type: String,
   },
   disabled: {
      type: Boolean,
      default: false,
   },
   placeholder: {
      type: String,
      default: '',
   },
   inputClass: {
      type: String,
      default: 'border-beige-500 bg-white',
   },
   labelClass: {
      type: String,
      default: 'text-xs mb-2 text-grey-500 font-bold',
   },
   isAmount: {
      type: Boolean,
      default: false, // Prop to indicate if input is an amount
   },
   isBankAccount: {
      type: Boolean,
      default: null, // Default to null if no function is passed
   },
})

// use `toRef` to create reactive references to `name` prop which is passed to `useField`
// this is important because vee-validte needs to know if the field name changes
// https://vee-validate.logaretm.com/v4/guide/composition-api/caveats
const name = toRef(props, 'name')

// we don't provide any rules here because we are using form-level validation
// https://vee-validate.logaretm.com/v4/guide/validation#form-level-validation

const {
   value: inputValue,
   errorMessage,
   handleBlur,
   handleChange,
   meta,
} = useField(name, undefined, {
   initialValue: props.value,
})
void inputValue

//FORMAT INPUT IF IT'S AMOUNT
const formattedValue = ref(inputValue.value)
const formatNumber = (num) => {
   return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

const emit = defineEmits(['verifyAccount'])

const handleInput = (event) => {
   const rawValue = event.target.value
   const inputName = event.target.name

   if (rawValue.replace(/\D/g, '').length === 10 && props.isBankAccount) {
      emit('verifyAccount', rawValue, inputName)
   }

   if (props.isAmount) {
      const numberValue = rawValue.replace(/,/g, '') // Remove existing commas
      if (!isNaN(numberValue)) {
         formattedValue.value = formatNumber(numberValue) // Format for display
         handleChange(numberValue) // Notify vee-validate of the unformatted number
      }
   } else {
      // For other types, simply pass the value through
      formattedValue.value = rawValue
      handleChange(rawValue) // Notify vee-validate
   }
}

// Prevent alphabet input
const handleKeyPress = (event) => {
   const inputValue = event.target.value

   if (props.isAmount && !/[0-9]/.test(event.key)) {
      event.preventDefault()
   }
   if (props.isBankAccount && !/[0-9]/.test(event.key)) {
      event.preventDefault()
   }
   if (props.isBankAccount && inputValue.replace(/\D/g, '').length === 10) {
      event.preventDefault()
   }
}

const handleKeyDown = (event) => {
   if (props.type === 'number' && event.keyCode === 69) {
      event.preventDefault()
   }
}

const isPasswordVisible = ref(false)
function togglePassword() {
   isPasswordVisible.value = !isPasswordVisible.value
}
</script>

<style scoped>
@reference "../../styles/main.css";

input {
   @apply w-full px-3 py-[10px] border rounded-lg border-beige-500;
   outline: none;
   transition:
      border-color 0.3s ease-in-out,
      color 0.3s ease-in-out,
      background-color 0.3s ease-in-out;

   /* &::placeholder {
      @apply text-grey-18 font-normal text-sm; */
   /* } */
}

/* input:focus {
   @apply border border-main-purple;
} */

.text-input.has-error input {
   @apply border border-red;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
   -webkit-appearance: none;
   margin: 0;
}

/* Firefox */
input[type='number'] {
   -moz-appearance: textfield;
}
</style>
