// Padrão de Projeto Strategy
const Frete = function () {
    this.tipoFrete = ""
}

Frete.prototype = {
    setStrategyFrete(tipo) {
        this.tipoFrete = tipo
    },
    calculateFrete(distancia) {
        return this.tipoFrete.calculateFrete(distancia)
    }
}

const Sedex = function () {
    const value = 5;
    this.calculateFrete = function (distancia) {
        return value * distancia;
    }
}
const Normal = function () {
    const value = 2;
    this.calculateFrete = function (distancia) {
        return value * distancia;
    }
}

const FreteInstancia = new Frete()
const freteSedex = new Sedex()
const freteNormal = new Normal()

FreteInstancia.setStrategyFrete(freteNormal)
console.log(`Com frete normal: ${FreteInstancia.calculateFrete(100)}`)

FreteInstancia.setStrategyFrete(freteSedex)
console.log(`Com frete sedex: ${FreteInstancia.calculateFrete(100)}`)

