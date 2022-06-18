import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'

export const PercentsValues = () =>  {
  let navigate = useNavigate();
  let elements = useSelector((state) => state.elementsList.elements)

  const dispatch = useDispatch() 

  const changePercent = (name, value) =>  {
    dispatch({
      type:"changeMass",// не нужно добавить отдельный редьюсер для этого события - он уже есть
      // только в калькуляторе нужно брать значения как проценты, если type === "percent" 
      name,
      value
    })
  }

  return (
    <div className="main">
      <h1>Калькулятор для химического анализа органических веществ</h1>
      <h2>Введите значения процентного содержания каждого вещества</h2>
      <>
        <ul>
        {
          elements.map((elem, index) => {
            if (elem.name === "CO2") elem.name = "C"
            if (elem.name === "H2O") elem.name = "H"
            return (
              <li key={index}>
                <label>{elem.name}<input type="number" onChange={(event) => changePercent(elem.name, event.target.valueAsNumber)}></input>%</label>
              </li>
            )
          })
        }
        </ul>
      </>
      <div className="button-wrapper">
        <button onClick={() => navigate("/matters")}>Назад</button>
        <button onClick={() => navigate("/result")}>Результат</button>
      </div>
    </div>
  )
}