import changeElementsListReducer from "../redux/changeElementsListReducer"
import React, {useState} from "react"
import {createStore} from "redux"

let store = createStore(changeElementsListReducer)
// Эти продукты всегда должны быть
store.dispatch({ type:"addElement", name: "CO2"})
store.dispatch({ type:"addElement", name: "H2O"})

export default function InputSubstance(props) {
	const [state, setState] = useState(false)

	return (<label>
			<input type="checkbox" onClick={() => changeElement(props.name)}></input>
			<span id={props.name}>{props.name}</span>
		</label>
	)



	function changeElement(name) {
		if (state) {
			setState(false)
			store.dispatch({ type:"removeElement", name: props.name})
		} else {
			setState(true)
			store.dispatch({ type:"addElement", name: props.name})
		}
	}
}