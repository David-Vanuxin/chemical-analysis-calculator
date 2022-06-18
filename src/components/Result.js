import {useRef, useEffect} from "react"
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

  const resultRef = useRef()

  useEffect(() => {
    resultRef.current.innerHTML = calckResult(state)
  })

  return(
    <div className="main">
      <h1>Калькулятор для химического анализа органических веществ</h1>
      <h2>Результат</h2>
      <p>
        Возможные молекулярные формулы:<br />
        <span ref={resultRef}></span>
      </p>
      <div className="button-wrapper">
        { Back }
        <button onClick={() => {navigate("/app-type"); dispatch({type:"restart"})}}>Ещё раз</button>
      </div>
    </div>)
}