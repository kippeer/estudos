/// tagged template
function tag (partes,...valores){
    console.log(partes)
    console.log(valores)
    return 'outra string'
}


const aluno = 'gui'
const situacao = 'aprovado'

console.log(tag `${aluno} esta ${situacao}.`)


function real ( partes2,...valores2){
    const resultado = []
    valores2.forEach((valor,indice)=>{
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes2[indice], valor)

    })
    return resultado.join('')
}


const preco = 30

const precoParcela = 11
console.log(real `1x de ${preco}ou 3x de ${precoParcela}`)

