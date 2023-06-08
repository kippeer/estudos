const carrinho = [
    '{"nome": "Borracha" , "preco": 3.45 }',
    '{"nome":"Caderno","preco": 13.90 }',
    '{"nome":"Caneta","preco": 2.10 }'
]


const paraObjeto = json => JSON.parse(json)


const apenaspreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenaspreco)

console.log(resultado)