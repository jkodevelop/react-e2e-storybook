// used by single counter (SingleCounter)
export const incrementCount = count => ({
  type: 'INCREMENT',
  count,
})
export const decrementCount = count => ({
  type: 'DECREMENT',
  count,
})

// used by even counter (EvenCounter)
export const incrementCountEven = count => ({
  type: 'INCREMENT_EVEN',
  count,
})
export const decrementCountEven = count => ({
  type: 'DECREMENT_EVEN',
  count,
})