//import {combineReducers} from 'redux'

export default function changeElementsListReducer(state = { data:[] }, action) {
	if (action.type === "addElement") {
		state.data.push({
			name: action.name,
			value:null
		})

		console.log(state.data)
		return state
	}

	if (action.type === "removeElement") {
		for (let elem of state.data) {
			if (elem.name === action.name) {
				let index = state.data.indexOf(elem)
				state.data.splice(index, index + 1)
			}
		}

		console.log(state.data)
		return state
	}

	if (action.type === "changeMass") {
/*		for (let elem of state.data) {
			if (elem.name === action.name) {
				let index = state.data.indexOf(elem)
				state.data.splice(index, index + 1)
			}
		}*/

		console.log(`Mass elem ${action.name} = ${action.mass} `)
		return state
	}
}


/*export function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}*/

/*export function echoReducer(state = { text: "Введите текст" }, action) {
	console.log("search: ", action.text.search(/\s+/))

	if (action.text === "") {
		state.text = "Введите текст"
		return state
	}

	if (action.text.search(/\s+/) != -1) {
		console.log("spaces")
		state.text = "Введите текст"
		return state
	}

	state.text = action.text
	return state

}*/


/*export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
})*/