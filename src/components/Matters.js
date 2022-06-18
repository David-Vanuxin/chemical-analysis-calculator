import { useNavigate } from "react-router-dom"
import InputSubstance from "./InputSubstance"

export const Matters = () =>  {
  let navigate = useNavigate();

  return (
    <div className="main">
      <h1>Калькулятор для химического анализа органических веществ</h1>
      <h2>Выберите элементы, входящие в состав искомого вещества (кроме углерода и водорода)</h2>
      
        <ul>
          <li><InputSubstance name="O"/></li>
          <li><InputSubstance name="N"/></li>
          <li><InputSubstance name="Cl"/></li>
          <li><InputSubstance name="Br"/></li>
        </ul>
      
      <div className="button-wrapper">
        <button onClick={() => navigate("/matter-mass")}>Назад</button>
        <button onClick={() => navigate("/percents-values")}>Далее</button>
      </div>
    </div>
  )
}