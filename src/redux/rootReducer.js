//import {combineReducers} from 'redux'

export function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}

export function echoReducer(state = { text: "Введите текст" }, action) {
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

}


/*export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
})*/