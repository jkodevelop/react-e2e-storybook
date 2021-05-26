const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT':
    case 'DECREMENT':
      return state+action.count
    default:
      return state
  }
}

export default counter