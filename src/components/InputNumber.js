import changeElementsListReducer from "../redux/changeElementsListReducer"
import React from "react"
import {createStore} from "redux"

let store = createStore(changeElementsListReducer)

export default function InputNumber(props) {
	let unit = "г"
	if (props.name === "CO2") unit = "л"

	function changeValue(name, value) {
		store.dispatch({ type:"changeMass", name: props.name, mass: value })
	}

	return (
		<label>
			<span id={props.name}>{props.name}</span>
			<input onChange={(event) => changeValue(props.name, event.target.valueAsNumber)} type="number"></input>
			{unit}
		</label>
	)
}