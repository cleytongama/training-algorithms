const numRotate = 3

const vetor = [1, 3, 4, 5, 8]

const lastIndex = vetor.length - 1


for (let index = 0; index < numRotate; index++) {
    vetor.unshift(vetor[lastIndex])
    vetor.pop()
}
console.log(vetor)