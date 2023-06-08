class Lancamento {
    constructor(nome = 'Generico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
    
}

class CicloFinanceiro{
    constructor(mes,ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }
    addLancamentos(...lancamentos){
       lancamentos.forEach(i => this.lancamentos.push(i));
        
        
    }
    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(i => {
            valorConsolidado += i.valor
        })
        return valorConsolidado
    }
}



const salario = new Lancamento('Salario',45000)
const contaDeLuz = new Lancamento('luz', -500)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())