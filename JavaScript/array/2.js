const pilotos = ['Vettel','Alonso','Rai','Massa']
pilotos.pop()
console.log(pilotos)

pilotos.push('Ananias')
console.log(pilotos)

pilotos.shift()
console.log(pilotos)

pilotos.unshift('Zulu')
console.log(pilotos)


pilotos.splice(2, 0,'Botas','Massa')
console.log(pilotos)


pilotos.splice(3,1)
console.log(pilotos)


const algunsPilotos = pilotos.slice(1,4)
console.log(algunsPilotos)