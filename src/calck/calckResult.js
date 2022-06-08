import {calckWithValues} from "./calckWithValues"

export function calckResult(state) {
  // "Сложная" логика приложения

  if (state.type.type === "values") {
    return JSON.stringify( calckWithValues(state.elementsList.elements) )
  }

  if (state.type.type === "percents") {
    return "Вычисления с процентами ещё не добавлены"
  }
}