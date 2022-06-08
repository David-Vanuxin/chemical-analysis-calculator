import React, {useState} from "react"
import { useNavigate } from "react-router-dom"
import {useDispatch, useSelector} from "react-redux"

export const AppType = () =>  {
  let navigate = useNavigate();

  const [appType, setAppType] = useState("values")

  const dispatch = useDispatch()

  let Next = (<button onClick={() => navigate(`/matter-mass`)}>Далее</button>)

  if (appType === "percents") Next = (<button onClick={() => navigate(`/matters`)}>Далее</button>)


  let state = useSelector(state => state)
  console.log(state)

  return (
    <>
      <h1>Калькулятор для химического анализа органических веществ</h1>
      <h2>Выберите тип задачи: </h2>
      <>
        <label>
          <input onChange={() => {setAppType("percents"); dispatch({"type":"percents"})}} type="radio" name="appType"></input>
          Проценты
        </label>
        <label>
          <input onChange={() => {setAppType("values"); dispatch({"type":"values"})}} defaultChecked type="radio" name="appType"></input>
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