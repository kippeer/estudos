console.log(Math.ceil(6.1))


// notacao ponto, é usado para acessar coisas no objeto , exemplo o objeto Math , o .ceil é usado para acessar o atributo dentro de Math


function obj(nome){
    this.nome = nome
}

const obj2 = new obj('cadeira')

console.log(obj2.nome)