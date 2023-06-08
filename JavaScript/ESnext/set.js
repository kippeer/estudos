// nao aceita repeticao/ nao idexada


const times = new Set()

times.add('Vasco')
times.add('Sao Paulo').add('Palmeiras').add('cruzeiro')
times.add('Vasco')

console.log(times)

console.log(times.size)
console.log(times.has('Vasco'))
console.log(times.has('vasco'))

const nomes = ['Ana','bia','clara']

const nomesSet = new Set(nomes)

console.log(nomesSet)