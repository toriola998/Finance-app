<template>
   <ModalLayout
      :title="`Add to '${pot?.name}'`"
      sub-text="Add money to your pot to keep it separate from your main balance.
      As soon as you add this money, it will be deducted from your current balance."
      customClass="max-w-[560px]"
   >
      <DataAndProgress
         text="New Amount"
         :amount="formatToDollar(newPotTotal)"
         :target="formatToDollar(pot?.target)"
         :percentage="`${((newPotTotal / pot.target) * 100).toFixed(2)}%`"
         percentageColor="text-green"
      >
         <div
            class="relative w-full h-full rounded bg-beige-100 overflow-hidden"
         >
            <div
               class="h-full absolute top-0 left-0 transition-all duration-300"
               :style="{
                  borderRadius: '50px',
                  width: totalProgressPercentage + '%',
                  background: `linear-gradient(to right,
                     #000 0%,
                     #000 calc(${oldMoneyPortion}% - 1px),
                     #fff calc(${oldMoneyPortion}% - 3px),
                     #fff calc(${oldMoneyPortion}% + 3px),
                     ${pot.theme} calc(${oldMoneyPortion}% + 1px),
                     ${pot.theme} 100%)`,
               }"
            ></div>
         </div>
      </DataAndProgress>

      <TextInput
         is-amount
         name="amount"
         label="Amount to Add"
         placeholder="e.g. 20"
         v-model="amountValue"
      />
      <TheButton
         class="btn black w-full mt-5"
         text="Confirm Addition"
         @action="addMoneyToPot(pot)"
         :disabled="!amountValue"
      />
   </ModalLayout>
</template>

<script setup lang="js">
import { computed } from 'vue'
import { formatToDollar, calculateProgress } from '@/utils/shared-utils'
import { useForm, useField } from 'vee-validate'
import { useDataStore } from '@/stores'
import { toast } from 'vue3-toastify'
import ModalLayout from '../layout/ModalLayout.vue'
import TextInput from '../input-fields/TextInput.vue'
import DataAndProgress from './DataAndProgress.vue'
import TheButton from '../shared/TheButton.vue'

const props = defineProps({
   pot: Object,
})

// Setup form
useForm()

const { value: amountValue } = useField('amount')
const dataStore = useDataStore()
const emit = defineEmits(['addMoneyToPotSuccess'])

// Make current total reactive to prop changes
const currentTotal = computed(() => props.pot?.total || 0)

// Single progress bar calculations
const totalProgressPercentage = computed(() => {
   return calculateProgress(newPotTotal.value, props.pot?.target)
})

const oldMoneyPortion = computed(() => {
   if (newPotTotal.value === 0) return 0
   return (currentTotal.value / newPotTotal.value) * 100
})

const newPotTotal = computed(() => {
   const amount = amountValue.value ? Number(amountValue.value) : 0
   return amount + currentTotal.value
})

function addMoneyToPot(pot) {
   dataStore.updatePotBalance(pot, { total: newPotTotal.value })
   emit('addMoneyToPotSuccess')
   toast.success(`Money successfully added to '${pot?.name}' pot`)
}
</script>
