<template>
   <PageLayout title="Pots">
      <template #header>
         <button class="btn black px-4" @click="showAddNewPot = true">
            + Add New Pot
         </button>
      </template>

      <div class="mt-8 flex flex-col gap-6 lg:grid grid-cols-2">
         <PotsCard
            v-for="(item, index) in data.pots"
            :key="index"
            :pot="item"
            @action-selected="handleActionSelected"
            @item-selected="handleItemSelected"
         />
      </div>

      <AddNewPot v-if="showAddNewPot" @addPotSuccess="handleAddPotSuccess" />
      <DeleteConfirmation
         v-if="showDeleteConfirmation"
         title="Pot"
         :name="pot.name"
         @cancel="showDeleteConfirmation = false"
         @proceed="deletePot"
      />
   </PageLayout>
   <EditPot
      v-if="showEditPot"
      :pot="pot"
      @editPotSuccess="showEditPot = false"
   />
   <AddMoney v-if="showAddMoney" />
   <WithdrawMoney v-if="showWithdraw" />
</template>

<script setup>
import { ref, provide } from 'vue'
import { toast } from 'vue3-toastify'
import { useDataStore } from '@/stores/data'
import PageLayout from '@/components/layout/PageLayout.vue'
import AddNewPot from '@/components/pots/AddNewPot.vue'
import PotsCard from '@/components/pots/PotsCard.vue'
import AddMoney from '@/components/pots/AddMoney.vue'
import EditPot from '@/components/pots/EditPot.vue'
import WithdrawMoney from '@/components/pots/WithdrawMoney.vue'
import DeleteConfirmation from '@/components/shared/DeleteConfirmation.vue'

const { financeData: data } = useDataStore()
const dataStore = useDataStore()

const showAddNewPot = ref(false)
const pot = ref({})
const showDeleteConfirmation = ref(false)
const showEditPot = ref(false)
const showAddMoney = ref(false)

function handleItemSelected(item) {
   pot.value = item
}
function handleAddPotSuccess() {
   showAddNewPot.value = false
   toast.success('Pot Successully Added!')
}
function handleActionSelected(action) {
   if (action === 'Delete Pot') {
      showDeleteConfirmation.value = true
   } else if (action === 'Edit Pot') {
      showEditPot.value = true
   }
}
function deletePot() {
   dataStore.deletePot(pot.value)

   toast.success(`${pot.value.name} successfully deleted`)
   pot.value = {}
   showDeleteConfirmation.value = false
}
provide('closeModal', () => {
   showAddNewPot.value = false
   showAddMoney.value = false
   showDeleteConfirmation.value = false
   showEditPot.value = false
})
</script>
