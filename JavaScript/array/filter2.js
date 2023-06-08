
/// criando o proprio filter

Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i= 0;i<this.length;i++){
        if(callback(this[i],i,this)){
            newArray.push(this[i])
        }
    }
    return newArray
}







const produtos = [
    {nome: 'Notebook', preco: 2500, fragil: true},
    {nome: 'Pudim', preco: 10, fragil: true}
]


console.log(produtos.filter2(function(p){return true

}))

console.log(produtos.filter2(function(p){return false

}))

console.log(produtos.filter2(function(p){
    return p.preco<100

}))