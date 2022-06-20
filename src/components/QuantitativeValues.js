import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'

export const QuantitativeValues = () => {
  let navigate = useNavigate();

  let elements = useSelector((state) => state.elementsList.elements)
  console.log(elements)

  return(
    <div className="main">
      <h1>Калькулятор для химического анализа органических веществ</h1>
      <h2>Введите количественные значения для продуктов сгорания</h2>
      <ul>
      {
        elements.map((elem, index) => {
          return (<li key={index}><InputNumber name={elem.name}/></li>)
        })
      }
      </ul>
      <div className="button-wrapper">
        <button onClick={() => navigate("/combustion-products")}>Назад</button>
        <button onClick={() => navigate("/result")}>Результат</button>
      </div>
    </div>)
}

const InputNumber = (props) => {
  let unit = "г"
  if (props.name === "CO2" || props.name === "HCl" || props.name === "N2") unit = "л"

  const dispatch = useDispatch()

  function changeValue(name, value) {
    dispatch({ type:"changeMass", name: props.name, value: value })
  }

  return (
    <label>
      <span id={props.name}>{props.name}</span>
      <input onChange={(event) => changeValue(props.name, event.target.valueAsNumber)} type="number"></input>
      {unit}
    </label>
  )
}