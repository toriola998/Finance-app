<template>
   <ModalLayout
      :title="`Withdraw from ${name}`"
      sub-text="Withdraw from your pot to put money back in your main balance.
      This will reduce the amount you have in this pot."
      customClass="max-w-[560px]"
   >
      <DataAndProgress
         text="New Amount"
         amount="$159.00"
         target="$2000"
         percentage="7.5%"
      >
         <div
            class="bg-green h-full rounded"
            :style="{ width: (2 / 7.59) * 100 + '%' }"
         />
      </DataAndProgress>

      <TextInput
         is-amount
         name="amoun"
         label="Amount to Withdraw"
         placeholder="e.g. 20"
      />

      <button class="btn black w-full mt-5">Confirm Withdrawal</button>
   </ModalLayout>
</template>

<script setup>
import ModalLayout from '../layout/ModalLayout.vue'
import TextInput from '../input-fields/TextInput.vue'
import DataAndProgress from './DataAndProgress.vue'

defineProps({
   name: String,
})
</script>
