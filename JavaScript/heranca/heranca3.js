const pai = { nome: 'pedro',corCabelo: 'preto'}


const filha1 = Object.create(pai)

filha1.nome = 'ana'
console.log(filha1.corCabelo)

const filha2 = Object.create(pai,{nome:{value:'bia',writable: false,enumerable:true}})
filha2.nome = 'carla'
console.log(filha2.nome)


console.log(Object.keys(filha1))
console.log(Object.keys(filha2))