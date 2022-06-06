import React from "react"
import { useNavigate } from "react-router-dom"
import {useSelector, /*useDispatch*/} from "react-redux"

export default function Home(props) {
  let navigate = useNavigate();
  //const dispatch = useDispatch()

	try {
		let data = useSelector(state => state.data)
		console.warn("Данные должны быть стёрты перед рестартом ")
	} catch {
		console.log("Error")
	}

	return(
		<>
			<h1>Калькулятор для химического анализа органических веществ</h1>
			<button onClick={() => navigate(`/combustion-products`)}>Старт</button>
		</>)
}