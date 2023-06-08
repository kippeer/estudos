const pessoa = {

    nome:'ana',
    idade:20,
    endereco:{ 
        log:123,
        numero: 1235,

    }

}


// tire o nome e a idade do objeto pessoa
const { nome,idade } = pessoa

console.log(nome, idade)


// tire o nome e a idade do objeto pessoa, colocando suas respectivas variaveis
const {nome: n, idade:i } = pessoa

console.log(n,i)


const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

//acessando o log e numero do endereço dentro do objeto pessoa
const{endereco:{log, numero}} = pessoa
console.log(log, numero)


////////////////////////


const[a] = [10]
console.log(a)

//os arrays são setados pelos mesmo indices
const [n1, ,n3, ,n5, n6 = 0] = [10, 7, 8, 9]
console.log(n1,n3,n5,n6)


function rand({ min = 0, max = 1000}) {
    const valor1 = Math.random() * (max - min) + min
    return Math.floor(valor1)

}


const obj1 = {min : 40, max: 50}
console.log(rand(obj1))
console.log(rand({min:955}))



/////////////////////////// usando array



function rand1([min = 0, max= 1000]){
    if (min > max) [min,max ] = [max,min]
    const valor1 = Math.random() * (max - min) + min
    return Math.floor(valor1)
}


console.log(rand1([90,30]))

console.log(rand1([,10]))
console.log(rand1([,]))