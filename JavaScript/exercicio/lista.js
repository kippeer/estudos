function resultado (a,b){
    
    console.log(a+b,a-b,a*b,a/b)
    
}

resultado(1,3)


///////////////////////


function triangulo(a,b,c){
    if(a==b && b==c ){
        return 'equilatero'
    }
    else if (a==b || b==c || c==a){
        return 'isosceles'
    }
    else{
        return 'escaleno'
    }

}

console.log(triangulo(2,1,3))
console.log(triangulo(2,2,2))
console.log(triangulo(1,1,2))

////////////////

function elevado(base,expoente){
    return base ** expoente
}

console.log(elevado(2,2))


////////////

function divisao(dividendo,divisor){
    
    console.log(`resultado:` + Math.floor(dividendo/divisor))
    console.log(`resto:${dividendo%divisor}`)
    
}

divisao(8,8)

///////////////

function inteiro(a){
    
    return `R$${a.toFixed(2).toString().replace(".", ",")}`
    
}

console.log(inteiro(0.30000000000000004))


//////////////
function aplicacao(capital, taxa, tempo){
    return capital + (capital * taxa * tempo)
}
function aplicacao2(capital, taxa, tempo){
    return capital * (1 + taxa) ** tempo
}

console.log(aplicacao(100, 10/100, 2));
console.log(aplicacao2(100, 10/100, 2));



///////////
function bhaskara (ax2, bx, c) {
    let resultados = []
    let delta = (bx ** 2) - (4 * ax2 * c)
    if(delta < 0){
        return "Delta é negativo"
    } 
    let x1 = (-bx + Math.sqrt(delta))/(2*ax2)
    let x2 = (-bx - Math.sqrt(delta))/(2*ax2)
    resultados.push(x1)
    resultados.push(x2)
    return resultados   
}

console.log(bhaskara(1, 3, 2))
console.log(bhaskara(3, 1, 2))
////////////////////////


let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
 
 
function avaliaPontuacoes (stringPontuacoes) {
    let pontuacoes = stringPontuacoes.split(", ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for (let i = 1; i < pontuacoes.length; i++) {
        if(pontuacoes[i] > maiorPontuacao) {
            maiorPontuacao = pontuacoes[i]
            qtdQuebraDeRecords++
        }else if (pontuacoes[i] < menorPontuacao) {
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorJogo]
}
 
console.log(avaliaPontuacoes(stringPontuacoes))

////////////////////// Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
//ou false.

function verificar(a){
    if (a%3==0){
        return true
    }
    else{
        return false
    }
     
           
}

console.log(verificar(10))
////////


function anobisexto(a){
    if (a<=0){
        return false
    }
    else if (a%4==0){
        return true
    }
    else if (a%100==0){
        return false
    }
    else if(a%400==0){
        return true
    }
    else{
        return false
    }
}

console.log(anobisexto(401))


///////////////////////////////// fatorial

function fatorial (numero) {
    if(numero == 0){  // até o numero chegar a 0
        return 1
    } else {
        return numero * fatorial(numero - 1)// chamando a propria funçao em loop -1,chamando regressivamente 9,8,7
    }
}

console.log(fatorial(10))

////////////// Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao 
//dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

function diaUtil(a){
    switch(a){
        case 1:
            return 'Fim de semana'
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return 'Dia util'
        case 7:
            return 'fim de semana'
        default:
            return 'Dia invalido'    
    
    }
}

console.log(diaUtil(2))

////) Crie uma estrutura condicional switch que receba uma string com o nome de uma fruta e que possua três
//casos: Caso maçã, retorne no console: “Não vendemos esta fruta aqui”. Caso kiwi, retorne: “Estamos com
//escassez de kiwis”. Caso melancia, retorne: “Aqui está, são 3 reais o quilo”. Teste com estas três opções .Crie
//também um default, que retornará uma mensagem de erro no console.

function fruta(a){
    switch(a){
    case 'maca':
        return 'Não vendemos esta fruta aqui'
    case 'kiwi':
        return 'Estamos com escassez de kiwis'
    case 'melancia':
        return 'Aqui está, são 3 reais o quilo'
    default:
        return 'erro no console'
    }
}

console.log(fruta('melancia'))

//Um homem decidiu ir à uma revenda comprar um carro. Ele deseja comprar um carro hatch, e a revenda
//possui, além de carros hatch, sedans, motocicletas e caminhonetes. Utilizando uma estrutura switch, caso o
//comprador queira o hatch, retorne: “Compra efetuada com sucesso”. Nas outras opções, retorne: “Tem certeza
//que não prefere este modelo?”. Caso seja especificado um modelo que não está disponível, retorne no console:
//“Não trabalhamos com este tipo de automóvel aqui”.

function comprarCarro(carro){
    switch(carro){
        case 'hatch':
            return 'Compra efetuada com sucesso'
        case 'sedans':
        case 'motocicletas':
        case 'caminhotes':
            return 'Tem certeza que nao prefere este modelo?'
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui'
    }
}

console.log(comprarCarro('sedans'))

//Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
//como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
//numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
//3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas

function calculadora1(a,b,c){
    switch(b){
        case '+':
            return a+c
        case '-':
            return a-c
        case '*':
            return a*c
        case '/':
            return a/c
        default:
            return ' operação invalida'

        
    }
}

console.log(calculadora1(1,'+',5))

//Um funcionário irá receber um aumento de acordo com o seu plano de
//trabalho, de acordo com a tabela abaixo:
//Plano Aumento
//A 10%
//B 15%
////C 20%
//Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
//novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

function aumento(plano,salario){
    switch(plano){
        case 'A':
            return (0.1*salario) + salario
        case 'B':
            return (0.2*salario) + salario
        case 'C':
            return (0.3*salario) + salario
        default:
            return 'Plano invalido'

    }
}

console.log(aumento('A',3000))

//Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
//switch. Crie um case default que escreva ‘Número fora do intervalo.’
function intervalos(numero){
    switch(numero){
        case 0:
            return 'zero'
        case 1:
            return 'Um'
        case 2:
            return 'dois'
        case 3:
            return ' tres'
        case 4:
            return 'quatro'
        case 5:
            return 'cinco'
        case 6:
            return 'seis'
        case 7:
            return 'sete'
        case 8:
            return 'oito'
        case 9:
            return 'nove'
        case 10:
            return 'dez'
        default:
            return ' numero fora do intervalo'
    }
}

console.log(intervalos(11))

//O cardápio de uma lanchonete é o seguinte:
//Código Descrição do Produto Preço
//100 Cachorro Quente R$ 3,00
//200 Hambúrguer Simples R$ 4,00
//300 Cheeseburguer R$ 5,50
//400 Bauru R$ 7,50
//500 Refrigerante R$ 3,50
//600 Suco R$ 2,80
///Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
//a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
//comando switch. Crie um caso default para produto não existente.

function cardapio(codigo,quantidade){
    switch(codigo){
        case 100:
            return `Custou R$${3*quantidade}`

        case 200:
            return `Custou R$${4*quantidade}`
        case 300:
            return `Custou R$${5.5*quantidade}`
        case 400:
            return `Custou R$${7.5*quantidade}`
        case 500:
            return `Custou R$${3.5*quantidade}`
        case 600:
            return `Custou R$${2.8*quantidade}`
        default:
            return 'Produto nao existente'
    }
}

console.log(cardapio(600,4))

//Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
//considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
//de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
//idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130

function calcularPreco (idade) {
    if(idade < 10){
        return 180
    } else if(idade < 30) {
        return 150
    } else if (idade < 60) {
        return 195
    } else {
        return 230
    }
}
console.log(calcularPreco(8));


//) Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
//parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
//anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5% de juros (sob o regime de juros
//compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.

function anuidade(mes,valor){
    if (mes >=1 && mes<=12){
        return (valor * (1 + 0.05) ** (mes-1)).toFixed(2) 
    }
    else{
        return 'invalido'
    }
    
}


console.log(anuidade(4,100))

//Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do
//aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do
//aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e
//"REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

function escola(codigo,nota1,nota2,nota3){
    let media = [nota1,nota2,nota3]
    media.sort((a,b) => a < b ? 1 : -1)
    let mediaFinal = (media[0] * 4 + media[1] * 3 + media[2] * 3)/10
    console.log(`Código do Aluno: ${codigo}. Notas: ${nota1}, ${nota2}, ${nota3}. ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`)
}

escola(100,5,5,5)

// Crie um programa que imprima 11 vezes a frase " Hello World!" utilizando uma estrutura de repetição while.

function hello(){
    let i = 0
    while (i < 11){        
        
        console.log(' hello world')
        i++
          
    }
}

hello()

// Escrever um programa para exibir os números de 1 até 50 na tela.

function exibir1a50(){
    let i = 1
    while (i <=50){
        console.log(i)
        i++
    }
}

exibir1a50()

