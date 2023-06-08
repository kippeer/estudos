const soma = function (x,y){
    return x + y
}

const imprimirR = function ( a, b, operacao = soma){
    console.log(operacao(a,b))
    
}


imprimirR(3,4)
imprimirR(3,4,function(x,y){return x-y})

imprimirR(3,4,(x,y)=>x*y)