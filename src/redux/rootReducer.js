import {combineReducers} from "redux"

import {changeElementsListReducer} from "./changeElementsListReducer"
import {changeMatterMassReducer} from "./changeMassReducer"


export const rootReducer = combineReducers({
    elementsList: changeElementsListReducer,
    matter: changeMatterMassReducer,
  }) 