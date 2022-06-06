import React, {useState} from "react"
import {useDispatch, useSelector} from 'react-redux'

export default function InputSubstance(props) {

	const [state, setState] = useState(false)
  const dispatch = useDispatch()

  try {
	  let data = useSelector(state => state.data)

	  for (let elem of data) {
	  	console.log(elem.name, props.name)
	  	if (elem.name === props.name && !state) {
	  		setState(true)
	  	}
	  }

	  console.log("Success")
  } catch {
  	console.log("Error")
  }

	return (
		<label>
			<input type="checkbox" checked={state} onChange={() => changeElement(props.name)}></input>
			<span id={props.name}>{props.name}</span>
		</label>
	)



	function changeElement(name) {
		if (state) {
			setState(false)
			dispatch({ type:"removeElement", name: props.name})
		} else {
			setState(true)
			dispatch({ type:"addElement", name: props.name})
		}
	}
}