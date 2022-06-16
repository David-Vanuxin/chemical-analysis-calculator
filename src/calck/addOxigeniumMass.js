export const addOxigeniumMass = (matterMass, elements) => {
	const result = []
	Object.assign(result, elements)

	let OxigeniumMass = matterMass
	elements.forEach(element => {
		OxigeniumMass -= element.mass
	})

	result.push({
		name: 'O',
		mass: OxigeniumMass
	})

	return result
}