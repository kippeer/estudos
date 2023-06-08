class Avo{
    constructor(sobrenome){
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo{
    constructor (sobrenome, profissao = 'Professor'){
        super(sobrenome)
        this.profissao = profissao
    }
}

class filho extends Pai{
    constructor (){
        super('Silva')
    }
}


const Filho = new filho

console.log(Filho)