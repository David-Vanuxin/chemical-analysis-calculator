import React from "react"
import {useDispatch} from 'react-redux'

export default function InputNumber(props) {
	let unit = "г"
	if (props.name === "CO2" || props.name === "HCl") unit = "л"

	const dispatch = useDispatch()

	function changeValue(name, value) {
		dispatch({ type:"changeMass", name: props.name, value: value })
	}

	return (
		<label>
			<span id={props.name}>{props.name}</span>
			<input onChange={(event) => changeValue(props.name, event.target.valueAsNumber)} type="number"></input>
			{unit}
		</label>
	)
}