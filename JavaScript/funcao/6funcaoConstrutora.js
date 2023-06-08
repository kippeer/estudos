function Carro(velocidadeMaxima = 200, delta = 5){
    ///atributo privado
    let velocidadeAtual = 0

    //metodo publico
    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }
        else{
            velocidadeAtual = velocidadeMaxima
        }
    }
    //metodo publico
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }

}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())


const ferrari = new Carro(350, 20)

ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
//// acelerou 3 vezes

console.log(ferrari.getVelocidadeAtual())



///////////////////////////////////////////////////////////


function criarPessoa(){
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())
////////// passando os atributos nos parametros da funcao factory


function criarPessoa1(nome,sobrenome){
    return{
        nome,
        sobrenome

    }
}

console.log(criarPessoa1('fabio','aragao'))