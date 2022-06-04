import React from "react"
import { useNavigate } from "react-router-dom"

export default function QuantitativeValues(props) {
  let navigate = useNavigate();

  let data = JSON.parse(sessionStorage.data)
  let matters = []

  for (let elem of data) {
  	matters.push(<InputSubstance name={elem.name}/>)
  }


	return(
		<>
			<h1>Калькулятор для химического анализа органических веществ</h1>
			<h2>Введите количественные значения для продуктов сгорания</h2>
			<ul>
			{
				matters.map((el, index) => {
					return (<li key={index}>{el}</li>)
				})
			}
			</ul>
			<>
				<button onClick={() => navigate("/combustion-products")}>Назад</button>
				<button onClick={() => navigate("/result")}>Результат</button>
			</>
		</>)
}

function InputSubstance(props) {
	let unit = "г"
	if (props.name === "CO2") unit = "л"

	return (
		<label>
			<span id={props.name}>{props.name}</span>
			<input onChange={(event) => changeValue(props.name, event.target.valueAsNumber)} type="number"></input>
			{unit}
		</label>
	)
}

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
}