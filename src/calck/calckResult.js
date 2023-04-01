import {calckWithValues} from './calckWithValues'
import {addOxigeniumMass} from './addOxigeniumMass'
import {findMolecularFormula} from './findMolecularFormula'

export const calckResult = (state) => {
  if (state.type.type === 'values') {
    let elements = calckWithValues(state.elementsList.elements)
    // Найти кислород по массе
    if (state.matter.mass !== null) {
      elements = addOxigeniumMass(state.matter.mass, elements)
    }
    // Найти молекулярную формулу
    const formula = findMolecularFormula(elements)
    // Вынести это как метод toString()

    const getStringFormula = (formula, n=1) => {
      let result = ''
      formula.forEach(element => {
        let count = element.count * n
        if (count === 1) {
          result += `${element.name}`
        } else {
          result += `${element.name}<sub>${count}</sub>`
        }
      })

      if (result.match(/\./)) return;

      return result
    }

    for (let n = 1; n < 10; n++) {
      let matter = getStringFormula(formula, n)

      if (matter === undefined) continue

      return matter
    }
  }

  if (state.type.type === 'percents') {
    return JSON.stringify( state.elementsList.elements )
  }
}