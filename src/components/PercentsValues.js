import React from "react"
import { useNavigate } from "react-router-dom"

export const PercentsValues = () =>  {
  let navigate = useNavigate();

  return (
    <>
      <h1>Калькулятор для химического анализа органических веществ</h1>
      <h2>Выберите тип задачи: </h2>
      <>
        <p>Здесь ничего нет</p>
      </>
      <>
        <button onClick={() => navigate("/")}>Назад</button>
        <button onClick={() => navigate("/result")}>Результат</button>
      </>
    </>
  )
}