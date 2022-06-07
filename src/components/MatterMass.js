import React from "react"
import { useNavigate } from "react-router-dom"
import {useDispatch} from "react-redux"

export const MatterMass = () =>  {
	const dispatch = useDispatch()
	let navigate = useNavigate();

	function changeValue(value) {
		dispatch({ type:"changeMatterMass", name: "matter", value: value })
	}

	return (
		<>
			<h1>Калькулятор для химического анализа органических веществ</h1>
			<h2>Введите массу сгоревшего органического вещества</h2>
			<>
				<label>
					<input onChange={(event) => changeValue(event.target.valueAsNumber)} type="number"></input>
					г
				</label>
			</>
			<>
				<button onClick={() => navigate("/")}>Назад</button>
				<button onClick={() => navigate(`/combustion-products`)}>Далее</button>
			</>
		</>
	)
}