const initialState = {
  elements: [
    {name:"CO2", value:null},
    {name:"H2O", value:null},
  ]
}

export const changeElementsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addElement":
      state.elements.push({
        name: action.name,
        value:null
      })
      return state

    case "removeElement":
      for (let elem of state.elements) {
        if (elem.name === action.name) {
          let index = state.elements.indexOf(elem)
          state.elements.splice(index, index + 1)
        }
      }
      return state

    case "changeMass":
      for (let elem of state.elements) {
        if (elem.name === action.name) {
          elem.value = action.value
        }
      }
      console.log(state.elements)
      return state

    case "restart": 
      return {
        elements: [
          {name:"CO2", value:null},
          {name:"H2O", value:null},
        ]
      }

    default: return state
  }
}