import React from "react"
import { useNavigate } from "react-router-dom"
import { calckResult } from "../calck/calckResult"
import {useDispatch} from "react-redux"

export const Result = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch()
	return(
		<>
			<h1>Калькулятор для химического анализа органических веществ</h1>
			<h2>Результат</h2>
			<p>{calckResult()}</p>
			<>
				<button onClick={() => navigate("/quantitative-values")}>Назад</button>
				<button onClick={() => {navigate("/combustion-products"); dispatch({type:"restart"})}}>Ещё раз</button>
			</>
		</>)
}