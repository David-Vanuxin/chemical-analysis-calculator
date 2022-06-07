import {createStore} from "redux"
import {changeElementsListReducer} from "./changeElementsListReducer"

export const store = createStore(changeElementsListReducer)