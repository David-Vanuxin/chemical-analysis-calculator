export function calckResult(data) {
  // "Сложная" логика приложения

  // Вещество по элементам
  let matter = []// [{"c":12}, {"h":23}, ]]

  for (let product of data) {
    if (product.value === null) {
      return `Нажмите кнопку "Назад" и заполните все поля`
    }

    let massElement, mass
    switch(product.name) {
      case "CO2":
        // Вычисление массы углерода
        mass = (product.value / 22.4) * 44 // граммы
        massElement = calckElemMass(mass, 44, 12)       
        matter.push({
          name:"C",
          mass: massElement
        })
        break

      case "H2O":
        // Вычисление массы водорода (в HCl есть массы и хлора и водорода)
        massElement = calckElemMass(product.value, 18, 2) // H2O - 2 водорода, поэтому 1 * 2 = 2      
        matter.push({
          name:"H",
          mass: massElement
        })
        break

      case "N2":
        // Вычисление массы азота
        massElement = calckElemMass(product.value, 28, 28)      
        matter.push({
          name:"N",
          mass: massElement
        })
        break

      case "HCl":// тоже в литрах
        // Вычисление массы хлора
        mass = (product.value / 22.4) * 36.5 // граммы
        massElement = calckElemMass(product.value, 36.5, 35.5)      
        matter.push({
          name:"Cl",
          mass: massElement
        })

        // Вычисление массы водорода и добавление в её массив
        massElement = calckElemMass(product.value, 36.5, 1)     

        for (let elem of matter) {
          if (elem.name !== "H") continue

          elem.mass += massElement
        }

        break

      case "HBr":
        // Вычисление массы брома
        massElement = calckElemMass(product.value, 81, 80)      
        matter.push({
          name:"Br",
          mass: massElement
        })

        // Вычисление массы водорода и добавление в её массив
        massElement = calckElemMass(product.value, 81, 1)     

        for (let elem of matter) {
          if (elem.name !== "H") continue

          elem.mass += massElement
        }
        break

      case "Na2CO3":
        // Вычисление массы натрия 
        massElement = calckElemMass(product.value, 106, 46)     
        matter.push({
          name:"Na",
          mass: massElement
        })

        // Вычисление массы углерода и добавление в её массив
        massElement = calckElemMass(product.value, 106, 12)     

        for (let elem of matter) {
          if (elem.name !== "C") continue

          elem.mass += massElement
        }
        break

      case "K2CO3":
        // Вычисление массы калия 
        massElement = calckElemMass(product.value, 138, 78)   
        matter.push({
          name:"K",
          mass: massElement
        })

        // Вычисление массы углерода и добавление в её массив
        massElement = calckElemMass(product.value, 138, 12)     

        for (let elem of matter) {
          if (elem.name !== "C") continue

          elem.mass += massElement
        }
        break

      case "matter":
        matter.push({
          name: "matterMass",
          mass: product.value
        })
        break

      default:
        console.warn("Продукт не добавлен: ", product.name)
    }
  }


  return JSON.stringify(matter)
}
// molecularMassMatter - молекулярная масса вещества
// massElement - относительная атомная масса элемента, умноженная на коэфициент после него (для водорода в H2O: 1 * 2 = 2)
// massMatter - масса вещества

const calckElemMass = (massMatter, molecularMassMatter, massElement) => {
  return (massElement * massMatter) / molecularMassMatter
}