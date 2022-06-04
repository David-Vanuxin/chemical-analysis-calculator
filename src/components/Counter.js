import { createStore } from 'redux'
import React, {useState} from "react"

import {counterReducer} from '../redux/rootReducer'

const store = createStore(counterReducer)

export default function Counter() {
  const [count, setCount] = useState(0)

  store.subscribe(() => {
    setCount( store.getState().value )
  })


  return (
    <>
      <p>{count}</p>
      <>
        <button onClick={() => store.dispatch({ type: 'counter/incremented' })}>+</button>
        <button onClick={() => store.dispatch({ type: 'counter/decremented' })}>-</button>
      </>
    </>
  )
}