
/// o metodo map por tras como funciona

Array.prototype.map2 = function(callback){
    const newArray = []
    for (let i = 0; i < this.length;i++){
        newArray.push(callback(this[i],i,this))
    }
    return newArray

}

///// 

const carrinho = [
    '{"nome": "Borracha" , "preco": 3.45 }',
    '{"nome":"Caderno","preco": 13.90 }',
    '{"nome":"Caneta","preco": 2.10 }'
]


const paraObjeto = json => JSON.parse(json)


const apenaspreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenaspreco)

console.log(resultado)