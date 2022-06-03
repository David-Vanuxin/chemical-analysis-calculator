import { createStore } from 'redux'
import React, {useState} from "react"

function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    default:
      return state
  }
}

let store = createStore(counterReducer)

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