export const themeColors = [
   {
      color: '#277c78',
      label: 'Green',
   },
   {
      color: '#f2cdac',
      label: 'Yellow',
   },
   {
      color: '#82c9d7',
      label: 'Cyan',
   },
   {
      color: '#626070',
      label: 'Navy',
   },
   {
      color: '#c94736',
      label: 'Red',
   },
   {
      color: '#826cb0',
      label: 'Pink',
   },
   {
      color: '#597c7c',
      label: 'Turquoise',
   },
   {
      color: '#93674f',
      label: 'Brown',
   },
   {
      color: '#934f6f',
      label: 'Magenta',
   },
   {
      color: '#3f82b2',
      label: 'Blue',
   },
   {
      color: '#97a0ac',
      label: 'Navy Grey',
   },
   {
      color: '#7f9161',
      label: 'Green',
   },
   {
      color: '#af81ba',
      label: 'Pink',
   },
   {
      color: '#cab361',
      label: 'Gold',
   },
   {
      color: '#be6c49',
      label: 'Orange',
   },
]

export const theme = themeColors.map(
   (item) => `${item.color} - '${item.label}'`,
)
