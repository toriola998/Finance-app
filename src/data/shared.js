export const sortList = ['latest', 'highest', 'A to Z', 'Z to A', 'lowest']

export function sortTransactions(transactions, sortKey) {
   const result = [...transactions] // copy to avoid mutating original array

   switch (sortKey) {
      case 'latest':
         result.sort((a, b) => new Date(b.date) - new Date(a.date))
         break
      case 'A to Z':
         result.sort((a, b) => a.name.localeCompare(b.name))
         break
      case 'Z to A':
         result.sort((a, b) => b.name.localeCompare(a.name))
         break
      case 'highest':
         result.sort((a, b) => b.amount - a.amount)
         break
      case 'lowest':
         result.sort((a, b) => a.amount - b.amount)
         break
      default:
         // If sortKey is unknown, leave result as is
         break
   }

   return result
}

export const budgets = [
   {
      color: 'bg-green',
      title: 'Entertainment',
      value: '$50.00',
   },
   {
      color: 'bg-cyan',
      title: 'Bills',
      value: '$750.00',
   },
   {
      color: 'bg-yellow',
      title: 'Dining Out',
      value: '$75.00',
   },
   {
      color: 'bg-navy',
      title: 'Personal Care',
      value: '$100.00',
   },
]
