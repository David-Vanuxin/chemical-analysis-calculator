import React from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

export const AppType = () =>  {
  let navigate = useNavigate();

  const dispatch = useDispatch()

  return (
    <div className="main">
      <h1>Калькулятор для химического анализа органических веществ</h1>
      <h2>Выберите тип задачи: </h2>
      <div className="select-card-wrapper">
        <div className="select-card" onClick={() => {dispatch({type:"changeAppType", value:"percents"}); navigate(`/matter-mass`)}}>
          <h3>Проценты</h3>
          <hr />
          <p>Определение молекулярной формулы по массовым долям элементов</p>
        </div>
        <div className="select-card" onClick={() => {dispatch({type:"changeAppType", value:"values"}); navigate(`/matter-mass`)}}>
          <h3>Значения</h3>
          <hr />
          <p>Определение молекулярной формулы по продуктам сгорания</p>
        </div>
      </div>
      <div className="button-wrapper">
        <button onClick={() => navigate("/")}>Назад</button>
      </div>
    </div>
  )
}