import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import * as Components from "./components"

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" caseSensitive={false} element={<Components.Home />} />
          <Route path="/combustion-products" caseSensitive={false} element={<Components.CombustionProducts />} />
          <Route path="/quantitative-values" caseSensitive={false} element={<Components.QuantitativeValues />} />
          <Route path="/result" caseSensitive={false} element={<Components.Result />} />
        </Routes>
      </div>
    </Router>
  );
}


// Не реализованные фичи:
// использовать хук useEffect() в <App />
// Вид химических формул (нужно заключить цифру в тег <sub>) (1)
// Переход к следующему элементу <input> по нажатию enter (2)

// (1)
/*let times = 0
document.getElementById("root").addEventListener("DOMSubtreeModified", event => {
  console.log(`DOMtree changed ${++times} times`)
  // Лучше искать по тегу <span>
  const pre_labs = document.getElementsByTagName("label")

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
  }
})*/

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