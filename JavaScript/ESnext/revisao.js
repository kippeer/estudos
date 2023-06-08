// let e const

{
    var a = 2
    let b = 3
    console.log(b)
}

console.log(a)

/// templaye string


const produto = 'ipad'
console.log(`${produto} é caro!



pra caramba
!               2
`)

// destructuring

const [l, e , f , g, h ,...tras] = "string pra caramba"

console.log(l,e,tras)


const[x, , y] = [1,2,3]

console.log(x,y)

const {idade:i,nome} = {nome:'ana',idade:9}
console.log(i,nome)


//arrow function

const soma = (a,b) => a + b

console.log(soma(2,3))

///arrow function this

const lexico1 = () => console.log(this ===exports)
const lexico2 = lexico1.bind({})

lexico1()
lexico2()

/// parametros default ;valor padrao

function log(texto = 'node'){
    console.log(texto)
}

log()
log(null)
log(3)

// operador rest/spread

function total(...numeros){
    let total = 0
    numeros.forEach(n => total +=n)
    return total
}

console.log(total(2,3,4,5))



const obj = { a:1,b:2,c:3}

console.log(Object.values(obj))
console.log(Object.keys(obj))
console.log(Object.entries(obj))


/// melhorias

const nome2 = 'carla'
const pessoa = {
    nome2,
    ola(){
        return 'oi gente'
    }
}

console.log(pessoa.nome2,pessoa.ola())


//class

class Animal {}
class Cachorro extends Animal{
    falar(){
        return 'aloooooo'
    }
}

console.log(new Cachorro().falar())



//// spread

const funcionario = { nome: ' maria', salario: 123546}

const clone = {ativo: true, ...funcionario}

console.log(clone)

const grupoA = [ 'joao', 'pedro', 'gloria']
const grupoB= ['Maria', ...grupoA, 'Rafaela']

console.log(grupoA)
console.log(grupoB)


