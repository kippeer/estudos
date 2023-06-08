Array.prototype.forEach2 = function(callback){
    for (let i = o ; i < this.length;i++){
        callback(this[i],i,this)
    }
}



const aprovados = ['Ana','Bia','Carlos','joao']

aprovados.forEach(function (nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})