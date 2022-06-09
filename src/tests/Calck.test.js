import {calckResult} from "../calck/calckResult"

describe('Проверка на правильность вычислений со значениями продуктов реакции', () => {
	const state = {
		type: {
			type:"values"
		},
		elementsList: {
			elements:[
				{name: 'CO2', value: 22.4},
				{name: 'H2O', value: 18},
				{name: 'N2', value: 28},
				{name: 'HCl', value: 22.4},
				{name: 'Na2CO3', value: 106},
				{name: 'K2CO3', value: 138}
			]
		}
	}

	test('Проверка на возврат значения', () => {
		expect(calckResult(state)).toMatch('C')
		expect( JSON.parse( calckResult(state) ) ).toEqual([
			{name:'C', mass: 36},
			{name:'H', mass: 3},
			{name:'N', mass: 28},
			{name:'Cl', mass: 35.5},
			{name: 'Na', mass: 46},
			{name: 'K', mass: 78}
		])
	})
})

describe.skip('Проверка на правильность вычислений со значениями продуктов реакции', () => {
	
})