const initialState = {
  mass:null
}

export const changeMatterMassReducer = (state = initialState, action) => {
  switch(action.type) {
    case "changeMatterMass":
        state.mass = action.mass
      return state

    case "deleteMatterMass":
    case "restart": return {mass:null}

    default: return state
  }
}