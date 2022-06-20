import {calckResult} from '../calck/calckResult'
import {addOxigeniumMass} from '../calck/addOxigeniumMass'
import {calckWithValues} from '../calck/calckWithValues'
import {findMolecularFormula} from '../calck/findMolecularFormula'

describe('Проверка на правильность нахождения масс элементов по значениям продуктов сгорания', () => {
    const elements = [
      {name: 'CO2', value: 44.8},
      {name: 'H2O', value: 54}
    ]
    /*expect(calckWithValues(elements)).toMatch('C')*/
    test('', () => {
      expect( calckWithValues(elements) ).toEqual([
        {name:'C', mass: 24},
        {name:'H', mass: 6},
      ])
    })
})


describe('Проверка на правильность нахождения масс элементов по значениям с азотом', () => {
    const elements = [
      {name: 'CO2', value: 89.6},
      {name: 'H2O', value: 90},
      {name: 'N2', value: 22.4}
    ]
    /*expect(calckWithValues(elements)).toMatch('C')*/
    test('', () => {
      expect( calckWithValues(elements) ).toEqual([
        // Умножаем всё на 2, так как сгорает 2 моля метиламина
        {name:'C', mass: 24 * 2},
        {name:'H', mass: 5 * 2},
        {name:'N', mass: 14 * 2},
      ])
    })
})



describe('Проверка на правильность вычисления массы кислорода', () => {
  const matterMass = 100
  let elements = [
    {name:'C', mass: 10},
    {name:'H', mass: 10},
  ]

  elements = addOxigeniumMass(matterMass, elements)

  expect(elements).toEqual([
    {name:'C', mass: 10},
    {name:'H', mass: 10},
    {name:'O', mass: 80}
  ])
})

describe('Проверка на правильность нахождения молекулярной формулы', () => {
  let elements = [
    {name:'C', mass: 24},
    {name:'H', mass: 6},
    {name:'O', mass: 16},
  ]

  elements = findMolecularFormula(elements)

  expect(elements).toEqual([
    {name:'C', count: 1},
    {name:'H', count: 3},
    {name:'O', count: 0.5}
  ])
})