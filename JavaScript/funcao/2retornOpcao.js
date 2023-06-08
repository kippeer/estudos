function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`valor acima do permitido ${area} m2.`)
    } else {
        return area
    }
}

console.log(area(2,2))
console.log(area(2,))
console.log(area())
console.log(area(2,2,5,6,1))
console.log(area(5,5))



/////////////// parametro variaveis

function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma())
console.log(soma(1,2,3,4,5,6,7,67))
console.log(soma(1,'asdasd',2,3,4,5,6))


///////// parametro padrao

function soma1(a, b, c){
    a = a||1
    b = b||1
    c = c||1
    return a + b + c
}

console.log(soma1())
console.log(soma1(3),soma1(1,2),soma1(1,2,3))
console.log(soma1(0,0,0))


/// 2

function soma2(a, b, c){
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log(soma2())
console.log(soma2(3),soma2(1,2),soma2(1,2,3))
console.log(soma2(0,0,0))

/// 3

function soma3(a=1,b=1,c=1){
    return a + b + c
}

console.log(soma3(10,10,10))