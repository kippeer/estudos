const produtos = [
    {nome: 'Notebook', preco: 2500, fragil: true},
    {nome: 'Pudim', preco: 10, fragil: true}
]


console.log(produtos.filter(function(p){return true

}))

console.log(produtos.filter(function(p){return false

}))

console.log(produtos.filter(function(p){
    return p.preco<100

}))