const evenCounter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT_EVEN':
      return state + (2*action.count)
    case 'DECREMENT_EVEN':
      return state - (2*action.count)
    default:
      return state
  }
}

export default evenCounter