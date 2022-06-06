import React from "react"
import { useNavigate } from "react-router-dom"

//----------------------------
import {useSelector} from "react-redux"
//----------------------------

export default function Home(props) {
  let navigate = useNavigate();

  //let data = useSelector(state => state.data)

	return(
		<>
			<h1>Калькулятор для химического анализа органических веществ</h1>
			<button onClick={() => navigate(`/combustion-products`)}>Старт</button>
			{/*<button onClick={() => console.log(data)}>data</button>*/}
		</>)
}