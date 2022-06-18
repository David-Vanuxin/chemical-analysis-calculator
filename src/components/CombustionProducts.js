import { useNavigate } from "react-router-dom"
import InputSubstance from "./InputSubstance"

export const CombustionProducts = () => {
  let navigate = useNavigate();
  return(
    <div className="main">
      <h1>Калькулятор для химического анализа органических веществ</h1>
      <h2>Выберите продукты сгорания искомого органического вещества</h2>
      <>
      <ul>
        <li><InputSubstance name="N2"/></li>
        <li><InputSubstance name="HCl"/></li>
        <li><InputSubstance name="HBr"/></li>
        <li><InputSubstance name="Na2CO3"/></li>
        <li><InputSubstance name="K2CO3"/></li>
      </ul>
      </>
      <div className="button-wrapper">
        <button onClick={() => navigate("/matter-mass")}>Назад</button>
        <button onClick={() => navigate("/quantitative-values")}>Далее</button>
      </div>
    </div>
  )
}