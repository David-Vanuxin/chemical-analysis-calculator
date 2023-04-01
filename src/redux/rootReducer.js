import {combineReducers} from "redux"

import {changeElementsListReducer} from "./changeElementsListReducer"
import {changeMatterMassReducer} from "./changeMassReducer"
import {changeAppType} from "./changeAppType"


export const rootReducer = combineReducers({
    elementsList: changeElementsListReducer,
    matter: changeMatterMassReducer,
    type: changeAppType
  }) 