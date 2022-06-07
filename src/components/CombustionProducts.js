import React from "react"
import { useNavigate } from "react-router-dom"
import InputSubstance from "./InputSubstance"

export const CombustionProducts = () => {
  let navigate = useNavigate();

  let matters = [
  	<InputSubstance name="N2"/>,
  	<InputSubstance name="HCl"/>,
  	<InputSubstance name="HBr"/>,
  	<InputSubstance name="Na2CO3"/>,
  	<InputSubstance name="K2CO3"/>,
  ]

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
				<button onClick={() => navigate("/matter-mass")}>Назад</button>
				<button onClick={() => navigate("/quantitative-values")}>Далее</button>
			</>
		</>
	)
}