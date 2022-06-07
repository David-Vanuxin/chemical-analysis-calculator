const initialState = {
	data: [
		{name:"CO2", value:null},
		{name:"H2O", value:null},
		{name:"matter", value:null},
	]
}

export const changeElementsListReducer = (state = initialState, action) => {
	let newState
	switch (action.type) {
		case "addElement":
			state.data.push({
				name: action.name,
				value:null
			})
			return state

		case "removeElement":
			for (let elem of state.data) {
				if (elem.name === action.name) {
					let index = state.data.indexOf(elem)
					state.data.splice(index, index + 1)
				}
			}
			return state

		case "restart":
			const initialState2 = {
				data: [
					{name:"CO2", value:null},
					{name:"H2O", value:null},
					{name:"matter", value:null},
				]
			}
			return initialState2

		case "changeMass":
			newState = {
				data:[]
			}

			for (let elem of state.data) {
				if (elem.name !== action.name) {
					newState.data.push(elem)
					continue
				}

				newState.data.push({
					name: action.name,
					value: action.value
				})
			}
			return newState

		case "changeMatterMass":
			newState = {
				data:[]
			}

			for (let elem of state.data) {
				if (elem.name !== action.name) {
					newState.data.push(elem)
					continue
				}

				newState.data.push({
					name: "matter",
					value: action.value
				})
			}
			console.log("Matter mass added")
			console.log(newState.data)
			return newState

		default:
			console.warn("Undefined case", action.type)
			return state
	}
}