import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  /*Link*/
} from "react-router-dom";

import Home from "./components/Home"
import CombustionProducts from "./components/CombustionProducts"
import QuantitativeValues from "./components/QuantitativeValues"
import Result from "./components/Result"

export default function App() {
  return (
    <Router>
      <div>
{/*        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/counter">Counter</Link></li>
            <li><Link to="/echo">Echo</Link></li>
          </ul>
        </nav>*/}
        <Routes>
          <Route path="/" caseSensitive={false} element={<Home />} />
          <Route path="/combustion-products" caseSensitive={false} element={<CombustionProducts />} />
          <Route path="/quantitative-values" caseSensitive={false} element={<QuantitativeValues />} />
          <Route path="/result" caseSensitive={false} element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
}


// Не реализованные фичи:
// Вид химических формул (нужно заключить цифру в тег <sub>) (1)
// Переход к следующему элементу <input> по нажатию enter (2)

// (1)
let times = 0
document.getElementById("root").addEventListener("DOMSubtreeModified", event => {
  console.log(`DOMtree changed ${++times} times`)
  // Лучше искать по тегу <span>
/*  const pre_labs = document.getElementsByTagName("label")

  if (pre_labs.length == 0) return

  const labels = []

  for(let i = 0; i <= (pre_labs.length / 2) + 1; ++i) labels.push(pre_labs[i])

  for (let n = 0; n < labels.length; ++n) {

    if (typeof labels[n] === "undefined") continue

    let span = labels[n].getElementsByTagName("span")[0]

    if (span.innerHTML.match(/<sub>/) != null) continue

    if (span.innerHTML.match(/\d+/) == null) continue

    let result = []
    for (let char of span.innerText) {
      if ( !isNaN( Number(char) ) ) {
        result.push(`<sub>${char}</sub>`)
      } else {
        result.push(char)
      }
    }

    result = result.join("")
    console.log(result)
    span.innerHTML = result
  }*/
})

// (2)
/*document.getElementById("root").addEventListener("DOMSubtreeModified", event => {
  let elems = document.getElementsByTagName("input")

  for (let n = 0; n < elems.length; ++n) {
    elems[n].addEventListener("keypress", (event) => {
      if (event.keyCode == 13) {
        elems[n].blur()
        if (elems[n + 1] !== "undefined") {
          elems[n + 1].focus()
          console.log("asd")
        }
      }
    })
  }
})*/