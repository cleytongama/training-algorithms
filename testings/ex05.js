const vetor = [1, 2, 3, 4, 4, 5]

const newVetor = vetor.filter((item, index, array) => array.indexOf(item) === index)

console.log(newVetor)