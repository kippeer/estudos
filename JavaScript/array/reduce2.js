const alunos =[
    {nome: 'Pedro', nota:7.3, bolsista:false},
    {nome:'Ana', nota: 4 , bolsista: true},
    {nome:'Bia', nota: 9 , bolsista: false},
    {nome:'Cia', nota: 4 , bolsista: true},
]


///todos os alunos sao bolsistas?


const todosBolsista = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a=>a.bolsista).reduce(todosBolsista))

/// algum aluno é bolsista?

const algum = (resultado, bolsista ) => resultado || bolsista
console.log(alunos.map(b => b.bolsista).reduce(algum))