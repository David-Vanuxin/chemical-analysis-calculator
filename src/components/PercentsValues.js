import React from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'

export const PercentsValues = () =>  {
  let navigate = useNavigate();
  let elements = useSelector((state) => state.elementsList.elements)

  const dispatch = useDispatch() 

  const changePercent = (name, value) =>  {
    dispatch({
      type:"changePercentValue",// Нужно добавить редьюсер для этого события
      // также в калькуляторе нужно брать значения из массива процентов, если type === "percent" 
      name,
      value
    })
  }

  return (
    <>
      <h1>Калькулятор для химического анализа органических веществ</h1>
      <h2>Введите значения процентного содержания каждого вещества</h2>
      <>
        <ul>
        {
          elements.map((elem, index) => {
            return (
              <li key={index}>
                <label>{elem.name}<input type="number" onChange={(event) => changePercent(elem.name, event.target.valueAsNumber)}></input>%</label>
              </li>
            )
          })
        }
        </ul>
      </>
      <>
        <button onClick={() => navigate("/")}>Назад</button>
        <button onClick={() => navigate("/result")}>Результат</button>
      </>
    </>
  )
}