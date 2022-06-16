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
    let result1 = ''
    let result2 = ''
    let result3 = ''

    // Вынести это как метод toString()
    // Поле count переименовать как coefficient
    formula.forEach(element => {
      result1 += `${element.name}<sub>${element.count}</sub>`
      result2 += `${element.name}<sub>${element.count * 2}</sub>`
      result3 += `${element.name}<sub>${element.count * 3}</sub>`
    })
    return result1 + '<br>' + result2 + '<br>' + result3 
  }

  if (state.type.type === 'percents') {
    return JSON.stringify( state.elementsList.elements )
  }
}