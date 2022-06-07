import React from "react"
import {useDispatch} from 'react-redux'

export default function InputNumber(props) {
	let unit = "г"
	if (props.name === "CO2") unit = "л"

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

/*
const changeValue = (name, value) => {
	let data = JSON.parse(sessionStorage.data)// array with elements
	// also we take arg value, when contain number - mass of combustion product
	// name - name of combustion product
	let newData = [] // new array with elements
	for (let elem of data) {
		// find elem with taked name
		if (elem.name !== name) {
			newData.push(elem)// not taked name
			continue
		}

		// elem founded
		// replace value to value in args
		let newElem = {
			name : elem.name,
			value// replace here
		}

		newData.push(newElem)
	}

	sessionStorage.data = JSON.stringify(newData)
}*/