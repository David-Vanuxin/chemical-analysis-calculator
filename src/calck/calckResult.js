import {calckWithValues} from "./calckWithValues"

export const calckResult = (state) => {
  // "Сложная" логика приложения
  console.log(state)


  if (state.type.type === "values") {
    const elements = calckWithValues(state.elementsList.elements)
    // Найти кислород по массе
    return JSON.stringify( elements )
  }

  if (state.type.type === "percents") {
    return JSON.stringify( state.elementsList.elements )
  }
}