function calculoFrete(distancia) {
    return this.taxa * distancia
}

const Normal = {
    taxa: 5,
    calculoFrete
}

const Sedex = {
    taxa: 10,
    calculoFrete
}

const Instantaneo = {
    taxa: 20,
    calculoFrete
}

console.log(Normal.calculoFrete(10))
console.log(Sedex.calculoFrete(10))
console.log(Instantaneo.calculoFrete(10))

console.log("Usando bind")

const calNormal = calculoFrete.bind(Normal, [10])
const calSedex = calculoFrete.bind(Sedex, [10])
const calInstantaneo = calculoFrete.bind(Instantaneo, [10])

console.log(calNormal())
console.log(calSedex())
console.log(calInstantaneo())

const name = new Date()
console.log(typeof name)
console.log(name instanceof Date)

