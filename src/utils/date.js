export function formatDate(dateStr) {
   const date = new Date(dateStr)

   return date.toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
   })
}

export function getDayWithSuffix(dateStr) {
   const date = new Date(dateStr)
   const day = date.getDate()

   const suffix =
      day % 10 === 1 && day !== 11
         ? 'st'
         : day % 10 === 2 && day !== 12
           ? 'nd'
           : day % 10 === 3 && day !== 13
             ? 'rd'
             : 'th'

   return `${day}${suffix}`
}
