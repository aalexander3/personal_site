const navState = {
  toggled: false
}

export const navReducer = (state = navState, action) => {
  switch (action.type) {
    case 'TOGGLE_NAV':
      return action.payload
    default:
      return state
  }
}
