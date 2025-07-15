<template>
   <ModalLayout
      :title="`Add to ${name}`"
      sub-text="Add money to your pot to keep it separate from your main balance.
      As soon as you add this money, it will be deducted from your current balance."
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
         name="amount"
         label="Amount to Add"
         placeholder="e.g. 20"
      />

      <button class="btn black w-full mt-5">Confirm Addition</button>
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
