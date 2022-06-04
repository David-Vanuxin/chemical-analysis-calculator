import React from "react"
import { useNavigate } from "react-router-dom"

export default function Home(props) {
  let navigate = useNavigate();

	return(
		<>
			<h1>Калькулятор для химического анализа органических веществ</h1>
			<button onClick={() => navigate(`/combustion-products`)}>Старт</button>
		</>)
}