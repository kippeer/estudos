function fun1(){

}


/// podemos armazenar uma função em uma variavel

const fun2 = function(){

}

//podemos armazenar dentro de um array

const array = [function(a,b){return a + b}, fun1, fun2]


console.log(array[0](2,3))

///armazenar em um obj

const obj = {}

obj.falar = function(){return 'opaS'}
console.log(obj.falar())


////passar funcao como parametro

function run(fun){
    fun()
}

run(function(){console.log('executando')})


//uma função que retorna uma outra


function soma(a,b){
    return function(c){
        console.log(a+b+c)
    }
}

soma(2,3)(4)