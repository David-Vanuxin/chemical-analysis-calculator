import React from "react"
import { useNavigate } from "react-router-dom"
import InputNumber from "./InputNumber"

//import changeElementsListReducer from "../redux/changeElementsListReducer"
//import {createStore} from "redux"

//let store = createStore(changeElementsListReducer)

export default function QuantitativeValues(props) {
  let navigate = useNavigate();

/*  const [data, setData] = useState([])
  store.subscribe(() => {
  		setData(store.getState().data)
  })*/

	return(
		<>
			<h1>Калькулятор для химического анализа органических веществ</h1>
			<h2>Введите количественные значения для продуктов сгорания</h2>
			<ul>
{/*			{
				data.map((elem, index) => {
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