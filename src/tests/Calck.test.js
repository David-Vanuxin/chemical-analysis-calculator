import {calckResult} from '../calck/calckResult'
import {addOxigeniumMass} from '../calck/addOxigeniumMass'
import {calckWithValues} from '../calck/calckWithValues'
import {findMolecularFormula} from '../calck/findMolecularFormula'
 

describe('Проверка на правильность нахождения масс элементов по значениям продуктов реакции', () => {
    const elements = [
      {name: 'CO2', value: 22.4},
      {name: 'H2O', value: 18},
      {name: 'N2', value: 28},
      {name: 'HCl', value: 22.4},
      {name: 'Na2CO3', value: 106},
      {name: 'K2CO3', value: 138}
    ]
    /*expect(calckWithValues(elements)).toMatch('C')*/
    test('', () => {
      expect( calckWithValues(elements) ).toEqual([
        {name:'C', mass: 36},
        {name:'H', mass: 3},
        {name:'N', mass: 28},
        {name:'Cl', mass: 35.5},
        {name: 'Na', mass: 46},
        {name: 'K', mass: 78}
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