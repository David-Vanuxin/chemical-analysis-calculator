import React from "react"
import { useNavigate } from "react-router-dom"
import { calckResult } from "../calck/calckResult"
import {useDispatch, useSelector} from "react-redux"

export const Result = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch()

  let data = useSelector(state => state.data)

	return(
		<>
			<h1>Калькулятор для химического анализа органических веществ</h1>
			<h2>Результат</h2>
			<p>{calckResult(data)}</p>
			<>
				<button onClick={() => navigate("/quantitative-values")}>Назад</button>
				<button onClick={() => {navigate("/matter-mass"); dispatch({type:"restart"})}}>Ещё раз</button>
			</>
		</>)
}