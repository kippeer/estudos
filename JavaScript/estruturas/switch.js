// estrutura de multiplas seleção


function imprimirR(nota){
    switch(Math.floor(nota)){
        // se for 10 ou 9 execute o de baixo ''console.log ,
        // se quiser que ele nao execute o de baixo : adicionar o break

        case 10:
        case 9:
            console.log('Quadro de honra')
        case 8: case 7:
            console.log('Aprovado')
            break
        default:
            console.log('Nota invalida')
    }
    console.log('Fim!!')
}

imprimirR(9)
imprimirR(10)
imprimirR(11)
imprimirR(1)
imprimirR(8)

