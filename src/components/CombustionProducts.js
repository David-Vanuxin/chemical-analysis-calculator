import React from "react"
import { useNavigate } from "react-router-dom"
import InputSubstance from "./InputSubstance"

export const CombustionProducts = () => {
  let navigate = useNavigate();
  return(
    <>
      <h1>Калькулятор для химического анализа органических веществ</h1>
      <h2>Выберите продукты сгорания искомого органического вещества</h2>
      <ul>
        <li><InputSubstance name="N2"/></li>
        <li><InputSubstance name="HCl"/></li>
        <li><InputSubstance name="HBr"/></li>
        <li><InputSubstance name="Na2CO3"/></li>
        <li><InputSubstance name="K2CO3"/></li>
      </ul>
      <>
        <button onClick={() => navigate("/app-type")}>Назад</button>
        <button onClick={() => navigate("/quantitative-values")}>Далее</button>
      </>
    </>
  )
}