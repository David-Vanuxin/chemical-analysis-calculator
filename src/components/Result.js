import React from "react"
import { useNavigate } from "react-router-dom"
import { calckResult } from "../calck/calckResult"
import {useDispatch, useSelector} from "react-redux"

export const Result = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch()

  let state = useSelector(state => state)

  let Back = "Определите тип задачи"

  if (state.type.type === "percents") {
    Back = (<button onClick={() => navigate("/percents-values")}>Назад</button>)
  }

  if (state.type.type === "values") {
    Back = (<button onClick={() => navigate("/quantitative-values")}>Назад</button>)
  }  

  return(
    <>
      <h1>Калькулятор для химического анализа органических веществ</h1>
      <h2>Результат</h2>
      <p>{calckResult(state)}</p>
      <>
        { Back }
        <button onClick={() => {navigate("/app-type"); dispatch({type:"restart"})}}>Ещё раз</button>
      </>
    </>)
}