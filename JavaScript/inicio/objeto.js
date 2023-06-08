const prod1 = {}

prod1.nome = 'Celular Ultra Mega'
prod1.preco = 5000


prod1['Desconto Legal'] = 0.40
prod1['Celular Ultra Mega'] = 'nome'

console.log(prod1)



const prod2 = {
    nome:'Camisa Polo',
    preco: 80,
    obj:{
        blabla:1,
        obj:{
            blabla:2
        }
    }

}


console.log(prod2)
console.log(prod2.obj)

console.log(prod2.obj.obj)

/// json , é um formato textual de objeto, é diferente de um objeto normal.

texto = '{"nome":"Camisa polo","preco":80 }'

console.log(texto)
