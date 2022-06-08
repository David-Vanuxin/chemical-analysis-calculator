import React from "react"
import { useNavigate } from "react-router-dom"
import {useDispatch} from "react-redux"

export const Home = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch()

  return(
    <>
      <h1>Калькулятор для химического анализа органических веществ</h1>
      <h2>
        По количественным характеристикам продуктов сгорания органического вещества определяет его молекулярную формулу
      </h2>
      <button onClick={() => {navigate(`/app-type`); dispatch({type:"restart"})} }>Старт</button>
    </>)
}