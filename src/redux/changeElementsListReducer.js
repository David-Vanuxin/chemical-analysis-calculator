const initialState = {
	data: [
		{name:"CO2", value:null},
		{name:"H2O", value:null},
	]
}



export default function changeElementsListReducer(state = initialState, action) {
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

/*	if (action.type === "changeMass") {


		console.log(`Mass elem ${action.name} = ${action.mass} `)
		return state
	}*/
}