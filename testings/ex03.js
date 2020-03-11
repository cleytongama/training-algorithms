const vetor = [1, 2, 3]

const somadorImpares = vetor
    .filter((number) => number % 2 !== 0)
    .reduce((acumulador, atual) => acumulador + atual)

console.log(somadorImpares)