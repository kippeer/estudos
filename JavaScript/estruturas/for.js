const notas = [6.7,4.5,5.5,8.8,9.9]

for (i in notas){
    console.log(i, notas[i])
    
}

const pessoa = {
    nome:'ana',
    sobrenome:'silva',
    idade:29
}

for (atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}