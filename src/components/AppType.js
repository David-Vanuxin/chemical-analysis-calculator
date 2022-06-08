import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"

export const AppType = () =>  {
  let navigate = useNavigate();

  const [appType, setAppType] = useState("values")

  const dispatch = useDispatch()

  let Next = (<button onClick={() => navigate(`/combustion-products`)}>Далее</button>)

  if (appType === "percents") Next = (<button onClick={() => navigate(`/matter-mass`)}>Далее</button>)


  let state = useSelector(state => state)
  console.log(state.type.type)

  return (
    <>
      <h1>Калькулятор для химического анализа органических веществ</h1>
      <h2>Выберите тип задачи: </h2>
      <>
        <label>
          <input checked={appType === "percents" ? true : false} onChange={() => {setAppType("percents"); dispatch({type:"changeAppType", value:"percents"})}} type="radio" name="appType"></input>
          Проценты
        </label>
        <label>
          <input checked={appType === "values" ? true : false} onChange={() => {setAppType("values"); dispatch({type:"changeAppType", value:"values"})}} type="radio" name="appType"></input>
          Значения
        </label>
      </>
      <>
        <button onClick={() => navigate("/")}>Назад</button>
        {Next}
      </>
    </>
  )
}