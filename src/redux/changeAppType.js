const initialState = {
  type:null
}

export const changeAppType = (state = initialState, action) => {
  switch(action.type) {
    case "changeAppType":
        state.matter = action.value
      return state

    case "restart": return initialState

    default:
      return state
  }
}