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

import { themeColors } from '@/data/theme'
export const getThemeLabelFormat = (color) => {
   const match = themeColors.find((t) => {
      return t.color.toLowerCase() === color.toLowerCase()
   })
   return match ? `${match.color} - '${match.label}'` : color
}

export function calculateProgress(total, target) {
   if (target <= 0) return 0 // Avoid divide by zero

   const percentage = Math.abs(total / target) * 100
   return Math.min(Math.max(percentage, 0), 100)
}
