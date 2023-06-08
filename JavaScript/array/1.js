let aprovados = new Array('bia','carlos','ana')
console.log(aprovados)


aprovados = ['bia','calos','ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('albia')

console.log(aprovados.length)
console.log(aprovados)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8]===undefined)

console.log(aprovados)
aprovados.sort()
console.log(aprovados)


aprovados = ['Bia','Ana','Carlos']

aprovados.splice(1,2,'Elemento1','Elemento2')
console.log(aprovados)