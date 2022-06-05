import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import InputNumber from "./InputNumber"

import changeElementsListReducer from "../redux/changeElementsListReducer"
import {createStore} from "redux"

let store = createStore(changeElementsListReducer)

export default function QuantitativeValues(props) {
  let navigate = useNavigate();

  //let data = JSON.parse(sessionStorage.data)
  //let data = store.getState().data
  /*let matters = []*/

/*  for (let elem of data) {
  	matters.push(<InputNumber name={elem.name}/>)
  }*/

  const [data, setData] = useState(1)

  store.subscribe(() => {
  	setData(store.getState().data)
  })


	return(
		<>
			<h1>Калькулятор для химического анализа органических веществ</h1>
			<h2>Введите количественные значения для продуктов сгорания</h2>
			<button onClick={() => console.log(data)}>asd</button>
			<ul>
				{/*<li><InputNumber name={"asd"}/></li>*/}
{/*			{
				matters.map((el, index) => {
					return (<li key={index}>{el}</li>)
				})
			}*/}
{/*			{
				data.map((elem, index) => {
					//return (<li key={index}>{el}</li>)
					return (<li key={index}><InputNumber name={elem.name}/></li>)
				})
			}*/}
			</ul>
			<>
				<button onClick={() => navigate("/combustion-products")}>Назад</button>
				<button onClick={() => navigate("/result")}>Результат</button>
			</>
		</>)
}

/*function InputNumber(props) {
	let unit = "г"
	if (props.name === "CO2") unit = "л"

	return (
		<label>
			<span id={props.name}>{props.name}</span>
			<input onChange={(event) => changeValue(props.name, event.target.valueAsNumber)} type="number"></input>
			{unit}
		</label>
	)

	function changeValue(name, value) {

	}
}*/
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