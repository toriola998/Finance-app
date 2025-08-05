<template>
   <ModalLayout
      :title="`Withdraw from '${pot?.name}'`"
      sub-text="Withdraw from your pot to put money back in your main balance.
      This will reduce the amount you have in this pot."
      customClass="max-w-[560px]"
   >
      <DataAndProgress
         text="New Amount"
         :amount="formatToDollar(newPotTotal)"
         :target="formatToDollar(pot?.target)"
         :percentage="`${((newPotTotal / pot.target) * 100).toFixed(2)}%`"
         percentageColor="text-red"
      >
         <div
            class="relative w-full h-full rounded bg-beige-100 overflow-hidden"
         >
            <div
               class="h-full absolute top-0 left-0 transition-all duration-300"
               :style="{
                  borderRadius: '50px',
                  width: totalProgressPercentage + '%',
                  background: withdrawalGradient,
               }"
            ></div>
         </div>
      </DataAndProgress>

      <TextInput
         is-amount
         name="amount"
         label="Amount to Withdraw"
         placeholder="e.g. 20"
         v-model="amountValue"
      />
      <TheButton
         class="btn black w-full mt-5"
         text="Confirm Withdrawal"
         @action="withdrawFromPot(pot)"
         :disabled="!amountValue || withdrawAmount > currentTotal"
      />
      <p
         v-if="withdrawAmount > currentTotal"
         class="bg-red text-white rounded-lg text-center py-3 text-sm mt-2"
      >
         Cannot withdraw more than available amount
      </p>
   </ModalLayout>
</template>

<script setup>
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

useForm()

const { value: amountValue } = useField('amount')
const dataStore = useDataStore()
const emit = defineEmits(['potWithdrawSuccess'])

const currentTotal = computed(() => props.pot?.total || 0)

// Withdrawal amount
const withdrawAmount = computed(() => {
   return amountValue.value ? Number(amountValue.value) : 0
})

// New total after withdrawal (subtract the amount)
const newPotTotal = computed(() => {
   const remaining = currentTotal.value - withdrawAmount.value
   return Math.max(0, remaining) // Can't go below 0
})

// Progress bar calculations
const totalProgressPercentage = computed(() => {
   return calculateProgress(newPotTotal.value, props.pot?.target)
})

// Remaining money portion (what's left after withdrawal)
const remainingPortion = computed(() => {
   if (currentTotal.value === 0) return 0
   return (newPotTotal.value / currentTotal.value) * 100
})

// Withdrawal gradient - remaining money in black, withdrawn portion in red
const withdrawalGradient = computed(() => {
   if (withdrawAmount.value === 0) {
      // No withdrawal, show all black
      return '#000'
   }

   if (withdrawAmount.value >= currentTotal.value) {
      // Withdrawing everything, show all red
      return '#C94736'
   }

   // Show remaining portion in black, withdrawn portion in red with gap
   return `linear-gradient(to right,
      #000 0%,
      #000 calc(${remainingPortion.value}% - 1px),
      #fff calc(${remainingPortion.value}% - 1px),
      #fff calc(${remainingPortion.value}% + 1px),
      #C94736 calc(${remainingPortion.value}% + 1px),
      #C94736 100%)`
})

function withdrawFromPot(pot) {
   if (withdrawAmount.value > currentTotal.value) {
      toast.error('Cannot withdraw more than available amount')
      return
   }
   dataStore.updatePotBalance(pot, { total: newPotTotal.value })
   emit('potWithdrawSuccess')

   toast.success(`Money successfully withdrawn from '${pot?.name}' pot`)
}
</script>
