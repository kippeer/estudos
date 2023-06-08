function notaMedia(nota){
    if(nota>7){
        console.log('aprovado com '+ nota)
    }
}

notaMedia(5)
notaMedia(8)

function valorV(valor){
    if (valor){
        console.log('é verdade '+ valor)
    }
}

valorV()
valorV(null)
valorV(undefined)
valorV(NaN)
valorV('')
valorV(0)
valorV(-1)
valorV(' ')
valorV([])
valorV({})

//////////////

function test1(num){
    if(num>7)
    console.log(num)
    console.log('Final')
}


test1(1)
test1(8)

function imprimirR(nota){
    if(nota>=7){
        console.log('Aprovado')
    }
    else{
        console.log('Reprovado')
    }
}

imprimirR(6)
imprimirR(7)
imprimirR(8)


/////////////

