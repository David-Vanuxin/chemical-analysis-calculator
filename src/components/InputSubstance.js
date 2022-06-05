import changeElementsListReducer from "../redux/changeElementsListReducer"
import React, {useState} from "react"
import {createStore} from "redux"

let store = createStore(changeElementsListReducer)

export default function InputSubstance(props) {
	const [state, setState] = useState(false)
	return (<label>
			<input type="checkbox" onClick={() => changeElement(props.name)/*store.dispatch({ type:"addElement", name: props.name})*/}></input>
			<span id={props.name}>{props.name}</span>
		</label>
	)

	function changeElement(name) {
		if (state) {
			console.log("Remove elem", name)
			setState(false)
			store.dispatch({ type:"removeElement", name: props.name})
		} else {
			console.log("Added elem", name)
			setState(true)
			store.dispatch({ type:"addElement", name: props.name})
		}
	}
}