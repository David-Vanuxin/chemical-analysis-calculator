const initialState = {
  type:"values"
}

export const changeAppType = (state = initialState, action) => {
  switch(action.type) {
    case "changeAppType":
        state.type = action.value
      return state

    case "restart": return {type:"values"}

    default: return state
  }
}