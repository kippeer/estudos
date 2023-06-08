const fabricantes = ['Mercedes','Audi','Ford']

function imprimir (nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

//imprir os elementos do array
fabricantes.forEach(imprimir)

fabricantes.forEach(function(a){
    console.log(a)
})

// ou usando arrow

fabricantes.forEach(fabricante=>console.log(fabricante))



////////////////

const notas = [7.7,6.5,8.6,8.8,9.9,5.5,6.6]


let notasBaixas = []
for(let i in notas){
    if (notas[i]<7) {
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)


/// com callback

const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)

// com arrow

const notasBaixas3 = notas.filter(nota => nota < 7)

console.log(notasBaixas3)

///////////////////


