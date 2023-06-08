class Pessoa{
    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('joao')
p1.falar()


const pessoa2 = nome=>{
    return{
        falar:()=>console.log(`meu nome é ${nome}`)
    }
}

const p2 = pessoa2('pedro')
p2.falar()


//////////////////// transformando a classe em uma funçao factory


function Pessoa1(nome){
    this.nome = nome
    this.falar = function(){
        console.log(`meu nome é ${this.nome}`)
    }
}

const p3 = new Pessoa1('fabio')
p3.falar()