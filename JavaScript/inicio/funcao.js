console.log(typeof Object);

class Produto {};
console.log(typeof Produto);



function imprimirSoma(a,b){
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2)


/// função arrow

const soma = ( a, b) => {
    return a + b
}

console.log(soma(2,3))

//retorno implicito
const subtracao = (a, b) => a - b

console.log (subtracao(3,2))

//resumindo ainda mais
const imprimir2 = a => console.log(a)

imprimir2('legal')