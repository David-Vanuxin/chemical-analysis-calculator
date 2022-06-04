import React from "react"
import { useNavigate } from "react-router-dom"

export default function CombustionProducts(props) {
  let navigate = useNavigate();

  let matters = [
  	<InputSubstance name="N2"/>,
  	<InputSubstance name="HCl"/>,
  	<InputSubstance name="HBr"/>,
  	<InputSubstance name="Na2CO3"/>,
  	<InputSubstance name="K2CO3"/>,
  ]

  let data = [
  	{name:"CO2", value:null},
  	{name:"H2O", value:null}
  ]

  sessionStorage.data = JSON.stringify(data)

	return(
		<>
			<h1>Калькулятор для химического анализа органических веществ</h1>
			<h2>Выберите продукты сгорания искомого органического вещества</h2>
			<ul>
			{
				matters.map((el, index) => {
					return (<li key={index}>{el}</li>)
				})
			}
			</ul>
			<>
				<button onClick={() => navigate("/")}>Назад</button>
				<button onClick={() => navigate("/quantitative-values")}>Далее</button>
			</>
		</>
	)
}

function InputSubstance(props) {
	return (<label>
			<input type="checkbox" onClick={() => addElement(props.name)}></input>
			<span id={props.name}>{props.name}</span>
		</label>
	)
}

const addElement = (name) => {
	let data = JSON.parse(sessionStorage.getItem("data"))

	data.push({
		name,
		value:null
	})

	sessionStorage.data = JSON.stringify(data)
}