const vetor = [1, 2, 3, 4, 5]
const first = 0
const last = vetor.length
const value = 3

function buscaBinaria(vetor, value) {

    while (first <= last) {
        const index = Math.floor((last + first) / 2)

        if (value < vetor[index]) {
            last = i - 1
        }

        if (value > vetor[index]) {
            first = i + 1
        }

        if (vetor[index] === value) {
            return { value, index }
        }
        return false
    }
}

function buscaBinariaRecursive(vetor, first, last, value) {

    if (first <= last) {
        const index = Math.floor((last + first) / 2)

        if (value < vetor[index]) {
            buscaBinariaRecursive(vetor, first, i - 1, value)
        }

        if (value > vetor[index]) {
            buscaBinariaRecursive(vetor, i + 1, last, value)
        }

        if (vetor[index] === value) {
            return { value, index }
        }
        return false
    }
}


console.log(buscaBinaria(vetor, value))
console.log(buscaBinariaRecursive(vetor, first, last, value))

