import React from "react"
import { useNavigate } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"

export const MatterMass = () =>  {
  const dispatch = useDispatch()
  let navigate = useNavigate();

  function changeValue(value) {
    dispatch({ type:"changeMatterMass", mass: value })
  }

  const skip = (url) => {
    dispatch({ type:"deleteMatterMass" })
    navigate(url)
  }

  let appType = useSelector(state => state.type.type)

  let skipURL

  if (appType === 'values') {
    skipURL = `/combustion-products`
  }

  if (appType === 'percents') {
    skipURL = `/matters`
  }

  // Значение массы тоже должно оставаться в поле ввода при переходе по кнопке "Назад" со следующей страницы
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
        <button onClick={() => navigate("/app-type")}>Назад</button>
        <button onClick={() => navigate(skipURL)}>Далее</button>
        <button onClick={() => skip(skipURL)}>Пропустить</button>
      </>
    </>
  )
}