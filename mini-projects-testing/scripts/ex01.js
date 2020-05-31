const vetor = [1, 2, 3, 4, 5]

const soma = (acumulador, atual) => acumulador + atual

const somador = vetor.reduce(soma)

console.log(somador)