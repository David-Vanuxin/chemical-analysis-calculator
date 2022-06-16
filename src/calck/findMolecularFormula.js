export const findMolecularFormula = elements => {
  const indices = []
  elements.forEach((element, index) => { 
    switch (element.name) {
      // Нужно переписать в классы
      case 'C':
        indices.push({
          name: element.name,
          mass: element.mass / 12
        })
        break
      case 'H':
        indices.push(element)
        break
      case 'Cl':
        indices.push({
          name: element.name,
          mass: element.mass / 35.5
        })
        break
      case 'N':
        indices.push({
          name: element.name,
          mass: element.mass / 14
        })
        break
      case 'O':
        indices.push({
          name: element.name,
          mass: element.mass / 16
        })
        break
      case 'Na':
        indices.push({
          name: element.name,
          mass: element.mass / 23
        })
        break
      case 'K':
        indices.push({
          name: element.name,
          mass: element.mass / 39
        })
        break
      case 'Br':
        indices.push({
          name: element.name,
          mass: element.mass / 80
        })
        break
      default: throw new Error(`Not such element: ${element.name}`)
    }
  })

  const formula = []
  const rootElem = {name:"root", mass:1}// Элемент, на количество вещества которого делим все остальные элементы

  indices.forEach((element, index) => {
    if (index === 0) {
      formula.push({name: element.name, count: 1})
      rootElem.mass = element.mass
      return
    }

    formula.push({name: element.name, count: element.mass / rootElem.mass})
  })

  return formula
}