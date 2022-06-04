import { createStore } from 'redux'
import React, {useState} from "react"

import {echoReducer} from '../redux/rootReducer'

const store = createStore(echoReducer)

export default function Echo() {
/*  const [count, setCount] = useState(0)

  store.subscribe(() => {
    setCount( store.getState().value )
  })*/

  const [text, setText] = useState("Введите текст")

  store.subscribe(() => {
    setText( store.getState().text )
  })

  return (
    <>
      <h1>{text}</h1>
      <input onChange={(event) => { store.dispatch({ type: "change", text: event.target.value }); console.log(event.target.value) } }></input>
{/*      <p>{count}</p>
      <>
        <button onClick={() => store.dispatch({ type: 'counter/incremented' })}>+</button>
        <button onClick={() => store.dispatch({ type: 'counter/decremented' })}>-</button>
      </>*/}
    </>
  )
}