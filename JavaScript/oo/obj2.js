const produto = new Object

produto.nome = 'Cadeira'
produto['marca do produto'] = 'generica'

produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo:'a4',
    valor:999,
    proprietario:{
        nome:'raul',
        idade:111,
        endereco:{
            log:'rua abc1',
            numero:123,
        }

    }
}



carro.proprietario.endereco.numero = 1000
console.log(carro)

carro['proprietario']['endereco']['log'] = 'av gigante'
console.log(carro)

delete carro.proprietario.endereco
console.log(carro)