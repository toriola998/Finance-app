export function capFirstLetter(sentence) {
   return sentence.charAt(0).toUpperCase() + sentence.slice(1)
}

export function formatToDollar(amount) {
   return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
   }).format(amount)
}

import data from '../../data.json'
export function filterByCategory(category) {
   return data.transactions.filter((item) => item.category === category)
}

export function getTotalAmountSpent(arg) {
   const getTransactionByCategory = filterByCategory(arg)

   return getTransactionByCategory.reduce((sum, txn) => sum + txn.amount, 0)
}
