export function capFirstLetter(sentence) {
   return sentence.charAt(0).toUpperCase() + sentence.slice(1)
}

export function formatToDollar(amount) {
   return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
   }).format(amount)
}
