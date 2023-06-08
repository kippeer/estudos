const alunos =[
    {nome: 'Pedro', nota:7.3, bolsista:false},
    {nome:'Ana', nota: 4 , bolsita:true},
    {nome:'Bia', nota: 9 , bolsita:true},
    {nome:'Cia', nota: 4 , bolsita:true},
]

console.log(alunos.map(a=>a.nota))

const resultado = alunos.map(a=>a.nota).reduce(function(acumulador,atual){
    console.log(acumulador,atual)
    return acumulador + atual
})


console.log(resultado)
