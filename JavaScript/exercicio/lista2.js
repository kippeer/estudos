// par 1 a 100

function acharPares () {
    for (let i = 1; i <= 100; i++){
        if (i%2==0) {
            console.log(i)
        }
    }
}

//27 enuciado confuso

//28

function paresImpares(vetorNumeros) {
    let qtdPares = 0
    let qtdImpares = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros[i] % 2 == 0) {
            qtdPares++
        } else {
            qtdImpares++
        }
    }
    console.log(`${qtdPares} números pares e ${qtdImpares} números ímpares.`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
paresImpares(vetor)


// Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
//deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
//deles estão fora do intervalo, escrevendo estas informações.

function contarV(vetor){
    let qtnFora = 0
    let qtnDentro = 0
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] >= 10 && vetor[i]<=20){
            qtnDentro++
        }
        else{
            qtnFora++
        }
    }
    console.log(`${qtnDentro} estão dentro ${qtnFora}estao fora do intervalo`)
}
vetor1 = [ 7, 8, 9, 10, 11, 12, 16, 17, 18, 19, 20, 21]
contarV(vetor1)

//Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
function maiorMenor (vetor) {
    let maior
    let menor
    for (let i = 0; i < vetor.length; i++){
        if (maior === undefined && menor === undefined){   // caso de vetores vazios e vetores unicos
            maior = vetor[i]
            menor = vetor[i]
        } else {
            if (vetor[i] > maior){
                maior = vetor[i]
            }
            if(vetor[i] < menor){
                menor = vetor[i]
            }
        }
    }
    return [maior, menor]
}

vetor2 =  [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

console.log(maiorMenor(vetor))

// Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
//e imprime a quantidade no console.

function negativos(array){
    let qtnNegativo = 0
        for(let i = 0; i < array.length;i ++){
            if (array[i]<0){
                qtnNegativo++
                

            }
        }
        return qtnNegativo + ' foram negativos'
        //console.log(`${qtnNegativo} foram negativos`)
    }
    


array = [-1,-2,-3,0,1,3,2]
console.log(negativos(array))

//Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros


function mediaV(media1){
    let somaMedia = 0
    for(let i = 0; i<media1.length;i++){
        somaMedia += media1[i]
    }
    return somaMedia/media1.length + ' foi a media'
}

media1 =[1,2,3,4,5,6,7,8]

console.log(mediaV(media1))

//Crie três vetores, chamados vetorInteiro, vetorString e vetorDouble. Cada um destes vetores deverá conter
//quatro valores, sendo o primeiro com valores inteiros, o segundo com strings e o terceiro com valores decimais.
//Declarados os vetores, utilize a função de união concat() de duas maneiras diferentes para unir os vetores, e
//mostre o resultado no console. Todos os elementos do vetor resultado deverão aparecer no console.

vetorInteiro = [1,2,3,4]
vetorString = ['.','eu','tu','ele']
vetorDouble = [0.1,0.2,0.3,0.4]

function concatenar (...args) {
    resultado = []
    for(let i = 0; i<arguments.length; i++){
        resultado = resultado.concat(arguments[i])
    }
    return resultado;
}

console.log(concatenar(vetorInteiro,vetorString,vetorDouble))

//) Construa uma função que receberá duas Strings de tamanhos variados e que retornará True ou False caso
//todos os caracteres (independentemente de ser maiúsculo ou minúsculo) estejam contidos em ambas palavras

function verificacaoDeString (string1, string2) {
    let estaContido = true;
    for (let i = 0; i < string1.length; i++) {
        let caractereString1 = string1.charAt(i).toLowerCase()
        for(let j = 0; j < string2.length; j++){
            let caractereString2 = string2.charAt(j).toLowerCase()
            if(caractereString1 == caractereString2) {
                estaContido = true
                break
            } else {
                estaContido = false
            }
        }
        if(!estaContido) {
            return estaContido
        }
    }
    return estaContido
 }

 console.log(verificacaoDeString('abc','cba'))
