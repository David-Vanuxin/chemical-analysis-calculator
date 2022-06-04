import React from "react"
import { useNavigate } from "react-router-dom"
import { calckResult } from "../calck/calckResult"

export default function Result(props) {
  let navigate = useNavigate();

	return(
		<>
			<h1>Калькулятор для химического анализа органических веществ</h1>
			<h2>Результат</h2>
			<p>{calckResult()}</p>
			<>
				<button onClick={() => navigate("/quantitative-values")}>Назад</button>
				<button onClick={() => navigate("/combustion-products")}>Ещё раз</button>
			</>
		</>)
}