//literal

const obj1={}
console.log(obj1)

//obj em js

console.log(typeof Object,typeof new Object)


const obj2 = new Object

console.log(obj2)


//funcao contructor

function produto(nome,preco,desc){
    this.nome = nome
    this.getprecoComDesconto = () =>{
        return preco *(1-desc)
    }
}


const p1 = new produto('caneta', 6.99, 0.1)
console.log(p1.getprecoComDesconto())


////func factory

function criarFuncionario(nome,salario,faltas){
    return{
        nome,
        salario,
        faltas,
        getSalario(){
            return (salario/30) * (30-faltas)
        }
    }
}

const f1 = criarFuncionario('joao',5000,4)

const f2 = criarFuncionario('maria',6000,6)

console.log(f1.getSalario(),f2.getSalario())



//////create  transformar json em objeto para manipular

const filha = Object.create(null)

filha.nome = 'ana'
console.log(filha)

const fromJSON = JSON.parse('{"info":"sou um json"}')

console.log(fromJSON.info)