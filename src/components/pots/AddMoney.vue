<template>
   <ModalLayout
      :title="`Add to '${pot?.name}'`"
      sub-text="Add money to your pot to keep it separate from your main balance.
      As soon as you add this money, it will be deducted from your current balance."
      customClass="max-w-[560px]"
   >
      <!-- :percentage="`${(newPotTotal / pot.target).toFixed(2) * 100}%`" -->
      <DataAndProgress
         text="New Amount"
         :amount="formatToDollar(newPotTotal)"
         :target="formatToDollar(pot?.target)"
         :percentage="`${((newPotTotal / pot.target) * 100).toFixed(2)}%`"
      >
         <div
            class="bg-green h-full rounded"
            :style="{
               backgroundColor: pot.theme,
               width: calculateProgress(newPotTotal, pot?.target) + '%',
            }"
         />
      </DataAndProgress>

      <TextInput
         is-amount
         name="amount"
         label="Amount to Add"
         placeholder="e.g. 20"
         v-model="amountValue"
      />
      <p class="mt-2">Live value: {{ amountValue }}</p>

      <button class="btn black w-full mt-5">Confirm Addition</button>
   </ModalLayout>
</template>

<script setup lang="js">
import { computed, ref } from 'vue'
import { formatToDollar, calculateProgress } from '@/utils/shared-utils'
import { useForm, useField } from 'vee-validate'
import ModalLayout from '../layout/ModalLayout.vue'
import TextInput from '../input-fields/TextInput.vue'
import DataAndProgress from './DataAndProgress.vue'

const props = defineProps({
   pot: Object,
})

// 1. Setup form (even if no validation rules)
useForm()

const total = ref(props.pot?.total)
const { value: amountValue } = useField('amount')

const newPotTotal = computed(() => {
   return amountValue.value
      ? Number(amountValue.value) + Number(total.value)
      : Number(total.value)
})
</script>
